<template>
  <div class="dt2x">
    <div class="link">
      <ol>
        <li>
          <Router-link to="/SurfBoards"><span>SurfBoards</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/LongBoard"
            ><span>LongBoard</span></Router-link
          >
        </li>
        <li>
          <Router-link to="/SurfBoards/LongBoard/DT2X"
            ><span>DT2X</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Longboard-DT2X.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>DT2X</h2>
        </div>

        <h3>New Old DT2</h3>
        <p>
          A design concept we have been working on the past year with team rider
          Jeannette Prince. Based off one of Jeannette's magic hand shaped DT2
          Single Fin boards from the 90's. A completely remastered DT2 model
          that helps bridge the gap from single fin logs to 2+1 longboard
          models. A great user friendly option for surfers who want to
          experience the same feelings of a single fin (trim, speed, and glide)
          with the capability to turn more aggressively than a log if needed. A
          perfect option for surfers looking for a single fin that can handle
          bigger waves or steeper sections. Slightly more pulled in outline in
          the nose and tail compared with the original tri-fin DT2 model. Rails
          are more pinched and foiled (thinner in tail with harder edge) to help
          transition into turns. A great all around single fin longboard.
        </p>
        <div class="fin">
          <h4>Recommended Fins:</h4>
          <ul>
            <li>- 9" DT Flex Fin</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>9'2" x 22 1/2" x 2 7/8"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="img">
      <div class="img-2">
        <img src="../Pic/DT2X-2.jpeg" alt="" />
      </div>
      <div class="img-3">
        <img src="../Pic/DT2X-3.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelTComponent",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.dt2x {
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  img-2 img-3 {
    width: 395px;
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
