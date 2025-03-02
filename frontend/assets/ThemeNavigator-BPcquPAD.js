import{r as C,e as Ft,f as kt,s as Tt,_ as ce,h as xt,i as Ot,k as Lt,j as l,l as Rt,m as Bt,a as H,L as B,u as de,n as K,o as Pt,q as Z,t as fe,v as Dt,E as Vt,w as qt,x,y as Xt,z as ve,A as Yt,B as pe,b as Le,D as yt,C as Re,F as Ut,G as Ht,H as Wt}from"./index-BTlLWTAf.js";import{g as Ce,S as bt,a as vt,M as Gt,P as ue,b as Zt,c as Qt}from"./ProductCard-BCONRiC8.js";import{G as Be,b as ge,c as _e,d as me,e as xe,f as ye,g as Q,h as we,t as O,I as Kt,i as Jt,j as es,k as Ye,l as ts,m as ss,n as rs}from"./translations-CKwKqdsB.js";function je(t,e){var s,r;return C.isValidElement(t)&&e.indexOf((s=t.type.muiName)!=null?s:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}const ns=C.createContext(void 0);function Ue(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function He(t,e=!1){return t&&(Ue(t.value)&&t.value!==""||e&&Ue(t.defaultValue)&&t.defaultValue!=="")}function is(t){return t.startAdornment}function os(t){return Ft("MuiFormControl",t)}kt("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const as=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],ls=t=>{const{classes:e,margin:s,fullWidth:r}=t,n={root:["root",s!=="none"&&`margin${xt(s)}`,r&&"fullWidth"]};return Bt(n,os,e)},cs=Tt("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:t},e)=>ce({},e.root,e[`margin${xt(t.margin)}`],t.fullWidth&&e.fullWidth)})(({ownerState:t})=>ce({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},t.margin==="normal"&&{marginTop:16,marginBottom:8},t.margin==="dense"&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})),hs=C.forwardRef(function(e,s){const r=Ot({props:e,name:"MuiFormControl"}),{children:n,className:i,color:o="primary",component:c="div",disabled:a=!1,error:d=!1,focused:h,fullWidth:p=!1,hiddenLabel:u=!1,margin:f="none",required:g=!1,size:_="medium",variant:m="outlined"}=r,y=Lt(r,as),w=ce({},r,{color:o,component:c,disabled:a,error:d,fullWidth:p,hiddenLabel:u,margin:f,required:g,size:_,variant:m}),b=ls(w),[v,E]=C.useState(()=>{let z=!1;return n&&C.Children.forEach(n,M=>{if(!je(M,["Input","Select"]))return;const R=je(M,["Select"])?M.props.input:M;R&&is(R.props)&&(z=!0)}),z}),[$,A]=C.useState(()=>{let z=!1;return n&&C.Children.forEach(n,M=>{je(M,["Input","Select"])&&(He(M.props,!0)||He(M.props.inputProps,!0))&&(z=!0)}),z}),[I,N]=C.useState(!1);a&&I&&N(!1);const S=h!==void 0&&!a?h:I;let k;const j=C.useMemo(()=>({adornedStart:v,setAdornedStart:E,color:o,disabled:a,error:d,filled:$,focused:S,fullWidth:p,hiddenLabel:u,size:_,onBlur:()=>{N(!1)},onEmpty:()=>{A(!1)},onFilled:()=>{A(!0)},onFocus:()=>{N(!0)},registerEffect:k,required:g,variant:m}),[v,o,a,d,$,S,p,u,k,g,_,m]);return l.jsx(ns.Provider,{value:j,children:l.jsx(cs,ce({as:c,ownerState:w,className:Rt(b.root,i),ref:s},y,{children:n}))})});function Pe(t){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"},child:[]}]})(t)}function ds(t){return Be({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"},child:[]}]})(t)}const fs={},ps="_header_owfke_1",us="_language_owfke_10",gs="_modal_owfke_16",_s="_modalContent_owfke_28",ms="_headerTop_owfke_67",xs="_logo_owfke_76",ys="_headerPhoto_owfke_87",bs="_headerBottom_owfke_101",vs="_headerText_owfke_109",Cs="_workinghours_owfke_123",ws="_social_owfke_137",js="_lang_owfke_10",D={header:ps,language:us,modal:gs,modalContent:_s,headerTop:ms,logo:xs,headerPhoto:ys,headerBottom:bs,headerText:vs,workinghours:Cs,social:ws,lang:js};function Ms(t){let{swiper:e,extendParams:s,on:r,emit:n,params:i}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,c,a=i&&i.autoplay?i.autoplay.delay:3e3,d=i&&i.autoplay?i.autoplay.delay:3e3,h,p=new Date().getTime(),u,f,g,_,m,y,w;function b(F){!e||e.destroyed||!e.wrapperEl||F.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",b),!(w||F.detail&&F.detail.bySwiperTouchMove)&&S())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(d=h,u=!1);const F=e.autoplay.paused?h:p+d-new Date().getTime();e.autoplay.timeLeft=F,n("autoplayTimeLeft",F,F/a),c=requestAnimationFrame(()=>{v()})},E=()=>{let F;return e.virtual&&e.params.virtual.enabled?F=e.slides.filter(P=>P.classList.contains("swiper-slide-active"))[0]:F=e.slides[e.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},$=F=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(c),v();let X=typeof F>"u"?e.params.autoplay.delay:F;a=e.params.autoplay.delay,d=e.params.autoplay.delay;const P=E();!Number.isNaN(P)&&P>0&&typeof F>"u"&&(X=P,a=P,d=P),h=X;const J=e.params.speed,Xe=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(J,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,J,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(J,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,J,!0,!0),n("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{$()})))};return X>0?(clearTimeout(o),o=setTimeout(()=>{Xe()},X)):requestAnimationFrame(()=>{Xe()}),X},A=()=>{p=new Date().getTime(),e.autoplay.running=!0,$(),n("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(c),n("autoplayStop")},N=(F,X)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),F||(y=!0);const P=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",b):S()};if(e.autoplay.paused=!0,X){m&&(h=e.params.autoplay.delay),m=!1,P();return}h=(h||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&h<0&&!e.params.loop)&&(h<0&&(h=0),P())},S=()=>{e.isEnd&&h<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),y?(y=!1,$(h)):$(),e.autoplay.paused=!1,n("autoplayResume"))},k=()=>{if(e.destroyed||!e.autoplay.running)return;const F=Ce();F.visibilityState==="hidden"&&(y=!0,N(!0)),F.visibilityState==="visible"&&S()},j=F=>{F.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&N(!0))},z=F=>{F.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&S())},M=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",j),e.el.addEventListener("pointerleave",z))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",j),e.el.removeEventListener("pointerleave",z))},At=()=>{Ce().addEventListener("visibilitychange",k)},It=()=>{Ce().removeEventListener("visibilitychange",k)};r("init",()=>{e.params.autoplay.enabled&&(M(),At(),A())}),r("destroy",()=>{R(),It(),e.autoplay.running&&I()}),r("_freeModeStaticRelease",()=>{(g||y)&&S()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():N(!0,!0)}),r("beforeTransitionStart",(F,X,P)=>{e.destroyed||!e.autoplay.running||(P||!e.params.autoplay.disableOnInteraction?N(!0,!0):I())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}f=!0,g=!1,y=!1,_=setTimeout(()=>{y=!0,g=!0,N(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(_),clearTimeout(o),e.params.autoplay.disableOnInteraction){g=!1,f=!1;return}g&&e.params.cssMode&&S(),g=!1,f=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(m=!0)}),Object.assign(e.autoplay,{start:A,stop:I,pause:N,resume:S})}const $s=({data:t})=>{var r,n;const{language:e,changeLanguage:s}=H();return l.jsxs("section",{className:D.header,children:[l.jsxs("div",{className:D.headerTop,style:{borderColor:t!=null&&t.border_color?t==null?void 0:t.border_color:"#7FB23C"},children:[l.jsx("div",{className:D.headerPhoto,children:l.jsx(bt,{spaceBetween:0,slidesPerView:1,modules:[Ms],loop:!0,direction:"vertical",autoplay:{delay:3e3,disableOnInteraction:!1},children:(r=t==null?void 0:t.header_images)==null?void 0:r.map((i,o)=>l.jsx(vt,{children:l.jsx("img",{className:D.image,src:i==null?void 0:i.image,alt:o})},o))})}),l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",className:D.logo,style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#7FB23C"}`},alt:"logo"})]}),l.jsx("div",{className:D.headerBottom,children:l.jsxs("div",{className:D.headerText,children:[l.jsx("h3",{children:t==null?void 0:t[`name_${e}`]}),l.jsx("div",{className:D.social,children:(n=t==null?void 0:t.social_media_links)==null?void 0:n.map(i=>l.jsxs(B,{to:(i==null?void 0:i.platform)=="phone_number_1"?`tel:${i==null?void 0:i.url}`:i==null?void 0:i.url,onMouseOver:o=>o.target.style.color=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:o=>o.target.style.color="#000",target:"_blank",children:[(i==null?void 0:i.platform)=="facebook"&&l.jsx(ge,{}),(i==null?void 0:i.platform)=="youtube"&&l.jsx(_e,{}),(i==null?void 0:i.platform)=="tiktok"&&l.jsx(me,{}),(i==null?void 0:i.platform)=="pinterest"&&l.jsx(xe,{}),(i==null?void 0:i.platform)=="instagram"&&l.jsx(ye,{}),(i==null?void 0:i.platform)=="phone_number_1"&&l.jsx(Q,{}),(i==null?void 0:i.platform)=="phone_number_2"&&l.jsx(Q,{}),!(i!=null&&i.platform)&&l.jsx(we,{})]},i==null?void 0:i.id))})]})}),l.jsx("div",{className:D.language,children:l.jsx(hs,{sx:{minWidth:110},children:e=="ar"?l.jsxs("button",{onClick:()=>{s("he")},className:D.lang,children:[l.jsx(we,{}),"עברית"]}):l.jsxs("button",{onClick:()=>{s("ar")},className:D.lang,children:[l.jsx(we,{}),"العربية"]})})})]})},Es="_container_1yp4k_1",Ss="_orderNow_1yp4k_8",zs="_float_1yp4k_1",Ns="_categories_1yp4k_39",As="_item_1yp4k_49",Is="_itemsContainer_1yp4k_71",Fs="_items_1yp4k_71",ks="_icons_1yp4k_109",Ts="_notActive_1yp4k_139",Os="_notAct_1yp4k_139",Ls="_copy_1yp4k_164",W={container:Es,orderNow:Ss,float:zs,categories:Ns,item:As,itemsContainer:Is,items:Fs,icons:ks,notActive:Ts,notAct:Os,copy:Ls},Rs="_modal_y03aj_1",Bs="_fadeIn_y03aj_1",Ps="_modalContent_y03aj_17",Ds="_slideOut_y03aj_1",Vs="_close_y03aj_33",qs="_modalText_y03aj_57",Xs="_tags_y03aj_69",Ys="_extras_y03aj_80",Us="_extrasContent_y03aj_94",Hs="_slideIn_y03aj_1",Ws="_item_y03aj_97",q={modal:Rs,fadeIn:Bs,modalContent:Ps,"slide-out":"_slide-out_y03aj_30",slideOut:Ds,close:Vs,modalText:qs,tags:Xs,extras:Ys,extrasContent:Us,slideIn:Hs,item:Ws},Gs=({item:t,showModal:e,setShowModal:s,mainData:r})=>{var a,d;const{language:n}=H(),[i,o]=C.useState(!1),c=h=>{h.target.classList.contains(q.modal)&&(s(!1),o(!1))};if(e)return l.jsx("div",{className:q.modal,onClick:c,children:l.jsxs("div",{className:q.modalContent,children:[l.jsx("button",{style:{backgroundColor:r!=null&&r.primary_color?r==null?void 0:r.primary_color:"#7FB23C"},className:q.close,onClick:()=>s(!1),children:l.jsx(Gt,{})}),l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",alt:"example"}),l.jsxs("div",{className:q.modalText,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("h4",{children:t==null?void 0:t[`name_${n}`]}),l.jsx("div",{className:q.tags,children:(t==null?void 0:t.types)&&((a=t==null?void 0:t.types)==null?void 0:a.map((h,p)=>l.jsx("div",{className:q.tag,children:l.jsx("img",{title:h==null?void 0:h[`name_${n}`],src:h==null?void 0:h.icon})},p)))})]}),l.jsx("p",{children:t==null?void 0:t[`description_${n}`]}),l.jsxs("p",{children:[O("price",n)," : ",l.jsxs("span",{style:{color:r!=null&&r.primary_color?r==null?void 0:r.primary_color:"#7FB23C",fontWeight:"bold"},children:[t==null?void 0:t.price,"₪"]})]}),l.jsxs("div",{className:q.extras,children:[l.jsxs("button",{onClick:()=>o(!i),children:[O("extras",n)," ",l.jsx(Kt,{style:{transform:i&&"rotate(180deg)",transition:"all 250ms ease-in-out"}})]}),i&&l.jsx("div",{className:q.extrasContent,children:(d=t==null?void 0:t.variants)==null?void 0:d.map((h,p)=>l.jsxs("div",{className:q.item,children:[l.jsx("p",{children:h==null?void 0:h[`name_${n}`]}),l.jsxs("p",{children:[O("price",n)," : ",l.jsxs("span",{style:{color:r!=null&&r.primary_color?r==null?void 0:r.primary_color:"#7FB23C"},children:[h==null?void 0:h.price,"₪"]})]})]},p))})]})]})]})})},re=new Date().getFullYear();function Ie(t){t!=null&&t.startsWith("#")&&(t=t==null?void 0:t.substring(1)),t.length===3&&(t=t.split("").map(i=>i+i).join(""));const e=parseInt(t.substring(0,2),16),s=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16);return(e*299+s*587+r*114)/1e3<128}const Zs=({mainData:t,categories:e})=>{const{language:s}=H(),[r,n]=C.useState(!1),[i,o]=C.useState(null),c=a=>{document.getElementById(a).scrollIntoView({behavior:"smooth"})};return C.useEffect(()=>{r?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[r]),l.jsxs("section",{className:W.container,children:[l.jsx(Gs,{item:i,mainData:t,showModal:r,setShowModal:n}),l.jsx("div",{className:W.categories,children:e==null?void 0:e.map((a,d)=>{if(a!=null&&a.is_active)return l.jsxs("div",{className:W.item,onClick:()=>c(a==null?void 0:a.id),children:[l.jsx("img",{src:a!=null&&a.image?a==null?void 0:a.image:"https://via.placeholder.com/150",alt:d}),l.jsx("p",{children:a==null?void 0:a[`name_${s}`]})]},d)})}),e==null?void 0:e.map((a,d)=>{var h;return l.jsxs("div",{className:W.itemsContainer,id:a==null?void 0:a.id,children:[l.jsx("h3",{children:a==null?void 0:a[`name_${s}`]}),l.jsx("div",{className:W.items,children:(h=a==null?void 0:a.products)==null?void 0:h.map((p,u)=>{var f;return l.jsx(ue,{data:p,brandInfo:t,color:t==null?void 0:t.primary_color,to:`/${(f=p==null?void 0:p.shop)==null?void 0:f.slug}/product/${p==null?void 0:p.id}`})})})]},a==null?void 0:a.id)}),l.jsxs("div",{className:W.copy,children:[l.jsxs("p",{children:[O("rights",s)," © ",re]}),l.jsx(B,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[O("allRights",s),"."]})]})]})},Qs="_outer_n2nsl_1",Ks="_container_n2nsl_8",Js="_row_n2nsl_29",er="_rowlogo_n2nsl_35",tr="_brand_n2nsl_44",sr="_content_n2nsl_63",rr="_sale_n2nsl_70",nr="_name_n2nsl_80",ir="_desc_n2nsl_84",or="_colors_n2nsl_88",ar="_sizes_n2nsl_97",lr="_price_n2nsl_110",cr="_status_n2nsl_147",hr="_gallery_n2nsl_157",dr="_left_n2nsl_166",fr="_right_n2nsl_178",L={outer:Qs,container:Ks,row:Js,rowlogo:er,brand:tr,content:sr,sale:rr,name:nr,desc:ir,colors:or,sizes:ar,price:lr,status:cr,gallery:hr,left:dr,right:fr};function te(t){let e=t[0],s=t[1],r=t[2];return Math.sqrt(e*e+s*s+r*r)}function Fe(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function pr(t,e,s,r){return t[0]=e,t[1]=s,t[2]=r,t}function We(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t}function Ge(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t}function ur(t,e,s){return t[0]=e[0]*s[0],t[1]=e[1]*s[1],t[2]=e[2]*s[2],t}function gr(t,e,s){return t[0]=e[0]/s[0],t[1]=e[1]/s[1],t[2]=e[2]/s[2],t}function Me(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function _r(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(s*s+r*r+n*n)}function mr(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return s*s+r*r+n*n}function Ze(t){let e=t[0],s=t[1],r=t[2];return e*e+s*s+r*r}function xr(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function yr(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function ke(t,e){let s=e[0],r=e[1],n=e[2],i=s*s+r*r+n*n;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function Ct(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Qe(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[0],c=s[1],a=s[2];return t[0]=n*a-i*c,t[1]=i*o-r*a,t[2]=r*c-n*o,t}function br(t,e,s,r){let n=e[0],i=e[1],o=e[2];return t[0]=n+r*(s[0]-n),t[1]=i+r*(s[1]-i),t[2]=o+r*(s[2]-o),t}function vr(t,e,s,r,n){const i=Math.exp(-r*n);let o=e[0],c=e[1],a=e[2];return t[0]=s[0]+(o-s[0])*i,t[1]=s[1]+(c-s[1])*i,t[2]=s[2]+(a-s[2])*i,t}function Cr(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[3]*r+s[7]*n+s[11]*i+s[15];return o=o||1,t[0]=(s[0]*r+s[4]*n+s[8]*i+s[12])/o,t[1]=(s[1]*r+s[5]*n+s[9]*i+s[13])/o,t[2]=(s[2]*r+s[6]*n+s[10]*i+s[14])/o,t}function wr(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[3]*r+s[7]*n+s[11]*i+s[15];return o=o||1,t[0]=(s[0]*r+s[4]*n+s[8]*i)/o,t[1]=(s[1]*r+s[5]*n+s[9]*i)/o,t[2]=(s[2]*r+s[6]*n+s[10]*i)/o,t}function jr(t,e,s){let r=e[0],n=e[1],i=e[2];return t[0]=r*s[0]+n*s[3]+i*s[6],t[1]=r*s[1]+n*s[4]+i*s[7],t[2]=r*s[2]+n*s[5]+i*s[8],t}function Mr(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[0],c=s[1],a=s[2],d=s[3],h=c*i-a*n,p=a*r-o*i,u=o*n-c*r,f=c*u-a*p,g=a*h-o*u,_=o*p-c*h,m=d*2;return h*=m,p*=m,u*=m,f*=2,g*=2,_*=2,t[0]=r+h+f,t[1]=n+p+g,t[2]=i+u+_,t}const $r=function(){const t=[0,0,0],e=[0,0,0];return function(s,r){Fe(t,s),Fe(e,r),ke(t,t),ke(e,e);let n=Ct(t,e);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function Er(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class V extends Array{constructor(e=0,s=e,r=e){return super(e,s,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,s=e,r=e){return e.length?this.copy(e):(pr(this,e,s,r),this)}copy(e){return Fe(this,e),this}add(e,s){return s?We(this,e,s):We(this,this,e),this}sub(e,s){return s?Ge(this,e,s):Ge(this,this,e),this}multiply(e){return e.length?ur(this,this,e):Me(this,this,e),this}divide(e){return e.length?gr(this,this,e):Me(this,this,1/e),this}inverse(e=this){return yr(this,e),this}len(){return te(this)}distance(e){return e?_r(this,e):te(this)}squaredLen(){return Ze(this)}squaredDistance(e){return e?mr(this,e):Ze(this)}negate(e=this){return xr(this,e),this}cross(e,s){return s?Qe(this,e,s):Qe(this,this,e),this}scale(e){return Me(this,this,e),this}normalize(){return ke(this,this),this}dot(e){return Ct(this,e)}equals(e){return Er(this,e)}applyMatrix3(e){return jr(this,this,e),this}applyMatrix4(e){return Cr(this,this,e),this}scaleRotateMatrix4(e){return wr(this,this,e),this}applyQuaternion(e){return Mr(this,this,e),this}angle(e){return $r(this,e)}lerp(e,s){return br(this,this,e,s),this}smoothLerp(e,s,r){return vr(this,this,e,s,r),this}clone(){return new V(this[0],this[1],this[2])}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}transformDirection(e){const s=this[0],r=this[1],n=this[2];return this[0]=e[0]*s+e[4]*r+e[8]*n,this[1]=e[1]*s+e[5]*r+e[9]*n,this[2]=e[2]*s+e[6]*r+e[10]*n,this.normalize()}}const Ke=new V;let Sr=1,zr=1,Je=!1;class Nr{constructor(e,s={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=s,this.id=Sr++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in s)this.addAttribute(r,s[r])}addAttribute(e,s){if(this.attributes[e]=s,s.id=zr++,s.size=s.size||1,s.type=s.type||(s.data.constructor===Float32Array?this.gl.FLOAT:s.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),s.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,s.normalized=s.normalized||!1,s.stride=s.stride||0,s.offset=s.offset||0,s.count=s.count||(s.stride?s.data.byteLength/s.stride:s.data.length/s.size),s.divisor=s.instanced||0,s.needsUpdate=!1,s.usage=s.usage||this.gl.STATIC_DRAW,s.buffer||this.updateAttribute(s),s.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==s.count*s.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,s.count*s.divisor);this.instancedCount=s.count*s.divisor}else e==="index"?this.drawRange.count=s.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,s.count))}updateAttribute(e){const s=!e.buffer;s&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),s?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,s){this.drawRange.start=e,this.drawRange.count=s}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((s,{name:r,type:n})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const i=this.attributes[r];this.gl.bindBuffer(i.target,i.buffer),this.glState.boundBuffer=i.buffer;let o=1;n===35674&&(o=2),n===35675&&(o=3),n===35676&&(o=4);const c=i.size/o,a=o===1?0:o*o*4,d=o===1?0:o*4;for(let h=0;h<o;h++)this.gl.vertexAttribPointer(s+h,c,i.type,i.normalized,i.stride+a,i.offset+h*d),this.gl.enableVertexAttribArray(s+h),this.gl.renderer.vertexAttribDivisor(s+h,i.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:s=this.gl.TRIANGLES}){var n;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((i,{name:o})=>{const c=this.attributes[o];c.needsUpdate&&this.updateAttribute(c)});let r=2;((n=this.attributes.index)==null?void 0:n.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(s,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(s,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Je)return console.warn("No position buffer data found to compute bounds"),Je=!0}computeBoundingBox(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||(this.bounds={min:new V,max:new V,center:new V,scale:new V,radius:1/0});const n=this.bounds.min,i=this.bounds.max,o=this.bounds.center,c=this.bounds.scale;n.set(1/0),i.set(-1/0);for(let a=0,d=s.length;a<d;a+=r){const h=s[a],p=s[a+1],u=s[a+2];n.x=Math.min(h,n.x),n.y=Math.min(p,n.y),n.z=Math.min(u,n.z),i.x=Math.max(h,i.x),i.y=Math.max(p,i.y),i.z=Math.max(u,i.z)}c.sub(i,n),o.add(n,i).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let n=0;for(let i=0,o=s.length;i<o;i+=r)Ke.fromArray(s,i),n=Math.max(n,this.bounds.center.squaredDistance(Ke));this.bounds.radius=Math.sqrt(n)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Ar=1;const et={};class Ir{constructor(e,{vertex:s,fragment:r,uniforms:n={},transparent:i=!1,cullFace:o=e.BACK,frontFace:c=e.CCW,depthTest:a=!0,depthWrite:d=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=n,this.id=Ar++,s||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=i,this.cullFace=o,this.frontFace=c,this.depthTest=a,this.depthWrite=d,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:s,fragment:r})}setShaders({vertex:e,fragment:s}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${tt(e)}`)),s&&(this.gl.shaderSource(this.fragmentShader,s),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${tt(s)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let c=this.gl.getActiveUniform(this.program,o);this.uniformLocations.set(c,this.gl.getUniformLocation(this.program,c.name));const a=c.name.match(/(\w+)/g);c.uniformName=a[0],c.nameComponents=a.slice(1)}this.attributeLocations=new Map;const n=[],i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const c=this.gl.getActiveAttrib(this.program,o),a=this.gl.getAttribLocation(this.program,c.name);a!==-1&&(n[a]=c.name,this.attributeLocations.set(c,a))}this.attributeOrder=n.join("")}setBlendFunc(e,s,r,n){this.blendFunc.src=e,this.blendFunc.dst=s,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=n,e&&(this.transparent=!0)}setBlendEquation(e,s){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=s}setStencilFunc(e,s,r){this.stencilRef=s,this.stencilFunc.func=e,this.stencilFunc.ref=s,this.stencilFunc.mask=r}setStencilOp(e,s,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=s,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let s=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,i)=>{let o=this.uniforms[i.uniformName];for(const c of i.nameComponents){if(!o)break;if(c in o)o=o[c];else{if(Array.isArray(o.value))break;o=void 0;break}}if(!o)return st(`Active uniform ${i.name} has not been supplied`);if(o&&o.value===void 0)return st(`${i.name} uniform is missing a value parameter`);if(o.value.texture)return s=s+1,o.value.update(s),$e(this.gl,i.type,n,s);if(o.value.length&&o.value[0].texture){const c=[];return o.value.forEach(a=>{s=s+1,a.update(s),c.push(s)}),$e(this.gl,i.type,n,c)}$e(this.gl,i.type,n,o.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function $e(t,e,s,r){r=r.length?Fr(r):r;const n=t.renderer.state.uniformLocations.get(s);if(r.length)if(n===void 0||n.length!==r.length)t.renderer.state.uniformLocations.set(s,r.slice(0));else{if(kr(n,r))return;n.set?n.set(r):Tr(n,r),t.renderer.state.uniformLocations.set(s,n)}else{if(n===r)return;t.renderer.state.uniformLocations.set(s,r)}switch(e){case 5126:return r.length?t.uniform1fv(s,r):t.uniform1f(s,r);case 35664:return t.uniform2fv(s,r);case 35665:return t.uniform3fv(s,r);case 35666:return t.uniform4fv(s,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?t.uniform1iv(s,r):t.uniform1i(s,r);case 35671:case 35667:return t.uniform2iv(s,r);case 35672:case 35668:return t.uniform3iv(s,r);case 35673:case 35669:return t.uniform4iv(s,r);case 35674:return t.uniformMatrix2fv(s,!1,r);case 35675:return t.uniformMatrix3fv(s,!1,r);case 35676:return t.uniformMatrix4fv(s,!1,r)}}function tt(t){let e=t.split(`
`);for(let s=0;s<e.length;s++)e[s]=s+1+": "+e[s];return e.join(`
`)}function Fr(t){const e=t.length,s=t[0].length;if(s===void 0)return t;const r=e*s;let n=et[r];n||(et[r]=n=new Float32Array(r));for(let i=0;i<e;i++)n.set(t[i],i*s);return n}function kr(t,e){if(t.length!==e.length)return!1;for(let s=0,r=t.length;s<r;s++)if(t[s]!==e[s])return!1;return!0}function Tr(t,e){for(let s=0,r=t.length;s<r;s++)t[s]=e[s]}let Ee=0;function st(t){Ee>100||(console.warn(t),Ee++,Ee>100&&console.warn("More than 100 program warnings - stopping logs."))}const Se=new V;let Or=1;class Lr{constructor({canvas:e=document.createElement("canvas"),width:s=300,height:r=150,dpr:n=1,alpha:i=!1,depth:o=!0,stencil:c=!1,antialias:a=!1,premultipliedAlpha:d=!1,preserveDrawingBuffer:h=!1,powerPreference:p="default",autoClear:u=!0,webgl:f=2}={}){const g={alpha:i,depth:o,stencil:c,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p};this.dpr=n,this.alpha=i,this.color=!0,this.depth=o,this.stencil=c,this.premultipliedAlpha=d,this.autoClear=u,this.id=Or++,f===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(s,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,s){this.width=e,this.height=s,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=s*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:s+"px"})}setViewport(e,s,r=0,n=0){this.state.viewport.width===e&&this.state.viewport.height===s||(this.state.viewport.width=e,this.state.viewport.height=s,this.state.viewport.x=r,this.state.viewport.y=n,this.gl.viewport(r,n,e,s))}setScissor(e,s,r=0,n=0){this.gl.scissor(r,n,e,s)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,s,r,n){this.state.blendFunc.src===e&&this.state.blendFunc.dst===s&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=e,this.state.blendFunc.dst=s,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=n,r!==void 0?this.gl.blendFuncSeparate(e,s,r,n):this.gl.blendFunc(e,s))}setBlendEquation(e,s){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===s)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=s,s!==void 0?this.gl.blendEquationSeparate(e,s):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,s,r){this.state.stencilFunc===e&&this.state.stencilRef===s&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=s||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,s||0,r||0))}setStencilOp(e,s,r){this.state.stencilFail===e&&this.state.stencilDepthFail===s&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=s,this.state.stencilDepthPass=r,this.gl.stencilOp(e,s,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:s=null}={}){this.state.framebuffer!==s&&(this.state.framebuffer=s,this.gl.bindFramebuffer(e,s))}getExtension(e,s,r){return s&&this.gl[s]?this.gl[s].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),s?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:e.zDepth!==s.zDepth?e.zDepth-s.zDepth:s.id-e.id}sortTransparent(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.zDepth!==s.zDepth?s.zDepth-e.zDepth:s.id-e.id}sortUI(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:s.id-e.id}getRenderList({scene:e,camera:s,frustumCull:r,sort:n}){let i=[];if(s&&r&&s.updateFrustum(),e.traverse(o=>{if(!o.visible)return!0;o.draw&&(r&&o.frustumCulled&&s&&!s.frustumIntersectsMesh(o)||i.push(o))}),n){const o=[],c=[],a=[];i.forEach(d=>{d.program.transparent?d.program.depthTest?c.push(d):a.push(d):o.push(d),d.zDepth=0,!(d.renderOrder!==0||!d.program.depthTest||!s)&&(d.worldMatrix.getTranslation(Se),Se.applyMatrix4(s.projectionViewMatrix),d.zDepth=Se.z)}),o.sort(this.sortOpaque),c.sort(this.sortTransparent),a.sort(this.sortUI),i=o.concat(c,a)}return i}render({scene:e,camera:s,target:r=null,update:n=!0,sort:i=!0,frustumCull:o=!0,clear:c}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(c||this.autoClear&&c!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&e.updateMatrixWorld(),s&&s.updateMatrixWorld(),this.getRenderList({scene:e,camera:s,frustumCull:o,sort:i}).forEach(d=>{d.draw({camera:s})})}}function Rr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Br(t,e,s,r,n){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t}function Pr(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s*s+r*r+n*n+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=s*o,t[1]=r*o,t[2]=n*o,t[3]=i*o,t}function Dr(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function Vr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function qr(t,e,s){s=s*.5;let r=Math.sin(s);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(s),t}function rt(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=s[0],a=s[1],d=s[2],h=s[3];return t[0]=r*h+o*c+n*d-i*a,t[1]=n*h+o*a+i*c-r*d,t[2]=i*h+o*d+r*a-n*c,t[3]=o*h-r*c-n*a-i*d,t}function Xr(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],o=e[3],c=Math.sin(s),a=Math.cos(s);return t[0]=r*a+o*c,t[1]=n*a+i*c,t[2]=i*a-n*c,t[3]=o*a-r*c,t}function Yr(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],o=e[3],c=Math.sin(s),a=Math.cos(s);return t[0]=r*a-i*c,t[1]=n*a+o*c,t[2]=i*a+r*c,t[3]=o*a-n*c,t}function Ur(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],o=e[3],c=Math.sin(s),a=Math.cos(s);return t[0]=r*a+n*c,t[1]=n*a-r*c,t[2]=i*a+o*c,t[3]=o*a-i*c,t}function Hr(t,e,s,r){let n=e[0],i=e[1],o=e[2],c=e[3],a=s[0],d=s[1],h=s[2],p=s[3],u,f,g,_,m;return f=n*a+i*d+o*h+c*p,f<0&&(f=-f,a=-a,d=-d,h=-h,p=-p),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),_=Math.sin((1-r)*u)/g,m=Math.sin(r*u)/g):(_=1-r,m=r),t[0]=_*n+m*a,t[1]=_*i+m*d,t[2]=_*o+m*h,t[3]=_*c+m*p,t}function Wr(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s*s+r*r+n*n+i*i,c=o?1/o:0;return t[0]=-s*c,t[1]=-r*c,t[2]=-n*c,t[3]=i*c,t}function Gr(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Zr(t,e){let s=e[0]+e[4]+e[8],r;if(s>0)r=Math.sqrt(s+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let i=(n+1)%3,o=(n+2)%3;r=Math.sqrt(e[n*3+n]-e[i*3+i]-e[o*3+o]+1),t[n]=.5*r,r=.5/r,t[3]=(e[i*3+o]-e[o*3+i])*r,t[i]=(e[i*3+n]+e[n*3+i])*r,t[o]=(e[o*3+n]+e[n*3+o])*r}return t}function Qr(t,e,s="YXZ"){let r=Math.sin(e[0]*.5),n=Math.cos(e[0]*.5),i=Math.sin(e[1]*.5),o=Math.cos(e[1]*.5),c=Math.sin(e[2]*.5),a=Math.cos(e[2]*.5);return s==="XYZ"?(t[0]=r*o*a+n*i*c,t[1]=n*i*a-r*o*c,t[2]=n*o*c+r*i*a,t[3]=n*o*a-r*i*c):s==="YXZ"?(t[0]=r*o*a+n*i*c,t[1]=n*i*a-r*o*c,t[2]=n*o*c-r*i*a,t[3]=n*o*a+r*i*c):s==="ZXY"?(t[0]=r*o*a-n*i*c,t[1]=n*i*a+r*o*c,t[2]=n*o*c+r*i*a,t[3]=n*o*a-r*i*c):s==="ZYX"?(t[0]=r*o*a-n*i*c,t[1]=n*i*a+r*o*c,t[2]=n*o*c-r*i*a,t[3]=n*o*a+r*i*c):s==="YZX"?(t[0]=r*o*a+n*i*c,t[1]=n*i*a+r*o*c,t[2]=n*o*c-r*i*a,t[3]=n*o*a-r*i*c):s==="XZY"&&(t[0]=r*o*a-n*i*c,t[1]=n*i*a-r*o*c,t[2]=n*o*c+r*i*a,t[3]=n*o*a+r*i*c),t}const Kr=Rr,Jr=Br,en=Dr,tn=Pr;class sn extends Array{constructor(e=0,s=0,r=0,n=1){super(e,s,r,n),this.onChange=()=>{},this._target=this;const i=["0","1","2","3"];return new Proxy(this,{set(o,c){const a=Reflect.set(...arguments);return a&&i.includes(c)&&o.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Vr(this._target),this.onChange(),this}set(e,s,r,n){return e.length?this.copy(e):(Jr(this._target,e,s,r,n),this.onChange(),this)}rotateX(e){return Xr(this._target,this._target,e),this.onChange(),this}rotateY(e){return Yr(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Ur(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Wr(this._target,e),this.onChange(),this}conjugate(e=this._target){return Gr(this._target,e),this.onChange(),this}copy(e){return Kr(this._target,e),this.onChange(),this}normalize(e=this._target){return tn(this._target,e),this.onChange(),this}multiply(e,s){return s?rt(this._target,e,s):rt(this._target,this._target,e),this.onChange(),this}dot(e){return en(this._target,e)}fromMatrix3(e){return Zr(this._target,e),this.onChange(),this}fromEuler(e,s){return Qr(this._target,e,e.order),s||this.onChange(),this}fromAxisAngle(e,s){return qr(this._target,e,s),this.onChange(),this}slerp(e,s){return Hr(this._target,this._target,e,s),this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this._target[3]=e[s+3],this.onChange(),this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e}}const rn=1e-6;function nn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function on(t,e,s,r,n,i,o,c,a,d,h,p,u,f,g,_,m){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=o,t[6]=c,t[7]=a,t[8]=d,t[9]=h,t[10]=p,t[11]=u,t[12]=f,t[13]=g,t[14]=_,t[15]=m,t}function an(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ln(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=e[4],c=e[5],a=e[6],d=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],y=e[15],w=s*c-r*o,b=s*a-n*o,v=s*d-i*o,E=r*a-n*c,$=r*d-i*c,A=n*d-i*a,I=h*_-p*g,N=h*m-u*g,S=h*y-f*g,k=p*m-u*_,j=p*y-f*_,z=u*y-f*m,M=w*z-b*j+v*k+E*S-$*N+A*I;return M?(M=1/M,t[0]=(c*z-a*j+d*k)*M,t[1]=(n*j-r*z-i*k)*M,t[2]=(_*A-m*$+y*E)*M,t[3]=(u*$-p*A-f*E)*M,t[4]=(a*S-o*z-d*N)*M,t[5]=(s*z-n*S+i*N)*M,t[6]=(m*v-g*A-y*b)*M,t[7]=(h*A-u*v+f*b)*M,t[8]=(o*j-c*S+d*I)*M,t[9]=(r*S-s*j-i*I)*M,t[10]=(g*$-_*v+y*w)*M,t[11]=(p*v-h*$-f*w)*M,t[12]=(c*N-o*k-a*I)*M,t[13]=(s*k-r*N+n*I)*M,t[14]=(_*b-g*E-m*w)*M,t[15]=(h*E-p*b+u*w)*M,t):null}function wt(t){let e=t[0],s=t[1],r=t[2],n=t[3],i=t[4],o=t[5],c=t[6],a=t[7],d=t[8],h=t[9],p=t[10],u=t[11],f=t[12],g=t[13],_=t[14],m=t[15],y=e*o-s*i,w=e*c-r*i,b=e*a-n*i,v=s*c-r*o,E=s*a-n*o,$=r*a-n*c,A=d*g-h*f,I=d*_-p*f,N=d*m-u*f,S=h*_-p*g,k=h*m-u*g,j=p*m-u*_;return y*j-w*k+b*S+v*N-E*I+$*A}function nt(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=e[9],f=e[10],g=e[11],_=e[12],m=e[13],y=e[14],w=e[15],b=s[0],v=s[1],E=s[2],$=s[3];return t[0]=b*r+v*c+E*p+$*_,t[1]=b*n+v*a+E*u+$*m,t[2]=b*i+v*d+E*f+$*y,t[3]=b*o+v*h+E*g+$*w,b=s[4],v=s[5],E=s[6],$=s[7],t[4]=b*r+v*c+E*p+$*_,t[5]=b*n+v*a+E*u+$*m,t[6]=b*i+v*d+E*f+$*y,t[7]=b*o+v*h+E*g+$*w,b=s[8],v=s[9],E=s[10],$=s[11],t[8]=b*r+v*c+E*p+$*_,t[9]=b*n+v*a+E*u+$*m,t[10]=b*i+v*d+E*f+$*y,t[11]=b*o+v*h+E*g+$*w,b=s[12],v=s[13],E=s[14],$=s[15],t[12]=b*r+v*c+E*p+$*_,t[13]=b*n+v*a+E*u+$*m,t[14]=b*i+v*d+E*f+$*y,t[15]=b*o+v*h+E*g+$*w,t}function cn(t,e,s){let r=s[0],n=s[1],i=s[2],o,c,a,d,h,p,u,f,g,_,m,y;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*i+e[12],t[13]=e[1]*r+e[5]*n+e[9]*i+e[13],t[14]=e[2]*r+e[6]*n+e[10]*i+e[14],t[15]=e[3]*r+e[7]*n+e[11]*i+e[15]):(o=e[0],c=e[1],a=e[2],d=e[3],h=e[4],p=e[5],u=e[6],f=e[7],g=e[8],_=e[9],m=e[10],y=e[11],t[0]=o,t[1]=c,t[2]=a,t[3]=d,t[4]=h,t[5]=p,t[6]=u,t[7]=f,t[8]=g,t[9]=_,t[10]=m,t[11]=y,t[12]=o*r+h*n+g*i+e[12],t[13]=c*r+p*n+_*i+e[13],t[14]=a*r+u*n+m*i+e[14],t[15]=d*r+f*n+y*i+e[15]),t}function hn(t,e,s){let r=s[0],n=s[1],i=s[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function dn(t,e,s,r){let n=r[0],i=r[1],o=r[2],c=Math.hypot(n,i,o),a,d,h,p,u,f,g,_,m,y,w,b,v,E,$,A,I,N,S,k,j,z,M,R;return Math.abs(c)<rn?null:(c=1/c,n*=c,i*=c,o*=c,a=Math.sin(s),d=Math.cos(s),h=1-d,p=e[0],u=e[1],f=e[2],g=e[3],_=e[4],m=e[5],y=e[6],w=e[7],b=e[8],v=e[9],E=e[10],$=e[11],A=n*n*h+d,I=i*n*h+o*a,N=o*n*h-i*a,S=n*i*h-o*a,k=i*i*h+d,j=o*i*h+n*a,z=n*o*h+i*a,M=i*o*h-n*a,R=o*o*h+d,t[0]=p*A+_*I+b*N,t[1]=u*A+m*I+v*N,t[2]=f*A+y*I+E*N,t[3]=g*A+w*I+$*N,t[4]=p*S+_*k+b*j,t[5]=u*S+m*k+v*j,t[6]=f*S+y*k+E*j,t[7]=g*S+w*k+$*j,t[8]=p*z+_*M+b*R,t[9]=u*z+m*M+v*R,t[10]=f*z+y*M+E*R,t[11]=g*z+w*M+$*R,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function fn(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function jt(t,e){let s=e[0],r=e[1],n=e[2],i=e[4],o=e[5],c=e[6],a=e[8],d=e[9],h=e[10];return t[0]=Math.hypot(s,r,n),t[1]=Math.hypot(i,o,c),t[2]=Math.hypot(a,d,h),t}function pn(t){let e=t[0],s=t[1],r=t[2],n=t[4],i=t[5],o=t[6],c=t[8],a=t[9],d=t[10];const h=e*e+s*s+r*r,p=n*n+i*i+o*o,u=c*c+a*a+d*d;return Math.sqrt(Math.max(h,p,u))}const Mt=function(){const t=[1,1,1];return function(e,s){let r=t;jt(r,s);let n=1/r[0],i=1/r[1],o=1/r[2],c=s[0]*n,a=s[1]*i,d=s[2]*o,h=s[4]*n,p=s[5]*i,u=s[6]*o,f=s[8]*n,g=s[9]*i,_=s[10]*o,m=c+p+_,y=0;return m>0?(y=Math.sqrt(m+1)*2,e[3]=.25*y,e[0]=(u-g)/y,e[1]=(f-d)/y,e[2]=(a-h)/y):c>p&&c>_?(y=Math.sqrt(1+c-p-_)*2,e[3]=(u-g)/y,e[0]=.25*y,e[1]=(a+h)/y,e[2]=(f+d)/y):p>_?(y=Math.sqrt(1+p-c-_)*2,e[3]=(f-d)/y,e[0]=(a+h)/y,e[1]=.25*y,e[2]=(u+g)/y):(y=Math.sqrt(1+_-c-p)*2,e[3]=(a-h)/y,e[0]=(f+d)/y,e[1]=(u+g)/y,e[2]=.25*y),e}}();function un(t,e,s,r){let n=te([t[0],t[1],t[2]]);const i=te([t[4],t[5],t[6]]),o=te([t[8],t[9],t[10]]);wt(t)<0&&(n=-n),s[0]=t[12],s[1]=t[13],s[2]=t[14];const a=t.slice(),d=1/n,h=1/i,p=1/o;a[0]*=d,a[1]*=d,a[2]*=d,a[4]*=h,a[5]*=h,a[6]*=h,a[8]*=p,a[9]*=p,a[10]*=p,Mt(e,a),r[0]=n,r[1]=i,r[2]=o}function gn(t,e,s,r){const n=t,i=e[0],o=e[1],c=e[2],a=e[3],d=i+i,h=o+o,p=c+c,u=i*d,f=i*h,g=i*p,_=o*h,m=o*p,y=c*p,w=a*d,b=a*h,v=a*p,E=r[0],$=r[1],A=r[2];return n[0]=(1-(_+y))*E,n[1]=(f+v)*E,n[2]=(g-b)*E,n[3]=0,n[4]=(f-v)*$,n[5]=(1-(u+y))*$,n[6]=(m+w)*$,n[7]=0,n[8]=(g+b)*A,n[9]=(m-w)*A,n[10]=(1-(u+_))*A,n[11]=0,n[12]=s[0],n[13]=s[1],n[14]=s[2],n[15]=1,n}function _n(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s+s,c=r+r,a=n+n,d=s*o,h=r*o,p=r*c,u=n*o,f=n*c,g=n*a,_=i*o,m=i*c,y=i*a;return t[0]=1-p-g,t[1]=h+y,t[2]=u-m,t[3]=0,t[4]=h-y,t[5]=1-d-g,t[6]=f+_,t[7]=0,t[8]=u+m,t[9]=f-_,t[10]=1-d-p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,e,s,r,n){let i=1/Math.tan(e/2),o=1/(r-n);return t[0]=i/s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*o,t[15]=0,t}function xn(t,e,s,r,n,i,o){let c=1/(e-s),a=1/(r-n),d=1/(i-o);return t[0]=-2*c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*d,t[11]=0,t[12]=(e+s)*c,t[13]=(n+r)*a,t[14]=(o+i)*d,t[15]=1,t}function yn(t,e,s,r){let n=e[0],i=e[1],o=e[2],c=r[0],a=r[1],d=r[2],h=n-s[0],p=i-s[1],u=o-s[2],f=h*h+p*p+u*u;f===0?u=1:(f=1/Math.sqrt(f),h*=f,p*=f,u*=f);let g=a*u-d*p,_=d*h-c*u,m=c*p-a*h;return f=g*g+_*_+m*m,f===0&&(d?c+=1e-6:a?d+=1e-6:a+=1e-6,g=a*u-d*p,_=d*h-c*u,m=c*p-a*h,f=g*g+_*_+m*m),f=1/Math.sqrt(f),g*=f,_*=f,m*=f,t[0]=g,t[1]=_,t[2]=m,t[3]=0,t[4]=p*m-u*_,t[5]=u*g-h*m,t[6]=h*_-p*g,t[7]=0,t[8]=h,t[9]=p,t[10]=u,t[11]=0,t[12]=n,t[13]=i,t[14]=o,t[15]=1,t}function it(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t[3]=e[3]+s[3],t[4]=e[4]+s[4],t[5]=e[5]+s[5],t[6]=e[6]+s[6],t[7]=e[7]+s[7],t[8]=e[8]+s[8],t[9]=e[9]+s[9],t[10]=e[10]+s[10],t[11]=e[11]+s[11],t[12]=e[12]+s[12],t[13]=e[13]+s[13],t[14]=e[14]+s[14],t[15]=e[15]+s[15],t}function ot(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t[3]=e[3]-s[3],t[4]=e[4]-s[4],t[5]=e[5]-s[5],t[6]=e[6]-s[6],t[7]=e[7]-s[7],t[8]=e[8]-s[8],t[9]=e[9]-s[9],t[10]=e[10]-s[10],t[11]=e[11]-s[11],t[12]=e[12]-s[12],t[13]=e[13]-s[13],t[14]=e[14]-s[14],t[15]=e[15]-s[15],t}function bn(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12]*s,t[13]=e[13]*s,t[14]=e[14]*s,t[15]=e[15]*s,t}class he extends Array{constructor(e=1,s=0,r=0,n=0,i=0,o=1,c=0,a=0,d=0,h=0,p=1,u=0,f=0,g=0,_=0,m=1){return super(e,s,r,n,i,o,c,a,d,h,p,u,f,g,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,s,r,n,i,o,c,a,d,h,p,u,f,g,_,m){return e.length?this.copy(e):(on(this,e,s,r,n,i,o,c,a,d,h,p,u,f,g,_,m),this)}translate(e,s=this){return cn(this,s,e),this}rotate(e,s,r=this){return dn(this,r,e,s),this}scale(e,s=this){return hn(this,s,typeof e=="number"?[e,e,e]:e),this}add(e,s){return s?it(this,e,s):it(this,this,e),this}sub(e,s){return s?ot(this,e,s):ot(this,this,e),this}multiply(e,s){return e.length?s?nt(this,e,s):nt(this,this,e):bn(this,this,e),this}identity(){return an(this),this}copy(e){return nn(this,e),this}fromPerspective({fov:e,aspect:s,near:r,far:n}={}){return mn(this,e,s,r,n),this}fromOrthogonal({left:e,right:s,bottom:r,top:n,near:i,far:o}){return xn(this,e,s,r,n,i,o),this}fromQuaternion(e){return _n(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return ln(this,e),this}compose(e,s,r){return gn(this,e,s,r),this}decompose(e,s,r){return un(this,e,s,r),this}getRotation(e){return Mt(e,this),this}getTranslation(e){return fn(e,this),this}getScaling(e){return jt(e,this),this}getMaxScaleOnAxis(){return pn(this)}lookAt(e,s,r){return yn(this,e,s,r),this}determinant(){return wt(this)}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this[3]=e[s+3],this[4]=e[s+4],this[5]=e[s+5],this[6]=e[s+6],this[7]=e[s+7],this[8]=e[s+8],this[9]=e[s+9],this[10]=e[s+10],this[11]=e[s+11],this[12]=e[s+12],this[13]=e[s+13],this[14]=e[s+14],this[15]=e[s+15],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e[s+4]=this[4],e[s+5]=this[5],e[s+6]=this[6],e[s+7]=this[7],e[s+8]=this[8],e[s+9]=this[9],e[s+10]=this[10],e[s+11]=this[11],e[s+12]=this[12],e[s+13]=this[13],e[s+14]=this[14],e[s+15]=this[15],e}}function vn(t,e,s="YXZ"){return s==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):s==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):s==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):s==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):s==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):s==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const at=new he;class Cn extends Array{constructor(e=0,s=e,r=e,n="YXZ"){super(e,s,r),this.order=n,this.onChange=()=>{},this._target=this;const i=["0","1","2"];return new Proxy(this,{set(o,c){const a=Reflect.set(...arguments);return a&&i.includes(c)&&o.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,s=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=s,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,s=this.order){return vn(this._target,e,s),this.onChange(),this}fromQuaternion(e,s=this.order,r){return at.fromQuaternion(e),this._target.fromRotationMatrix(at,s),r||this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}}class wn{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new he,this.worldMatrix=new he,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new V,this.quaternion=new sn,this.scale=new V(1),this.rotation=new Cn,this.up=new V(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,s=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,s&&e&&e.addChild(this,!1)}addChild(e,s=!0){~this.children.indexOf(e)||this.children.push(e),s&&e.setParent(this,!1)}removeChild(e,s=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),s&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let s=0,r=this.children.length;s<r;s++)this.children[s].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let s=0,r=this.children.length;s<r;s++)this.children[s].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,s=!1){s?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function jn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Mn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s+s,c=r+r,a=n+n,d=s*o,h=r*o,p=r*c,u=n*o,f=n*c,g=n*a,_=i*o,m=i*c,y=i*a;return t[0]=1-p-g,t[3]=h-y,t[6]=u+m,t[1]=h+y,t[4]=1-d-g,t[7]=f-_,t[2]=u-m,t[5]=f+_,t[8]=1-d-p,t}function $n(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function En(t,e,s,r,n,i,o,c,a,d){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=o,t[6]=c,t[7]=a,t[8]=d,t}function Sn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function zn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=e[4],c=e[5],a=e[6],d=e[7],h=e[8],p=h*o-c*d,u=-h*i+c*a,f=d*i-o*a,g=s*p+r*u+n*f;return g?(g=1/g,t[0]=p*g,t[1]=(-h*r+n*d)*g,t[2]=(c*r-n*o)*g,t[3]=u*g,t[4]=(h*s-n*a)*g,t[5]=(-c*s+n*i)*g,t[6]=f*g,t[7]=(-d*s+r*a)*g,t[8]=(o*s-r*i)*g,t):null}function lt(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=s[0],f=s[1],g=s[2],_=s[3],m=s[4],y=s[5],w=s[6],b=s[7],v=s[8];return t[0]=u*r+f*o+g*d,t[1]=u*n+f*c+g*h,t[2]=u*i+f*a+g*p,t[3]=_*r+m*o+y*d,t[4]=_*n+m*c+y*h,t[5]=_*i+m*a+y*p,t[6]=w*r+b*o+v*d,t[7]=w*n+b*c+v*h,t[8]=w*i+b*a+v*p,t}function Nn(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=s[0],f=s[1];return t[0]=r,t[1]=n,t[2]=i,t[3]=o,t[4]=c,t[5]=a,t[6]=u*r+f*o+d,t[7]=u*n+f*c+h,t[8]=u*i+f*a+p,t}function An(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=Math.sin(s),f=Math.cos(s);return t[0]=f*r+u*o,t[1]=f*n+u*c,t[2]=f*i+u*a,t[3]=f*o-u*r,t[4]=f*c-u*n,t[5]=f*a-u*i,t[6]=d,t[7]=h,t[8]=p,t}function In(t,e,s){let r=s[0],n=s[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Fn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=e[4],c=e[5],a=e[6],d=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],y=e[15],w=s*c-r*o,b=s*a-n*o,v=s*d-i*o,E=r*a-n*c,$=r*d-i*c,A=n*d-i*a,I=h*_-p*g,N=h*m-u*g,S=h*y-f*g,k=p*m-u*_,j=p*y-f*_,z=u*y-f*m,M=w*z-b*j+v*k+E*S-$*N+A*I;return M?(M=1/M,t[0]=(c*z-a*j+d*k)*M,t[1]=(a*S-o*z-d*N)*M,t[2]=(o*j-c*S+d*I)*M,t[3]=(n*j-r*z-i*k)*M,t[4]=(s*z-n*S+i*N)*M,t[5]=(r*S-s*j-i*I)*M,t[6]=(_*A-m*$+y*E)*M,t[7]=(m*v-g*A-y*b)*M,t[8]=(g*$-_*v+y*w)*M,t):null}class kn extends Array{constructor(e=1,s=0,r=0,n=0,i=1,o=0,c=0,a=0,d=1){return super(e,s,r,n,i,o,c,a,d),this}set(e,s,r,n,i,o,c,a,d){return e.length?this.copy(e):(En(this,e,s,r,n,i,o,c,a,d),this)}translate(e,s=this){return Nn(this,s,e),this}rotate(e,s=this){return An(this,s,e),this}scale(e,s=this){return In(this,s,e),this}multiply(e,s){return s?lt(this,e,s):lt(this,this,e),this}identity(){return Sn(this),this}copy(e){return $n(this,e),this}fromMatrix4(e){return jn(this,e),this}fromQuaternion(e){return Mn(this,e),this}fromBasis(e,s,r){return this.set(e[0],e[1],e[2],s[0],s[1],s[2],r[0],r[1],r[2]),this}inverse(e=this){return zn(this,e),this}getNormalMatrix(e){return Fn(this,e),this}}let Tn=0;class On extends wn{constructor(e,{geometry:s,program:r,mode:n=e.TRIANGLES,frustumCulled:i=!0,renderOrder:o=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Tn++,this.geometry=s,this.program=r,this.mode=n,this.frustumCulled=i,this.renderOrder=o,this.modelViewMatrix=new he,this.normalMatrix=new kn,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let s=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:s}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const ct={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function ht(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function Ln(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function dt(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?ht(t):ct[t.toLowerCase()]?ht(ct[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):Ln(t)}class ft extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...dt(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(dt(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class Rn extends Nr{constructor(e,{attributes:s={}}={}){Object.assign(s,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,s)}}const Bn=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Pn=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;

out vec4 fragColor;

vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
    const vec4 C = vec4(
        0.211324865405187, 0.366025403784439,
        -0.577350269189626, 0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);

    vec3 p = permute(
        permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0)
    );

    vec3 m = max(
        0.5 - vec3(
            dot(x0, x0),
            dot(x12.xy, x12.xy),
            dot(x12.zw, x12.zw)
        ), 
        0.0
    );
    m = m * m;
    m = m * m;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

struct ColorStop {
    vec3 color;
    float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                  int index = 0;                                                for (int i = 0; i < 2; i++) {                                      ColorStop currentColor = colors[i];                           bool isInBetween = currentColor.position <= factor;           index = int(mix(float(index), float(i), float(isInBetween)));     }                                                             ColorStop currentColor = colors[index];                       ColorStop nextColor = colors[index + 1];                      float range = nextColor.position - currentColor.position;     float lerpFactor = (factor - currentColor.position) / range;     finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
    // Compute UVs from gl_FragCoord
    vec2 uv = gl_FragCoord.xy / uResolution;
    
    // Build our three color stops from uniform array uColorStops
    ColorStop colors[3];
    colors[0] = ColorStop(uColorStops[0], 0.0);
    colors[1] = ColorStop(uColorStops[1], 0.5);
    colors[2] = ColorStop(uColorStops[2], 1.0);

    // Interpolate color along uv.x
    vec3 rampColor;
    COLOR_RAMP(colors, uv.x, rampColor);

    // Noise-based "height," scaled by amplitude
    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) 
                   * 0.5 
                   * uAmplitude;
    height = exp(height);
    height = (uv.y * 2.0 - height + 0.2);

    fragColor.rgb = mix(vec3(1.0), rampColor, height);

    fragColor.a = 1.0;
}
`;function Dn(t){const{colorStops:e=["#00d8ff","#7cff67","#00d8ff"],amplitude:s=1}=t,r=C.useRef(t);r.current=t;const n=C.useRef(null);return C.useEffect(()=>{const i=n.current;if(!i)return;const o=new Lr,c=o.gl;c.clearColor(1,1,1,1);let a;function d(){if(!i)return;const _=i.offsetWidth,m=i.offsetHeight;o.setSize(_,m),a&&(a.uniforms.uResolution.value=[_,m])}window.addEventListener("resize",d);const h=new Rn(c);h.attributes.uv&&delete h.attributes.uv;const p=e.map(_=>{const m=new ft(_);return[m.r,m.g,m.b]});a=new Ir(c,{vertex:Bn,fragment:Pn,uniforms:{uTime:{value:0},uAmplitude:{value:s},uColorStops:{value:p},uResolution:{value:[i.offsetWidth,i.offsetHeight]}}});const u=new On(c,{geometry:h,program:a});i.appendChild(c.canvas);let f=0;const g=_=>{f=requestAnimationFrame(g);const{time:m=_*.01,speed:y=1}=r.current;a.uniforms.uTime.value=m*y*.1,a.uniforms.uAmplitude.value=r.current.amplitude??1;const w=r.current.colorStops??e;a.uniforms.uColorStops.value=w.map(b=>{const v=new ft(b);return[v.r,v.g,v.b]}),o.render({scene:u})};return f=requestAnimationFrame(g),d(),()=>{var _;cancelAnimationFrame(f),window.removeEventListener("resize",d),i&&c.canvas.parentNode===i&&i.removeChild(c.canvas),(_=c.getExtension("WEBGL_lose_context"))==null||_.loseContext()}},[s]),l.jsx("div",{ref:n,className:"aurora-container"})}const be=({multi:t})=>{var d,h,p,u,f,g,_,m,y,w,b,v,E,$,A,I,N,S,k;const e=de(),{id:s}=K(),[r,n]=C.useState(null),[i,o]=C.useState(null),{language:c}=H(),a=(j,z)=>{const M=encodeURIComponent(z),R=`https://wa.me/${j}?text=${M}`;window.open(R,"_blank")};return C.useEffect(()=>{e(Pt(s)).then(j=>{var z,M,R;n(j==null?void 0:j.payload),o((R=(M=(z=j==null?void 0:j.payload)==null?void 0:z.product_images)==null?void 0:M[0])==null?void 0:R.image)})},[]),l.jsxs("section",{className:L.outer,children:[l.jsx(Dn,{colorStops:[(d=r==null?void 0:r.shop)==null?void 0:d.border_color,(h=r==null?void 0:r.shop)==null?void 0:h.border_color,(p=r==null?void 0:r.shop)==null?void 0:p.border_color],speed:.5}),l.jsxs("div",{className:L.container,children:[l.jsxs("div",{className:L.rowlogo,children:[l.jsx(B,{to:t?`/${(u=r==null?void 0:r.shop)==null?void 0:u.slug}/details/${r==null?void 0:r.category}`:`/${(f=r==null?void 0:r.shop)==null?void 0:f.slug}/`,children:l.jsx(ds,{})}),l.jsxs("div",{className:L.brand,children:[l.jsx("p",{children:(g=r==null?void 0:r.shop)==null?void 0:g[`name_${c}`]}),l.jsx("img",{src:(_=r==null?void 0:r.shop)==null?void 0:_.image,alt:(m=r==null?void 0:r.shop)==null?void 0:m.name})]})]}),l.jsxs("div",{className:L.row,children:[l.jsxs("div",{className:L.content,children:[l.jsx("p",{className:L.name,children:r==null?void 0:r[`name_${c}`]}),l.jsx("p",{className:L.desc,children:r==null?void 0:r[`description_${c}`]}),l.jsx("div",{className:L.colors,children:(y=r==null?void 0:r.color)==null?void 0:y.map(j=>l.jsx("span",{style:{backgroundColor:j}},j))}),l.jsx("div",{className:L.sizes,children:(w=r==null?void 0:r.letter_sizes)!=null&&w.length?(b=r==null?void 0:r.letter_sizes)==null?void 0:b.map(j=>l.jsx("span",{children:j},j)):(v=r==null?void 0:r.number_sizes)==null?void 0:v.map(j=>l.jsx("span",{children:j},j))}),l.jsxs("div",{className:L.price,children:[l.jsxs("p",{style:{color:(r==null?void 0:r.after_sale_price)&&"#e93f3f"},children:[r!=null&&r.after_sale_price?r==null?void 0:r.after_sale_price:r==null?void 0:r.price,"₪"]}),(r==null?void 0:r.after_sale_price)&&l.jsxs("span",{children:[r==null?void 0:r.price," ₪"]}),(r==null?void 0:r.tag)&&l.jsx("img",{src:r==null?void 0:r.tag,alt:r==null?void 0:r.name})]}),l.jsxs("div",{className:L.row,children:[l.jsxs("button",{onClick:()=>{var j;return a((j=r==null?void 0:r.shop)==null?void 0:j.contact_number,r==null?void 0:r[`name_${c}`])},style:{backgroundColor:(E=r==null?void 0:r.shop)!=null&&E.primary_color?($=r==null?void 0:r.shop)==null?void 0:$.primary_color:"#fff",color:(A=r==null?void 0:r.shop)!=null&&A.primary_color&&Ie((I=r==null?void 0:r.shop)==null?void 0:I.primary_color)?"#fff":"#000"},children:[" اطلب الان ",l.jsx(Jt,{})]}),(r==null?void 0:r.ready_to_ship)&&l.jsxs("p",{className:L.status,style:{color:(N=r==null?void 0:r.shop)!=null&&N.primary_color?(S=r==null?void 0:r.shop)==null?void 0:S.primary_color:"#000"},children:["قابل للشحن ",l.jsx(es,{})," "]})]})]}),l.jsxs("div",{className:L.gallery,children:[l.jsx("div",{className:L.right,children:l.jsx("img",{src:i,alt:r==null?void 0:r.name})}),l.jsx("div",{className:L.left,children:(k=r==null?void 0:r.product_images)==null?void 0:k.map((j,z)=>l.jsx("img",{src:j==null?void 0:j.image,onClick:M=>o(j==null?void 0:j.image),alt:r==null?void 0:r.name},j==null?void 0:j.id))})]})]})]})]})},Vn=({data:t,categories:e})=>{const{pathname:s}=Z();return C.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),l.jsx(fe,{children:l.jsxs("main",{className:fs.main,children:[!(s!=null&&s.includes("product"))&&l.jsx($s,{data:t}),s!=null&&s.includes("product")?l.jsx(be,{}):l.jsx(Zs,{mainData:t,categories:e})]})})},qn="_main_jzy6d_1",Xn="_pages_jzy6d_5",Yn="_modal_jzy6d_12",Un="_modalContent_jzy6d_24",Hn="_bottomNav_jzy6d_63",Wn="_cart_jzy6d_66",Gn="_cartmodal_jzy6d_100",Zn="_fadeIn_jzy6d_1",Qn="_slideOut_jzy6d_1",Kn="_close_jzy6d_134",Jn="_cartItems_jzy6d_151",ei="_cartItem_jzy6d_151",ti="_extras_jzy6d_170",si="_extrasContent_jzy6d_184",ri="_slideIn_jzy6d_1",ni="_item_jzy6d_187",ii="_remove_jzy6d_200",oi="_modalText_jzy6d_213",ai="_copy_jzy6d_255",pt={main:qn,pages:Xn,modal:Yn,modalContent:Un,bottomNav:Hn,cart:Wn,cartmodal:Gn,fadeIn:Zn,"slide-out":"_slide-out_jzy6d_131",slideOut:Qn,close:Kn,cartItems:Jn,cartItem:ei,extras:ti,extrasContent:si,slideIn:ri,item:ni,remove:ii,modalText:oi,copy:ai},li="_container_1hx64_1",ci="_sectionOne_1hx64_10",hi="_items_1hx64_15",di="_item_1hx64_15",fi="_title_1hx64_45",pi="_productsContainer_1hx64_50",ui="_products_1hx64_50",gi="_itemsContainer_1hx64_56",_i="_icons_1hx64_92",mi="_notActive_1hx64_122",xi="_notAct_1hx64_122",yi="_copy_1hx64_147",bi="_sectionHeader_1hx64_170",U={container:li,sectionOne:ci,items:hi,item:di,title:fi,productsContainer:pi,products:ui,itemsContainer:gi,icons:_i,notActive:mi,notAct:xi,copy:yi,sectionHeader:bi},De="/assets/exitem-DQFMuJ0p.png";var vi=l.Fragment;function T(t,e,s){return Dt.call(e,"css")?l.jsx(Vt,qt(t,e),s):l.jsx(t,e,s)}var Ci=Object.defineProperty,wi=(t,e,s)=>e in t?Ci(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ne=(t,e,s)=>wi(t,typeof e!="symbol"?e+"":e,s),Te=new Map,ie=new WeakMap,ut=0,ji=void 0;function Mi(t){return t?(ie.has(t)||(ut+=1,ie.set(t,ut.toString())),ie.get(t)):"0"}function $i(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Mi(t.root):t[e]}`).toString()}function Ei(t){const e=$i(t);let s=Te.get(e);if(!s){const r=new Map;let n;const i=new IntersectionObserver(o=>{o.forEach(c=>{var a;const d=c.isIntersecting&&n.some(h=>c.intersectionRatio>=h);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=d),(a=r.get(c.target))==null||a.forEach(h=>{h(d,c)})})},t);n=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:e,observer:i,elements:r},Te.set(e,s)}return s}function $t(t,e,s={},r=ji){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:n,observer:i,elements:o}=Ei(s),c=o.get(t)||[];return o.has(t)||o.set(t,c),c.push(e),i.observe(t),function(){c.splice(c.indexOf(e),1),c.length===0&&(o.delete(t),i.unobserve(t)),o.size===0&&(i.disconnect(),Te.delete(n))}}function Si(t){return typeof t.children!="function"}var gt=class extends C.Component{constructor(t){super(t),ne(this,"node",null),ne(this,"_unobserveCb",null),ne(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),ne(this,"handleChange",(e,s)=>{e&&this.props.triggerOnce&&this.unobserve(),Si(this.props)||this.setState({inView:e,entry:s}),this.props.onChange&&this.props.onChange(e,s)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:s,trackVisibility:r,delay:n,fallbackInView:i}=this.props;this._unobserveCb=$t(this.node,this.handleChange,{threshold:t,root:e,rootMargin:s,trackVisibility:r,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:f,entry:g}=this.state;return t({inView:f,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:s,threshold:r,root:n,rootMargin:i,onChange:o,skip:c,trackVisibility:a,delay:d,initialInView:h,fallbackInView:p,...u}=this.props;return C.createElement(e||"div",{ref:this.handleNode,...u},t)}};function Et({threshold:t,delay:e,trackVisibility:s,rootMargin:r,root:n,triggerOnce:i,skip:o,initialInView:c,fallbackInView:a,onChange:d}={}){var h;const[p,u]=C.useState(null),f=C.useRef(),[g,_]=C.useState({inView:!!c,entry:void 0});f.current=d,C.useEffect(()=>{if(o||!p)return;let b;return b=$t(p,(v,E)=>{_({inView:v,entry:E}),f.current&&f.current(v,E),E.isIntersecting&&i&&b&&(b(),b=void 0)},{root:n,rootMargin:r,threshold:t,trackVisibility:s,delay:e},a),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,p,n,r,i,o,s,a,e]);const m=(h=g.entry)==null?void 0:h.target,y=C.useRef();!p&&m&&!i&&!o&&y.current!==m&&(y.current=m,_({inView:!!c,entry:void 0}));const w=[u,g.inView,g.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}x`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;x`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;x`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;x`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;x`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;x`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;x`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;x`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const zi=x`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ni=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ai=x`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ii=x`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fi=x`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ve=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ki=x`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ti=x`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oi=x`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Li=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ri=x`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bi=x`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pi=x`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Di({duration:t=1e3,delay:e=0,timingFunction:s="ease",keyframes:r=Ve,iterationCount:n=1}){return Yt`
    animation-duration: ${t}ms;
    animation-timing-function: ${s};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Vi(t){return t==null}function qi(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function St(t,e){return s=>s?t():e()}function se(t){return St(t,()=>null)}function Oe(t){return se(()=>({opacity:0}))(t)}const zt=t=>{const{cascade:e=!1,damping:s=.5,delay:r=0,duration:n=1e3,fraction:i=0,keyframes:o=Ve,triggerOnce:c=!1,className:a,style:d,childClassName:h,childStyle:p,children:u,onVisibilityChange:f}=t,g=C.useMemo(()=>Di({keyframes:o,duration:n}),[n,o]);return Vi(u)?null:qi(u)?T(Yi,{...t,animationStyles:g,children:String(u)}):Xt.isFragment(u)?T(Nt,{...t,animationStyles:g}):T(vi,{children:C.Children.map(u,(_,m)=>{if(!C.isValidElement(_))return null;const y=r+(e?m*n*s:0);switch(_.type){case"ol":case"ul":return T(ve,{children:({cx:w})=>T(_.type,{..._.props,className:w(a,_.props.className),style:Object.assign({},d,_.props.style),children:T(zt,{...t,children:_.props.children})})});case"li":return T(gt,{threshold:i,triggerOnce:c,onChange:f,children:({inView:w,ref:b})=>T(ve,{children:({cx:v})=>T(_.type,{..._.props,ref:b,className:v(h,_.props.className),css:se(()=>g)(w),style:Object.assign({},p,_.props.style,Oe(!w),{animationDelay:y+"ms"})})})});default:return T(gt,{threshold:i,triggerOnce:c,onChange:f,children:({inView:w,ref:b})=>T("div",{ref:b,className:a,css:se(()=>g)(w),style:Object.assign({},d,Oe(!w),{animationDelay:y+"ms"}),children:T(ve,{children:({cx:v})=>T(_.type,{..._.props,className:v(h,_.props.className),style:Object.assign({},p,_.props.style)})})})})}})})},Xi={display:"inline-block",whiteSpace:"pre"},Yi=t=>{const{animationStyles:e,cascade:s=!1,damping:r=.5,delay:n=0,duration:i=1e3,fraction:o=0,triggerOnce:c=!1,className:a,style:d,children:h,onVisibilityChange:p}=t,{ref:u,inView:f}=Et({triggerOnce:c,threshold:o,onChange:p});return St(()=>T("div",{ref:u,className:a,style:Object.assign({},d,Xi),children:h.split("").map((g,_)=>T("span",{css:se(()=>e)(f),style:{animationDelay:n+_*i*r+"ms"},children:g},_))}),()=>T(Nt,{...t,children:h}))(s)},Nt=t=>{const{animationStyles:e,fraction:s=0,triggerOnce:r=!1,className:n,style:i,children:o,onVisibilityChange:c}=t,{ref:a,inView:d}=Et({triggerOnce:r,threshold:s,onChange:c});return T("div",{ref:a,className:n,css:se(()=>e)(d),style:Object.assign({},i,Oe(!d)),children:o})};x`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;x`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;x`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;x`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;x`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Ui=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Hi=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Wi=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Gi=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Zi=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Qi=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ki=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ji=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,eo=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,to=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,so=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ro=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,no=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function io(t,e,s){switch(s){case"bottom-left":return e?Hi:Ni;case"bottom-right":return e?Wi:Ai;case"down":return t?e?Zi:Fi:e?Gi:Ii;case"left":return t?e?Ki:ki:e?Qi:Ve;case"right":return t?e?eo:Oi:e?Ji:Ti;case"top-left":return e?to:Li;case"top-right":return e?so:Ri;case"up":return t?e?no:Pi:e?ro:Bi;default:return e?Ui:zi}}const qe=t=>{const{big:e=!1,direction:s,reverse:r=!1,...n}=t,i=C.useMemo(()=>io(e,r,s),[e,s,r]);return T(zt,{keyframes:i,...n})};x`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;x`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;x`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;x`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;x`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;x`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;x`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;x`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const oo=({data:t,language:e,categories:s})=>{const r=n=>{document.getElementById(n).scrollIntoView({behavior:"smooth"})};return l.jsxs("section",{className:U.container,children:[l.jsxs("div",{className:U.sectionOne,children:[l.jsx("div",{className:U.items,children:s==null?void 0:s.map((n,i)=>{if(n!=null&&n.is_active)return l.jsx(qe,{cascade:!0,damping:.1,children:l.jsxs("div",{onClick:()=>r(n==null?void 0:n.id),className:U.item,style:{borderColor:t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"},children:[l.jsx("img",{src:(n==null?void 0:n.image)||De,alt:i+1}),l.jsx("p",{children:n==null?void 0:n[`name_${e}`]})]})},n==null?void 0:n.id)})}),s==null?void 0:s.map(n=>{var i;return l.jsxs("div",{className:U.itemsContainer,id:n==null?void 0:n.id,children:[l.jsx("h3",{children:n==null?void 0:n[`name_${e}`]}),l.jsx("div",{className:U.items,children:(i=n==null?void 0:n.products)==null?void 0:i.map(o=>{var c;return l.jsx(ue,{data:o,color:t==null?void 0:t.primary_color,to:`/${(c=o==null?void 0:o.shop)==null?void 0:c.slug}/product/${o==null?void 0:o.id}`})})})]})})]}),l.jsxs("div",{className:U.copy,children:[l.jsxs("p",{children:[O("rights",e)," © ",re]}),l.jsx(B,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[O("allRights",e),"."]})]})]})},ao="_container_1ptqs_1",lo="_navbar_1ptqs_5",co="_logo_1ptqs_14",ho="_left_1ptqs_23",fo="_language_1ptqs_28",po="_social_1ptqs_37",uo="_imageContainer_1ptqs_46",go="_buttonNext_1ptqs_55",_o="_buttonPrev_1ptqs_55",Y={container:ao,navbar:lo,logo:co,left:ho,language:fo,social:po,imageContainer:uo,buttonNext:go,buttonPrev:_o},mo=({data:t,language:e,changeLanguage:s})=>{var p,u;const r=C.useRef(),[n,i]=C.useState(!1),[o,c]=C.useState(!0),a=f=>{i(f.isEnd),c(f.isBeginning)},d=f=>{f.stopPropagation(),f.preventDefault(),r.current&&!n&&r.current.slideNext()},h=f=>{f.stopPropagation(),f.preventDefault(),r.current&&!o&&r.current.slidePrev()};return l.jsxs("section",{className:Y.container,children:[l.jsxs("div",{className:Y.navbar,children:[l.jsxs(B,{to:"#",className:Y.logo,children:[l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"}`},alt:"restaurant image"}),l.jsx("h3",{children:t==null?void 0:t[`name_${e}`]})]}),l.jsxs("div",{className:Y.left,children:[l.jsx("div",{className:Y.language,children:e=="he"?l.jsxs("button",{style:{backgroundColor:e=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("ar"),children:[" العربية ",l.jsx(Ye,{})]}):l.jsxs("button",{style:{backgroundColor:e=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("he"),children:["עברית ",l.jsx(Ye,{})]})}),l.jsx("div",{className:Y.social,children:(p=t==null?void 0:t.social_media_links)==null?void 0:p.map(f=>l.jsxs(B,{to:(f==null?void 0:f.platform)=="phone_number"?`tel:${f==null?void 0:f.url}`:f==null?void 0:f.url,onMouseOver:g=>g.target.style.color=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:g=>g.target.style.color="#000",target:"_blank",children:[(f==null?void 0:f.platform)=="facebook"&&l.jsx(ge,{}),(f==null?void 0:f.platform)=="youtube"&&l.jsx(_e,{}),(f==null?void 0:f.platform)=="tiktok"&&l.jsx(me,{}),(f==null?void 0:f.platform)=="pinterest"&&l.jsx(xe,{}),(f==null?void 0:f.platform)=="instagram"&&l.jsx(ye,{}),(f==null?void 0:f.platform)=="phone_number"&&l.jsx(Q,{}),!(f!=null&&f.platform)&&l.jsx(Pe,{})]},f==null?void 0:f.id))})]})]}),l.jsx(bt,{spaceBetween:5,slidesPerView:1,onSlideChange:a,onSwiper:f=>{r.current=f},className:Y.imageContainer,children:(u=t==null?void 0:t.header_images)==null?void 0:u.map((f,g)=>l.jsx(vt,{children:l.jsx("img",{src:f!=null&&f.image?f==null?void 0:f.image:"https://placehold.co/600x1000",alt:`Slide ${g+1}`})},g))}),l.jsx("button",{className:Y.buttonPrev,onClick:h,disabled:o,style:{backgroundColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",color:Ie(t==null?void 0:t.primary_color)?"#fff":"#000"},children:l.jsx(Zt,{})}),l.jsx("button",{className:Y.buttonNext,onClick:d,disabled:n,style:{backgroundColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",color:Ie(t==null?void 0:t.primary_color)?"#fff":"#000"},children:l.jsx(Qt,{})})]})},xo=({data:t,categories:e})=>{const[s,r]=C.useState(!1),[n,i]=C.useState(!1),{language:o,changeLanguage:c}=H(),{pathname:a}=Z();return C.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[a]),l.jsx(fe,{children:l.jsxs("main",{className:pt.main,children:[!(a!=null&&a.includes("product"))&&l.jsx(mo,{data:t,setShowModal:r,changeLanguage:c,language:o,showModal:s}),l.jsx("div",{className:pt.pages,children:a!=null&&a.includes("product")?l.jsx(be,{}):l.jsx(oo,{data:t,categories:e,language:o,showCartModal:n,setShowCartModal:i})})]})})},yo="_main_4cdyh_1",bo="_pages_4cdyh_9",vo="_cart_4cdyh_12",Co="_cartmodal_4cdyh_46",wo="_fadeIn_4cdyh_1",jo="_modalContent_4cdyh_62",Mo="_slideOut_4cdyh_1",$o="_close_4cdyh_83",Eo="_cartItems_4cdyh_100",So="_cartItem_4cdyh_100",zo="_extras_4cdyh_120",No="_extrasContent_4cdyh_134",Ao="_slideIn_4cdyh_1",Io="_item_4cdyh_137",Fo="_remove_4cdyh_150",ko="_modalText_4cdyh_163",To="_overlay_4cdyh_234",_t={main:yo,pages:bo,cart:vo,cartmodal:Co,fadeIn:wo,modalContent:jo,"slide-out":"_slide-out_4cdyh_80",slideOut:Mo,close:$o,cartItems:Eo,cartItem:So,extras:zo,extrasContent:No,slideIn:Ao,item:Io,remove:Fo,modalText:ko,overlay:To},Oo="_sidebar_15g46_1",Lo="_language_15g46_28",Ro="_sidebarContent_15g46_54",Bo="_info_15g46_79",Po="_social_15g46_91",Do="_actions_15g46_118",Vo="_workinghours_15g46_141",qo="_modal_15g46_155",Xo="_modalContent_15g46_167",ze={sidebar:Oo,language:Lo,sidebarContent:Ro,info:Bo,social:Po,actions:Do,workinghours:Vo,modal:qo,modalContent:Xo},Yo=({data:t,changeLanguage:e,language:s})=>{var p;const r=pe(),[n,i]=C.useState([]),[o,c]=C.useState(0),[a,d]=C.useState(!0),{name:h}=K();return C.useEffect(()=>{const u=setInterval(()=>{(n==null?void 0:n.length)>1&&(d(!1),setTimeout(()=>{c(f=>(f+1)%(n==null?void 0:n.length)),d(!0)},500))},5e3);return()=>clearInterval(u)},[n]),C.useEffect(()=>{var u;i((u=t==null?void 0:t.header_images)==null?void 0:u.slice(1))},[]),l.jsx("section",{className:ze.sidebar,style:{backgroundImage:`url(${(p=n==null?void 0:n[o])==null?void 0:p.image})`,backgroundSize:"cover",backgroundPosition:"center",opacity:a?1:.5,transition:"opacity 0.5s ease-in-out"},children:l.jsxs("div",{className:ze.sidebarContent,children:[l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",onClick:()=>r(`/${h}`),style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#94d334"}`},alt:"restaurant image"}),l.jsx(B,{to:`/${h}`,children:t==null?void 0:t[`name_${s}`]}),l.jsxs("div",{className:ze.language,children:[l.jsx("button",{style:{backgroundColor:s=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>e("ar"),children:"العربية"}),l.jsx("button",{style:{backgroundColor:s=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>e("he"),children:"עברית"})]})]})})},Uo="_footer_8o0ng_1",Ho="_social_8o0ng_10",Wo="_copy_8o0ng_37",Ne={footer:Uo,social:Ho,copy:Wo},Go=({data:t,language:e})=>{var s;return l.jsxs("section",{className:Ne.footer,children:[l.jsx("div",{className:Ne.social,children:(s=t==null?void 0:t.social_media_links)==null?void 0:s.map(r=>l.jsxs(B,{to:(r==null?void 0:r.platform)=="phone_number"?`tel:${r==null?void 0:r.url}`:r==null?void 0:r.url,onMouseEnter:n=>n.target.style.backgroundColor=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#94d334",onMouseLeave:n=>n.target.style.backgroundColor="transparent",target:"_blank",children:[(r==null?void 0:r.platform)=="facebook"&&l.jsx(ge,{}),(r==null?void 0:r.platform)=="youtube"&&l.jsx(_e,{}),(r==null?void 0:r.platform)=="tiktok"&&l.jsx(me,{}),(r==null?void 0:r.platform)=="pinterest"&&l.jsx(xe,{}),(r==null?void 0:r.platform)=="instagram"&&l.jsx(ye,{}),(r==null?void 0:r.platform)=="phone_number"&&l.jsx(Q,{}),!(r!=null&&r.platform)&&l.jsx(Pe,{})]},r==null?void 0:r.id))}),l.jsxs("div",{className:Ne.copy,children:[l.jsxs("p",{children:[O("rights",e)," © ",re]}),l.jsx(B,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[O("allRights",e),"."]})]})]})},Zo="_container_1vwz6_1",Qo="_sectionOne_1vwz6_9",Ko="_sectionHeader_1vwz6_15",Jo="_items_1vwz6_33",ea="_item_1vwz6_33",ta="_copy_1vwz6_86",sa="_cartmodal_1vwz6_142",ra="_modalContent_1vwz6_145",na="_cartItems_1vwz6_145",ia="_cartItem_1vwz6_145",oa="_extras_1vwz6_153",aa="_extrasContent_1vwz6_156",la="_remove_1vwz6_162",ca="_modalText_1vwz6_165",ha="_modal_1vwz6_145",da="_slideIn_1vwz6_1",fa="_slideOut_1vwz6_1",pa="_fadeIn_1vwz6_1",ee={container:Zo,sectionOne:Qo,sectionHeader:Ko,items:Jo,item:ea,copy:ta,cartmodal:sa,modalContent:ra,cartItems:na,cartItem:ia,extras:oa,extrasContent:aa,remove:la,modalText:ca,modal:ha,slideIn:da,slideOut:fa,fadeIn:pa},ua=({data:t,categories:e,language:s})=>{const r=pe();return l.jsx("section",{className:ee.container,children:l.jsxs("div",{className:ee.sectionOne,children:[l.jsx("div",{className:ee.sectionHeader,children:l.jsx("h3",{children:O("categories",s)})}),l.jsx("div",{className:ee.items,children:e&&(e==null?void 0:e.map((n,i)=>{if(n!=null&&n.is_active)return l.jsx(qe,{cascade:!0,damping:.1,style:{width:"100%",height:"100%"},children:l.jsxs("div",{onClick:()=>{r(`details/${n==null?void 0:n.id}`)},className:ee.item,children:[l.jsx("img",{src:(n==null?void 0:n.image)||De,alt:i+1}),l.jsx("p",{children:n==null?void 0:n[`name_${s}`]})]})},n==null?void 0:n.id)}))})]})})},ga="_container_19txh_1",_a="_itemsContainer_19txh_9",ma="_sectionHeader_19txh_14",xa="_items_19txh_9",ya="_category_19txh_62",ba="_item_19txh_9",va="_icons_19txh_121",Ca="_notActive_19txh_151",wa="_notAct_19txh_151",ja="_modal_19txh_176",Ma="_fadeIn_19txh_1",$a="_modalContent_19txh_192",Ea="_slideOut_19txh_1",Sa="_close_19txh_208",za="_modalText_19txh_232",Na="_tags_19txh_242",Aa="_tag_19txh_242",Ia="_extras_19txh_263",Fa="_extrasContent_19txh_277",ka="_slideIn_19txh_1",oe={container:ga,itemsContainer:_a,sectionHeader:ma,items:xa,category:ya,item:ba,icons:va,notActive:Ca,notAct:wa,modal:ja,fadeIn:Ma,modalContent:$a,"slide-out":"_slide-out_19txh_205",slideOut:Ea,close:Sa,modalText:za,tags:Na,tag:Aa,extras:Ia,extrasContent:Fa,slideIn:ka},Ta=({data:t,language:e})=>{const s=de(),{name:r,id:n}=K(),{categoryLoading:i}=Le(h=>h.main),[o,c]=C.useState(null),[a,d]=C.useState([]);return C.useEffect(()=>{s(yt(n)).then(h=>{var p;c(h==null?void 0:h.payload),d((p=h==null?void 0:h.payload)==null?void 0:p.products)})},[n]),i?l.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#000"},children:l.jsx(Re,{size:"1.5rem",style:{color:"#fff"}})}):l.jsx("section",{className:oe.container,children:l.jsxs("div",{className:oe.itemsContainer,children:[l.jsxs("div",{className:oe.sectionHeader,children:[l.jsxs(B,{to:`/${t==null?void 0:t.slug}`,style:{color:t==null?void 0:t.primary_color},children:["  ",l.jsx(ts,{})," ",O("back",e)]}),l.jsx("h3",{children:o==null?void 0:o[`name_${e}`]})]}),l.jsx("div",{className:oe.items,children:a==null?void 0:a.map((h,p)=>l.jsx(ue,{data:h,color:t==null?void 0:t.primary_color,to:`/${r}/product/${h==null?void 0:h.id}`}))})]})})},Oa=({data:t,categories:e})=>{var o,c;const s=Z(),{language:r,changeLanguage:n}=H(),{pathname:i}=Z();return C.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),l.jsx(fe,{children:l.jsxs("main",{className:[_t.main,!(i!=null&&i.includes("product"))&&_t.overlay].filter(Boolean).join(" "),style:{backgroundImage:!(i!=null&&i.includes("product"))&&`url(${(c=(o=t==null?void 0:t.header_images)==null?void 0:o[0])==null?void 0:c.image})`},children:[!(i!=null&&i.includes("product"))&&l.jsx(Yo,{data:t,changeLanguage:n,language:r}),i!=null&&i.includes("details")?l.jsx(Ta,{data:t,language:r}):i!=null&&i.includes("product")?l.jsx(be,{themeColor:t,multi:!0}):l.jsx(ua,{data:t,language:r,categories:e}),l.jsx(Go,{data:t,language:r})]})})},La="_main_3o6uh_1",Ra="_pages_3o6uh_4",Ba="_bottomNav_3o6uh_11",Pa="_copy_3o6uh_14",Da="_modal_3o6uh_48",Va="_cart_3o6uh_51",qa="_cartmodal_3o6uh_54",Xa="_modalContent_3o6uh_57",Ya="_cartItems_3o6uh_57",Ua="_cartItem_3o6uh_57",Ha="_extras_3o6uh_65",Wa="_extrasContent_3o6uh_68",Ga="_item_3o6uh_68",Za="_remove_3o6uh_74",Qa="_modalText_3o6uh_77",Ae={main:La,pages:Ra,bottomNav:Ba,copy:Pa,modal:Da,cart:Va,cartmodal:qa,modalContent:Xa,cartItems:Ya,cartItem:Ua,extras:Ha,extrasContent:Wa,item:Ga,remove:Za,modalText:Qa},Ka="_container_1vz1g_1",Ja="_sectionOne_1vz1g_10",el="_sectionHeader_1vz1g_15",tl="_items_1vz1g_31",sl="_item_1vz1g_31",rl="_copy_1vz1g_79",G={container:Ka,sectionOne:Ja,sectionHeader:el,items:tl,item:sl,copy:rl},nl=({data:t,language:e,categories:s})=>{const r=pe();return l.jsxs("section",{className:G.container,children:[l.jsxs("div",{className:G.sectionOne,children:[l.jsx("div",{className:G.sectionHeader,children:l.jsx("h3",{children:O("categories",e)})}),l.jsx("div",{className:G.items,children:s==null?void 0:s.map((n,i)=>{if(n!=null&&n.is_active)return l.jsx(qe,{cascade:!0,damping:.1,children:l.jsxs("div",{onClick:()=>r(`details/${n==null?void 0:n.id}`),className:G.item,style:{borderColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC"},children:[l.jsx("img",{src:(n==null?void 0:n.image)||De,alt:i+1}),l.jsx("p",{children:n==null?void 0:n[`name_${e}`]})]})},n==null?void 0:n.id)})})]}),l.jsxs("div",{className:G.copy,children:[l.jsxs("p",{children:[O("rights",e)," © ",re]}),l.jsx(B,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[O("allRights",e),"."]})]})]})};function mt(t){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"},child:[]}]})(t)}const il="_container_15pxe_1",ol="_sectionHeader_15pxe_8",al="_cards_15pxe_28",ll="_copy_15pxe_38",ae={container:il,sectionHeader:ol,cards:al,copy:ll},cl=({data:t,language:e})=>{const s=de(),{name:r,id:n}=K(),{categoryLoading:i}=Le(h=>h.main),[o,c]=C.useState(null),[a,d]=C.useState([]);return C.useEffect(()=>{s(yt(n)).then(h=>{var p;c(h==null?void 0:h.payload),d((p=h==null?void 0:h.payload)==null?void 0:p.products)})},[n]),i?l.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#000",backgroundSize:"cover",backgroundPosition:"center"},children:l.jsx(Re,{size:"1.5rem",style:{color:"#fff"}})}):l.jsxs("section",{className:ae.container,children:[l.jsxs("div",{className:ae.sectionHeader,children:[l.jsx("h3",{children:o==null?void 0:o[`name_${e}`]}),l.jsxs(B,{to:`/${t==null?void 0:t.slug}`,children:[" ",O("back",e)," ",l.jsx(ss,{})]})]}),l.jsx("div",{className:ae.cards,children:a==null?void 0:a.map(h=>l.jsx(ue,{data:h,color:t==null?void 0:t.primary_color,to:`/${r}/product/${h==null?void 0:h.id}`}))}),l.jsxs("div",{className:ae.copy,children:[l.jsxs("p",{children:[O("rights",e)," © ",re]}),l.jsx(B,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[O("allRights",e),"."]})]})]})},hl="_sidebar_mbqg4_1",dl="_sideHeader_mbqg4_27",fl="_language_mbqg4_33",pl="_sidebarContent_mbqg4_59",ul="_info_mbqg4_80",gl="_social_mbqg4_92",_l="_actions_mbqg4_119",ml="_workinghours_mbqg4_142",xl="_slider_mbqg4_170",le={sidebar:hl,sideHeader:dl,language:fl,sidebarContent:pl,info:ul,social:gl,actions:_l,workinghours:ml,slider:xl},yl=({data:t,language:e,changeLanguage:s})=>{var c,a,d;const[r,n]=C.useState(0),[i,o]=C.useState(!0);return C.useEffect(()=>{const h=setInterval(()=>{o(!1),setTimeout(()=>{n(p=>{var u;return(p+1)%((u=t==null?void 0:t.header_images)==null?void 0:u.length)}),o(!0)},500)},5e3);return()=>clearInterval(h)},[t==null?void 0:t.header_images]),l.jsx("section",{className:le.sidebar,style:{backgroundImage:`url(${(a=(c=t==null?void 0:t.header_images)==null?void 0:c[r])==null?void 0:a.image})`,backgroundSize:"cover",backgroundColor:"#000",backgroundPosition:"center",filter:i?"brightness(1)":"brightness(0.8)",transition:"filter 0.5s ease-in-out"},children:l.jsxs("div",{className:le.sidebarContent,children:[l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"}`},alt:"restaurant image"}),l.jsx("h3",{children:t==null?void 0:t[`name_${e}`]}),l.jsxs("div",{className:le.language,children:[l.jsx("button",{style:{backgroundColor:e=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("ar"),children:"العربية"}),l.jsx("button",{style:{backgroundColor:e=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("he"),children:"עברית"})]}),l.jsx("div",{className:le.social,children:(d=t==null?void 0:t.social_media_links)==null?void 0:d.map(h=>l.jsxs(B,{to:(h==null?void 0:h.platform)=="phone_number_1"?`tel:${h==null?void 0:h.url}`:h==null?void 0:h.url,onMouseEnter:p=>p.target.style.backgroundColor=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:p=>p.target.style.backgroundColor="transparent",target:"_blank",children:[(h==null?void 0:h.platform)=="facebook"&&l.jsx(ge,{}),(h==null?void 0:h.platform)=="youtube"&&l.jsx(_e,{}),(h==null?void 0:h.platform)=="tiktok"&&l.jsx(me,{}),(h==null?void 0:h.platform)=="pinterest"&&l.jsx(xe,{}),(h==null?void 0:h.platform)=="instagram"&&l.jsx(ye,{}),(h==null?void 0:h.platform)=="phone_number_1"&&l.jsx(Q,{}),(h==null?void 0:h.platform)=="phone_number_2"&&l.jsx(Q,{}),!(h!=null&&h.platform)&&l.jsx(Pe,{})]},h==null?void 0:h.id))})]})})},bl=({data:t,categories:e})=>{const s=Z(),[r,n]=C.useState(!1),[i,o]=C.useState(!1),c=pe(),{language:a,changeLanguage:d}=H(),[h,p]=C.useState(0),u=Z().pathname,{name:f}=K();return C.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),l.jsx(fe,{children:l.jsxs("main",{className:Ae.main,children:[!(u!=null&&u.includes("product"))&&l.jsx(yl,{data:t,setShowModal:n,changeLanguage:d,language:a,showModal:r}),l.jsx("div",{className:Ae.pages,style:{width:(u==null?void 0:u.includes("product"))&&"100%"},children:u!=null&&u.includes("details")?l.jsx(cl,{language:a,data:t}):u!=null&&u.includes("product")?l.jsx(be,{themeColor:t,multi:!0}):l.jsx(nl,{data:t,categories:e,language:a,showCartModal:i,setShowCartModal:o})}),l.jsxs("div",{className:Ae.bottomNav,children:[l.jsxs("button",{style:{color:h===1&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{p(1),c(`/${f}`)},children:[l.jsx(rs,{}),O("home",a)]}),a=="ar"&&l.jsxs("button",{style:{color:h===2&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{d("he"),p(2)},children:[l.jsx(mt,{}),"العربية"]}),a=="he"&&l.jsxs("button",{style:{color:h===2&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{d("ar"),p(2)},children:[l.jsx(mt,{}),"עברית"]})]})]})})},jl=()=>{const t=de(),[e,s]=C.useState(null),[r,n]=C.useState(null),{name:i}=K(),{mainDataByIdLoading:o,mainDataByIdError:c}=Le(a=>a.main);return C.useEffect(()=>{t(Ut(i)).then(a=>{s(a.payload)}),t(Ht(i)).then(a=>{var d;n((d=a==null?void 0:a.payload)==null?void 0:d.results)})},[]),o?l.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#fff"},children:l.jsx(Re,{size:"1.5rem",style:{color:"#000"}})}):(c==null?void 0:c.detail)=="No Restaurant matches the given query."?l.jsx("div",{style:{position:"fixed",left:0,top:0,zIndex:999,display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#fff"},children:l.jsxs("div",{className:"errorContainer",children:[l.jsx("img",{src:Wt,alt:"Sorry, The page not found"}),l.jsx("h4",{children:"عفوا هذة الصفحة غير متاحة"}),l.jsx("p",{children:"ربما يكون الرابط الذي اتبعته معطلاً أو تمت إزالة الصفحة"}),l.jsx(B,{to:"/",children:"العودة للرئيسية"})]})}):l.jsxs(l.Fragment,{children:[(e==null?void 0:e.theme)===1&&l.jsx(Vn,{data:e,categories:r}),(e==null?void 0:e.theme)===2&&l.jsx(xo,{data:e,categories:r}),(e==null?void 0:e.theme)===3&&l.jsx(Oa,{data:e,categories:r}),(e==null?void 0:e.theme)===4&&l.jsx(bl,{data:e,categories:r})]})};export{jl as default};
