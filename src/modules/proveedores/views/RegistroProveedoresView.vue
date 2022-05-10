<template>
    <v-row no-gutters>
      <v-col cols="12">
        <proveedores-form-component />
      </v-col>
    </v-row>
</template>

<script>
import ProveedoresFormComponent from "../components/ProveedoresFormComponent.vue";
export default {
  components: { ProveedoresFormComponent },
  name: "ProveedorHomeView",
};
</script>

<style>
</style>