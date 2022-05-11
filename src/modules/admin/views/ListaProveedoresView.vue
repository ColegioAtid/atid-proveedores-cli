<template>
  <v-container>
    <!-- Progress data -->
    <progress-component v-if="false" />
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
import { mapActions, mapGetters } from 'vuex';
import DataTableComponent from '../components/DataTableComponent.vue';
import ProgressComponent from '../../../components/ProgressComponent.vue';

export default {
  components:{
    DataTableComponent,
    ProgressComponent

  },
  data() {
    return {         
      proveedoresList: []
    };
  },

  methods: {
      /* Vuex */
      ...mapActions('admin',['getListaProveedoresAction']),
      /* Local */
      init(){
        this.getListaProveedoresAction()
        this.proveedoresList = this.getListaProveedoresState()
      }
      
    },

  computed: {
    /* Vuex */
    ...mapGetters('admin',['getListaProveedoresState']),
    /* Local */    
  },

  created(){
    this.init()
  }
};
</script>