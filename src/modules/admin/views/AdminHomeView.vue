<template>
  <v-container fluid>
    <h5 class="display-2 text-center mb-3 mt-3">Panel de administración</h5>

    <!-- Progress data -->
    <div v-if="false" class="text-center mt-6">
      <v-progress-circular
        :size="70"
        color="teal"
        indeterminate
      ></v-progress-circular>
      <p>Cargando datos...</p>
    </div>
    <!-- End progress data -->
    <v-row v-else class="justify-center mt-6 mb-6">
      <v-card :elevation="10" width="80%">
        <v-card-title> Lista de proveedores </v-card-title>
        <v-card-text class="text-center">
          <p>Provedores con documentos expirados : 123</p>
          <v-btn            
            color="teal"
            small
            class="ma-2 white--text"   
            @click="dialogEnvioCorreo=true"         
          >
            Envíar correo de aviso
            <v-icon right dark> mdi-send</v-icon>
          </v-btn>
        </v-card-text>
        <!-- Table data -->
        <v-data-table
          :headers="headers"
          :items="proveedoresList"
          item-key="name"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
          no-results-text="Proveedor no encontrado"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Buscar por empresa o RFC"
              class="mx-4"
            ></v-text-field>
          </template>
          <template v-slot:[`item.aprobacion`]="{ item }">
            <v-tooltip right color="teal">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="teal"
                  small
                  class="ml-3 white--text"
                  @click="eliminar(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>Ver detalle</span>
            </v-tooltip>
          </template>

          <template v-slot:[`item.eliminacion`]="{ item }">
            <v-tooltip right color="red">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  class="ml-3 white--text"
                  @click="eliminar(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Eliminar proveedor</span>
            </v-tooltip>
          </template>
        </v-data-table>
        <!-- end table data -->
      </v-card>
    </v-row>

    <div class="text-center">
    <v-dialog
      persistent
      scrollable
      v-model="dialogEnvioCorreo"
      max-width="500px"
      max-height="300px"
    >
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Aviso de expiración de documentos
        </v-card-title>

        <v-card-text>
            Se enviará un correo electrónico para avisar a los proveedores que deben actualizar
            sus documetnos.
            <br>
            <br>
            <b>Lista de empresas</b>
            <ul>
              <li v-for="i in [1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99,100,12,14,15,16,17]" :key="i">{{i}}</li>
            </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogEnvioCorreo = false"
          >
            Sí, envíar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialogEnvioCorreo = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-container>
</template>
<script>
//import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      search: "",
      calories: "",
      dialogEnvioCorreo:false,
      proveedoresList: [
        {
          rfc: "RFCASD1234",
          nombreEmpresa: "Empresa",
          informacionValidada: "No",
          documentosVigentes: "Si",
        },
        {
          rfc: "RFCASD1234",
          nombreEmpresa: "Empresa",
          informacionValidada: "No",
          documentosVigentes: "Si",
        },
        {
          rfc: "RFCASD1234",
          nombreEmpresa: "Empresa",
          informacionValidada: "No",
          documentosVigentes: "Si",
        },
        {
          rfc: "RFCASD1234",
          nombreEmpresa: "Empresa",
          informacionValidada: "No",
          documentosVigentes: "Si",
        },
      ],
    };
  },
  computed: {
    //...mapGetters('admin',['getMessage'])
    headers() {
      return [
        {
          text: "RFC",
          align: "center",
          sortable: false,
          value: "rfc",
        },
        {
          text: "Nombre de la empresa",
          align: "center",
          sortable: false,
          value: "nombreEmpresa",
        },
        {
          text: "Información validada",
          align: "center",
          sortable: false,
          value: "informacionValidada",
        },
        {
          text: "Documentos vigentes",
          align: "center",
          sortable: false,
          value: "documentosVigentes",
        },
        {
          text: "Ver detalle",
          value: "aprobacion",
          align: "center",
          sortable: false,
        },
        {
          text: "Eliminar",
          value: "eliminacion",
          align: "center",
          sortable: false,
        },
      ];
    },
    methods: {
      filterOnlyCapsText(value, search, item) {
        console.log(item);
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
        );
      },
    },
  },
};
</script>