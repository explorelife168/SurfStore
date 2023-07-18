<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <FinsComponent17 />
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
        <Fins390Component17 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>
<script>
import NavComponent from "@/components/NavComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import FinsComponent17 from "../components/FinsComponent17.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import Foot390Component from "@/components/Foot390Component.vue";
import Fins390Component17 from "../components/Fins390Component17.vue";
export default {
  name: "FinsView17",
  components: {
    NavComponent,
    FinsComponent17,
    FootComponent,
    Nav390Component,
    Fins390Component17,
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
