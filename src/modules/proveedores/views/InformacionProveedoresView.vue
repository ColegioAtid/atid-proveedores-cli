<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto my-6 pa-4" shaped>
        <h3 class="display-1 text-center">Datos generales de proveedor</h3>
        <v-img height="150" contain src="@/assets/atid_icon.png">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="teal lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>

        <v-card-title class="text-subtitle-1">
          Bienvenido al sistema de proveedores del Colegio Atid:
        </v-card-title>

        <v-card-text>
          <div class="text-body-1 text-justify">
            <p>
              Aquí podrás ver la información registrada, editarla y cada
              determinado tiempo actualizar los documentos que el colegio
              requiere para validar dichos datos.
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple lighten-2" text @click="show = !show">
            Ver información
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text
              class="text-body-1 text-center"
              v-if="!datosProveedor || !datosProveedor.datosGenerales"
            >
              <p>
                <strong
                  >Aún no has registrado datos fiscales de tu empresa</strong
                >
              </p>
            </v-card-text>

            <v-card-text class="text-body-1" v-else>
              <p>
                <strong>Nombre de la empresa: </strong>
                {{ datosProveedor.datosGenerales.nombre_empresa }}
              </p>
              <p><strong>RFC: </strong> {{ datosProveedor.rfc }}</p>
              <p>
                <strong>Persona: </strong> {{ datosProveedor.tipo_persona }}
              </p>
              <p>
                <strong>Dirección fiscal: </strong>
                {{ datosProveedor.datosGenerales.domicilio_fiscal }}
              </p>
              <p>
                <strong>Razón social: </strong>
                {{ datosProveedor.datosGenerales.razon_social }}
              </p>
              <p>
                <strong>Nombre de contacto: </strong>
                {{ datosProveedor.datosGenerales.nombre_proveedor }}
                {{ datosProveedor.datosGenerales.appa_proveedor }}
                {{ datosProveedor.datosGenerales.apma_proveedor }}
              </p>
              <p>
                <strong>Correo de contacto: </strong>
                {{ datosProveedor.correo }}
              </p>
              <p>
                <strong>Número de contacto principal: </strong>
                {{ datosProveedor.datosGenerales.numero_prim }}
              </p>
              <p>
                <strong>Número de contacto secundario: </strong>
                {{ datosProveedor.datosGenerales.numero_sec }}
              </p>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { buildErrorMessage } from "@/helpers/utils";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      show: false,
      datosProveedor: {},
    };
  },
  methods: {
    /*  VUEX  */
    ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),
    ...mapActions("proveedores", ["getDataproveedor"]),

    /** FUNCIÓN QUE SIRVE PARA OBTENER LOS DATOS REGISTRADOS
     * DE LOS PROVEEDORES
     */
    async getDataProveedor() {
      try {
        this.setOverlayState({
          text: "Obteniendo información, espere por favor",
          visible: true,
        });
        let { proveedorData } = await this.getDataproveedor();
        this.datosProveedor = proveedorData;
        this.setOverlayState({ text: "", visible: false });

      } catch (error) {
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        });
        this.setOverlayState({ text: "", visible: false });
      }
    },
  },
  created() {
    this.getDataProveedor();
  },
};
</script>

<style>
</style>