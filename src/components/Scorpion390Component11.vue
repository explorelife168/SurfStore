<template>
  <div class="scorpion-390-11">
    <div class="name-390-11">
      <h2>Scorpion</h2>
    </div>
    <div class="pic-390-11">
      <img src="../Pic/Funboard-SCORPION.jpeg" alt="" />
    </div>
    <div class="txt-390-11">
      <h3>Mini Noserider Pintail</h3>
      <p>
        The ultimate mini-noserider! Surf the board from the nose or turn on a
        dime. Probably one of the fastest mid-length boards out there, now with
        controlled maneouverability. Donald first came up with this design in
        the mid 60’s. It has been slightly re-worked and now is basically a
        smaller version of the Erik Sommer Model. Coming in lengths from 6’8” to
        8’, this board will absolutely fly when ridden on the nose. With a true
        “pin” tail and a 2 + 1 fin setup, this board will perform the tightest
        of turns when pushed to it’s limits. An excellent alternative for
        someone looking for a shorter ‘longboard’.
      </p>
      <div class="fin-390-11">
        <h4>Recommended Fin Setup:</h4>
        <ul>
          <li>2+1 FCS w/ 6.5", 7" or 7.5" Finger fin (2+1</li>
          <li>8" or 9" Finger fin (Single fin setup)</li>
          <li>- 8" or 9" DT flex fin (Single fin setup)</li>
        </ul>
      </div>
      <div class="specs-390-11">
        <h4>Specs:</h4>
        <ul>
          <li>7'0" x 22" x 2 7/8"</li>
          <li>7'6" x 22 1/2" x 2 7/8"</li>
          <li>8'0" x 22 3/4" x 3"</li>
        </ul>
      </div>
    </div>

    <div class="img-390-11">
      <div class="img-1">
        <div class="img-space-1">
          <img src="../Pic/scorpion-1.jpeg" alt="" />
        </div>
      </div>
      <div class="img-2">
        <div class="img-space-2">
          <img src="../Pic/scorpion-2.jpeg" alt="" />
        </div>
      </div>
      <div class="img-3">
        <div class="img-space-3">
          <img src="../Pic/scorpion-3.jpeg" alt="" />
        </div>
      </div>
      <div class="img-4">
        <div class="img-space-4">
          <img src="../Pic/scorpion-4.jpeg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scorpion390Component11",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.scorpion-390-11 {
  width: 390px;

  .name-390-11 {
    margin: 10px 0;
    h2 {
      font-size: 20px;
      color: rgba(125, 153, 16, 0.697);
      padding: 0 10px;
    }
  }
  .pic-390-11 {
    width: 370px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .txt-390-11 {
    width: 370px;
    margin: 5px auto;
    h3 {
      padding: 5px 0;
    }
    p {
      text-align: justify;
      font-size: 14 px;
    }
    .fin-390-11 {
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-11 {
      position: relative;
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-11::after {
      content: "";
      width: 370px;
      height: 4px;
      background-color: rgba(125, 153, 16, 0.697);
      position: absolute;
      bottom: -10px;
    }
  }

  .img-390-11 {
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
