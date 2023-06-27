import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import axios from "axios";
const store = new Vuex.Store({
  strict: true,
  state: {
    carts: [],
    showModelController: false,
    products: [],
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    addCarts(state, data) {
      state.carts.push(data);
    },
    plusCarts(state, { qua }) {
      state.carts.quantity = qua;
    },
    sideContent(state, data) {
      state.showModelController = data;
    },
    sideOffContent(state, data) {
      state.showModelController = data;
    },
  },
  actions: {
    PRODUCT_READ: (context) => {
      return axios.get("http://localhost:3000/products").then((res) => {
        context.commit("setProducts", res.data);
      });
    },
  },
});
export default store;
