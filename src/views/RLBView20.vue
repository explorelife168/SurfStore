<template>
  <div>
    <NavComponent />
    <RLBComponent20 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import RLBComponent20 from "../components/RLBComponent20.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "RLBView20 ",
  components: { NavComponent, RLBComponent20, FootComponent },
};
</script>
