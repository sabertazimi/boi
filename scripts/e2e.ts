import fs from 'fs';
import path from 'path';
import * as utils from './utils';

class Test {
  appName: string;
  cwd: string;
  rootPath: string;
  appPath: string;
  packagesPath: string;
  originalRegistry: string;
  localPort: number;
  localRegistry: string;
  localRegistryConfigPath: string;
  localRegistryLogPath: string;

  constructor(appName: string) {
    utils.info(`Working in directory ${process.cwd()}.`);
    this.appName = appName;
    this.cwd = process.cwd();
    this.rootPath = path.join(__dirname, '..');
    this.appPath = path.join(this.rootPath, this.appName);
    this.packagesPath = path.join(this.rootPath, 'packages');
    this.originalRegistry = utils
      .execPipe('npm config get registry')
      .toString()
      .replace(/\n$/, '');
    this.localPort = 4873;
    this.localRegistry = `http://localhost:${this.localPort}`;
    this.localRegistryConfigPath = path.join(
      this.rootPath,
      'scripts/verdaccio.yaml'
    );
    this.localRegistryLogPath = path.join(this.rootPath, 'registry.log');
  }

  startLocalRegistry() {
    utils.info('Start verdaccio server ...');
    utils.exec(
      `nohup npx verdaccio -c ${this.localRegistryConfigPath} &>${this.localRegistryLogPath} &`
    );
    utils.exec(
      `grep -q 'http address' <(tail -f ${this.localRegistryLogPath})`
    );
    utils.exec(`npm config set registry "${this.localRegistry}"`);
  }

  stopLocalRegistry() {
    const localRegistryNpmrcPath = path.join(this.rootPath, '.npmrc');
    const localRegistryAuthStorage = path.join(
      this.rootPath,
      'scripts/htpasswd'
    );
    const localRegistryBundleStorage = path.join(
      this.rootPath,
      'scripts/storage'
    );
    const localRegistryMetaStorage = path.join(this.rootPath, 'storage');

    utils.info('Clear local registry ...');
    utils.exec(`npm config set registry "${this.originalRegistry}"`);
    utils.exec(`kill -9 $(lsof -t -i:${this.localPort}) || true`);
    utils.exec(`rm -fr ${localRegistryNpmrcPath}`);
    utils.exec(`rm -fr ${localRegistryAuthStorage}`);
    utils.exec(`rm -fr ${localRegistryBundleStorage}`);
    utils.exec(`rm -fr ${localRegistryMetaStorage}`);
  }

  publishToLocalRegistry() {
    utils.info('Build monorepo (bod CLI, react-scripts and templates) ...');
    utils.exec('git clean -df');
    utils.exec('npm run build');
    utils.info(`Publish packages to ${this.localRegistry} ...`);
    const packages = utils
      .execPipe(
        'npx lerna publish prerelease --dist-tag latest --force-publish --no-changelog --no-commit-hooks --no-git-tag-version --no-push --ignore-scripts --yes'
      )
      .toString()
      .replace(/\s+-/g, `\n    ${utils.chalk.bgBlue.black('[+]')}`) // `[+] package@version` format
      .replace(/\n$/, ''); // remove tailing empty line
    utils.log(packages);
  }

  cleanUp() {
    utils.info('Cleaning up ...');
    this.stopLocalRegistry();
    utils.exec(`rm -fr ${this.appPath}`);
    utils.exec(
      'git restore lerna.json package.json package-lock.json packages/*'
    );
  }

  handleSetup() {
    process.on('SIGHUP', this.handleExit.bind(this));
    process.on('SIGINT', this.handleExit.bind(this));
    process.on('SIGQUIT', this.handleExit.bind(this));
    process.on('SIGTERM', this.handleExit.bind(this));
    process.on('uncaughtException', this.handleError.bind(this));
  }

  handleExit() {
    this.cleanUp();
    utils.success('E2E testing completed.');
    process.exit(0);
  }

  handleError(error: Error) {
    utils.error('An error was encountered while executing');
    utils.error(error);
    this.cleanUp();
    utils.error('Exiting with error.');
    process.exit(1);
  }

  runCRA(templatePath: string, scriptsPath: string) {
    utils.info('Run create-react-app to generate project ...');
    utils.exec(`rm -fr ${this.appPath}`);
    utils.exec(
      `npx create-react-app ${this.appName} --template ${templatePath} --scripts-version ${scriptsPath}`,
      this.rootPath
    );
  }

  exists(filePath: string) {
    return fs.existsSync(path.join(this.appPath, filePath));
  }

  checkJsxTemplateIntegrity() {
    utils.info('Checking template integrity ...');

    const templateAssets =
      this.exists('node_modules/@sabertazimi/react-scripts') &&
      this.exists('src/index.js') &&
      this.exists('public/index.html');

    if (!templateAssets) {
      this.handleError(Error('CRA template not installed correctly.'));
    }
  }

  checkTsxTemplateIntegrity() {
    utils.info('Checking template integrity ...');

    const templateAssets =
      this.exists('node_modules/@sabertazimi/react-scripts') &&
      this.exists('node_modules/typescript') &&
      this.exists('tsconfig.json') &&
      this.exists('src/index.tsx') &&
      this.exists('public/index.html') &&
      this.exists('src/react-app-env.d.ts');

    if (!templateAssets) {
      this.handleError(Error('CRA template not installed correctly.'));
    }
  }

  runBuildScript(templatePath: string) {
    utils.info('Start testing for `react-scripts build` ...');
    utils.exec('npm run build', this.appPath);

    const buildAssets = this.exists('build');

    if (!buildAssets) {
      this.handleError(Error('CRA `react-scripts build` failed.'));
    }

    utils.exec(`rm -fr build/${templatePath}`, this.rootPath);
    utils.exec(`mkdir -p build/${templatePath}`, this.rootPath);
    utils.exec(
      `cp -fr ${this.appPath}/build/* build/${templatePath}`,
      this.rootPath
    );
  }

  runTestScript() {
    utils.info('Start testing for `react-scripts test` ...');
    utils.exec('CI=true npm run test', this.appPath);
  }

  runStartScript() {
    utils.info('Start testing for `react-scripts start` ...');
    utils.exec('npm start -- --smoke-test', this.appPath);
  }

  runTest(
    templatePath: string,
    scriptsPath: string,
    checkTemplateIntegrity: () => void
  ) {
    this.runCRA(templatePath, scriptsPath);
    checkTemplateIntegrity();
    this.runBuildScript(templatePath);
    this.runTestScript();
    this.runStartScript();
  }

  run() {
    this.handleSetup();
    utils.checkGitStatus();
    this.startLocalRegistry();
    this.publishToLocalRegistry();
    this.runTest(
      'bod',
      '@sabertazimi/react-scripts',
      this.checkTsxTemplateIntegrity.bind(this)
    );
    if (utils.isCI) {
      this.runTest(
        '@sabertazimi',
        '@sabertazimi/react-scripts',
        this.checkJsxTemplateIntegrity.bind(this)
      );
      this.runTest(
        '@sabertazimi/typescript',
        '@sabertazimi/react-scripts',
        this.checkTsxTemplateIntegrity.bind(this)
      );
    }
    this.handleExit();
  }
}

const main = () => {
  const appName = 'app';
  const test = new Test(appName);
  test.run();
};

main();
