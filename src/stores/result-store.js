import {defineStore} from 'pinia';

export const useResultStore = defineStore('result', {
  state: () => ({
    resultLayer: null,
    selectedId: null,
  }),
  getters: {
    getResultLayer() {
      return this.resultLayer;
    },
  },
  actions: {
    addResultLayer(layer) {
      this.resultLayer.push(layer);
    },
    popResultLayer() {
      return this.resultLayer.pop();
    },
    getLength() {
      return this.resultLayer.getLayers().length;
    },
    setSelectedId(id) {
      this.selectedId = id;
    },
  }
});
