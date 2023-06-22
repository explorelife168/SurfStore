import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import axios from "axios";
const store = new Vuex.Store({
  strict: true,
  state: {
    contents: [],
    showModelControler: false,
    products: [],
    isShow: true,
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    addContact(state, data) {
      state.contents.push(data);
    },
    sideContent(state, data) {
      state.showModelControler = data;
    },
    sideOffContent(state, data) {
      state.showModelControler = data;
    },
    isShowContent(state, data) {
      state.isShow = data;
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
