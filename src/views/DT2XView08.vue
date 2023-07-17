<template>
  <div>
    <div class="show">
      <nav>
        <NavComponent />
      </nav>
      <div>
        <DT2XComponent08 />
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
        <DT2X390Component08 />
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
import DT2XComponent08 from "@/components/DT2XComponent08.vue";
import DT2X390Component08 from "@/components/DT2X390Component08.vue";
import FootComponent from "@/components/FootComponent.vue";
import Foot390Component from "@/components/Foot390Component.vue";
export default {
  name: "DTX2View08",
  components: {
    NavComponent,
    Nav390Component,
    DT2XComponent08,
    DT2X390Component08,
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
