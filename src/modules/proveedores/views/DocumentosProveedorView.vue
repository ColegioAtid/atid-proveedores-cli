<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto my-6 pa-4" shaped>
        <h3 class="display-1 text-center">Documentos anexados</h3>
        <v-img height="150" contain src="@/assets/proveedor/files.png">
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
            <h1>Hola</h1>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="teal" class="white--text pa-6" @click="check">
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tipoPersona: null,
    };
  },
  computed: {
    ...mapGetters("proveedores", ["getDataProveedor", "getDocumentos"]),
  },
  methods: {
    check() {
      console.log(
        this.$refs.documentosForm.$refs.documentosProveedorForm.validate()
      );
    },
  },
  mounted() {
    this.tipoPersona = this.getDataProveedor().tipo_persona;
  },
};
</script>

<style>
</style>
