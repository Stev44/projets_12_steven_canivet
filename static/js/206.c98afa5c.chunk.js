"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[206],{206:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});var t=n(763),i=n(3),a=n(892),c=n(43),l=n(910),r=n(929),o=n(579);const d=()=>{const e=(0,c.useRef)(null),s=(0,i.d4)((e=>e.switchLang.lang)),[n,d]=(0,c.useState)(!1),[m,h]=(0,c.useState)(0),[u,j]=(0,c.useState)([]),[x,p]=(0,c.useState)(0),[g,v]=(0,c.useState)(0),[_,N]=(0,c.useState)(""),[w,b]=(0,c.useState)(""),f=s=>{e.current&&!e.current.contains(s.target)&&(d(!1),h(0),j([]))};(0,c.useEffect)((()=>(n?(document.addEventListener("mousedown",f),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("mousedown",f),document.body.style.overflow="unset"})),[n]);const y=()=>{b("slide-out-right"),setTimeout((()=>{h((e=>0===e?u.length-1:e-1)),b(""),N("slide-in-left")}),100),N("")},k=()=>{b("slide-out-left"),setTimeout((()=>{h((e=>e===u.length-1?0:e+1)),b(""),N("slide-in-right")}),100),N("")};return(0,o.jsxs)("section",{className:"projects padding",id:"projects",children:[(0,o.jsxs)("div",{className:"projects_wrapper margin",children:[(0,o.jsx)("h2",{className:"underline",children:s?a.ot.projectsEn:a.ot.projectsFr}),(0,o.jsx)("div",{className:"wrapper",children:t.d.map(((e,n)=>(0,o.jsx)("div",{className:"map",children:(0,o.jsx)("div",{className:"card",children:(0,o.jsxs)("div",{className:"card_img",children:[(0,o.jsxs)("div",{className:"img",children:[(0,o.jsx)("img",{src:e.img,alt:e.altSection,loading:"lazy"}),(0,o.jsx)("span",{className:"img_title",children:e.title})]}),(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{className:"card_img_technologies",children:e.technologies.map(((e,s)=>(0,o.jsx)(e,{className:"icon"},s)))}),(0,o.jsx)("div",{className:"card_img_description",children:(0,o.jsx)("p",{children:s?e.descriptionEn:e.descriptionFr})}),(0,o.jsxs)("div",{className:"card_img_button",children:[e.code&&(0,o.jsx)("button",{children:(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:e.code,target:"_blank",rel:"noreferrer",children:s?e.codeTextEn:e.codeTextFr})})}),e.site&&(0,o.jsx)("button",{children:(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:e.site,target:"_blank",rel:"noreferrer",children:s?e.siteTextEn:e.siteTextFr})})}),e.images&&(0,o.jsx)("button",{onClick:()=>((e,s)=>{j(e),h(s),d(!0)})(e.images,0),children:(0,o.jsx)("p",{className:"preview",children:s?e.previewEn:e.previewFr})})]})]})]})})},n)))})]}),n&&(0,o.jsx)("div",{className:"modal",children:(0,o.jsxs)("div",{className:"modal_preview",ref:e,onTouchStart:e=>{p(e.targetTouches[0].clientX)},onTouchMove:e=>{v(e.targetTouches[0].clientX)},onTouchEnd:()=>{x-g>50&&k(),x-g<-50&&y()},children:[(0,o.jsxs)("div",{className:"modal_preview_container",children:[1!==u.length&&(0,o.jsxs)("button",{className:"modal_preview_container_button left",onClick:y,children:[(0,o.jsx)("span",{className:"sr-only",children:"Prev Button"}),(0,o.jsx)(l.g,{icon:r.Uec,className:"modal_preview_container_button_icon"})]}),(0,o.jsx)("img",{src:u[m],alt:`Slide ${m+1}`,className:`modal_preview_container_image ${_} ${w}`,loading:"lazy"}),1!==u.length&&(0,o.jsxs)("button",{className:"modal_preview_container_button right",onClick:k,children:[(0,o.jsx)("span",{className:"sr-only",children:"Next Button"}),(0,o.jsx)(l.g,{icon:r.vmR,className:"modal_preview_container_button_icon"})]}),(0,o.jsx)(l.g,{icon:r.Jyw,className:"modal_preview_container_close",onClick:()=>d(!1)})]}),1!==u.length&&(0,o.jsx)("div",{className:"radio_buttons",children:u.map(((e,s)=>(0,o.jsxs)("label",{className:m===s?"active":"",children:[(0,o.jsx)("input",{type:"radio",name:"slide",value:s,checked:m===s,onChange:()=>(e=>{h(e)})(s)}),(0,o.jsxs)("span",{className:"sr-only",children:["Image ",s+1]})]},s)))})]})})]})}}}]);
//# sourceMappingURL=206.c98afa5c.chunk.js.map