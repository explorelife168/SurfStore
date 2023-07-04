<template>
  <div class="content-acc">
    <div class="text-acc">
      <div class="title">
        <h3>Surfboards by Donald Takayama apparel and accessories</h3>
      </div>
      <div class="article">
        <p>
          Currently all Surfboards by Donald Takayama tees and sweatshirts are
          locally printed in California by our friend Forward Screen Printing,
          who is specialized in environmentally friendly screen printing, We use
          the high quality100% cotton or 100% organic cotton tees made in
          California. We focus on the quality and environmental sustainability.
        </p>
        <p>
          A variety of Surfboards by Donald Takayama tees, sweatshirts and hats
          are available at our authorized dealers. If you wish to purchase,
          please contact our authorized dealers near you or go to
          <a href="https://noahkaoi.com/">Noah Ka Oi online store</a>.
        </p>
      </div>
    </div>
    <div class="buyOnline">
      <div class="title-buy">
        <h3>Buy Online</h3>
      </div>
      <div class="menu-acc">
        <div
          class="item-01"
          v-for="(product, index) in products"
          :key="product.id"
        >
          <div class="pic-acc-01">
            <img :src="require(`../assets/${product.Img}`)" />
          </div>
          <div class="product-name-acc">
            <h1>{{ product.Name }}</h1>
          </div>
          <div class="product-price-acc">
            <p>${{ product.Price }}</p>
          </div>
          <div class="product-options-acc" v-show="product.Size">
            <select name="" id="">
              <option value="" v-for="item in product.Size" :key="item.id">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" v-model="product.quantityKey" required />
            </div>
            <div class="add-button">
              <button
                @click="
                  showModelController();
                  addInCarts(index);
                "
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "AccessoriesComponent",
  data: function () {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    showModelController() {
      //sidemenu-switch
      this.$store.commit("sideContent", true);
      //add sidemenu
    },
    addInCarts(index) {
      this.$store.commit("addCarts", this.products[index]);
    },
  },
  mounted() {
    this.$store.dispatch("PRODUCT_READ");
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.content-acc {
  max-width: 840px;
  margin: 0 auto;
  .text-acc {
    padding: 0 10px;
    .title {
      h3 {
        font-size: 24px;
        font-weight: 350;
        color: rgba(125, 153, 16, 0.697);
        margin: 20px 0 0 0;
      }
    }
    .article {
      p {
        margin: 20px 0 0 0;
        font-weight: 200;
        a {
          color: rgba(125, 153, 16, 0.697);
        }
      }
    }
  }
  .buyOnline {
    padding: 0 10px;
    .title-buy {
      position: relative;
      h3 {
        font-size: 24px;
        font-weight: 350;
        color: rgba(125, 153, 16, 0.697);
        margin: 40px 0 0 0;
      }
    }
    .title-buy::before {
      content: "";
      position: absolute;
      width: 820px;
      height: 3px;
      background-color: rgba(125, 153, 16, 0.697);
      top: -20px;
    }
    .menu-acc {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item-01 {
        max-width: 240px;
        .pic-acc-01 {
          img {
            width: 240px;
          }
        }
        .product-name-acc {
          width: 240px;
          h1 {
            font-size: 18px;
          }
        }
        .product-price-acc {
          p {
            font-size: 14px;
            margin: 10px 0;
            font-weight: 100px;
          }
        }
        .product-options-acc {
          select {
            width: 240px;
            height: 30px;
          }
        }
        .input-button {
          display: flex;
          margin: 20px 0;
          width: 240px;
          .quantity {
            input {
              text-align: center;
              width: 50px;
              height: 40px;
              font-size: 16px;
            }
          }
          .add-button {
            button {
              width: 190px;
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
    }
  }
}
</style>
