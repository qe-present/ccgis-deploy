import {defineStore} from 'pinia';

export const useTravelStore = defineStore('travel', {
  state: () => ({
    markerLayer: null,
    map: null,
    endLayer: null,
    startLayer: null,
    startSure: null,
    endSure: null,
    startName: null,
    endName: null,
    anotherLayer: null
  }),
  getters: {
    getMap(){
      return this.map
    },
    getAnotherLayer() {
      return this.anotherLayer;
    },
    getStartName() {
      return this.startName;
    },
    getEndName() {
      return this.endName;
    }
  },
  actions:{
    reset() {
      if (this.markerLayer){
        this.markerLayer.clearLayers();
        console.log(this.markerLayer)
      }
      if (this.startLayer){
        this.startLayer.clearLayers();
      }
      if (this.endLayer){
        this.endLayer.clearLayers();
      }
      if (this.anotherLayer){
        this.anotherLayer.clearLayers();
      }
      this.markerLayer = null;
      this.startSure = false;
      this.endSure = false;
      this.startLayer = null;
      this.endLayer = null;
      this.startName = null;
      this.endName = null;
      this.anotherLayer = null;

    },
    setStartSure(sure) {
      this.startSure = sure;
    },
    setEndSure(sure) {
      this.endSure = sure;
    },
    getStartSure() {
      return this.startSure;
    },
    getEndSure() {
      return this.endSure;
    },
    setMap(map) {
      this.map = map;
    },

    getMarkerLayer() {
      return this.markerLayer;
    },
    setMarkerLayer(layer) {
      this.markerLayer = layer;
    },
    setEndLayer(layer) {
      this.endLayer = layer;
    },
    getEndLayer() {
      return this.endLayer;
    },
    setStartLayer(layer) {
      this.startLayer = layer;
    },
    getStartLayer() {
      return this.startLayer;
    },
    setStartName(name) {
      this.startName = name;
    },

    setEndName(name) {
      this.endName = name;
    }

  }
});
