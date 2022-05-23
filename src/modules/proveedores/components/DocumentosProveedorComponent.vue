<template>
  <v-form
    ref="documentosProveedorForm"
    v-model="valid"
    lazy-validation
    class="px-7"
  >
    <v-row>
      <v-col cols="12"
        ><p>Por favor, adjunta los siguientes documentos:</p></v-col
      >
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="12"
        v-for="item of arrayFiles"
        :key="item.filetag"
      >
        <v-file-input
          v-model="item.file"
          :label="item.filetag"
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
  </v-form>
</template>

<script>
import { getUserInfo } from "@/helpers/utils";
import { mapGetters } from "vuex";
export default {
  name: "DocumentosProveedorComponent",
  data() {
    return {
      valid: true,
      arrayFiles: [
        {
          filetag: " Constancia de situación fiscal ",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "CONSTANCIAFISCAL",
          file: null,
          rfc: null,
        },
        {
          filetag: "Opinión de cumplimiento",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "OPINIONCUMPLIMIENTO",
          file: null,
          rfc: null,
        },
        {
          filetag: "Carátula de estado de cuenta",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "COMPROBANTEDOMICILIO",
          file: null,
          rfc: null,
        },
        {
          filetag: "Comprobante de domicilio",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "CARATULACUENTA",
          file: null,
          rfc: null,
        },
        {
          filetag:
            "Actualización de cambio de domicilio ante el SAT (último cambio  realizado)",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "ACTUALIZACIONDOMICILIOSAT",
          file: null,
          rfc: null,
        },
        {
          filetag: "Acta constitutiva",
          tipoPersona: ["MORAL"],
          filename: "ACTACONSTITUTIVA",
          file: null,
          rfc: null,
        },
        {
          filetag: "Poder notarial",
          filename: "PODERNOTARIAL",
          tipoPersona: ["MORAL"],
          file: null,
          rfc: null,
        },
        {
          filetag: "INE del representante legal",
          tipoPersona: ["MORAL"],
          filename: "INE",
          file: null,
          rfc: null,
        },
      ],
      documentosRules: [
        (value) => !!value || "Campo requerido.",
        (value) => !value || value.size < 3000000 || "Máximo deben ser 3 MB!",
      ],
    };
  },
  watch: {
    arrayFiles: {
      handler: function () {
        let valid = this.$refs.documentosProveedorForm.validate();
        return this.$emit("validDocs", {
          isValid: valid,
          dataFilesInputs: this.arrayFiles,
        });
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters("proveedores", ["getDataProveedor"]),
  },
  methods: {
    init() {
      this.arrayFiles = this.arrayFiles.filter((e) => {
        const { rfc } = getUserInfo();
        e.rfc = rfc;
        return e.tipoPersona.includes(this.getDataProveedor().tipo_persona);
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
</style>