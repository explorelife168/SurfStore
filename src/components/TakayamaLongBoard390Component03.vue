<template>
  <div class="container">
    <!-- LONGBOARD -->
    <div class="longboardarea">
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
  width: 390px;

  // longboard
  .longboardarea {
    width: 390px;

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
}
</style>
