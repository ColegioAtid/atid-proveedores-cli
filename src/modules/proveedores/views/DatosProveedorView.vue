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
              :data="dataToChild"
              :isPost="false"
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="teal" class="white--text pa-6" @click="updateProvInfo">
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { buildErrorMessage, getUserInfo } from "@/helpers/utils";
import { mapActions, mapMutations } from "vuex";
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
      dataToChild: {},
      datosGeneralesInfo: {},
      dataFormProveedores: null,
    };
  },
  methods: {
    /*  VUEX  */
    ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),
    ...mapMutations("proveedores", ["setCorreoUpdate", "setDataForm"]),
    ...mapActions("proveedores", [
      "getDataproveedor",
      "updateCorreoProv",
      "updateDataProv",
    ]),

    /* MÉTODOS DE COMPONENTE */

    /**
     * Función que sirve para actualizar los datos
     * generales de los proveedores
     */
    async updateProvInfo() {
      this.setDataForm(this.dataFormProveedores);
      this.setOverlayState({
        text: "Guardando información, espere por favor",
        visible: true,
      });
      try {
        await this.updateDataProv();
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

    /**
     * Función que sirve para actualizar el correo de contacto
     * del proveedor registrado
     */
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
    /**
     * Función que recibe la información
     * del EMIT del componente hijo "datos-proveedor-form"
     * para setear la información en el state
     */
    recibeDataProv({ data }) {
      this.dataFormProveedores = data;
    },

    /** FUNCIÓN QUE SIRVE PARA OBTENER LOS DATOS REGISTRADOS
     * DE LOS PROVEEDORES
     */
    async getDataProveedor() {
      try {
        let { rfc } = getUserInfo();
        let { proveedorData } = await this.getDataproveedor();
        this.datosGeneralesInfo = proveedorData.datosGenerales;
        this.correoUpdate.correoNuevo = proveedorData.correo;
        this.correoUpdate.rfc = rfc;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDataProveedor();
  },
  watch: {
    /**
     * Sirve para detectar los cambios de la información
     * cuando se hace la petición al servidor
     * y el valor de la variable "datosGeneralesInfo"
     * se llena
     */
    datosGeneralesInfo: {
      handler: function (dataUpdated) {
        delete dataUpdated.created_at;
        delete dataUpdated.updated_at;
        delete dataUpdated.idProveedor;
        this.dataToChild = dataUpdated;
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>