<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <MTPComponent18 />
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
        <MTP390Component18 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import MTPComponent18 from "../components/MTPComponent18.vue";
import FootComponent from "@/components/FootComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import MTP390Component18 from "../components/MTP390Component18.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "MTPView18 ",
  components: {
    NavComponent,
    MTPComponent18,
    FootComponent,
    Nav390Component,
    MTP390Component18,
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
