import{u as w,a as $,r as o,b as A,g as R,c as L,d as P,j as s,L as C,C as z,p as D}from"./index-BTlLWTAf.js";import{N as H,F as M}from"./Footer-CrEbKW1m.js";import{F as B,t as l,a as V}from"./translations-CKwKqdsB.js";import{P as W}from"./ProductCard-BCONRiC8.js";const G="_container_1cfq6_1",J="_whatsbtn_1cfq6_8",K="_float_1cfq6_1",O="_content_1cfq6_31",Q="_header_1cfq6_36",U="_headerText_1cfq6_58",X="_btn_1cfq6_81",Y="_about_1cfq6_101",Z="_aboutText_1cfq6_110",ee="_categories_1cfq6_137",se="_head_1cfq6_36",te="_catsContainer_1cfq6_155",ae="_itemsContainer_1cfq6_164",ce="_items_1cfq6_164",ne="_category_1cfq6_187",oe="_item_1cfq6_164",le="_icons_1cfq6_246",ie="_notActive_1cfq6_276",re="_notAct_1cfq6_276",_e="_mostRecent_1cfq6_301",me="_products_1cfq6_324",ue="_samples_1cfq6_330",de="_sampleText_1cfq6_340",he="_samplesContainer_1cfq6_364",fe="_sample_1cfq6_330",pe="_mid_1cfq6_391",xe="_services_1cfq6_413",ge="_serviceCards_1cfq6_430",ve="_serviceCard_1cfq6_430",je="_contact_1cfq6_462",Ce="_success_1cfq6_477",qe="_contactForm_1cfq6_495",a={container:G,whatsbtn:J,float:K,content:O,header:Q,headerText:U,btn:X,about:Y,aboutText:Z,categories:ee,head:se,catsContainer:te,itemsContainer:ae,items:ce,category:ne,item:oe,icons:le,notActive:ie,notAct:re,mostRecent:_e,products:me,samples:ue,sampleText:de,samplesContainer:he,sample:fe,mid:pe,services:xe,serviceCards:ge,serviceCard:ve,contact:je,success:Ce,contactForm:qe},ke=()=>{var v,j;const m=w(),{language:n}=$(),[d,q]=o.useState(null),[c,N]=o.useState(null),[h,y]=o.useState(null),{contactLoading:b,contactError:f}=A(e=>e.main),[t,r]=o.useState({fullname:"",email:"",phone:"",subject:"",message:""}),[T,p]=o.useState(!0),[u,x]=o.useState(!1),[k,S]=o.useState(0),[F,g]=o.useState(!0),I=()=>{m(D(t)).then(e=>{e!=null&&e.payload&&(r({fullname:"",email:"",phone:"",subject:"",message:""}),x(!0))})},E=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})};return o.useEffect(()=>{m(R()).then(e=>{var i;q((i=e==null?void 0:e.payload)==null?void 0:i.results)}),m(L()).then(e=>{y(e==null?void 0:e.payload)}),m(P()).then(e=>{N(e==null?void 0:e.payload)})},[]),o.useEffect(()=>{t.fullname&&t.email&&t.phone&&t.message?p(!1):p(!0)},[t]),o.useEffect(()=>{u&&setTimeout(()=>{x(!1)},5e3)},[u]),o.useEffect(()=>{const e=setInterval(()=>{g(!1),setTimeout(()=>{S(i=>{var _;return(i+1)%((_=c==null?void 0:c.images)==null?void 0:_.length)}),g(!0)},500)},4e3);return()=>clearInterval(e)},[c==null?void 0:c.images]),s.jsxs("section",{className:a.container,children:[s.jsx(H,{}),s.jsx(C,{to:"https://wa.me/972544860306",target:"_blank",className:a.whatsbtn,children:s.jsx(B,{})}),s.jsxs("div",{className:a.content,children:[s.jsx("div",{className:a.header,id:"header",style:{backgroundImage:`url(${(j=(v=c==null?void 0:c.images)==null?void 0:v[k])==null?void 0:j.image})`,backgroundSize:"cover",backgroundColor:"#000",backgroundPosition:"center",filter:F?"brightness(1)":"brightness(0.8)",transition:"filter 0.5s ease-in-out"},children:s.jsxs("div",{className:a.headerText,children:[s.jsx("h2",{children:c==null?void 0:c[`title_${n}`]}),s.jsx("p",{children:c==null?void 0:c[`description_${n}`]}),s.jsx("button",{className:a.btn,onClick:()=>E("contact"),children:l("startNow",n)})]})}),s.jsxs("div",{className:a.mostRecent,children:[s.jsx("div",{className:a.head,children:s.jsx("h2",{children:l("partners",n)})}),s.jsx("div",{className:a.itemsContainer,children:s.jsx("div",{className:a.items,children:d==null?void 0:d.map((e,i)=>s.jsxs(C,{to:e==null?void 0:e.slug,target:"_blank",className:a.category,children:[s.jsx("img",{src:e==null?void 0:e.image,alt:e==null?void 0:e.name}),s.jsx("p",{children:e==null?void 0:e[`name_${n}`]})]},i))})})]}),s.jsxs("div",{className:a.mostRecent,children:[s.jsx("div",{className:a.head,children:s.jsx("h2",{children:l("products",n)})}),s.jsx("div",{className:a.itemsContainer,children:s.jsx("div",{className:a.items,children:h==null?void 0:h.map((e,i)=>{var _;return s.jsx(W,{data:e,home:!0,blank:!0,to:`/${(_=e==null?void 0:e.shop)==null?void 0:_.slug}/product/${e==null?void 0:e.id}`})})})})]}),s.jsxs("div",{className:a.contact,id:"contact",children:[s.jsx("h3",{children:l("contact",n)}),u&&s.jsxs("div",{className:a.success,children:[s.jsx(V,{size:70,style:{color:"var(--purpleColor)"}}),s.jsx("p",{children:l("success",n)})]}),!u&&s.jsxs("div",{className:a.contactForm,children:[s.jsx("input",{type:"text",placeholder:l("fullname",n),value:t==null?void 0:t.fullname,onChange:e=>r({...t,fullname:e.target.value})}),s.jsx("input",{type:"email",placeholder:l("email",n),value:t==null?void 0:t.email,onChange:e=>r({...t,email:e.target.value})}),s.jsx("input",{type:"text",placeholder:l("phone",n),value:t==null?void 0:t.phone,onChange:e=>{/^\d*$/.test(e.target.value)&&r({...t,phone:e.target.value})}}),s.jsx("textarea",{name:"message",id:"message",placeholder:l("message",n),value:t==null?void 0:t.message,onChange:e=>r({...t,message:e.target.value})}),s.jsx("button",{disabled:T,onClick:I,children:b?s.jsx(z,{size:14,style:{color:"var(--purpleColor)"}}):l("send",n)}),f&&s.jsx("p",{className:"error",children:f})]})]})]}),s.jsx(M,{})]})};export{ke as default};
