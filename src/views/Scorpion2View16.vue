<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <Scorpion2Component16 />
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
        <Scorpion2390Component16 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import Scorpion2Component16 from "../components/Scorpion2Component16.vue";
import FootComponent from "@/components/FootComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import Scorpion2390Component16 from "../components/Scorpion2390Component16.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "Scorpion2View16 ",
  components: {
    NavComponent,
    Scorpion2Component16,
    FootComponent,
    Nav390Component,
    Scorpion2390Component16,
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
