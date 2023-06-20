<template>
  <div class="terramar">
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
          <Router-link to="/SurfBoards/LongBoard/Terramar"
            ><span>Terramar</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Longboard-TERRAMAR.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Terramar</h2>
        </div>
        <div class="price"><p>$2,155.00</p></div>
        <div class="add">
          <button type="submit">ADD TO CART</button>
        </div>
        <h3>Stay in the pocket to noseride longer and turn better!</h3>
        <p>
          This model, Terramar, was originally developed by Donald and team
          riders about 10 years ago (formerly a team rider exclusive). However,
          we are excited to release and add this design to our 2015 collection.
          Terramar has a flat nose with strong tail kick, a unique rocker
          combination compared to Donald's classics. However, still true to
          Donald's authentic single fin designs, we use heavier foam and
          glassing (8-8-8 volan cloth). Its wide nose with standard blended nose
          concave, strong tail kick and flat nose help surfers stay in the
          pocket to noseride longer and turn better.
        </p>
        <div class="fin">
          <h4>Recommended Fins:</h4>
          <ul>
            <li>- 9", 9.5" or 10" MTP fin</li>
            <li>-9" RLB fin</li>
            <li>- 9" or 10" DT Flex fin</li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>9'4" x 23" x 2 3/4"</li>
            <li>9'6" x 23" x 2 7/8"</li>
            <li>9'8" x 23" x 3"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ig">
      <div class="iframe1">
        <iframe
          class="instagram-media instagram-media-rendered"
          id="instagram-embed-0"
          src="https://www.instagram.com/p/CeoM39eLTWS/embed/captioned/?cr=1&amp;v=14&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fsingle-fin-longboards%2Fterramar%2F#%7B%22ci%22%3A0%2C%22os%22%3A2428.399999976158%2C%22ls%22%3A1230.1000000238419%2C%22le%22%3A2152.8000000715256%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="684"
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
          src="https://www.instagram.com/reel/Cp_Jtp2sjhI/embed/captioned/?cr=1&amp;v=14&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fsingle-fin-longboards%2Fterramar%2F#%7B%22ci%22%3A1%2C%22os%22%3A2443.600000023842%2C%22ls%22%3A1230.1000000238419%2C%22le%22%3A2152.8000000715256%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="947"
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
  name: "TerramarComponent09",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.terramar {
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
.ig {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
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
