import {defineStore} from "pinia";

export const useSettingStore = defineStore('setting', {
  state: () => ({
    map:{
      unit:'METER',
      decimal:2,
    },
    serviceMap:'云端',
    rightDrawerWidth: 300, // 右侧抽屉宽度
  }),
  getters: {
    getRightDrawerWidth(state){
      return state.rightDrawerWidth;
    },
    getServiceMap(state){
      return state.serviceMap;
    },
    getMapUnit(state){
      return state.map.unit;
    },
    getMapDecimal(state){
      return state.map.decimal;
    }
  },
  setters: {
    setRightDrawerWidth(state, width){
      state.rightDrawerWidth = width;
    },
    setMapUnit(state, unit){
      state.map.unit = unit;
    },
    setMapDecimal(state, decimal){
      state.map.decimal = decimal;
    }
  },
  persist: true
});
