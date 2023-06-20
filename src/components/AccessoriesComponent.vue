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
        <div class="item-01" v-for="product in products" :key="product.id">
          <div class="pic-acc-01">
            <img :src="fn(product.Img)" />
          </div>
          <div class="product-name-acc">
            <h1>{{ product.Name }}</h1>
          </div>
          <div class="product-price-acc">
            <p>${{ product.Price }}</p>
          </div>
          <div class="product-options-acc">
            <select name="bird sticker" id="">
              <option value="" selected>White</option>
              <option value="">Red</option>
              <option value="">Dark Blue</option>
              <option value="">Lite Blue</option>
              <option value="">Green</option>
              <option value="">Pink</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
        <!-- <div class="item-02">
          <div class="pic-acc-02">
            <img src="../Pic/Donald Takayama bird sticker (16pc.).png" alt="" />
          </div>
          <div class="product-name-acc">
            <h1>Donald Takayama bird sticker(16pc.)</h1>
          </div>
          <div class="product-price-acc">
            <p>$35.00</p>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-03" >
          <div class="pic-acc-03">
            <img
              src="../Pic/Donald Takayama oval logo sticker (Small) .png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>{{ item.Name }}</h1>
          </div>
          <div class="product-price-acc">
            <p>${{ item.Pirce }}</p>
          </div>
          <div class="product-options-acc">
            <select
              name="circle sticker"
              id=""
              v-for="Color in Size"
              :key="Color.id"
            >
              <option value="" selected>{{ Color.Color }}</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-04">
          <div class="pic-acc-04">
            <img
              src="../Pic/DT108 - Donald Takayama Shaping (Photo by Thomas Campbell) - Vintage White.png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>
              DT108 - Donald Takayama Shaping (Photo by Thomas Campbell) -
              Vintage White
            </h1>
          </div>
          <div class="product-price-acc">
            <p>$34.95</p>
          </div>
          <div class="product-options-acc">
            <select name="T-Shirt" id="">
              <option value="" selected>Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
              <option value="">X-large</option>
              <option value="">XX-large</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-05">
          <div class="pic-acc-05">
            <img
              src="../Pic/DT109 - Donald Takayama L:S Surfers Choice Teriyaki - White.png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>DT109 - Donald Takayama L/S Surfers Choice Teriyaki - White</h1>
          </div>
          <div class="product-price-acc">
            <p>$39.95</p>
          </div>
          <div class="product-options-acc">
            <select name="T-Shirt" id="">
              <option value="" selected>Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
              <option value="">X-large</option>
              <option value="">XX-large</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-06">
          <div class="pic-acc-06">
            <img
              src="../Pic/Donald Takayama Hoody Zipper Sweatshirt - Yellow Oval.png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>Donald Takayama Hoody Zipper Sweatshirt - Yellow Oval</h1>
          </div>
          <div class="product-price-acc">
            <p>$69.95</p>
          </div>
          <div class="product-options-acc">
            <select name="T-Shirt" id="">
              <option value="" selected>Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
              <option value="">X-large</option>
              <option value="">XX-large</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-07">
          <div class="pic-acc-07">
            <img
              src="../Pic/DT106 - Donald Takayama - Flag Tee - Burgundy S:S.png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>DT106 - Donald Takayama - Flag Tee - Burgundy S/S</h1>
          </div>
          <div class="product-price-acc">
            <p>$34.95</p>
          </div>
          <div class="product-options-acc">
            <select name="T-Shirt" id="">
              <option value="" selected>Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
              <option value="">X-large</option>
              <option value="">XX-large</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-08">
          <div class="pic-acc-08">
            <img
              src="../Pic/DT107 - Donald Takayama oval tee (red oval logo) - Black.png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>DT107 - Donald Takayama oval tee (red oval logo) - Black</h1>
          </div>
          <div class="product-price-acc">
            <p>$39.95</p>
          </div>
          <div class="product-options-acc">
            <select name="T-Shirt" id="">
              <option value="" selected>Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
              <option value="">X-large</option>
              <option value="">XX-large</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
        <!-- <div class="item-09">
          <div class="pic-acc-09">
            <img
              src="../Pic/DT102 - Donald Takayama oval tee (red oval logo) - White.png"
              alt=""
            />
          </div>
          <div class="product-name-acc">
            <h1>DT102 - Donald Takayama oval tee (red oval logo) - White</h1>
          </div>
          <div class="product-price-acc">
            <p>$34.95</p>
          </div>
          <div class="product-options-acc">
            <select name="T-Shirt" id="">
              <option value="" selected>Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
              <option value="">X-large</option>
              <option value="">XX-large</option>
            </select>
          </div>
          <div class="input-button">
            <div class="quantity">
              <input type="text" value="1" required />
            </div>
            <div class="add-button">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
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
    showModelControler() {
      //sidemenu-switch
      this.$store.commit("sideContent", true);
      //add sidemenu
      this.$store.dispatch("PRODUCT_ADD");
    },
    fn(img) {
      console.log(img);
      return require("../assets/" + img);
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
      // .item-02 {
      //   max-width: 240px;
      //   .pic-acc-02 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
      // .item-03 {
      //   max-width: 240px;
      //   .pic-acc-03 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }

      // .item-04 {
      //   margin: 25px 0;
      //   max-width: 240px;
      //   .pic-acc-04 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
      // .item-05 {
      //   max-width: 240px;
      //   margin: 25px 0;
      //   .pic-acc-05 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
      // .item-06 {
      //   max-width: 240px;
      //   margin: 25px 0;
      //   .pic-acc-06 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
      // .item-07 {
      //   margin: 25px 0;
      //   max-width: 240px;
      //   .pic-acc-07 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
      // .item-08 {
      //   max-width: 240px;
      //   margin: 25px 0;
      //   .pic-acc-08 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
      // .item-09 {
      //   max-width: 240px;
      //   margin: 25px 0;
      //   .pic-acc-09 {
      //     img {
      //       width: 240px;
      //     }
      //   }
      //   .product-name-acc {
      //     width: 240px;
      //     h1 {
      //       font-size: 18px;
      //     }
      //   }
      //   .product-price-acc {
      //     p {
      //       font-size: 14px;
      //       margin: 10px 0;
      //       font-weight: 100px;
      //     }
      //   }
      //   .product-options-acc {
      //     select {
      //       width: 240px;
      //       height: 30px;
      //     }
      //   }
      //   .input-button {
      //     display: flex;
      //     margin: 20px 0;
      //     width: 240px;
      //     .quantity {
      //       input {
      //         text-align: center;
      //         width: 50px;
      //         height: 40px;
      //         font-size: 16px;
      //       }
      //     }
      //     .add-button {
      //       button {
      //         width: 190px;
      //         height: 40px;
      //         background-color: rgb(110, 173, 92);
      //         color: white;
      //         border: none;
      //         font-size: 16px;
      //       }
      //       button:hover {
      //         background-color: rgb(128, 189, 111);
      //       }
      //     }
      //   }
      // }
    }
  }
}
</style>
