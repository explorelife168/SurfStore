<template>
  <div class="humufish-390-14">
    <div class="name-390-14">
      <h2>Humu Fish</h2>
    </div>
    <div class="pic-390-14">
      <img src="../Pic/Shortboard-HUMU FISH.jpeg" alt="" />
    </div>
    <div class="txt-390-14">
      <h3>Retro Fish!</h3>
      <p>
        Straight from the past, this Fish is a re-worked classic of Donald's
        designs. More angle on the fins and a thinner-blady tail make this board
        go faster and turn tighter than you ever thought possible on a fish.
        This model can definitely compete with the best and must be tried to
        fully appreciate it’s maneuverability. This is the fastest fish you will
        ever set foot on. This model allows quick vertical snaps, cutbacks in
        small and mushy to big and barreling.
      </p>

      <div class="fin-390-14">
        <h4>Recommended Fin Setup:</h4>
        <ul>
          <li>- Twin or quad</li>
        </ul>
      </div>
      <div class="specs-390-14">
        <h4>Specs:</h4>
        <ul>
          <li>5'6" x 20 1/2" x 2 1/2"</li>
          <li>6'0" x 21" x 2 3/4"</li>
        </ul>
      </div>
    </div>
    <div class="img-390-14">
      <div class="img-space-1">
        <img src="../Pic/Humu Fish-1.jpeg" alt="" />
      </div>
      <div class="img-space-2">
        <img src="../Pic/Humu Fish-2.jpeg" alt="" />
      </div>
      <div class="img-space-3">
        <img src="../Pic/Humu Fish-3.jpeg" alt="" />
      </div>
      <div class="img-space-4">
        <img src="../Pic/Humu Fish-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HumuFish390Componenet14",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.humufish-390-14 {
  width: 390px;

  .name-390-14 {
    margin: 10px 0;
    h2 {
      font-size: 20px;
      color: rgba(125, 153, 16, 0.697);
      padding: 0 10px;
    }
  }
  .pic-390-14 {
    width: 370px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .txt-390-14 {
    width: 370px;
    margin: 5px auto;
    h3 {
      padding: 5px 0;
    }
    p {
      text-align: justify;
      font-size: 14 px;
    }
    .fin-390-14 {
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-14 {
      position: relative;
      h4 {
        padding: 5px 0;
      }
    }
    .specs-390-14::after {
      content: "";
      width: 370px;
      height: 4px;
      background-color: rgba(125, 153, 16, 0.697);
      position: absolute;
      bottom: -10px;
    }
  }

  .img-390-14 {
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
