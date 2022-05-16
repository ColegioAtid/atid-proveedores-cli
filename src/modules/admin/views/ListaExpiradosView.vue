<template>
  <v-container>
    <!-- Progress data -->
    <progress-component v-if="loading" />
    <!-- End progress data -->
    <v-card v-else :elevation="10">
      <v-card-title>
        Lista de proveedores con documentos ya expirados
      </v-card-title>
      <v-card-text
        >En la tabla de abajo se muestran a todos los proveedores cuya
        documentación ya ha expirado. <br /><br />
        <v-btn
          depressed
          small
          color="teal"
          :disabled="listaExpirados.length === 0"
          class="white--text"
          @click="dialog = true"
        >
          Enviar correo de aviso
          <v-icon right dark> mdi-email </v-icon>
        </v-btn>
      </v-card-text>
      <!-- Table data -->
      <data-table-component :data="listaExpirados" />
      <!-- end table data -->
    </v-card>
    <!-- Alerta de correo de masivo -->
    <div class="text-center">
      <v-dialog persistent scrollable v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Envíar correo de aviso.
          </v-card-title>

          <v-card-text>
            Esta acción envirá un correo elecrónico de aviso a todos los
            proveedores cuya documentación ya haya expirado.
          </v-card-text>
          <v-card-text>
            ¿Correo personalizado?
            <v-radio-group v-model="customMailMessage.isCustom" row>
              <v-radio color="purple" label="No" value="No"></v-radio>
              <v-radio color="purple" label="Sí" value="Sí"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-text v-if="customMailMessage.isCustom === 'No'">
            <b>Mesaje a mandar:</b> <br />
            "Hola sus documentos A, B, C han expirado, se les pide de favor
            entrar a la plataforma para actualizarlos, gracias."
          </v-card-text>
          <v-card-text v-else>            
            <v-textarea
              v-model="customMailMessage.bodyMessage"
              outlined
              name="input-7-4"
              label="Mensaje a mandar"
            ></v-textarea>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text @click="enviaCorreo()">
              Mandar aviso
            </v-btn>
            <v-btn color="purple" text @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DataTableComponent from "../components/DataTableComponent.vue";
import ProgressComponent from '../../../components/ProgressComponent.vue';
export default {
  components: {
    DataTableComponent,
    ProgressComponent,
  },
  data() {
    return {
      dialog: false,
      loading:false,
      customMailMessage: {
        bodyMessage: "",
        isCustom:"No",
      },
      listaExpirados: [],
    };
  },
  computed: {
    /* Vuex */
    ...mapGetters("admin", ["getListaProvExpiradosState"]),
    /* Local */
  },
  methods: {
    /* Vuex */
    ...mapActions("admin", ["getListaExpiradosAction","correoAvisoExpiracionAction"]),
    /* Local */
    init: async function () {
      this.loading = true
      await this.getListaExpiradosAction()
      this.loading = false
      this.listaExpirados = this.getListaProvExpiradosState()
    },
    enviaCorreo: async function(){
      this.dialog = false
      await this.correoAvisoExpiracionAction(this.customMailMessage)
    }
  },
  created() {
    this.init();
  },
};
</script>