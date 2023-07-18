<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <StoneSteps2Component13 />
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
        <StoneSteps2390Component13 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import StoneSteps2Component13 from "@/components/StoneSteps2Component13.vue";
import FootComponent from "@/components/FootComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import StoneSteps2390Component13 from "@/components/StoneSteps2390Component13.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "StoneSteps2View13",
  components: {
    NavComponent,
    StoneSteps2Component13,
    FootComponent,
    Nav390Component,
    StoneSteps2390Component13,
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
