<template>
  <div class="stonesteps2">
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
          <Router-link to="/SurfBoards/FunBoard/StoneSteps2"
            ><span>Stone Steps2</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Funboard-STONE STEPS 2.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Stone Steps2</h2>
        </div>

        <h3>2017 New!</h3>
        <p>
          Stone Steps 2 is a 2+1 modified version of Stone Steps which Donald
          originally designed in the late 70s. Similar characteristics as the
          original Stone Steps model but but with modified turned down rails and
          pulled in tail to give it 2+1 capabilities.
        </p>
        <br />
        <p>
          2017 New! Stone Steps 2 is a 2+1 modified version of Stone Steps which
          Donald originally designed in the late 70s. Similar characteristics as
          the original Stone Steps model but but with modified turned down rails
          and pulled in tail to give it 2+1 capabilities. Stone Steps 2 can be
          ridden either single fin or 2+1. Comes with a traditional square tail,
          soft diamond tail or round pin tail.
        </p>

        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>
              - Greenough 4A, Finger fin or DT flex fin (single fin set up)
            </li>
            <li>- 2+1 FCS w/ Finger fin (2+1 set up)</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>7'6" x 22 1/2" x 3"</li>
            <li>7'10" x 22 3/4" x 3 1/16"</li>
            <li>8'0" x 22 5/8" x 3 1/16"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ig">
      <div class="iframe1">
        <iframe
          class="instagram-media instagram-media-rendered"
          id="instagram-embed-0"
          src="https://www.instagram.com/p/B9o4ePlHRez/embed/captioned/?cr=1&amp;v=14&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fmid-length%2Fstone-steps-2%2F#%7B%22ci%22%3A0%2C%22os%22%3A1126.5999999046326%2C%22ls%22%3A364.39999997615814%2C%22le%22%3A545.2999999523163%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="799"
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
      <div class="iframe2">
        <iframe
          class="instagram-media instagram-media-rendered"
          id="instagram-embed-2"
          src="https://www.instagram.com/p/CGh2ZB1nCWO/embed/captioned/?cr=1&amp;v=14&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fmid-length%2Fstone-steps-2%2F#%7B%22ci%22%3A2%2C%22os%22%3A1142.7999999523163%2C%22ls%22%3A364.39999997615814%2C%22le%22%3A545.2999999523163%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="721"
          data-instgrm-payload-id="instagram-media-payload-2"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "StoneSteps2Componenet13",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.stonesteps2 {
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
}
.ig::before {
  content: "";
  width: 800px;
  height: 2.5px;
  background-color: rgba(125, 153, 16, 0.697);
  position: absolute;
  top: -30px;
}
</style>
