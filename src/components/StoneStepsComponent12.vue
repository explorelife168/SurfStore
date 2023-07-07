<template>
  <div class="stonesteps">
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
          <Router-link to="/SurfBoards/FunBoard/StoneSteps"
            ><span>Stone Steps</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Funboard-STONE STEPS.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Stone Steps</h2>
        </div>

        <h3>Single fin mid-length!</h3>
        <p>
          Stone Steps was one of Donald's favorite surf spots while living in
          Encinitas, California, during 1970s. He designed this single fin
          mid-length model for himself to surf his home break (which back then
          was Stone Steps). It is a good mini-noserider but is also functional
          design off the tail. In addition to being a fun board for California
          waves, many of Donald's team riders excelled with this model on Oahu's
          South Shore, primarily Ala Moana Bowls with its log walls and tube
          sections. Unfortunately this model slowly faded out as surfboard
          design progressed in 1980s.
        </p>
        <br />
        <p>
          Luckily, a few years ago, one of Donald's original team riders brought
          this model back to show Donald. He decided to have this board
          meticulously scanned into the computer and we decided to add it to the
          2015 collection. This design has plenty of width and thickness, soft
          V-bottom, flat rocker helps surfers paddle faster and catch waves
          easily. Smooth turn and good glide for it's size.
        </p>
        <br />
        <p>Comes with either a soft diamond tail or traditional square tail.</p>

        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>
              - DT bird fin, Dobson fin, Greenough 4A, Finger fin or DT flex fin
            </li>
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
          src="https://www.instagram.com/p/BaHH11oAk_O/embed/captioned/?cr=1&amp;v=12&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fmid-length%2Fstone-steps%2F#%7B%22ci%22%3A0%2C%22os%22%3A1244.7999999523163%2C%22ls%22%3A429.5%2C%22le%22%3A872.2999999523163%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="835"
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
          id="instagram-embed-1"
          src="https://www.instagram.com/p/BZ1LQCjAga2/embed/captioned/?cr=1&amp;v=12&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fmid-length%2Fstone-steps%2F#%7B%22ci%22%3A1%2C%22os%22%3A1253.2999999523163%2C%22ls%22%3A429.5%2C%22le%22%3A872.2999999523163%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="614"
          data-instgrm-payload-id="instagram-media-payload-1"
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
  name: "StoneStepsComponent12",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.stonesteps {
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
