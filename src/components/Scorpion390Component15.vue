<template>
  <div class="scorpion1-390-15">
    <div class="name-390-15">
      <h2>Scorpion</h2>
    </div>
    <div class="pic-390-15">
      <img src="../Pic/Shortboard-SCORPION.jpeg" alt="" />
    </div>
    <div class="txt-390-15">
      <h3>Scorpion</h3>
      <p>
        High performance and miniture version of the original Scorpion! This
        board takes cutbacks and buttom turns to a new level, easy to turn
        because of its pulled in v within the tail. You can ride this board
        shorter than a conventional surfboard, because of its dimensions and
        versitaility. This board offers more stability than your normal
        shortboard.
      </p>

      <p>
        If you are riding a shortboard and you want it to feel like the
        equivalent, we offer this guide:
      </p>
      <div class="fin-390-15">
        <h4>Recommended Fin Setup:</h4>
        <ul>
          <li>- 2+1 FCS2 w/ a 6.5" or 7" finger fin (2+1 setup)</li>
          <li>- FCS Quad (quad setup)</li>
          <li>- 8" finger or DT flex fin (single fin setup)</li>
        </ul>
      </div>
      <div class="specs-390-15">
        <h4>Specs:</h4>
        <ul>
          <li>(Available size: 5'0"-6'6")</li>
          <li>6'0" x 21" x 2 5/8"</li>
          <li>6'2" x 21 1/8" x 2 3/4"</li>
          <li>6'6" x 21 1/2" x 2 3/4"</li>
        </ul>
      </div>
    </div>
    <div class="img-390-15">
      <div class="img-space-1">
        <img src="../Pic/SScorpion-1.jpeg" alt="" />
      </div>
      <div class="img-space-2">
        <img src="../Pic/SScorpion-2.jpeg" alt="" />
      </div>
      <div class="img-space-3">
        <img src="../Pic/SScorpion-3.jpeg" alt="" />
      </div>
      <div class="img-space-4">
        <img src="../Pic/SScorpion-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scorpion390Component15",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.scorpion1-390-15 {
  width: 390px;

  .name-390-15 {
    margin: 10px 0;
    h2 {
      font-size: 20px;
      color: rgba(125, 153, 16, 0.697);
      padding: 0 10px;
    }
  }
  .pic-390-15 {
    width: 370px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .txt-390-15 {
    width: 370px;
    margin: 5px auto;
    h3 {
      padding: 5px 0;
    }
    p {
      text-align: justify;
      font-size: 14 px;
    }
    .fin-390-15 {
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-15 {
      position: relative;
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-15::after {
      content: "";
      width: 370px;
      height: 4px;
      background-color: rgba(125, 153, 16, 0.697);
      position: absolute;
      bottom: -10px;
    }
  }

  .img-390-15 {
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
