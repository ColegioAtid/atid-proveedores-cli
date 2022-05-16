<template>
  <v-container>
    <!-- Progress data -->
    <progress-component v-if="loading" />
    <!-- End progress data -->
    <v-card v-else :elevation="10">
      <v-card-title> Lista de proveedores </v-card-title>
      <v-card-text>En la tabla de abajo se muestran a todos los proveedores cuya documentacion ya fue previamente validada y aún no ha expirado.</v-card-text>
      <!-- Table data -->
      <data-table-component :data="proveedoresList" />
      <!-- end table data -->
    </v-card>
  </v-container>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import DataTableComponent from '../components/DataTableComponent.vue';
import ProgressComponent from '../../../components/ProgressComponent.vue';

export default {
  components:{
    DataTableComponent,
    ProgressComponent

  },
  data() {
    return {   
      loading:false,      
      proveedoresList: []
    };
  },

  methods: {
      /* Vuex */
      ...mapActions('admin',['getListaProveedoresAction']),      
      ...mapMutations("shared", [
          "setShowErrorOrSuccessAlert",          
        ]),
      /* Local */
      init: async function (){        
          this.loading = true
          await this.getListaProveedoresAction()
          this.proveedoresList = this.getListaProveedoresState()
          this.loading = false        
      }      
    },

  computed: {
    /* Vuex */
    ...mapGetters('admin',['getListaProveedoresState']),   
  },

  created(){
    this.init()
  }
};
</script>