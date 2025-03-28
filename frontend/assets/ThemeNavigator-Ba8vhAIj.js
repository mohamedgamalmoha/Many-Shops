import{r as w,e as Rt,f as Bt,s as Pt,_ as he,h as jt,i as qt,k as Dt,j as c,l as Vt,m as Xt,a as K,L as O,u as de,n as J,o as Yt,q as Z,t as ue,v as Ut,E as Ht,w as Wt,x as y,y as Gt,z as Me,A as Zt,B as pe,b as qe,D as Mt,C as De,F as Qt,G as Kt,H as Jt}from"./index-Dkz8gFib.js";import{g as $e,a as Ve,c as es,b as ts,S as $t,d as Et,P as ge,M as ss,e as rs}from"./ProductCard-BVtS1mxh.js";import{b as me,c as _e,d as xe,e as ye,f as be,g as Q,h as Ee,t as B,G as Xe,i as ns,j as is,F as ve,k as Ze,I as os,l as as,m as ls}from"./translations-CqZn6Ebv.js";import{G as we,a as Ce}from"./index-3NQiv52m.js";function Se(t,e){var s,r;return w.isValidElement(t)&&e.indexOf((s=t.type.muiName)!=null?s:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}const cs=w.createContext(void 0);function Qe(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function Ke(t,e=!1){return t&&(Qe(t.value)&&t.value!==""||e&&Qe(t.defaultValue)&&t.defaultValue!=="")}function hs(t){return t.startAdornment}function fs(t){return Rt("MuiFormControl",t)}Bt("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ds=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],us=t=>{const{classes:e,margin:s,fullWidth:r}=t,n={root:["root",s!=="none"&&`margin${jt(s)}`,r&&"fullWidth"]};return Xt(n,fs,e)},ps=Pt("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:t},e)=>he({},e.root,e[`margin${jt(t.margin)}`],t.fullWidth&&e.fullWidth)})(({ownerState:t})=>he({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},t.margin==="normal"&&{marginTop:16,marginBottom:8},t.margin==="dense"&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})),gs=w.forwardRef(function(e,s){const r=qt({props:e,name:"MuiFormControl"}),{children:n,className:i,color:a="primary",component:o="div",disabled:l=!1,error:d=!1,focused:h,fullWidth:u=!1,hiddenLabel:p=!1,margin:f="none",required:g=!1,size:m="medium",variant:_="outlined"}=r,x=Dt(r,ds),C=he({},r,{color:a,component:o,disabled:l,error:d,fullWidth:u,hiddenLabel:p,margin:f,required:g,size:m,variant:_}),b=us(C),[v,$]=w.useState(()=>{let k=!1;return n&&w.Children.forEach(n,j=>{if(!Se(j,["Input","Select"]))return;const E=Se(j,["Select"])?j.props.input:j;E&&hs(E.props)&&(k=!0)}),k}),[M,S]=w.useState(()=>{let k=!1;return n&&w.Children.forEach(n,j=>{Se(j,["Input","Select"])&&(Ke(j.props,!0)||Ke(j.props.inputProps,!0))&&(k=!0)}),k}),[I,A]=w.useState(!1);l&&I&&A(!1);const N=h!==void 0&&!l?h:I;let F;const T=w.useMemo(()=>({adornedStart:v,setAdornedStart:$,color:a,disabled:l,error:d,filled:M,focused:N,fullWidth:u,hiddenLabel:p,size:m,onBlur:()=>{A(!1)},onEmpty:()=>{S(!1)},onFilled:()=>{S(!0)},onFocus:()=>{A(!0)},registerEffect:F,required:g,variant:_}),[v,a,l,d,M,N,u,p,F,g,m,_]);return c.jsx(cs.Provider,{value:T,children:c.jsx(ps,he({as:o,ownerState:C,className:Vt(b.root,i),ref:s},x,{children:n}))})}),ms={},_s="_header_i4ucq_1",xs="_language_i4ucq_10",ys="_modal_i4ucq_16",bs="_modalContent_i4ucq_28",vs="_headerTop_i4ucq_67",ws="_logo_i4ucq_76",Cs="_headerPhoto_i4ucq_87",js="_headerBottom_i4ucq_101",Ms="_headerText_i4ucq_109",$s="_workinghours_i4ucq_123",Es="_social_i4ucq_137",Ss="_lang_i4ucq_10",D={header:_s,language:xs,modal:ys,modalContent:bs,headerTop:vs,logo:ws,headerPhoto:Cs,headerBottom:js,headerText:Ms,workinghours:$s,social:Es,lang:Ss};function St(t){let{swiper:e,extendParams:s,on:r,emit:n,params:i}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,l=i&&i.autoplay?i.autoplay.delay:3e3,d=i&&i.autoplay?i.autoplay.delay:3e3,h,u=new Date().getTime(),p,f,g,m,_,x,C;function b(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",b),!(C||z.detail&&z.detail.bySwiperTouchMove)&&N())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?p=!0:p&&(d=h,p=!1);const z=e.autoplay.paused?h:u+d-new Date().getTime();e.autoplay.timeLeft=z,n("autoplayTimeLeft",z,z/l),o=requestAnimationFrame(()=>{v()})},$=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.filter(q=>q.classList.contains("swiper-slide-active"))[0]:z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},M=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let Y=typeof z>"u"?e.params.autoplay.delay:z;l=e.params.autoplay.delay,d=e.params.autoplay.delay;const q=$();!Number.isNaN(q)&&q>0&&typeof z>"u"&&(Y=q,l=q,d=q),h=Y;const ee=e.params.speed,Ge=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ee,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,ee,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ee,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,ee,!0,!0),n("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return Y>0?(clearTimeout(a),a=setTimeout(()=>{Ge()},Y)):requestAnimationFrame(()=>{Ge()}),Y},S=()=>{u=new Date().getTime(),e.autoplay.running=!0,M(),n("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),n("autoplayStop")},A=(z,Y)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),z||(x=!0);const q=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",b):N()};if(e.autoplay.paused=!0,Y){_&&(h=e.params.autoplay.delay),_=!1,q();return}h=(h||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&h<0&&!e.params.loop)&&(h<0&&(h=0),q())},N=()=>{e.isEnd&&h<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),x?(x=!1,M(h)):M(),e.autoplay.paused=!1,n("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;const z=$e();z.visibilityState==="hidden"&&(x=!0,A(!0)),z.visibilityState==="visible"&&N()},T=z=>{z.pointerType==="mouse"&&(x=!0,C=!0,!(e.animating||e.autoplay.paused)&&A(!0))},k=z=>{z.pointerType==="mouse"&&(C=!1,e.autoplay.paused&&N())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",T),e.el.addEventListener("pointerleave",k))},E=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",T),e.el.removeEventListener("pointerleave",k))},X=()=>{$e().addEventListener("visibilitychange",F)},P=()=>{$e().removeEventListener("visibilitychange",F)};r("init",()=>{e.params.autoplay.enabled&&(j(),X(),S())}),r("destroy",()=>{E(),P(),e.autoplay.running&&I()}),r("_freeModeStaticRelease",()=>{(g||x)&&N()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():A(!0,!0)}),r("beforeTransitionStart",(z,Y,q)=>{e.destroyed||!e.autoplay.running||(q||!e.params.autoplay.disableOnInteraction?A(!0,!0):I())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}f=!0,g=!1,x=!1,m=setTimeout(()=>{x=!0,g=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(a),e.params.autoplay.disableOnInteraction){g=!1,f=!1;return}g&&e.params.cssMode&&N(),g=!1,f=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(_=!0)}),Object.assign(e.autoplay,{start:S,stop:I,pause:A,resume:N})}function zs(t){const{effect:e,swiper:s,on:r,setTranslate:n,setTransition:i,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:d}=t;r("beforeInit",()=>{if(s.params.effect!==e)return;s.classNames.push(`${s.params.containerModifierClass}${e}`),o&&o()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const u=a?a():{};Object.assign(s.params,u),Object.assign(s.originalParams,u)}),r("setTranslate",()=>{s.params.effect===e&&n()}),r("setTransition",(u,p)=>{s.params.effect===e&&i(p)}),r("transitionEnd",()=>{if(s.params.effect===e&&l){if(!d||!d().slideShadows)return;s.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let h;r("virtualUpdate",()=>{s.params.effect===e&&(s.slides.length||(h=!0),requestAnimationFrame(()=>{h&&s.slides&&s.slides.length&&(n(),h=!1)}))})}function Ns(t,e){const s=Ve(e);return s!==e&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function Je(t,e,s){const r=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${t}`}`,n=Ve(e);let i=n.querySelector(`.${r.split(" ").join(".")}`);return i||(i=es("div",r.split(" ")),n.append(i)),i}function As(t){let{swiper:e,extendParams:s,on:r}=t;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),zs({effect:"coverflow",swiper:e,on:r,setTranslate:()=>{const{width:a,height:o,slides:l,slidesSizesGrid:d}=e,h=e.params.coverflowEffect,u=e.isHorizontal(),p=e.translate,f=u?-p+a/2:-p+o/2,g=u?h.rotate:-h.rotate,m=h.depth,_=ts(e);for(let x=0,C=l.length;x<C;x+=1){const b=l[x],v=d[x],$=b.swiperSlideOffset,M=(f-$-v/2)/v,S=typeof h.modifier=="function"?h.modifier(M):M*h.modifier;let I=u?g*S:0,A=u?0:g*S,N=-m*Math.abs(S),F=h.stretch;typeof F=="string"&&F.indexOf("%")!==-1&&(F=parseFloat(h.stretch)/100*v);let T=u?0:F*S,k=u?F*S:0,j=1-(1-h.scale)*Math.abs(S);Math.abs(k)<.001&&(k=0),Math.abs(T)<.001&&(T=0),Math.abs(N)<.001&&(N=0),Math.abs(I)<.001&&(I=0),Math.abs(A)<.001&&(A=0),Math.abs(j)<.001&&(j=0);const E=`translate3d(${k}px,${T}px,${N}px)  rotateX(${_(A)}deg) rotateY(${_(I)}deg) scale(${j})`,X=Ns(h,b);if(X.style.transform=E,b.style.zIndex=-Math.abs(Math.round(S))+1,h.slideShadows){let P=u?b.querySelector(".swiper-slide-shadow-left"):b.querySelector(".swiper-slide-shadow-top"),z=u?b.querySelector(".swiper-slide-shadow-right"):b.querySelector(".swiper-slide-shadow-bottom");P||(P=Je("coverflow",b,u?"left":"top")),z||(z=Je("coverflow",b,u?"right":"bottom")),P&&(P.style.opacity=S>0?S:0),z&&(z.style.opacity=-S>0?-S:0)}}},setTransition:a=>{e.slides.map(l=>Ve(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Is=({data:t})=>{var r,n;const{language:e,changeLanguage:s}=K();return c.jsxs("section",{className:D.header,children:[c.jsxs("div",{className:D.headerTop,style:{borderColor:t!=null&&t.border_color?t==null?void 0:t.border_color:"#7FB23C"},children:[c.jsx("div",{className:D.headerPhoto,children:c.jsx($t,{spaceBetween:0,slidesPerView:1,modules:[St],loop:!0,direction:"vertical",autoplay:{delay:3e3,disableOnInteraction:!1},children:(r=t==null?void 0:t.header_images)==null?void 0:r.map((i,a)=>c.jsx(Et,{children:c.jsx("img",{className:D.image,src:i==null?void 0:i.image,alt:a})},a))})}),c.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",className:D.logo,style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#7FB23C"}`},alt:"logo"})]}),c.jsx("div",{className:D.headerBottom,children:c.jsxs("div",{className:D.headerText,children:[c.jsx("h3",{children:t==null?void 0:t[`name_${e}`]}),c.jsx("div",{className:D.social,children:(n=t==null?void 0:t.social_media_links)==null?void 0:n.map(i=>c.jsxs(O,{to:(i==null?void 0:i.platform)=="phone_number_1"?`tel:${i==null?void 0:i.url}`:i==null?void 0:i.url,onMouseOver:a=>a.target.style.color=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:a=>a.target.style.color="#000",target:"_blank",children:[(i==null?void 0:i.platform)=="facebook"&&c.jsx(me,{}),(i==null?void 0:i.platform)=="youtube"&&c.jsx(_e,{}),(i==null?void 0:i.platform)=="tiktok"&&c.jsx(xe,{}),(i==null?void 0:i.platform)=="pinterest"&&c.jsx(ye,{}),(i==null?void 0:i.platform)=="instagram"&&c.jsx(be,{}),(i==null?void 0:i.platform)=="phone_number_1"&&c.jsx(Q,{}),(i==null?void 0:i.platform)=="phone_number_2"&&c.jsx(Q,{}),!(i!=null&&i.platform)&&c.jsx(Ee,{})]},i==null?void 0:i.id))})]})}),c.jsx("div",{className:D.language,children:c.jsx(gs,{sx:{minWidth:110},children:e=="ar"?c.jsxs("button",{onClick:()=>{s("he")},className:D.lang,children:[c.jsx(Ee,{}),"עברית"]}):c.jsxs("button",{onClick:()=>{s("ar")},className:D.lang,children:[c.jsx(Ee,{}),"العربية"]})})})]})},ks="_container_1yp4k_1",Fs="_orderNow_1yp4k_8",Ts="_float_1yp4k_1",Os="_categories_1yp4k_39",Ls="_item_1yp4k_49",Rs="_itemsContainer_1yp4k_71",Bs="_items_1yp4k_71",Ps="_icons_1yp4k_109",qs="_notActive_1yp4k_139",Ds="_notAct_1yp4k_139",Vs="_copy_1yp4k_164",W={container:ks,orderNow:Fs,float:Ts,categories:Os,item:Ls,itemsContainer:Rs,items:Bs,icons:Ps,notActive:qs,notAct:Ds,copy:Vs},ne=new Date().getFullYear();function Oe(t){t!=null&&t.startsWith("#")&&(t=t==null?void 0:t.substring(1)),t.length===3&&(t=t.split("").map(i=>i+i).join(""));const e=parseInt(t.substring(0,2),16),s=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16);return(e*299+s*587+r*114)/1e3<128}const Xs=({mainData:t,categories:e})=>{const s=w.useRef([]),{language:r}=K(),n=o=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})},i=o=>{const l=s.current[o];if(l){const h=l.scrollLeft-600;l.scrollTo({left:h,behavior:"smooth"})}},a=o=>{const l=s.current[o];if(l){const h=l.scrollLeft+600;l.scrollTo({left:h,behavior:"smooth"})}};return c.jsxs("section",{className:W.container,children:[c.jsx("div",{className:W.categories,children:e==null?void 0:e.map((o,l)=>{if(o!=null&&o.is_active)return c.jsxs("div",{className:W.item,onClick:()=>n(o==null?void 0:o.id),children:[c.jsx("img",{src:o!=null&&o.image?o==null?void 0:o.image:"https://via.placeholder.com/150",alt:l}),c.jsx("p",{children:o==null?void 0:o[`name_${r}`]})]},l)})}),e==null?void 0:e.map((o,l)=>{var d,h;return c.jsxs("div",{className:W.itemsContainer,style:{position:"relative",display:((d=o==null?void 0:o.products)==null?void 0:d.length)>0?"flex":"none"},id:o==null?void 0:o.id,children:[c.jsx("h3",{children:o==null?void 0:o[`name_${r}`]}),c.jsx("div",{className:W.items,ref:u=>s.current[l]=u,children:(h=o==null?void 0:o.products)==null?void 0:h.map((u,p)=>{var f;return c.jsx(ge,{data:u,brandInfo:t,color:t==null?void 0:t.primary_color,to:`/${(f=u==null?void 0:u.shop)==null?void 0:f.slug}/product/${u==null?void 0:u.id}`},u.id)})}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] border-0 text-white hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute left-12 top-1/2 -translate-1/2",onClick:()=>i(l),children:c.jsx(we,{})}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] border-0 text-white  hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-1/2",onClick:()=>a(l),children:c.jsx(Ce,{})})]},o==null?void 0:o.id)}),c.jsxs("div",{className:W.copy,children:[c.jsxs("p",{children:[B("rights",r)," © ",ne]}),c.jsx(O,{to:"/",children:"MyStore."}),c.jsxs("p",{children:[B("allRights",r),"."]})]})]})},Ys="_outer_9evgm_1",Us="_container_9evgm_8",Hs="_row_9evgm_29",Ws="_rowlogo_9evgm_37",Gs="_brand_9evgm_48",Zs="_content_9evgm_67",Qs="_sale_9evgm_77",Ks="_name_9evgm_87",Js="_desc_9evgm_91",er="_colors_9evgm_95",tr="_sizes_9evgm_104",sr="_price_9evgm_117",rr="_status_9evgm_154",nr="_gallery_9evgm_164",ir="_left_9evgm_176",or="_right_9evgm_188",R={outer:Ys,container:Us,row:Hs,rowlogo:Ws,brand:Gs,content:Zs,sale:Qs,name:Ks,desc:Js,colors:er,sizes:tr,price:sr,status:rr,gallery:nr,left:ir,right:or};function Ye(t){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"},child:[]}]})(t)}function ar(t){return Xe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"},child:[]}]})(t)}function se(t){let e=t[0],s=t[1],r=t[2];return Math.sqrt(e*e+s*s+r*r)}function Le(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function lr(t,e,s,r){return t[0]=e,t[1]=s,t[2]=r,t}function et(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t}function tt(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t}function cr(t,e,s){return t[0]=e[0]*s[0],t[1]=e[1]*s[1],t[2]=e[2]*s[2],t}function hr(t,e,s){return t[0]=e[0]/s[0],t[1]=e[1]/s[1],t[2]=e[2]/s[2],t}function ze(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function fr(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(s*s+r*r+n*n)}function dr(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return s*s+r*r+n*n}function st(t){let e=t[0],s=t[1],r=t[2];return e*e+s*s+r*r}function ur(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function pr(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Re(t,e){let s=e[0],r=e[1],n=e[2],i=s*s+r*r+n*n;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function zt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function rt(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[0],o=s[1],l=s[2];return t[0]=n*l-i*o,t[1]=i*a-r*l,t[2]=r*o-n*a,t}function gr(t,e,s,r){let n=e[0],i=e[1],a=e[2];return t[0]=n+r*(s[0]-n),t[1]=i+r*(s[1]-i),t[2]=a+r*(s[2]-a),t}function mr(t,e,s,r,n){const i=Math.exp(-r*n);let a=e[0],o=e[1],l=e[2];return t[0]=s[0]+(a-s[0])*i,t[1]=s[1]+(o-s[1])*i,t[2]=s[2]+(l-s[2])*i,t}function _r(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[3]*r+s[7]*n+s[11]*i+s[15];return a=a||1,t[0]=(s[0]*r+s[4]*n+s[8]*i+s[12])/a,t[1]=(s[1]*r+s[5]*n+s[9]*i+s[13])/a,t[2]=(s[2]*r+s[6]*n+s[10]*i+s[14])/a,t}function xr(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[3]*r+s[7]*n+s[11]*i+s[15];return a=a||1,t[0]=(s[0]*r+s[4]*n+s[8]*i)/a,t[1]=(s[1]*r+s[5]*n+s[9]*i)/a,t[2]=(s[2]*r+s[6]*n+s[10]*i)/a,t}function yr(t,e,s){let r=e[0],n=e[1],i=e[2];return t[0]=r*s[0]+n*s[3]+i*s[6],t[1]=r*s[1]+n*s[4]+i*s[7],t[2]=r*s[2]+n*s[5]+i*s[8],t}function br(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[0],o=s[1],l=s[2],d=s[3],h=o*i-l*n,u=l*r-a*i,p=a*n-o*r,f=o*p-l*u,g=l*h-a*p,m=a*u-o*h,_=d*2;return h*=_,u*=_,p*=_,f*=2,g*=2,m*=2,t[0]=r+h+f,t[1]=n+u+g,t[2]=i+p+m,t}const vr=function(){const t=[0,0,0],e=[0,0,0];return function(s,r){Le(t,s),Le(e,r),Re(t,t),Re(e,e);let n=zt(t,e);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function wr(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class V extends Array{constructor(e=0,s=e,r=e){return super(e,s,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,s=e,r=e){return e.length?this.copy(e):(lr(this,e,s,r),this)}copy(e){return Le(this,e),this}add(e,s){return s?et(this,e,s):et(this,this,e),this}sub(e,s){return s?tt(this,e,s):tt(this,this,e),this}multiply(e){return e.length?cr(this,this,e):ze(this,this,e),this}divide(e){return e.length?hr(this,this,e):ze(this,this,1/e),this}inverse(e=this){return pr(this,e),this}len(){return se(this)}distance(e){return e?fr(this,e):se(this)}squaredLen(){return st(this)}squaredDistance(e){return e?dr(this,e):st(this)}negate(e=this){return ur(this,e),this}cross(e,s){return s?rt(this,e,s):rt(this,this,e),this}scale(e){return ze(this,this,e),this}normalize(){return Re(this,this),this}dot(e){return zt(this,e)}equals(e){return wr(this,e)}applyMatrix3(e){return yr(this,this,e),this}applyMatrix4(e){return _r(this,this,e),this}scaleRotateMatrix4(e){return xr(this,this,e),this}applyQuaternion(e){return br(this,this,e),this}angle(e){return vr(this,e)}lerp(e,s){return gr(this,this,e,s),this}smoothLerp(e,s,r){return mr(this,this,e,s,r),this}clone(){return new V(this[0],this[1],this[2])}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}transformDirection(e){const s=this[0],r=this[1],n=this[2];return this[0]=e[0]*s+e[4]*r+e[8]*n,this[1]=e[1]*s+e[5]*r+e[9]*n,this[2]=e[2]*s+e[6]*r+e[10]*n,this.normalize()}}const nt=new V;let Cr=1,jr=1,it=!1;class Mr{constructor(e,s={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=s,this.id=Cr++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in s)this.addAttribute(r,s[r])}addAttribute(e,s){if(this.attributes[e]=s,s.id=jr++,s.size=s.size||1,s.type=s.type||(s.data.constructor===Float32Array?this.gl.FLOAT:s.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),s.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,s.normalized=s.normalized||!1,s.stride=s.stride||0,s.offset=s.offset||0,s.count=s.count||(s.stride?s.data.byteLength/s.stride:s.data.length/s.size),s.divisor=s.instanced||0,s.needsUpdate=!1,s.usage=s.usage||this.gl.STATIC_DRAW,s.buffer||this.updateAttribute(s),s.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==s.count*s.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,s.count*s.divisor);this.instancedCount=s.count*s.divisor}else e==="index"?this.drawRange.count=s.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,s.count))}updateAttribute(e){const s=!e.buffer;s&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),s?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,s){this.drawRange.start=e,this.drawRange.count=s}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((s,{name:r,type:n})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const i=this.attributes[r];this.gl.bindBuffer(i.target,i.buffer),this.glState.boundBuffer=i.buffer;let a=1;n===35674&&(a=2),n===35675&&(a=3),n===35676&&(a=4);const o=i.size/a,l=a===1?0:a*a*4,d=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(s+h,o,i.type,i.normalized,i.stride+l,i.offset+h*d),this.gl.enableVertexAttribArray(s+h),this.gl.renderer.vertexAttribDivisor(s+h,i.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:s=this.gl.TRIANGLES}){var n;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((i,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let r=2;((n=this.attributes.index)==null?void 0:n.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(s,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(s,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!it)return console.warn("No position buffer data found to compute bounds"),it=!0}computeBoundingBox(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||(this.bounds={min:new V,max:new V,center:new V,scale:new V,radius:1/0});const n=this.bounds.min,i=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;n.set(1/0),i.set(-1/0);for(let l=0,d=s.length;l<d;l+=r){const h=s[l],u=s[l+1],p=s[l+2];n.x=Math.min(h,n.x),n.y=Math.min(u,n.y),n.z=Math.min(p,n.z),i.x=Math.max(h,i.x),i.y=Math.max(u,i.y),i.z=Math.max(p,i.z)}o.sub(i,n),a.add(n,i).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let n=0;for(let i=0,a=s.length;i<a;i+=r)nt.fromArray(s,i),n=Math.max(n,this.bounds.center.squaredDistance(nt));this.bounds.radius=Math.sqrt(n)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let $r=1;const ot={};class Er{constructor(e,{vertex:s,fragment:r,uniforms:n={},transparent:i=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:d=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=n,this.id=$r++,s||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=i,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=d,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:s,fragment:r})}setShaders({vertex:e,fragment:s}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${at(e)}`)),s&&(this.gl.shaderSource(this.fragmentShader,s),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${at(s)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<r;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const n=[],i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(n[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=n.join("")}setBlendFunc(e,s,r,n){this.blendFunc.src=e,this.blendFunc.dst=s,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=n,e&&(this.transparent=!0)}setBlendEquation(e,s){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=s}setStencilFunc(e,s,r){this.stencilRef=s,this.stencilFunc.func=e,this.stencilFunc.ref=s,this.stencilFunc.mask=r}setStencilOp(e,s,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=s,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let s=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,i)=>{let a=this.uniforms[i.uniformName];for(const o of i.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return lt(`Active uniform ${i.name} has not been supplied`);if(a&&a.value===void 0)return lt(`${i.name} uniform is missing a value parameter`);if(a.value.texture)return s=s+1,a.value.update(s),Ne(this.gl,i.type,n,s);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{s=s+1,l.update(s),o.push(s)}),Ne(this.gl,i.type,n,o)}Ne(this.gl,i.type,n,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Ne(t,e,s,r){r=r.length?Sr(r):r;const n=t.renderer.state.uniformLocations.get(s);if(r.length)if(n===void 0||n.length!==r.length)t.renderer.state.uniformLocations.set(s,r.slice(0));else{if(zr(n,r))return;n.set?n.set(r):Nr(n,r),t.renderer.state.uniformLocations.set(s,n)}else{if(n===r)return;t.renderer.state.uniformLocations.set(s,r)}switch(e){case 5126:return r.length?t.uniform1fv(s,r):t.uniform1f(s,r);case 35664:return t.uniform2fv(s,r);case 35665:return t.uniform3fv(s,r);case 35666:return t.uniform4fv(s,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?t.uniform1iv(s,r):t.uniform1i(s,r);case 35671:case 35667:return t.uniform2iv(s,r);case 35672:case 35668:return t.uniform3iv(s,r);case 35673:case 35669:return t.uniform4iv(s,r);case 35674:return t.uniformMatrix2fv(s,!1,r);case 35675:return t.uniformMatrix3fv(s,!1,r);case 35676:return t.uniformMatrix4fv(s,!1,r)}}function at(t){let e=t.split(`
`);for(let s=0;s<e.length;s++)e[s]=s+1+": "+e[s];return e.join(`
`)}function Sr(t){const e=t.length,s=t[0].length;if(s===void 0)return t;const r=e*s;let n=ot[r];n||(ot[r]=n=new Float32Array(r));for(let i=0;i<e;i++)n.set(t[i],i*s);return n}function zr(t,e){if(t.length!==e.length)return!1;for(let s=0,r=t.length;s<r;s++)if(t[s]!==e[s])return!1;return!0}function Nr(t,e){for(let s=0,r=t.length;s<r;s++)t[s]=e[s]}let Ae=0;function lt(t){Ae>100||(console.warn(t),Ae++,Ae>100&&console.warn("More than 100 program warnings - stopping logs."))}const Ie=new V;let Ar=1;class Ir{constructor({canvas:e=document.createElement("canvas"),width:s=300,height:r=150,dpr:n=1,alpha:i=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:d=!1,preserveDrawingBuffer:h=!1,powerPreference:u="default",autoClear:p=!0,webgl:f=2}={}){const g={alpha:i,depth:a,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:u};this.dpr=n,this.alpha=i,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=d,this.autoClear=p,this.id=Ar++,f===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(s,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,s){this.width=e,this.height=s,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=s*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:s+"px"})}setViewport(e,s,r=0,n=0){this.state.viewport.width===e&&this.state.viewport.height===s||(this.state.viewport.width=e,this.state.viewport.height=s,this.state.viewport.x=r,this.state.viewport.y=n,this.gl.viewport(r,n,e,s))}setScissor(e,s,r=0,n=0){this.gl.scissor(r,n,e,s)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,s,r,n){this.state.blendFunc.src===e&&this.state.blendFunc.dst===s&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=e,this.state.blendFunc.dst=s,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=n,r!==void 0?this.gl.blendFuncSeparate(e,s,r,n):this.gl.blendFunc(e,s))}setBlendEquation(e,s){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===s)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=s,s!==void 0?this.gl.blendEquationSeparate(e,s):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,s,r){this.state.stencilFunc===e&&this.state.stencilRef===s&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=s||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,s||0,r||0))}setStencilOp(e,s,r){this.state.stencilFail===e&&this.state.stencilDepthFail===s&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=s,this.state.stencilDepthPass=r,this.gl.stencilOp(e,s,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:s=null}={}){this.state.framebuffer!==s&&(this.state.framebuffer=s,this.gl.bindFramebuffer(e,s))}getExtension(e,s,r){return s&&this.gl[s]?this.gl[s].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),s?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:e.zDepth!==s.zDepth?e.zDepth-s.zDepth:s.id-e.id}sortTransparent(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.zDepth!==s.zDepth?s.zDepth-e.zDepth:s.id-e.id}sortUI(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:s.id-e.id}getRenderList({scene:e,camera:s,frustumCull:r,sort:n}){let i=[];if(s&&r&&s.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(r&&a.frustumCulled&&s&&!s.frustumIntersectsMesh(a)||i.push(a))}),n){const a=[],o=[],l=[];i.forEach(d=>{d.program.transparent?d.program.depthTest?o.push(d):l.push(d):a.push(d),d.zDepth=0,!(d.renderOrder!==0||!d.program.depthTest||!s)&&(d.worldMatrix.getTranslation(Ie),Ie.applyMatrix4(s.projectionViewMatrix),d.zDepth=Ie.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),i=a.concat(o,l)}return i}render({scene:e,camera:s,target:r=null,update:n=!0,sort:i=!0,frustumCull:a=!0,clear:o}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&e.updateMatrixWorld(),s&&s.updateMatrixWorld(),this.getRenderList({scene:e,camera:s,frustumCull:a,sort:i}).forEach(d=>{d.draw({camera:s})})}}function kr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Fr(t,e,s,r,n){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t}function Tr(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s*s+r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=s*a,t[1]=r*a,t[2]=n*a,t[3]=i*a,t}function Or(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function Lr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Rr(t,e,s){s=s*.5;let r=Math.sin(s);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(s),t}function ct(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],o=s[0],l=s[1],d=s[2],h=s[3];return t[0]=r*h+a*o+n*d-i*l,t[1]=n*h+a*l+i*o-r*d,t[2]=i*h+a*d+r*l-n*o,t[3]=a*h-r*o-n*l-i*d,t}function Br(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],a=e[3],o=Math.sin(s),l=Math.cos(s);return t[0]=r*l+a*o,t[1]=n*l+i*o,t[2]=i*l-n*o,t[3]=a*l-r*o,t}function Pr(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],a=e[3],o=Math.sin(s),l=Math.cos(s);return t[0]=r*l-i*o,t[1]=n*l+a*o,t[2]=i*l+r*o,t[3]=a*l-n*o,t}function qr(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],a=e[3],o=Math.sin(s),l=Math.cos(s);return t[0]=r*l+n*o,t[1]=n*l-r*o,t[2]=i*l+a*o,t[3]=a*l-i*o,t}function Dr(t,e,s,r){let n=e[0],i=e[1],a=e[2],o=e[3],l=s[0],d=s[1],h=s[2],u=s[3],p,f,g,m,_;return f=n*l+i*d+a*h+o*u,f<0&&(f=-f,l=-l,d=-d,h=-h,u=-u),1-f>1e-6?(p=Math.acos(f),g=Math.sin(p),m=Math.sin((1-r)*p)/g,_=Math.sin(r*p)/g):(m=1-r,_=r),t[0]=m*n+_*l,t[1]=m*i+_*d,t[2]=m*a+_*h,t[3]=m*o+_*u,t}function Vr(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s*s+r*r+n*n+i*i,o=a?1/a:0;return t[0]=-s*o,t[1]=-r*o,t[2]=-n*o,t[3]=i*o,t}function Xr(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Yr(t,e){let s=e[0]+e[4]+e[8],r;if(s>0)r=Math.sqrt(s+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(e[n*3+n]-e[i*3+i]-e[a*3+a]+1),t[n]=.5*r,r=.5/r,t[3]=(e[i*3+a]-e[a*3+i])*r,t[i]=(e[i*3+n]+e[n*3+i])*r,t[a]=(e[a*3+n]+e[n*3+a])*r}return t}function Ur(t,e,s="YXZ"){let r=Math.sin(e[0]*.5),n=Math.cos(e[0]*.5),i=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return s==="XYZ"?(t[0]=r*a*l+n*i*o,t[1]=n*i*l-r*a*o,t[2]=n*a*o+r*i*l,t[3]=n*a*l-r*i*o):s==="YXZ"?(t[0]=r*a*l+n*i*o,t[1]=n*i*l-r*a*o,t[2]=n*a*o-r*i*l,t[3]=n*a*l+r*i*o):s==="ZXY"?(t[0]=r*a*l-n*i*o,t[1]=n*i*l+r*a*o,t[2]=n*a*o+r*i*l,t[3]=n*a*l-r*i*o):s==="ZYX"?(t[0]=r*a*l-n*i*o,t[1]=n*i*l+r*a*o,t[2]=n*a*o-r*i*l,t[3]=n*a*l+r*i*o):s==="YZX"?(t[0]=r*a*l+n*i*o,t[1]=n*i*l+r*a*o,t[2]=n*a*o-r*i*l,t[3]=n*a*l-r*i*o):s==="XZY"&&(t[0]=r*a*l-n*i*o,t[1]=n*i*l-r*a*o,t[2]=n*a*o+r*i*l,t[3]=n*a*l+r*i*o),t}const Hr=kr,Wr=Fr,Gr=Or,Zr=Tr;class Qr extends Array{constructor(e=0,s=0,r=0,n=1){super(e,s,r,n),this.onChange=()=>{},this._target=this;const i=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&i.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Lr(this._target),this.onChange(),this}set(e,s,r,n){return e.length?this.copy(e):(Wr(this._target,e,s,r,n),this.onChange(),this)}rotateX(e){return Br(this._target,this._target,e),this.onChange(),this}rotateY(e){return Pr(this._target,this._target,e),this.onChange(),this}rotateZ(e){return qr(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Vr(this._target,e),this.onChange(),this}conjugate(e=this._target){return Xr(this._target,e),this.onChange(),this}copy(e){return Hr(this._target,e),this.onChange(),this}normalize(e=this._target){return Zr(this._target,e),this.onChange(),this}multiply(e,s){return s?ct(this._target,e,s):ct(this._target,this._target,e),this.onChange(),this}dot(e){return Gr(this._target,e)}fromMatrix3(e){return Yr(this._target,e),this.onChange(),this}fromEuler(e,s){return Ur(this._target,e,e.order),s||this.onChange(),this}fromAxisAngle(e,s){return Rr(this._target,e,s),this.onChange(),this}slerp(e,s){return Dr(this._target,this._target,e,s),this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this._target[3]=e[s+3],this.onChange(),this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e}}const Kr=1e-6;function Jr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function en(t,e,s,r,n,i,a,o,l,d,h,u,p,f,g,m,_){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=a,t[6]=o,t[7]=l,t[8]=d,t[9]=h,t[10]=u,t[11]=p,t[12]=f,t[13]=g,t[14]=m,t[15]=_,t}function tn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function sn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],u=e[9],p=e[10],f=e[11],g=e[12],m=e[13],_=e[14],x=e[15],C=s*o-r*a,b=s*l-n*a,v=s*d-i*a,$=r*l-n*o,M=r*d-i*o,S=n*d-i*l,I=h*m-u*g,A=h*_-p*g,N=h*x-f*g,F=u*_-p*m,T=u*x-f*m,k=p*x-f*_,j=C*k-b*T+v*F+$*N-M*A+S*I;return j?(j=1/j,t[0]=(o*k-l*T+d*F)*j,t[1]=(n*T-r*k-i*F)*j,t[2]=(m*S-_*M+x*$)*j,t[3]=(p*M-u*S-f*$)*j,t[4]=(l*N-a*k-d*A)*j,t[5]=(s*k-n*N+i*A)*j,t[6]=(_*v-g*S-x*b)*j,t[7]=(h*S-p*v+f*b)*j,t[8]=(a*T-o*N+d*I)*j,t[9]=(r*N-s*T-i*I)*j,t[10]=(g*M-m*v+x*C)*j,t[11]=(u*v-h*M-f*C)*j,t[12]=(o*A-a*F-l*I)*j,t[13]=(s*F-r*A+n*I)*j,t[14]=(m*b-g*$-_*C)*j,t[15]=(h*$-u*b+p*C)*j,t):null}function Nt(t){let e=t[0],s=t[1],r=t[2],n=t[3],i=t[4],a=t[5],o=t[6],l=t[7],d=t[8],h=t[9],u=t[10],p=t[11],f=t[12],g=t[13],m=t[14],_=t[15],x=e*a-s*i,C=e*o-r*i,b=e*l-n*i,v=s*o-r*a,$=s*l-n*a,M=r*l-n*o,S=d*g-h*f,I=d*m-u*f,A=d*_-p*f,N=h*m-u*g,F=h*_-p*g,T=u*_-p*m;return x*T-C*F+b*N+v*A-$*I+M*S}function ht(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],l=e[5],d=e[6],h=e[7],u=e[8],p=e[9],f=e[10],g=e[11],m=e[12],_=e[13],x=e[14],C=e[15],b=s[0],v=s[1],$=s[2],M=s[3];return t[0]=b*r+v*o+$*u+M*m,t[1]=b*n+v*l+$*p+M*_,t[2]=b*i+v*d+$*f+M*x,t[3]=b*a+v*h+$*g+M*C,b=s[4],v=s[5],$=s[6],M=s[7],t[4]=b*r+v*o+$*u+M*m,t[5]=b*n+v*l+$*p+M*_,t[6]=b*i+v*d+$*f+M*x,t[7]=b*a+v*h+$*g+M*C,b=s[8],v=s[9],$=s[10],M=s[11],t[8]=b*r+v*o+$*u+M*m,t[9]=b*n+v*l+$*p+M*_,t[10]=b*i+v*d+$*f+M*x,t[11]=b*a+v*h+$*g+M*C,b=s[12],v=s[13],$=s[14],M=s[15],t[12]=b*r+v*o+$*u+M*m,t[13]=b*n+v*l+$*p+M*_,t[14]=b*i+v*d+$*f+M*x,t[15]=b*a+v*h+$*g+M*C,t}function rn(t,e,s){let r=s[0],n=s[1],i=s[2],a,o,l,d,h,u,p,f,g,m,_,x;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*i+e[12],t[13]=e[1]*r+e[5]*n+e[9]*i+e[13],t[14]=e[2]*r+e[6]*n+e[10]*i+e[14],t[15]=e[3]*r+e[7]*n+e[11]*i+e[15]):(a=e[0],o=e[1],l=e[2],d=e[3],h=e[4],u=e[5],p=e[6],f=e[7],g=e[8],m=e[9],_=e[10],x=e[11],t[0]=a,t[1]=o,t[2]=l,t[3]=d,t[4]=h,t[5]=u,t[6]=p,t[7]=f,t[8]=g,t[9]=m,t[10]=_,t[11]=x,t[12]=a*r+h*n+g*i+e[12],t[13]=o*r+u*n+m*i+e[13],t[14]=l*r+p*n+_*i+e[14],t[15]=d*r+f*n+x*i+e[15]),t}function nn(t,e,s){let r=s[0],n=s[1],i=s[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function on(t,e,s,r){let n=r[0],i=r[1],a=r[2],o=Math.hypot(n,i,a),l,d,h,u,p,f,g,m,_,x,C,b,v,$,M,S,I,A,N,F,T,k,j,E;return Math.abs(o)<Kr?null:(o=1/o,n*=o,i*=o,a*=o,l=Math.sin(s),d=Math.cos(s),h=1-d,u=e[0],p=e[1],f=e[2],g=e[3],m=e[4],_=e[5],x=e[6],C=e[7],b=e[8],v=e[9],$=e[10],M=e[11],S=n*n*h+d,I=i*n*h+a*l,A=a*n*h-i*l,N=n*i*h-a*l,F=i*i*h+d,T=a*i*h+n*l,k=n*a*h+i*l,j=i*a*h-n*l,E=a*a*h+d,t[0]=u*S+m*I+b*A,t[1]=p*S+_*I+v*A,t[2]=f*S+x*I+$*A,t[3]=g*S+C*I+M*A,t[4]=u*N+m*F+b*T,t[5]=p*N+_*F+v*T,t[6]=f*N+x*F+$*T,t[7]=g*N+C*F+M*T,t[8]=u*k+m*j+b*E,t[9]=p*k+_*j+v*E,t[10]=f*k+x*j+$*E,t[11]=g*k+C*j+M*E,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function an(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function At(t,e){let s=e[0],r=e[1],n=e[2],i=e[4],a=e[5],o=e[6],l=e[8],d=e[9],h=e[10];return t[0]=Math.hypot(s,r,n),t[1]=Math.hypot(i,a,o),t[2]=Math.hypot(l,d,h),t}function ln(t){let e=t[0],s=t[1],r=t[2],n=t[4],i=t[5],a=t[6],o=t[8],l=t[9],d=t[10];const h=e*e+s*s+r*r,u=n*n+i*i+a*a,p=o*o+l*l+d*d;return Math.sqrt(Math.max(h,u,p))}const It=function(){const t=[1,1,1];return function(e,s){let r=t;At(r,s);let n=1/r[0],i=1/r[1],a=1/r[2],o=s[0]*n,l=s[1]*i,d=s[2]*a,h=s[4]*n,u=s[5]*i,p=s[6]*a,f=s[8]*n,g=s[9]*i,m=s[10]*a,_=o+u+m,x=0;return _>0?(x=Math.sqrt(_+1)*2,e[3]=.25*x,e[0]=(p-g)/x,e[1]=(f-d)/x,e[2]=(l-h)/x):o>u&&o>m?(x=Math.sqrt(1+o-u-m)*2,e[3]=(p-g)/x,e[0]=.25*x,e[1]=(l+h)/x,e[2]=(f+d)/x):u>m?(x=Math.sqrt(1+u-o-m)*2,e[3]=(f-d)/x,e[0]=(l+h)/x,e[1]=.25*x,e[2]=(p+g)/x):(x=Math.sqrt(1+m-o-u)*2,e[3]=(l-h)/x,e[0]=(f+d)/x,e[1]=(p+g)/x,e[2]=.25*x),e}}();function cn(t,e,s,r){let n=se([t[0],t[1],t[2]]);const i=se([t[4],t[5],t[6]]),a=se([t[8],t[9],t[10]]);Nt(t)<0&&(n=-n),s[0]=t[12],s[1]=t[13],s[2]=t[14];const l=t.slice(),d=1/n,h=1/i,u=1/a;l[0]*=d,l[1]*=d,l[2]*=d,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=u,l[9]*=u,l[10]*=u,It(e,l),r[0]=n,r[1]=i,r[2]=a}function hn(t,e,s,r){const n=t,i=e[0],a=e[1],o=e[2],l=e[3],d=i+i,h=a+a,u=o+o,p=i*d,f=i*h,g=i*u,m=a*h,_=a*u,x=o*u,C=l*d,b=l*h,v=l*u,$=r[0],M=r[1],S=r[2];return n[0]=(1-(m+x))*$,n[1]=(f+v)*$,n[2]=(g-b)*$,n[3]=0,n[4]=(f-v)*M,n[5]=(1-(p+x))*M,n[6]=(_+C)*M,n[7]=0,n[8]=(g+b)*S,n[9]=(_-C)*S,n[10]=(1-(p+m))*S,n[11]=0,n[12]=s[0],n[13]=s[1],n[14]=s[2],n[15]=1,n}function fn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s+s,o=r+r,l=n+n,d=s*a,h=r*a,u=r*o,p=n*a,f=n*o,g=n*l,m=i*a,_=i*o,x=i*l;return t[0]=1-u-g,t[1]=h+x,t[2]=p-_,t[3]=0,t[4]=h-x,t[5]=1-d-g,t[6]=f+m,t[7]=0,t[8]=p+_,t[9]=f-m,t[10]=1-d-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dn(t,e,s,r,n){let i=1/Math.tan(e/2),a=1/(r-n);return t[0]=i/s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*a,t[15]=0,t}function un(t,e,s,r,n,i,a){let o=1/(e-s),l=1/(r-n),d=1/(i-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*d,t[11]=0,t[12]=(e+s)*o,t[13]=(n+r)*l,t[14]=(a+i)*d,t[15]=1,t}function pn(t,e,s,r){let n=e[0],i=e[1],a=e[2],o=r[0],l=r[1],d=r[2],h=n-s[0],u=i-s[1],p=a-s[2],f=h*h+u*u+p*p;f===0?p=1:(f=1/Math.sqrt(f),h*=f,u*=f,p*=f);let g=l*p-d*u,m=d*h-o*p,_=o*u-l*h;return f=g*g+m*m+_*_,f===0&&(d?o+=1e-6:l?d+=1e-6:l+=1e-6,g=l*p-d*u,m=d*h-o*p,_=o*u-l*h,f=g*g+m*m+_*_),f=1/Math.sqrt(f),g*=f,m*=f,_*=f,t[0]=g,t[1]=m,t[2]=_,t[3]=0,t[4]=u*_-p*m,t[5]=p*g-h*_,t[6]=h*m-u*g,t[7]=0,t[8]=h,t[9]=u,t[10]=p,t[11]=0,t[12]=n,t[13]=i,t[14]=a,t[15]=1,t}function ft(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t[3]=e[3]+s[3],t[4]=e[4]+s[4],t[5]=e[5]+s[5],t[6]=e[6]+s[6],t[7]=e[7]+s[7],t[8]=e[8]+s[8],t[9]=e[9]+s[9],t[10]=e[10]+s[10],t[11]=e[11]+s[11],t[12]=e[12]+s[12],t[13]=e[13]+s[13],t[14]=e[14]+s[14],t[15]=e[15]+s[15],t}function dt(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t[3]=e[3]-s[3],t[4]=e[4]-s[4],t[5]=e[5]-s[5],t[6]=e[6]-s[6],t[7]=e[7]-s[7],t[8]=e[8]-s[8],t[9]=e[9]-s[9],t[10]=e[10]-s[10],t[11]=e[11]-s[11],t[12]=e[12]-s[12],t[13]=e[13]-s[13],t[14]=e[14]-s[14],t[15]=e[15]-s[15],t}function gn(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12]*s,t[13]=e[13]*s,t[14]=e[14]*s,t[15]=e[15]*s,t}class fe extends Array{constructor(e=1,s=0,r=0,n=0,i=0,a=1,o=0,l=0,d=0,h=0,u=1,p=0,f=0,g=0,m=0,_=1){return super(e,s,r,n,i,a,o,l,d,h,u,p,f,g,m,_),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,s,r,n,i,a,o,l,d,h,u,p,f,g,m,_){return e.length?this.copy(e):(en(this,e,s,r,n,i,a,o,l,d,h,u,p,f,g,m,_),this)}translate(e,s=this){return rn(this,s,e),this}rotate(e,s,r=this){return on(this,r,e,s),this}scale(e,s=this){return nn(this,s,typeof e=="number"?[e,e,e]:e),this}add(e,s){return s?ft(this,e,s):ft(this,this,e),this}sub(e,s){return s?dt(this,e,s):dt(this,this,e),this}multiply(e,s){return e.length?s?ht(this,e,s):ht(this,this,e):gn(this,this,e),this}identity(){return tn(this),this}copy(e){return Jr(this,e),this}fromPerspective({fov:e,aspect:s,near:r,far:n}={}){return dn(this,e,s,r,n),this}fromOrthogonal({left:e,right:s,bottom:r,top:n,near:i,far:a}){return un(this,e,s,r,n,i,a),this}fromQuaternion(e){return fn(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return sn(this,e),this}compose(e,s,r){return hn(this,e,s,r),this}decompose(e,s,r){return cn(this,e,s,r),this}getRotation(e){return It(e,this),this}getTranslation(e){return an(e,this),this}getScaling(e){return At(e,this),this}getMaxScaleOnAxis(){return ln(this)}lookAt(e,s,r){return pn(this,e,s,r),this}determinant(){return Nt(this)}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this[3]=e[s+3],this[4]=e[s+4],this[5]=e[s+5],this[6]=e[s+6],this[7]=e[s+7],this[8]=e[s+8],this[9]=e[s+9],this[10]=e[s+10],this[11]=e[s+11],this[12]=e[s+12],this[13]=e[s+13],this[14]=e[s+14],this[15]=e[s+15],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e[s+4]=this[4],e[s+5]=this[5],e[s+6]=this[6],e[s+7]=this[7],e[s+8]=this[8],e[s+9]=this[9],e[s+10]=this[10],e[s+11]=this[11],e[s+12]=this[12],e[s+13]=this[13],e[s+14]=this[14],e[s+15]=this[15],e}}function mn(t,e,s="YXZ"){return s==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):s==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):s==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):s==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):s==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):s==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const ut=new fe;class _n extends Array{constructor(e=0,s=e,r=e,n="YXZ"){super(e,s,r),this.order=n,this.onChange=()=>{},this._target=this;const i=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&i.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,s=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=s,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,s=this.order){return mn(this._target,e,s),this.onChange(),this}fromQuaternion(e,s=this.order,r){return ut.fromQuaternion(e),this._target.fromRotationMatrix(ut,s),r||this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}}class xn{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new fe,this.worldMatrix=new fe,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new V,this.quaternion=new Qr,this.scale=new V(1),this.rotation=new _n,this.up=new V(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,s=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,s&&e&&e.addChild(this,!1)}addChild(e,s=!0){~this.children.indexOf(e)||this.children.push(e),s&&e.setParent(this,!1)}removeChild(e,s=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),s&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let s=0,r=this.children.length;s<r;s++)this.children[s].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let s=0,r=this.children.length;s<r;s++)this.children[s].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,s=!1){s?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function yn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function bn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s+s,o=r+r,l=n+n,d=s*a,h=r*a,u=r*o,p=n*a,f=n*o,g=n*l,m=i*a,_=i*o,x=i*l;return t[0]=1-u-g,t[3]=h-x,t[6]=p+_,t[1]=h+x,t[4]=1-d-g,t[7]=f-m,t[2]=p-_,t[5]=f+m,t[8]=1-d-u,t}function vn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function wn(t,e,s,r,n,i,a,o,l,d){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=a,t[6]=o,t[7]=l,t[8]=d,t}function Cn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function jn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],u=h*a-o*d,p=-h*i+o*l,f=d*i-a*l,g=s*u+r*p+n*f;return g?(g=1/g,t[0]=u*g,t[1]=(-h*r+n*d)*g,t[2]=(o*r-n*a)*g,t[3]=p*g,t[4]=(h*s-n*l)*g,t[5]=(-o*s+n*i)*g,t[6]=f*g,t[7]=(-d*s+r*l)*g,t[8]=(a*s-r*i)*g,t):null}function pt(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],l=e[5],d=e[6],h=e[7],u=e[8],p=s[0],f=s[1],g=s[2],m=s[3],_=s[4],x=s[5],C=s[6],b=s[7],v=s[8];return t[0]=p*r+f*a+g*d,t[1]=p*n+f*o+g*h,t[2]=p*i+f*l+g*u,t[3]=m*r+_*a+x*d,t[4]=m*n+_*o+x*h,t[5]=m*i+_*l+x*u,t[6]=C*r+b*a+v*d,t[7]=C*n+b*o+v*h,t[8]=C*i+b*l+v*u,t}function Mn(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],l=e[5],d=e[6],h=e[7],u=e[8],p=s[0],f=s[1];return t[0]=r,t[1]=n,t[2]=i,t[3]=a,t[4]=o,t[5]=l,t[6]=p*r+f*a+d,t[7]=p*n+f*o+h,t[8]=p*i+f*l+u,t}function $n(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],l=e[5],d=e[6],h=e[7],u=e[8],p=Math.sin(s),f=Math.cos(s);return t[0]=f*r+p*a,t[1]=f*n+p*o,t[2]=f*i+p*l,t[3]=f*a-p*r,t[4]=f*o-p*n,t[5]=f*l-p*i,t[6]=d,t[7]=h,t[8]=u,t}function En(t,e,s){let r=s[0],n=s[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Sn(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],u=e[9],p=e[10],f=e[11],g=e[12],m=e[13],_=e[14],x=e[15],C=s*o-r*a,b=s*l-n*a,v=s*d-i*a,$=r*l-n*o,M=r*d-i*o,S=n*d-i*l,I=h*m-u*g,A=h*_-p*g,N=h*x-f*g,F=u*_-p*m,T=u*x-f*m,k=p*x-f*_,j=C*k-b*T+v*F+$*N-M*A+S*I;return j?(j=1/j,t[0]=(o*k-l*T+d*F)*j,t[1]=(l*N-a*k-d*A)*j,t[2]=(a*T-o*N+d*I)*j,t[3]=(n*T-r*k-i*F)*j,t[4]=(s*k-n*N+i*A)*j,t[5]=(r*N-s*T-i*I)*j,t[6]=(m*S-_*M+x*$)*j,t[7]=(_*v-g*S-x*b)*j,t[8]=(g*M-m*v+x*C)*j,t):null}class zn extends Array{constructor(e=1,s=0,r=0,n=0,i=1,a=0,o=0,l=0,d=1){return super(e,s,r,n,i,a,o,l,d),this}set(e,s,r,n,i,a,o,l,d){return e.length?this.copy(e):(wn(this,e,s,r,n,i,a,o,l,d),this)}translate(e,s=this){return Mn(this,s,e),this}rotate(e,s=this){return $n(this,s,e),this}scale(e,s=this){return En(this,s,e),this}multiply(e,s){return s?pt(this,e,s):pt(this,this,e),this}identity(){return Cn(this),this}copy(e){return vn(this,e),this}fromMatrix4(e){return yn(this,e),this}fromQuaternion(e){return bn(this,e),this}fromBasis(e,s,r){return this.set(e[0],e[1],e[2],s[0],s[1],s[2],r[0],r[1],r[2]),this}inverse(e=this){return jn(this,e),this}getNormalMatrix(e){return Sn(this,e),this}}let Nn=0;class An extends xn{constructor(e,{geometry:s,program:r,mode:n=e.TRIANGLES,frustumCulled:i=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Nn++,this.geometry=s,this.program=r,this.mode=n,this.frustumCulled=i,this.renderOrder=a,this.modelViewMatrix=new fe,this.normalMatrix=new zn,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let s=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:s}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const gt={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function mt(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function In(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function _t(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?mt(t):gt[t.toLowerCase()]?mt(gt[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):In(t)}class xt extends Array{constructor(e){return Array.isArray(e)?super(...e):super(..._t(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(_t(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class kn extends Mr{constructor(e,{attributes:s={}}={}){Object.assign(s,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,s)}}const Fn=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Tn=`#version 300 es
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
`;function On(t){const{colorStops:e=["#00d8ff","#7cff67","#00d8ff"],amplitude:s=1}=t,r=w.useRef(t);r.current=t;const n=w.useRef(null);return w.useEffect(()=>{const i=n.current;if(!i)return;const a=new Ir,o=a.gl;o.clearColor(1,1,1,1);let l;function d(){if(!i)return;const m=i.offsetWidth,_=i.offsetHeight;a.setSize(m,_),l&&(l.uniforms.uResolution.value=[m,_])}window.addEventListener("resize",d);const h=new kn(o);h.attributes.uv&&delete h.attributes.uv;const u=e.map(m=>{const _=new xt(m);return[_.r,_.g,_.b]});l=new Er(o,{vertex:Fn,fragment:Tn,uniforms:{uTime:{value:0},uAmplitude:{value:s},uColorStops:{value:u},uResolution:{value:[i.offsetWidth,i.offsetHeight]}}});const p=new An(o,{geometry:h,program:l});i.appendChild(o.canvas);let f=0;const g=m=>{f=requestAnimationFrame(g);const{time:_=m*.01,speed:x=1}=r.current;l.uniforms.uTime.value=_*x*.1,l.uniforms.uAmplitude.value=r.current.amplitude??1;const C=r.current.colorStops??e;l.uniforms.uColorStops.value=C.map(b=>{const v=new xt(b);return[v.r,v.g,v.b]}),a.render({scene:p})};return f=requestAnimationFrame(g),d(),()=>{var m;cancelAnimationFrame(f),window.removeEventListener("resize",d),i&&o.canvas.parentNode===i&&i.removeChild(o.canvas),(m=o.getExtension("WEBGL_lose_context"))==null||m.loseContext()}},[s]),c.jsx("div",{ref:n,className:"aurora-container"})}const je=({multi:t})=>{var d,h,u,p,f,g,m,_,x,C,b,v,$,M,S,I,A,N,F,T,k,j;const e=de(),{id:s}=J(),[r,n]=w.useState(null),[i,a]=w.useState(null),{language:o}=K(),l=(E,X)=>{const P=encodeURIComponent(X),z=`https://wa.me/${E}?text=${P}`;window.open(z,"_blank")};return w.useEffect(()=>{e(Yt(s)).then(E=>{var X,P,z;n(E==null?void 0:E.payload),a((z=(P=(X=E==null?void 0:E.payload)==null?void 0:X.product_images)==null?void 0:P[0])==null?void 0:z.image)})},[]),console.log(r),c.jsxs("section",{className:R.outer,children:[c.jsx(On,{colorStops:[(d=r==null?void 0:r.shop)==null?void 0:d.border_color,(h=r==null?void 0:r.shop)==null?void 0:h.border_color,(u=r==null?void 0:r.shop)==null?void 0:u.border_color],speed:.5}),c.jsxs("div",{className:R.container,children:[c.jsxs("div",{className:R.rowlogo,children:[c.jsx(O,{to:t?`/${(p=r==null?void 0:r.shop)==null?void 0:p.slug}/details/${r==null?void 0:r.category}`:`/${(f=r==null?void 0:r.shop)==null?void 0:f.slug}/`,children:c.jsx(ar,{})}),c.jsxs("div",{className:R.brand,children:[c.jsx("p",{children:(g=r==null?void 0:r.shop)==null?void 0:g[`name_${o}`]}),c.jsx("img",{src:(m=r==null?void 0:r.shop)==null?void 0:m.image,alt:(_=r==null?void 0:r.shop)==null?void 0:_.name})]})]}),c.jsxs("div",{className:R.row,children:[c.jsxs("div",{className:R.content,children:[c.jsx("p",{className:R.name,children:r==null?void 0:r[`name_${o}`]}),c.jsx("p",{className:R.desc,children:r==null?void 0:r[`description_${o}`]}),c.jsx("div",{className:R.colors,children:(x=r==null?void 0:r.colors)==null?void 0:x.map(E=>c.jsx("span",{style:{backgroundColor:E}},E))}),c.jsx("div",{className:R.sizes,children:(C=r==null?void 0:r.letter_sizes)!=null&&C.length?(b=r==null?void 0:r.letter_sizes)==null?void 0:b.map(E=>c.jsx("span",{children:E},E)):(v=r==null?void 0:r.number_sizes)==null?void 0:v.map(E=>c.jsx("span",{children:E},E))}),c.jsxs("div",{className:R.price,children:[c.jsxs("p",{style:{color:(r==null?void 0:r.after_sale_price)&&"#e93f3f"},children:[r!=null&&r.after_sale_price?r==null?void 0:r.after_sale_price:r==null?void 0:r.price,"₪"]}),(r==null?void 0:r.after_sale_price)&&c.jsxs("span",{children:[r==null?void 0:r.price," ₪"]}),(($=r==null?void 0:r.tag)==null?void 0:$.icon)&&c.jsx("img",{src:(M=r==null?void 0:r.tag)==null?void 0:M.icon,alt:(S=r==null?void 0:r.tag)==null?void 0:S.name})]}),c.jsxs("div",{className:R.row,style:{padding:0},children:[c.jsxs("button",{onClick:()=>{var E;return l((E=r==null?void 0:r.shop)==null?void 0:E.contact_number,r==null?void 0:r[`name_${o}`])},style:{backgroundColor:(I=r==null?void 0:r.shop)!=null&&I.primary_color?(A=r==null?void 0:r.shop)==null?void 0:A.primary_color:"#fff",color:(N=r==null?void 0:r.shop)!=null&&N.primary_color&&Oe((F=r==null?void 0:r.shop)==null?void 0:F.primary_color)?"#fff":"#000"},children:[" اطلب الان ",c.jsx(ns,{})]}),(r==null?void 0:r.ready_to_ship)&&c.jsxs("p",{className:R.status,style:{color:(T=r==null?void 0:r.shop)!=null&&T.primary_color?(k=r==null?void 0:r.shop)==null?void 0:k.primary_color:"#000"},children:[c.jsx(is,{})," "]})]})]}),c.jsxs("div",{className:R.gallery,children:[c.jsx("div",{className:R.right,children:c.jsx("img",{src:i,alt:r==null?void 0:r.name})}),c.jsx("div",{className:R.left,children:(j=r==null?void 0:r.product_images)==null?void 0:j.map((E,X)=>c.jsx("img",{src:E==null?void 0:E.image,onClick:P=>a(E==null?void 0:E.image),alt:r==null?void 0:r.name},E==null?void 0:E.id))})]})]})]})]})},Ln=({data:t,categories:e})=>{const{pathname:s}=Z();return w.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),c.jsx(ue,{children:c.jsxs("main",{className:ms.main,children:[(t==null?void 0:t.contact_number)&&c.jsx(O,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"whatsbtn !border-[#26CC64] !bg-[#26CC64] !text-white hover:!bg-white hover:!text-[#26CC64]",children:c.jsx(ve,{})}),!(s!=null&&s.includes("product"))&&c.jsx(Is,{data:t}),s!=null&&s.includes("product")?c.jsx(je,{}):c.jsx(Xs,{mainData:t,categories:e})]})})},Rn="_main_jzy6d_1",Bn="_pages_jzy6d_5",Pn="_modal_jzy6d_12",qn="_modalContent_jzy6d_24",Dn="_bottomNav_jzy6d_63",Vn="_cart_jzy6d_66",Xn="_cartmodal_jzy6d_100",Yn="_fadeIn_jzy6d_1",Un="_slideOut_jzy6d_1",Hn="_close_jzy6d_134",Wn="_cartItems_jzy6d_151",Gn="_cartItem_jzy6d_151",Zn="_extras_jzy6d_170",Qn="_extrasContent_jzy6d_184",Kn="_slideIn_jzy6d_1",Jn="_item_jzy6d_187",ei="_remove_jzy6d_200",ti="_modalText_jzy6d_213",si="_copy_jzy6d_255",yt={main:Rn,pages:Bn,modal:Pn,modalContent:qn,bottomNav:Dn,cart:Vn,cartmodal:Xn,fadeIn:Yn,"slide-out":"_slide-out_jzy6d_131",slideOut:Un,close:Hn,cartItems:Wn,cartItem:Gn,extras:Zn,extrasContent:Qn,slideIn:Kn,item:Jn,remove:ei,modalText:ti,copy:si},ri="_container_n0zdl_1",ni="_sectionOne_n0zdl_11",ii="_items_n0zdl_17",oi="_item_n0zdl_17",ai="_title_n0zdl_49",li="_productsContainer_n0zdl_54",ci="_products_n0zdl_54",hi="_itemsContainer_n0zdl_65",fi="_icons_n0zdl_102",di="_notActive_n0zdl_132",ui="_notAct_n0zdl_132",pi="_copy_n0zdl_157",gi="_sectionHeader_n0zdl_180",H={container:ri,sectionOne:ni,items:ii,item:oi,title:ai,productsContainer:li,products:ci,itemsContainer:hi,icons:fi,notActive:di,notAct:ui,copy:pi,sectionHeader:gi},Ue="/assets/exitem-DQFMuJ0p.png";var mi=c.Fragment;function L(t,e,s){return Ut.call(e,"css")?c.jsx(Ht,Wt(t,e),s):c.jsx(t,e,s)}var _i=Object.defineProperty,xi=(t,e,s)=>e in t?_i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ie=(t,e,s)=>xi(t,typeof e!="symbol"?e+"":e,s),Be=new Map,oe=new WeakMap,bt=0,yi=void 0;function bi(t){return t?(oe.has(t)||(bt+=1,oe.set(t,bt.toString())),oe.get(t)):"0"}function vi(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?bi(t.root):t[e]}`).toString()}function wi(t){const e=vi(t);let s=Be.get(e);if(!s){const r=new Map;let n;const i=new IntersectionObserver(a=>{a.forEach(o=>{var l;const d=o.isIntersecting&&n.some(h=>o.intersectionRatio>=h);t.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=d),(l=r.get(o.target))==null||l.forEach(h=>{h(d,o)})})},t);n=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:e,observer:i,elements:r},Be.set(e,s)}return s}function kt(t,e,s={},r=yi){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:i,elements:a}=wi(s),o=a.get(t)||[];return a.has(t)||a.set(t,o),o.push(e),i.observe(t),function(){o.splice(o.indexOf(e),1),o.length===0&&(a.delete(t),i.unobserve(t)),a.size===0&&(i.disconnect(),Be.delete(n))}}function Ci(t){return typeof t.children!="function"}var vt=class extends w.Component{constructor(t){super(t),ie(this,"node",null),ie(this,"_unobserveCb",null),ie(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),ie(this,"handleChange",(e,s)=>{e&&this.props.triggerOnce&&this.unobserve(),Ci(this.props)||this.setState({inView:e,entry:s}),this.props.onChange&&this.props.onChange(e,s)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:s,trackVisibility:r,delay:n,fallbackInView:i}=this.props;this._unobserveCb=kt(this.node,this.handleChange,{threshold:t,root:e,rootMargin:s,trackVisibility:r,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:f,entry:g}=this.state;return t({inView:f,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:s,threshold:r,root:n,rootMargin:i,onChange:a,skip:o,trackVisibility:l,delay:d,initialInView:h,fallbackInView:u,...p}=this.props;return w.createElement(e||"div",{ref:this.handleNode,...p},t)}};function Ft({threshold:t,delay:e,trackVisibility:s,rootMargin:r,root:n,triggerOnce:i,skip:a,initialInView:o,fallbackInView:l,onChange:d}={}){var h;const[u,p]=w.useState(null),f=w.useRef(),[g,m]=w.useState({inView:!!o,entry:void 0});f.current=d,w.useEffect(()=>{if(a||!u)return;let b;return b=kt(u,(v,$)=>{m({inView:v,entry:$}),f.current&&f.current(v,$),$.isIntersecting&&i&&b&&(b(),b=void 0)},{root:n,rootMargin:r,threshold:t,trackVisibility:s,delay:e},l),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,u,n,r,i,a,s,l,e]);const _=(h=g.entry)==null?void 0:h.target,x=w.useRef();!u&&_&&!i&&!a&&x.current!==_&&(x.current=_,m({inView:!!o,entry:void 0}));const C=[p,g.inView,g.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}y`
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
`;const ji=y`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Mi=y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$i=y`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ei=y`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Si=y`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,He=y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zi=y`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ni=y`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ai=y`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ii=y`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ki=y`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fi=y`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ti=y`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Oi({duration:t=1e3,delay:e=0,timingFunction:s="ease",keyframes:r=He,iterationCount:n=1}){return Zt`
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
  `}function Li(t){return t==null}function Ri(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Tt(t,e){return s=>s?t():e()}function re(t){return Tt(t,()=>null)}function Pe(t){return re(()=>({opacity:0}))(t)}const Ot=t=>{const{cascade:e=!1,damping:s=.5,delay:r=0,duration:n=1e3,fraction:i=0,keyframes:a=He,triggerOnce:o=!1,className:l,style:d,childClassName:h,childStyle:u,children:p,onVisibilityChange:f}=t,g=w.useMemo(()=>Oi({keyframes:a,duration:n}),[n,a]);return Li(p)?null:Ri(p)?L(Pi,{...t,animationStyles:g,children:String(p)}):Gt.isFragment(p)?L(Lt,{...t,animationStyles:g}):L(mi,{children:w.Children.map(p,(m,_)=>{if(!w.isValidElement(m))return null;const x=r+(e?_*n*s:0);switch(m.type){case"ol":case"ul":return L(Me,{children:({cx:C})=>L(m.type,{...m.props,className:C(l,m.props.className),style:Object.assign({},d,m.props.style),children:L(Ot,{...t,children:m.props.children})})});case"li":return L(vt,{threshold:i,triggerOnce:o,onChange:f,children:({inView:C,ref:b})=>L(Me,{children:({cx:v})=>L(m.type,{...m.props,ref:b,className:v(h,m.props.className),css:re(()=>g)(C),style:Object.assign({},u,m.props.style,Pe(!C),{animationDelay:x+"ms"})})})});default:return L(vt,{threshold:i,triggerOnce:o,onChange:f,children:({inView:C,ref:b})=>L("div",{ref:b,className:l,css:re(()=>g)(C),style:Object.assign({},d,Pe(!C),{animationDelay:x+"ms"}),children:L(Me,{children:({cx:v})=>L(m.type,{...m.props,className:v(h,m.props.className),style:Object.assign({},u,m.props.style)})})})})}})})},Bi={display:"inline-block",whiteSpace:"pre"},Pi=t=>{const{animationStyles:e,cascade:s=!1,damping:r=.5,delay:n=0,duration:i=1e3,fraction:a=0,triggerOnce:o=!1,className:l,style:d,children:h,onVisibilityChange:u}=t,{ref:p,inView:f}=Ft({triggerOnce:o,threshold:a,onChange:u});return Tt(()=>L("div",{ref:p,className:l,style:Object.assign({},d,Bi),children:h.split("").map((g,m)=>L("span",{css:re(()=>e)(f),style:{animationDelay:n+m*i*r+"ms"},children:g},m))}),()=>L(Lt,{...t,children:h}))(s)},Lt=t=>{const{animationStyles:e,fraction:s=0,triggerOnce:r=!1,className:n,style:i,children:a,onVisibilityChange:o}=t,{ref:l,inView:d}=Ft({triggerOnce:r,threshold:s,onChange:o});return L("div",{ref:l,className:n,css:re(()=>e)(d),style:Object.assign({},i,Pe(!d)),children:a})};y`
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
`;const qi=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Di=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Vi=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Xi=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Yi=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ui=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Hi=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Wi=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Gi=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Zi=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Qi=y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ki=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ji=y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function eo(t,e,s){switch(s){case"bottom-left":return e?Di:Mi;case"bottom-right":return e?Vi:$i;case"down":return t?e?Yi:Si:e?Xi:Ei;case"left":return t?e?Hi:zi:e?Ui:He;case"right":return t?e?Gi:Ai:e?Wi:Ni;case"top-left":return e?Zi:Ii;case"top-right":return e?Qi:ki;case"up":return t?e?Ji:Ti:e?Ki:Fi;default:return e?qi:ji}}const We=t=>{const{big:e=!1,direction:s,reverse:r=!1,...n}=t,i=w.useMemo(()=>eo(e,r,s),[e,s,r]);return L(Ot,{keyframes:i,...n})};y`
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
`;const to=({data:t,language:e,categories:s})=>{const r=w.useRef([]),n=o=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})},i=o=>{const l=r.current[o];if(l){const h=l.scrollLeft-600;l.scrollTo({left:h,behavior:"smooth"})}},a=o=>{const l=r.current[o];if(l){const h=l.scrollLeft+600;l.scrollTo({left:h,behavior:"smooth"})}};return c.jsxs("section",{className:H.container,children:[c.jsxs("div",{className:H.sectionOne,children:[c.jsx("div",{className:H.items,children:s==null?void 0:s.map((o,l)=>{if(o!=null&&o.is_active)return c.jsx(We,{cascade:!0,damping:.1,children:c.jsxs("div",{onClick:()=>n(o==null?void 0:o.id),className:H.item,style:{borderColor:t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"},children:[c.jsx("img",{src:(o==null?void 0:o.image)||Ue,alt:l+1}),c.jsx("p",{children:o==null?void 0:o[`name_${e}`]})]})},o==null?void 0:o.id)})}),s==null?void 0:s.map((o,l)=>{var d,h;return c.jsxs("div",{className:H.itemsContainer,style:{display:((d=o==null?void 0:o.products)==null?void 0:d.length)>0?"flex":"none"},id:o==null?void 0:o.id,children:[c.jsx("h3",{children:o==null?void 0:o[`name_${e}`]}),c.jsx("div",{className:H.items,ref:u=>r.current[l]=u,children:(h=o==null?void 0:o.products)==null?void 0:h.map(u=>{var p;return c.jsx(ge,{data:u,color:t==null?void 0:t.primary_color,to:`/${(p=u==null?void 0:u.shop)==null?void 0:p.slug}/product/${u==null?void 0:u.id}`},u==null?void 0:u.id)})}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] text-white border-0  hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute left-12 top-1/2 -translate-1/2",onClick:()=>i(l),children:c.jsx(we,{})}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] text-white border-0  hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-1/2",onClick:()=>a(l),children:c.jsx(Ce,{})})]},o==null?void 0:o.id)})]}),c.jsxs("div",{className:H.copy,children:[c.jsxs("p",{children:[B("rights",e)," © ",ne]}),c.jsx(O,{to:"/",children:"MyStore."}),c.jsxs("p",{children:[B("allRights",e),"."]})]})]})},so="_container_1sg7w_1",ro="_navbar_1sg7w_6",no="_logo_1sg7w_15",io="_left_1sg7w_24",oo="_language_1sg7w_29",ao="_social_1sg7w_38",lo="_imageContainer_1sg7w_47",co="_buttonNext_1sg7w_57",ho="_buttonPrev_1sg7w_57",U={container:so,navbar:ro,logo:no,left:io,language:oo,social:ao,imageContainer:lo,buttonNext:co,buttonPrev:ho},fo=({data:t,language:e,changeLanguage:s})=>{var u,p;const r=w.useRef(),[n,i]=w.useState(!1),[a,o]=w.useState(!0),l=f=>{i(f.isEnd),o(f.isBeginning)},d=f=>{f.stopPropagation(),f.preventDefault(),r.current&&!n&&r.current.slideNext()},h=f=>{f.stopPropagation(),f.preventDefault(),r.current&&!a&&r.current.slidePrev()};return c.jsxs("section",{className:U.container,children:[c.jsxs("div",{className:U.navbar,children:[c.jsxs(O,{to:"#",className:U.logo,children:[c.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",alt:"restaurant image"}),c.jsx("h3",{children:t==null?void 0:t[`name_${e}`]})]}),c.jsxs("div",{className:U.left,children:[c.jsx("div",{className:U.language,children:e=="he"?c.jsxs("button",{style:{backgroundColor:e=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("ar"),children:[" العربية ",c.jsx(Ze,{})]}):c.jsxs("button",{style:{backgroundColor:e=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("he"),children:["עברית ",c.jsx(Ze,{})]})}),c.jsx("div",{className:U.social,children:(u=t==null?void 0:t.social_media_links)==null?void 0:u.map(f=>c.jsxs(O,{to:(f==null?void 0:f.platform)=="phone_number"?`tel:${f==null?void 0:f.url}`:f==null?void 0:f.url,onMouseOver:g=>g.target.style.color=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:g=>g.target.style.color="#000",target:"_blank",children:[(f==null?void 0:f.platform)=="facebook"&&c.jsx(me,{}),(f==null?void 0:f.platform)=="youtube"&&c.jsx(_e,{}),(f==null?void 0:f.platform)=="tiktok"&&c.jsx(xe,{}),(f==null?void 0:f.platform)=="pinterest"&&c.jsx(ye,{}),(f==null?void 0:f.platform)=="instagram"&&c.jsx(be,{}),(f==null?void 0:f.platform)=="phone_number"&&c.jsx(Q,{}),!(f!=null&&f.platform)&&c.jsx(Ye,{})]},f==null?void 0:f.id))})]})]}),c.jsx($t,{spaceBetween:5,slidesPerView:1,modules:[St,As],onSlideChange:l,onSwiper:f=>{r.current=f},effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:50,modifier:1,slideShadows:!0},loop:!0,className:U.imageContainer,autoplay:{delay:3500,disableOnInteraction:!1},speed:3500,children:(p=t==null?void 0:t.header_images)==null?void 0:p.map((f,g)=>c.jsx(Et,{children:c.jsx("img",{src:f!=null&&f.image?f==null?void 0:f.image:"https://placehold.co/600x1000",alt:`Slide ${g+1}`})},g))}),c.jsx("button",{className:U.buttonPrev,onClick:d,style:{backgroundColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",color:Oe(t==null?void 0:t.primary_color)?"#fff":"#000"},children:c.jsx(ss,{})}),c.jsx("button",{className:U.buttonNext,onClick:h,style:{backgroundColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",color:Oe(t==null?void 0:t.primary_color)?"#fff":"#000"},children:c.jsx(rs,{})})]})},uo=({data:t,categories:e})=>{const[s,r]=w.useState(!1),[n,i]=w.useState(!1),{language:a,changeLanguage:o}=K(),{pathname:l}=Z();return w.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[l]),c.jsx(ue,{children:c.jsxs("main",{className:yt.main,children:[(t==null?void 0:t.contact_number)&&c.jsx(O,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"whatsbtn !border-[#26CC64] !bg-[#26CC64] !text-white hover:!bg-white hover:!text-[#26CC64]",children:c.jsx(ve,{})}),!(l!=null&&l.includes("product"))&&c.jsx(fo,{data:t,setShowModal:r,changeLanguage:o,language:a,showModal:s}),c.jsx("div",{className:yt.pages,children:l!=null&&l.includes("product")?c.jsx(je,{}):c.jsx(to,{data:t,categories:e,language:a,showCartModal:n,setShowCartModal:i})})]})})},po="_main_4cdyh_1",go="_pages_4cdyh_9",mo="_cart_4cdyh_12",_o="_cartmodal_4cdyh_46",xo="_fadeIn_4cdyh_1",yo="_modalContent_4cdyh_62",bo="_slideOut_4cdyh_1",vo="_close_4cdyh_83",wo="_cartItems_4cdyh_100",Co="_cartItem_4cdyh_100",jo="_extras_4cdyh_120",Mo="_extrasContent_4cdyh_134",$o="_slideIn_4cdyh_1",Eo="_item_4cdyh_137",So="_remove_4cdyh_150",zo="_modalText_4cdyh_163",No="_overlay_4cdyh_234",wt={main:po,pages:go,cart:mo,cartmodal:_o,fadeIn:xo,modalContent:yo,"slide-out":"_slide-out_4cdyh_80",slideOut:bo,close:vo,cartItems:wo,cartItem:Co,extras:jo,extrasContent:Mo,slideIn:$o,item:Eo,remove:So,modalText:zo,overlay:No},Ao="_sidebar_19qxq_1",Io="_language_19qxq_28",ko="_sidebarContent_19qxq_54",Fo="_info_19qxq_79",To="_social_19qxq_91",Oo="_actions_19qxq_118",Lo="_workinghours_19qxq_141",Ro="_modal_19qxq_155",Bo="_modalContent_19qxq_167",ke={sidebar:Ao,language:Io,sidebarContent:ko,info:Fo,social:To,actions:Oo,workinghours:Lo,modal:Ro,modalContent:Bo},Po=({data:t,changeLanguage:e,language:s})=>{var u;const r=pe(),[n,i]=w.useState([]),[a,o]=w.useState(0),[l,d]=w.useState(!0),{name:h}=J();return w.useEffect(()=>{const p=setInterval(()=>{(n==null?void 0:n.length)>1&&(d(!1),setTimeout(()=>{o(f=>(f+1)%(n==null?void 0:n.length)),d(!0)},500))},5e3);return()=>clearInterval(p)},[n]),w.useEffect(()=>{var p;i((p=t==null?void 0:t.header_images)==null?void 0:p.slice(1))},[]),c.jsx("section",{className:ke.sidebar,style:{backgroundImage:`url(${(u=n==null?void 0:n[a])==null?void 0:u.image})`,backgroundSize:"cover",backgroundPosition:"center",opacity:l?1:.5,transition:"opacity 0.5s ease-in-out"},children:c.jsxs("div",{className:ke.sidebarContent,children:[c.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",onClick:()=>r(`/${h}`),style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#94d334"}`},alt:"restaurant image"}),c.jsx(O,{to:`/${h}`,children:t==null?void 0:t[`name_${s}`]}),c.jsxs("div",{className:ke.language,children:[c.jsx("button",{style:{backgroundColor:s=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>e("ar"),children:"العربية"}),c.jsx("button",{style:{backgroundColor:s=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>e("he"),children:"עברית"})]})]})})},qo="_footer_8o0ng_1",Do="_social_8o0ng_10",Vo="_copy_8o0ng_37",Fe={footer:qo,social:Do,copy:Vo},Xo=({data:t,language:e})=>{var s;return c.jsxs("section",{className:Fe.footer,children:[c.jsx("div",{className:Fe.social,children:(s=t==null?void 0:t.social_media_links)==null?void 0:s.map(r=>c.jsxs(O,{to:(r==null?void 0:r.platform)=="phone_number"?`tel:${r==null?void 0:r.url}`:r==null?void 0:r.url,onMouseEnter:n=>n.target.style.backgroundColor=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#94d334",onMouseLeave:n=>n.target.style.backgroundColor="transparent",target:"_blank",children:[(r==null?void 0:r.platform)=="facebook"&&c.jsx(me,{}),(r==null?void 0:r.platform)=="youtube"&&c.jsx(_e,{}),(r==null?void 0:r.platform)=="tiktok"&&c.jsx(xe,{}),(r==null?void 0:r.platform)=="pinterest"&&c.jsx(ye,{}),(r==null?void 0:r.platform)=="instagram"&&c.jsx(be,{}),(r==null?void 0:r.platform)=="phone_number"&&c.jsx(Q,{}),!(r!=null&&r.platform)&&c.jsx(Ye,{})]},r==null?void 0:r.id))}),c.jsxs("div",{className:Fe.copy,children:[c.jsxs("p",{children:[B("rights",e)," © ",ne]}),c.jsx(O,{to:"/",children:"MyStore."}),c.jsxs("p",{children:[B("allRights",e),"."]})]})]})},Yo="_container_k6ibo_1",Uo="_sectionOne_k6ibo_9",Ho="_sectionHeader_k6ibo_15",Wo="_items_k6ibo_33",Go="_item_k6ibo_33",Zo="_copy_k6ibo_86",Qo="_cartmodal_k6ibo_145",Ko="_modalContent_k6ibo_148",Jo="_cartItems_k6ibo_148",ea="_cartItem_k6ibo_148",ta="_extras_k6ibo_156",sa="_extrasContent_k6ibo_159",ra="_remove_k6ibo_165",na="_modalText_k6ibo_168",ia="_modal_k6ibo_148",oa="_slideIn_k6ibo_1",aa="_slideOut_k6ibo_1",la="_fadeIn_k6ibo_1",te={container:Yo,sectionOne:Uo,sectionHeader:Ho,items:Wo,item:Go,copy:Zo,cartmodal:Qo,modalContent:Ko,cartItems:Jo,cartItem:ea,extras:ta,extrasContent:sa,remove:ra,modalText:na,modal:ia,slideIn:oa,slideOut:aa,fadeIn:la},ca=({data:t,categories:e,language:s})=>{const r=pe();return c.jsx("section",{className:te.container,children:c.jsxs("div",{className:te.sectionOne,children:[c.jsx("div",{className:te.sectionHeader,children:c.jsx("h3",{children:B("categories",s)})}),c.jsx("div",{className:te.items,children:e&&(e==null?void 0:e.map((n,i)=>{if(n!=null&&n.is_active)return c.jsx(We,{cascade:!0,damping:.1,style:{width:"100%",height:"100%"},children:c.jsxs("div",{onClick:()=>{r(`details/${n==null?void 0:n.id}`)},className:te.item,children:[c.jsx("img",{src:(n==null?void 0:n.image)||Ue,alt:i+1}),c.jsx("p",{children:n==null?void 0:n[`name_${s}`]})]})},n==null?void 0:n.id)}))})]})})},ha="_container_xtg5v_1",fa="_itemsContainer_xtg5v_9",da="_sectionHeader_xtg5v_14",ua="_items_xtg5v_9",pa="_category_xtg5v_63",ga="_item_xtg5v_9",ma="_icons_xtg5v_122",_a="_notActive_xtg5v_152",xa="_notAct_xtg5v_152",ya="_modal_xtg5v_177",ba="_fadeIn_xtg5v_1",va="_modalContent_xtg5v_193",wa="_slideOut_xtg5v_1",Ca="_close_xtg5v_209",ja="_modalText_xtg5v_233",Ma="_tags_xtg5v_243",$a="_tag_xtg5v_243",Ea="_extras_xtg5v_264",Sa="_extrasContent_xtg5v_278",za="_slideIn_xtg5v_1",ae={container:ha,itemsContainer:fa,sectionHeader:da,items:ua,category:pa,item:ga,icons:ma,notActive:_a,notAct:xa,modal:ya,fadeIn:ba,modalContent:va,"slide-out":"_slide-out_xtg5v_206",slideOut:wa,close:Ca,modalText:ja,tags:Ma,tag:$a,extras:Ea,extrasContent:Sa,slideIn:za},Na=({data:t,language:e})=>{const s=de(),{name:r,id:n}=J(),{categoryLoading:i}=qe(f=>f.main),[a,o]=w.useState(null),[l,d]=w.useState([]),h=w.useRef(null),u=()=>{if(h.current){const g=h.current.scrollLeft-600;h.current.scrollTo({left:g,behavior:"smooth"})}},p=()=>{if(h.current){const g=h.current.scrollLeft+600;h.current.scrollTo({left:g,behavior:"smooth"})}};return w.useEffect(()=>{s(Mt(n)).then(f=>{var g;o(f==null?void 0:f.payload),d((g=f==null?void 0:f.payload)==null?void 0:g.products)})},[n]),i?c.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#000"},children:c.jsx(De,{size:"1.5rem",style:{color:"#fff"}})}):c.jsx("section",{className:ae.container,children:c.jsxs("div",{className:ae.itemsContainer,children:[c.jsxs("div",{className:ae.sectionHeader,children:[c.jsxs(O,{to:`/${t==null?void 0:t.slug}`,style:{color:t==null?void 0:t.primary_color},children:["  ",c.jsx(os,{})," ",B("back",e)]}),c.jsx("h3",{children:a==null?void 0:a[`name_${e}`]})]}),c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:ae.items,ref:h,children:l==null?void 0:l.map((f,g)=>c.jsx(ge,{data:f,color:t==null?void 0:t.primary_color,to:`/${r}/product/${f==null?void 0:f.id}`},f==null?void 0:f.id))}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] text-white border-0  hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-1/2",onClick:u,children:c.jsx(we,{})}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px]  text-white border-0  hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-1/2",onClick:p,children:c.jsx(Ce,{})})]})]})})},Aa=({data:t,categories:e})=>{var a,o;const s=Z(),{language:r,changeLanguage:n}=K(),{pathname:i}=Z();return w.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),c.jsx(ue,{children:c.jsxs("main",{className:[wt.main,!(i!=null&&i.includes("product"))&&wt.overlay].filter(Boolean).join(" "),style:{backgroundImage:!(i!=null&&i.includes("product"))&&`url(${(o=(a=t==null?void 0:t.header_images)==null?void 0:a[0])==null?void 0:o.image})`},children:[(t==null?void 0:t.contact_number)&&c.jsx(O,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"whatsbtn !border-[#26CC64] !bg-[#26CC64] !text-white hover:!bg-white hover:!text-[#26CC64]",children:c.jsx(ve,{})}),!(i!=null&&i.includes("product"))&&c.jsx(Po,{data:t,changeLanguage:n,language:r}),i!=null&&i.includes("details")?c.jsx(Na,{data:t,language:r}):i!=null&&i.includes("product")?c.jsx(je,{themeColor:t,multi:!0}):c.jsx(ca,{data:t,language:r,categories:e}),c.jsx(Xo,{data:t,language:r})]})})},Ia="_main_3o6uh_1",ka="_pages_3o6uh_4",Fa="_bottomNav_3o6uh_11",Ta="_copy_3o6uh_14",Oa="_modal_3o6uh_48",La="_cart_3o6uh_51",Ra="_cartmodal_3o6uh_54",Ba="_modalContent_3o6uh_57",Pa="_cartItems_3o6uh_57",qa="_cartItem_3o6uh_57",Da="_extras_3o6uh_65",Va="_extrasContent_3o6uh_68",Xa="_item_3o6uh_68",Ya="_remove_3o6uh_74",Ua="_modalText_3o6uh_77",Te={main:Ia,pages:ka,bottomNav:Fa,copy:Ta,modal:Oa,cart:La,cartmodal:Ra,modalContent:Ba,cartItems:Pa,cartItem:qa,extras:Da,extrasContent:Va,item:Xa,remove:Ya,modalText:Ua},Ha="_container_1vz1g_1",Wa="_sectionOne_1vz1g_10",Ga="_sectionHeader_1vz1g_15",Za="_items_1vz1g_31",Qa="_item_1vz1g_31",Ka="_copy_1vz1g_79",G={container:Ha,sectionOne:Wa,sectionHeader:Ga,items:Za,item:Qa,copy:Ka},Ja=({data:t,language:e,categories:s})=>{const r=pe();return c.jsxs("section",{className:G.container,children:[c.jsxs("div",{className:G.sectionOne,children:[c.jsx("div",{className:G.sectionHeader,children:c.jsx("h3",{children:B("categories",e)})}),c.jsx("div",{className:G.items,children:s==null?void 0:s.map((n,i)=>{if(n!=null&&n.is_active)return c.jsx(We,{cascade:!0,damping:.1,children:c.jsxs("div",{onClick:()=>r(`details/${n==null?void 0:n.id}`),className:G.item,style:{borderColor:t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC"},children:[c.jsx("img",{src:(n==null?void 0:n.image)||Ue,alt:i+1}),c.jsx("p",{children:n==null?void 0:n[`name_${e}`]})]})},n==null?void 0:n.id)})})]}),c.jsxs("div",{className:G.copy,children:[c.jsxs("p",{children:[B("rights",e)," © ",ne]}),c.jsx(O,{to:"/",children:"MyStore."}),c.jsxs("p",{children:[B("allRights",e),"."]})]})]})};function Ct(t){return Xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"},child:[]}]})(t)}const el="_container_ahqun_1",tl="_sectionHeader_ahqun_8",sl="_cards_ahqun_31",rl="_copy_ahqun_41",le={container:el,sectionHeader:tl,cards:sl,copy:rl},nl=({data:t,language:e})=>{const s=de(),{name:r,id:n}=J(),{categoryLoading:i}=qe(f=>f.main),[a,o]=w.useState(null),[l,d]=w.useState([]),h=w.useRef(null),u=()=>{if(h.current){const g=h.current.scrollLeft-600;h.current.scrollTo({left:g,behavior:"smooth"})}},p=()=>{if(h.current){const g=h.current.scrollLeft+600;h.current.scrollTo({left:g,behavior:"smooth"})}};return w.useEffect(()=>{s(Mt(n)).then(f=>{var g;o(f==null?void 0:f.payload),d((g=f==null?void 0:f.payload)==null?void 0:g.products)})},[n]),i?c.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#000",backgroundSize:"cover",backgroundPosition:"center"},children:c.jsx(De,{size:"1.5rem",style:{color:"#fff"}})}):c.jsxs("section",{className:le.container,children:[c.jsxs("div",{className:le.sectionHeader,children:[c.jsxs(O,{to:`/${t==null?void 0:t.slug}`,children:["  ",c.jsx(as,{})," ",B("back",e)]}),c.jsx("h3",{children:a==null?void 0:a[`name_${e}`]})]}),(l==null?void 0:l.length)>0&&c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:le.cards,ref:h,children:l==null?void 0:l.map(f=>c.jsx(ge,{data:f,color:t==null?void 0:t.primary_color,style:{width:"100%"},to:`/${r}/product/${f==null?void 0:f.id}`},f==null?void 0:f.id))}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] text-white border-0 hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-1/2",onClick:u,children:c.jsx(we,{})}),c.jsx("button",{style:{backgroundColor:t==null?void 0:t.primary_color},className:"cursor-pointer z-40 w-[40px] h-[40px] text-white border-0 hover:scale-110  transition rounded-[50%] hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-1/2",onClick:p,children:c.jsx(Ce,{})})]}),c.jsxs("div",{className:le.copy,children:[c.jsxs("p",{children:[B("rights",e)," © ",ne]}),c.jsx(O,{to:"/",children:"MyStore."}),c.jsxs("p",{children:[B("allRights",e),"."]})]})]})},il="_sidebar_mbqg4_1",ol="_sideHeader_mbqg4_27",al="_language_mbqg4_33",ll="_sidebarContent_mbqg4_59",cl="_info_mbqg4_80",hl="_social_mbqg4_92",fl="_actions_mbqg4_119",dl="_workinghours_mbqg4_142",ul="_slider_mbqg4_170",ce={sidebar:il,sideHeader:ol,language:al,sidebarContent:ll,info:cl,social:hl,actions:fl,workinghours:dl,slider:ul},pl=({data:t,language:e,changeLanguage:s})=>{var o,l,d;const[r,n]=w.useState(0),[i,a]=w.useState(!0);return w.useEffect(()=>{const h=setInterval(()=>{a(!1),setTimeout(()=>{n(u=>{var p;return(u+1)%((p=t==null?void 0:t.header_images)==null?void 0:p.length)}),a(!0)},500)},5e3);return()=>clearInterval(h)},[t==null?void 0:t.header_images]),c.jsx("section",{className:ce.sidebar,style:{backgroundImage:`url(${(l=(o=t==null?void 0:t.header_images)==null?void 0:o[r])==null?void 0:l.image})`,backgroundSize:"cover",backgroundColor:"#000",backgroundPosition:"center",filter:i?"brightness(1)":"brightness(0.8)",transition:"filter 0.5s ease-in-out"},children:c.jsxs("div",{className:ce.sidebarContent,children:[c.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:"https://via.placeholder.com/150",style:{border:`5px solid ${t!=null&&t.border_color?t==null?void 0:t.border_color:"#B57EDC"}`},alt:"restaurant image"}),c.jsx("h3",{children:t==null?void 0:t[`name_${e}`]}),c.jsxs("div",{className:ce.language,children:[c.jsx("button",{style:{backgroundColor:e=="ar"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("ar"),children:"العربية"}),c.jsx("button",{style:{backgroundColor:e=="he"&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:""},onClick:()=>s("he"),children:"עברית"})]}),c.jsx("div",{className:ce.social,children:(d=t==null?void 0:t.social_media_links)==null?void 0:d.map(h=>c.jsxs(O,{to:(h==null?void 0:h.platform)=="phone_number_1"?`tel:${h==null?void 0:h.url}`:h==null?void 0:h.url,onMouseEnter:u=>u.target.style.backgroundColor=t!=null&&t.primary_color?t==null?void 0:t.primary_color:"#B57EDC",onMouseLeave:u=>u.target.style.backgroundColor="transparent",target:"_blank",children:[(h==null?void 0:h.platform)=="facebook"&&c.jsx(me,{}),(h==null?void 0:h.platform)=="youtube"&&c.jsx(_e,{}),(h==null?void 0:h.platform)=="tiktok"&&c.jsx(xe,{}),(h==null?void 0:h.platform)=="pinterest"&&c.jsx(ye,{}),(h==null?void 0:h.platform)=="instagram"&&c.jsx(be,{}),(h==null?void 0:h.platform)=="phone_number_1"&&c.jsx(Q,{}),(h==null?void 0:h.platform)=="phone_number_2"&&c.jsx(Q,{}),!(h!=null&&h.platform)&&c.jsx(Ye,{})]},h==null?void 0:h.id))})]})})},gl=({data:t,categories:e})=>{const s=Z(),[r,n]=w.useState(!1),[i,a]=w.useState(!1),o=pe(),{language:l,changeLanguage:d}=K(),[h,u]=w.useState(0),p=Z().pathname,{name:f}=J();return w.useEffect(()=>{(()=>{window.scrollTo(0,0)})()},[s]),c.jsx(ue,{children:c.jsxs("main",{className:Te.main,children:[(t==null?void 0:t.contact_number)&&c.jsx(O,{to:`https://wa.me/${t==null?void 0:t.contact_number}`,target:"_blank",className:"whatsbtn !border-[#26CC64] !bg-[#26CC64] !text-white hover:!bg-white hover:!text-[#26CC64]",children:c.jsx(ve,{})}),!(p!=null&&p.includes("product"))&&c.jsx(pl,{data:t,setShowModal:n,changeLanguage:d,language:l,showModal:r}),c.jsx("div",{className:Te.pages,style:{width:(p==null?void 0:p.includes("product"))&&"100%"},children:p!=null&&p.includes("details")?c.jsx(nl,{language:l,data:t}):p!=null&&p.includes("product")?c.jsx(je,{themeColor:t,multi:!0}):c.jsx(Ja,{data:t,categories:e,language:l,showCartModal:i,setShowCartModal:a})}),c.jsxs("div",{className:Te.bottomNav,children:[c.jsxs("button",{style:{color:h===1&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{u(1),o(`/${f}`)},children:[c.jsx(ls,{}),B("home",l)]}),l=="ar"&&c.jsxs("button",{style:{color:h===2&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{d("he"),u(2)},children:[c.jsx(Ct,{}),"العربية"]}),l=="he"&&c.jsxs("button",{style:{color:h===2&&(t!=null&&t.primary_color)?t==null?void 0:t.primary_color:"#000"},onClick:()=>{d("ar"),u(2)},children:[c.jsx(Ct,{}),"עברית"]})]})]})})},bl=()=>{const t=de(),[e,s]=w.useState(null),[r,n]=w.useState(null),{name:i}=J(),{mainDataByIdLoading:a,mainDataByIdError:o}=qe(l=>l.main);return w.useEffect(()=>{t(Qt(i)).then(l=>{s(l.payload)}),t(Kt(i)).then(l=>{var d;n((d=l==null?void 0:l.payload)==null?void 0:d.results)})},[]),a?c.jsx("div",{style:{position:"fixed",right:0,top:0,zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#fff"},children:c.jsx(De,{size:"1.5rem",style:{color:"#000"}})}):(o==null?void 0:o.detail)=="No Restaurant matches the given query."?c.jsx("div",{style:{position:"fixed",left:0,top:0,zIndex:999,display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#fff"},children:c.jsxs("div",{className:"errorContainer",children:[c.jsx("img",{src:Jt,alt:"Sorry, The page not found"}),c.jsx("h4",{children:"عفوا هذة الصفحة غير متاحة"}),c.jsx("p",{children:"ربما يكون الرابط الذي اتبعته معطلاً أو تمت إزالة الصفحة"}),c.jsx(O,{to:"/",children:"العودة للرئيسية"})]})}):c.jsxs(c.Fragment,{children:[(e==null?void 0:e.theme)===1&&c.jsx(Ln,{data:e,categories:r}),(e==null?void 0:e.theme)===2&&c.jsx(uo,{data:e,categories:r}),(e==null?void 0:e.theme)===3&&c.jsx(Aa,{data:e,categories:r}),(e==null?void 0:e.theme)===4&&c.jsx(gl,{data:e,categories:r})]})};export{bl as default};
