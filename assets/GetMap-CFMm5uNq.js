import{u as p}from"./setting-store-DdLmlg3s.js";const c=p();let s=c.serviceMap==="云端"?"https://iserver.supermap.io":"http://localhost:8090";const u=s+"/iserver/services/traffictransferanalyst-sample/restjsr/traffictransferanalyst/Traffic-Changchun",h=s+"/iserver/services/transportationanalyst-sample/rest/networkanalyst/RoadNet@Changchun",l=s+"/iserver/services/map-changchun/rest/maps/长春市区图",d=s+"/iserver/services/spatialanalyst-changchun/restjsr/spatialanalyst",f=s+"/iserver/services/data-changchun/rest/data",R="全部",g=(t,o=!0,e="zh",n=1,r=l)=>{let a=L.map("map",{crs:new L.supermap.CRS.NonEarthCRS({bounds:L.bounds([48.4,-7668.25],[8958.85,-55.58]),origin:L.point(48.4,-55.58)}),center:[-3375,5105],zoom:3,attributionControl:!1});if(L.control.scale().addTo(a),new L.supermap.TiledMapLayer(r,{minZoom:n,noWrap:!0}).addTo(a),o){let i=new L.supermap.TiledMapLayer(r,{minZoom:0,noWrap:!0});L.control.minimap(i,{position:"bottomright",mapOptions:{logoControl:!1},toggleDisplay:!0}).addTo(a)}return t&&a.pm.addControls(t),e&&a.pm.setLang(e),a};export{d as B,f as D,g as G,l as M,R as N,u as S,h as T};
