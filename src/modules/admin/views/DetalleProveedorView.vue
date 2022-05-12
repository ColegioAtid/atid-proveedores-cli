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

          <v-list-item-avatar tile size="70" color="grey">
            <img alt="user" :src="require('@/assets/admin/provider.png')" />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-row class="text-center">
            <v-col cols="12" md="4" lg="4" sm="12">
              <v-btn
                outlined
                rounded
                small
                color="purple"
                @click="modalCorreo = true"
              >
                Envíar correo
                <v-icon right> mdi-email </v-icon>
              </v-btn>
            </v-col>
            <v-col
              v-if="!estatusValidacionProv"
              cols="12"
              md="4"
              lg="4"
              sm="12"
            >
              <v-btn
                outlined
                rounded
                small
                color="teal"
                @click="dialogValidacion = true"
              >
                Validar información
              </v-btn>
            </v-col>
            <v-col v-else cols="12" md="4" lg="4" sm="12">
              <v-btn @click="dialogValidacion = true" outlined rounded small color="red">
                Invalidar información
              </v-btn>
            </v-col>
            <v-col v-if="estatusValidacionProv" cols="12" md="4" lg="4" sm="12">
              <v-chip small class="ma-2" color="teal" outlined>
                <v-icon left> mdi-account-check </v-icon>
                Estatus: Validado
              </v-chip>
            </v-col>
            <v-col v-else>
              <v-chip class="ma-2" color="red" outlined>
                <v-icon left> mdi-account-alert </v-icon>
                Estatus: No validado
              </v-chip>
            </v-col>
          </v-row>
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
              :src="`https://www.atid.edu.mx/proveedoresDocumentos/0000_DOCUMENTO${i}.pdf`"
              frameborder="0"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
    <!-- Modal invalidar información -->
    <v-row justify="center">
      <v-dialog v-model="dialogValidacion" persistent max-width="290">       
        <v-card>
          <v-card-title class="text-h5">
            Estatus del proveedor
          </v-card-title>
          <v-card-text
            >¿Estás segur@ que deseas actualizar el estatus de este proveedor?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="purple"
              text
              @click="dialogValidacion = false"
            >
              Cancelar
            </v-btn>
            <v-btn color="teal" text @click="validarInformacion()">
              Sí
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

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
      dialogValidacion: false,
      estatusValidacionProv: true,
      modalCorreo: false,
      customMailMessage: {
        asunto: "",
        body: "",
      },
    };
  },
  methods: {
    validarInformacion: function () {
      this.dialogValidacion = false
      console.log("Informacion validada")
    },
  },
  computed: {},
  created() {
    console.log(this.$route.params.dataProveedor);
  },
};
</script>