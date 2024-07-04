import axios from 'axios';

const getInputTips = async (keywords) => {
  let params = {
    platform: 'Android',
    s: 'rsv3',
    key: '041770e1e2d64b31073d0924616263ea',
    sdkversion: '2.0.5.27',
    jscode: 'f9f978e15785c004f09b683c404cadb7',
    city: '长春市',
    keywords: keywords,
    callback: 'jsonp_917588_1719485451498'
  };
  let url = 'https://restapi.amap.com/v3/assistant/inputtips';
  return (await axios.get(url, {params})).data
}
// let a=await getInputTips('万达');
//
// console.log(a);


