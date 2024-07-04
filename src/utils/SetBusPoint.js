import {useBusStore} from "stores/bus-store.js";

const busStore = useBusStore();
let content;
export const BusPoint=(layer,type)=> {

  let newLayer=L.geoJSON(layer.toGeoJSON(),{
    ...layer.options,
    icon:L.icon({
      iconUrl: `marker/${type}.png`,
      iconSize: [40, 40], // size of the icon
    }),
    markersInheritOptions: true
  })
  if(type==='Start'){
    content='起点站:'+layer._popup._content
    newLayer.bindPopup(content)
    let startLayer = busStore.getStartLayer()
    if(startLayer.getLayers().length>0){
      startLayer.removeLayer(startLayer.getLayers()[0])
    }
    startLayer.addLayer(newLayer)
    busStore.startSure= true
    busStore.setStartName(layer._popup._content)
    busStore.setStartLine(newLayer.options.stopID)
  }else if(type==='End') {
    content='终点站:'+layer._popup._content
    newLayer.bindPopup(content)
    let endLayer = busStore.getEndLayer()
    if(endLayer.getLayers().length>0){
      endLayer.removeLayer(endLayer.getLayers()[0])
    }
    endLayer.addLayer(newLayer)
    busStore.endSure= true
    busStore.setEndName(layer._popup._content)
    busStore.setEndLine(newLayer.options.stopID)
  }
}
