import {defineStore} from "pinia";

export const useRescueStore = defineStore('rescue', {
  state: () => ({
    map: null,
    chooseLayer: null,
    bufferLayer: null,
    pointLayer: null,
    rescueLineLayer: null,
    markerLayer: null,
  }),
  getters: {
    getMarkerLayer(state) {
      return state.markerLayer;
    },
    getMap(state) {
      return state.map;
    },
    getChooseLayer(state) {
      return state.chooseLayer;
    },
    getBufferLayer(state) {
      return state.bufferLayer;
    },
    getPointLayer(state) {
      return state.pointLayer;
    },
    getRescueLineLayer(state) {
      return state.rescueLineLayer;
    }

  },
  setters: {
    setMarkerLayer(state, markerLayer) {
      state.markerLayer = markerLayer;
    },
    setBufferLayer(state, bufferLayer) {
      state.bufferLayer = bufferLayer;
    },
    setPointLayer(state, pointLayer) {
      state.pointLayer = pointLayer;
    },
    setMap(state, map) {
      state.map = map;
    },
    setChooseLayer(state, chooseLayer) {
      state.chooseLayer = chooseLayer;
    },
    setRescueLineLayer(state, rescueLineLayer) {
      state.rescueLineLayer = rescueLineLayer;
    }
  }

});
