<template>
  <div class="container">
    <!-- Fins -->
    <div class="fins">
      <div class="fin">
        <p><span>Fins by Donald Takayama</span></p>
      </div>
      <div class="finpic">
        <div class="f-mtp">
          <router-link to="Fins/MTP"
            ><img src="../Pic/MTPFin.jpeg" alt=""
          /></router-link>
        </div>
        <div class="f-rp">
          <router-link to="/Fins/RP"
            ><img src="../Pic/RP Fin.jpeg" alt=""
          /></router-link>
        </div>
        <div class="f-rlb">
          <router-link to="/Fins/RLB"
            ><img src="../Pic/RLB Fin.jpeg" alt=""
          /></router-link>
        </div>
        <div class="f-dtflex">
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

.container {
  width: 800px;
  margin: 0 auto;

  // Fins
  .fins {
    .fin {
      margin: 10px 0;
      span {
        color: rgba(125, 153, 16, 0.697);
        font-size: 22px;
      }
    }
    .finpic {
      display: flex;
      margin: 50px 0;
      .f-mtp {
        max-width: 200px;
        img {
          width: 200px;
          height: 220px;
          object-fit: contain;
        }
      }
      .f-rp {
        width: 200px;
        max-width: 200px;
        img {
          width: 200px;
          height: 220px;
          object-fit: contain;
        }
      }
      .f-rlb {
        max-width: 200px;
        img {
          width: 200px;
          height: 220px;
          object-fit: contain;
        }
      }
      .f-dtflex {
        max-width: 200px;
        img {
          width: 200px;
          height: 220px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
