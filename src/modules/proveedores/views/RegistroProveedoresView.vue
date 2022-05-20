<template>
  <v-container>
    <progress-component
      v-if="!getDataProveedor()"
      :color="'purple'"
      :size="80"
    />
    <v-row no-gutters v-else>
      <v-col cols="12">
        <v-card class="mx-auto my-6 pa-4" shaped>
          <h3 class="display-1 text-center">
            Sistema de registro para proveedores
          </h3>
          <p class="my-5 mx-7">
            Por favor, ingresa los siguientes datos para poder darte de alta en
            el sistema:
          </p>

          <datos-proveedor-form @validForm="recibeDataProv" :isPost="true" />
          <documentos-proveedor-component
            @validDocs="recibeDocs"
          />
          <v-card-actions>
            <v-btn
              :disabled="verificaValidsForms"
              color="teal"
              class="white--text pa-6"
              @click="sendForm"
            >
              Enviar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import DatosProveedorForm from "../components/DatosProveedorForm.vue";
import DocumentosProveedorComponent from "../components/DocumentosProveedorComponent.vue";
import { buildErrorMessage } from "@/helpers/utils";
import ProgressComponent from '@/components/ProgressComponent.vue';
export default {
  components: { DatosProveedorForm, DocumentosProveedorComponent, ProgressComponent },
  name: "ProveedorHomeView",
  data() {
    return {
      dataFormProveedores: null,
      isValidProveedoresData: false,
      isValidDocsData: false,
      files: [],
    };
  },
  methods: {
    /* VUEX */
    ...mapMutations("proveedores", ["setDataForm"]),
    ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),
    ...mapActions("proveedores", ["sendFilesproveedor", "sendDataProveedor"]),
    /* MÉTODOS DE COMPONENTE */

    /**
     * Fución que manda la información
     * general y documentos del formulario de registro
     */
    async sendForm() {
      this.setOverlayState({
        text: "Guardando información, espere por favor",
        visible: true,
      });

      this.setDataForm(this.dataFormProveedores);

      try {
        await this.sendFilesproveedor(this.files);
        await this.sendDataProveedor();
        this.setShowErrorOrSuccessAlert({
          message: "¡Información guardada exitosamente!",
          success: true,
        });
        this.setOverlayState({ text: "", visible: false });
        this.$router.push("/proveedores");
        window.location.reload();
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
    recibeDataProv(data) {
      this.dataFormProveedores = data.data;
      this.isValidProveedoresData = data.isValid;
    },
    /**
     * Función que recibe la información
     * del EMIT del componente hijo "documentos-proveedor-component"
     * para setear la información en el state
     */
    recibeDocs({ dataFilesInputs, isValid }) {
      this.isValidDocsData = isValid;
      this.files = dataFilesInputs;
    },
  },
  computed: {
    ...mapGetters("proveedores", ["getDataProveedor"]),
    /**
     * Verifica que los componentes sean válidos
     */
    verificaValidsForms() {
      if (this.isValidProveedoresData && this.isValidDocsData) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
</style>