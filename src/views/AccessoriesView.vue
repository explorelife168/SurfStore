<template>
  <div>
    <NavComponent />
    <AccessoriesComponent />
    <ShowModelComponent />
    <ShowCartModelComponent />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import AccessoriesComponent from "../components/AccessoriesComponent.vue";
import ShowModelComponent from "../components/ShowModelComponent.vue";
import ShowCartModelComponent from "../components/ShowCartModelComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "AccessoriesView",
  components: {
    NavComponent,
    AccessoriesComponent,
    ShowModelComponent,
    ShowCartModelComponent,
    FootComponent,
  },
};
</script>
