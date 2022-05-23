<template>
  <v-container>
    <v-sheet color="white pa-3" elevation="16" class="justify-center">     
      <v-card elevation="3" class="mx-auto mt-7" outlined>
        <v-card-title> Historial de actualizacion del archivo (Opinión de cumplimiento) </v-card-title>
        <v-card-subtitle>
          Documentos anexados por el proveedor          
        </v-card-subtitle>
        <v-card-text v-if="listaHistoricos">
          <div class="mt-7" v-for="documento in listaHistoricos.historico" :key="documento">
            <h3 class="text-center display-5">{{documento}}</h3>            
            <iframe
              width="100%"
              height="400"
              :src="`https://www.atid.edu.mx/proveedoresDocumentos/${documento}`"
              frameborder="0"
            />
          </div>
        </v-card-text>
        <v-card-text v-else>
          <p>Sin documentos registrados</p>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      listaHistoricos:null,
    };
  },
  computed:{
    ...mapGetters('admin',['getListaFilesProveedores']),    
  },

  methods:{
    init(){
      this.listaHistoricos = this.getListaFilesProveedores()
      if(!this.listaHistoricos){
        this.$router.push('/admin');
      }
    }
  },
  created(){
    this.init()
  }

};
</script>