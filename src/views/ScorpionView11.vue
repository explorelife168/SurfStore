<template>
  <div>
    <NavComponent />
    <ScorpionComponent11 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import ScorpionComponent11 from "../components/ScorpionComponent11.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "ScorpionView11",
  components: { NavComponent, ScorpionComponent11, FootComponent },
};
</script>
