import {defineStore}  from 'pinia'

export const useOtherStore = defineStore('other', {
  state: () => ({
    nodeLayer: null,
    lineLayer: null,
    walkLayer: null,
    pointToLayer: [],
    nodes: [],
  }),
  getters: {
    getPointToLayer(state) {
      return state.pointToLayer;
    },
    getLineLayer(state) {
      return state.lineLayer;
    },
    getWalkLayer(state) {
      return state.walkLayer;
    },
    getNodeLayer(state) {
      return state.nodeLayer;
    },
    getNodes(state) {
      return state.nodes;
    }
  },
  setters: {
    setPointToLayer(state, pointToLayer) {
      state.pointToLayer = pointToLayer;
    },
    setLineLayer(state, lineLayer) {
      state.lineLayer = lineLayer;
    },
    setWalkLayer(state, walkLayer) {
      state.walkLayer = walkLayer;
    },
    setNodeLayer(state, nodeLayer) {
      state.nodeLayer = nodeLayer;
    },
    setNodes(state, nodes) {
      state.nodes = nodes;
    }
  },
  actions: {
    reset(map) {
      if(this.lineLayer){
        map.removeLayer(this.lineLayer)
      }
      if(this.walkLayer){
        map.removeLayer(this.walkLayer)
      }
      if(this.pointToLayer.length>0){
        this.pointToLayer.forEach(pt=>{
          map.removeLayer(pt)
        })
      }
      this.nodes = [];
    }
  }


})
