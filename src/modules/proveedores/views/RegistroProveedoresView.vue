<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="mx-auto my-6 pa-4" shaped>
        <h3 class="display-1 text-center">
          Sistema de registro para proveedores
        </h3>
        <p class="my-5 mx-7">
          Por favor, ingresa los siguientes datos para poder darte de alta en el
          sistema:
        </p>

        <datos-proveedor-form ref="dataProv" @validForm="recibeDataProv" />
        <documentos-proveedor-component @validDocs="recibeDocs" />
        <v-card-actions>
          <v-btn
            :disabled="verificaTrues"
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
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import DatosProveedorForm from "../components/DatosProveedorForm.vue";
import DocumentosProveedorComponent from "../components/DocumentosProveedorComponent.vue";
export default {
  components: { DatosProveedorForm, DocumentosProveedorComponent },
  name: "ProveedorHomeView",
  data() {
    return {
      dataFormProveedores: null,
      isValidProveedoresData: null,
      isValidDocsData: null,
      files: [
        {
          keyName: "documento1",
          nameFile: "DOCUMENTO1",
          file: null,
          rfc: "0000",
        },
        {
          keyName: "documento2",
          nameFile: "DOCUMENTO2",
          file: null,
          rfc: "0000",
        },
        {
          keyName: "documento3",
          nameFile: "DOCUMENTO3",
          file: null,
          rfc: "0000",
        },
        {
          keyName: "documento4",
          nameFile: "DOCUMENTO4",
          file: null,
          rfc: "0000",
        },
        {
          keyName: "documento5",
          nameFile: "DOCUMENTO5",
          file: null,
          rfc: "0000",
        },
      ],
    };
  },
  methods: {
    /* VUEX */
    ...mapMutations("proveedores", ["setDataForm", "setDocumentos"]),
    ...mapActions("proveedores", ["sendFilesproveedor","sendDataProveedor"]),
    /* MÉTODOS DE COMPONENTE */
    sendForm() {
      this.setDataForm(this.dataFormProveedores);
      this.setDocumentos({ documentos: this.files });
      try {
        this.sendFilesproveedor();
        this.sendDataProveedor();
      } catch (error) {
        console.log(error);
      }
    },
    recibeDataProv(data) {
      this.dataFormProveedores = data.data;
      this.isValidProveedoresData = data.isValid;
    },
    recibeDocs(data) {
      this.isValidDocsData = data.isValid;
      this.files.forEach((file) => {
        for (const key in data.data) {
          if (file.keyName == key) {
            file.file = data.data[key];
          }
        }
      });
    },
  },
  computed: {
    ...mapGetters("proveedores", ["getDatosProveedor", "getDocumentos"]),
    verificaTrues() {
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