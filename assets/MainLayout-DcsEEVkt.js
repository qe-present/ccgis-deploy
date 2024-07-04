import{Q as re,a as M}from"./QBar-CaJn7pH0.js";import{c as O,a as d,h,b as ne,g as j,i as oe,e as B,r as p,w as C,o as se,d as ue,l as N,p as ae,f as ce,j as de,k as F,m as P,n as fe,q as ve,_ as le,s as L,t as H,u as s,v as a,Q as I,x as ie,y as V,z as W,A as me,B as G,C as U,D as K,E as ge,F as z,G as J,H as X,I as Y,J as he,K as pe}from"./index-RCC37x8F.js";import{Q as $}from"./QTooltip-hYDl2XSt.js";import{Q as D,a as _e,b as ye}from"./QScrollObserver-CTCM-Wzq.js";import{Q as Z,a as be,b as we}from"./QItem-CHxoOo8e.js";import{Q as ee}from"./QItemLabel-BVUPbCED.js";import{u as te}from"./use-quasar-DxV-M5Nk.js";import"./position-engine-gt-lz_9m.js";import"./selection-BkGT1DNw.js";import"./TouchPan-CgF6jMNk.js";const Se=O({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:i}){const c=d(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:c.value,role:"toolbar"},ne(i.default))}}),ke=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:i,emit:c}){const{proxy:{$q:e}}=j(),o=oe(N,B);if(o===B)return console.error("QHeader needs to be child of QLayout"),B;const r=p(parseInt(t.heightHint,10)),f=p(!0),u=d(()=>t.reveal===!0||o.view.value.indexOf("H")!==-1||e.platform.is.ios&&o.isContainer.value===!0),b=d(()=>{if(t.modelValue!==!0)return 0;if(u.value===!0)return f.value===!0?r.value:0;const n=r.value-o.scroll.value.position;return n>0?n:0}),v=d(()=>t.modelValue!==!0||u.value===!0&&f.value!==!0),Q=d(()=>t.modelValue===!0&&v.value===!0&&t.reveal===!0),x=d(()=>"q-header q-layout__section--marginal "+(u.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),R=d(()=>{const n=o.rows.value.top,_={};return n[0]==="l"&&o.left.space===!0&&(_[e.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(_[e.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),_});function m(n,_){o.update("header",n,_)}function w(n,_){n.value!==_&&(n.value=_)}function E({height:n}){w(r,n),m("size",n)}function q(n){Q.value===!0&&w(f,!0),c("focusin",n)}C(()=>t.modelValue,n=>{m("space",n),w(f,!0),o.animate()}),C(b,n=>{m("offset",n)}),C(()=>t.reveal,n=>{n===!1&&w(f,t.modelValue)}),C(f,n=>{o.animate(),c("reveal",n)}),C(o.scroll,n=>{t.reveal===!0&&w(f,n.direction==="up"||n.position<=t.revealOffset||n.position-n.inflectionPoint<100)});const S={};return o.instances.header=S,t.modelValue===!0&&m("size",r.value),m("space",t.modelValue),m("offset",b.value),se(()=>{o.instances.header===S&&(o.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const n=ue(i.default,[]);return t.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(D,{debounce:0,onResize:E})),h("header",{class:x.value,style:R.value,onFocusin:q},n)}}}),Le=O({name:"QPageContainer",setup(t,{slots:i}){const{proxy:{$q:c}}=j(),e=oe(N,B);if(e===B)return console.error("QPageContainer needs to be child of QLayout"),B;ae(ce,!0);const o=d(()=>{const r={};return e.header.space===!0&&(r.paddingTop=`${e.header.size}px`),e.right.space===!0&&(r[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(r.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(r[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:o.value},ne(i.default))}}),Qe=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:i,emit:c}){const{proxy:{$q:e}}=j(),o=p(null),r=p(e.screen.height),f=p(t.container===!0?0:e.screen.width),u=p({position:0,direction:"down",inflectionPoint:0}),b=p(0),v=p(de.value===!0?0:F()),Q=d(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),x=d(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),R=d(()=>v.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),m=d(()=>v.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function w(l){if(t.container===!0||document.qScrollPrevented!==!0){const g={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};u.value=g,t.onScroll!==void 0&&c("scroll",g)}}function E(l){const{height:g,width:k}=l;let y=!1;r.value!==g&&(y=!0,r.value=g,t.onScrollHeight!==void 0&&c("scrollHeight",g),S()),f.value!==k&&(y=!0,f.value=k),y===!0&&t.onResize!==void 0&&c("resize",l)}function q({height:l}){b.value!==l&&(b.value=l,S())}function S(){if(t.container===!0){const l=r.value>b.value?F():0;v.value!==l&&(v.value=l)}}let n=null;const _={instances:{},view:d(()=>t.view),isContainer:d(()=>t.container),rootRef:o,height:r,containerHeight:b,scrollbarWidth:v,totalWidth:d(()=>f.value+v.value),rows:d(()=>{const l=t.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:u,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,g,k){_[l][g]=k}};if(ae(N,_),F()>0){let l=function(){y=null,T.classList.remove("hide-scrollbar")},g=function(){if(y===null){if(T.scrollHeight>e.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(l,300)},k=function(A){y!==null&&A==="remove"&&(clearTimeout(y),l()),window[`${A}EventListener`]("resize",g)},y=null;const T=document.body;C(()=>t.container!==!0?"add":"remove",k),t.container!==!0&&k("add"),fe(()=>{k("remove")})}return()=>{const l=ve(i.default,[h(_e,{onScroll:w}),h(D,{onResize:E})]),g=h("div",{class:Q.value,style:x.value,ref:t.container===!0?void 0:o,tabindex:-1},l);return t.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(D,{onResize:q}),h("div",{class:"absolute-full",style:R.value},[h("div",{class:"scroll",style:m.value},[g])])]):g}}}),ze=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(t,{expose:i}){i();const e={props:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function xe(t,i,c,e,o,r){return L(),H(be,{clickable:"",to:e.props.link,class:"essential-link"},{default:s(()=>[e.props.icon?(L(),H(Z,{key:0,avatar:""},{default:s(()=>[a(I,{name:e.props.icon},null,8,["name"])]),_:1})):ie("",!0),a(Z,null,{default:s(()=>[a(ee,{class:"title"},{default:s(()=>[V(W(e.props.title),1)]),_:1}),a(ee,{class:"caption",caption:""},{default:s(()=>[V(W(e.props.caption),1)]),_:1}),a(me)]),_:1})]),_:1},8,["to"])}const qe=le(ze,[["render",xe],["__scopeId","data-v-af5d749f"],["__file","EssentialLink.vue"]]),Ce=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(t,{expose:i}){i();const c=G(),e=te(),o=U();let r=p(!1);K(()=>{});const f=()=>{window.open("https://gitee.com/its-hard-to-be-distracted/ccgis")},u=()=>{o.logout(),c.push({path:"/login"})},b=()=>{e.dark.toggle()},v=[{title:"地图量算",icon:"straighten",link:"MapCal"},{title:"查询服务",icon:"search",link:"query"},{title:"公交规划",icon:"directions_bus",link:"transportation"},{title:"旅游景点",icon:"place",link:"travel"},{title:"救援帮助",icon:"local_hospital",link:"rescue"},{title:"天气预报",icon:"wb_sunny",link:"weather"},{title:"配置管理",icon:"settings",link:"setting"},{title:"关于",icon:"info",link:"about"}],Q=p(!1);let x=p(!0);function R(){Q.value=!Q.value}function m(){}function w(){}function E(){}const q={router:c,$q:e,loginStore:o,get isElectron(){return r},set isElectron(S){r=S},goGit:f,handleLogout:u,toggleTheme:b,linksList:v,leftDrawerOpen:Q,get miniState(){return x},set miniState(S){x=S},toggleLeftDrawer:R,minimize:m,toggleMaximize:w,closeApp:E,ref:p,watchEffect:K,get useLoginStore(){return U},EssentialLink:qe,get useQuasar(){return te},get useRouter(){return G}};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}}),He=he("div",null,"CCGIS--长春市公共信息服务平台",-1);function Ve(t,i,c,e,o,r){const f=ge("router-view");return L(),H(Qe,{view:"lHh Lpr lFf"},{default:s(()=>[a(ke,{elevated:""},{default:s(()=>[e.isElectron?(L(),H(re,{key:0,class:"q-electron-drag"},{default:s(()=>[He,a(M),a(z,{dense:"",flat:"",icon:"minimize",onClick:e.minimize}),a(z,{dense:"",flat:"",icon:"crop_square",onClick:e.toggleMaximize}),a(z,{dense:"",flat:"",icon:"close",onClick:e.closeApp})]),_:1})):ie("",!0),a(Se,null,{default:s(()=>[a(z,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer}),(L(),J(Y,null,X(10,u=>a(M,{key:u})),64)),a(z,{onClick:i[0]||(i[0]=u=>e.$q.fullscreen.toggle()),icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},{default:s(()=>[e.$q.fullscreen.isActive?(L(),H($,{key:0,class:"bg-accent"},{default:s(()=>[V("退出全屏")]),_:1})):(L(),H($,{key:1,class:"bg-accent"},{default:s(()=>[V("全屏")]),_:1}))]),_:1},8,["icon"]),a(M),a(z,{onClick:e.goGit},{default:s(()=>[a(I,{name:"mdi-git"}),a($,{class:"bg-accent"},{default:s(()=>[V("git仓库")]),_:1})]),_:1}),a(z,{onClick:e.handleLogout},{default:s(()=>[a(I,{name:"logout"}),a($,{class:"bg-accent"},{default:s(()=>[V("退出登录")]),_:1})]),_:1})]),_:1})]),_:1}),a(ye,{mini:e.miniState,onMouseover:i[1]||(i[1]=u=>e.miniState=!1),onMouseout:i[2]||(i[2]=u=>e.miniState=!0),modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[3]||(i[3]=u=>e.leftDrawerOpen=u),"show-if-above":"",bordered:"",class:"bg-blue-4 text-black"},{default:s(()=>[a(we,null,{default:s(()=>[(L(),J(Y,null,X(e.linksList,u=>a(e.EssentialLink,pe({key:u.title,ref_for:!0},u),null,16)),64))]),_:1})]),_:1},8,["mini","modelValue"]),a(Le,null,{default:s(()=>[a(f)]),_:1})]),_:1})}const De=le(Ce,[["render",Ve],["__file","MainLayout.vue"]]);export{De as default};
