<template>
  <v-form ref="formDataProv" v-model="valid" lazy-validation class="px-7">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.nombre_empresa"
          :rules="generalRules"
          label="Nombre de la empresa"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.domicilio_fiscal"
          :rules="generalRules"
          label="Domicilio fiscal"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.razon_social"
          :rules="generalRules"
          label="Razón social"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.nombre_proveedor"
          :rules="generalRules"
          label="Nombre de contacto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.appa_proveedor"
          :rules="generalRules"
          label="Apellido paterno de contacto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.apma_proveedor"
          :rules="generalRules"
          label="Apellido materno de contacto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.numero_prim"
          :rules="phoneRules"
          label="Número de contacto principal"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field
          outlined
          color="teal"
          v-model="dataProveedorForm.numero_sec"
          :rules="phoneRules"
          label="Número de contacto secundario"
          required
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "DatosProveedorForm",
  props: ["data", "isPost"],
  data() {
    return {
      valid: true,
      dataProveedorForm: {
        nombre_empresa: "",
        domicilio_fiscal: "",
        razon_social: "",
        nombre_proveedor: "",
        appa_proveedor: "",
        apma_proveedor: "",
        numero_prim: "",
        numero_sec: "",
      },
      generalRules: [(v) => !!v || "Campo requerido"],
      phoneRules: [
        (v) => !!v || "Campo requerido",
        (v) => /^[1-9]\d*$|^$/.test(v) || "El valor no es válido",
        (v) =>
          !v ||
          (v.length >= 9 && v.length <= 10) ||
          "Debes ingresar 10 dígitos",
      ],
    };
  },
  watch: {
    dataProveedorForm: {
      handler: function () {
        let valid = this.$refs.formDataProv.validate();
        return this.$emit("validForm", {
          isValid: valid,
          data: this.dataProveedorForm,
        });
      },
      deep: true,
    },
    data: {
      deep: true,
      handler: function () {
        if (!this.isPost) this.dataProveedorForm = this.data;
      },
    },
  },
};
</script>

<style>
</style>