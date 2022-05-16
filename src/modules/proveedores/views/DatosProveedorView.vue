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
          <v-form lazy-validation ref="correoField">
            <v-text-field
              outlined
              color="teal"
              type="email"
              v-model="correoUpdate.correoNuevo"
              :rules="emailRules"
              label="Correo"
              required
            ></v-text-field>
          </v-form>
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
            <datos-proveedor-form
              @validForm="recibeDataProv"
              :dataToUpdate="datosProveedor.datosGenerales"
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="isValidToSend"
            color="teal"
            class="white--text pa-6"
            @click="check"
          >
            Actualizar
          </v-btn>
        </v-card-actions>
        {{datosProveedor().rfc}}
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { buildErrorMessage } from "@/helpers/utils";
import { mapActions, mapMutations, mapState } from "vuex";
import DatosProveedorForm from "../components/DatosProveedorForm.vue";

export default {
  components: { DatosProveedorForm },
  data() {
    return {
      correoUpdate: {
        rfc: null,
        correoNuevo: null,
      },
      emailRules: [
        (v) => !!v || "Campo requerido",
        (v) => /.+@.+\..+/.test(v) || "El formato no es válido",
      ],
      isValidToSend: true,
      datosProveedorInfo: {},
    };
  },
  methods: {
    /*  VUEX  */
    ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),
    ...mapMutations("proveedores", ["setCorreoUpdate"]),

    ...mapActions("proveedores", ["getDataproveedor", "updateCorreoProv"]),
    ...mapState("proveedores",["datosProveedor"]),

    /**  FUNCIONES  */

    check() {
      // console.log(this.$refs.correoField.validate());
      // // if(this.correoField){
      // // }
    },
    async updateCorreo() {
      if (!this.$refs.correoField.validate()) return;

      this.setCorreoUpdate(this.correoUpdate);
      this.setOverlayState({
        text: "Guardando información, espere por favor",
        visible: true,
      });
      try {
        await this.updateCorreoProv();
        this.setShowErrorOrSuccessAlert({
          message: "¡Información guardada exitosamente!",
          success: true,
        });
        this.setOverlayState({ text: "", visible: false });
        this.getDataProveedor();
      } catch (error) {
        // Error
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        });
        this.setOverlayState({ text: "", visible: false });
      }
    },
    recibeDataProv({ data, isValid }) {
      if (isValid) this.isValidToSend = false;
      console.log(data);
      console.log(isValid);
    },
    /** FUNCIÓN QUE SIRVE PARA OBTENER LOS DATOS REGISTRADOS
     * DE LOS PROVEEDORES
     */
    async getDataProveedor() {
      try {
        let { proveedorData } = await this.getDataproveedor();
        this.correoUpdate.correoNuevo = proveedorData.correo;
        this.correoUpdate.rfc = proveedorData.rfc;
        this.datosProveedorInfo = proveedorData;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDataProveedor();
  },
};
</script>

<style>
</style>