import{Q as De,S as je,g as de,a as Fe}from"./SelectDialog-D9Bg6Q4N.js";import{b as Ge}from"./QScrollObserver-4Hyaoing.js";import{S as ge,G as ke}from"./GetMap-CFMm5uNq.js";import{a0 as Le,ah as ze,ai as le,aj as We,ak as Ye,al as ce,am as ve,ad as we,X as _e,an as he,g as Me,r as S,a as E,w as be,h as M,ao as He,ap as Je,b as xe,Y as Ke,aq as Xe,c as Re,S as Ze,T as $e,R as ye,o as et,ae as tt,aa as nt,F as Y,q as at,_ as X,D as H,s as b,t as q,u as f,v as i,Q as z,J as G,z as $,G as j,I as oe,H as pe,L as me,x as ne,O as ot,M as rt,a9 as st,P as lt,a1 as it,N as K,a8 as ae,a4 as ue,a5 as Ce,y as Oe}from"./index-BX1gk6uQ.js";import{a as ee,Q as N}from"./QItem-Bj_Zp03a.js";import{g as Pe,s as Be}from"./TouchPan-B05HjDex.js";import{c as ut}from"./selection-BUt0nbsB.js";import{u as dt,a as ct,c as ft,Q as mt,b as Te,m as Ie}from"./query-DNFNVghI.js";import{u as F}from"./use-quasar-BtES3uRM.js";import{u as Ee}from"./setting-store-DdLmlg3s.js";import{Q as Qe}from"./QTooltip-BL-yP9Mi.js";import{Q as Ue}from"./QSelect-hSG-XhKe.js";import"./ClosePopup-ip30SaEh.js";import"./position-engine-D_JJg83V.js";import"./QItemLabel-CcidLtO8.js";const U=Le("bus",{state:()=>({markerLayer:null,map:null,endLayer:null,startLayer:null,startSure:!1,endSure:!1,startName:null,endName:null,startLine:null,endLine:null}),getters:{getStartName(){return this.startName},getEndName(){return this.endName},getStartLine(){return this.startLine},getEndLine(){return this.endLine},getStartSure(){return this.startSure},getEndSure(){return this.endSure}},actions:{setStartLine(e){this.startLine=e},setEndLine(e){this.endLine=e},setStartSure(e){this.startSure=e},setEndSure(e){this.endSure=e},setMap(e){this.map=e},getMap(){return this.map},getMarkerLayer(){return this.markerLayer},setMarkerLayer(e){this.markerLayer=e},setEndLayer(e){this.endLayer=e},getEndLayer(){return this.endLayer},setStartLayer(e){this.startLayer=e},getStartLayer(){return this.startLayer},setStartName(e){this.startName=e},setEndName(e){this.endName=e}}});function gt(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,t)=>{const s=parseFloat(r);s&&(a[t]=s)}),a}const pt=ze({name:"touch-swipe",beforeMount(e,{value:a,arg:r,modifiers:t}){if(t.mouse!==!0&&le.has.touch!==!0)return;const s=t.mouseCapture===!0?"Capture":"",o={handler:a,sensitivity:gt(r),direction:Pe(t),noop:We,mouseStart(n){Be(n,o)&&Ye(n)&&(ce(o,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(n,!0))},touchStart(n){if(Be(n,o)){const l=n.target;ce(o,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),o.start(n)}},start(n,l){le.is.firefox===!0&&ve(e,!0);const m=we(n);o.event={x:m.left,y:m.top,time:Date.now(),mouse:l===!0,dir:!1}},move(n){if(o.event===void 0)return;if(o.event.dir!==!1){_e(n);return}const l=Date.now()-o.event.time;if(l===0)return;const m=we(n),v=m.left-o.event.x,g=Math.abs(v),_=m.top-o.event.y,c=Math.abs(_);if(o.event.mouse!==!0){if(g<o.sensitivity[1]&&c<o.sensitivity[1]){o.end(n);return}}else if(window.getSelection().toString()!==""){o.end(n);return}else if(g<o.sensitivity[2]&&c<o.sensitivity[2])return;const y=g/l,p=c/l;o.direction.vertical===!0&&g<c&&g<100&&p>o.sensitivity[0]&&(o.event.dir=_<0?"up":"down"),o.direction.horizontal===!0&&g>c&&c<100&&y>o.sensitivity[0]&&(o.event.dir=v<0?"left":"right"),o.direction.up===!0&&g<c&&_<0&&g<100&&p>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&g<c&&_>0&&g<100&&p>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&g>c&&v<0&&c<100&&y>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&g>c&&v>0&&c<100&&y>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(_e(n),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ut(),o.styleCleanup=x=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const d=()=>{document.body.classList.remove("no-pointer-events--children")};x===!0?setTimeout(d,50):d()}),o.handler({evt:n,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:l,distance:{x:g,y:c}})):o.end(n)},end(n){o.event!==void 0&&(he(o,"temp"),le.is.firefox===!0&&ve(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(!0),n!==void 0&&o.event.dir!==!1&&_e(n),o.event=void 0)}};if(e.__qtouchswipe=o,t.mouse===!0){const n=t.mouseCapture===!0||t.mousecapture===!0?"Capture":"";ce(o,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}le.has.touch===!0&&ce(o,"main",[[e,"touchstart","touchStart",`passive${t.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const r=e.__qtouchswipe;r!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&r.end(),r.handler=a.value),r.direction=Pe(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(he(a,"main"),he(a,"temp"),le.is.firefox===!0&&ve(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});function St(){let e=Object.create(null);return{getCache:(a,r)=>e[a]===void 0?e[a]=typeof r=="function"?r():r:e[a],setCache(a,r){e[a]=r},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const vt={name:{required:!0},disable:Boolean},qe={setup(e,{slots:a}){return()=>M("div",{class:"q-panel scroll",role:"tabpanel"},xe(a.default))}},_t={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ht=["update:modelValue","beforeTransition","transition"];function bt(){const{props:e,emit:a,proxy:r}=Me(),{getCache:t}=St();let s,o;const n=S(null),l=S(null);function m(u){const w=e.vertical===!0?"up":"left";T((r.$q.lang.rtl===!0?-1:1)*(u.direction===w?1:-1))}const v=E(()=>[[pt,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=E(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),_=E(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),c=E(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=E(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),p=E(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),x=E(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);be(()=>e.modelValue,(u,w)=>{const Q=B(u)===!0?I(u):-1;o!==!0&&O(Q===-1?0:Q<I(w)?-1:1),n.value!==Q&&(n.value=Q,a("beforeTransition",u,w),Ke(()=>{a("transition",u,w)}))});function d(){T(1)}function h(){T(-1)}function V(u){a("update:modelValue",u)}function B(u){return u!=null&&u!==""}function I(u){return s.findIndex(w=>w.props.name===u&&w.props.disable!==""&&w.props.disable!==!0)}function k(){return s.filter(u=>u.props.disable!==""&&u.props.disable!==!0)}function O(u){const w=u!==0&&e.animated===!0&&n.value!==-1?"q-transition--"+(u===-1?g.value:_.value):null;l.value!==w&&(l.value=w)}function T(u,w=n.value){let Q=w+u;for(;Q!==-1&&Q<s.length;){const W=s[Q];if(W!==void 0&&W.props.disable!==""&&W.props.disable!==!0){O(u),o=!0,a("update:modelValue",W.props.name),setTimeout(()=>{o=!1});return}Q+=u}e.infinite===!0&&s.length!==0&&w!==-1&&w!==s.length&&T(u,u===-1?s.length:-1)}function A(){const u=I(e.modelValue);return n.value!==u&&(n.value=u),!0}function J(){const u=B(e.modelValue)===!0&&A()&&s[n.value];return e.keepAlive===!0?[M(Xe,p.value,[M(x.value===!0?t(y.value,()=>({...qe,name:y.value})):qe,{key:y.value,style:c.value},()=>u)])]:[M("div",{class:"q-panel scroll",style:c.value,key:y.value,role:"tabpanel"},[u])]}function C(){if(s.length!==0)return e.animated===!0?[M(He,{name:l.value},J)]:J()}function D(u){return s=Je(xe(u.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&B(w.props.name)===!0),s.length}function te(){return s}return Object.assign(r,{next:d,previous:h,goTo:V}),{panelIndex:n,panelDirectives:v,updatePanelsList:D,updatePanelIndex:A,getPanelContent:C,getEnabledPanels:k,getPanels:te,isValidPanelName:B,keepAliveProps:p,needsUniqueKeepAliveWrapper:x,goToPanelByOffset:T,goToPanel:V,nextPanel:d,previousPanel:h}}const yt=Re({name:"QCarouselSlide",props:{...vt,imgSrc:String},setup(e,{slots:a}){const r=E(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>M("div",{class:"q-carousel__slide",style:r.value},xe(a.default))}}),Lt=["top","right","bottom","left"],xt=["regular","flat","outline","push","unelevated"],kt=Re({name:"QCarousel",props:{...Ze,..._t,...dt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>xt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Lt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ct,...ht],setup(e,{slots:a}){const{proxy:{$q:r}}=Me(),t=$e(e,r);let s=null,o;const{updatePanelsList:n,getPanelContent:l,panelDirectives:m,goToPanel:v,previousPanel:g,nextPanel:_,getEnabledPanels:c,panelIndex:y}=bt(),{inFullscreen:p}=ft(),x=E(()=>p.value!==!0&&e.height!==void 0?{height:e.height}:{}),d=E(()=>e.vertical===!0?"vertical":"horizontal"),h=E(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),V=E(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(p.value===!0?" fullscreen":"")+(t.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${d.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${h.value}`:"")),B=E(()=>{const C=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?C.reverse():C}),I=E(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),k=E(()=>e.navigationActiveIcon||I.value),O=E(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));be(()=>e.modelValue,()=>{e.autoplay&&T()}),be(()=>e.autoplay,C=>{C?T():s!==null&&(clearTimeout(s),s=null)});function T(){const C=nt(e.autoplay)===!0?Math.abs(e.autoplay):5e3;s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,C>=0?_():g()},C)}ye(()=>{e.autoplay&&T()}),et(()=>{s!==null&&clearTimeout(s)});function A(C,D){return M("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${C} q-carousel__navigation--${h.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[M("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},c().map(D))])}function J(){const C=[];if(e.navigation===!0){const D=a["navigation-icon"]!==void 0?a["navigation-icon"]:u=>M(Y,{key:"nav"+u.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${u.active===!0?"":"in"}active`,...u.btnProps,onClick:u.onClick}),te=o-1;C.push(A("buttons",(u,w)=>{const Q=u.props.name,W=y.value===w;return D({index:w,maxIndex:te,name:Q,active:W,btnProps:{icon:W===!0?k.value:I.value,size:"sm",...O.value},onClick:()=>{v(Q)}})}))}else if(e.thumbnails===!0){const D=e.controlColor!==void 0?` text-${e.controlColor}`:"";C.push(A("thumbnails",te=>{const u=te.props;return M("img",{key:"tmb#"+u.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${u.name===e.modelValue?"":"in"}active`+D,src:u.imgSrc||u["img-src"],onClick:()=>{v(u.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&C.push(M("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${d.value} absolute flex flex-center`},[M(Y,{icon:B.value[0],...O.value,onClick:g})])),(e.infinite===!0||y.value<o-1)&&C.push(M("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${d.value} absolute flex flex-center`},[M(Y,{icon:B.value[1],...O.value,onClick:_})]))),at(a.control,C)}return()=>(o=n(a),M("div",{class:V.value,style:x.value},[tt("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>m.value)].concat(J())))}}),Se=Le("chooseStore",{state:()=>({points:{}}),getters:{getPathList(e){return e.pathList}},setters:{setPathList(e,a){e.pathList=a}}}),R=Le("bus-solution",{state:()=>({transGuide:null,transSolutions:null,transferTactic:null,transferPreference:null,count:6,id:null,routeLayer:null}),setters:{setTransferPreference(e){this.transferPreference=e},setTransferTactic(e){this.transferTactic=e},setCount(e){this.count=e},setRouteLayer(e){this.routeLayer=e},setId(e){this.id=e},setTransGuide(e){this.transGuide=e},setTransSolutions(e){this.transSolutions=e}},getters:{getTransferPreference(){return this.transferPreference},getTransferTactic(){return this.transferTactic},getCount(){return this.count},getRouteLayer(){return this.routeLayer},getId(){return this.id},getTransGuide(){return this.transGuide},getTransSolutions(){return this.transSolutions}},actions:{clear(){this.transGuide=null,this.transSolutions=null,this.count=6,this.id=null,this.routeLayer.clearLayers()}}}),wt=R();let ie={text_chong:"从",text_dao:"到",text_noSubway:"不乘地铁",text_scheme:"方案",text_walkTO:"步行至:",text_ride:"乘坐",text_debus1:"，在",text_debus2:"下车",text_stops:"站",text_alsoRide:"还可乘坐:"};const Ne=(e,a)=>{const r=wt.routeLayer;r.clearLayers();let t=[];if(e&&e.items.length){let s=e.items;for(let o=0,n=s.length;o<n;o++){let l=s[o].route,m=L.supermap.Util.toGeoJSON(l);L.geoJSON(m).addTo(r)}}for(let s=0,o=e.items.length;s<o;s++){let n=e.items[s];if(n.isWalking){let l=ie.text_walkTO+" "+n.endStopName;t.push({name:l,distance:n.distance.toFixed(2)+"米"})}else{let l=n.lineName,m=n.startStopName,v=n.endStopName,g=ie.text_ride+l+ie.text_chong+m+ie.text_dao+v,_=n.passStopCount+ie.text_stops;t.push({name:g,distance:_})}}return t},Ct={__name:"BusSolutionItem",props:{index:{type:Number,default:0},item:{type:Object,default:()=>{}}},setup(e,{expose:a}){a();const r=R(),t=U();let s=S([]);const o=e;H(()=>{let m=r.transGuide,v=r.transSolutions;m&&v&&(s.value=Ne(m))});const l={busSolutionStore:r,busStore:t,get routes(){return s},set routes(m){s=m},props:o,handleTitle:m=>{let v=m.linesItems,g=v.length,_="   ";for(let c=0,y=g;c<y;c++){let p=v[c];for(let x=0,d=p.lineItems.length;x<d;x++){let h=p.lineItems[x];x!==d-1?_+=h.lineName+"/":_+=h.lineName}c!==y-1&&(_+=" → ")}return _},get useBusStore(){return U},watchEffect:H,ref:S,get useBusSolutionStore(){return R},get fillTransferInfo(){return Ne}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},Pt={class:"q-mt-md"},Bt={class:"q-mt-md"},Tt={class:"q-mt-md"};function It(e,a,r,t,s,o){return b(),q(De,{class:"fit"},{default:f(()=>[i(z,{name:"directions_bus",size:"56px"}),G("div",Pt,[G("div",null,$("起点："+t.busStore.getStartName),1)]),G("div",Bt,$(`方案${r.index+1}：`+t.handleTitle(t.props.item)),1),G("div",Tt,[(b(!0),j(oe,null,pe(t.routes,(n,l)=>(b(),j("div",{key:l},$(n.name+"："+n.distance),1))),128))]),G("div",null,$("终点："+t.busStore.getEndName),1)]),_:1})}const Et=X(Ct,[["render",It],["__file","BusSolutionItem.vue"]]),qt={__name:"BusDownLoadList",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){a();let r=S([]);const t=U(),s=Se(),o=R(),n=S(0);let l,m=0,v=[];const g=me(e,"modelValue"),_=(p,x)=>{let d=new L.supermap.TransferPathParameters({points:p,transferLines:x});new L.supermap.TrafficTransferAnalystService(ge).analysisTransferPath(d,function(h){o.transGuide=h.result,o.transSolutions=m,o.id=1})},c=p=>{let x=[];for(let d=0;d<l[p].length;d++){let h=l[p][d][0];x.push(h)}_(v,x)};H(()=>{if(Object.keys(s.points).length>0){let p=s.points;m=p.transSolutions,l=p.solutions,v=p.pointList,r.value=p.transSolutions}});const y={get busSolution(){return r},set busSolution(p){r=p},busStore:t,chooseStore:s,busSolutionStore:o,slide:n,get solutions(){return l},set solutions(p){l=p},get transSolutions(){return m},set transSolutions(p){m=p},get pointList(){return v},set pointList(p){v=p},clearRoute:g,execTransPathQuery:_,handleShow:c,ref:S,watchEffect:H,get useChooseStore(){return Se},get useBusSolutionStore(){return R},get SERVER_URL(){return ge},get useBusStore(){return U},BusSolutionItem:Et};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}},Nt={class:"q-pa-md"};function Vt(e,a,r,t,s,o){return b(),j("div",Nt,[t.busSolution.length>0&&!t.clearRoute?(b(),q(kt,{key:0,modelValue:t.slide,"onUpdate:modelValue":[a[0]||(a[0]=n=>t.slide=n),t.handleShow],vertical:"","transition-prev":"slide-down","transition-next":"slide-up",swipeable:"",animated:"",padding:"",arrows:"",navigation:"","navigation-icon":"radio_button_unchecked",height:"400px",class:"bg-purple text-white rounded-borders"},{"navigation-icon":f(({active:n,btnProps:l,onClick:m})=>[n?(b(),q(Y,{key:0,size:"lg",icon:"home",color:"yellow",flat:"",round:"",dense:"",onClick:m},null,8,["onClick"])):(b(),q(Y,{key:1,size:"sm",icon:l.icon,color:"white",flat:"",round:"",dense:"",onClick:m},null,8,["icon","onClick"]))]),default:f(()=>[(b(!0),j(oe,null,pe(t.busSolution,(n,l)=>(b(),q(yt,{name:l,class:"text-center",key:l},{default:f(()=>[i(t.BusSolutionItem,{item:n,index:l},null,8,["item","index"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])):ne("",!0)])}const Dt=X(qt,[["render",Vt],["__file","BusDownLoadList.vue"]]),Mt={__name:"BusPanel",setup(e,{expose:a}){a();const r=R(),t=Se(),s=U();let o=S(!1);const n=F();let l=S(""),m=S(""),v=S([]),g=[];function _(d,h){let V=new L.supermap.TransferSolutionParameters({solutionCount:r.count,transferTactic:r.transferTactic,transferPreference:r.transferPreference,walkingRatio:10,points:d});new L.supermap.TrafficTransferAnalystService(ge).analysisTransferSolution(V,function(B){if(B.error){n.notify({type:"negative",message:"查询失败!!!!",position:"top",timeout:1e3});return}c(B.result)})}function c(d){d.defaultGuide;let h=d.solutionItems,V=d.suggestWalking,B=[];if(V){n.notify({type:"negative",message:"亲！起始终止点距离太近，推荐步行",position:"top",timeout:1e3});return}if(h.length===0){n.notify({type:"negative",message:"未查询到公交换乘方案",position:"top",timeout:1e3});return}else n.notify({type:"positive",message:"公交换乘方案查询成功,共找到"+h.length+"条方案",position:"top",timeout:1e3});for(let I=0;I<h.length;I++){let k=h[I].linesItems,O=[];for(let T=0;T<k.length;T++){let A=k[T].lineItems,J=[];for(let C=0;C<A.length;C++){let D=A[C];J.push({lineID:D.lineID,startStopIndex:D.startStopIndex,endStopIndex:D.endStopIndex})}O.push(J)}B.push(O)}t.points={transSolutions:h,solutions:B,pointList:g}}const x={busSolutionStore:r,chooseStore:t,busStore:s,get clearRoute(){return o},set clearRoute(d){o=d},$q:n,get start(){return l},set start(d){l=d},get end(){return m},set end(d){m=d},get solutions(){return v},set solutions(d){v=d},get pointList(){return g},set pointList(d){g=d},execTransSolutionsQuery:_,transferSolutionsSucceed:c,handleSearch:()=>{if(o.value=!1,!s.startSure||!s.endSure){n.notify({type:"negative",message:"请先选择起点和终点",position:"top",timeout:1e3});return}g=[s.startLine,s.endLine],_(g)},handleClear:()=>{o.value=!0,r.clear()},ref:S,get useBusStore(){return U},DownLoadList:Dt,get SERVER_URL(){return ge},get useQuasar(){return F},get useChooseStore(){return Se},get useBusSolutionStore(){return R}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}},Rt={class:"q-pa-md"},Ot={class:"text-h6 text-blue-4 inset-shadow-down"},Qt={class:"text-h6 text-blue-14 inset-shadow-down"};function Ut(e,a,r,t,s,o){return b(),j("div",Rt,[i(rt,{class:"my-card"},{default:f(()=>[i(ot,null,{default:f(()=>[G("div",Ot,"起点站："+$(t.busStore.startSure?t.busStore.startName:"未选择"),1),G("div",Qt,"终点站："+$(t.busStore.endSure?t.busStore.endName:"未选择"),1)]),_:1}),i(ee,{clickable:""},{default:f(()=>[i(N,{avatar:""},{default:f(()=>[i(z,{color:"primary",name:"search"})]),_:1}),i(N,null,{default:f(()=>[i(Y,{color:"primary",label:"查找",onClick:t.handleSearch})]),_:1}),i(N,null,{default:f(()=>[i(Y,{color:"info",label:"清空路径",onClick:t.handleClear})]),_:1})]),_:1}),i(t.DownLoadList,{modelValue:t.clearRoute,"onUpdate:modelValue":a[0]||(a[0]=n=>t.clearRoute=n)},null,8,["modelValue"])]),_:1})])}const At=X(Mt,[["render",Ut],["__scopeId","data-v-ec023a02"],["__file","BusPanel.vue"]]),Z=U();let fe;const Ve=(e,a)=>{let r=L.geoJSON(e.toGeoJSON(),{...e.options,icon:L.icon({iconUrl:`marker/${a}.png`,iconSize:[40,40]}),markersInheritOptions:!0});if(a==="Start"){fe="起点站:"+e._popup._content,r.bindPopup(fe);let t=Z.getStartLayer();t.getLayers().length>0&&t.removeLayer(t.getLayers()[0]),t.addLayer(r),Z.startSure=!0,Z.setStartName(e._popup._content),Z.setStartLine(r.options.stopID)}else if(a==="End"){fe="终点站:"+e._popup._content,r.bindPopup(fe);let t=Z.getEndLayer();t.getLayers().length>0&&t.removeLayer(t.getLayers()[0]),t.addLayer(r),Z.endSure=!0,Z.setEndName(e._popup._content),Z.setEndLine(r.options.stopID)}},jt={__name:"Bustable",props:st({need:{type:String,default:"start"}},{dialog:{},dialogModifiers:{},tableData:{},tableDataModifiers:{},flag:{},flagModifiers:{}}),emits:["update:dialog","update:tableData","update:flag"],setup(e,{expose:a}){a();const r=F(),t=U(),s=S("bottom"),o=t.getMap(),n=t.getMarkerLayer(),l=me(e,"dialog"),m=me(e,"tableData"),v=me(e,"flag"),g=S([]),_=S(!1),c=e;let y;const p=[{name:"id",required:!0,label:"车站号",align:"center",field:"id",sortable:!0},{name:"name",label:"地名",field:"name"},{name:"markerID",label:"标记id",field:"markerId",sortable:!0},{name:"lat",align:"center",label:"纬度",field:k=>k.position.x},{name:"lng",label:"经度",field:k=>k.position.y}];let x=m.value,d;H(()=>{x=m.value}),H(()=>{v.value&&!l.value&&x.length>1&&r.notify({type:"info",message:"请先选择一个站点",position:"top",timeout:1e3})});const h=(k,O=15)=>{let T=n.getLayer(k);if(T){let A=T.getLatLng();o.flyTo(A,O)}},I={$q:r,busStore:t,bottom:s,map:o,markers:n,dialog:l,tableData:m,flag:v,selected:g,secondDialog:_,props:c,get content(){return y},set content(k){y=k},columns:p,get rows(){return x},set rows(k){x=k},get selectedMarkerId(){return d},set selectedMarkerId(k){d=k},flyToSelected:h,handleSelect:k=>{d=k.keys[0],h(d)},handleChoose:()=>{g.value.length>0?(n.eachLayer(function(k){k._leaflet_id===d&&(Ve(k,c.need),h(d,3)),n.removeLayer(k)}),v.value=!1):_.value=!0},ref:S,watchEffect:H,toRaw:it,get useQuasar(){return F},get useBusStore(){return U},get BusPoint(){return Ve},SelectDialog:je};return Object.defineProperty(I,"__isScriptSetup",{enumerable:!1,value:!0}),I}},Ft={class:"q-pa-md"};function Gt(e,a,r,t,s,o){return b(),j(oe,null,[i(lt,{modelValue:t.dialog,"onUpdate:modelValue":a[1]||(a[1]=n=>t.dialog=n),position:t.bottom,"full-width":""},{default:f(()=>[G("div",Ft,[i(mt,{title:"查询结果如下, 请选择一个起点",rows:t.rows,columns:t.columns,"row-key":"markerId",selection:"single",selected:t.selected,"onUpdate:selected":a[0]||(a[0]=n=>t.selected=n),onSelection:t.handleSelect},{"top-right":f(()=>[i(Y,{color:"primary",label:"确定",onClick:t.handleChoose})]),_:1},8,["rows","selected"])])]),_:1},8,["modelValue","position"]),i(t.SelectDialog,{modelValue:t.secondDialog,"onUpdate:modelValue":a[2]||(a[2]=n=>t.secondDialog=n)},null,8,["modelValue"])],64)}const zt=X(jt,[["render",Gt],["__file","Bustable.vue"]]),Wt={__name:"BusChooseForm",props:{startPlaceHolder:{type:String,default:"请输入起点"},endPlaceHolder:{type:String,default:"请输入终点"}},setup(e,{expose:a}){a();const r=S(Te),t=F(),s=U(),o=S("");let n;const l=S(""),m=S(!1),v=S(!1),g=S(),_=S(),c=S([]),y=S(!1),p=S(!1),x=S(!1);let d=[],h=[],V="",B=!0,I=!0;const k=()=>{x.value=!0,t.notify({type:"info",message:"查询到一个站点",position:"top",timeout:1e3})},O=()=>{x.value=!1,t.notify({type:"warning",message:"查询到多个站点,请点击地图查看具体位置",position:"top",timeout:1e3})};H(()=>{o.value,B=!0}),H(()=>{l.value,I=!0});const T=P=>{s.getMap();let se=s.getMarkerLayer();se.clearLayers(),P.forEach(re=>{const Ae=L.marker([re.position.y,re.position.x],{stopID:re.stopID,name:re.name}).bindPopup(re.name).addTo(se);re.markerId=Ae._leaflet_id}),c.value=P},A=async()=>{if(s.setStartSure(!1),!o.value.trim()){V="请输入起始点",t.notify({type:"negative",message:V,position:"top",timeout:1e3});return}B&&(d=await de(o.value),B=!1),d.length>=1?(y.value=!0,T(d),m.value=!0):d.length===0&&t.notify({type:"negative",message:"未找到相关的位置",position:"top",timeout:1e3})},J=async()=>{if(s.setEndSure(!1),!l.value.trim()){V="请输入终点",t.notify({type:"negative",message:V,position:"top",timeout:1e3});return}I&&(h=await de(l.value),I=!1),h.length>=1?(p.value=!0,T(h),v.value=!0):h.length===0&&t.notify({type:"negative",message:"未找到相关的位置",position:"top",timeout:1e3})},C=P=>{switch(P){case"start":_.value=!1,g.value=!0;break;case"end":g.value=!1,_.value=!0;break}},D=P=>r.value.filter(se=>Ie(se,P.value)&&se.toLowerCase()!==P.value.toLowerCase()),te=E(()=>D(o)),u=E(()=>D(l)),W={allSuggestions:r,$q:t,busStore:s,start:o,get content(){return n},set content(P){n=P},end:l,showStart:m,showEnd:v,startSuggestions:g,endSuggestions:_,tableData:c,flagStart:y,flagEnd:p,isOne:x,get startResult(){return d},set startResult(P){d=P},get endResult(){return h},set endResult(P){h=P},get messgae(){return V},set messgae(P){V=P},get startSend(){return B},set startSend(P){B=P},get endSend(){return I},set endSend(P){I=P},showOneMarker:k,showMoreMarker:O,addPositionToMap:T,getStartInfo:A,getEndInfo:J,getFocus:C,getSuggestions:D,filteredStartSuggestions:te,filteredEndSuggestions:u,selectStartSuggestion:P=>{o.value=P},selectEndSuggestion:P=>{l.value=P},computed:E,ref:S,watchEffect:H,get getStatationInfo(){return de},get useBusStore(){return U},get busPoint(){return Te},get useQuasar(){return F},Bustable:zt,get match(){return Ie},get getStationInfo(){return de}};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}},Yt={class:"suggestions-list"},Ht=["onClick"],Jt={class:"suggestions-list"},Kt=["onClick"];function Xt(e,a,r,t,s,o){return b(),j(oe,null,[K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"mdi-hand-pointing-right"})]),_:1}),i(N,null,{default:f(()=>[t.busStore.getStartSure?ne("",!0):(b(),q(ue,{key:0,modelValue:t.start,"onUpdate:modelValue":a[0]||(a[0]=n=>t.start=n),placeholder:r.startPlaceHolder,onFocus:a[1]||(a[1]=n=>t.startSuggestions=!0),onBlur:a[2]||(a[2]=n=>t.startSuggestions=!1)},{default:f(()=>[K(G("ul",Yt,[(b(!0),j(oe,null,pe(t.filteredStartSuggestions,(n,l)=>(b(),j("li",{key:`start-${l}`,onClick:m=>t.selectStartSuggestion(n),class:"suggestion-item"},$(n),9,Ht))),128))],512),[[Ce,t.filteredStartSuggestions.length>0&&t.startSuggestions]])]),_:1},8,["modelValue","placeholder"])),t.busStore.getStartSure?(b(),q(ue,{key:1,type:"text",disable:!0,modelValue:t.busStore.getStartName,"onUpdate:modelValue":a[3]||(a[3]=n=>t.busStore.getStartName=n)},null,8,["modelValue"])):ne("",!0)]),_:1})]),_:1})),[[ae]]),K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"fa-solid fa-house"})]),_:1}),i(N,null,{default:f(()=>[i(Y,{color:"primary",label:"出发点定位",onClick:t.getStartInfo})]),_:1})]),_:1})),[[ae]]),K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"mdi-arrow-right-bold-circle-outline"})]),_:1}),i(N,null,{default:f(()=>[t.busStore.getEndSure?ne("",!0):(b(),q(ue,{key:0,modelValue:t.end,"onUpdate:modelValue":a[4]||(a[4]=n=>t.end=n),placeholder:r.endPlaceHolder,onFocus:a[5]||(a[5]=n=>t.endSuggestions=!0),onBlur:a[6]||(a[6]=n=>t.endSuggestions=!1)},{default:f(()=>[K(G("ul",Jt,[(b(!0),j(oe,null,pe(t.filteredEndSuggestions,(n,l)=>(b(),j("li",{key:`end-${l}`,onClick:m=>t.selectEndSuggestion(n),class:"suggestion-item"},$(n),9,Kt))),128))],512),[[Ce,t.filteredEndSuggestions.length>0&&t.endSuggestions]])]),_:1},8,["modelValue","placeholder"])),t.busStore.getEndSure?(b(),q(ue,{key:1,type:"text",disable:!0,modelValue:t.busStore.getEndName,"onUpdate:modelValue":a[7]||(a[7]=n=>t.busStore.getEndName=n)},null,8,["modelValue"])):ne("",!0)]),_:1})]),_:1})),[[ae]]),K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"flight_takeoff"})]),_:1}),i(N,null,{default:f(()=>[i(Y,{color:"primary",label:"目的地定位",onClick:t.getEndInfo})]),_:1})]),_:1})),[[ae]]),t.flagStart?(b(),q(t.Bustable,{key:0,dialog:t.showStart,"onUpdate:dialog":a[8]||(a[8]=n=>t.showStart=n),tableData:t.tableData,"onUpdate:tableData":a[9]||(a[9]=n=>t.tableData=n),flag:t.flagStart,"onUpdate:flag":a[10]||(a[10]=n=>t.flagStart=n),need:"Start"},null,8,["dialog","tableData","flag"])):ne("",!0),t.flagEnd?(b(),q(t.Bustable,{key:1,dialog:t.showEnd,"onUpdate:dialog":a[11]||(a[11]=n=>t.showEnd=n),tableData:t.tableData,"onUpdate:tableData":a[12]||(a[12]=n=>t.tableData=n),flag:t.flagEnd,"onUpdate:flag":a[13]||(a[13]=n=>t.flagEnd=n),need:"End"},null,8,["dialog","tableData","flag"])):ne("",!0)],64)}const Zt=X(Wt,[["render",Xt],["__scopeId","data-v-d8e88ee5"],["__file","BusChooseForm.vue"]]),$t={__name:"BusRouterCount",setup(e,{expose:a}){a();let r=R(),t=F(),s=S(6);const n={get busSolutionStore(){return r},set busSolutionStore(l){r=l},get $q(){return t},set $q(l){t=l},get count(){return s},set count(l){s=l},handleBlur:()=>{let l=s.value;if(l<1){t.notify({type:"warning",message:"公交方案数量必须大于等于1",position:"top",timeout:1e3}),s.value=6,r.count=6;return}r.count=l},ref:S,get useQuasar(){return F},get useBusSolutionStore(){return R}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function en(e,a,r,t,s,o){return K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"mdi-bus-school"})]),_:1}),i(N,null,{default:f(()=>[i(ue,{modelValue:t.count,"onUpdate:modelValue":a[0]||(a[0]=n=>t.count=n),modelModifiers:{number:!0},placeholder:"公交方案数量",type:"number",onBlur:t.handleBlur,rules:[n=>n>=1||"公交方案数量必须大于等于1"]},null,8,["modelValue","rules"])]),_:1})]),_:1})),[[ae]])}const tn=X($t,[["render",en],["__file","BusRouterCount.vue"]]),nn={__name:"BusTactic",setup(e,{expose:a}){a();const r=R();r.transferTactic="LESS_TIME";const t=F(),s=S({label:"时间短",value:"LESS_TIME"}),l={busSolutionStore:r,$q:t,type:s,handleChange:()=>{r.transferTactic=s.value.value},options:[{label:"时间短",value:"LESS_TIME"},{label:"步行少",value:"LESS_WALK"},{label:"换乘少",value:"LESS_TRANSFER"},{label:"距离短",value:"MIN_DISTANCE"}],ref:S,get useQuasar(){return F},get useBusSolutionStore(){return R}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function an(e,a,r,t,s,o){return K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"mdi-bus"})]),_:1}),i(N,null,{default:f(()=>[i(Ue,{"bg-color":"blue",filled:"",modelValue:t.type,"onUpdate:modelValue":[a[0]||(a[0]=n=>t.type=n),t.handleChange],options:t.options,rules:[n=>n!==null||"请选择换乘类型"],"transition-show":"flip-up","transition-hide":"flip-down","emit-label":""},{prepend:f(()=>[i(z,{name:"mdi-bus"})]),default:f(()=>[i(Qe,{class:"bg-accent"},{default:f(()=>[Oe("选择换乘策略")]),_:1})]),_:1},8,["modelValue","rules"])]),_:1})]),_:1})),[[ae]])}const on=X(nn,[["render",an],["__file","BusTactic.vue"]]),rn={__name:"BusPersonSelect",setup(e,{expose:a}){a();const r=R();r.transferPreference="NONE";const t=F(),s=S({label:"无乘车偏好",value:"NONE"}),l={busSolutionStore:r,$q:t,type:s,handleChange:()=>{r.transferPreference=s.value.value},options:[{label:"公交汽车优先",value:"BUS"},{label:"地铁优先",value:"SUBWAY"},{label:"不乘坐地铁",value:"NO_SUBWAY"},{label:"无乘车偏好",value:"NONE"}],ref:S,get useQuasar(){return F},get useBusSolutionStore(){return R}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function sn(e,a,r,t,s,o){return K((b(),q(ee,{clickable:""},{default:f(()=>[i(N,{avatar:"",class:"text-purple q-gutter-md"},{default:f(()=>[i(z,{name:"mdi-heart-search"})]),_:1}),i(N,null,{default:f(()=>[i(Ue,{"bg-color":"blue",filled:"",modelValue:t.type,"onUpdate:modelValue":[a[0]||(a[0]=n=>t.type=n),t.handleChange],options:t.options,rules:[n=>n!==null||"请选择个人换乘偏好"],"transition-show":"flip-up","transition-hide":"flip-down","emit-label":""},{prepend:f(()=>[i(z,{name:"mdi-bus"})]),default:f(()=>[i(Qe,{class:"bg-accent"},{default:f(()=>[Oe("选择个人换乘偏好")]),_:1})]),_:1},8,["modelValue","rules"])]),_:1})]),_:1})),[[ae]])}const ln=X(rn,[["render",sn],["__file","BusPersonSelect.vue"]]),un={__name:"Bus",setup(e,{expose:a}){a();const r=Ee(),t=R(),s=U();let o,n,l;const m=S(!1),v=S(!0),g=c=>{v.value&&(v.value=!1,c.stopPropagation())};ye(()=>{o=ke(!1,!1,"zh");let c=new L.LayerGroup,y=new L.LayerGroup,p=new L.LayerGroup;t.routeLayer=L.featureGroup().addTo(o),c.addTo(o),p.addTo(o),y.addTo(o),s.setMap(o),s.setMarkerLayer(c),s.setStartLayer(p),s.setEndLayer(y)});const _={settingStore:r,busSolutionStore:t,travelStore:s,get map(){return o},set map(c){o=c},get startMarker(){return n},set startMarker(c){n=c},get endMarker(){return l},set endMarker(c){l=c},drawerRight:m,miniState:v,drawerClick:g,onMounted:ye,ref:S,get GetMap(){return ke},BusPlane:At,ShrinkDrawerBtn:Fe,BusChooseForm:Zt,get useBusStore(){return U},get useBusSolutionStore(){return R},get useSettingStore(){return Ee},BusRouterCount:tn,BusTactic:on,BusPersonSelect:ln};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},dn={id:"map"};function cn(e,a,r,t,s,o){return b(),j(oe,null,[G("div",dn,[i(t.BusPlane,{id:"query"})]),i(Ge,{side:"right",modelValue:t.drawerRight,"onUpdate:modelValue":a[1]||(a[1]=n=>t.drawerRight=n),"show-if-above":"",bordered:"",width:t.settingStore.rightDrawerWidth,breakpoint:500,class:"bg-blue-3",mini:!t.drawerRight||t.miniState,onClickCapture:t.drawerClick},{default:f(()=>[i(De,{class:"fit"},{default:f(()=>[i(t.BusChooseForm,{"start-place-holder":"起点站","end-place-holder":"终点站"}),i(t.BusRouterCount),i(t.BusTactic),i(t.BusPersonSelect),i(t.ShrinkDrawerBtn,{modelValue:t.miniState,"onUpdate:modelValue":a[0]||(a[0]=n=>t.miniState=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","width","mini"])],64)}const Pn=X(un,[["render",cn],["__scopeId","data-v-1bec4ec5"],["__file","Bus.vue"]]);export{Pn as default};
