import{_ as M,B as S,r as u,m as V,s as C,G as U,v as e,F as B,u as a,M as b,I,J as d,a4 as O}from"./index-RCC37x8F.js";import{b as Q,a as m,Q as i}from"./QItem-CHxoOo8e.js";import{Q as f}from"./QSelect-CWeACVj1.js";import{u as y}from"./setting-store-BJW8gNsA.js";import{c as g}from"./tool-D9ZRlb0_.js";import{u as w}from"./use-quasar-DxV-M5Nk.js";import"./QItemLabel-BVUPbCED.js";import"./position-engine-gt-lz_9m.js";import"./selection-BkGT1DNw.js";const D={__name:"Setting",setup(k,{expose:l}){l();const c=S(),t=w(),o=y();let p=u("#000000"),n=["米","千米"],v=["本地","云端"];const h=u(o.serviceMap),_=u(o.rightDrawerWidth),s=V({unit:g(o.map.unit),decimal:o.map.decimal}),x={router:c,$q:t,settingStore:o,get hex(){return p},set hex(r){p=r},get options(){return n},set options(r){n=r},get service(){return v},set service(r){v=r},serviceMap:h,width:_,map:s,save:()=>{if(s.decimal<2||s.decimal>10){console.log("地图结果小数点位数必须在2-10之间"),t.notify({type:"negative",message:"地图结果小数点位数必须在2-10之间",position:"top",timeout:1e3}),s.decimal=o.map.decimal;return}o.map.unit=g(s.unit),o.map.decimal=s.decimal,o.serviceMap=h.value,o.rightDrawerWidth=_.value,t.notify({type:"positive",message:"保存成功",position:"top",timeout:1e3}),c.go(0)},rangeOptions:[200,300,500,700],handleChange:r=>{_.value=r},ref:u,reactive:V,get useSettingStore(){return y},get changeUnit(){return g},get useQuasar(){return w},get useRouter(){return S}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}},F=d("div",{class:"text-h2 text-center text-cyan-6"},"配置页面",-1),N=d("div",{class:"text-h6 text-light-blue-4"},"Supermap iServer 服务",-1),R=d("div",{class:"text-h6 text-deep-orange-4"},"地图结果单位",-1),W=d("div",{class:"text-h6 text-deep-orange-4"},"地图结果小数点位数",-1),j=d("div",{class:"text-h6 text-deep-orange-4"},"选择右侧边栏的宽度",-1);function q(k,l,c,t,o,p){return C(),U(I,null,[F,e(B,{color:"primary",label:"保存并应用",onClick:t.save}),e(b,{class:"my-card"},{default:a(()=>[e(Q,null,{default:a(()=>[e(m,{clickable:""},{default:a(()=>[e(i,{avatar:""},{default:a(()=>[N]),_:1}),e(i,null,{default:a(()=>[e(f,{rounded:"",outlined:"",modelValue:t.serviceMap,"onUpdate:modelValue":l[0]||(l[0]=n=>t.serviceMap=n),options:t.service},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{class:"my-card"},{default:a(()=>[e(Q,null,{default:a(()=>[e(m,{clickable:""},{default:a(()=>[e(i,{avatar:""},{default:a(()=>[R]),_:1}),e(i,null,{default:a(()=>[e(f,{rounded:"",outlined:"",modelValue:t.map.unit,"onUpdate:modelValue":l[1]||(l[1]=n=>t.map.unit=n),options:t.options},null,8,["modelValue","options"])]),_:1})]),_:1}),e(m,{clickable:""},{default:a(()=>[e(i,{avatar:""},{default:a(()=>[W]),_:1}),e(i,null,{default:a(()=>[e(O,{rounded:"",outlined:"",modelValue:t.map.decimal,"onUpdate:modelValue":l[2]||(l[2]=n=>t.map.decimal=n),modelModifiers:{number:!0},type:"number",min:"0",max:"10",maxlength:"2"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{clickable:""},{default:a(()=>[e(i,{avatar:""},{default:a(()=>[j]),_:1}),e(i,null,{default:a(()=>[e(f,{filled:"",modelValue:t.width,"onUpdate:modelValue":[l[3]||(l[3]=n=>t.width=n),t.handleChange],options:t.rangeOptions,"transition-show":"flip-up","transition-hide":"flip-down"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Z=M(D,[["render",q],["__file","Setting.vue"]]);export{Z as default};
