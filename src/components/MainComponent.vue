<template>
  <main class="main">
    <div class="pic-area-1">
      <div class="pic1" @click="enlargeHandler">
        <img :src="assPic1" alt="" />
      </div>
      <div class="pic2" @click="enlargeHandler2">
        <img :src="assPic2" alt="" />
      </div>
      <div class="pic3" @click="enlargeHandler3">
        <img :src="assPic3" alt="" />
      </div>
    </div>
    <div class="pic-area-2">
      <div class="pic4" @click="enlargeHandler4">
        <img :src="assPic4" alt="" />
      </div>
      <div class="pic5" @click="enlargeHandler5">
        <img :src="assPic5" alt="" />
      </div>
      <div class="pic6" @click="enlargeHandler6">
        <img :src="assPic6" alt="" />
      </div>
    </div>
    <div class="changeAC">
      <!-- Click Img -->
      <div v-if="isActive" class="popUpImg">
        <span @click="closeHandler">&times;</span>
        <img :src="assPic1" alt="" />
      </div>
      <div v-if="isActive2" class="popUpImg2">
        <span @click="closeHandler2">&times;</span>
        <img :src="assPic2" alt="" />
      </div>
      <div v-if="isActive3" class="popUpImg3">
        <span @click="closeHandler3">&times;</span>
        <img :src="assPic3" alt="" />
      </div>
      <div v-if="isActive4" class="popUpImg4">
        <span @click="closeHandler4">&times;</span>
        <img :src="assPic4" alt="" />
      </div>
      <div v-if="isActive5" class="popUpImg5">
        <span @click="closeHandler5">&times;</span>
        <img :src="assPic5" alt="" />
      </div>
      <div v-if="isActive6" class="popUpImg6">
        <span @click="closeHandler6">&times;</span>
        <img :src="assPic6" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
  methods: {
    // Enlarge Img
    enlargeHandler: function () {
      this.isActive = !this.isActive;
    },
    enlargeHandler2: function () {
      this.isActive2 = !this.isActive2;
    },
    enlargeHandler3: function () {
      this.isActive3 = !this.isActive3;
    },
    enlargeHandler4: function () {
      this.isActive4 = !this.isActive4;
    },
    enlargeHandler5: function () {
      this.isActive5 = !this.isActive5;
    },
    enlargeHandler6: function () {
      this.isActive6 = !this.isActive6;
    },

    // Close Img
    closeHandler: function () {
      this.isActive = !this.isActive;
    },
    closeHandler2: function () {
      this.isActive2 = !this.isActive2;
    },
    closeHandler3: function () {
      this.isActive3 = !this.isActive3;
    },
    closeHandler4: function () {
      this.isActive4 = !this.isActive4;
    },
    closeHandler5: function () {
      this.isActive5 = !this.isActive5;
    },
    closeHandler6: function () {
      this.isActive6 = !this.isActive6;
    },
  },
  data() {
    return {
      assPic1: require("../assets/person-1.jpeg"),
      assPic2: require("../assets/person-2.jpeg"),
      assPic3: require("../assets/person-3.jpeg"),
      assPic4: require("../assets/person-4.jpeg"),
      assPic5: require("../assets/person-5.jpeg"),
      assPic6: require("../assets/person-6.jpeg"),
      isActive: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false,
    };
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  margin: 90px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pic-area-1 {
    display: flex;
    justify-content: center;

    .pic1,
    .pic2,
    .pic3 {
      height: 250px;
      margin: 1.5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .pic-area-2 {
    display: flex;
    justify-content: center;

    .pic4,
    .pic5,
    .pic6 {
      width: 263.75px;
      margin: 1.5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.pic1,
.pic2,
.pic3,
.pic4,
.pic5,
.pic6 {
  img:hover {
    transform: scale(1.05);
    transition: 0.2s linear;
  }
}

.main {
  .popUpImg {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 100;
    span {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 60px;
      font-weight: bolder;
      color: white;
      cursor: pointer;
      z-index: 100;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      height: 500px;
      object-fit: cover;
    }
  }
  .popUpImg2 {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 100;
    span {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 60px;
      font-weight: bolder;
      color: white;
      cursor: pointer;
      z-index: 100;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      height: 400px;
      object-fit: cover;
    }
  }
  .popUpImg3 {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 100;
    span {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 60px;
      font-weight: bolder;
      color: white;
      cursor: pointer;
      z-index: 100;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      height: 400px;
      object-fit: cover;
    }
  }
  .popUpImg4 {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 100;
    span {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 60px;
      font-weight: bolder;
      color: white;
      cursor: pointer;
      z-index: 100;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      height: 400px;
      object-fit: cover;
    }
  }
  .popUpImg5 {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 100;
    span {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 60px;
      font-weight: bolder;
      color: white;
      cursor: pointer;
      z-index: 100;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      height: 400px;
      object-fit: cover;
    }
  }
  .popUpImg6 {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 100;
    span {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 60px;
      font-weight: bolder;
      color: white;
      cursor: pointer;
      z-index: 100;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      height: 400px;
      object-fit: cover;
    }
  }
}
</style>
