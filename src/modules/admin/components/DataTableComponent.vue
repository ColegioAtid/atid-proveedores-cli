<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar por empresa o RFC"
        class="mx-4"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      item-key="name"
      class="elevation-1"
      :search="search"
      no-results-text="Proveedor no encontrado"
      
    >      
      <!-- Ver detalle -->
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
    <!-- eliminar proveedor -->
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

  </v-card>
</template>

<script>
export default {
  name:'DataTableComponent',
  props: ["data"],
  data() {
    return {
        search: "",
    };
  },
  methods:{
    eliminar(item) {
      console.log(item);
    },    
  },
  computed: {
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
};
</script>