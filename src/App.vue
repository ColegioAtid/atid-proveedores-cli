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

<style lang="scss" scoped>
#custom-bg {
  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

