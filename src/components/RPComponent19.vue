<template>
  <div class="rpfin">
    <div class="link">
      <ol>
        <li>
          <Router-link to="/SurfBoards"><span>SurfBoards</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/Fins"><span>FINS</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/Fins/RP"
            ><span>RP FIN</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="rp">
      <div class="pic">
        <img src="../Pic/RP Fin.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>RP FIN</h2>
        </div>

        <h3>RP Fin</h3>
        <p>
          A great fin whether looking to noseride or make your board turn a
          little quicker. Nice wide base gives plenty of drive, while the raked
          outline and narrower tip gives great release when turning. Perfect for
          loosening up a tighter feeling retro log, or giving solid feel to a
          rickety, wobbly feeling tail.
        </p>
        <br />
        <p>Available in sizes 9" and 9.5".</p>
        <br />
        <p>
          *Interested in purchasing this fin? Please go to a dealer near you or
          you can also buy it online here (check out via Noah Ka Oi Surf online
          store).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RLBComponent20",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.rpfin {
  width: 800px;
  margin: 0 auto;
  .link {
    width: 350px;
    margin: 25px 0;
    ol {
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        position: relative;
        a {
          text-decoration: none;
          font-size: 15px;
          color: rgb(113, 1, 226);
          font-weight: 340;
        }
      }

      li:nth-child(1)::after,
      li:nth-child(2)::after {
        content: ">";
        font-size: 15px;
        color: rgb(113, 1, 226);
        font-weight: 340;
        position: absolute;
        right: -40px;
      }
    }
  }
}
.rp {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0 50px 0;
  .pic {
    img {
      width: 400 px;
    }
  }
  .txt {
    width: 320px;
    .name {
      margin-bottom: 10px;
      h2 {
        font-size: 30px;
        color: rgba(125, 153, 16, 0.697);
      }
    }

    h3 {
      margin-block-start: none;
    }
    p {
      line-height: 26px;
    }
  }
}
</style>
