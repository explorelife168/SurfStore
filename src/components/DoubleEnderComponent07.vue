<template>
  <div class="double">
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
          <Router-link to="/SurfBoards/LongBoard/DoubleEnder"
            ><span>Double Ender</span></Router-link
          >
        </li>
      </ol>
    </div>

    <div class="str">
      <div class="pic">
        <img src="../Pic/Longboard-DOUBLE ENDER.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>DOUBLE ENDER</h2>
        </div>

        <h3>Classic Retro Pintail Noserider</h3>
        <p>
          Donald pulled this design from his repetoire in the early 50's and
          60's. It is a classic retro design, glassed w/ volan cloth so weight
          stays true to the era from which it originated. So called the "Double
          Ender" because both the nose and tail are pulled in for speedy,
          overhead sections. Although this board can be ridden in any size
          waves, its full potential shines in waves that are bigger than waist
          high.
        </p>
        <div class="fin">
          <h4>Recommended Fins:</h4>
          <ul>
            <li>- 9" or 9.5" RP fin</li>
            <li>- 9" or 10" finger fin</li>
            <li>- 9" or 10" DT flex fin</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>9'2" x 22 1/2" x 3"</li>
            <li>9'4" x 22 5/8" x 3"</li>
            <li>9'6" x 22 3/4" x 3"</li>
            <li>9'8" x 22 7/8" x 3 1/8"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ig">
      <div class="iframe1">
        <iframe
          class="instagram-media instagram-media-rendered"
          id="instagram-embed-0"
          src="https://www.instagram.com/tv/CCgdNhinzVk/embed/captioned/?cr=1&amp;v=14&amp;wp=540&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fsingle-fin-longboards%2Fdouble-ender%2F#%7B%22ci%22%3A0%2C%22os%22%3A2310.399999976158%2C%22ls%22%3A1341.1999999284744%2C%22le%22%3A1425.6999999284744%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="621"
          data-instgrm-payload-id="instagram-media-payload-0"
          scrolling="no"
          style="
            background: white;
            max-width: 400px;
            width: calc(100% - 2px);
            border-radius: 3px;
            border: 1px solid rgb(219, 219, 219);
            box-shadow: none;
            display: block;
            margin: 0px 0px 12px;
            min-width: 395px;
            padding: 0px;
          "
        ></iframe>
      </div>
      <div class="img-1">
        <img src="../Pic/Douber Ender-pic.jpeg" alt="" />
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

.double {
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
.ig {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  img {
    width: 395px;
  }
}
.ig::before {
  content: "";
  width: 800.25px;
  height: 2.5px;
  background-color: rgba(125, 153, 16, 0.697);
  position: absolute;
  top: -30px;
}
</style>
