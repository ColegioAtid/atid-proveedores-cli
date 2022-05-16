<template>
    <v-container>
    <!-- Progress data -->
    <progress-component v-if="loading" />
    <!-- End progress data -->
    <v-card v-else :elevation="10">
      <v-card-title> Proveedores con documentación no validada </v-card-title>
      <v-card-text>En la tabla de abajo se muestran a todos los proveedores cuya documentacion aún no ha sido validada.</v-card-text>

      <!-- Table data -->
      <data-table-component :data="listaNoValidados" />
      <!-- end table data -->
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DataTableComponent from '../components/DataTableComponent.vue'
import ProgressComponent from '../../../components/ProgressComponent.vue'
export default {
    components:{
        DataTableComponent,
        ProgressComponent
    },
    data(){
        return{
          loading:false,
          listaNoValidados:[]
        }
    },
    computed:{
      /* Vuex */
      ...mapGetters('admin',['getListaProvNoValidosState']),
      /* Local */
    },
    methods:{
      /* Vuex */
      ...mapActions('admin',['getListaNoValidosAction']),
      /* Local */
      init: async function(){
        this.loading = true
        await this.getListaNoValidosAction()
        this.loading = false
        this.listaNoValidados = this.getListaProvNoValidosState()
      }
    },
    created(){
      this.init()
    }
}
</script>