import {MAP_URL,DATA_URL} from "src/constant/data.js";


let param,response,features;
export const getBoundsData = async (bounds, place,sql) => {
  param = new L.supermap.QueryByBoundsParameters({
    queryParams: {
      name: `${place}@Changchun`,
      attributeFilter: sql,
    },
    bounds: bounds,
  });
  console.log({name: `${place}@Changchun`})
  response = await new L.supermap
    .QueryService(MAP_URL)
    .queryByBounds(param)
  return response.result.recordsets[0].features.features
}
export const getPolygonData = async (polygon, place, sql) => {
  param = new L.supermap.QueryByGeometryParameters({
    queryParams: {
      name: `${place}@Changchun`,
      attributeFilter: sql,
    },
    geometry: polygon,
  });
  response = await new L.supermap
    .QueryService(MAP_URL)
    .queryByGeometry(param)
  features = response.result.recordsets[0].features.features
  if (features.length > 0) {
    return features
  }
  return []
}
export const getNoRangeData=async (sql, place) => {
  let sqlParam = new L.supermap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: `${place}@Changchun`,
      attributeFilter: sql,
    },
    datasetNames: [`Changchun:${place}`],
    fromIndex: 0,
    toIndex: 1000000000,
  });
  let response = await new L.supermap
    .FeatureService(DATA_URL)
    .getFeaturesBySQL(sqlParam)
  features = L.geoJSON(response.result.features).toGeoJSON()
  if (features.features.length > 0) {
    return features.features
  }
  return []
}
