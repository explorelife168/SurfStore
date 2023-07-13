<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <TakayamaShortBoardComponent05 />
      </div>
      <footer>
        <FootComponent />
      </footer>
    </div>
    <div class="show-390">
      <nav>
        <Nav390Component />
      </nav>
      <div>
        <TakayamaShortBoard390Component05 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>
<script>
import NavComponent from "@/components/NavComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import FootComponent from "@/components/FootComponent.vue";
import Foot390Component from "@/components/Foot390Component.vue";
import TakayamaShortBoardComponent05 from "../components/TakayamaShortBoardComponent05.vue";
import TakayamaShortBoard390Component05 from "../components/TakayamaShortBoard390Component05.vue";
export default {
  name: "TakayamaSurfBoardView02",
  components: {
    NavComponent,
    Nav390Component,
    TakayamaShortBoardComponent05,
    TakayamaShortBoard390Component05,
    FootComponent,
    Foot390Component,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.show {
  display: block;
}
.show-390 {
  display: none;
}

@media screen and (max-width: 1400px) {
  .show {
    display: block;
  }
  .show-390 {
    display: none;
  }
}

@media screen and (max-width: 391px) {
  .show {
    display: none;
  }
  .show-390 {
    display: block;
  }
}
</style>
