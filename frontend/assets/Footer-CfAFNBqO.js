import{q as u,r as b,a as j,j as s,L as n}from"./index-Beph2O-y.js";import{G as _,o as k,t,h as x,p,f as v,d as N}from"./translations-CvLq72Ka.js";const C="_navbar_1him8_1",f="_container_1him8_10",y="_centered_1him8_19",F="_btn_1him8_24",L="_lang_1him8_39",w="_left_1him8_68",I="_toggle_1him8_73",M="_mobileNavbar_1him8_88",S="_head_1him8_102",T="_content_1him8_132",e={navbar:C,container:f,centered:y,btn:F,lang:L,left:w,toggle:I,mobileNavbar:M,head:S,content:T},m="/assets/logo-CB-a3rSW.png";function $(r){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(r)}const U=()=>{const{pathname:r}=u(),[d,c]=b.useState(!1),a=()=>{c(!d)},{language:o,changeLanguage:h}=j(),i=g=>{document.getElementById(g).scrollIntoView({behavior:"smooth"})};return d?s.jsxs("nav",{className:e.mobileNavbar,children:[s.jsxs("div",{className:e.head,children:[s.jsx("button",{onClick:()=>i("header"),children:s.jsx("img",{src:m,alt:"MyStore"})}),s.jsx("button",{className:e.toggle,onClick:a,children:s.jsx(k,{})})]}),s.jsxs("div",{className:e.content,children:[s.jsx("button",{onClick:()=>{i("header"),a()},to:"/",children:t("home",o)}),s.jsx("button",{onClick:()=>{i("about"),a()},to:"/about",children:t("about",o)}),s.jsx("button",{onClick:()=>{i("services"),a()},to:"/",children:t("services",o)}),s.jsx("button",{onClick:()=>{i("contact"),a()},to:"/",children:t("contact",o)}),o=="ar"?s.jsxs("button",{onClick:()=>{h("he"),a()},className:e.lang,children:[s.jsx(x,{}),"עברית"]}):s.jsxs("button",{onClick:()=>{h("ar"),a()},className:e.lang,children:[s.jsx(x,{}),"العربية"]})]})]}):s.jsx("nav",{className:e.navbar,children:s.jsxs("div",{className:e.container,children:[s.jsxs("div",{className:e.centered,children:[s.jsx(n,{to:"/",className:`${r=="/"?"text-[var(--purpleColor)]":"text-black"}`,children:t("home",o)}),s.jsx(n,{to:"/about",className:`${r=="/about"?"text-[var(--purpleColor)]":"text-black"}`,children:t("about",o)}),s.jsx(n,{to:"/partners",className:`${r==="/partners"?"text-[var(--purpleColor)]":"text-black"}`,children:t("partners",o)}),s.jsx(n,{to:"/products",className:`${r==="/products"?"text-[var(--purpleColor)]":"text-black"}`,children:t("products",o)}),o=="ar"?s.jsxs("button",{className:e.lang,onClick:()=>{h("he")},children:[s.jsx(x,{}),"עברית"]}):s.jsxs("button",{className:e.lang,onClick:()=>{h("ar")},children:[s.jsx(x,{}),"العربية"]}),s.jsx("button",{className:e.btn,onClick:()=>{i("contact")},children:t("contact",o)})]}),s.jsx("div",{className:e.left,children:s.jsx("button",{onClick:()=>{i("header")},children:s.jsx("img",{src:m,alt:"MyStore"})})}),s.jsx("button",{onClick:a,className:e.toggle,children:s.jsx($,{})})]})})},B="_footer_f9k9s_1",E="_footerContent_f9k9s_26",G="_links_f9k9s_35",R="_link_f9k9s_35",V="_copy_f9k9s_51",W="_socials_f9k9s_76",l={footer:B,footerContent:E,links:G,link:R,copy:V,socials:W},q="/assets/footerlogo-CpRaTUsB.png",z="/assets/hosarylogo-CglyLz-J.jpg",Y=()=>{let d=new Date().getFullYear();const{language:c}=j(),a=o=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})};return s.jsxs("footer",{className:l.footer,children:[s.jsxs("div",{className:l.footerContent,children:[s.jsx(n,{to:"/",children:s.jsx("img",{src:q,alt:"MyStore"})}),s.jsxs("div",{className:l.links,children:[s.jsxs("div",{className:l.link,children:[s.jsx("p",{children:t("homePages",c)}),s.jsx(n,{to:"/",onClick:()=>a("header"),children:t("home",c)}),s.jsx(n,{to:"/about",children:t("about",c)}),s.jsx(n,{to:"/about",onClick:()=>a("services"),children:t("services",c)})]}),s.jsxs("div",{className:l.link,children:[s.jsx("p",{children:t("contact",c)}),s.jsx("button",{onClick:()=>a("contact"),children:t("contact",c)})]}),s.jsxs("div",{className:l.link,children:[s.jsx("p",{children:t("terms",c)}),s.jsx(n,{to:"/",children:t("terms",c)})]})]})]}),s.jsxs("div",{className:l.copy,children:[s.jsxs("p",{children:["MyStore . ",t("allRights",c)," . © ",d]}),s.jsxs("div",{className:l.socials,children:[s.jsx(n,{to:"/",children:s.jsx(p,{})}),s.jsx(n,{to:"/",children:s.jsx(v,{})}),s.jsx(n,{to:"/",children:s.jsx(N,{})})]}),s.jsx(n,{to:"https://www.hosary.tech/",children:s.jsx("img",{src:z,target:"_blank",alt:"hosary tech"})})]})]})};export{Y as F,U as N};
