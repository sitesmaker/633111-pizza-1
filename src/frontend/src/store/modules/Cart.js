import misc from "@/static/misc.json";

import {
  PIZZA_ADD_CART,
  UPDATE_COUNT,
  GET_STORAGE,
} from "@/store/mutation-types.js";

export default {
  namespaced: true,
  state: {
    pizzes: [],
    misc: misc,
  },
  getters: {
    getPizzes(state) {
      return state.pizzes;
    },
    getAllNamesPizza(state) {
      return state.pizzes.map((el) => el.name);
    },
    getTotalPrice(state) {
      let sum = 0;

      if (state.pizzes) {
        state.pizzes.forEach((el) => {
          sum += el.totalPrice;
        });
      }

      return sum;
    },
  },
  mutations: {
    [PIZZA_ADD_CART](state, payload) {
      payload.id = state.pizzes.length + 1;

      let webStorageData = JSON.parse(localStorage.getItem("pizzes"));

      if (!webStorageData) {
        let pizza = [payload];
        localStorage.setItem("pizzes", JSON.stringify(pizza));
      } else {
        webStorageData.push(payload);
        localStorage.setItem("pizzes", JSON.stringify(webStorageData));
      }
    },
    [UPDATE_COUNT](state, payload) {
      let id = payload.id,
        count = payload.count;
      state.pizzes.forEach((item, index, array) => {
        if (item.id === id) {
          item.count = count;
          item.totalPrice = item.price * item.count;
          localStorage.setItem("pizzes", JSON.stringify(array));
        }
        if (item.count < 1) {
          array.splice(index, 1);
          localStorage.setItem("pizzes", JSON.stringify(array));
        }
      });
    },
    [GET_STORAGE](state, payload) {
      state.pizzes = payload;
    },
  },
};
