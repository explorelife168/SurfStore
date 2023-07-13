<template>
  <div class="container-390-02">
    <div class="title-390-02">
      <p><span>SurfBoards</span></p>
    </div>
    <!-- LONGBOARD -->
    <div class="longboard-390-02">
      <div class="lb-390-02">
        <p><span>LongBoards</span></p>
      </div>
      <div class="lbpic-390-02">
        <div class="modelt-390-02">
          <router-link to="/SurfBoards/LongBoard/ModelT"
            ><img src="../Pic/Longboard-MODEL T.jpeg" alt=""
          /></router-link>
        </div>
        <div class="double-390-02">
          <router-link to="/SurfBoards/LongBoard/DoubleEnder"
            ><img src="../Pic/Longboard-DOUBLE ENDER.jpeg" alt=""
          /></router-link>
        </div>
        <div class="dt2x-390-02">
          <router-link to="/SurfBoards/LongBoard/DT2X"
            ><img src="../Pic/Longboard-DT2X.jpeg" alt=""
          /></router-link>
        </div>
        <div class="terramar-390-02">
          <router-link to="/SurfBoards/LongBoard/Terramar"
            ><img src="../Pic/Longboard-TERRAMAR.jpeg" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <!-- FUNBOARD -->
    <div class="funboard-390-02">
      <div class="fb-390-02">
        <p><span>FunBoards</span></p>
      </div>
      <div class="fbpic-390-02">
        <div class="howardmini-390-02">
          <router-link to="/SurfBoards/FunBoard/HowardMini"
            ><img src="../Pic/Funboard-HOWARD MINI.jpeg" alt=""
          /></router-link>
        </div>
        <div class="scorpion-f-390-02">
          <router-link to="/SurfBoards/FunBoard/Scorpion"
            ><img src="../Pic/Funboard-SCORPION.jpeg" alt=""
          /></router-link>
        </div>
        <div class="stone-390-02">
          <router-link to="/SurfBoards/FunBoard/StoneSteps"
            ><img src="../Pic/Funboard-STONE STEPS.jpeg" alt=""
          /></router-link>
        </div>
        <div class="stone2-390-02">
          <router-link to="/SurfBoards/FunBoard/StoneSteps2"
            ><img src="../Pic/Funboard-STONE STEPS 2.jpeg" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <!-- SHORTBOARD -->
    <div class="shortboard-390-02">
      <div class="sb-390-02">
        <p><span>ShortBoards</span></p>
      </div>
      <div class="content-390-02">
        <div class="sbpic-390-02">
          <div class="humu-390-02">
            <router-link to="/SurfBoards/ShortBoard/HumuFish">
              <img src="../Pic/Shortboard-HUMU FISH.jpeg" alt=""
            /></router-link>
          </div>
          <div class="scorpion-s-390-02">
            <router-link to="/SurfBoards/ShortBoard/Scorpion"
              ><img src="../Pic/Shortboard-SCORPION.jpeg" alt=""
            /></router-link>
          </div>
          <div class="scorpion2-s-390-02">
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
export default {
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

//Iphone12 pro
.container-390-02 {
  width: 390px;
  display: flex;
  flex-wrap: wrap;
  .title-390-02 {
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
  .longboard-390-02 {
    width: 390px;
    position: relative;

    .lb-390-02 {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .lbpic-390-02 {
      display: flex;
      flex-wrap: wrap;
      width: 390px;
      justify-content: center;

      .modelt-390-02 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .double-390-02 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .dt2x-390-02 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .terramar-390-02 {
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
  .longboard-390-02::before {
    content: "";
    position: absolute;
    width: 370px;
    height: 3px;
    background-color: rgba(125, 153, 16, 0.697);
    top: -55px;
    left: 10px;
  }
  // funboard
  .funboard-390-02 {
    width: 390px;
    margin: 20px 0 0 0;
    .fb-390-02 {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .fbpic-390-02 {
      display: flex;
      flex-wrap: wrap;
      width: 390px;
      justify-content: center;
      .howardmini-390-02 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .scorpion-f-390-02 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .stone-390-02 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .stone2-390-02 {
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
  .shortboard-390-02 {
    width: 390px;
    margin: 20px 0 0 0;

    .sb-390-02 {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .content-390-02 {
      width: 390px;
      display: flex;
      justify-content: center;
      .sbpic-390-02 {
        display: flex;
        flex-wrap: wrap;
        width: 370px;

        .humu-390-02 {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .scorpion-s-390-02 {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .scorpion2-s-390-02 {
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
