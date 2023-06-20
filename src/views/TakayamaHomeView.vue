<template>
  <nav>
    <NavComponent />
    <MainComponent />
    <Main2Component />
    <FootComponent />
  </nav>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import Main2Component from "@/components/Main2Component.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "TakayamaHomeView",
  components: { NavComponent, MainComponent, Main2Component, FootComponent },
};
</script>
