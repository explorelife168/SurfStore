<template>
  <div class="container">
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
        <div class="scorpion">
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

.container {
  width: 800px;
  margin: 0 auto;

  // funboard
  .funboard {
    height: 270px;
    .fb {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 22px;
      }
    }
    .fbpic {
      display: flex;
      .howardmini {
        img {
          width: 200px;
        }
      }
      .scorpion {
        img {
          width: 200px;
        }
      }
      .stone {
        img {
          width: 200px;
        }
      }
      .stone2 {
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
