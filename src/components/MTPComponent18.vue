<template>
  <div class="mtpfin">
    <div class="link">
      <ol>
        <li>
          <Router-link to="/SurfBoards"><span>SurfBoards</span></Router-link>
        </li>
        <li>
          <Router-link to="/Fins"><span>FINS</span></Router-link>
        </li>
        <li>
          <Router-link to="/SurfBoards/Fins/MTPView"
            ><span>MTP FIN</span></Router-link
          >
        </li>
      </ol>
    </div>
    <div class="mtp">
      <div class="pic">
        <img src="../Pic/MTPFin.jpeg" alt="" />
      </div>
      <div class="txt">
        <div class="name">
          <h2>MTP FIN</h2>
        </div>

        <h3>A True Classic!</h3>
        <p>
          A true classic, pivot style fin for more tradtional square tail
          boards. The MTP will help with noseriding and freeing up the tail of a
          heavy, single fin log. Can also be used on any other type of board for
          a more tradtional feel or if you want the tail to really hold in when
          on the nose.
        </p>
        <br />
        <p>Available size: 9", 9.5" and 10"</p>
        <br />
        <p>
          *Interested in purchasing this fin? Please go to a dealer near you or
          you can also buy it online here (check out via Noah Ka Oi Surf online
          store).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scorpion2Component16",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.mtpfin {
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
.mtp {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0 50px 0;
  .pic {
    img {
      width: 400 px;
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
    p {
      line-height: 26px;
    }
  }
}
</style>
