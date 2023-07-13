<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <TakayamaLongBoardComponent03 />
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
        <TakayamaLongBoard390Component03 />
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
import TakayamaLongBoardComponent03 from "../components/TakayamaLongBoardComponent03.vue";
import TakayamaLongBoard390Component03 from "../components/TakayamaLongBoard390Component03.vue";
export default {
  name: "TakayamaSurfBoard390View02",
  components: {
    NavComponent,
    Nav390Component,
    TakayamaLongBoardComponent03,
    TakayamaLongBoard390Component03,
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
