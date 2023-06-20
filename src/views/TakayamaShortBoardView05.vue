<template>
  <div>
    <NavComponent />
    <TakayamaShortBoardComponent05 />
    <FootComponent />
  </div>
</template>
<script>
import NavComponent from "@/components/NavComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import TakayamaShortBoardComponent05 from "../components/TakayamaShortBoardComponent05.vue";
export default {
  name: "TakayamaSurfBoardView02",
  components: { NavComponent, TakayamaShortBoardComponent05, FootComponent },
};
</script>

<style lang="scss"></style>
