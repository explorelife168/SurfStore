<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <DoubleEnderComponent07 />
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
        <DoubleEnder390Component07 />
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
import DoubleEnderComponent07 from "@/components/DoubleEnderComponent07.vue";
import DoubleEnder390Component07 from "@/components/DoubleEnder390Component07.vue";
import FootComponent from "@/components/FootComponent.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "DoubleEnderView07",
  components: {
    NavComponent,
    Nav390Component,
    DoubleEnderComponent07,
    DoubleEnder390Component07,
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
