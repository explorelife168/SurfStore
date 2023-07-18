<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <RPComponent19 />
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
        <RP390Component19 />
      </div>
      <footer>
        <Foot390Component />
      </footer>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import RPComponent19 from "../components/RPComponent19.vue";
import FootComponent from "@/components/FootComponent.vue";
import Nav390Component from "@/components/Nav390Component.vue";
import RP390Component19 from "../components/RP390Component19.vue";
import Foot390Component from "@/components/Foot390Component.vue";

export default {
  name: "RPView19 ",
  components: {
    NavComponent,
    RPComponent19,
    FootComponent,
    Nav390Component,
    RP390Component19,
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
