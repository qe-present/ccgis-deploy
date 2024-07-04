import {MAP_URL} from "src/constant/data.js";

/**
 *
 * @param L leaflet
 * @param control 是否有控件，默认没有
 * @param minimap 是否需要鹰眼图，默认需要
 * @param langage 设置语言，默认中文
 * @param minZoom 设置最小缩放级别，默认1
 * @param baseUrl 设置地图服务地址，默认长春市区图
 * @returns {*}
 * @constructor
 */
const GetMap=(
  control,
  minimap=true,
  langage='zh',
  minZoom=1,
  baseUrl=MAP_URL
) =>{
  let map = L.map('map', {
    crs: new L.supermap.CRS.NonEarthCRS({
      bounds: L.bounds([48.4, -7668.25], [8958.85, -55.58]),
      origin: L.point(48.4, -55.58)
    }),
    center: [-3375, 5105],
    zoom: 3,
    attributionControl:false
  });
  L.control.scale().addTo(map);
  new L.supermap.TiledMapLayer(baseUrl, {minZoom: minZoom, noWrap: true}).addTo(map);
  if (minimap) {
    let osm2 = new L.supermap.TiledMapLayer(baseUrl, {minZoom: 0, noWrap: true});
    L.control.minimap(osm2, /// 鹰眼图层
      {
        position: 'bottomright',
        mapOptions: {logoControl: false}, toggleDisplay: true
      }
    ).addTo(map);
  }
  if (control) {
    map.pm.addControls(control)
  }
  if (langage) {
    map.pm.setLang(langage); // 语言切换
  }

  return map;

}
export default GetMap;
