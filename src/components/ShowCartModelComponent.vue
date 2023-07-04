<template>
  <div class="show-side-menu">
    <button class="btn" @click="showCartOffModelController">
      <i class="fa-solid fa-cart-shopping"></i>
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
    ...mapState(["showCartModelController", "showModelController"]),
  },
  methods: {
    ...mapMutations(["sideCartOffContent", "sideCartOffContent"]),

    showCartOffModelController() {
      console.log("click");
      this.sideCartOffContent(false);

      // this.sideOffContent(!this.state.showModelController);
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
    background-color: white;
    position: fixed;
    top: 300px;
    right: 0;
    z-index: 2;
    width: 30px;
    height: 70px;
  }
}
</style>
