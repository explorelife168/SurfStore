<template>
  <div class="nav">
    <div class="nav-bar">
      <button type="button" @click="showSideMenuController">
        <i :class="icon"></i>
      </button>
    </div>
    <div class="logo-390">
      <img src="../Pic/logo.jpeg" alt="" />
    </div>
    <div class="side-menu" v-show="showSideMenu"></div>
  </div>
</template>

<script>
export default {
  name: "Nav390Component",
  data: function () {
    return {
      showSideMenu: false,
      icon: "fa-solid fa-bars fa-3x",
    };
  },
  methods: {
    showSideMenuController() {
      this.showSideMenu = !this.showSideMenu;
      if (this.icon === "fa-solid fa-bars fa-3x") {
        this.icon = "fa-solid fa-x fa-3x";
      } else {
        this.icon = "fa-solid fa-bars fa-3x";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap");
* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

//iphone12pro
.nav {
  width: 390px;
  height: 120px;

  .nav-bar {
    button {
      position: relative;
      left: 10px;
      top: 10px;
      border: none;
      background-color: white;
      cursor: pointer;
    }
  }
  .logo-390 {
    text-align: center;
    height: 70px;
    margin: 20px 0;

    img {
      height: 70px;
    }
  }
}
</style>
