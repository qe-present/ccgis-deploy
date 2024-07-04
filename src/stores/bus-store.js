import {defineStore} from 'pinia';

export const useBusStore = defineStore('bus', {
  state: () => ({
    markerLayer: null,
    map: null,
    endLayer: null,
    startLayer: null,
    startSure: false,
    endSure: false,
    startName: null,
    endName: null,
    startLine: null,
    endLine: null,

  }),
  getters: {
    getStartName() {
      return this.startName;
    },
    getEndName() {
      return this.endName;
    },
    getStartLine() {
      return this.startLine;
    },
    getEndLine() {
      return this.endLine;
    },
    getStartSure() {
      return this.startSure;
    },
    getEndSure() {
      return this.endSure;
    }
  },
  actions:{
    setStartLine(line) {
      this.startLine = line;
    },
    setEndLine(line) {
      this.endLine = line;
    },
    setStartSure(sure) {
      this.startSure = sure;
    },
    setEndSure(sure) {
      this.endSure = sure;
    },
    setMap(map) {
      this.map = map;
    },
    getMap() {
      return this.map;
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
