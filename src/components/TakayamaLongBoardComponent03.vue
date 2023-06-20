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

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  width: 800.25px;

  // longboard
  .longboardarea {
    height: 270px;
    .lb {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 22px;
      }
    }
    .lbpic {
      display: flex;
      .modelt {
        img {
          width: 200px;
        }
      }
      .double {
        img {
          width: 200px;
        }
      }
      .dt2x {
        img {
          width: 200px;
        }
      }
      .terramar {
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
