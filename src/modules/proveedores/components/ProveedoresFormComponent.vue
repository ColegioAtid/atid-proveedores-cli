<template>
  <div class="my-5">
    <h3 class="display-1 text-center">Sistema de registro para proveedores</h3>
    <p class="my-5 mx-7">
      Por favor, ingresa los siguientes datos para poder darte de alta en el
      sistema:
    </p>

    <v-form ref="formContacto" v-model="valid" lazy-validation class="px-7">
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="nombreEmpresa"
            :rules="generalRules"
            label="Nombre de la empresa"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="domicilioFiscal"
            :rules="generalRules"
            label="Domicilio fiscal"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="razonSocial"
            :rules="generalRules"
            label="Razón social"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="nombreContacto"
            :rules="generalRules"
            label="Nombre de contacto"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="correoContacto"
            :rules="emailRules"
            label="Correo para contacto"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="numeroContacto1"
            :rules="phoneRules"
            label="Número de contacto 1"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="numeroContacto2"
            :rules="phoneRules"
            label="Número de contacto 2"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12"
          ><p>Por favor, adjunta los siguientes documentos:</p></v-col
        >
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-file-input
            v-model="documento1"
            label="File input 1"
            :rules="documentosRules"
            accept=".pdf"
            required
            :show-size="1000"
            counter
            outlined
            color="teal"
            dense
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="#9b33b0" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-file-input
            v-model="documento2"
            label="File input 2"
            :rules="documentosRules"
            accept=".pdf"
            required
            :show-size="1000"
            counter
            outlined
            color="teal"
            dense
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="#9b33b0" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-file-input
            v-model="documento3"
            label="File input 3"
            :rules="documentosRules"
            accept=".pdf"
            required
            :show-size="1000"
            counter
            outlined
            color="teal"
            dense
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="#9b33b0" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-file-input
            v-model="documento4"
            label="File input 4"
            :rules="documentosRules"
            accept=".pdf"
            required
            :show-size="1000"
            counter
            outlined
            color="teal"
            dense
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="#9b33b0" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-file-input
            v-model="documento5"
            label="File input 5"
            :rules="documentosRules"
            accept=".pdf"
            required
            :show-size="1000"
            counter
            outlined
            color="teal"
            dense
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="#9b33b0" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="success" class="mx-4" @click="sendForm">
        Enviar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ProveedoresFormComponent.",
  data: () => ({
    valid: true,
    nombreEmpresa: "",
    domicilioFiscal: "",
    razonSocial: "",
    nombreContacto: "",
    correoContacto: "",
    numeroContacto1: "",
    numeroContacto2: "",
    generalRules: [(v) => !!v || "Campo requerido"],
    phoneRules: [
      (v) => !!v || "Campo requerido",
      (v) => /^[1-9]\d*$|^$/.test(v) || "El valor no es válido",
      (v) => !v || v.length >= 10 || "Debes ingresar 10 dígitos",
    ],
    emailRules: [
      (v) => !!v || "Campo requerido",
      (v) => /.+@.+\..+/.test(v) || "El formato no es válido",
    ],
    documento1: null,
    documento2: null,
    documento3: null,
    documento4: null,
    documento5: null,
    documentosRules: [
      (value) => !!value || "Campo requerido.",
      (value) => !value || value.size < 3000000 || "Máximo deben ser 3 MB!",
    ],
  }),

  methods: {
    /* VUEX */
    ...mapMutations("proveedores", ["setDataForm", "setDocumentos"]),
    /* MÉTODOS DE COMPONENTE */
    sendForm() {
      if (!this.$refs.formContacto.validate()) {
        alert("Llena el formulario, por favor");
        return;
      }
      let formProveedorData = {
        nombreEmpresa: this.nombreEmpresa,
        domicilioFiscal: this.domicilioFiscal,
        razonSocial: this.razonSocial,
        nombreContacto: this.nombreContacto,
        correoContacto: this.correoContacto,
        numeroContacto1: this.numeroContacto1,
        numeroContacto2: this.numeroContacto2,
      };
      let files = [
        {
          keyName: "documento1",
          nameFile: "DOCUMENTO1",
          file: this.documento1,
        },
        {
          keyName: "documento2",
          nameFile: "DOCUMENTO2",
          file: this.documento2,
        },
        {
          keyName: "documento3",
          nameFile: "DOCUMENTO3",
          file: this.documento3,
        },
        {
          keyName: "documento4",
          nameFile: "DOCUMENTO4",
          file: this.documento4,
        },
        {
          keyName: "documento5",
          nameFile: "DOCUMENTO5",
          file: this.documento5,
        },
      ];
      this.setDataForm(formProveedorData);
      this.setDocumentos({ documentos: files });
    },
  },
  computed: {
    ...mapGetters("proveedores", ["getDatosProveedor", "getDocumentos"]),
  },
};
</script>

<style>
</style>