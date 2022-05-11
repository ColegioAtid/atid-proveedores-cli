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
            :disabled="validForms"
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
import DatosProveedorForm from "../components/DatosProveedorForm.vue";
import DocumentosProveedorComponent from "../components/DocumentosProveedorComponent.vue";
export default {
  components: { DatosProveedorForm, DocumentosProveedorComponent },
  name: "ProveedorHomeView",
  data() {
    return {
      validForms: true,
      dataFormProveedores: null,
      isValidProveedoresData: null,
      isValidDocsData: null,
      files: [
        {
          keyName: "documento1",
          nameFile: "DOCUMENTO1",
          file: null,
        },
        {
          keyName: "documento2",
          nameFile: "DOCUMENTO2",
          file: null,
        },
        {
          keyName: "documento3",
          nameFile: "DOCUMENTO3",
          file: null,
        },
        {
          keyName: "documento4",
          nameFile: "DOCUMENTO4",
          file: null,
        },
        {
          keyName: "documento5",
          nameFile: "DOCUMENTO5",
          file: null,
        },
      ],
    };
  },
  methods: {
    sendForm() {
      // alert("Hola");
      console.log("Data from send ", this.dataFormProveedores);
      console.log("Data from send ", this.isValidProveedoresData);
      console.log("Data from files ", this.files);
    },
    recibeDataProv(data) {
      this.dataFormProveedores = data.data;
      this.isValidProveedoresData = data.isValid;
    },
    recibeDocs(data) {
      this.isValidDocsData = data.isValid;
      this.files.forEach((file) => {
        console.log(file);
        for (const key in data.data) {
          if (file.keyName == key) {
            file.file = data.data[key];
          }
        }
      });
    },
  },
};
</script>

<style>
</style>