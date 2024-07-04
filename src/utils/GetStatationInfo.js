import {SERVER_URL} from "src/constant/data.js";
const getStationInfo = async (value) => {
  let queryParameters = new L.supermap.StopQueryParameters({
    keyWord: value,
    returnPosition: true,
  })
  let service = await new L.supermap.TrafficTransferAnalystService(SERVER_URL).queryStop(queryParameters)
  return service.result
}
export default getStationInfo
