"use strict";(self.webpackChunkbod_website=self.webpackChunkbod_website||[]).push([[787],{4958:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});s(8225);var a=s(3372),l=s(5981),r=s(3146),n=s(9860);const i=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var c=s(6616),o=s(3822);const g={tag:"tag_Vt_P"};var u=s(7557);function h(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(c.A,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function d(t){let{tags:e}=t;const s=function(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,u.jsx)(h,{letterEntry:t},t.letter)))})}var j=s(1201);function x(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.be,{title:e}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function m(t){let{tags:e,title:s}=t;return(0,u.jsx)(l.e3,{className:(0,a.A)(r.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:s}),(0,u.jsx)(d,{tags:e})]})})})})}function p(t){const e=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{...t,title:e}),(0,u.jsx)(m,{...t,title:e})]})}},6616:(t,e,s)=>{s.d(e,{A:()=>i});s(8225);var a=s(3372),l=s(8568);const r={tag:"tag_gMZT",tagRegular:"tagRegular_QeIl",tagWithCount:"tagWithCount_hxw2"};var n=s(7557);function i(t){let{permalink:e,label:s,count:i,description:c}=t;return(0,n.jsxs)(l.A,{href:e,title:c,className:(0,a.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[s,i&&(0,n.jsx)("span",{children:i})]})}}}]);