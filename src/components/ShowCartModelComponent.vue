<template>
  <div class="show-side-menu" v-show="showCartModelController">
    <button class="btn" @click="showCartOffModelController">
      <p>{{ carts.length }}</p>
      <i class="fa-solid fa-cart-shopping fa-2x"></i>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "showCartModelComponent",
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["showCartModelController", "showModelController", "carts"]),
  },
  methods: {
    ...mapMutations(["sideCartOffContent", "sideOffContent"]),
    showCartOffModelController() {
      this.sideCartOffContent(!this.showCartModelController);
      this.sideOffContent(!this.showModelController);
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

.show-side-menu {
  .btn {
    background-color: rgb(110, 173, 92);
    position: fixed;
    top: 300px;
    right: 0;
    z-index: 2;
    width: 40px;
    height: 70px;
    color: white;
    border-radius: 5px 0 0 5px;
    border: none;
    text-align: top;

    p {
      font-size: 18px;
      color: white;
      margin-bottom: 10px;
    }
  }
  .btn:hover {
    background-color: rgb(128, 189, 111);
  }
}
</style>
