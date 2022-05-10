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
            <v-radio-group v-model="customMail" row>
              <v-radio color="purple" label="No" value="No"></v-radio>
              <v-radio color="purple" label="Sí" value="Sí"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-text v-if="customMail === 'No'">
            <b>Mesaje a mandar:</b> <br />
            "Hola sus documentos A, B, C han expirado, se les pide de favor
            entrar a la plataforma para actualizarlos, gracias."
          </v-card-text>
          <v-card-text v-else>
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
            <v-btn color="teal" text @click="dialog = false">
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
export default {
  components: {
    DataTableComponent,
  },
  data() {
    return {
      dialog: false,
      customMailMessage: {
        ausnto: "",
        body: "",
      },
      customMail: "No",
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
    ...mapActions("admin", ["getListaExpiradosAction"]),
    /* Local */
    init() {
      this.getListaExpiradosAction();
      this.listaExpirados = this.getListaProvExpiradosState();
    },
  },
  created() {
    this.init();
  },
};
</script>