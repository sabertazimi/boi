"use strict";(self.webpackChunkbod_website=self.webpackChunkbod_website||[]).push([[139],{972:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>n});var i=s(8225);const a={},r=i.createContext(a);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:t},e.children)}},7492:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"webpack-template","title":"Webpack Template","description":"Author","source":"@site/../docs/webpack-template.md","sourceDirName":".","slug":"/webpack-template","permalink":"/bod/docs/webpack-template","draft":false,"unlisted":false,"editUrl":"https://github.com/sabertazimi/bod/edit/main/website/../docs/webpack-template.md","tags":[{"inline":true,"label":"React","permalink":"/bod/docs/tags/react"},{"inline":true,"label":"Webpack","permalink":"/bod/docs/tags/webpack"},{"inline":true,"label":"Template","permalink":"/bod/docs/tags/template"}],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1733670789000,"sidebarPosition":4,"frontMatter":{"author":"Sabertazimi","authorTitle":"Web Developer","authorURL":"https://github.com/sabertazimi","authorImageURL":"https://github.com/sabertazimi.png","sidebar_label":"Webpack Template","sidebar_position":4,"tags":["React","Webpack","Template"]},"sidebar":"tutorialSidebar","previous":{"title":"Bod Template (Recommended)","permalink":"/bod/docs/cra-template-bod"},"next":{"title":"Bod Scripts","permalink":"/bod/docs/react-scripts"}}');var a=s(7557),r=s(972);const l={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",sidebar_label:"Webpack Template",sidebar_position:4,tags:["React","Webpack","Template"]},n="Webpack Template",o={},c=[{value:"Installation",id:"installation",level:2},{value:"CLI Tool",id:"cli-tool",level:2},{value:"Features",id:"features",level:2},{value:"React Support",id:"react-support",level:2},{value:"Sass Support",id:"sass-support",level:2},{value:"Contact",id:"contact",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"webpack-template",children:"Webpack Template"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge",alt:"Author"})}),"\n",(0,a.jsx)(t.a,{href:"https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge",alt:"LICENSE"})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi/bod/actions/workflows/ci.yml",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github",alt:"CI"})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Minimal wbepack boilerplate."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i\nnpm start\n"})}),"\n",(0,a.jsx)(t.h2,{id:"cli-tool",children:"CLI Tool"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx bod create <appName>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["More ",(0,a.jsx)(t.strong,{children:"CLI tool"})," information\non repo ",(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi/bod",children:"Bod"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"TypeScript"})," ready. Robust type checking."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Babel"})," transpile support."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Webpack"})," for hot reload development and dedicated building work\nwith bundle analysis and elegant progressbar."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Jest"})," and ",(0,a.jsx)(t.code,{children:"Testing Library"})," for robust unit tests and detailed coverage report."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"PostCSS"})," for CSS auto-prefixer support."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"ESLint"})," with TypeScript parser for TypeScript style check."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"StyleLint"})," with custom rules for CSS style check."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Prettier"})," for format TypeScript and CSS code elegantly."]}),"\n",(0,a.jsxs)(t.li,{children:["Convenient version release with ",(0,a.jsx)(t.code,{children:"Standard Version"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"react-support",children:"React Support"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i react react-dom\nnpm i -D @types/react @types/react-dom\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i -D @testing-library/react @testing-library/react-hooks\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sass-support",children:"Sass Support"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i -D sass @types/sass\n"})}),"\n",(0,a.jsx)(t.h2,{id:"contact",children:"Contact"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"mailto:sabertazimi@gmail.com",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white",alt:"Email"})}),"\n",(0,a.jsx)(t.a,{href:"https://twitter.com/sabertazimi",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white",alt:"Twitter"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/sabertazimi",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);