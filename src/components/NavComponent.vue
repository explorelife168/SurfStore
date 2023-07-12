<template>
  <div class="nav">
    <div class="logo">
      <img src="../Pic/logo.jpeg" alt="" />
    </div>
    <div class="menu-area">
      <ul>
        <li><Router-link to="/">HOME</Router-link></li>
        <li>
          <Router-link to="/SurfBoards">SURFBOARDS</Router-link>
          <div class="drop-menu-1">
            <ul>
              <li>
                <Router-link to="/SurfBoards/ShortBoard"
                  >SHORTBOARDS</Router-link
                >
              </li>
              <li>
                <Router-link to="/SurfBoards/FunBoard">FUNBOARDS</Router-link>
              </li>
              <li>
                <Router-link to="/SurfBoards/LongBoard">LONGBOARDS</Router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Router-link to="/Fins">FINS</Router-link>
          <div class="drop-menu-2">
            <ul>
              <li>
                <Router-link to="/Fins/MTP">MTP FIN</Router-link>
              </li>
              <li>
                <Router-link to="/Fins/RP">RP FIN</Router-link>
              </li>
              <li>
                <Router-link to="/Fins/RLB">RLB FIN</Router-link>
              </li>
              <li>
                <Router-link to="/Fins/DTFLEX">DTFLEX FIN</Router-link>
              </li>
            </ul>
          </div>
        </li>
        <li><Router-link to="/Accessories">ACCESSORIES</Router-link></li>
        <li><Router-link to="/contact">CONTACT</Router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap");
* {
  margin: 0;
  margin: 0;
  box-sizing: border-box;
}
.nav {
  width: 100%;
  height: 200px;
  display: flex;

  .logo {
    width: 25%;
    img {
      width: 250px;
      margin: 30px 20px;
    }
  }
  .menu-area {
    width: 75%;
    > ul {
      display: flex;
      position: relative;
      height: 200px;
      align-items: center;

      > li {
        margin: 0 30px;
        list-style: none;
        a {
          color: black;
          font-size: 18px;
          text-decoration: none;
          margin: 0px 0px 0px 10px;
          font-family: "Open Sans", "HelveticaNeue-Light",
            "Helvetica Neue Light", "Helvetica Neue", "Helvetica", sans-serif;
        }
        .drop-menu-1,
        .drop-menu-2 {
          position: absolute;
          z-index: 100;
          background-color: rgb(255, 255, 255);

          ul {
            padding-inline-start: 0;

            li {
              width: 200px;
              display: none;
              list-style: none;
              margin: 15px 0;
            }
          }
        }
      }
    }
  }
}
.menu-area {
  ul > li:hover {
    > a {
      color: rgba(187, 230, 14, 0.697);
      transition: 0.2s;
    }
    .drop-menu-1,
    .drop-menu-2 {
      perspective: 2000px;

      ul {
        li {
          display: block;
          transform-origin: top center;
          opacity: 0;
        }
        li:nth-child(1) {
          animation: animate 300ms ease-in-out forwards;
          animation-delay: -150ms;
        }
        li:nth-child(2) {
          animation: animate 300ms ease-in-out forwards;
          animation-delay: 0ms;
        }
        li:nth-child(3) {
          animation: animate 300ms ease-in-out forwards;
          animation-delay: 150ms;
        }
        li:nth-child(4) {
          animation: animate 300ms ease-in-out forwards;
          animation-delay: 300ms;
        }
        li:nth-child(5) {
          animation: animate 300ms ease-in-out forwards;
          animation-delay: 450ms;
        }
      }
    }
  }
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-45deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
.drop-menu-1,
.drop-menu-2 {
  ul {
    li:hover {
      a {
        color: rgba(187, 230, 14, 0.697);
        transition: 0.2s;
      }
    }
  }
}
</style>
