<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="mx-auto my-6 pa-3" shaped>
        <h3 class="display-1 text-center">
          Sistema de registro para proveedores
        </h3>
        <p class="my-5 mx-7">
          Por favor, ingresa los siguientes datos para poder darte de alta en el
          sistema:
        </p>

        <datos-proveedor-form />
        <documentos-proveedor-component />

        <v-card-actions>
          <v-btn color="success" class="white--text pa-6" @click="sendForm">
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DatosProveedorForm from "../components/DatosProveedorForm.vue";
import DocumentosProveedorComponent from "../components/DocumentosProveedorComponent.vue";
export default {
  components: { DatosProveedorForm, DocumentosProveedorComponent },
  name: "ProveedorHomeView",
  methods: {
    sendForm() {
      alert("Hola");
    },
  },
};
</script>

<style>
</style>