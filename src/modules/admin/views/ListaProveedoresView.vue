<template>
  <v-container>
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
    <v-card v-else :elevation="10">
      <v-card-title> Lista de proveedores </v-card-title>
      <!-- Table data -->
      <v-data-table
        :headers="headers"
        :items="proveedoresList"
        item-key="name"
        class="elevation-1"
        :search="search"
        no-results-text="Proveedor no encontrado"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Buscar por empresa o RFC"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:[`item.detalle`]="{ item }">
          <v-tooltip right color="teal">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="teal"
                small
                class="ml-3 white--text"
                @click="
                  $router.push({
                    name: 'detalle-proveedor',
                    params: { 'detalle-proveedor': item },
                  })
                "
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
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      search: "",      
      proveedoresList: []
    };
  },

  methods: {
      ...mapActions('admin',['getListaProveedoresAction']),
      eliminar(item) {
        console.log(item);
      },
      init(){
        this.getListaProveedoresAction()
        this.proveedoresList = this.getListaProveedoresState()
      }
      /* filterOnlyCapsText(value, search, item) {
        console.log(item);
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
        );
      }, */
    },

  computed: {
    /* VUEX */
    ...mapGetters('admin',['getListaProveedoresState']),
    /* LOCAL */
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
          text: "Razón social",
          align: "center",
          sortable: false,
          value: "razonSocail",
        },
        {
          text: "Tipo persona",
          align: "center",
          sortable: false,
          value: "tipoPersona",
        },
        {
          text: "Nombre de contacto",
          align: "center",
          sortable: false,
          value: "nombreContacto",
        },
        {
          text: "Ver detalle",
          value: "detalle",
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
  },

  created(){
    this.init()
  }
};
</script>