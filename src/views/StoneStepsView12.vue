<template>
  <div>
    <NavComponent />
    <StoneStepsComponent12 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import StoneStepsComponent12 from "@/components/StoneStepsComponent12.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "StoneStepsView12",
  components: { NavComponent, StoneStepsComponent12, FootComponent },
};
</script>
