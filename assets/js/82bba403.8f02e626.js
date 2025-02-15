"use strict";(self.webpackChunkbod_website=self.webpackChunkbod_website||[]).push([[773],{972:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>r});var o=i(8225);const a={},s=o.createContext(a);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(s.Provider,{value:t},e.children)}},3922:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"bod","title":"Bod CLI","description":"Author","source":"@site/../docs/bod.md","sourceDirName":".","slug":"/bod","permalink":"/bod/docs/bod","draft":false,"unlisted":false,"editUrl":"https://github.com/sabertazimi/bod/edit/main/website/../docs/bod.md","tags":[{"inline":true,"label":"CLI","permalink":"/bod/docs/tags/cli"}],"version":"current","lastUpdatedBy":"sabertazimi","lastUpdatedAt":1703932330000,"sidebarPosition":2,"frontMatter":{"author":"Sabertazimi","authorTitle":"Web Developer","authorURL":"https://github.com/sabertazimi","authorImageURL":"https://github.com/sabertazimi.png","sidebar_label":"Bod CLI","sidebar_position":2,"tags":["CLI"]},"sidebar":"tutorialSidebar","previous":{"title":"Bod","permalink":"/bod/docs/intro"},"next":{"title":"Bod Template (Recommended)","permalink":"/bod/docs/cra-template-bod"}}');var a=i(7557),s=i(972);const n={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",sidebar_label:"Bod CLI",sidebar_position:2,tags:["CLI"]},r="Bod CLI",d={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>bod create</code>",id:"bod-create",level:3},{value:"<code>bod info</code>",id:"bod-info",level:3},{value:"Contact",id:"contact",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"bod-cli",children:"Bod CLI"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge",alt:"Author"})}),"\n",(0,a.jsx)(t.a,{href:"https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge",alt:"LICENSE"})})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/bod",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/node/v/bod?logo=node.js&style=for-the-badge",alt:"Node Version"})}),"\n",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/bod",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/bod?logo=npm&style=for-the-badge",alt:"NPM Version"})}),"\n",(0,a.jsx)(t.a,{href:"https://cdn.jsdelivr.net/npm/bod@latest/",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/bod?label=CDN&logo=cloudflare&style=for-the-badge",alt:"CDN"})})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi/bod/actions/workflows/ci.yml",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github",alt:"CI"})}),"\n",(0,a.jsx)(t.a,{href:"https://codecov.io/gh/sabertazimi/bod",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge",alt:"Jest Coverage"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi/bod/actions/workflows/ci.yml",children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontents.com/sabertazimi/bod/gh-pages/coverage-lines.svg",alt:"Jest Coverage"})})]}),"\n",(0,a.jsx)(t.p,{children:"Boilerplate CLI App - Create a new project powered by Create React App and @sabertazimi/react-scripts."}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Global installation\nnpm i -g bod\n\n# Local installation\nnpm i -D bod\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bod create <appName>\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Usage: bod <command> [options]\n\nOptions:\n  -v, --version     output the version number\n  -h, --help        display help for command\n\nCommands:\n  create|c <appName>  Create a new project powered by @sabertazimi/react-scripts\n  info|i              Print debugging information about your environment\n  help [command]      display help for command\n\n\u2139   Run bod <command> --help for detailed usage of given command.\n"})}),"\n",(0,a.jsx)(t.h3,{id:"bod-create",children:(0,a.jsx)(t.code,{children:"bod create"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Usage: create|c [options] <appName>\n\ncreate a new project powered by @sabertazimi/react-scripts\n\nOptions:\n  -h, --help  display help for command\n"})}),"\n",(0,a.jsx)(t.h3,{id:"bod-info",children:(0,a.jsx)(t.code,{children:"bod info"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Usage: info|i [options]\n\nprint debugging information about your environment\n\nOptions:\n  -h, --help  display help for command\n"})}),"\n",(0,a.jsx)(t.h2,{id:"contact",children:"Contact"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"mailto:sabertazimi@gmail.com",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white",alt:"Email"})}),"\n",(0,a.jsx)(t.a,{href:"https://twitter.com/sabertazimi",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white",alt:"Twitter"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub"})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);