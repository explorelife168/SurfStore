<template>
  <div class="nav">
    <div class="logo">
      <img src="../Pic/logo.jpeg" alt="" />
    </div>
    <div class="menu-area">
      <ul>
        <li><a href="#">HOME</a></li>
        <li>
          <a href="#">SURFBOARDS</a>
          <div class="drop-menu-1">
            <ul>
              <li><a href="#">SHORTBOARDS</a></li>
              <li><a href="#">FUNBOARDS</a></li>
              <li><a href="#">LONGBOARDS</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">FINS</a>
          <div class="drop-menu-2">
            <ul>
              <li><a href="#">MTP FIN</a></li>
              <li><a href="#">RP FIN</a></li>
              <li><a href="#">RLB FIN</a></li>
              <li><a href="#">DT FLEX FIN</a></li>
            </ul>
          </div>
        </li>
        <li><a href="#">ACCESSORIES</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PraComponent",
};
</script>

<style lang="scss">
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
      width: 300px;
      margin: 20px;
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
          font-size: 24px;
          text-decoration: none;
          font-family: "Open Sans", "HelveticaNeue-Light",
            "Helvetica Neue Light", "Helvetica Neue", "Helvetica", sans-serif;
        }
        .drop-menu-1,
        .drop-menu-2 {
          position: absolute;
          ul {
            padding-inline-start: 0;
            li {
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
// .menu-area {
//   width: 100%;
//   height: 100px;
//   > ul {
//     padding-inline-start: 0;
//     display: flex;
//     justify-content: center;
//     list-style: none;
//     > li {
//       position: relative;
//       margin: 50px 30px;
//       a {
//         text-decoration: none;
//         font-size: 20px;
//         color: black;
//       }
//     }
//   }
// }
// .drop-menu {
//   display: block;
//   position: absolute;
//   ul {
//     list-style: none;
//     padding-left: 0px;
//     display: inline;
//     li {
//       display: none;
//       white-space: nowrap;
//       margin: 20px 0;
//     }
//   }
// }

// .menu-area li:hover {
//   background: #029db5;
//   > .drop-menu {
//     perspective: 1000px;
//     li {
//       display: block;
//       transform-origin: top center;
//       opacity: 0;
//     }
//     li:nth-child(1) {
//       animation: animate 300ms ease-in-out forwards;
//       animation-delay: -150ms;
//     }
//     li:nth-child(2) {
//       animation: animate 300ms ease-in-out forwards;
//       animation-delay: -0ms;
//     }
//     li:nth-child(3) {
//       animation: animate 300ms ease-in-out forwards;
//       animation-delay: 150ms;
//     }
//     li:nth-child(4) {
//       animation: animate 300ms ease-in-out forwards;
//       animation-delay: 300ms;
//     }
//     li:nth-child(5) {
//       animation: animate 300ms ease-in-out forwards;
//       animation-delay: 450ms;
//     }
//   }
// }

// @keyframes animate {
//   0% {
//     opacity: 0;
//     transform: rotateX(-90deg);
//   }
//   50% {
//     transform: rotateX(20deg);
//   }
//   100% {
//     opacity: 1;
//     transform: rotateX(0deg);
//   }
//
</style>
