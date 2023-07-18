<template>
  <div class="container-390-17">
    <div class="fin-390-17">
      <p><span>Fins by Donald Takayama</span></p>
    </div>
    <div class="pic-390-17">
      <div class="f-mtp">
        <div class="pic-space-01-390-17">
          <router-link to="Fins/MTP"
            ><img src="../Pic/MTPFin.jpeg" alt=""
          /></router-link>
        </div>
      </div>
      <div class="f-rp">
        <div class="pic-space-02-390-17">
          <router-link to="/Fins/RP"
            ><img src="../Pic/RP Fin.jpeg" alt=""
          /></router-link>
        </div>
      </div>
      <div class="f-rlb">
        <div class="pic-space-03-390-17">
          <router-link to="/Fins/RLB"
            ><img src="../Pic/RLB Fin.jpeg" alt=""
          /></router-link>
        </div>
      </div>
      <div class="f-dtflex">
        <div class="pic-space-04-390-17">
          <router-link to="/Fins/DTFLEX"
            ><img src="../Pic/DT FLEX FIn.jpeg" alt=""
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

.container-390-17 {
  width: 390px;
  .fin-390-17 {
    width: 390px;
    height: 80px;
    margin: 10px 0 0 0;
    span {
      color: rgba(125, 153, 16, 0.697);
      font-size: 20px;
      padding: 0 10px;
    }
  }
  .pic-390-17 {
    width: 390px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .f-mtp {
      width: 185px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      .pic-space-01-390-17 {
        width: 155px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .f-rp {
      width: 185px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      .pic-space-02-390-17 {
        width: 155px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .f-rlb {
      width: 185px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      .pic-space-03-390-17 {
        width: 155px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .f-dtflex {
      width: 185px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      .pic-space-04-390-17 {
        width: 155px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
