<template>
  <v-row no-gutters>
    <v-col cols="12">
      <h3 class="display-1 text-center">Datos de proveedor</h3>

      <v-card class="mx-auto my-6" shaped>
        <v-img height="150" contain src="@/assets/files.png">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="teal lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>

        <v-card-title class="text-subtitle-1">
          A continuación, se muestran los datos registrados al almacenados en el
          sistema:
        </v-card-title>

        <v-card-text>
          <div class="text-body-1">
            <documentos-proveedor-component ref="documentosForm" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="teal" class="white--text pa-6" @click="check"> Actualizar </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DocumentosProveedorComponent from "../components/DocumentosProveedorComponent.vue";
export default {
  components: { DocumentosProveedorComponent },
  methods: {
   check(){
     console.log(this.$refs.documentosForm.$refs.documentosProveedorForm.validate());
   }
  },
};
</script>

<style>
</style>
