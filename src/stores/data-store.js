import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: {},
    bounds: [],
    polygon: [],
    type: '',
    map: null,
    radius: 0,
    circleLayer: null,
  }),
  getters: {
    getCircleLayer() {
      return this.circleLayer;
    },
    getRadius() {
      return this.radius;
    },
    getData() {
      return this.data;
    },
    getMap() {
      return this.map;
    }
  },
  setters: {
    setCircleLayer(circleLayer) {
      this.circleLayer = circleLayer;
    },
    setRadius(radius) {
      this.radius = radius;
    },
    setData(data) {
      this.data = data;
    },
    setMap(map) {
      this.map = map;
    },

  },
  mutations: {
  },
  actions: {
    isAvailable(text) {
      switch (this.type){
        case 'Rectangle':
        case 'Polygon':
          return text==='多边形';
        case '全部':
          return true;
        case 'Marker':
          return text==='圆';
        default:
          return false;
      }
    }
  }
});
