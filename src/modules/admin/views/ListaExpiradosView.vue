<template>
    <v-container>
    <!-- Progress data -->
    <div v-if="false" class="text-center mt-6">
      <v-progress-circular
        :size="70"
        color="teal"
        indeterminate
      ></v-progress-circular>
      <p>Cargando datos...</p>
    </div>
    <!-- End progress data -->
    <v-card v-else :elevation="10">
      <v-card-title> Lista de proveedores con documentos ya expirados </v-card-title>
      <v-card-text>En la tabla de abajo se muestran a todos los proveedores cuya documentacion ya ha expirado.</v-card-text>

      <!-- Table data -->
      <data-table-component :data="listaExpirados" />
      <!-- end table data -->
    </v-card>
  </v-container>
</template>

<script>
import DataTableComponent from '../components/DataTableComponent.vue'
export default {
    components:{
        DataTableComponent
    },
    data(){
        return{
            listaExpirados:[]
        }
    }
}
</script>