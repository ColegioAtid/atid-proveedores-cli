<template>
  <v-app id="custom-bg">
    <!-- Overlay  loadding -->
    <overlay-component />
    <router-view />

    <!-- SUCCESS MESSAGE -->
    <success-error-message />
  </v-app>
</template>

<script>
import SuccessErrorMessage from "@/modules/shared/components/SuccessErrorMessage.vue";
import OverlayComponent from "./modules/shared/components/OverlayComponent.vue";
export default {
  name: "App",
  components: {
    SuccessErrorMessage,
    OverlayComponent,
  },

  data: () => ({
    currentYear: new Date().getFullYear(),
  }),
};
</script>

