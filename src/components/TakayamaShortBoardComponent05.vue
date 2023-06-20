<template>
  <div class="container">
    <!-- SHORTBOARD -->
    <div class="shortboard">
      <div class="sb">
        <p><span>ShortBoards</span></p>
      </div>
      <div class="sbpic">
        <div class="humu">
          <router-link to="/SurfBoards/ShortBoard/HumuFish"
            ><img src="../Pic/Shortboard-HUMU FISH.jpeg" alt=""
          /></router-link>
        </div>
        <div class="fscorpion1">
          <router-link to="/SurfBoards/ShortBoard/Scorpion"
            ><img src="../Pic/Shortboard-SCORPION.jpeg" alt=""
          /></router-link>
        </div>
        <div class="fscorpion2">
          <router-link to="/SurfBoards/ShortBoard/Scorpion2"
            ><img src="../Pic/Shortboard-SCORPION2.jpeg" alt=""
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
  width: 800.25px;
  margin: 0 auto;
  // shortboard
  .shortboard {
    width: 100%;
    height: 270px;
    .sb {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 22px;
      }
    }
    .sbpic {
      display: flex;
      .humu {
        img {
          width: 200px;
        }
      }
      .fscorpion1 {
        img {
          width: 200px;
        }
      }
      .fscorpion2 {
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
