<template>
  <div>
    <NavComponent />
    <MTPComponent18 />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import MTPComponent18 from "../components/MTPComponent18.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "MTPView18 ",
  components: { NavComponent, MTPComponent18, FootComponent },
};
</script>
