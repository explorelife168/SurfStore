<template>
  <div class="scorpion1">
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
          <Router-link to="/SurfBoards/ShortBoard/Scorpion"
            ><span>Scorpion</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Shortboard-SCORPION.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Scorpion</h2>
        </div>

        <h3>Scorpion</h3>
        <p>
          High performance and miniture version of the original Scorpion! This
          board takes cutbacks and buttom turns to a new level, easy to turn
          because of its pulled in v within the tail. You can ride this board
          shorter than a conventional surfboard, because of its dimensions and
          versitaility. This board offers more stability than your normal
          shortboard.
        </p>
        <br />
        <p>
          If you are riding a shortboard and you want it to feel like the
          equivalent, we offer this guide:
        </p>

        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>- 2+1 FCS2 w/ a 6.5" or 7" finger fin (2+1 setup)</li>
            <li>- FCS Quad (quad setup)</li>
            <li>- 8" finger or DT flex fin (single fin setup)</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>(Available size: 5'0"-6'6")</li>
            <li>6'0" x 21" x 2 5/8"</li>
            <li>6'2" x 21 1/8" x 2 3/4"</li>
            <li>6'6" x 21 1/2" x 2 3/4"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="img">
      <div class="img-1">
        <img src="../Pic/SScorpion-1.jpeg" alt="" />
      </div>
      <div class="img-2">
        <img src="../Pic/SScorpion-2.jpeg" alt="" />
      </div>
      <div class="img-3">
        <img src="../Pic/SScorpion-3.jpeg" alt="" />
      </div>
      <div class="img-4">
        <img src="../Pic/SScorpion-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScorpionComponent15",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.scorpion1 {
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
