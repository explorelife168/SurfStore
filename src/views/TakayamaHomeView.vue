<template>
  <div>
    <nav class="show">
      <NavComponent />
      <MainComponent />
      <Main2Component />
      <FootComponent />
    </nav>
    <nav class="show-390">
      <Nav390Component />
      <Main390Component />
      <Main2390Component />
      <Foot390Component />
    </nav>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import MainComponent from "@/components/MainComponent.vue";
import Main390Component from "@/components/Main390Component.vue";
import Main2Component from "@/components/Main2Component.vue";
import Main2390Component from "@/components/Main2390Component.vue";
import FootComponent from "@/components/FootComponent.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "TakayamaHomeView",
  components: {
    NavComponent,
    Nav390Component,
    MainComponent,
    Main390Component,
    Main2Component,
    Main2390Component,
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

@media screen and (max-width: 600px) {
  .show {
    display: none;
  }
  .show-390 {
    display: block;
  }
}
</style>
