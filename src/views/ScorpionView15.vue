<template>
  <div>
    <NavComponent />
    <ScorpionComponent15 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import ScorpionComponent15 from "../components/ScorpionComponent15.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "ScorpionView15 ",
  components: { NavComponent, ScorpionComponent15, FootComponent },
};
</script>
