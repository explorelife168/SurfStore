<template>
  <div class="nav-sideMenu">
    <transition name="fade">
      <div class="side-menu" v-if="showSideMenu" ref="menu">
        <ul>
          <li><Router-link to="/">HOME</Router-link></li>
          <li><Router-link to="/SurfBoards">SURFBOARDS</Router-link></li>
          <li><Router-link to="/Fins">FINS</Router-link></li>
          <li><Router-link to="/Accessories">ACCESSORIES</Router-link></li>
          <li><Router-link to="/contact">CONTACT</Router-link></li>
        </ul>
      </div>
    </transition>
    <div class="nav">
      <div class="logo-390">
        <img src="../Pic/logo.jpeg" alt="" />
      </div>
      <div class="nav-bar">
        <div class="button-on">
          <button type="button" @click="showSideMenuController">
            <i class="fa-solid fa-bars fa-3x"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="side-menu-background" v-if="showSideMenu"></div>
  </div>
</template>

<script>
export default {
  name: "Nav390Component",
  data: function () {
    return {
      showSideMenu: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    showSideMenuController() {
      this.showSideMenu = !this.showSideMenu;
    },
    handleClickOutside(event) {
      if (
        this.showSideMenu &&
        !this.$refs.menu.contains(event.target) &&
        !event.target.closest("button")
      ) {
        this.showSideMenu = false;
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
.nav-sideMenu {
  .nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    .logo-390 {
      margin: 10px;
      img {
        height: 35px;
      }
    }
    .nav-bar {
      .button-on {
        height: 30px;
        button {
          margin: 10px;
          border: none;
          background-color: white;
          cursor: pointer;
        }
      }
    }
  }

  .side-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 250px;
    height: 100%;
    z-index: 10;
    background-color: rgb(255, 255, 255);

    ul {
      li {
        list-style: none;
        a {
          display: block;
          font-size: 20px;
          color: black;
          padding: 20px 10px;
          text-decoration: none;
          border-bottom: 1px solid black;
          font-family: "Open Sans", "HelveticaNeue-Light",
            "Helvetica Neue Light", "Helvetica Neue", "Helvetica", sans-serif;
        }
      }
    }
  }
}
// @keyframes slide {
//   0% {
//     transform: translateX(-250px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(250px);
//     opacity: 1;
//   }
// }
.side-menu-background {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0.5);
  animation: g 0.5s linear forwards;
}

@keyframes g {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter {
  opacity: 0;
  transform: translateX(-250px);
}
.fade-enter-active {
  transition: 0.5s ease;
}
.fade-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-250px);
}
</style>
