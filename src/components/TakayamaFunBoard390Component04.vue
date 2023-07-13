<template>
  <div class="container-390-04">
    <!-- FUNBOARD -->
    <div class="funboard-390-04">
      <div class="fb-390-04">
        <p><span>FunBoards</span></p>
      </div>
      <div class="fbpic-390-04">
        <div class="howardmini-390-04">
          <router-link to="/SurfBoards/FunBoard/HowardMini"
            ><img src="../Pic/Funboard-HOWARD MINI.jpeg" alt=""
          /></router-link>
        </div>
        <div class="scorpion-390-04">
          <router-link to="/SurfBoards/FunBoard/Scorpion"
            ><img src="../Pic/Funboard-SCORPION.jpeg" alt=""
          /></router-link>
        </div>
        <div class="stone-390-04">
          <router-link to="/SurfBoards/FunBoard/StoneSteps"
            ><img src="../Pic/Funboard-STONE STEPS.jpeg" alt=""
          /></router-link>
        </div>
        <div class="stone2-390-04">
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

.container-390-04 {
  width: 390px;

  // funboard
  .funboard-390-04 {
    width: 390px;
    margin: 20px 0 0 0;
    .fb-390-04 {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .fbpic-390-04 {
      display: flex;
      flex-wrap: wrap;
      width: 390px;
      justify-content: center;
      .howardmini-390-04 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .scorpion-390-04 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .stone-390-04 {
        width: 185px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .stone2-390-04 {
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
</style>
