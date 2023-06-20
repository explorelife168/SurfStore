<template>
  <div>
    <nav>
      <NavComponent />
    </nav>
    <div class="contaner">
      <TakayamaFunBoardComponent04 />
    </div>
    <footer>
      <FootComponent />
    </footer>
  </div>
</template>
<script>
import NavComponent from "@/components/NavComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import TakayamaFunBoardComponent04 from "../components/TakayamaFunBoardComponent04.vue";
export default {
  name: "TakayamaSurfBoardView02",
  components: { NavComponent, TakayamaFunBoardComponent04, FootComponent },
};
</script>

<style lang="scss"></style>
