import { defineStore} from "pinia";

export const useBusSolutionStore = defineStore('bus-solution', {
  state: () => ({
    transGuide: null,
    transSolutions: null,
    transferTactic: null,
    transferPreference: null,
    count: 6,
    id: null,
    routeLayer: null,
  }),
  setters: {
    setTransferPreference(preference) {
      this.transferPreference = preference;
    },
    setTransferTactic(tactic) {
      this.transferTactic = tactic;
    },
    setCount(count) {
      this.count = count;
    },
    setRouteLayer(layer) {
      this.routeLayer = layer;
    },
    setId(id) {
      this.id = id;
    },
    setTransGuide(guide) {
      this.transGuide = guide;
    },
    setTransSolutions(solutions) {
      this.transSolutions = solutions;
    }
  },
  getters: {
    getTransferPreference() {
      return this.transferPreference;
    },
    getTransferTactic() {
      return this.transferTactic;
    },
    getCount() {
      return this.count;
    },
    getRouteLayer() {
      return this.routeLayer;
    },
    getId() {
      return this.id;
    },
    getTransGuide() {
      return this.transGuide;
    },
    getTransSolutions() {
      return this.transSolutions;
    }
  },
  actions:{
    clear() {
      this.transGuide = null;
      this.transSolutions = null;
      this.count = 6;
      this.id = null;
      this.routeLayer.clearLayers();
    }
  }
});
