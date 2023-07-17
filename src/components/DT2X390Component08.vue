<template>
  <div class="dt2x-390-08">
    <div class="name-390-08">
      <h2>DT2X</h2>
    </div>
    <div class="pic-390-08">
      <img src="../Pic/Longboard-DT2X.jpeg" alt="" />
    </div>
    <div class="txt-390-08">
      <h3>New Old DT2</h3>
      <p>
        A design concept we have been working on the past year with team rider
        Jeannette Prince. Based off one of Jeannette's magic hand shaped DT2
        Single Fin boards from the 90's. A completely remastered DT2 model that
        helps bridge the gap from single fin logs to 2+1 longboard models. A
        great user friendly option for surfers who want to experience the same
        feelings of a single fin (trim, speed, and glide) with the capability to
        turn more aggressively than a log if needed. A perfect option for
        surfers looking for a single fin that can handle bigger waves or steeper
        sections. Slightly more pulled in outline in the nose and tail compared
        with the original tri-fin DT2 model. Rails are more pinched and foiled
        (thinner in tail with harder edge) to help transition into turns. A
        great all around single fin longboard.
      </p>
      <div class="fin-390-08">
        <h4>Recommended Fins:</h4>
        <ul>
          <li>- 9" DT Flex Fin</li>
          <li>-9" RLB fin</li>
        </ul>
      </div>
      <div class="specs-390-08">
        <h4>Specs:</h4>
        <ul>
          <li>9'2" x 22 1/2" x 2 7/8"</li>
        </ul>
      </div>
      <div class="img-390-08">
        <div class="img-2-390-08">
          <img src="../Pic/DT2X-2.jpeg" alt="" />
        </div>
        <div class="img-3-390-08">
          <img src="../Pic/DT2X-3.jpeg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DT2X390Component08",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.dt2x-390-08 {
  width: 390px;

  .name-390-08 {
    margin: 10px 0;
    h2 {
      font-size: 20px;
      color: rgba(125, 153, 16, 0.697);
      padding: 0 10px;
    }
  }
  .pic-390-08 {
    width: 370px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .txt-390-08 {
    width: 370px;
    margin: 5px auto;
    h3 {
      padding: 5px 0;
    }
    p {
      text-align: justify;
      font-size: 14 px;
    }
    .fin-390-08 {
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-08 {
      position: relative;
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-08::after {
      content: "";
      width: 370px;
      height: 4px;
      background-color: rgba(125, 153, 16, 0.697);
      position: absolute;
      bottom: -10px;
    }
  }
  .img-390-08 {
    width: 370px;
    margin: 25px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
