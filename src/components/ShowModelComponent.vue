<template>
  <div class="side-menu">
    <transition name="fade">
      <div class="box-shadow-content" v-show="showModelController">
        <div class="fixed-box-1">
          <!-- 選單上層Cart字樣以及關閉按鈕 -->
          <div class="car-title">
            <div class="title-name">
              <h3>Cart</h3>
            </div>
            <div class="close-button">
              <button @click="showOffModelController">X</button>
            </div>
          </div>
        </div>
        <div class="scroll-box">
          <!-- 清單 -->
          <div class="product-list">
            <ol>
              <li v-for="(cart, index) in carts" :key="cart.id">
                <!-- 購物車產品資訊(每項) -->
                <div class="product-information">
                  <!-- 產品資訊第一層 -->
                  <div class="leval-one">
                    <!-- 產品照片 -->
                    <div class="product-pic">
                      <img :src="require(`../assets/${cart.Img}`)" alt="" />
                    </div>
                    <!-- 產品名稱及規格 -->
                    <div class="product-name-size">
                      <div class="product-name">
                        <p>{{ cart.Name }}</p>
                      </div>
                      <div class="product-size" v-if="cart.Size">
                        <select name="size" id="">
                          <option
                            value=""
                            v-for="size in cart.Size"
                            :key="size"
                          >
                            {{ size }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- 產品資訊第二層 -->
                  <div class="leval-two">
                    <!-- 品數量＆價格產 -->
                    <div class="product-quantity-price">
                      <!-- 產品數量 -->
                      <div class="product-quantity">
                        <button
                          @click="
                            valueController(index, -1, -carts[index].Price)
                          "
                        >
                          -
                        </button>
                        <input
                          @change="(e) => inputHandler(e, index)"
                          :value="cart.quantity"
                          :id="cart.id"
                        />
                        <button
                          @click="
                            valueController(index, 1, +carts[index].Price)
                          "
                        >
                          +
                        </button>
                      </div>
                      <!-- 產品價格 -->
                      <div class="product-price">
                        <p>$ {{ cart.Price }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="fixed-box-2">
          <!-- 產品總金額 -->
          <div class="product-price-total">
            <div class="subtotal">
              <p>SUBTOTAL</p>
            </div>
            <div class="total-price">
              <p>${{ totalPrice }}</p>
            </div>
          </div>
          <!-- 產品折扣 -->
          <div class="discount">
            <p>Shipping and discount codes are added at checkout.</p>
          </div>
          <!-- 結帳 -->
          <div class="checkout">
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "showModelComponent",
  data: function () {
    return {};
  },
  computed: {
    ...mapState([
      "carts",
      "showCartModelController",
      "showModelController",
      "totalPrice",
    ]),
    // showModelController() {
    //   return this.$store.state.showModelController;
    // },
    // carts() {
    //   return this.$store.state.carts;
    // },
  },
  methods: {
    ...mapMutations([
      "plusCarts",
      "inputCarts",
      "sideOffContent",
      "sideCartOffContent",
    ]),

    showOffModelController() {
      this.sideOffContent(false);
      this.sideCartOffContent(!this.showCartModelController);
      // this.$store.commit("sideOffContent", false);
    },

    valueController(index, val, total) {
      this.plusCarts({ index, val, total });
    },
    inputHandler(e, index) {
      if (
        !isNaN(e.target.value) &&
        e.target.value.length != 0 &&
        e.target.value != 0 &&
        e.target.value > 0 &&
        e.target.value % 1 === 0
      ) {
        this.inputCarts({ index, value: parseInt(e.target.value) });
      } else {
        alert("請輸入數字");
        e.target.value = this.carts[index].quantity;
      }
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.side-menu {
  .box-shadow-content {
    width: 350px;
    height: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    right: 0px;
    box-shadow: -15px 0px 10px -15px #000;
    z-index: 2;

    .fixed-box-1 {
      width: 350px;
      background-color: rgb(255, 255, 255);
      position: fixed;
      height: 8%;
      right: 0px;
      top: 0px;
      z-index: 1;

      .car-title {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-name {
          margin: 0 15px;
          h3 {
            font-size: 14px;
            font-weight: 600;
            color: gray;
          }
        }
        .close-button {
          margin: 0 15px;
          button {
            font-size: 20px;
            width: 20px;
            background-color: white;
            border: none;
            color: gray;
          }
          button:hover {
            transform: scale(1.2, 1.2);
            transition: transform 0.3s linear;
          }
        }
      }
    }
    .scroll-box {
      width: 350px;
      background-color: rgb(255, 255, 255);
      height: 70%;
      position: fixed;
      right: 0px;
      bottom: 22%;
      display: flex;
      flex-direction: column;
      z-index: 1;
      .product-list {
        overflow: auto;

        li {
          list-style: none;
          .product-information {
            margin: 5px 0;
            // 產品資訊第一層
            .leval-one {
              display: flex;
              justify-content: space-around;
              align-items: center;
              //產品照片
              .product-pic {
                img {
                  width: 70px;
                }
              }
              //產品名稱及規格
              .product-name-size {
                .product-name {
                  width: 230px;
                  p {
                    font-size: 14px;
                  }
                }
                .product-size {
                  margin: 5px 0;

                  p {
                    font-size: 9px;
                  }
                }
              }
            }
            .leval-two {
              .product-quantity-price {
                display: flex;
                justify-content: space-between;

                .product-quantity {
                  position: relative;
                  left: 108px;
                  input {
                    float: left;
                    color: black;
                    width: 45px;
                    height: 30px;
                    font-size: 16px;
                    text-align: center;
                    border: none;
                    border-radius: 0;
                    border-top: 1px solid #767676;
                    border-bottom: 1px solid #767676;
                  }
                  button {
                    color: #4c4c4c;
                    height: 30px;
                    float: left;
                    line-height: 16px;
                    width: 26px;
                    background: transparent;
                    cursor: pointer;
                    font-size: 18px;
                    text-align: center;
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                    border: 1px solid #767676;
                  }
                }
                .product-price {
                  margin: 0 10px;
                  p {
                    font-size: 14px;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
    .fixed-box-2 {
      width: 350px;
      background-color: white;
      height: 22%;
      position: fixed;
      right: 0px;
      bottom: 0px;
      z-index: 1;

      .product-price-total {
        display: flex;
        justify-content: space-between;
        .subtotal {
          margin: 10px;
          p {
            font-size: 14px;
          }
        }
        .total-price {
          margin: 10px;
          p {
            font-size: 14px;
          }
        }
      }
      .discount {
        p {
          font-size: 12px;
          text-align: center;
        }
      }
      .checkout {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 18px 0;
        button {
          width: 300px;
          height: 40px;
          background-color: rgb(110, 173, 92);
          color: white;
          border: none;
          font-size: 16px;
        }
        button:hover {
          background-color: rgb(128, 189, 111);
        }
      }
    }
  }
  //side-menu-scroll
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(188, 188, 188, 0.769);
    border-radius: 10px;
  }
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transform: translateX(350px);
  transition: 0.5s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transform: translateX(350px);
  transition: 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
