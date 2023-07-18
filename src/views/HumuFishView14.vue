<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <HumuFishComponent14 />
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
        <HumuFish390Component14 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import HumuFishComponent14 from "@/components/HumuFishComponent14.vue";
import FootComponent from "@/components/FootComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import HumuFish390Component14 from "@/components/HumuFish390Component14.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "HumuFishView14 ",
  components: {
    NavComponent,
    HumuFishComponent14,
    FootComponent,
    Nav390Component,
    HumuFish390Component14,
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
