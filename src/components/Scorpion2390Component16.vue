<template>
  <div class="scorpion2-390-16">
    <div class="name-390-16">
      <h2>Scorpion</h2>
    </div>
    <div class="pic-390-16">
      <img src="../Pic/Shortboard-SCORPION2.jpeg" alt="" />
    </div>
    <div class="txt-390-16">
      <h3>Scorpion2</h3>
      <p>
        Scorpion 2 The Scorpion 2 model is a modified version of the hot selling
        Scorpion. Donald wanted to make a wider tail and narrower nose version
        for his friends on the south shore of Oahu with a more "rounded out"
        template. The wider tail volume allows the surfer to go a little shorter
        in board length if they prefer and allow for endless fins combinations
        like single, 2+1 or quad setups. This board excels in small California
        style surf to well overhead island style barrels. Very fast paddler with
        easy tail control, this board is a must have in every surfer quiver!
      </p>
      <div class="fin-390-16">
        <h4>Recommended Fin Setup:</h4>
        <ul>
          <li>- 2+1 FCS2 w/ a 6.5", 7" or 7.5" finger fin (2+1 setup)</li>
          <li>- FCS Quad (quad setup)</li>
          <li>- 8" finger or DT flex fin (single fin setup)</li>
        </ul>
      </div>
      <div class="specs-390-16">
        <h4>Specs:</h4>
        <ul>
          <li>(Available sizes: 5'0"-7'6")</li>
          <li>5'5" x 20 1/4" x 2 5/8"</li>
          <li>6'0" x 20 1/2" x 2 5/8"</li>
        </ul>
      </div>
    </div>
    <div class="img-390-16">
      <div class="img-space-1">
        <img src="../Pic/SScorpion2-1.jpeg" alt="" />
      </div>
      <div class="img-space-2">
        <img src="../Pic/SScorpion2-2.jpeg" alt="" />
      </div>
      <div class="img-space-3">
        <img src="../Pic/SScorpion2-3.jpeg" alt="" />
      </div>
      <div class="img-space-4">
        <img src="../Pic/SScorpion2-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scorpion2390Component16",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.scorpion2-390-16 {
  width: 390px;

  .name-390-16 {
    margin: 10px 0;
    h2 {
      font-size: 20px;
      color: rgba(125, 153, 16, 0.697);
      padding: 0 10px;
    }
  }
  .pic-390-16 {
    width: 370px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .txt-390-16 {
    width: 370px;
    margin: 5px auto;
    h3 {
      padding: 5px 0;
    }
    p {
      text-align: justify;
      font-size: 14 px;
    }
    .fin-390-16 {
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-16 {
      position: relative;
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-16::after {
      content: "";
      width: 370px;
      height: 4px;
      background-color: rgba(125, 153, 16, 0.697);
      position: absolute;
      bottom: -10px;
    }
  }

  .img-390-16 {
    margin: 30px auto;
    width: 370px;
    display: flex;
    flex-wrap: wrap;
    .img-space-1 {
      width: 185px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-space-2 {
      width: 185px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-space-3 {
      width: 185px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-space-4 {
      width: 185px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
