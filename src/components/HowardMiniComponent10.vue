<template>
  <div class="howardmini">
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
          <Router-link to="/SurfBoards/FunBoard/HowardMini"
            ><span>Howard Mini</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="str">
      <div class="pic">
        <img src="../Pic/Funboard-HOWARD MINI.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>Howard Mini</h2>
        </div>
        <div class="price"><p>$1,600.00</p></div>
        <div class="add">
          <button type="submit">ADD TO CART</button>
        </div>
        <h3>
          If you could only take one board around the world, which would it be?
        </h3>
        <p>
          "I have a 7’2” egg design that Donald Takayama calls the Howard
          Special Mini. It’s a low rocker egg with a mid-volumed template. Not
          speedy, not bulbous like a mini-tanker. It has pinched rails and vee.
          Can be two-plus-one widowmaker, single or tri, making it super
          versatile. The perfect board." Text by Devon Howard and Glenn Sakamoto
          quoted via Liquid Salt Mag:
          <a
            href=" https://www.liquidsaltmag.com/volume2#/2012/05/devon-howard/"
            >devon-howard</a
          >
        </p>

        <div class="fin">
          <h4>Recommended Fin Setup:</h4>
          <ul>
            <li>
              - 2+1 FCS "widowmaker" set up: Howard Mini Fin w/ DT mini side
              bites (or FCS GX side fins)
            </li>
          </ul>
        </div>
        <div class="specs">
          <h4>Specs:</h4>
          <ul>
            <li>6'6" x 21 1/8" x 2 9/16</li>
            <li>7'0" x 21 1/4" x 2 3/4"</li>
            <li>7'2" x 21 1/2" x 2 3/4"</li>
            <li>7'4" x 21 5/8" x 2 7/8"</li>
            <li>7'6" x 21 3/4" x 2 7/8"</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ig">
      <div class="iframe1">
        <iframe
          class="instagram-media instagram-media-rendered"
          id="instagram-embed-0"
          src="https://www.instagram.com/p/1KNPpah849/embed/captioned/?cr=1&amp;v=12&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fmid-length%2Fhoward-special-mini%2F#%7B%22ci%22%3A0%2C%22os%22%3A4024.600000023842%2C%22ls%22%3A1840%2C%22le%22%3A2385.5%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="817"
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
            min-width: 395 px;
            padding: 0px;
          "
        ></iframe>
      </div>
      <div class="iframe2">
        <iframe
          class="instagram-media instagram-media-rendered"
          id="instagram-embed-1"
          src="https://www.instagram.com/p/BD_f4ltB8zp/embed/captioned/?cr=1&amp;v=12&amp;wp=449&amp;rd=https%3A%2F%2Fwww.surfboardsbydonaldtakayama.com&amp;rp=%2Fsurfboards%2Fmid-length%2Fhoward-special-mini%2F#%7B%22ci%22%3A1%2C%22os%22%3A4032.5%2C%22ls%22%3A1840%2C%22le%22%3A2385.5%7D"
          allowtransparency="true"
          allowfullscreen="true"
          frameborder="0"
          height="889"
          data-instgrm-payload-id="instagram-media-payload-1"
          scrolling="no"
          style="
            background: white;
            max-width: 4000px;
            width: calc(100% - 2px);
            border-radius: 3px;
            border: 1px solid rgb(219, 219, 219);
            box-shadow: none;
            display: block;
            margin: 0px 0px 12px;
            min-width: 394px;
            padding: 0px;
          "
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowardMiniComponent10",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.howardmini {
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
