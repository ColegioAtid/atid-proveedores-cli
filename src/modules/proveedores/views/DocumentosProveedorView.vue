<template>
  <v-container>
    <progress-component
      v-if="!getDataProveedor()"
      :color="'purple'"
      :size="80"
    />
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto my-6 pa-4" shaped>
          <h3 class="display-1 text-center">Documentos anexados</h3>
          <v-img height="150" contain src="@/assets/proveedor/files.png">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="teal lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>

          <v-card-title class="text-subtitle-1">
            Por favor seleccione el documento a actualizar:
          </v-card-title>

          <v-card-text>
            <div class="text-body-1">
              <v-form v-model="isValidForm">
                <v-col>
                  <v-select
                    cols="12"
                    lg="6"
                    md="6"
                    sm="12"
                    color="#1f886f"
                    item-color="#1f886f"
                    v-model="selectInput"
                    :items="arrayFiles"
                    item-text="filetag"
                    label="Archivo a reemplazar"
                    dense
                    outlined
                    persistent-hint
                    return-object
                    single-line
                    :rules="generalRules"
                  ></v-select>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-file-input
                    v-model="fileSelected"
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
              </v-form>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="!isValidForm"
              color="teal"
              class="white--text pa-6"
              @click="updateFiles"
            >
              Actualizar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProgressComponent from "@/components/ProgressComponent.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { buildErrorMessage } from "@/helpers/utils";
export default {
  components: {
    ProgressComponent,
  },
  data() {
    return {
      tipoPersona: null,
      isValidForm: false,
      selectInput: null,
      fileSelected: null,
      arrayFiles: [
        {
          filetag: " Constancia de situación fiscal ",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "CONSTANCIAFISCAL",
        },
        {
          filetag: "Opinión de cumplimiento",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "OPINIONCUMPLIMIENTO",
        },
        {
          filetag: "Comprobante de domicilio",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "COMPROBANTEDOMICILIO",
        },
        {
          filetag: "Carátula de estado de cuenta",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "CARATULACUENTA",
        },
        {
          filetag:
            "Actualización de cambio de domicilio ante el SAT (último cambio  realizado)",
          tipoPersona: ["FÍSICA", "MORAL"],
          filename: "ACTUALIZACIONDOMICILIOSAT",
        },
        {
          filetag: "Acta constitutiva",
          tipoPersona: ["MORAL"],
          filename: "ACTACONSTITUTIVA",
        },
        {
          filetag: "Poder notarial",
          filename: "PODERNOTARIAL",
          tipoPersona: ["MORAL"],
        },
        {
          filetag: "INE del representante legal",
          tipoPersona: ["MORAL"],
          filename: "INE",
        },
      ],
      documentosRules: [
        (value) => !!value || "Campo requerido.",
        (value) => !value || value.size < 3000000 || "Máximo deben ser 3 MB!",
      ],
      generalRules: [(v) => !!v || "Campo requerido"],
    };
  },
  computed: {
    ...mapGetters("proveedores", ["getDataProveedor"]),
  },
  methods: {
    /** VUEX */
    ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),
    ...mapActions('proveedores', ["updateFile"]),

    async updateFiles() {
      this.setOverlayState({
        text: "Guardando información, espere por favor",
        visible: true,
      });
      try {
        let file = {
          nameFile: this.selectInput.filename,
          file: this.fileSelected,
          rfc: this.getDataProveedor().rfc,
        };

        if (file.nameFile === "OPINIONCUMPLIMIENTO") {
          file.nameFile = file.nameFile + `_${this.getDataProveedor().id_historico +1}`
          file = { ...file, ["idHist"]: this.getDataProveedor().id_historico +1 };
        }
        await this.updateFile(file);
        this.setShowErrorOrSuccessAlert({
          message: "¡Información guardada exitosamente!",
          success: true,
        });
        this.setOverlayState({ text: "", visible: false });
      } catch (error) {
        // Error
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        });
        this.setOverlayState({ text: "", visible: false });
      }
    },
  },
};
</script>

<style>
</style>
