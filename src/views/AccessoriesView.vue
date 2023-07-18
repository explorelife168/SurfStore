<template>
  <div>
    <div class="show">
      <NavComponent />
      <AccessoriesComponent />
      <ShowModelComponent />
      <ShowCartModelComponent />
      <FootComponent />
    </div>
    <div class="show-390">
      <Nav390Component />
      <Accessories390Component />
      <ShowModel390Component />
      <ShowCartModelComponent />
      <Foot390Component />
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import AccessoriesComponent from "../components/AccessoriesComponent.vue";
import Accessories390Component from "../components/Accessories390Component.vue";
import ShowModelComponent from "../components/ShowModelComponent.vue";
import ShowModel390Component from "../components/ShowModel390Component.vue";
import ShowCartModelComponent from "../components/ShowCartModelComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "AccessoriesView",
  components: {
    NavComponent,
    Nav390Component,
    AccessoriesComponent,
    Accessories390Component,
    ShowModelComponent,
    ShowModel390Component,
    ShowCartModelComponent,
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
