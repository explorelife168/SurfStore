<template>
  <div class="footer">
    <div class="top">
      <div class="subscribe">
        <div class="label">
          <label for="">Subscribe to our mailing list</label>
          <input type="text" placeholder="email address" />
        </div>
        <div class="button">
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="nav-1">
        <ul>
          <li><Router-link to="/">HOME</Router-link></li>
          <li><Router-link to="/SurfBoards">SURFBOARDS</Router-link></li>
          <li><Router-link to="/Fins">FINS</Router-link></li>
          <li><Router-link to="/Accessories">ACCESSORIES</Router-link></li>
          <li><Router-link to="/contact">CONTACT</Router-link></li>
        </ul>
        <div class="copyright">
          <p>
            Copyright 2023 by Surfboards by Donald Takayama/Hawaiian Pro Designs
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot390Component",
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.footer {
  margin: 25px 0 0 0;
  margin: 0 auto;

  .top {
    width: 100%;
    height: 100px;
    background-color: rgba(88, 88, 88, 0.65);
    margin: 20px 0 0 0;

    .subscribe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 390px;
      height: 100%;
      margin: 0 10px;

      label {
        color: white;
        margin: 10px 1px;
      }
      input {
        margin: 10px 0px;
      }

      button {
        width: 100px;
        height: 25px;
        border-radius: 4px;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        border: none;
        font-size: 14px;
        font-family: "Lucida Grande", Arial, Verdana, san-serif;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .down {
    height: 250px;
    background-color: #0e1215;
    position: relative;
    .nav-1 {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      position: relative;
      ul {
        width: 390px;
        height: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;

        li {
          margin: 5px 10px;
          a {
            text-decoration: none;
            color: white;
          }
        }
      }
      .copyright {
        position: absolute;
        bottom: 25px;
        p {
          color: white;
          font-size: 8px;
          margin: 5px 10px;
        }
      }
    }
  }
}
</style>
