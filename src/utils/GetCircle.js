import {BUFFER_URL} from "src/constant/data.js";
import {useDataStore} from "stores/data-store.js";
const dataStore=useDataStore();
const getCircle=async (radiusValue)=> {
  let bufferAnalystService = new L.supermap.SpatialAnalystService(BUFFER_URL);
  let geoBufferAnalystParams = new L.supermap.GeometryBufferAnalystParameters({
    sourceGeometry: dataStore.polygon,
    bufferSetting: new L.supermap.BufferSetting({
      endType: L.supermap.BufferEndType.ROUND,
      leftDistance: new L.supermap.BufferDistance({value: radiusValue}),
      rightDistance: new L.supermap.BufferDistance({value: radiusValue}),
      semicircleLineSegment: 200
    })
  });

  let serviceResult = await bufferAnalystService.bufferAnalysis(geoBufferAnalystParams)
  return serviceResult.result.resultGeometry
}
export default getCircle;
