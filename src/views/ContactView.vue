<template>
  <div>
    <NavComponent />
    <ContactComponent />
    <FootComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
export default {
  name: "AccessoriesView",
  components: { NavComponent, ContactComponent, FootComponent },
};
</script>
