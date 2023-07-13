<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div class="contaner">
        <TakayamaSurfBoardComponent02 />
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
        <TakayamaSurfBoard390Component02 />
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
import TakayamaSurfBoardComponent02 from "../components/TakayamaSurfBoardComponent02.vue";
import TakayamaSurfBoard390Component02 from "../components/TakayamaSurfBoard390Component02.vue";
export default {
  name: "TakayamaSurfBoard390View02",
  components: {
    NavComponent,
    Nav390Component,
    TakayamaSurfBoardComponent02,
    TakayamaSurfBoard390Component02,
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
