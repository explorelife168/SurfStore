<template>
  <div class="scorpion2">
    <div class="link">
      <ol>
        <li>
          <Router-link to="/SurfBoards"><span>SurfBoards</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/ShortBoard"
            ><span>ShortBoards</span></Router-link
          >
        </li>
        <li>
          <Router-link to="/SurfBoards/ShortBoard/Scorpion2"
            ><span>Scorpion2</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Shortboard-SCORPION2.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Scorpion</h2>
        </div>

        <h3>Scorpion2</h3>
        <p>
          Scorpion 2 The Scorpion 2 model is a modified version of the hot
          selling Scorpion. Donald wanted to make a wider tail and narrower nose
          version for his friends on the south shore of Oahu with a more
          "rounded out" template. The wider tail volume allows the surfer to go
          a little shorter in board length if they prefer and allow for endless
          fins combinations like single, 2+1 or quad setups. This board excels
          in small California style surf to well overhead island style barrels.
          Very fast paddler with easy tail control, this board is a must have in
          every surfer quiver!
        </p>
        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>- 2+1 FCS2 w/ a 6.5", 7" or 7.5" finger fin (2+1 setup)</li>
            <li>- FCS Quad (quad setup)</li>
            <li>- 8" finger or DT flex fin (single fin setup)</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>(Available sizes: 5'0"-7'6")</li>
            <li>5'5" x 20 1/4" x 2 5/8"</li>
            <li>6'0" x 20 1/2" x 2 5/8"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="img">
      <div class="img-1">
        <img src="../Pic/SScorpion2-1.jpeg" alt="" />
      </div>
      <div class="img-2">
        <img src="../Pic/SScorpion2-2.jpeg" alt="" />
      </div>
      <div class="img-3">
        <img src="../Pic/SScorpion2-3.jpeg" alt="" />
      </div>
      <div class="img-4">
        <img src="../Pic/SScorpion2-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scorpion2Component16",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.scorpion2 {
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
.str {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0 50px 0;
  .pic {
    img {
      width: 450px;
    }
  }
  .txt {
    width: 320px;

    .add {
      button {
        width: 320px;
        height: 30px;
        background-color: rgba(125, 153, 16, 0.697);
        color: white;
        font-weight: 600;
        border: none;
        margin-bottom: 15px;
        cursor: pointer;
        border-radius: 2px;
      }
    }
    h3 {
      margin-block-start: none;
    }

    .fin {
      ul {
        li {
          list-style: none;
        }
      }
    }
    .specs {
      ul {
        li {
          list-style: none;
        }
      }
    }
  }
}
.img {
  width: 800px;
  display: flex;
  justify-content: space-around;
  position: relative;

  img {
    width: 200.6px;
  }
}
.img::before {
  content: "";
  width: 800px;
  height: 2.5px;
  background-color: rgba(125, 153, 16, 0.697);
  position: absolute;
  top: -30px;
}
</style>
