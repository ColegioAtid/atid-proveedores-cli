<template>
  <v-form ref="formDataProv" v-model="valid" lazy-validation class="px-7">
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
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "DatosProveedorForm",
  data() {
    return {
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
    };
  },
};
</script>

<style>
</style>