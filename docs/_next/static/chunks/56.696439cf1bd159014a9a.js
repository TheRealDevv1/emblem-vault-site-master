(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{"6tc4":function(e,t,n){"use strict";var r=n("lSNA"),a=n.n(r),o=n("5D9J"),i=n("OJSm"),c=n("BMxC"),l=n("QdyT");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(o.a)(c.a)((function(e){var t,n=e.type,r=void 0===n?"checkbox":n,o=e._hover,c=e._invalid,d=e._disabled,s=e._focus,b=e._checked,f=e._child,h=void 0===f?{opacity:0}:f,p=e._checkedAndChild,m=void 0===p?{opacity:1}:p,O=e._checkedAndDisabled,v=e._checkedAndFocus,y=e._checkedAndHover,j="input[type="+r+"]:checked:disabled + &, input[type="+r+"][aria-checked=mixed]:disabled + &",g="input[type="+r+"]:checked:hover:not(:disabled) + &, input[type="+r+"][aria-checked=mixed]:hover:not(:disabled) + &",k="input[type="+r+"]:checked:focus + &, input[type="+r+"][aria-checked=mixed]:focus + &",w="input[type="+r+"]:disabled + &",x="input[type="+r+"]:focus + &",C="input[type="+r+"]:hover:not(:disabled):not(:checked) + &",P="input[type="+r+"]:checked + &, input[type="+r+"][aria-checked=mixed] + &",D="input[type="+r+"][aria-invalid=true] + &";return Object(i.a)(((t={})[x]=Object(l.b)(s),t[C]=Object(l.b)(o),t[w]=Object(l.b)(d),t[D]=Object(l.b)(c),t[j]=Object(l.b)(O),t[k]=Object(l.b)(v),t[g]=Object(l.b)(y),t["& > *"]=Object(l.b)(h),t[P]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(l.b)(b),{"& > *":Object(l.b)(m)}),t))}));d.displayName="ControlBox",d.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"},t.a=d},KLAn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return oe}));var r=n("rePB"),a=n("ODXe"),o=n("q1tI"),i=n.n(o),c=n("nOHt"),l=n("Z6YE"),u=n("QmWs"),d=n("mf32"),s=n("IDkF"),b=n("sK1y"),f=n("Yn+B"),h=n("pVnL"),p=n.n(h),m=n("8OQS"),O=n.n(m),v=n("qKvR"),y=n("BMxC"),j=n("6tc4"),g=n("+Z5E"),k={sm:{width:"1.375rem",height:"0.75rem"},md:{width:"1.875rem",height:"1rem"},lg:{width:"2.875rem",height:"1.5rem"}},w=Object(o.forwardRef)((function(e,t){var n=e.id,r=e.name,a=e.value,o=e["aria-label"],i=e["aria-labelledby"],c=e.color,l=e.defaultIsChecked,u=e.isChecked,s=e.size,b=e.isDisabled,f=e.isInvalid,h=e.onChange,m=e.onBlur,w=e.onFocus,x=(e.children,O()(e,["id","name","value","aria-label","aria-labelledby","color","defaultIsChecked","isChecked","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"])),C=Object(d.c)().colorMode,P=k[s]&&k[s].width,D=k[s]&&k[s].height,S={rounded:"full",justifyContent:"flex-start",width:P,height:D,bg:"dark"===C?"whiteAlpha.400":"gray.300",boxSizing:"content-box",p:"2px",_checked:{bg:c+".500"},_child:{transform:"translateX(0)"},_checkedAndChild:{transform:"translateX(calc("+P+" - "+D+"))"},_focus:{boxShadow:"outline"},_hover:{cursor:"pointer"},_checkedAndHover:{cursor:"pointer"},_disabled:{opacity:.4,cursor:"not-allowed"}};return Object(v.d)(y.a,p()({as:"label",display:"inline-block",verticalAlign:"middle"},x),Object(v.d)(g.a,{as:"input",type:"checkbox","aria-label":o,"aria-labelledby":i,id:n,ref:t,name:r,value:a,"aria-invalid":f,defaultChecked:l,onChange:h,onBlur:m,onFocus:w,checked:u,disabled:b}),Object(v.d)(j.a,S,Object(v.d)(y.a,{bg:"white",transition:"transform 250ms",rounded:"full",size:D})))}));w.displayName="Switch",w.defaultProps={color:"blue",size:"md"};var x=w,C=n("lSNA"),P=n.n(C),D=n("CjxU");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={position:"absolute",top:"50%",transform:"translateY(-50%)"},A=function(e){var t=e.thumbSize,n=e.trackPercent;e.theme;return _({},E,{zIndex:1,size:t,rounded:"full",bg:"#fff",boxShadow:"sm",left:"calc("+n+"% - "+t+" / 2)",border:"1px",borderColor:"transparent",transition:"transform 0.2s",_focus:{boxShadow:"outline"},_disabled:{backgroundColor:"gray.300"},_active:{transform:"translateY(-50%) scale(1.15)"}})},T=function(e){var t=e.trackHeight,n=e.trackPercent,r=e.color,a=e.colorMode;return _({},E,{height:t,bg:"light"===a?r+".500":r+".200",width:n+"%",rounded:"sm"})},z={light:{bg:"gray.200",_disabled:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_disabled:{bg:"whiteAlpha.300"}}},R=function(e){var t=e.trackHeight,n=(e.theme,e.colorMode);return _({height:t,borderRadius:"sm",width:"100%"},E,{},z[n])},I={width:"full",display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"}},B={lg:{thumb:"16px",trackHeight:"4px"},md:{thumb:"14px",trackHeight:"4px"},sm:{thumb:"10px",trackHeight:"2px"}},M=function(e){var t=Object(D.b)(),n=Object(d.c)().colorMode,r=e.trackPercent,a=e.size,o=e.color,i=B[a],c={trackHeight:i.trackHeight,thumbSize:i.thumb,theme:t,trackPercent:r,color:o,colorMode:n};return{rootStyle:I,trackStyle:R(c),filledTrackStyle:T(c),thumbStyle:A(c)}},H=n("+Cyc"),L=n("D7Da");function N(e,t){return function(e,t){var n=t.toString().split(".")[1],r=n?n.length:0;return Number(e.toFixed(r))}(Math.round(e/t)*t,t)}function F(e,t,n){return e>n?n:e<t?t:e}var U=Object(o.forwardRef)((function(e,t){var n=Q(),r=n.thumbRef,a=n.isDisabled,o=n.onFocus,i=n.onThumbKeyDown,c=n.min,l=n.max,u=n.valueText,d=n.orientation,s=n.trackPercent,b=n.size,f=n.color,h=n.value,m=n.ariaLabelledBy,O=M({trackPercent:s,orientation:d,size:b,color:f}).thumbStyle,y=Object(L.f)(r,t);return Object(v.d)(H.a,p()({"data-slider-thumb":"",d:"flex",alignItems:"center",outline:"none",justifyContent:"center",onFocus:o,ref:y,role:"slider",tabIndex:a?void 0:0,"aria-disabled":a,"aria-valuemin":c,"aria-valuetext":u,"aria-orientation":d,"aria-valuenow":h,"aria-valuemax":l,"aria-labelledby":m,onKeyDown:i},O,e))}));U.displayName="SliderThumb";var K=function(e){var t=Q(),n=t.trackRef,r=t.isDisabled,a=O()(t,["trackRef","isDisabled"]),o=M(a).trackStyle;return Object(v.d)(y.a,p()({"data-slider-track":"","aria-disabled":r,ref:n},o,e))},V=function(e){var t=Q(),n=t.isDisabled,r=O()(t,["isDisabled"]),a=M(r).filledTrackStyle;return Object(v.d)(H.a,p()({"aria-disabled":n,"data-slider-filled-track":""},a,e))},J=Object(o.createContext)(),Q=function(){return Object(o.useContext)(J)},X=Object(o.forwardRef)((function(e,t){var n=e.value,r=e.defaultValue,a=e.onChange,i=e.onKeyDown,c=e.onFocus,l=e.onBlur,u=e.onMouseDown,d=e.isDisabled,s=e.max,b=void 0===s?100:s,f=e.min,h=void 0===f?0:f,m=e.step,j=void 0===m?1:m,g=e["aria-labelledby"],k=(e["aria-label"],e["aria-valuetext"]),w=e.orientation,x=void 0===w?"horizontal":w,C=e.getAriaValueText,P=e.size,D=void 0===P?"md":P,S=e.color,_=void 0===S?"blue":S,E=e.name,A=e.id,T=e.children,z=O()(e,["value","defaultValue","onChange","onKeyDown","onFocus","onBlur","onMouseDown","isDisabled","max","min","step","aria-labelledby","aria-label","aria-valuetext","orientation","getAriaValueText","size","color","name","id","children"]),R=Object(o.useRef)(null!=n).current,I=Object(o.useState)(r||0),B=I[0],H=I[1],L=F(R?n:B,h,b),U=function(e,t,n){return 100*(e-t)/(n-t)}(L,h,b),K=M({trackPercent:U,orientation:x,size:D,color:_}).rootStyle,V=Object(o.useRef)(),Q=Object(o.useRef)(),X=function(e){if(V.current){var t=V.current.getBoundingClientRect(),n=t.left,r=t.width,a=function(e,t,n){return(n-t)*e+t}(((e.touches?e.touches[0]:e).clientX-n)/r,h,b);return j&&(a=N(a,j)),a=F(a,h,b)}},Y=Object(o.useCallback)((function(e){R||H(e),a&&a(e)}),[R,a]),q=function e(){document.body.removeEventListener("mousemove",Z),document.body.removeEventListener("touchmove",Z),document.body.removeEventListener("mouseup",e),document.body.removeEventListener("touchend",e)},Z=function(e){var t=X(e);Y(t)},G=function(e){if(!d){u&&u(e),e.preventDefault();var t=X(e);t!==L&&Y(t),document.body.addEventListener("mousemove",Z),document.body.addEventListener("touchmove",Z),document.body.addEventListener("mouseup",q),document.body.addEventListener("touchend",q),Q.current&&Q.current.focus()}},W=C?C(L):k,$={trackRef:V,thumbRef:Q,onThumbKeyDown:function(e){var t,n=!1,r=(b-h)/10;switch(e.key){case"ArrowLeft":case"ArrowDown":t=L-j,n=!0;break;case"ArrowRight":case"ArrowUp":t=L+j,n=!0;break;case"PageDown":t=L-r,n=!0;break;case"PageUp":t=L+r,n=!0;break;case"Home":t=h,n=!0;break;case"End":t=b,n=!0;break;default:return}n&&(e.preventDefault(),e.stopPropagation()),j&&(t=N(t,j)),t=F(t,h,b),Y(t),i&&i(e)},onFocus:c,trackPercent:U,ariaLabelledBy:g,orientation:x,isDisabled:d,size:D,color:_,min:h,max:b,valueText:W,value:L};return Object(v.d)(J.Provider,{value:$},Object(v.d)(y.a,p()({role:"presentation",tabIndex:"-1",onMouseDown:G,onTouchStart:G,onMouseLeave:q,onTouchEnd:q,onBlur:function(e){q(),l&&l(e)},py:3,"aria-disabled":d,ref:t,css:{touchAction:"none"}},K,z),T,Object(v.d)("input",{type:"hidden",value:L,name:E,id:A})))}));X.displayName="Slider";var Y=X,q=n("eJLp"),Z=n("pboS"),G=n("+QRC"),W=n.n(G),$=n("N39q"),ee=n("21eR"),te=n("zmG3"),ne=i.a.createElement;function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e){var t=e.isOpen,n=e.onClose,i=Object(l.b)().chainId,h=Object(d.c)(),p=h.colorMode,m=h.toggleColorMode,O=Object(c.useRouter)().pathname;Object(ee.a)("d",m);var v=Object(te.b)(),y=Object(a.a)(v,2),j=y[0],g=y[1],k=Object(te.c)(),w=Object(a.a)(k,2),C=w[0],P=w[1],D=Object(te.h)(),S=Object(a.a)(D,2),_=S[0],E=S[1],A=Object(te.d)(),T=Object(a.a)(A,1)[0],z=Object(te.f)(),R=Object(a.a)(z,1)[0],I=null;if("number"===typeof i&&(T||R)&&("/buy"===O||"/sell"===O)){var B=ae(Object(r.a)({},$.l.CHAIN,i),"/buy"===O?ae(ae({},T?Object(r.a)({},$.l.OUTPUT,T.address):{}),R?Object(r.a)({},$.l.INPUT,R.address):{}):ae(ae({},T?Object(r.a)({},$.l.INPUT,T.address):{}),R?Object(r.a)({},$.l.OUTPUT,R.address):{}));I=Object(u.resolve)("https://emblem.finance","".concat(O,"?").concat(Object.entries(B).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&")))}var M=Object(o.useState)(!1),H=M[0],L=M[1];return Object(o.useEffect)((function(){if(H){var e=setTimeout((function(){L(!1)}),750);return function(){clearTimeout(e)}}}),[H]),ne(s.a,{isOpen:t,onClose:n,isCentered:!0},ne(s.g,null),ne(s.d,{color:$.c[p]},ne(s.f,null,ne(b.a,null,"Settings (Build #2021)")),ne(s.c,null),ne(s.b,null,ne(f.a,{direction:"column"},ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Dark Mode"),ne(x,{isChecked:"dark"===p,onChange:m})),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Approve Max"),ne(x,{isChecked:j,onChange:g})),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Deadline"),ne(f.a,{direction:"column",spacing:0,alignItems:"flex-end",w:"50%",flexShrink:0},ne(Y,{min:60,max:3600,step:60,value:C,onChange:P},ne(K,null),ne(V,null),ne(U,null)),ne(f.a,{direction:"row",minHeight:"1.5rem"},C!==$.e&&ne(q.a,{size:"xs",onClick:function(){P($.e)}},"Reset"),ne(b.a,null,C/60," ",60===C?"minute":"minutes")))),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Slippage Tolerance"),ne(f.a,{direction:"column",spacing:0,alignItems:"flex-end",w:"50%",flexShrink:0},ne(Y,{min:0,max:400,step:10,value:_,onChange:E},ne(K,null),ne(V,null),ne(U,null)),ne(f.a,{direction:"row",minHeight:"1.5rem"},_!==$.f&&ne(q.a,{size:"xs",onClick:function(){E($.f)}},"Reset"),ne(b.a,null,(_/100).toFixed(0===_?0:1),"%")))))),ne(s.e,{justifyContent:"space-between"},"string"===typeof I&&ne(q.a,{variant:"link",isDisabled:H,color:"blue.500",width:"min-content",onClick:function(){try{window.navigator.share({title:"Emblem Vault",url:I}).catch((function(){}))}catch(t){e=I,W()(e),L(!0)}var e}},H?"Copied":"Share Permalink"),ne(Z.a,{href:"https://github.com/NoahZinsmeister/hypertext",target:"_blank",rel:"noopener noreferrer",color:"blue.500"},"Based on Hypertext."),ne(Z.a,{href:"https://github.com/EmblemCompany/emblem-vault-site/tree/".concat("master"),target:"_blank",rel:"noopener noreferrer",color:"blue.500"},null==="master"?void 0:"master".slice(0,7)))))}}}]);