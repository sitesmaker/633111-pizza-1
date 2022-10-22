import Vue from "vue";
import Vuex from "vuex";
import Builder from "@/store/modules/Builder";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Builder: Builder,
  },
});
