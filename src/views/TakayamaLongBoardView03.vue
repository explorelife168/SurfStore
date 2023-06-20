<template>
  <div>
    <nav>
      <NavComponent />
    </nav>
    <div>
      <TakayamaLongBoardComponent03 />
    </div>
    <footer>
      <FootComponent />
    </footer>
  </div>
</template>
<script>
import NavComponent from "@/components/NavComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import TakayamaLongBoardComponent03 from "../components/TakayamaLongBoardComponent03.vue";
export default {
  name: "TakayamaSurfBoardView02",
  components: { NavComponent, TakayamaLongBoardComponent03, FootComponent },
};
</script>

<style lang="scss"></style>
