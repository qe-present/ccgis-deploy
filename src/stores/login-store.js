import {defineStore} from "pinia";

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: null,

  }),
  setters: {
    setToken(token) {
      this.token = token;
    },
  },
  getters: {
    getToken() {
      return this.token;
    },
  },
  actions: {
    logout() {
      this.token = null;
    },
  },
  persist: true,
});
