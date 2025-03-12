import{r as j,e as Lt,f as Rt,s as Bt,_ as he,h as Ct,i as Pt,k as Dt,j as l,l as Vt,m as qt,a as H,L as T,u as fe,n as J,o as Xt,q as Q,t as pe,v as Yt,E as Ut,w as Ht,x as y,y as Wt,z as je,A as Gt,B as ue,b as Pe,D as jt,C as De,F as Zt,G as Qt,H as Kt}from"./index-CpEVqwTN.js";import{g as $e,a as Ve,c as Jt,b as es,S as $t,d as Mt,M as ts,P as ge,e as ss,f as rs}from"./ProductCard-DMxDKfOW.js";import{G as qe,b as me,c as _e,d as xe,e as ye,f as be,g as K,h as Me,t as L,I as ns,i as is,j as os,F as ve,k as Ge,l as as,m as ls,n as cs}from"./translations-CGo2fBSj.js";function Ee(t,e){var s,r;return j.isValidElement(t)&&e.indexOf((s=t.type.muiName)!=null?s:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}const hs=j.createContext(void 0);function Ze(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function Qe(t,e=!1){return t&&(Ze(t.value)&&t.value!==""||e&&Ze(t.defaultValue)&&t.defaultValue!=="")}function ds(t){return t.startAdornment}function fs(t){return Lt("MuiFormControl",t)}Rt("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ps=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],us=t=>{const{classes:e,margin:s,fullWidth:r}=t,n={root:["root",s!=="none"&&`margin${Ct(s)}`,r&&"fullWidth"]};return qt(n,fs,e)},gs=Bt("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:t},e)=>he({},e.root,e[`margin${Ct(t.margin)}`],t.fullWidth&&e.fullWidth)})(({ownerState:t})=>he({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},t.margin==="normal"&&{marginTop:16,marginBottom:8},t.margin==="dense"&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})),ms=j.forwardRef(function(e,s){const r=Pt({props:e,name:"MuiFormControl"}),{children:n,className:i,color:o="primary",component:c="div",disabled:a=!1,error:d=!1,focused:h,fullWidth:p=!1,hiddenLabel:u=!1,margin:f="none",required:g=!1,size:m="medium",variant:_="outlined"}=r,x=Dt(r,ps),$=he({},r,{color:o,component:c,disabled:a,error:d,fullWidth:p,hiddenLabel:u,margin:f,required:g,size:m,variant:_}),b=us($),[v,E]=j.useState(()=>{let N=!1;return n&&j.Children.forEach(n,C=>{if(!Ee(C,["Input","Select"]))return;const R=Ee(C,["Select"])?C.props.input:C;R&&ds(R.props)&&(N=!0)}),N}),[M,z]=j.useState(()=>{let N=!1;return n&&j.Children.forEach(n,C=>{Ee(C,["Input","Select"])&&(Qe(C.props,!0)||Qe(C.props.inputProps,!0))&&(N=!0)}),N}),[I,A]=j.useState(!1);a&&I&&A(!1);const S=h!==void 0&&!a?h:I;let k;const w=j.useMemo(()=>({adornedStart:v,setAdornedStart:E,color:o,disabled:a,error:d,filled:M,focused:S,fullWidth:p,hiddenLabel:u,size:m,onBlur:()=>{A(!1)},onEmpty:()=>{z(!1)},onFilled:()=>{z(!0)},onFocus:()=>{A(!0)},registerEffect:k,required:g,variant:_}),[v,o,a,d,M,S,p,u,k,g,m,_]);return l.jsx(hs.Provider,{value:w,children:l.jsx(gs,he({as:c,ownerState:$,className:Vt(b.root,i),ref:s},x,{children:n}))})});function Xe(t){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"},child:[]}]})(t)}function _s(t){return qe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"},child:[]}]})(t)}const xs={},ys="_header_owfke_1",bs="_language_owfke_10",vs="_modal_owfke_16",ws="_modalContent_owfke_28",Cs="_headerTop_owfke_67",js="_logo_owfke_76",$s="_headerPhoto_owfke_87",Ms="_headerBottom_owfke_101",Es="_headerText_owfke_109",zs="_workinghours_owfke_123",Ss="_social_owfke_137",Ns="_lang_owfke_10",D={header:ys,language:bs,modal:vs,modalContent:ws,headerTop:Cs,logo:js,headerPhoto:$s,headerBottom:Ms,headerText:Es,workinghours:zs,social:Ss,lang:Ns};function Et(t){let{swiper:e,extendParams:s,on:r,emit:n,params:i}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,c,a=i&&i.autoplay?i.autoplay.delay:3e3,d=i&&i.autoplay?i.autoplay.delay:3e3,h,p=new Date().getTime(),u,f,g,m,_,x,$;function b(F){!e||e.destroyed||!e.wrapperEl||F.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",b),!($||F.detail&&F.detail.bySwiperTouchMove)&&S())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(d=h,u=!1);const F=e.autoplay.paused?h:p+d-new Date().getTime();e.autoplay.timeLeft=F,n("autoplayTimeLeft",F,F/a),c=requestAnimationFrame(()=>{v()})},E=()=>{let F;return e.virtual&&e.params.virtual.enabled?F=e.slides.filter(P=>P.classList.contains("swiper-slide-active"))[0]:F=e.slides[e.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},M=F=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(c),v();let X=typeof F>"u"?e.params.autoplay.delay:F;a=e.params.autoplay.delay,d=e.params.autoplay.delay;const P=E();!Number.isNaN(P)&&P>0&&typeof F>"u"&&(X=P,a=P,d=P),h=X;const ee=e.params.speed,We=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ee,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,ee,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ee,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,ee,!0,!0),n("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return X>0?(clearTimeout(o),o=setTimeout(()=>{We()},X)):requestAnimationFrame(()=>{We()}),X},z=()=>{p=new Date().getTime(),e.autoplay.running=!0,M(),n("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(c),n("autoplayStop")},A=(F,X)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),F||(x=!0);const P=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",b):S()};if(e.autoplay.paused=!0,X){_&&(h=e.params.autoplay.delay),_=!1,P();return}h=(h||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&h<0&&!e.params.loop)&&(h<0&&(h=0),P())},S=()=>{e.isEnd&&h<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),x?(x=!1,M(h)):M(),e.autoplay.paused=!1,n("autoplayResume"))},k=()=>{if(e.destroyed||!e.autoplay.running)return;const F=$e();F.visibilityState==="hidden"&&(x=!0,A(!0)),F.visibilityState==="visible"&&S()},w=F=>{F.pointerType==="mouse"&&(x=!0,$=!0,!(e.animating||e.autoplay.paused)&&A(!0))},N=F=>{F.pointerType==="mouse"&&($=!1,e.autoplay.paused&&S())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",w),e.el.addEventListener("pointerleave",N))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",w),e.el.removeEventListener("pointerleave",N))},Ce=()=>{$e().addEventListener("visibilitychange",k)},W=()=>{$e().removeEventListener("visibilitychange",k)};r("init",()=>{e.params.autoplay.enabled&&(C(),Ce(),z())}),r("destroy",()=>{R(),W(),e.autoplay.running&&I()}),r("_freeModeStaticRelease",()=>{(g||x)&&S()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():A(!0,!0)}),r("beforeTransitionStart",(F,X,P)=>{e.destroyed||!e.autoplay.running||(P||!e.params.autoplay.disableOnInteraction?A(!0,!0):I())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}f=!0,g=!1,x=!1,m=setTimeout(()=>{x=!0,g=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){g=!1,f=!1;return}g&&e.params.cssMode&&S(),g=!1,f=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(_=!0)}),Object.assign(e.autoplay,{start:z,stop:I,pause:A,resume:S})}function As(t){const{effect:e,swiper:s,on:r,setTranslate:n,setTransition:i,overwriteParams:o,perspective:c,recreateShadows:a,getEffectParams:d}=t;r("beforeInit",()=>{if(s.params.effect!==e)return;s.classNames.push(`${s.params.containerModifierClass}${e}`),c&&c()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(s.params,p),Object.assign(s.originalParams,p)}),r("setTranslate",()=>{s.params.effect===e&&n()}),r("setTransition",(p,u)=>{s.params.effect===e&&i(u)}),r("transitionEnd",()=>{if(s.params.effect===e&&a){if(!d||!d().slideShadows)return;s.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>u.remove())}),a()}});let h;r("virtualUpdate",()=>{s.params.effect===e&&(s.slides.length||(h=!0),requestAnimationFrame(()=>{h&&s.slides&&s.slides.length&&(n(),h=!1)}))})}function Is(t,e){const s=Ve(e);return s!==e&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function Ke(t,e,s){const r=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${t}`}`,n=Ve(e);let i=n.querySelector(`.${r.split(" ").join(".")}`);return i||(i=Jt("div",r.split(" ")),n.append(i)),i}function Fs(t){let{swiper:e,extendParams:s,on:r}=t;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),As({effect:"coverflow",swiper:e,on:r,setTranslate:()=>{const{width:o,height:c,slides:a,slidesSizesGrid:d}=e,h=e.params.coverflowEffect,p=e.isHorizontal(),u=e.translate,f=p?-u+o/2:-u+c/2,g=p?h.rotate:-h.rotate,m=h.depth,_=es(e);for(let x=0,$=a.length;x<$;x+=1){const b=a[x],v=d[x],E=b.swiperSlideOffset,M=(f-E-v/2)/v,z=typeof h.modifier=="function"?h.modifier(M):M*h.modifier;let I=p?g*z:0,A=p?0:g*z,S=-m*Math.abs(z),k=h.stretch;typeof k=="string"&&k.indexOf("%")!==-1&&(k=parseFloat(h.stretch)/100*v);let w=p?0:k*z,N=p?k*z:0,C=1-(1-h.scale)*Math.abs(z);Math.abs(N)<.001&&(N=0),Math.abs(w)<.001&&(w=0),Math.abs(S)<.001&&(S=0),Math.abs(I)<.001&&(I=0),Math.abs(A)<.001&&(A=0),Math.abs(C)<.001&&(C=0);const R=`translate3d(${N}px,${w}px,${S}px)  rotateX(${_(A)}deg) rotateY(${_(I)}deg) scale(${C})`,Ce=Is(h,b);if(Ce.style.transform=R,b.style.zIndex=-Math.abs(Math.round(z))+1,h.slideShadows){let W=p?b.querySelector(".swiper-slide-shadow-left"):b.querySelector(".swiper-slide-shadow-top"),F=p?b.querySelector(".swiper-slide-shadow-right"):b.querySelector(".swiper-slide-shadow-bottom");W||(W=Ke("coverflow",b,p?"left":"top")),F||(F=Ke("coverflow",b,p?"right":"bottom")),W&&(W.style.opacity=z>0?z:0),F&&(F.style.opacity=-z>0?-z:0)}}},setTransition:o=>{e.slides.map(a=>Ve(a)).forEach(a=>{a.style.transitionDuration=`${o}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ks=({data:t})=>{var r,n;const{language:e,changeLanguage:s}=H();return l.jsxs("section",{className:D.header,children:[l.jsxs("div",{className:D.headerTop,style:{borderColor:t!=null&&t.border_color?t==null?void 0:t.border_color:"#7FB23C"},children:[l.jsx("div",{className:D.headerPhoto,children:l.jsx($t,{spaceBetween:0,slidesPerView:1,modules:[Et],loop:!0,direction:"vertical",autoplay:{delay:3e3,disableOnInteraction:!1},children:(r=t==null?void 0:t.header_images)==null?void 0:r.map((i,o)=>l.jsx(Mt,{children:l.jsx("img",{className:D.image,src:i==null?void 0:i.image,alt:o})},o))})}),l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",className:D.logo,style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#7FB23C"}`},alt:"logo"})]}),l.jsx("div",{className:D.headerBottom,children:l.jsxs("div",{className:D.headerText,children:[l.jsx("h3",{children:t==null?void 0:t[`name_${e}`]}),l.jsx("div",{className:D.social,children:(n=t==null?void 0:t.social_media_links)==null?void 0:n.map(i=>l.jsxs(T,{to:(i==null?void 0:i.platform)=="phone_number_1"?`tel:${i==null?void 0:i.url}`:i==null?void 0:i.url,onMouseOver:o=>o.target.style.color=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:o=>o.target.style.color="#000",target:"_blank",children:[(i==null?void 0:i.platform)=="facebook"&&l.jsx(me,{}),(i==null?void 0:i.platform)=="youtube"&&l.jsx(_e,{}),(i==null?void 0:i.platform)=="tiktok"&&l.jsx(xe,{}),(i==null?void 0:i.platform)=="pinterest"&&l.jsx(ye,{}),(i==null?void 0:i.platform)=="instagram"&&l.jsx(be,{}),(i==null?void 0:i.platform)=="phone_number_1"&&l.jsx(K,{}),(i==null?void 0:i.platform)=="phone_number_2"&&l.jsx(K,{}),!(i!=null&&i.platform)&&l.jsx(Me,{})]},i==null?void 0:i.id))})]})}),l.jsx("div",{className:D.language,children:l.jsx(ms,{sx:{minWidth:110},children:e=="ar"?l.jsxs("button",{onClick:()=>{s("he")},className:D.lang,children:[l.jsx(Me,{}),"עברית"]}):l.jsxs("button",{onClick:()=>{s("ar")},className:D.lang,children:[l.jsx(Me,{}),"العربية"]})})})]})},Ts="_container_1yp4k_1",Os="_orderNow_1yp4k_8",Ls="_float_1yp4k_1",Rs="_categories_1yp4k_39",Bs="_item_1yp4k_49",Ps="_itemsContainer_1yp4k_71",Ds="_items_1yp4k_71",Vs="_icons_1yp4k_109",qs="_notActive_1yp4k_139",Xs="_notAct_1yp4k_139",Ys="_copy_1yp4k_164",G={container:Ts,orderNow:Os,float:Ls,categories:Rs,item:Bs,itemsContainer:Ps,items:Ds,icons:Vs,notActive:qs,notAct:Xs,copy:Ys},Us="_modal_y03aj_1",Hs="_fadeIn_y03aj_1",Ws="_modalContent_y03aj_17",Gs="_slideOut_y03aj_1",Zs="_close_y03aj_33",Qs="_modalText_y03aj_57",Ks="_tags_y03aj_69",Js="_extras_y03aj_80",er="_extrasContent_y03aj_94",tr="_slideIn_y03aj_1",sr="_item_y03aj_97",q={modal:Us,fadeIn:Hs,modalContent:Ws,"slide-out":"_slide-out_y03aj_30",slideOut:Gs,close:Zs,modalText:Qs,tags:Ks,extras:Js,extrasContent:er,slideIn:tr,item:sr},rr=({item:t,showModal:e,setShowModal:s,mainData:r})=>{var a,d;const{language:n}=H(),[i,o]=j.useState(!1),c=h=>{h.target.classList.contains(q.modal)&&(s(!1),o(!1))};if(e)return l.jsx("div",{className:q.modal,onClick:c,children:l.jsxs("div",{className:q.modalContent,children:[l.jsx("button",{style:{backgroundColor:r!=null&&r.primary_color?r==null?void 0:r.primary_color:"#7FB23C"},className:q.close,onClick:()=>s(!1),children:l.jsx(ts,{})}),l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",alt:"example"}),l.jsxs("div",{className:q.modalText,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("h4",{children:t==null?void 0:t[`name_${n}`]}),l.jsx("div",{className:q.tags,children:(t==null?void 0:t.types)&&((a=t==null?void 0:t.types)==null?void 0:a.map((h,p)=>l.jsx("div",{className:q.tag,children:l.jsx("img",{title:h==null?void 0:h[`name_${n}`],src:h==null?void 0:h.icon})},p)))})]}),l.jsx("p",{children:t==null?void 0:t[`description_${n}`]}),l.jsxs("p",{children:[L("price",n)," : ",l.jsxs("span",{style:{color:r!=null&&r.primary_color?r==null?void 0:r.primary_color:"#7FB23C",fontWeight:"bold"},children:[t==null?void 0:t.price,"₪"]})]}),l.jsxs("div",{className:q.extras,children:[l.jsxs("button",{onClick:()=>o(!i),children:[L("extras",n)," ",l.jsx(ns,{style:{transform:i&&"rotate(180deg)",transition:"all 250ms ease-in-out"}})]}),i&&l.jsx("div",{className:q.extrasContent,children:(d=t==null?void 0:t.variants)==null?void 0:d.map((h,p)=>l.jsxs("div",{className:q.item,children:[l.jsx("p",{children:h==null?void 0:h[`name_${n}`]}),l.jsxs("p",{children:[L("price",n)," : ",l.jsxs("span",{style:{color:r!=null&&r.primary_color?r==null?void 0:r.primary_color:"#7FB23C"},children:[h==null?void 0:h.price,"₪"]})]})]},p))})]})]})]})})},ne=new Date().getFullYear();function Te(t){t!=null&&t.startsWith("#")&&(t=t==null?void 0:t.substring(1)),t.length===3&&(t=t.split("").map(i=>i+i).join(""));const e=parseInt(t.substring(0,2),16),s=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16);return(e*299+s*587+r*114)/1e3<128}const nr=({mainData:t,categories:e})=>{const{language:s}=H(),[r,n]=j.useState(!1),[i,o]=j.useState(null),c=a=>{document.getElementById(a).scrollIntoView({behavior:"smooth"})};return j.useEffect(()=>{r?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[r]),l.jsxs("section",{className:G.container,children:[l.jsx(rr,{item:i,mainData:t,showModal:r,setShowModal:n}),l.jsx("div",{className:G.categories,children:e==null?void 0:e.map((a,d)=>{if(a!=null&&a.is_active)return l.jsxs("div",{className:G.item,onClick:()=>c(a==null?void 0:a.id),children:[l.jsx("img",{src:a!=null&&a.image?a==null?void 0:a.image:"https://via.placeholder.com/150",alt:d}),l.jsx("p",{children:a==null?void 0:a[`name_${s}`]})]},d)})}),e==null?void 0:e.map((a,d)=>{var h;return l.jsxs("div",{className:G.itemsContainer,id:a==null?void 0:a.id,children:[l.jsx("h3",{children:a==null?void 0:a[`name_${s}`]}),l.jsx("div",{className:G.items,children:(h=a==null?void 0:a.products)==null?void 0:h.map((p,u)=>{var f;return l.jsx(ge,{data:p,brandInfo:t,color:t==null?void 0:t.primary_color,to:`/${(f=p==null?void 0:p.shop)==null?void 0:f.slug}/product/${p==null?void 0:p.id}`})})})]},a==null?void 0:a.id)}),l.jsxs("div",{className:G.copy,children:[l.jsxs("p",{children:[L("rights",s)," © ",ne]}),l.jsx(T,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[L("allRights",s),"."]})]})]})},ir="_outer_n2nsl_1",or="_container_n2nsl_8",ar="_row_n2nsl_29",lr="_rowlogo_n2nsl_35",cr="_brand_n2nsl_44",hr="_content_n2nsl_63",dr="_sale_n2nsl_70",fr="_name_n2nsl_80",pr="_desc_n2nsl_84",ur="_colors_n2nsl_88",gr="_sizes_n2nsl_97",mr="_price_n2nsl_110",_r="_status_n2nsl_147",xr="_gallery_n2nsl_157",yr="_left_n2nsl_166",br="_right_n2nsl_178",B={outer:ir,container:or,row:ar,rowlogo:lr,brand:cr,content:hr,sale:dr,name:fr,desc:pr,colors:ur,sizes:gr,price:mr,status:_r,gallery:xr,left:yr,right:br};function se(t){let e=t[0],s=t[1],r=t[2];return Math.sqrt(e*e+s*s+r*r)}function Oe(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function vr(t,e,s,r){return t[0]=e,t[1]=s,t[2]=r,t}function Je(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t}function et(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t}function wr(t,e,s){return t[0]=e[0]*s[0],t[1]=e[1]*s[1],t[2]=e[2]*s[2],t}function Cr(t,e,s){return t[0]=e[0]/s[0],t[1]=e[1]/s[1],t[2]=e[2]/s[2],t}function ze(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function jr(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(s*s+r*r+n*n)}function $r(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return s*s+r*r+n*n}function tt(t){let e=t[0],s=t[1],r=t[2];return e*e+s*s+r*r}function Mr(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Er(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Le(t,e){let s=e[0],r=e[1],n=e[2],i=s*s+r*r+n*n;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function zt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function st(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[0],c=s[1],a=s[2];return t[0]=n*a-i*c,t[1]=i*o-r*a,t[2]=r*c-n*o,t}function zr(t,e,s,r){let n=e[0],i=e[1],o=e[2];return t[0]=n+r*(s[0]-n),t[1]=i+r*(s[1]-i),t[2]=o+r*(s[2]-o),t}function Sr(t,e,s,r,n){const i=Math.exp(-r*n);let o=e[0],c=e[1],a=e[2];return t[0]=s[0]+(o-s[0])*i,t[1]=s[1]+(c-s[1])*i,t[2]=s[2]+(a-s[2])*i,t}function Nr(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[3]*r+s[7]*n+s[11]*i+s[15];return o=o||1,t[0]=(s[0]*r+s[4]*n+s[8]*i+s[12])/o,t[1]=(s[1]*r+s[5]*n+s[9]*i+s[13])/o,t[2]=(s[2]*r+s[6]*n+s[10]*i+s[14])/o,t}function Ar(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[3]*r+s[7]*n+s[11]*i+s[15];return o=o||1,t[0]=(s[0]*r+s[4]*n+s[8]*i)/o,t[1]=(s[1]*r+s[5]*n+s[9]*i)/o,t[2]=(s[2]*r+s[6]*n+s[10]*i)/o,t}function Ir(t,e,s){let r=e[0],n=e[1],i=e[2];return t[0]=r*s[0]+n*s[3]+i*s[6],t[1]=r*s[1]+n*s[4]+i*s[7],t[2]=r*s[2]+n*s[5]+i*s[8],t}function Fr(t,e,s){let r=e[0],n=e[1],i=e[2],o=s[0],c=s[1],a=s[2],d=s[3],h=c*i-a*n,p=a*r-o*i,u=o*n-c*r,f=c*u-a*p,g=a*h-o*u,m=o*p-c*h,_=d*2;return h*=_,p*=_,u*=_,f*=2,g*=2,m*=2,t[0]=r+h+f,t[1]=n+p+g,t[2]=i+u+m,t}const kr=function(){const t=[0,0,0],e=[0,0,0];return function(s,r){Oe(t,s),Oe(e,r),Le(t,t),Le(e,e);let n=zt(t,e);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function Tr(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class V extends Array{constructor(e=0,s=e,r=e){return super(e,s,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,s=e,r=e){return e.length?this.copy(e):(vr(this,e,s,r),this)}copy(e){return Oe(this,e),this}add(e,s){return s?Je(this,e,s):Je(this,this,e),this}sub(e,s){return s?et(this,e,s):et(this,this,e),this}multiply(e){return e.length?wr(this,this,e):ze(this,this,e),this}divide(e){return e.length?Cr(this,this,e):ze(this,this,1/e),this}inverse(e=this){return Er(this,e),this}len(){return se(this)}distance(e){return e?jr(this,e):se(this)}squaredLen(){return tt(this)}squaredDistance(e){return e?$r(this,e):tt(this)}negate(e=this){return Mr(this,e),this}cross(e,s){return s?st(this,e,s):st(this,this,e),this}scale(e){return ze(this,this,e),this}normalize(){return Le(this,this),this}dot(e){return zt(this,e)}equals(e){return Tr(this,e)}applyMatrix3(e){return Ir(this,this,e),this}applyMatrix4(e){return Nr(this,this,e),this}scaleRotateMatrix4(e){return Ar(this,this,e),this}applyQuaternion(e){return Fr(this,this,e),this}angle(e){return kr(this,e)}lerp(e,s){return zr(this,this,e,s),this}smoothLerp(e,s,r){return Sr(this,this,e,s,r),this}clone(){return new V(this[0],this[1],this[2])}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}transformDirection(e){const s=this[0],r=this[1],n=this[2];return this[0]=e[0]*s+e[4]*r+e[8]*n,this[1]=e[1]*s+e[5]*r+e[9]*n,this[2]=e[2]*s+e[6]*r+e[10]*n,this.normalize()}}const rt=new V;let Or=1,Lr=1,nt=!1;class Rr{constructor(e,s={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=s,this.id=Or++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in s)this.addAttribute(r,s[r])}addAttribute(e,s){if(this.attributes[e]=s,s.id=Lr++,s.size=s.size||1,s.type=s.type||(s.data.constructor===Float32Array?this.gl.FLOAT:s.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),s.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,s.normalized=s.normalized||!1,s.stride=s.stride||0,s.offset=s.offset||0,s.count=s.count||(s.stride?s.data.byteLength/s.stride:s.data.length/s.size),s.divisor=s.instanced||0,s.needsUpdate=!1,s.usage=s.usage||this.gl.STATIC_DRAW,s.buffer||this.updateAttribute(s),s.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==s.count*s.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,s.count*s.divisor);this.instancedCount=s.count*s.divisor}else e==="index"?this.drawRange.count=s.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,s.count))}updateAttribute(e){const s=!e.buffer;s&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),s?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,s){this.drawRange.start=e,this.drawRange.count=s}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((s,{name:r,type:n})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const i=this.attributes[r];this.gl.bindBuffer(i.target,i.buffer),this.glState.boundBuffer=i.buffer;let o=1;n===35674&&(o=2),n===35675&&(o=3),n===35676&&(o=4);const c=i.size/o,a=o===1?0:o*o*4,d=o===1?0:o*4;for(let h=0;h<o;h++)this.gl.vertexAttribPointer(s+h,c,i.type,i.normalized,i.stride+a,i.offset+h*d),this.gl.enableVertexAttribArray(s+h),this.gl.renderer.vertexAttribDivisor(s+h,i.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:s=this.gl.TRIANGLES}){var n;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((i,{name:o})=>{const c=this.attributes[o];c.needsUpdate&&this.updateAttribute(c)});let r=2;((n=this.attributes.index)==null?void 0:n.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(s,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(s,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!nt)return console.warn("No position buffer data found to compute bounds"),nt=!0}computeBoundingBox(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||(this.bounds={min:new V,max:new V,center:new V,scale:new V,radius:1/0});const n=this.bounds.min,i=this.bounds.max,o=this.bounds.center,c=this.bounds.scale;n.set(1/0),i.set(-1/0);for(let a=0,d=s.length;a<d;a+=r){const h=s[a],p=s[a+1],u=s[a+2];n.x=Math.min(h,n.x),n.y=Math.min(p,n.y),n.z=Math.min(u,n.z),i.x=Math.max(h,i.x),i.y=Math.max(p,i.y),i.z=Math.max(u,i.z)}c.sub(i,n),o.add(n,i).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let n=0;for(let i=0,o=s.length;i<o;i+=r)rt.fromArray(s,i),n=Math.max(n,this.bounds.center.squaredDistance(rt));this.bounds.radius=Math.sqrt(n)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Br=1;const it={};class Pr{constructor(e,{vertex:s,fragment:r,uniforms:n={},transparent:i=!1,cullFace:o=e.BACK,frontFace:c=e.CCW,depthTest:a=!0,depthWrite:d=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=n,this.id=Br++,s||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=i,this.cullFace=o,this.frontFace=c,this.depthTest=a,this.depthWrite=d,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:s,fragment:r})}setShaders({vertex:e,fragment:s}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${ot(e)}`)),s&&(this.gl.shaderSource(this.fragmentShader,s),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${ot(s)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let c=this.gl.getActiveUniform(this.program,o);this.uniformLocations.set(c,this.gl.getUniformLocation(this.program,c.name));const a=c.name.match(/(\w+)/g);c.uniformName=a[0],c.nameComponents=a.slice(1)}this.attributeLocations=new Map;const n=[],i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const c=this.gl.getActiveAttrib(this.program,o),a=this.gl.getAttribLocation(this.program,c.name);a!==-1&&(n[a]=c.name,this.attributeLocations.set(c,a))}this.attributeOrder=n.join("")}setBlendFunc(e,s,r,n){this.blendFunc.src=e,this.blendFunc.dst=s,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=n,e&&(this.transparent=!0)}setBlendEquation(e,s){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=s}setStencilFunc(e,s,r){this.stencilRef=s,this.stencilFunc.func=e,this.stencilFunc.ref=s,this.stencilFunc.mask=r}setStencilOp(e,s,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=s,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let s=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,i)=>{let o=this.uniforms[i.uniformName];for(const c of i.nameComponents){if(!o)break;if(c in o)o=o[c];else{if(Array.isArray(o.value))break;o=void 0;break}}if(!o)return at(`Active uniform ${i.name} has not been supplied`);if(o&&o.value===void 0)return at(`${i.name} uniform is missing a value parameter`);if(o.value.texture)return s=s+1,o.value.update(s),Se(this.gl,i.type,n,s);if(o.value.length&&o.value[0].texture){const c=[];return o.value.forEach(a=>{s=s+1,a.update(s),c.push(s)}),Se(this.gl,i.type,n,c)}Se(this.gl,i.type,n,o.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Se(t,e,s,r){r=r.length?Dr(r):r;const n=t.renderer.state.uniformLocations.get(s);if(r.length)if(n===void 0||n.length!==r.length)t.renderer.state.uniformLocations.set(s,r.slice(0));else{if(Vr(n,r))return;n.set?n.set(r):qr(n,r),t.renderer.state.uniformLocations.set(s,n)}else{if(n===r)return;t.renderer.state.uniformLocations.set(s,r)}switch(e){case 5126:return r.length?t.uniform1fv(s,r):t.uniform1f(s,r);case 35664:return t.uniform2fv(s,r);case 35665:return t.uniform3fv(s,r);case 35666:return t.uniform4fv(s,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?t.uniform1iv(s,r):t.uniform1i(s,r);case 35671:case 35667:return t.uniform2iv(s,r);case 35672:case 35668:return t.uniform3iv(s,r);case 35673:case 35669:return t.uniform4iv(s,r);case 35674:return t.uniformMatrix2fv(s,!1,r);case 35675:return t.uniformMatrix3fv(s,!1,r);case 35676:return t.uniformMatrix4fv(s,!1,r)}}function ot(t){let e=t.split(`
`);for(let s=0;s<e.length;s++)e[s]=s+1+": "+e[s];return e.join(`
`)}function Dr(t){const e=t.length,s=t[0].length;if(s===void 0)return t;const r=e*s;let n=it[r];n||(it[r]=n=new Float32Array(r));for(let i=0;i<e;i++)n.set(t[i],i*s);return n}function Vr(t,e){if(t.length!==e.length)return!1;for(let s=0,r=t.length;s<r;s++)if(t[s]!==e[s])return!1;return!0}function qr(t,e){for(let s=0,r=t.length;s<r;s++)t[s]=e[s]}let Ne=0;function at(t){Ne>100||(console.warn(t),Ne++,Ne>100&&console.warn("More than 100 program warnings - stopping logs."))}const Ae=new V;let Xr=1;class Yr{constructor({canvas:e=document.createElement("canvas"),width:s=300,height:r=150,dpr:n=1,alpha:i=!1,depth:o=!0,stencil:c=!1,antialias:a=!1,premultipliedAlpha:d=!1,preserveDrawingBuffer:h=!1,powerPreference:p="default",autoClear:u=!0,webgl:f=2}={}){const g={alpha:i,depth:o,stencil:c,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p};this.dpr=n,this.alpha=i,this.color=!0,this.depth=o,this.stencil=c,this.premultipliedAlpha=d,this.autoClear=u,this.id=Xr++,f===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(s,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,s){this.width=e,this.height=s,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=s*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:s+"px"})}setViewport(e,s,r=0,n=0){this.state.viewport.width===e&&this.state.viewport.height===s||(this.state.viewport.width=e,this.state.viewport.height=s,this.state.viewport.x=r,this.state.viewport.y=n,this.gl.viewport(r,n,e,s))}setScissor(e,s,r=0,n=0){this.gl.scissor(r,n,e,s)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,s,r,n){this.state.blendFunc.src===e&&this.state.blendFunc.dst===s&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=e,this.state.blendFunc.dst=s,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=n,r!==void 0?this.gl.blendFuncSeparate(e,s,r,n):this.gl.blendFunc(e,s))}setBlendEquation(e,s){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===s)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=s,s!==void 0?this.gl.blendEquationSeparate(e,s):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,s,r){this.state.stencilFunc===e&&this.state.stencilRef===s&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=s||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,s||0,r||0))}setStencilOp(e,s,r){this.state.stencilFail===e&&this.state.stencilDepthFail===s&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=s,this.state.stencilDepthPass=r,this.gl.stencilOp(e,s,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:s=null}={}){this.state.framebuffer!==s&&(this.state.framebuffer=s,this.gl.bindFramebuffer(e,s))}getExtension(e,s,r){return s&&this.gl[s]?this.gl[s].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),s?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:e.zDepth!==s.zDepth?e.zDepth-s.zDepth:s.id-e.id}sortTransparent(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.zDepth!==s.zDepth?s.zDepth-e.zDepth:s.id-e.id}sortUI(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:s.id-e.id}getRenderList({scene:e,camera:s,frustumCull:r,sort:n}){let i=[];if(s&&r&&s.updateFrustum(),e.traverse(o=>{if(!o.visible)return!0;o.draw&&(r&&o.frustumCulled&&s&&!s.frustumIntersectsMesh(o)||i.push(o))}),n){const o=[],c=[],a=[];i.forEach(d=>{d.program.transparent?d.program.depthTest?c.push(d):a.push(d):o.push(d),d.zDepth=0,!(d.renderOrder!==0||!d.program.depthTest||!s)&&(d.worldMatrix.getTranslation(Ae),Ae.applyMatrix4(s.projectionViewMatrix),d.zDepth=Ae.z)}),o.sort(this.sortOpaque),c.sort(this.sortTransparent),a.sort(this.sortUI),i=o.concat(c,a)}return i}render({scene:e,camera:s,target:r=null,update:n=!0,sort:i=!0,frustumCull:o=!0,clear:c}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(c||this.autoClear&&c!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&e.updateMatrixWorld(),s&&s.updateMatrixWorld(),this.getRenderList({scene:e,camera:s,frustumCull:o,sort:i}).forEach(d=>{d.draw({camera:s})})}}function Ur(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Hr(t,e,s,r,n){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t}function Wr(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s*s+r*r+n*n+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=s*o,t[1]=r*o,t[2]=n*o,t[3]=i*o,t}function Gr(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function Zr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Qr(t,e,s){s=s*.5;let r=Math.sin(s);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(s),t}function lt(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=s[0],a=s[1],d=s[2],h=s[3];return t[0]=r*h+o*c+n*d-i*a,t[1]=n*h+o*a+i*c-r*d,t[2]=i*h+o*d+r*a-n*c,t[3]=o*h-r*c-n*a-i*d,t}function Kr(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],o=e[3],c=Math.sin(s),a=Math.cos(s);return t[0]=r*a+o*c,t[1]=n*a+i*c,t[2]=i*a-n*c,t[3]=o*a-r*c,t}function Jr(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],o=e[3],c=Math.sin(s),a=Math.cos(s);return t[0]=r*a-i*c,t[1]=n*a+o*c,t[2]=i*a+r*c,t[3]=o*a-n*c,t}function en(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],o=e[3],c=Math.sin(s),a=Math.cos(s);return t[0]=r*a+n*c,t[1]=n*a-r*c,t[2]=i*a+o*c,t[3]=o*a-i*c,t}function tn(t,e,s,r){let n=e[0],i=e[1],o=e[2],c=e[3],a=s[0],d=s[1],h=s[2],p=s[3],u,f,g,m,_;return f=n*a+i*d+o*h+c*p,f<0&&(f=-f,a=-a,d=-d,h=-h,p=-p),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),m=Math.sin((1-r)*u)/g,_=Math.sin(r*u)/g):(m=1-r,_=r),t[0]=m*n+_*a,t[1]=m*i+_*d,t[2]=m*o+_*h,t[3]=m*c+_*p,t}function sn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s*s+r*r+n*n+i*i,c=o?1/o:0;return t[0]=-s*c,t[1]=-r*c,t[2]=-n*c,t[3]=i*c,t}function rn(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function nn(t,e){let s=e[0]+e[4]+e[8],r;if(s>0)r=Math.sqrt(s+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let i=(n+1)%3,o=(n+2)%3;r=Math.sqrt(e[n*3+n]-e[i*3+i]-e[o*3+o]+1),t[n]=.5*r,r=.5/r,t[3]=(e[i*3+o]-e[o*3+i])*r,t[i]=(e[i*3+n]+e[n*3+i])*r,t[o]=(e[o*3+n]+e[n*3+o])*r}return t}function on(t,e,s="YXZ"){let r=Math.sin(e[0]*.5),n=Math.cos(e[0]*.5),i=Math.sin(e[1]*.5),o=Math.cos(e[1]*.5),c=Math.sin(e[2]*.5),a=Math.cos(e[2]*.5);return s==="XYZ"?(t[0]=r*o*a+n*i*c,t[1]=n*i*a-r*o*c,t[2]=n*o*c+r*i*a,t[3]=n*o*a-r*i*c):s==="YXZ"?(t[0]=r*o*a+n*i*c,t[1]=n*i*a-r*o*c,t[2]=n*o*c-r*i*a,t[3]=n*o*a+r*i*c):s==="ZXY"?(t[0]=r*o*a-n*i*c,t[1]=n*i*a+r*o*c,t[2]=n*o*c+r*i*a,t[3]=n*o*a-r*i*c):s==="ZYX"?(t[0]=r*o*a-n*i*c,t[1]=n*i*a+r*o*c,t[2]=n*o*c-r*i*a,t[3]=n*o*a+r*i*c):s==="YZX"?(t[0]=r*o*a+n*i*c,t[1]=n*i*a+r*o*c,t[2]=n*o*c-r*i*a,t[3]=n*o*a-r*i*c):s==="XZY"&&(t[0]=r*o*a-n*i*c,t[1]=n*i*a-r*o*c,t[2]=n*o*c+r*i*a,t[3]=n*o*a+r*i*c),t}const an=Ur,ln=Hr,cn=Gr,hn=Wr;class dn extends Array{constructor(e=0,s=0,r=0,n=1){super(e,s,r,n),this.onChange=()=>{},this._target=this;const i=["0","1","2","3"];return new Proxy(this,{set(o,c){const a=Reflect.set(...arguments);return a&&i.includes(c)&&o.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Zr(this._target),this.onChange(),this}set(e,s,r,n){return e.length?this.copy(e):(ln(this._target,e,s,r,n),this.onChange(),this)}rotateX(e){return Kr(this._target,this._target,e),this.onChange(),this}rotateY(e){return Jr(this._target,this._target,e),this.onChange(),this}rotateZ(e){return en(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return sn(this._target,e),this.onChange(),this}conjugate(e=this._target){return rn(this._target,e),this.onChange(),this}copy(e){return an(this._target,e),this.onChange(),this}normalize(e=this._target){return hn(this._target,e),this.onChange(),this}multiply(e,s){return s?lt(this._target,e,s):lt(this._target,this._target,e),this.onChange(),this}dot(e){return cn(this._target,e)}fromMatrix3(e){return nn(this._target,e),this.onChange(),this}fromEuler(e,s){return on(this._target,e,e.order),s||this.onChange(),this}fromAxisAngle(e,s){return Qr(this._target,e,s),this.onChange(),this}slerp(e,s){return tn(this._target,this._target,e,s),this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this._target[3]=e[s+3],this.onChange(),this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e}}const fn=1e-6;function pn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function un(t,e,s,r,n,i,o,c,a,d,h,p,u,f,g,m,_){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=o,t[6]=c,t[7]=a,t[8]=d,t[9]=h,t[10]=p,t[11]=u,t[12]=f,t[13]=g,t[14]=m,t[15]=_,t}function gn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=e[4],c=e[5],a=e[6],d=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],m=e[13],_=e[14],x=e[15],$=s*c-r*o,b=s*a-n*o,v=s*d-i*o,E=r*a-n*c,M=r*d-i*c,z=n*d-i*a,I=h*m-p*g,A=h*_-u*g,S=h*x-f*g,k=p*_-u*m,w=p*x-f*m,N=u*x-f*_,C=$*N-b*w+v*k+E*S-M*A+z*I;return C?(C=1/C,t[0]=(c*N-a*w+d*k)*C,t[1]=(n*w-r*N-i*k)*C,t[2]=(m*z-_*M+x*E)*C,t[3]=(u*M-p*z-f*E)*C,t[4]=(a*S-o*N-d*A)*C,t[5]=(s*N-n*S+i*A)*C,t[6]=(_*v-g*z-x*b)*C,t[7]=(h*z-u*v+f*b)*C,t[8]=(o*w-c*S+d*I)*C,t[9]=(r*S-s*w-i*I)*C,t[10]=(g*M-m*v+x*$)*C,t[11]=(p*v-h*M-f*$)*C,t[12]=(c*A-o*k-a*I)*C,t[13]=(s*k-r*A+n*I)*C,t[14]=(m*b-g*E-_*$)*C,t[15]=(h*E-p*b+u*$)*C,t):null}function St(t){let e=t[0],s=t[1],r=t[2],n=t[3],i=t[4],o=t[5],c=t[6],a=t[7],d=t[8],h=t[9],p=t[10],u=t[11],f=t[12],g=t[13],m=t[14],_=t[15],x=e*o-s*i,$=e*c-r*i,b=e*a-n*i,v=s*c-r*o,E=s*a-n*o,M=r*a-n*c,z=d*g-h*f,I=d*m-p*f,A=d*_-u*f,S=h*m-p*g,k=h*_-u*g,w=p*_-u*m;return x*w-$*k+b*S+v*A-E*I+M*z}function ct(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=e[9],f=e[10],g=e[11],m=e[12],_=e[13],x=e[14],$=e[15],b=s[0],v=s[1],E=s[2],M=s[3];return t[0]=b*r+v*c+E*p+M*m,t[1]=b*n+v*a+E*u+M*_,t[2]=b*i+v*d+E*f+M*x,t[3]=b*o+v*h+E*g+M*$,b=s[4],v=s[5],E=s[6],M=s[7],t[4]=b*r+v*c+E*p+M*m,t[5]=b*n+v*a+E*u+M*_,t[6]=b*i+v*d+E*f+M*x,t[7]=b*o+v*h+E*g+M*$,b=s[8],v=s[9],E=s[10],M=s[11],t[8]=b*r+v*c+E*p+M*m,t[9]=b*n+v*a+E*u+M*_,t[10]=b*i+v*d+E*f+M*x,t[11]=b*o+v*h+E*g+M*$,b=s[12],v=s[13],E=s[14],M=s[15],t[12]=b*r+v*c+E*p+M*m,t[13]=b*n+v*a+E*u+M*_,t[14]=b*i+v*d+E*f+M*x,t[15]=b*o+v*h+E*g+M*$,t}function _n(t,e,s){let r=s[0],n=s[1],i=s[2],o,c,a,d,h,p,u,f,g,m,_,x;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*i+e[12],t[13]=e[1]*r+e[5]*n+e[9]*i+e[13],t[14]=e[2]*r+e[6]*n+e[10]*i+e[14],t[15]=e[3]*r+e[7]*n+e[11]*i+e[15]):(o=e[0],c=e[1],a=e[2],d=e[3],h=e[4],p=e[5],u=e[6],f=e[7],g=e[8],m=e[9],_=e[10],x=e[11],t[0]=o,t[1]=c,t[2]=a,t[3]=d,t[4]=h,t[5]=p,t[6]=u,t[7]=f,t[8]=g,t[9]=m,t[10]=_,t[11]=x,t[12]=o*r+h*n+g*i+e[12],t[13]=c*r+p*n+m*i+e[13],t[14]=a*r+u*n+_*i+e[14],t[15]=d*r+f*n+x*i+e[15]),t}function xn(t,e,s){let r=s[0],n=s[1],i=s[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function yn(t,e,s,r){let n=r[0],i=r[1],o=r[2],c=Math.hypot(n,i,o),a,d,h,p,u,f,g,m,_,x,$,b,v,E,M,z,I,A,S,k,w,N,C,R;return Math.abs(c)<fn?null:(c=1/c,n*=c,i*=c,o*=c,a=Math.sin(s),d=Math.cos(s),h=1-d,p=e[0],u=e[1],f=e[2],g=e[3],m=e[4],_=e[5],x=e[6],$=e[7],b=e[8],v=e[9],E=e[10],M=e[11],z=n*n*h+d,I=i*n*h+o*a,A=o*n*h-i*a,S=n*i*h-o*a,k=i*i*h+d,w=o*i*h+n*a,N=n*o*h+i*a,C=i*o*h-n*a,R=o*o*h+d,t[0]=p*z+m*I+b*A,t[1]=u*z+_*I+v*A,t[2]=f*z+x*I+E*A,t[3]=g*z+$*I+M*A,t[4]=p*S+m*k+b*w,t[5]=u*S+_*k+v*w,t[6]=f*S+x*k+E*w,t[7]=g*S+$*k+M*w,t[8]=p*N+m*C+b*R,t[9]=u*N+_*C+v*R,t[10]=f*N+x*C+E*R,t[11]=g*N+$*C+M*R,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function bn(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Nt(t,e){let s=e[0],r=e[1],n=e[2],i=e[4],o=e[5],c=e[6],a=e[8],d=e[9],h=e[10];return t[0]=Math.hypot(s,r,n),t[1]=Math.hypot(i,o,c),t[2]=Math.hypot(a,d,h),t}function vn(t){let e=t[0],s=t[1],r=t[2],n=t[4],i=t[5],o=t[6],c=t[8],a=t[9],d=t[10];const h=e*e+s*s+r*r,p=n*n+i*i+o*o,u=c*c+a*a+d*d;return Math.sqrt(Math.max(h,p,u))}const At=function(){const t=[1,1,1];return function(e,s){let r=t;Nt(r,s);let n=1/r[0],i=1/r[1],o=1/r[2],c=s[0]*n,a=s[1]*i,d=s[2]*o,h=s[4]*n,p=s[5]*i,u=s[6]*o,f=s[8]*n,g=s[9]*i,m=s[10]*o,_=c+p+m,x=0;return _>0?(x=Math.sqrt(_+1)*2,e[3]=.25*x,e[0]=(u-g)/x,e[1]=(f-d)/x,e[2]=(a-h)/x):c>p&&c>m?(x=Math.sqrt(1+c-p-m)*2,e[3]=(u-g)/x,e[0]=.25*x,e[1]=(a+h)/x,e[2]=(f+d)/x):p>m?(x=Math.sqrt(1+p-c-m)*2,e[3]=(f-d)/x,e[0]=(a+h)/x,e[1]=.25*x,e[2]=(u+g)/x):(x=Math.sqrt(1+m-c-p)*2,e[3]=(a-h)/x,e[0]=(f+d)/x,e[1]=(u+g)/x,e[2]=.25*x),e}}();function wn(t,e,s,r){let n=se([t[0],t[1],t[2]]);const i=se([t[4],t[5],t[6]]),o=se([t[8],t[9],t[10]]);St(t)<0&&(n=-n),s[0]=t[12],s[1]=t[13],s[2]=t[14];const a=t.slice(),d=1/n,h=1/i,p=1/o;a[0]*=d,a[1]*=d,a[2]*=d,a[4]*=h,a[5]*=h,a[6]*=h,a[8]*=p,a[9]*=p,a[10]*=p,At(e,a),r[0]=n,r[1]=i,r[2]=o}function Cn(t,e,s,r){const n=t,i=e[0],o=e[1],c=e[2],a=e[3],d=i+i,h=o+o,p=c+c,u=i*d,f=i*h,g=i*p,m=o*h,_=o*p,x=c*p,$=a*d,b=a*h,v=a*p,E=r[0],M=r[1],z=r[2];return n[0]=(1-(m+x))*E,n[1]=(f+v)*E,n[2]=(g-b)*E,n[3]=0,n[4]=(f-v)*M,n[5]=(1-(u+x))*M,n[6]=(_+$)*M,n[7]=0,n[8]=(g+b)*z,n[9]=(_-$)*z,n[10]=(1-(u+m))*z,n[11]=0,n[12]=s[0],n[13]=s[1],n[14]=s[2],n[15]=1,n}function jn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s+s,c=r+r,a=n+n,d=s*o,h=r*o,p=r*c,u=n*o,f=n*c,g=n*a,m=i*o,_=i*c,x=i*a;return t[0]=1-p-g,t[1]=h+x,t[2]=u-_,t[3]=0,t[4]=h-x,t[5]=1-d-g,t[6]=f+m,t[7]=0,t[8]=u+_,t[9]=f-m,t[10]=1-d-p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $n(t,e,s,r,n){let i=1/Math.tan(e/2),o=1/(r-n);return t[0]=i/s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*o,t[15]=0,t}function Mn(t,e,s,r,n,i,o){let c=1/(e-s),a=1/(r-n),d=1/(i-o);return t[0]=-2*c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*d,t[11]=0,t[12]=(e+s)*c,t[13]=(n+r)*a,t[14]=(o+i)*d,t[15]=1,t}function En(t,e,s,r){let n=e[0],i=e[1],o=e[2],c=r[0],a=r[1],d=r[2],h=n-s[0],p=i-s[1],u=o-s[2],f=h*h+p*p+u*u;f===0?u=1:(f=1/Math.sqrt(f),h*=f,p*=f,u*=f);let g=a*u-d*p,m=d*h-c*u,_=c*p-a*h;return f=g*g+m*m+_*_,f===0&&(d?c+=1e-6:a?d+=1e-6:a+=1e-6,g=a*u-d*p,m=d*h-c*u,_=c*p-a*h,f=g*g+m*m+_*_),f=1/Math.sqrt(f),g*=f,m*=f,_*=f,t[0]=g,t[1]=m,t[2]=_,t[3]=0,t[4]=p*_-u*m,t[5]=u*g-h*_,t[6]=h*m-p*g,t[7]=0,t[8]=h,t[9]=p,t[10]=u,t[11]=0,t[12]=n,t[13]=i,t[14]=o,t[15]=1,t}function ht(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t[3]=e[3]+s[3],t[4]=e[4]+s[4],t[5]=e[5]+s[5],t[6]=e[6]+s[6],t[7]=e[7]+s[7],t[8]=e[8]+s[8],t[9]=e[9]+s[9],t[10]=e[10]+s[10],t[11]=e[11]+s[11],t[12]=e[12]+s[12],t[13]=e[13]+s[13],t[14]=e[14]+s[14],t[15]=e[15]+s[15],t}function dt(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t[3]=e[3]-s[3],t[4]=e[4]-s[4],t[5]=e[5]-s[5],t[6]=e[6]-s[6],t[7]=e[7]-s[7],t[8]=e[8]-s[8],t[9]=e[9]-s[9],t[10]=e[10]-s[10],t[11]=e[11]-s[11],t[12]=e[12]-s[12],t[13]=e[13]-s[13],t[14]=e[14]-s[14],t[15]=e[15]-s[15],t}function zn(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12]*s,t[13]=e[13]*s,t[14]=e[14]*s,t[15]=e[15]*s,t}class de extends Array{constructor(e=1,s=0,r=0,n=0,i=0,o=1,c=0,a=0,d=0,h=0,p=1,u=0,f=0,g=0,m=0,_=1){return super(e,s,r,n,i,o,c,a,d,h,p,u,f,g,m,_),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,s,r,n,i,o,c,a,d,h,p,u,f,g,m,_){return e.length?this.copy(e):(un(this,e,s,r,n,i,o,c,a,d,h,p,u,f,g,m,_),this)}translate(e,s=this){return _n(this,s,e),this}rotate(e,s,r=this){return yn(this,r,e,s),this}scale(e,s=this){return xn(this,s,typeof e=="number"?[e,e,e]:e),this}add(e,s){return s?ht(this,e,s):ht(this,this,e),this}sub(e,s){return s?dt(this,e,s):dt(this,this,e),this}multiply(e,s){return e.length?s?ct(this,e,s):ct(this,this,e):zn(this,this,e),this}identity(){return gn(this),this}copy(e){return pn(this,e),this}fromPerspective({fov:e,aspect:s,near:r,far:n}={}){return $n(this,e,s,r,n),this}fromOrthogonal({left:e,right:s,bottom:r,top:n,near:i,far:o}){return Mn(this,e,s,r,n,i,o),this}fromQuaternion(e){return jn(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return mn(this,e),this}compose(e,s,r){return Cn(this,e,s,r),this}decompose(e,s,r){return wn(this,e,s,r),this}getRotation(e){return At(e,this),this}getTranslation(e){return bn(e,this),this}getScaling(e){return Nt(e,this),this}getMaxScaleOnAxis(){return vn(this)}lookAt(e,s,r){return En(this,e,s,r),this}determinant(){return St(this)}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this[3]=e[s+3],this[4]=e[s+4],this[5]=e[s+5],this[6]=e[s+6],this[7]=e[s+7],this[8]=e[s+8],this[9]=e[s+9],this[10]=e[s+10],this[11]=e[s+11],this[12]=e[s+12],this[13]=e[s+13],this[14]=e[s+14],this[15]=e[s+15],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e[s+4]=this[4],e[s+5]=this[5],e[s+6]=this[6],e[s+7]=this[7],e[s+8]=this[8],e[s+9]=this[9],e[s+10]=this[10],e[s+11]=this[11],e[s+12]=this[12],e[s+13]=this[13],e[s+14]=this[14],e[s+15]=this[15],e}}function Sn(t,e,s="YXZ"){return s==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):s==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):s==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):s==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):s==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):s==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const ft=new de;class Nn extends Array{constructor(e=0,s=e,r=e,n="YXZ"){super(e,s,r),this.order=n,this.onChange=()=>{},this._target=this;const i=["0","1","2"];return new Proxy(this,{set(o,c){const a=Reflect.set(...arguments);return a&&i.includes(c)&&o.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,s=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=s,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,s=this.order){return Sn(this._target,e,s),this.onChange(),this}fromQuaternion(e,s=this.order,r){return ft.fromQuaternion(e),this._target.fromRotationMatrix(ft,s),r||this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}}class An{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new de,this.worldMatrix=new de,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new V,this.quaternion=new dn,this.scale=new V(1),this.rotation=new Nn,this.up=new V(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,s=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,s&&e&&e.addChild(this,!1)}addChild(e,s=!0){~this.children.indexOf(e)||this.children.push(e),s&&e.setParent(this,!1)}removeChild(e,s=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),s&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let s=0,r=this.children.length;s<r;s++)this.children[s].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let s=0,r=this.children.length;s<r;s++)this.children[s].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,s=!1){s?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function In(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Fn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=s+s,c=r+r,a=n+n,d=s*o,h=r*o,p=r*c,u=n*o,f=n*c,g=n*a,m=i*o,_=i*c,x=i*a;return t[0]=1-p-g,t[3]=h-x,t[6]=u+_,t[1]=h+x,t[4]=1-d-g,t[7]=f-m,t[2]=u-_,t[5]=f+m,t[8]=1-d-p,t}function kn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Tn(t,e,s,r,n,i,o,c,a,d){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=o,t[6]=c,t[7]=a,t[8]=d,t}function On(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Ln(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=e[4],c=e[5],a=e[6],d=e[7],h=e[8],p=h*o-c*d,u=-h*i+c*a,f=d*i-o*a,g=s*p+r*u+n*f;return g?(g=1/g,t[0]=p*g,t[1]=(-h*r+n*d)*g,t[2]=(c*r-n*o)*g,t[3]=u*g,t[4]=(h*s-n*a)*g,t[5]=(-c*s+n*i)*g,t[6]=f*g,t[7]=(-d*s+r*a)*g,t[8]=(o*s-r*i)*g,t):null}function pt(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=s[0],f=s[1],g=s[2],m=s[3],_=s[4],x=s[5],$=s[6],b=s[7],v=s[8];return t[0]=u*r+f*o+g*d,t[1]=u*n+f*c+g*h,t[2]=u*i+f*a+g*p,t[3]=m*r+_*o+x*d,t[4]=m*n+_*c+x*h,t[5]=m*i+_*a+x*p,t[6]=$*r+b*o+v*d,t[7]=$*n+b*c+v*h,t[8]=$*i+b*a+v*p,t}function Rn(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=s[0],f=s[1];return t[0]=r,t[1]=n,t[2]=i,t[3]=o,t[4]=c,t[5]=a,t[6]=u*r+f*o+d,t[7]=u*n+f*c+h,t[8]=u*i+f*a+p,t}function Bn(t,e,s){let r=e[0],n=e[1],i=e[2],o=e[3],c=e[4],a=e[5],d=e[6],h=e[7],p=e[8],u=Math.sin(s),f=Math.cos(s);return t[0]=f*r+u*o,t[1]=f*n+u*c,t[2]=f*i+u*a,t[3]=f*o-u*r,t[4]=f*c-u*n,t[5]=f*a-u*i,t[6]=d,t[7]=h,t[8]=p,t}function Pn(t,e,s){let r=s[0],n=s[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Dn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],o=e[4],c=e[5],a=e[6],d=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],m=e[13],_=e[14],x=e[15],$=s*c-r*o,b=s*a-n*o,v=s*d-i*o,E=r*a-n*c,M=r*d-i*c,z=n*d-i*a,I=h*m-p*g,A=h*_-u*g,S=h*x-f*g,k=p*_-u*m,w=p*x-f*m,N=u*x-f*_,C=$*N-b*w+v*k+E*S-M*A+z*I;return C?(C=1/C,t[0]=(c*N-a*w+d*k)*C,t[1]=(a*S-o*N-d*A)*C,t[2]=(o*w-c*S+d*I)*C,t[3]=(n*w-r*N-i*k)*C,t[4]=(s*N-n*S+i*A)*C,t[5]=(r*S-s*w-i*I)*C,t[6]=(m*z-_*M+x*E)*C,t[7]=(_*v-g*z-x*b)*C,t[8]=(g*M-m*v+x*$)*C,t):null}class Vn extends Array{constructor(e=1,s=0,r=0,n=0,i=1,o=0,c=0,a=0,d=1){return super(e,s,r,n,i,o,c,a,d),this}set(e,s,r,n,i,o,c,a,d){return e.length?this.copy(e):(Tn(this,e,s,r,n,i,o,c,a,d),this)}translate(e,s=this){return Rn(this,s,e),this}rotate(e,s=this){return Bn(this,s,e),this}scale(e,s=this){return Pn(this,s,e),this}multiply(e,s){return s?pt(this,e,s):pt(this,this,e),this}identity(){return On(this),this}copy(e){return kn(this,e),this}fromMatrix4(e){return In(this,e),this}fromQuaternion(e){return Fn(this,e),this}fromBasis(e,s,r){return this.set(e[0],e[1],e[2],s[0],s[1],s[2],r[0],r[1],r[2]),this}inverse(e=this){return Ln(this,e),this}getNormalMatrix(e){return Dn(this,e),this}}let qn=0;class Xn extends An{constructor(e,{geometry:s,program:r,mode:n=e.TRIANGLES,frustumCulled:i=!0,renderOrder:o=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=qn++,this.geometry=s,this.program=r,this.mode=n,this.frustumCulled=i,this.renderOrder=o,this.modelViewMatrix=new de,this.normalMatrix=new Vn,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let s=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:s}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const ut={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function gt(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function Yn(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function mt(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?gt(t):ut[t.toLowerCase()]?gt(ut[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):Yn(t)}class _t extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...mt(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(mt(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class Un extends Rr{constructor(e,{attributes:s={}}={}){Object.assign(s,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,s)}}const Hn=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Wn=`#version 300 es
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
`;function Gn(t){const{colorStops:e=["#00d8ff","#7cff67","#00d8ff"],amplitude:s=1}=t,r=j.useRef(t);r.current=t;const n=j.useRef(null);return j.useEffect(()=>{const i=n.current;if(!i)return;const o=new Yr,c=o.gl;c.clearColor(1,1,1,1);let a;function d(){if(!i)return;const m=i.offsetWidth,_=i.offsetHeight;o.setSize(m,_),a&&(a.uniforms.uResolution.value=[m,_])}window.addEventListener("resize",d);const h=new Un(c);h.attributes.uv&&delete h.attributes.uv;const p=e.map(m=>{const _=new _t(m);return[_.r,_.g,_.b]});a=new Pr(c,{vertex:Hn,fragment:Wn,uniforms:{uTime:{value:0},uAmplitude:{value:s},uColorStops:{value:p},uResolution:{value:[i.offsetWidth,i.offsetHeight]}}});const u=new Xn(c,{geometry:h,program:a});i.appendChild(c.canvas);let f=0;const g=m=>{f=requestAnimationFrame(g);const{time:_=m*.01,speed:x=1}=r.current;a.uniforms.uTime.value=_*x*.1,a.uniforms.uAmplitude.value=r.current.amplitude??1;const $=r.current.colorStops??e;a.uniforms.uColorStops.value=$.map(b=>{const v=new _t(b);return[v.r,v.g,v.b]}),o.render({scene:u})};return f=requestAnimationFrame(g),d(),()=>{var m;cancelAnimationFrame(f),window.removeEventListener("resize",d),i&&c.canvas.parentNode===i&&i.removeChild(c.canvas),(m=c.getExtension("WEBGL_lose_context"))==null||m.loseContext()}},[s]),l.jsx("div",{ref:n,className:"aurora-container"})}const we=({multi:t})=>{var d,h,p,u,f,g,m,_,x,$,b,v,E,M,z,I,A,S,k;const e=fe(),{id:s}=J(),[r,n]=j.useState(null),[i,o]=j.useState(null),{language:c}=H(),a=(w,N)=>{const C=encodeURIComponent(N),R=`https://wa.me/${w}?text=${C}`;window.open(R,"_blank")};return j.useEffect(()=>{e(Xt(s)).then(w=>{var N,C,R;n(w==null?void 0:w.payload),o((R=(C=(N=w==null?void 0:w.payload)==null?void 0:N.product_images)==null?void 0:C[0])==null?void 0:R.image)})},[]),l.jsxs("section",{className:B.outer,children:[l.jsx(Gn,{colorStops:[(d=r==null?void 0:r.shop)==null?void 0:d.border_color,(h=r==null?void 0:r.shop)==null?void 0:h.border_color,(p=r==null?void 0:r.shop)==null?void 0:p.border_color],speed:.5}),l.jsxs("div",{className:B.container,children:[l.jsxs("div",{className:B.rowlogo,children:[l.jsx(T,{to:t?`/${(u=r==null?void 0:r.shop)==null?void 0:u.slug}/details/${r==null?void 0:r.category}`:`/${(f=r==null?void 0:r.shop)==null?void 0:f.slug}/`,children:l.jsx(_s,{})}),l.jsxs("div",{className:B.brand,children:[l.jsx("p",{children:(g=r==null?void 0:r.shop)==null?void 0:g[`name_${c}`]}),l.jsx("img",{src:(m=r==null?void 0:r.shop)==null?void 0:m.image,alt:(_=r==null?void 0:r.shop)==null?void 0:_.name})]})]}),l.jsxs("div",{className:B.row,children:[l.jsxs("div",{className:B.content,children:[l.jsx("p",{className:B.name,children:r==null?void 0:r[`name_${c}`]}),l.jsx("p",{className:B.desc,children:r==null?void 0:r[`description_${c}`]}),l.jsx("div",{className:B.colors,children:(x=r==null?void 0:r.color)==null?void 0:x.map(w=>l.jsx("span",{style:{backgroundColor:w}},w))}),l.jsx("div",{className:B.sizes,children:($=r==null?void 0:r.letter_sizes)!=null&&$.length?(b=r==null?void 0:r.letter_sizes)==null?void 0:b.map(w=>l.jsx("span",{children:w},w)):(v=r==null?void 0:r.number_sizes)==null?void 0:v.map(w=>l.jsx("span",{children:w},w))}),l.jsxs("div",{className:B.price,children:[l.jsxs("p",{style:{color:(r==null?void 0:r.after_sale_price)&&"#e93f3f"},children:[r!=null&&r.after_sale_price?r==null?void 0:r.after_sale_price:r==null?void 0:r.price,"₪"]}),(r==null?void 0:r.after_sale_price)&&l.jsxs("span",{children:[r==null?void 0:r.price," ₪"]}),(r==null?void 0:r.tag)&&l.jsx("img",{src:r==null?void 0:r.tag,alt:r==null?void 0:r.name})]}),l.jsxs("div",{className:B.row,children:[l.jsxs("button",{onClick:()=>{var w;return a((w=r==null?void 0:r.shop)==null?void 0:w.contact_number,r==null?void 0:r[`name_${c}`])},style:{backgroundColor:(E=r==null?void 0:r.shop)!=null&&E.primary_color?(M=r==null?void 0:r.shop)==null?void 0:M.primary_color:"#fff",color:(z=r==null?void 0:r.shop)!=null&&z.primary_color&&Te((I=r==null?void 0:r.shop)==null?void 0:I.primary_color)?"#fff":"#000"},children:[" اطلب الان ",l.jsx(is,{})]}),(r==null?void 0:r.ready_to_ship)&&l.jsxs("p",{className:B.status,style:{color:(A=r==null?void 0:r.shop)!=null&&A.primary_color?(S=r==null?void 0:r.shop)==null?void 0:S.primary_color:"#000"},children:["قابل للشحن ",l.jsx(os,{})," "]})]})]}),l.jsxs("div",{className:B.gallery,children:[l.jsx("div",{className:B.right,children:l.jsx("img",{src:i,alt:r==null?void 0:r.name})}),l.jsx("div",{className:B.left,children:(k=r==null?void 0:r.product_images)==null?void 0:k.map((w,N)=>l.jsx("img",{src:w==null?void 0:w.image,onClick:C=>o(w==null?void 0:w.image),alt:r==null?void 0:r.name},w==null?void 0:w.id))})]})]})]})]})},Zn=({data:t,categories:e})=>{const{pathname:s}=Q();return j.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),l.jsx(pe,{children:l.jsxs("main",{className:xs.main,children:[(t==null?void 0:t.contact_number)&&l.jsx(T,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"fixed z-50 left-4 bottom-6 w-[45px] h-[45px] rounded-[50%] flex items-center justify-center bg-[#26CC64] text-white text-2xl animated",children:l.jsx(ve,{})}),!(s!=null&&s.includes("product"))&&l.jsx(ks,{data:t}),s!=null&&s.includes("product")?l.jsx(we,{}):l.jsx(nr,{mainData:t,categories:e})]})})},Qn="_main_jzy6d_1",Kn="_pages_jzy6d_5",Jn="_modal_jzy6d_12",ei="_modalContent_jzy6d_24",ti="_bottomNav_jzy6d_63",si="_cart_jzy6d_66",ri="_cartmodal_jzy6d_100",ni="_fadeIn_jzy6d_1",ii="_slideOut_jzy6d_1",oi="_close_jzy6d_134",ai="_cartItems_jzy6d_151",li="_cartItem_jzy6d_151",ci="_extras_jzy6d_170",hi="_extrasContent_jzy6d_184",di="_slideIn_jzy6d_1",fi="_item_jzy6d_187",pi="_remove_jzy6d_200",ui="_modalText_jzy6d_213",gi="_copy_jzy6d_255",xt={main:Qn,pages:Kn,modal:Jn,modalContent:ei,bottomNav:ti,cart:si,cartmodal:ri,fadeIn:ni,"slide-out":"_slide-out_jzy6d_131",slideOut:ii,close:oi,cartItems:ai,cartItem:li,extras:ci,extrasContent:hi,slideIn:di,item:fi,remove:pi,modalText:ui,copy:gi},mi="_container_zw7sj_1",_i="_sectionOne_zw7sj_10",xi="_items_zw7sj_15",yi="_item_zw7sj_15",bi="_title_zw7sj_45",vi="_productsContainer_zw7sj_50",wi="_products_zw7sj_50",Ci="_itemsContainer_zw7sj_56",ji="_icons_zw7sj_92",$i="_notActive_zw7sj_122",Mi="_notAct_zw7sj_122",Ei="_copy_zw7sj_147",zi="_sectionHeader_zw7sj_170",U={container:mi,sectionOne:_i,items:xi,item:yi,title:bi,productsContainer:vi,products:wi,itemsContainer:Ci,icons:ji,notActive:$i,notAct:Mi,copy:Ei,sectionHeader:zi},Ye="/assets/exitem-DQFMuJ0p.png";var Si=l.Fragment;function O(t,e,s){return Yt.call(e,"css")?l.jsx(Ut,Ht(t,e),s):l.jsx(t,e,s)}var Ni=Object.defineProperty,Ai=(t,e,s)=>e in t?Ni(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ie=(t,e,s)=>Ai(t,typeof e!="symbol"?e+"":e,s),Re=new Map,oe=new WeakMap,yt=0,Ii=void 0;function Fi(t){return t?(oe.has(t)||(yt+=1,oe.set(t,yt.toString())),oe.get(t)):"0"}function ki(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Fi(t.root):t[e]}`).toString()}function Ti(t){const e=ki(t);let s=Re.get(e);if(!s){const r=new Map;let n;const i=new IntersectionObserver(o=>{o.forEach(c=>{var a;const d=c.isIntersecting&&n.some(h=>c.intersectionRatio>=h);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=d),(a=r.get(c.target))==null||a.forEach(h=>{h(d,c)})})},t);n=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:e,observer:i,elements:r},Re.set(e,s)}return s}function It(t,e,s={},r=Ii){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:n,observer:i,elements:o}=Ti(s),c=o.get(t)||[];return o.has(t)||o.set(t,c),c.push(e),i.observe(t),function(){c.splice(c.indexOf(e),1),c.length===0&&(o.delete(t),i.unobserve(t)),o.size===0&&(i.disconnect(),Re.delete(n))}}function Oi(t){return typeof t.children!="function"}var bt=class extends j.Component{constructor(t){super(t),ie(this,"node",null),ie(this,"_unobserveCb",null),ie(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),ie(this,"handleChange",(e,s)=>{e&&this.props.triggerOnce&&this.unobserve(),Oi(this.props)||this.setState({inView:e,entry:s}),this.props.onChange&&this.props.onChange(e,s)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:s,trackVisibility:r,delay:n,fallbackInView:i}=this.props;this._unobserveCb=It(this.node,this.handleChange,{threshold:t,root:e,rootMargin:s,trackVisibility:r,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:f,entry:g}=this.state;return t({inView:f,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:s,threshold:r,root:n,rootMargin:i,onChange:o,skip:c,trackVisibility:a,delay:d,initialInView:h,fallbackInView:p,...u}=this.props;return j.createElement(e||"div",{ref:this.handleNode,...u},t)}};function Ft({threshold:t,delay:e,trackVisibility:s,rootMargin:r,root:n,triggerOnce:i,skip:o,initialInView:c,fallbackInView:a,onChange:d}={}){var h;const[p,u]=j.useState(null),f=j.useRef(),[g,m]=j.useState({inView:!!c,entry:void 0});f.current=d,j.useEffect(()=>{if(o||!p)return;let b;return b=It(p,(v,E)=>{m({inView:v,entry:E}),f.current&&f.current(v,E),E.isIntersecting&&i&&b&&(b(),b=void 0)},{root:n,rootMargin:r,threshold:t,trackVisibility:s,delay:e},a),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,p,n,r,i,o,s,a,e]);const _=(h=g.entry)==null?void 0:h.target,x=j.useRef();!p&&_&&!i&&!o&&x.current!==_&&(x.current=_,m({inView:!!c,entry:void 0}));const $=[u,g.inView,g.entry];return $.ref=$[0],$.inView=$[1],$.entry=$[2],$}y`
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
`;y`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;y`
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
`;y`
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
`;y`
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
`;y`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;const Li=y`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ri=y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bi=y`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pi=y`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Di=y`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ue=y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vi=y`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qi=y`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xi=y`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yi=y`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ui=y`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hi=y`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wi=y`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Gi({duration:t=1e3,delay:e=0,timingFunction:s="ease",keyframes:r=Ue,iterationCount:n=1}){return Gt`
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
  `}function Zi(t){return t==null}function Qi(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function kt(t,e){return s=>s?t():e()}function re(t){return kt(t,()=>null)}function Be(t){return re(()=>({opacity:0}))(t)}const Tt=t=>{const{cascade:e=!1,damping:s=.5,delay:r=0,duration:n=1e3,fraction:i=0,keyframes:o=Ue,triggerOnce:c=!1,className:a,style:d,childClassName:h,childStyle:p,children:u,onVisibilityChange:f}=t,g=j.useMemo(()=>Gi({keyframes:o,duration:n}),[n,o]);return Zi(u)?null:Qi(u)?O(Ji,{...t,animationStyles:g,children:String(u)}):Wt.isFragment(u)?O(Ot,{...t,animationStyles:g}):O(Si,{children:j.Children.map(u,(m,_)=>{if(!j.isValidElement(m))return null;const x=r+(e?_*n*s:0);switch(m.type){case"ol":case"ul":return O(je,{children:({cx:$})=>O(m.type,{...m.props,className:$(a,m.props.className),style:Object.assign({},d,m.props.style),children:O(Tt,{...t,children:m.props.children})})});case"li":return O(bt,{threshold:i,triggerOnce:c,onChange:f,children:({inView:$,ref:b})=>O(je,{children:({cx:v})=>O(m.type,{...m.props,ref:b,className:v(h,m.props.className),css:re(()=>g)($),style:Object.assign({},p,m.props.style,Be(!$),{animationDelay:x+"ms"})})})});default:return O(bt,{threshold:i,triggerOnce:c,onChange:f,children:({inView:$,ref:b})=>O("div",{ref:b,className:a,css:re(()=>g)($),style:Object.assign({},d,Be(!$),{animationDelay:x+"ms"}),children:O(je,{children:({cx:v})=>O(m.type,{...m.props,className:v(h,m.props.className),style:Object.assign({},p,m.props.style)})})})})}})})},Ki={display:"inline-block",whiteSpace:"pre"},Ji=t=>{const{animationStyles:e,cascade:s=!1,damping:r=.5,delay:n=0,duration:i=1e3,fraction:o=0,triggerOnce:c=!1,className:a,style:d,children:h,onVisibilityChange:p}=t,{ref:u,inView:f}=Ft({triggerOnce:c,threshold:o,onChange:p});return kt(()=>O("div",{ref:u,className:a,style:Object.assign({},d,Ki),children:h.split("").map((g,m)=>O("span",{css:re(()=>e)(f),style:{animationDelay:n+m*i*r+"ms"},children:g},m))}),()=>O(Ot,{...t,children:h}))(s)},Ot=t=>{const{animationStyles:e,fraction:s=0,triggerOnce:r=!1,className:n,style:i,children:o,onVisibilityChange:c}=t,{ref:a,inView:d}=Ft({triggerOnce:r,threshold:s,onChange:c});return O("div",{ref:a,className:n,css:re(()=>e)(d),style:Object.assign({},i,Be(!d)),children:o})};y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;y`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;y`
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
`;const eo=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,to=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,so=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ro=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,no=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,io=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,oo=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ao=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,lo=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,co=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ho=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,fo=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,po=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function uo(t,e,s){switch(s){case"bottom-left":return e?to:Ri;case"bottom-right":return e?so:Bi;case"down":return t?e?no:Di:e?ro:Pi;case"left":return t?e?oo:Vi:e?io:Ue;case"right":return t?e?lo:Xi:e?ao:qi;case"top-left":return e?co:Yi;case"top-right":return e?ho:Ui;case"up":return t?e?po:Wi:e?fo:Hi;default:return e?eo:Li}}const He=t=>{const{big:e=!1,direction:s,reverse:r=!1,...n}=t,i=j.useMemo(()=>uo(e,r,s),[e,s,r]);return O(Tt,{keyframes:i,...n})};y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;y`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;y`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;y`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;y`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;y`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;y`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;y`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;y`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;y`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;y`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
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
`;y`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;y`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;y`
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
`;const go=({data:t,language:e,categories:s})=>{const r=n=>{document.getElementById(n).scrollIntoView({behavior:"smooth"})};return l.jsxs("section",{className:U.container,children:[l.jsxs("div",{className:U.sectionOne,children:[l.jsx("div",{className:U.items,children:s==null?void 0:s.map((n,i)=>{if(n!=null&&n.is_active)return l.jsx(He,{cascade:!0,damping:.1,children:l.jsxs("div",{onClick:()=>r(n==null?void 0:n.id),className:U.item,style:{borderColor:t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"},children:[l.jsx("img",{src:(n==null?void 0:n.image)||Ye,alt:i+1}),l.jsx("p",{children:n==null?void 0:n[`name_${e}`]})]})},n==null?void 0:n.id)})}),s==null?void 0:s.map(n=>{var i;return l.jsxs("div",{className:U.itemsContainer,id:n==null?void 0:n.id,children:[l.jsx("h3",{children:n==null?void 0:n[`name_${e}`]}),l.jsx("div",{className:U.items,children:(i=n==null?void 0:n.products)==null?void 0:i.map(o=>{var c;return l.jsx(ge,{data:o,color:t==null?void 0:t.primary_color,to:`/${(c=o==null?void 0:o.shop)==null?void 0:c.slug}/product/${o==null?void 0:o.id}`})})})]})})]}),l.jsxs("div",{className:U.copy,children:[l.jsxs("p",{children:[L("rights",e)," © ",ne]}),l.jsx(T,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[L("allRights",e),"."]})]})]})},mo="_container_1xiah_1",_o="_navbar_1xiah_5",xo="_logo_1xiah_14",yo="_left_1xiah_23",bo="_language_1xiah_28",vo="_social_1xiah_37",wo="_imageContainer_1xiah_46",Co="_buttonNext_1xiah_55",jo="_buttonPrev_1xiah_55",Y={container:mo,navbar:_o,logo:xo,left:yo,language:bo,social:vo,imageContainer:wo,buttonNext:Co,buttonPrev:jo},$o=({data:t,language:e,changeLanguage:s})=>{var p,u;const r=j.useRef(),[n,i]=j.useState(!1),[o,c]=j.useState(!0),a=f=>{i(f.isEnd),c(f.isBeginning)},d=f=>{f.stopPropagation(),f.preventDefault(),r.current&&!n&&r.current.slideNext()},h=f=>{f.stopPropagation(),f.preventDefault(),r.current&&!o&&r.current.slidePrev()};return l.jsxs("section",{className:Y.container,children:[l.jsxs("div",{className:Y.navbar,children:[l.jsxs(T,{to:"#",className:Y.logo,children:[l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",alt:"restaurant image"}),l.jsx("h3",{children:t==null?void 0:t[`name_${e}`]})]}),l.jsxs("div",{className:Y.left,children:[l.jsx("div",{className:Y.language,children:e=="he"?l.jsxs("button",{style:{backgroundColor:e=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("ar"),children:[" العربية ",l.jsx(Ge,{})]}):l.jsxs("button",{style:{backgroundColor:e=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("he"),children:["עברית ",l.jsx(Ge,{})]})}),l.jsx("div",{className:Y.social,children:(p=t==null?void 0:t.social_media_links)==null?void 0:p.map(f=>l.jsxs(T,{to:(f==null?void 0:f.platform)=="phone_number"?`tel:${f==null?void 0:f.url}`:f==null?void 0:f.url,onMouseOver:g=>g.target.style.color=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:g=>g.target.style.color="#000",target:"_blank",children:[(f==null?void 0:f.platform)=="facebook"&&l.jsx(me,{}),(f==null?void 0:f.platform)=="youtube"&&l.jsx(_e,{}),(f==null?void 0:f.platform)=="tiktok"&&l.jsx(xe,{}),(f==null?void 0:f.platform)=="pinterest"&&l.jsx(ye,{}),(f==null?void 0:f.platform)=="instagram"&&l.jsx(be,{}),(f==null?void 0:f.platform)=="phone_number"&&l.jsx(K,{}),!(f!=null&&f.platform)&&l.jsx(Xe,{})]},f==null?void 0:f.id))})]})]}),l.jsx($t,{spaceBetween:5,slidesPerView:1,modules:[Et,Fs],onSlideChange:a,onSwiper:f=>{r.current=f},effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:50,modifier:1,slideShadows:!0},loop:!0,className:Y.imageContainer,autoplay:{delay:3500,disableOnInteraction:!1},speed:3500,children:(u=t==null?void 0:t.header_images)==null?void 0:u.map((f,g)=>l.jsx(Mt,{children:l.jsx("img",{src:f!=null&&f.image?f==null?void 0:f.image:"https://placehold.co/600x1000",alt:`Slide ${g+1}`})},g))}),l.jsx("button",{className:Y.buttonPrev,onClick:d,style:{backgroundColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",color:Te(t==null?void 0:t.primary_color)?"#fff":"#000"},children:l.jsx(ss,{})}),l.jsx("button",{className:Y.buttonNext,onClick:h,style:{backgroundColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",color:Te(t==null?void 0:t.primary_color)?"#fff":"#000"},children:l.jsx(rs,{})})]})},Mo=({data:t,categories:e})=>{const[s,r]=j.useState(!1),[n,i]=j.useState(!1),{language:o,changeLanguage:c}=H(),{pathname:a}=Q();return j.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[a]),l.jsx(pe,{children:l.jsxs("main",{className:xt.main,children:[(t==null?void 0:t.contact_number)&&l.jsx(T,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"fixed z-50 left-4 bottom-6 w-[45px] h-[45px] rounded-[50%] flex items-center justify-center bg-[#26CC64] text-white text-2xl animated",children:l.jsx(ve,{})}),!(a!=null&&a.includes("product"))&&l.jsx($o,{data:t,setShowModal:r,changeLanguage:c,language:o,showModal:s}),l.jsx("div",{className:xt.pages,children:a!=null&&a.includes("product")?l.jsx(we,{}):l.jsx(go,{data:t,categories:e,language:o,showCartModal:n,setShowCartModal:i})})]})})},Eo="_main_4cdyh_1",zo="_pages_4cdyh_9",So="_cart_4cdyh_12",No="_cartmodal_4cdyh_46",Ao="_fadeIn_4cdyh_1",Io="_modalContent_4cdyh_62",Fo="_slideOut_4cdyh_1",ko="_close_4cdyh_83",To="_cartItems_4cdyh_100",Oo="_cartItem_4cdyh_100",Lo="_extras_4cdyh_120",Ro="_extrasContent_4cdyh_134",Bo="_slideIn_4cdyh_1",Po="_item_4cdyh_137",Do="_remove_4cdyh_150",Vo="_modalText_4cdyh_163",qo="_overlay_4cdyh_234",vt={main:Eo,pages:zo,cart:So,cartmodal:No,fadeIn:Ao,modalContent:Io,"slide-out":"_slide-out_4cdyh_80",slideOut:Fo,close:ko,cartItems:To,cartItem:Oo,extras:Lo,extrasContent:Ro,slideIn:Bo,item:Po,remove:Do,modalText:Vo,overlay:qo},Xo="_sidebar_15g46_1",Yo="_language_15g46_28",Uo="_sidebarContent_15g46_54",Ho="_info_15g46_79",Wo="_social_15g46_91",Go="_actions_15g46_118",Zo="_workinghours_15g46_141",Qo="_modal_15g46_155",Ko="_modalContent_15g46_167",Ie={sidebar:Xo,language:Yo,sidebarContent:Uo,info:Ho,social:Wo,actions:Go,workinghours:Zo,modal:Qo,modalContent:Ko},Jo=({data:t,changeLanguage:e,language:s})=>{var p;const r=ue(),[n,i]=j.useState([]),[o,c]=j.useState(0),[a,d]=j.useState(!0),{name:h}=J();return j.useEffect(()=>{const u=setInterval(()=>{(n==null?void 0:n.length)>1&&(d(!1),setTimeout(()=>{c(f=>(f+1)%(n==null?void 0:n.length)),d(!0)},500))},5e3);return()=>clearInterval(u)},[n]),j.useEffect(()=>{var u;i((u=t==null?void 0:t.header_images)==null?void 0:u.slice(1))},[]),l.jsx("section",{className:Ie.sidebar,style:{backgroundImage:`url(${(p=n==null?void 0:n[o])==null?void 0:p.image})`,backgroundSize:"cover",backgroundPosition:"center",opacity:a?1:.5,transition:"opacity 0.5s ease-in-out"},children:l.jsxs("div",{className:Ie.sidebarContent,children:[l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",onClick:()=>r(`/${h}`),style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#94d334"}`},alt:"restaurant image"}),l.jsx(T,{to:`/${h}`,children:t==null?void 0:t[`name_${s}`]}),l.jsxs("div",{className:Ie.language,children:[l.jsx("button",{style:{backgroundColor:s=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>e("ar"),children:"العربية"}),l.jsx("button",{style:{backgroundColor:s=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>e("he"),children:"עברית"})]})]})})},ea="_footer_8o0ng_1",ta="_social_8o0ng_10",sa="_copy_8o0ng_37",Fe={footer:ea,social:ta,copy:sa},ra=({data:t,language:e})=>{var s;return l.jsxs("section",{className:Fe.footer,children:[l.jsx("div",{className:Fe.social,children:(s=t==null?void 0:t.social_media_links)==null?void 0:s.map(r=>l.jsxs(T,{to:(r==null?void 0:r.platform)=="phone_number"?`tel:${r==null?void 0:r.url}`:r==null?void 0:r.url,onMouseEnter:n=>n.target.style.backgroundColor=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#94d334",onMouseLeave:n=>n.target.style.backgroundColor="transparent",target:"_blank",children:[(r==null?void 0:r.platform)=="facebook"&&l.jsx(me,{}),(r==null?void 0:r.platform)=="youtube"&&l.jsx(_e,{}),(r==null?void 0:r.platform)=="tiktok"&&l.jsx(xe,{}),(r==null?void 0:r.platform)=="pinterest"&&l.jsx(ye,{}),(r==null?void 0:r.platform)=="instagram"&&l.jsx(be,{}),(r==null?void 0:r.platform)=="phone_number"&&l.jsx(K,{}),!(r!=null&&r.platform)&&l.jsx(Xe,{})]},r==null?void 0:r.id))}),l.jsxs("div",{className:Fe.copy,children:[l.jsxs("p",{children:[L("rights",e)," © ",ne]}),l.jsx(T,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[L("allRights",e),"."]})]})]})},na="_container_1vwz6_1",ia="_sectionOne_1vwz6_9",oa="_sectionHeader_1vwz6_15",aa="_items_1vwz6_33",la="_item_1vwz6_33",ca="_copy_1vwz6_86",ha="_cartmodal_1vwz6_142",da="_modalContent_1vwz6_145",fa="_cartItems_1vwz6_145",pa="_cartItem_1vwz6_145",ua="_extras_1vwz6_153",ga="_extrasContent_1vwz6_156",ma="_remove_1vwz6_162",_a="_modalText_1vwz6_165",xa="_modal_1vwz6_145",ya="_slideIn_1vwz6_1",ba="_slideOut_1vwz6_1",va="_fadeIn_1vwz6_1",te={container:na,sectionOne:ia,sectionHeader:oa,items:aa,item:la,copy:ca,cartmodal:ha,modalContent:da,cartItems:fa,cartItem:pa,extras:ua,extrasContent:ga,remove:ma,modalText:_a,modal:xa,slideIn:ya,slideOut:ba,fadeIn:va},wa=({data:t,categories:e,language:s})=>{const r=ue();return l.jsx("section",{className:te.container,children:l.jsxs("div",{className:te.sectionOne,children:[l.jsx("div",{className:te.sectionHeader,children:l.jsx("h3",{children:L("categories",s)})}),l.jsx("div",{className:te.items,children:e&&(e==null?void 0:e.map((n,i)=>{if(n!=null&&n.is_active)return l.jsx(He,{cascade:!0,damping:.1,style:{width:"100%",height:"100%"},children:l.jsxs("div",{onClick:()=>{r(`details/${n==null?void 0:n.id}`)},className:te.item,children:[l.jsx("img",{src:(n==null?void 0:n.image)||Ye,alt:i+1}),l.jsx("p",{children:n==null?void 0:n[`name_${s}`]})]})},n==null?void 0:n.id)}))})]})})},Ca="_container_19txh_1",ja="_itemsContainer_19txh_9",$a="_sectionHeader_19txh_14",Ma="_items_19txh_9",Ea="_category_19txh_62",za="_item_19txh_9",Sa="_icons_19txh_121",Na="_notActive_19txh_151",Aa="_notAct_19txh_151",Ia="_modal_19txh_176",Fa="_fadeIn_19txh_1",ka="_modalContent_19txh_192",Ta="_slideOut_19txh_1",Oa="_close_19txh_208",La="_modalText_19txh_232",Ra="_tags_19txh_242",Ba="_tag_19txh_242",Pa="_extras_19txh_263",Da="_extrasContent_19txh_277",Va="_slideIn_19txh_1",ae={container:Ca,itemsContainer:ja,sectionHeader:$a,items:Ma,category:Ea,item:za,icons:Sa,notActive:Na,notAct:Aa,modal:Ia,fadeIn:Fa,modalContent:ka,"slide-out":"_slide-out_19txh_205",slideOut:Ta,close:Oa,modalText:La,tags:Ra,tag:Ba,extras:Pa,extrasContent:Da,slideIn:Va},qa=({data:t,language:e})=>{const s=fe(),{name:r,id:n}=J(),{categoryLoading:i}=Pe(h=>h.main),[o,c]=j.useState(null),[a,d]=j.useState([]);return j.useEffect(()=>{s(jt(n)).then(h=>{var p;c(h==null?void 0:h.payload),d((p=h==null?void 0:h.payload)==null?void 0:p.products)})},[n]),i?l.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#000"},children:l.jsx(De,{size:"1.5rem",style:{color:"#fff"}})}):l.jsx("section",{className:ae.container,children:l.jsxs("div",{className:ae.itemsContainer,children:[l.jsxs("div",{className:ae.sectionHeader,children:[l.jsxs(T,{to:`/${t==null?void 0:t.slug}`,style:{color:t==null?void 0:t.primary_color},children:["  ",l.jsx(as,{})," ",L("back",e)]}),l.jsx("h3",{children:o==null?void 0:o[`name_${e}`]})]}),l.jsx("div",{className:ae.items,children:a==null?void 0:a.map((h,p)=>l.jsx(ge,{data:h,color:t==null?void 0:t.primary_color,to:`/${r}/product/${h==null?void 0:h.id}`}))})]})})},Xa=({data:t,categories:e})=>{var o,c;const s=Q(),{language:r,changeLanguage:n}=H(),{pathname:i}=Q();return j.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),console.log(t),l.jsx(pe,{children:l.jsxs("main",{className:[vt.main,!(i!=null&&i.includes("product"))&&vt.overlay].filter(Boolean).join(" "),style:{backgroundImage:!(i!=null&&i.includes("product"))&&`url(${(c=(o=t==null?void 0:t.header_images)==null?void 0:o[0])==null?void 0:c.image})`},children:[(t==null?void 0:t.contact_number)&&l.jsx(T,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"fixed z-50 left-4 bottom-6 w-[45px] h-[45px] rounded-[50%] flex items-center justify-center bg-[#26CC64] text-white text-2xl animated",children:l.jsx(ve,{})}),!(i!=null&&i.includes("product"))&&l.jsx(Jo,{data:t,changeLanguage:n,language:r}),i!=null&&i.includes("details")?l.jsx(qa,{data:t,language:r}):i!=null&&i.includes("product")?l.jsx(we,{themeColor:t,multi:!0}):l.jsx(wa,{data:t,language:r,categories:e}),l.jsx(ra,{data:t,language:r})]})})},Ya="_main_3o6uh_1",Ua="_pages_3o6uh_4",Ha="_bottomNav_3o6uh_11",Wa="_copy_3o6uh_14",Ga="_modal_3o6uh_48",Za="_cart_3o6uh_51",Qa="_cartmodal_3o6uh_54",Ka="_modalContent_3o6uh_57",Ja="_cartItems_3o6uh_57",el="_cartItem_3o6uh_57",tl="_extras_3o6uh_65",sl="_extrasContent_3o6uh_68",rl="_item_3o6uh_68",nl="_remove_3o6uh_74",il="_modalText_3o6uh_77",ke={main:Ya,pages:Ua,bottomNav:Ha,copy:Wa,modal:Ga,cart:Za,cartmodal:Qa,modalContent:Ka,cartItems:Ja,cartItem:el,extras:tl,extrasContent:sl,item:rl,remove:nl,modalText:il},ol="_container_1vz1g_1",al="_sectionOne_1vz1g_10",ll="_sectionHeader_1vz1g_15",cl="_items_1vz1g_31",hl="_item_1vz1g_31",dl="_copy_1vz1g_79",Z={container:ol,sectionOne:al,sectionHeader:ll,items:cl,item:hl,copy:dl},fl=({data:t,language:e,categories:s})=>{const r=ue();return l.jsxs("section",{className:Z.container,children:[l.jsxs("div",{className:Z.sectionOne,children:[l.jsx("div",{className:Z.sectionHeader,children:l.jsx("h3",{children:L("categories",e)})}),l.jsx("div",{className:Z.items,children:s==null?void 0:s.map((n,i)=>{if(n!=null&&n.is_active)return l.jsx(He,{cascade:!0,damping:.1,children:l.jsxs("div",{onClick:()=>r(`details/${n==null?void 0:n.id}`),className:Z.item,style:{borderColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC"},children:[l.jsx("img",{src:(n==null?void 0:n.image)||Ye,alt:i+1}),l.jsx("p",{children:n==null?void 0:n[`name_${e}`]})]})},n==null?void 0:n.id)})})]}),l.jsxs("div",{className:Z.copy,children:[l.jsxs("p",{children:[L("rights",e)," © ",ne]}),l.jsx(T,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[L("allRights",e),"."]})]})]})};function wt(t){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"},child:[]}]})(t)}const pl="_container_ahqun_1",ul="_sectionHeader_ahqun_8",gl="_cards_ahqun_31",ml="_copy_ahqun_41",le={container:pl,sectionHeader:ul,cards:gl,copy:ml},_l=({data:t,language:e})=>{const s=fe(),{name:r,id:n}=J(),{categoryLoading:i}=Pe(h=>h.main),[o,c]=j.useState(null),[a,d]=j.useState([]);return j.useEffect(()=>{s(jt(n)).then(h=>{var p;c(h==null?void 0:h.payload),d((p=h==null?void 0:h.payload)==null?void 0:p.products)})},[n]),i?l.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#000",backgroundSize:"cover",backgroundPosition:"center"},children:l.jsx(De,{size:"1.5rem",style:{color:"#fff"}})}):l.jsxs("section",{className:le.container,children:[l.jsxs("div",{className:le.sectionHeader,children:[l.jsxs(T,{to:`/${t==null?void 0:t.slug}`,children:["  ",l.jsx(ls,{})," ",L("back",e)]}),l.jsx("h3",{children:o==null?void 0:o[`name_${e}`]})]}),l.jsx("div",{className:le.cards,children:a==null?void 0:a.map(h=>l.jsx(ge,{data:h,color:t==null?void 0:t.primary_color,style:{width:"100%"},to:`/${r}/product/${h==null?void 0:h.id}`}))}),l.jsxs("div",{className:le.copy,children:[l.jsxs("p",{children:[L("rights",e)," © ",ne]}),l.jsx(T,{to:"/",children:"MyStore."}),l.jsxs("p",{children:[L("allRights",e),"."]})]})]})},xl="_sidebar_mbqg4_1",yl="_sideHeader_mbqg4_27",bl="_language_mbqg4_33",vl="_sidebarContent_mbqg4_59",wl="_info_mbqg4_80",Cl="_social_mbqg4_92",jl="_actions_mbqg4_119",$l="_workinghours_mbqg4_142",Ml="_slider_mbqg4_170",ce={sidebar:xl,sideHeader:yl,language:bl,sidebarContent:vl,info:wl,social:Cl,actions:jl,workinghours:$l,slider:Ml},El=({data:t,language:e,changeLanguage:s})=>{var c,a,d;const[r,n]=j.useState(0),[i,o]=j.useState(!0);return j.useEffect(()=>{const h=setInterval(()=>{o(!1),setTimeout(()=>{n(p=>{var u;return(p+1)%((u=t==null?void 0:t.header_images)==null?void 0:u.length)}),o(!0)},500)},5e3);return()=>clearInterval(h)},[t==null?void 0:t.header_images]),l.jsx("section",{className:ce.sidebar,style:{backgroundImage:`url(${(a=(c=t==null?void 0:t.header_images)==null?void 0:c[r])==null?void 0:a.image})`,backgroundSize:"cover",backgroundColor:"#000",backgroundPosition:"center",filter:i?"brightness(1)":"brightness(0.8)",transition:"filter 0.5s ease-in-out"},children:l.jsxs("div",{className:ce.sidebarContent,children:[l.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"}`},alt:"restaurant image"}),l.jsx("h3",{children:t==null?void 0:t[`name_${e}`]}),l.jsxs("div",{className:ce.language,children:[l.jsx("button",{style:{backgroundColor:e=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("ar"),children:"العربية"}),l.jsx("button",{style:{backgroundColor:e=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("he"),children:"עברית"})]}),l.jsx("div",{className:ce.social,children:(d=t==null?void 0:t.social_media_links)==null?void 0:d.map(h=>l.jsxs(T,{to:(h==null?void 0:h.platform)=="phone_number_1"?`tel:${h==null?void 0:h.url}`:h==null?void 0:h.url,onMouseEnter:p=>p.target.style.backgroundColor=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:p=>p.target.style.backgroundColor="transparent",target:"_blank",children:[(h==null?void 0:h.platform)=="facebook"&&l.jsx(me,{}),(h==null?void 0:h.platform)=="youtube"&&l.jsx(_e,{}),(h==null?void 0:h.platform)=="tiktok"&&l.jsx(xe,{}),(h==null?void 0:h.platform)=="pinterest"&&l.jsx(ye,{}),(h==null?void 0:h.platform)=="instagram"&&l.jsx(be,{}),(h==null?void 0:h.platform)=="phone_number_1"&&l.jsx(K,{}),(h==null?void 0:h.platform)=="phone_number_2"&&l.jsx(K,{}),!(h!=null&&h.platform)&&l.jsx(Xe,{})]},h==null?void 0:h.id))})]})})},zl=({data:t,categories:e})=>{const s=Q(),[r,n]=j.useState(!1),[i,o]=j.useState(!1),c=ue(),{language:a,changeLanguage:d}=H(),[h,p]=j.useState(0),u=Q().pathname,{name:f}=J();return j.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),l.jsx(pe,{children:l.jsxs("main",{className:ke.main,children:[(t==null?void 0:t.contact_number)&&l.jsx(T,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"fixed z-50 left-4 bottom-6 w-[45px] h-[45px] rounded-[50%] flex items-center justify-center bg-[#26CC64] text-white text-2xl animated",children:l.jsx(ve,{})}),!(u!=null&&u.includes("product"))&&l.jsx(El,{data:t,setShowModal:n,changeLanguage:d,language:a,showModal:r}),l.jsx("div",{className:ke.pages,style:{width:(u==null?void 0:u.includes("product"))&&"100%"},children:u!=null&&u.includes("details")?l.jsx(_l,{language:a,data:t}):u!=null&&u.includes("product")?l.jsx(we,{themeColor:t,multi:!0}):l.jsx(fl,{data:t,categories:e,language:a,showCartModal:i,setShowCartModal:o})}),l.jsxs("div",{className:ke.bottomNav,children:[l.jsxs("button",{style:{color:h===1&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{p(1),c(`/${f}`)},children:[l.jsx(cs,{}),L("home",a)]}),a=="ar"&&l.jsxs("button",{style:{color:h===2&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{d("he"),p(2)},children:[l.jsx(wt,{}),"العربية"]}),a=="he"&&l.jsxs("button",{style:{color:h===2&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{d("ar"),p(2)},children:[l.jsx(wt,{}),"עברית"]})]})]})})},Il=()=>{const t=fe(),[e,s]=j.useState(null),[r,n]=j.useState(null),{name:i}=J(),{mainDataByIdLoading:o,mainDataByIdError:c}=Pe(a=>a.main);return j.useEffect(()=>{t(Zt(i)).then(a=>{s(a.payload)}),t(Qt(i)).then(a=>{var d;n((d=a==null?void 0:a.payload)==null?void 0:d.results)})},[]),o?l.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#fff"},children:l.jsx(De,{size:"1.5rem",style:{color:"#000"}})}):(c==null?void 0:c.detail)=="No Restaurant matches the given query."?l.jsx("div",{style:{position:"fixed",left:0,top:0,zIndex:999,display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#fff"},children:l.jsxs("div",{className:"errorContainer",children:[l.jsx("img",{src:Kt,alt:"Sorry, The page not found"}),l.jsx("h4",{children:"عفوا هذة الصفحة غير متاحة"}),l.jsx("p",{children:"ربما يكون الرابط الذي اتبعته معطلاً أو تمت إزالة الصفحة"}),l.jsx(T,{to:"/",children:"العودة للرئيسية"})]})}):l.jsxs(l.Fragment,{children:[(e==null?void 0:e.theme)===1&&l.jsx(Zn,{data:e,categories:r}),(e==null?void 0:e.theme)===2&&l.jsx(Mo,{data:e,categories:r}),(e==null?void 0:e.theme)===3&&l.jsx(Xa,{data:e,categories:r}),(e==null?void 0:e.theme)===4&&l.jsx(zl,{data:e,categories:r})]})};export{Il as default};
