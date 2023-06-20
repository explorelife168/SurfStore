<template>
  <div class="humufish">
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
          <Router-link to="/SurfBoards/ShortBoard/HumuFish"
            ><span>Humu Fish</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Shortboard-HUMU FISH.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Humu Fish</h2>
        </div>
        <div class="price"><p>$1,250.00</p></div>
        <div class="add">
          <button type="submit">ADD TO CART</button>
        </div>
        <h3>Retro Fish!</h3>
        <p>
          Straight from the past, this Fish is a re-worked classic of Donald's
          designs. More angle on the fins and a thinner-blady tail make this
          board go faster and turn tighter than you ever thought possible on a
          fish. This model can definitely compete with the best and must be
          tried to fully appreciate it’s maneuverability. This is the fastest
          fish you will ever set foot on. This model allows quick vertical
          snaps, cutbacks in small and mushy to big and barreling.
        </p>

        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>- Twin or quad</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>5'6" x 20 1/2" x 2 1/2"</li>
            <li>6'0" x 21" x 2 3/4"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="img">
      <div class="img-1">
        <img src="../Pic/Humu Fish-1.jpeg" alt="" />
      </div>
      <div class="img-2">
        <img src="../Pic/Humu Fish-2.jpeg" alt="" />
      </div>
      <div class="img-3">
        <img src="../Pic/Humu Fish-3.jpeg" alt="" />
      </div>
      <div class="img-4">
        <img src="../Pic/Humu Fish-4.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HumuFishComponenet14",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.humufish {
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
