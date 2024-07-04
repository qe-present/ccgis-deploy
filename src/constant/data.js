import {useSettingStore} from "stores/setting-store.js";
const settingStore = useSettingStore();
let local=settingStore.serviceMap==='云端'?'https://iserver.supermap.io':'http://localhost:8090';
export const SERVER_URL = local+"/iserver/services/traffictransferanalyst-sample/restjsr/traffictransferanalyst/Traffic-Changchun";;
export const TRANSPORTATION_ANALYST_URL =local+"/iserver/services/transportationanalyst-sample/rest/networkanalyst/RoadNet@Changchun";
export const MAP_URL = local+"/iserver/services/map-changchun/rest/maps/长春市区图";
export const BUFFER_URL = local+"/iserver/services/spatialanalyst-changchun/restjsr/spatialanalyst";
export const DATA_URL = local+"/iserver/services/data-changchun/rest/data";
export const NoRange = '全部';
