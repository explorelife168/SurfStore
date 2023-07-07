<template>
  <div class="rlbfin">
    <div class="link">
      <ol>
        <li>
          <Router-link to="/SurfBoards"><span>SurfBoards</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/Fins"><span>FINS</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/Fins/RLB"
            ><span>RLB FIN</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="rlb">
      <div class="pic">
        <img src="../Pic/RLB Fin.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>RLB FIN</h2>
        </div>
        <h3>Donald's 60s style fin template!</h3>
        <p>
          Donald's 60s style fin template that he used in his signature Jacobs
          model boards.
        </p>
        <br />
        <p>Available size: One Size</p>
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

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.rlbfin {
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
.rlb {
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
