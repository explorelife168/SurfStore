<template>
  <div>
    <nav>
      <NavComponent />
    </nav>
    <div class="contaner">
      <TakayamaSurfBoardComponent02 />
    </div>
    <footer>
      <FootComponent />
    </footer>
  </div>
</template>
<script>
import NavComponent from "@/components/NavComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import TakayamaSurfBoardComponent02 from "../components/TakayamaSurfBoardComponent02.vue";
export default {
  name: "TakayamaSurfBoardView02",
  components: { NavComponent, TakayamaSurfBoardComponent02, FootComponent },
};
</script>

<style lang="scss"></style>
