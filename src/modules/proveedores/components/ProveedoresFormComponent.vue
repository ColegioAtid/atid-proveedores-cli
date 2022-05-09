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
            v-model="empresa"
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
            v-model="emailContacto"
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
            :rules="generalRules"
            label="Número de contacto 1"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-text-field
            outlined
            color="teal"
            v-model="numeroContacto2"
            :rules="generalRules"
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
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
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
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
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
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
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
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
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
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
      </v-row>

      <v-btn :disabled="!valid" color="success" class="mx-4" @click="validate">
        Enviar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ProveedoresFormComponent.",
  data: () => ({
    valid: true,
    empresa: "",
    domicilioFiscal: "",
    razonSocial: "",
    nombreContacto: "",
    emailContacto: "",
    numeroContacto1: "",
    numeroContacto2: "",
    generalRules: [(v) => !!v || "Campo requerido"],
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
    validate() {
      this.$refs.formContacto.validate();
    },
  },
};
</script>

<style>
</style>