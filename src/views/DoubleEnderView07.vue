<template>
  <div>
    <NavComponent />
    <DoubleEnderComponent07 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import DoubleEnderComponent07 from "@/components/DoubleEnderComponent07.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "TakayamaSurfBoardView-modelt",
  components: { NavComponent, DoubleEnderComponent07, FootComponent },
};
</script>
