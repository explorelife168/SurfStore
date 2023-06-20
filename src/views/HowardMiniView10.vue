<template>
  <div>
    <NavComponent />
    <HowardMiniComponent10 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import HowardMiniComponent10 from "../components/HowardMiniComponent10.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "HowardMiniView10",
  components: { NavComponent, HowardMiniComponent10, FootComponent },
};
</script>
