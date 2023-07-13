<template>
  <div class="container-390-05">
    <!-- SHORTBOARD -->
    <div class="shortboard-390-05">
      <div class="sb-390-05">
        <p><span>ShortBoards</span></p>
      </div>
      <div class="content-390-05">
        <div class="sbpic-390-05">
          <div class="humu-390-05">
            <router-link to="/SurfBoards/ShortBoard/HumuFish"
              ><img src="../Pic/Shortboard-HUMU FISH.jpeg" alt=""
            /></router-link>
          </div>
          <div class="scorpion1-390-05">
            <router-link to="/SurfBoards/ShortBoard/Scorpion"
              ><img src="../Pic/Shortboard-SCORPION.jpeg" alt=""
            /></router-link>
          </div>
          <div class="scorpion2-390-05">
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

.container-390-05 {
  width: 390px;

  // shortboard
  .shortboard-390-05 {
    width: 390px;
    margin: 20px 0 0 0;

    .sb-390-05 {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 20px;
        padding: 0 10px;
      }
    }
    .content-390-05 {
      width: 390px;
      display: flex;
      justify-content: center;
      .sbpic-390-05 {
        display: flex;
        flex-wrap: wrap;
        width: 370px;

        .humu-390-05 {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .scorpion1-390-05 {
          width: 185px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .scorpion2-390-05 {
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
