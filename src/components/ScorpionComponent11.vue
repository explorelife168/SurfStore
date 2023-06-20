<template>
  <div class="scorpion">
    <div class="link">
      <ol>
        <li>
          <Router-link to="/SurfBoards"><span>SurfBoards</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/FunBoard"
            ><span>FunBoards</span></Router-link
          >
        </li>
        <li>
          <Router-link to="/SurfBoards/FunBoard/Scorpion"
            ><span>Scorpion</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Funboard-SCORPION.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Scorpion</h2>
        </div>
        <div class="price"><p>$1,700.00</p></div>
        <div class="add">
          <button type="submit">ADD TO CART</button>
        </div>
        <h3>Mini Noserider Pintail</h3>
        <p>
          The ultimate mini-noserider! Surf the board from the nose or turn on a
          dime. Probably one of the fastest mid-length boards out there, now
          with controlled maneouverability. Donald first came up with this
          design in the mid 60’s. It has been slightly re-worked and now is
          basically a smaller version of the Erik Sommer Model. Coming in
          lengths from 6’8” to 8’, this board will absolutely fly when ridden on
          the nose. With a true “pin” tail and a 2 + 1 fin setup, this board
          will perform the tightest of turns when pushed to it’s limits. An
          excellent alternative for someone looking for a shorter ‘longboard’.
        </p>

        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>2+1 FCS w/ 6.5", 7" or 7.5" Finger fin (2+1</li>
            <li>8" or 9" Finger fin (Single fin setup)</li>
            <li>- 8" or 9" DT flex fin (Single fin setup)</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>7'0" x 22" x 2 7/8"</li>
            <li>7'6" x 22 1/2" x 2 7/8"</li>
            <li>8'0" x 22 3/4" x 3"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="img">
      <div class="img-1">
        <img src="../Pic/scorpion-1.jpeg" alt="" />
      </div>
      <div class="img-2">
        <img src="../Pic/scorpion-2.jpeg" alt="" />
      </div>
      <div class="img-3">
        <img src="../Pic/scorpion-3.jpeg" alt="" />
      </div>
      <div class="img-4">
        <img src="../Pic/scorpion-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScorpionComponent11",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.scorpion {
  width: 800.25px;
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
    .name {
      margin-bottom: 10px;
      h2 {
        font-size: 30px;
        color: rgba(125, 153, 16, 0.697);
      }
    }
    .price {
      margin-bottom: 15px;
      p {
        font-size: 20px;
      }
    }
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
  width: 800.25px;
  display: flex;
  justify-content: space-around;
  position: relative;

  img {
    width: 200.6px;
  }
}
.img::before {
  content: "";
  width: 800.25px;
  height: 2.5px;
  background-color: rgba(125, 153, 16, 0.697);
  position: absolute;
  top: -30px;
}
</style>
