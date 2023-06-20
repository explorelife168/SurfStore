<template>
  <div>
    <NavComponent />
    <AccessoriesComponent />
    <ShowModelComponent />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import AccessoriesComponent from "../components/AccessoriesComponent.vue";
import ShowModelComponent from "../components/ShowModelComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "AccessoriesView",
  components: {
    NavComponent,
    AccessoriesComponent,
    ShowModelComponent,
    FootComponent,
  },
};
</script>
