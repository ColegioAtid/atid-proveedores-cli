<template>
  <v-container>
    <v-sheet color="white pa-3" elevation="16" class="justify-center">
    <!-- Seccion datos generales del proveedor -->
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
            color="purple"
            @click="modalCorreo = true"
          >
            Envíar correo
            <v-icon left> mdi-email </v-icon>
          </v-btn>
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
            Estatus: Validado
          </v-chip>
          <v-chip v-else class="ma-2" color="red" outlined>
            <v-icon left> mdi-account-alert </v-icon>
            Estatus: No validado
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
    <!-- Modal de envio de correo -->
    <div class="text-center">
      <v-dialog persistent scrollable v-model="modalCorreo" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Envíar correo al proveedor
          </v-card-title>

          <v-card-text>
            Esta acción envirá un correo electrónico al proveedor con un mensaje
            personalizado. En la sección de abajo escriba el asunto y el cuerpo
            del mensaje.
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="customMailMessage.ausnto"
              label="Asunto"
              placeholder="Asunto"
              outlined
            ></v-text-field>
            <v-textarea
              v-model="customMailMessage.body"
              outlined
              name="input-7-4"
              label="Mensaje a mandar"
            ></v-textarea>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text @click="modalCorreo = false">
              Envíar correo
            </v-btn>
            <v-btn color="purple" text @click="modalCorreo = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      estatusValidacionProv: false,
      modalCorreo: false,
      customMailMessage: {
        asunto: "",
        body: "",
      },
    };
  },
  computed: {},
};
</script>