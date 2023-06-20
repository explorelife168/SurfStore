<template>
  <div>
    <NavComponent />
    <ModelTComponent />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import ModelTComponent from "../components/ModelTComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "TakayamaSurfBoardView-modelt",
  components: { NavComponent, ModelTComponent, FootComponent },
};
</script>
