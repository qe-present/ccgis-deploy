import CryptoJS from 'crypto-js';

/**
 * 获取加密后的结果
 * @param username 用户名
 * @param password 密码
 * @param key
 * @returns {{result: *, isSuccess: boolean}}
 */
export const getEncryptedResult = (username, password,key='123456') => {
  let inputValue=CryptoJS.SHA256(username+password+key).toString();
  let NowValue=CryptoJS.SHA256('ccgis'+'123456'+key).toString();
  if(inputValue===NowValue){
    return {isSuccess:true,token:inputValue};
  }else{
    return {isSuccess:false,token:null};
  }
}

