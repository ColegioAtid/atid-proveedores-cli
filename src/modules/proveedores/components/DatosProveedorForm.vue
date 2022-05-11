<template>
  <v-form ref="formDataProv" v-model="valid" lazy-validation class="px-7">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.nombreEmpresa"
          :rules="generalRules"
          label="Nombre de la empresa"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.domicilioFiscal"
          :rules="generalRules"
          label="Domicilio fiscal"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.razonSocial"
          :rules="generalRules"
          label="Razón social"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.nombreContacto"
          :rules="generalRules"
          label="Nombre de contacto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.correoContacto"
          :rules="emailRules"
          label="Correo para contacto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.numeroContacto1"
          :rules="phoneRules"
          label="Número de contacto 1"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.numeroContacto2"
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
      dataProveedorForm: {
        nombreEmpresa: "sdasdas",
        domicilioFiscal: "dasdada",
        razonSocial: "dasda",
        nombreContacto: "dasdasdadas",
        correoContacto: "dasdadsas@asdada.com",
        numeroContacto1: "1234567890",
        numeroContacto2: "1234567890",
      },
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
  watch: {
    dataProveedorForm: {
      handler: function () {
        let valid = this.$refs.formDataProv.validate();
        if (!valid) return;
        return this.$emit("validForm", {
          isValid: valid,
          data: this.dataProveedorForm,
        });
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>