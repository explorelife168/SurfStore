<template>
  <div class="container">
    <div class="title">
      <p><span>SurfBoards</span></p>
    </div>
    <!-- LONGBOARD -->
    <div class="longboard">
      <div class="lb">
        <p><span>LongBoards</span></p>
      </div>
      <div class="lbpic">
        <div class="modelt">
          <router-link to="/SurfBoards/LongBoard/ModelT"
            ><img src="../Pic/Longboard-MODEL T.jpeg" alt=""
          /></router-link>
        </div>
        <div class="double">
          <router-link to="/SurfBoards/LongBoard/DoubleEnder"
            ><img src="../Pic/Longboard-DOUBLE ENDER.jpeg" alt=""
          /></router-link>
        </div>
        <div class="dt2x">
          <router-link to="/SurfBoards/LongBoard/DT2X"
            ><img src="../Pic/Longboard-DT2X.jpeg" alt=""
          /></router-link>
        </div>
        <div class="terramar">
          <router-link to="/SurfBoards/LongBoard/Terramar"
            ><img src="../Pic/Longboard-TERRAMAR.jpeg" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <!-- FUNBOARD -->
    <div class="funboard">
      <div class="fb">
        <p><span>FunBoards</span></p>
      </div>
      <div class="fbpic">
        <div class="howardmini">
          <router-link to="/SurfBoards/FunBoard/HowardMini"
            ><img src="../Pic/Funboard-HOWARD MINI.jpeg" alt=""
          /></router-link>
        </div>
        <div class="scorpion-f">
          <router-link to="/SurfBoards/FunBoard/Scorpion"
            ><img src="../Pic/Funboard-SCORPION.jpeg" alt=""
          /></router-link>
        </div>
        <div class="stone">
          <router-link to="/SurfBoards/FunBoard/StoneSteps"
            ><img src="../Pic/Funboard-STONE STEPS.jpeg" alt=""
          /></router-link>
        </div>
        <div class="stone2">
          <router-link to="/SurfBoards/FunBoard/StoneSteps2"
            ><img src="../Pic/Funboard-STONE STEPS 2.jpeg" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <!-- SHORTBOARD -->
    <div class="shortboard">
      <div class="sb">
        <p><span>ShortBoards</span></p>
      </div>
      <div class="content">
        <div class="sbpic">
          <div class="humu">
            <router-link to="/SurfBoards/ShortBoard/HumuFish"
              ><img src="../Pic/Shortboard-HUMU FISH.jpeg" alt=""
            /></router-link>
          </div>
          <div class="scorpion-s">
            <router-link to="/SurfBoards/ShortBoard/Scorpion"
              ><img src="../Pic/Shortboard-SCORPION.jpeg" alt=""
            /></router-link>
          </div>
          <div class="scorpion2-s">
            <router-link to="/SurfBoards/ShortBoard/Scorpion2"
              ><img src="../Pic/Shortboard-SCORPION2.jpeg" alt=""
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

//Iphone12 pro
.container {
  width: 390px;
  display: flex;
  flex-wrap: wrap;
  .title {
    width: 390px;
    height: 80px;
    margin: 10px 0 0 0;

    span {
      color: rgba(125, 153, 16, 0.697);
      font-size: 20px;
      padding: 0 10px;
    }
  }

  // longboard
  .longboard {
    width: 390px;
    position: relative;

    .lb {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .lbpic {
      display: flex;
      flex-wrap: wrap;
      width: 390px;
      justify-content: center;

      .modelt {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .double {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .dt2x {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .terramar {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .longboard::before {
    content: "";
    position: absolute;
    width: 370px;
    height: 3px;
    background-color: rgba(125, 153, 16, 0.697);
    top: -55px;
    left: 10px;
  }
  // funboard
  .funboard {
    width: 390px;
    margin: 20px 0 0 0;
    .fb {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .fbpic {
      display: flex;
      flex-wrap: wrap;
      width: 390px;
      justify-content: center;
      .howardmini {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .scorpion-f {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .stone {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .stone2 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  // shortboard
  .shortboard {
    width: 390px;
    margin: 20px 0 0 0;

    .sb {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .content {
      width: 390px;
      display: flex;
      justify-content: center;
      .sbpic {
        display: flex;
        flex-wrap: wrap;
        width: 370px;

        .humu {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .scorpion-s {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .scorpion2-s {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
