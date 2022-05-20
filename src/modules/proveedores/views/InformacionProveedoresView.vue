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
              v-if="!getDataProveedor() || !getDataProveedor().datosGenerales"
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
                {{ getDataProveedor().datosGenerales.nombre_empresa }}
              </p>
              <p><strong>RFC: </strong> {{ getDataProveedor().rfc }}</p>
              <p>
                <strong>Persona: </strong> {{ getDataProveedor().tipo_persona }}
              </p>
              <p>
                <strong>Dirección fiscal: </strong>
                {{ getDataProveedor().datosGenerales.domicilio_fiscal }}
              </p>
              <p>
                <strong>Razón social: </strong>
                {{ getDataProveedor().datosGenerales.razon_social }}
              </p>
              <p>
                <strong>Nombre de contacto: </strong>
                {{ getDataProveedor().datosGenerales.nombre_proveedor }}
                {{ getDataProveedor().datosGenerales.appa_proveedor }}
                {{ getDataProveedor().datosGenerales.apma_proveedor }}
              </p>
              <p>
                <strong>Correo de contacto: </strong>
                {{ getDataProveedor().correo }}
              </p>
              <p>
                <strong>Número de contacto principal: </strong>
                {{ getDataProveedor().datosGenerales.numero_prim }}
              </p>
              <p>
                <strong>Número de contacto secundario: </strong>
                {{ getDataProveedor().datosGenerales.numero_sec }}
              </p>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <!-- {{getDataProveedor()}} -->
  </v-row>
</template>

<script>
// import { buildErrorMessage } from "@/helpers/utils";
import {  mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      datosProveedor: {},
    };
  },
  computed: {
    ...mapGetters("proveedores",["getDataProveedor"]),
  },
  created() {
    this.datosProveedor = this.getDataProveedor();
  },
};
</script>

<style>
</style>