import {useBusSolutionStore} from "stores/bus-solution-store.js";
const busSolutionStore = useBusSolutionStore();
let data = {
  "text_chong": "从",
  "text_dao": "到",
  "text_noSubway": "不乘地铁",
  "text_scheme": "方案",
  "text_walkTO": "步行至:",
  "text_ride": "乘坐",
  "text_debus1": "，在",
  "text_debus2": "下车",
  "text_stops": "站",
  "text_alsoRide": "还可乘坐:",
}
export const fillTransferInfo = (transGuide, transSolutions) => {
  const routeFeatureGroup = busSolutionStore.routeLayer
  routeFeatureGroup.clearLayers();
  let routes = []
  let geometryList = []
  if (transGuide && transGuide.items.length) {
    let items = transGuide.items;
    for (let itemIndex = 0, itemLen = items.length; itemIndex < itemLen; itemIndex++) {
      let geometry = items[itemIndex].route;
      let geojson = L.supermap.Util.toGeoJSON(geometry);
      let lineLayer = L.geoJSON(geojson)
      lineLayer.addTo(routeFeatureGroup)
    }
  }
  for (let iiii = 0, iiiiLen = transGuide.items.length; iiii < iiiiLen; iiii++) {
    let item = transGuide.items[iiii];
    if (item.isWalking) {
      let scheme = data.text_walkTO + ' ' + item.endStopName
      routes.push({
          name: scheme,
          distance: item.distance.toFixed(2)+'米',
        }
      )

    } else {
      let lineName = item.lineName
      let startStopName = item.startStopName
      let endStopName = item.endStopName
      let scheme = data.text_ride + lineName + data.text_chong + startStopName + data.text_dao + endStopName
      let passStopCount = item.passStopCount + data.text_stops
      routes.push({
          name: scheme,
          distance: passStopCount,
        }
      )
    }
  }
  return routes

}
