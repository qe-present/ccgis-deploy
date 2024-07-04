import {BUFFER_URL, MAP_URL} from "src/constant/data.js";
import {useSettingStore} from "stores/setting-store.js";
import {useRescueStore} from "stores/rescue-store.js";
const rescueStore = useRescueStore();
const settingStore = useSettingStore();
let isCloud = settingStore.serviceMap === '云端';
let map, bufferAnalystService, geoBufferAnalystParams, bufferLayer,
  queryService, queryByGeometryParameters, pointLayer;
const geoBufferAnalyst = (polyline, radius) => {
  bufferAnalystService = new L.supermap.SpatialAnalystService(BUFFER_URL);
  //对生成的线路进行缓冲区分析
  geoBufferAnalystParams = new L.supermap.GeometryBufferAnalystParameters({
    sourceGeometry: polyline,
    bufferSetting: new L.supermap.BufferSetting({
      endType: L.supermap.BufferEndType.ROUND,
      leftDistance: new L.supermap.BufferDistance({value: radius}),
      rightDistance: new L.supermap.BufferDistance({value: radius}),
      semicircleLineSegment: 200
    })
  });
  if(isCloud) {
    bufferAnalystService.bufferAnalysis(geoBufferAnalystParams, function (serviceResult) {
      new L.supermap.FGBLayer(serviceResult.result.newResourceLocation, {
        strategy: 'all',
        color: 'red',
        opacity: 0.1
      }).addTo(rescueStore.map);
    }, 'FGB');
  }
  bufferAnalystService.bufferAnalysis(geoBufferAnalystParams, function (serviceResult) {
    if(!isCloud) {
      bufferLayer = L.geoJSON(serviceResult.result.resultGeometry,{
        style: {
          color: '#FA0066',
          opacity: 0.1
        }
      }).addTo(rescueStore.map);
    }else {
      bufferLayer = L.geoJSON(serviceResult.result.resultGeometry).addTo(rescueStore.map);
    }
    rescueStore.bufferLayer=bufferLayer;
    queryService = new L.supermap.QueryService(MAP_URL);
    queryByGeometryParameters = new L.supermap.QueryByGeometryParameters({
      queryParams: [new L.supermap.FilterParameter({name: "Hospital@Changchun"})],
      geometry: bufferLayer,
      spatialQueryMode: L.supermap.SpatialQueryMode.INTERSECT
    });
    queryService.queryByGeometry(queryByGeometryParameters, function (serviceResult) {
      let result = serviceResult.result;
      pointLayer = L.geoJSON(result.recordsets[0].features, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.name);
        }
      }).addTo(rescueStore.map);
      rescueStore.pointLayer=pointLayer;
    });
  });

}
export default geoBufferAnalyst;
