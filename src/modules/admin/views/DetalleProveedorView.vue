<template>
  <v-container>
    <v-sheet color="white pa-3" elevation="16" class="justify-center">
      <v-card elevation="3" class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">RFC1234567123</div>
            <v-list-item-title class="text-h5 mb-1">
              Nombre de la empresa
            </v-list-item-title>
            <v-list-item-subtitle>Nombre de contacto</v-list-item-subtitle>
            <v-list-item-subtitle>Nombre de contacto</v-list-item-subtitle>
            <v-list-item-subtitle>Nombre de contacto</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            v-if="!estatusValidacionProv"
            outlined
            rounded
            text
            color="teal"
          >
            Validar información
          </v-btn>
          <v-btn v-else outlined rounded text color="red">
            Invalidar información
          </v-btn>
          <v-chip
            v-if="estatusValidacionProv"
            class="ma-2"
            color="teal"
            outlined
          >
            <v-icon left> mdi-account-check </v-icon>
            Validado
          </v-chip>
          <v-chip v-else class="ma-2" color="red" outlined>
            <v-icon left> mdi-account-alert </v-icon>
            No válidado
          </v-chip>
        </v-card-actions>
      </v-card>
      <!-- Sección de documentos -->
      <v-card elevation="3" class="mx-auto mt-7" outlined>
        <v-card-title> Documentos anexados </v-card-title>
        <v-card-subtitle>
          Documentos anexados por el proveedor
        </v-card-subtitle>
        <v-card-text>
          <div class="mt-7" v-for="i in [1, 2, 3, 4, 5]" :key="i">
            <p class="text-center display-5">Nombre del archivo</p>
            <iframe
              width="100%"
              height="400"
              :src="`https://www.atid.edu.mx/becasDocumentos/`"
              frameborder="0"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      estatusValidacionProv: true,
    };
  },
  computed: {},
};
</script>