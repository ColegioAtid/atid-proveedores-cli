<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto my-6 pa-4" shaped>
        <h3 class="display-1 text-center">Datos de proveedor</h3>
        <v-img height="150" contain src="@/assets/proveedor/data.png">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="teal lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>

        <v-card-title class="text-subtitle-1">
          Aquí podrás actualizar el correo registrado:
        </v-card-title>

        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            type="email"
            v-model="correoUpdate.correo"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>
          <v-btn color="teal" class="white--text pa-6" @click="updateCorreo">
            Actualizar correo
          </v-btn>
        </v-col>

        <v-card-title class="text-subtitle-1">
          A continuación, se muestran los datos registrados al almacenados en el
          sistema:
        </v-card-title>

        <v-card-text>
          <div class="text-body-1">
            <datos-proveedor-form ref="datosProveedor" />
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
import DatosProveedorForm from "../components/DatosProveedorForm.vue";

export default {
  components: { DatosProveedorForm },
  data() {
    return {
      correoUpdate: {
        rfc: null,
        correo: null,
      },
      emailRules: [
        (v) => !!v || "Campo requerido",
        (v) => /.+@.+\..+/.test(v) || "El formato no es válido",
      ],
    };
  },
  methods: {
    check() {
      console.log(this.$refs.datosProveedor.$refs.formDataProv.validate());
    },
    updateCorreo(){
      this.correoUpdate.rfc = "GOM990730NI5";
      console.log(this.correoUpdate);
    }
  },
};
</script>

<style>
</style>