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
                  params: { dataProveedor: item },
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
              @click="setProveedorToDelete(item.rfc)"
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
    <v-dialog v-model="dialogEliminar" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Eliminar proveedor </v-card-title>
        <v-card-text>
          ¿Estás segur@ que deseas eliminar a este proveedor? Una vez eliminado
          no se podrá recuperar.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal" text @click="dialogEliminar = false">
            Cancelar
          </v-btn>
          <v-btn color="purple" text @click="eliminarProveedor()">
            Sí, eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "DataTableComponent",
  props: ["data"],
  data() {
    return {
      search: "",
      idProveedorToDelete: null,
      dialogEliminar: false,
    };
  },
  methods: {
    eliminarProveedor: function () {
      this.dialogEliminar = false;
      console.log("Proveedor eliminado!!");
    },

    setProveedorToDelete: function (idProveedor) {
      console.log(idProveedor);
      this.dialogEliminar = true;
      this.idProveedorToDelete = idProveedor;
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