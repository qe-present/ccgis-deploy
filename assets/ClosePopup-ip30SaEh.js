import{ah as s,aK as a,aL as d,aM as c}from"./index-BX1gk6uQ.js";function p(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const h=s({name:"close-popup",beforeMount(e,{value:t}){const o={depth:p(t),handler(r){o.depth!==0&&setTimeout(()=>{const n=a(e);n!==void 0&&d(n,r,o.depth)})},handlerKey(r){c(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=p(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{h as C};
