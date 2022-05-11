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

            <v-card-text class="text-body-1 text-center" v-if="true">
              <p>
                <strong
                  >Aún no has registrado datos fiscales de tu empresa</strong
                >
              </p>
            </v-card-text>

            <v-card-text class="text-body-1" v-else>
              <p><strong>Nombre de la empresa: </strong> Colegio Atid</p>
              <p>
                <strong>Dirección fiscal: </strong> Constituyente C. Echanove,
                Huizachito, Cuajimalpa de Morelos, 05249 Ciudad de México, CDMX
              </p>
              <p><strong>Razón social: </strong> Colegio Atid ©</p>
              <p>
                <strong>Nombre de contacto: </strong> Osvaldo Jair González
                Martínez
              </p>
              <p><strong>Correo de contacto: </strong> ogonzalez@atid.edu.mx</p>
              <p><strong>Número de contacto(1): </strong> 5565085220</p>
              <p><strong>Número de contacto(2): </strong> 5565085221</p>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>