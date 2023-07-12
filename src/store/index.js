import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: true,
  state: {
    carts: [],
    showModelController: false,
    showCartModelController: true,
    totalPrice: 0,
    products: [
      {
        id: 1,
        Name: "Donald Takayama bird sticker",
        Price: 3.0,
        Img: "Donald Takayama bird sticker.png",
        quantity: 1,
        quantityKey: 1,
        Size: [
          "White",
          "Red",
          "Yellow",
          "Dark Blue",
          "Lite Blue",
          "Green",
          "Pink",
        ],
      },
      {
        id: 2,
        Name: "Donald Takayama bird sticker(16pc.)",
        Price: 35.0,
        Img: "Donald Takayama bird sticker (16pc.).png",
        quantity: 1,
        quantityKey: 1,
      },
      {
        id: 3,
        Name: "Donald Takayama oval logo sticker (small)",
        Price: 3.0,
        Img: "Donald Takayama oval logo sticker (Small) .png",
        quantity: 1,
        quantityKey: 1,
        Size: [
          "Yellow x Black",
          "Red x Black",
          "Blue x Black",
          "White x Black",
        ],
      },
      {
        id: 4,
        Name: "DT108 - Donald Takayama Shaping (Photo by Thomas Campbell) - Vintage White",
        Price: 34.95,
        Img: "DT108 - Donald Takayama Shaping (Photo by Thomas Campbell) - Vintage White.png",
        quantity: 1,
        quantityKey: 1,
        Size: ["Small", "Medium", "Large", "X-large", "XX-large"],
      },
      {
        id: 5,
        Name: "DT109 - Donald Takayama L/S Surfers Choice Teriyaki - White",
        Price: 39.95,
        Img: "DT109 - Donald Takayama L:S Surfers Choice Teriyaki - White.png",
        quantity: 1,
        quantityKey: 1,
        Size: ["Small", "Medium", "Large", "X-large", "XX-large"],
      },
      {
        id: 6,
        Name: "Donald Takayama Hoody Zipper Sweatshirt - Yellow Oval",
        Price: 69.95,
        Img: "Donald Takayama Hoody Zipper Sweatshirt - Yellow Oval.png",
        quantity: 1,
        quantityKey: 1,
        Size: ["Small", "Medium", "Large", "X-large", "XX-large"],
      },
      {
        id: 7,
        Name: "DT106 - Donald Takayama - Flag Tee - Burgundy S/S",
        Price: 34.95,
        Img: "DT106 - Donald Takayama - Flag Tee - Burgundy S:S.png",
        quantity: 1,
        quantityKey: 1,
        Size: ["Small", "Medium", "Large", "X-large", "XX-large"],
      },
      {
        id: 8,
        Name: "DT107 - Donald Takayama oval tee (red oval logo) - Black",
        Price: 39.95,
        Img: "DT107 - Donald Takayama oval tee (red oval logo) - Black.png",
        quantity: 1,
        quantityKey: 1,
        Size: ["Small", "Medium", "Large", "X-large", "XX-large"],
      },
      {
        id: 9,
        Name: "DT102 - Donald Takayama oval tee (red oval logo) - White",
        Price: 34.95,
        Img: "DT102 - Donald Takayama oval tee (red oval logo) - White.png",
        quantity: 1,
        quantityKey: 1,
        Size: ["Small", "Medium", "Large", "X-large", "XX-large"],
      },
    ],
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
    // PRODUCT_READ: (context) => {
    //   return axios.get("http://localhost:3000/products").then((res) => {
    //     context.commit("setProducts", res.data);
    //   });
    // },
  },
});
export default store;
