import {defineStore} from "pinia";

export const useChooseStore = defineStore('chooseStore', {
    state: () => ({
      points:{}

    }),
    getters: {
      getPathList(state){
        return state.pathList;
      }
    },
    setters: {
      setPathList(state, pathList) {
        state.pathList = pathList;
      }
    }
});
