import {MAP_URL} from "src/constant/data.js";
import {useSettingStore} from "stores/setting-store.js";
import {changeUnit} from "src/utils/tool.js";

const settingStore = useSettingStore();
const  measureDistance=async (polyLine,unit) => {
  let distanceMeasureParam = new L.supermap.MeasureParameters(polyLine,{
    unit: unit,
  });
  let response= await new L.supermap
    .MeasureService(MAP_URL)
    .measureDistance(distanceMeasureParam)
  return response.result.distance

}
const measureArea=async (polygon, unit) => {
  let areaMeasureParam = new L.supermap.MeasureParameters(polygon,{
    unit: unit,

  });
  let response = await new L.supermap
    .MeasureService(MAP_URL)
    .measureArea(areaMeasureParam)
  return response.result.area
}
export const getDistance = async (polyLine) => {
  let unit = settingStore.map.unit
  if(polyLine._rings[0].length<2){
    return
  }
  let distance = await measureDistance(polyLine,settingStore.map.unit)
  polyLine.bindTooltip(distance.toFixed(settingStore.map.decimal) + ' ' + changeUnit(unit)).openTooltip()
}
export const getArea = async (polygon) => {
  let unit = settingStore.map.unit
  console.log(unit)
  let showUnit = unit === 'METER'? 'area-meter' : 'area-kilometer'
  let area = await measureArea(polygon,unit)

  polygon.bindTooltip(area.toFixed(settingStore.map.decimal) + ' ' + changeUnit(showUnit)).openTooltip()
}
