import {TRANSPORTATION_ANALYST_URL} from "src/constant/data.js";
import {useRescueStore} from "stores/rescue-store.js";
const useRescue = useRescueStore();
let rescueLineLayer;
/**
 * @function getClose
 * @description 获取最近设施分析结果
 * @param {Object} map 地图对象
 * @param {Object} eventPoint 事件点
 * @param {Array} facilities 设施点集合
 * @param {Number} rescueCount 要查找的设施点数量。默认值为1
 */

const getClose = (eventPoint,facilities,rescueCount=1,)=> {
  let findClosetFacilitiesService = new L.supermap.NetworkAnalystService(TRANSPORTATION_ANALYST_URL);
  //创建最近设施分析参数实例
  let resultSetting = new L.supermap.TransportationAnalystResultSetting({
    returnEdgeFeatures: true,
    returnEdgeGeometry: true,
    returnEdgeIDs: true,
    returnNodeFeatures: true,
    returnNodeGeometry: true,
    returnNodeIDs: true,
    returnPathGuides: true,
    returnRoutes: true
  });
  let analystParameter = new L.supermap.TransportationAnalystParameter({
    resultSetting: resultSetting,
    turnWeightField: "TurnCost",
    weightFieldName: "length"  //length,time
  });
  let findClosetFacilitiesParameter = new L.supermap.FindClosestFacilitiesParameters({
    event: eventPoint,
    expectFacilityCount: rescueCount,
    facilities: facilities,
    isAnalyzeById: false,
    parameter: analystParameter
  });

  findClosetFacilitiesService.findClosestFacilities(findClosetFacilitiesParameter, function (serviceResult) {
    let rersult = serviceResult.result;
    rersult.facilityPathList.map(function (result) {
      rescueLineLayer = L.geoJSON(result.route,{
        style: {
          color: '#FF0000',
          weight: 5
        }

      }).addTo(useRescue.map);
      useRescue.rescueLineLayer=rescueLineLayer;
    });
  });
}
export default getClose;
