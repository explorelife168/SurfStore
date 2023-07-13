<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <TakayamaFunBoardComponent04 />
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
        <TakayamaFunBoard390Component04 />
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
import TakayamaFunBoardComponent04 from "../components/TakayamaFunBoardComponent04.vue";
import TakayamaFunBoard390Component04 from "../components/TakayamaFunBoard390Component04.vue";
export default {
  name: "TakayamaFunBoardView04",
  components: {
    NavComponent,
    Nav390Component,
    TakayamaFunBoardComponent04,
    TakayamaFunBoard390Component04,
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
