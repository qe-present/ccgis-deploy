import {api} from "../boot/axios.js";

const url = "/place/v2/search";
const ak = "Nm6OVrNh6nj36njTpVnxnrHsGLZS9qGI";
const getInfo=async (query) => {
  let params = {
    query: query,
    region: "长春市",
    output: "json",
    ak: ak,
  };
  let result = await api.get(url, {
    params: params,
    headers:{
      "Access-Control-Allow-Origin": "*",
    }
  })
  return result.data.results[0]
}

export default getInfo;
const getPicture=async (uid) => {
  let params = {
    uid: uid,
    output: "json",
    ak: ak,
  };
  let result = await api.get(url, {
    params: params,
    headers:{
      "Access-Control-Allow-Origin": "*",
    }
  })
  return result.data.results[0]
}
