import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import axios from "axios";
const store = new Vuex.Store({
  // strict: true,
  state: {
    carts: [],
    showModelController: false,
    showCartModelController: true,
    products: [],
    totalPrice: 0,
  },

  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    addCarts(state, data) {
      console.log(data);
      if (state.carts.indexOf(data) != -1) return;
      data.quantity = parseInt(data.quantityKey);
      state.carts.push(data);
      //商品金額加總
      state.totalPrice += data.Price * data.quantity;
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
    },
    plusCarts(state, data) {
      //商品數量加減
      state.carts[data.index].quantity += data.val;
      // console.log(data);
      if (state.carts[data.index].quantity == 0) {
        state.carts.splice(data.index, 1);
      }
      //金額加總
      state.totalPrice += data.total;
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
      // console.log(parseInt(data.total));
    },
    inputCarts(state, data) {
      state.carts[data.index].quantity = data.value;
    },
    //購物車開啟
    sideContent(state, data) {
      state.showModelController = data;
      state.showCartModelController = !data;
    },
    //購物車關閉
    sideOffContent(state, data) {
      state.showModelController = data;
    },
    //購物車icon
    sideCartOffContent(state, data) {
      state.showCartModelController = data;
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
