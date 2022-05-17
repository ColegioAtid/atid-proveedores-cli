<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/atid_icon.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Sistema de proveedores</h1>

        <p class="subheading font-weight-regular">
          Sistema de gestión y registro de proveedores para el Colegio Atid
          <br />© {{ currentYear }} Copyright: Todos los derechos reservados
          <a href="https://www.atid.edu.mx" target="_blank">www.atid.edu.mx</a>
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="">
            <v-card class="elevation-12" shaped>
              <v-window v-model="stepWindow">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12">
                      <v-card-text class="mt-12">
                        <v-col class="mb-5" cols="12">
                          <h2
                            class="headline font-weight-bold mb-3 purple--text"
                          >
                            Proveedores
                          </h2>
                        </v-col>
                        <h4 class="text-center mt-4">
                          Ingresa tus credenciales
                        </h4>
                        <v-form v-model="isValidLoginProveedor">
                          <v-text-field
                            @input="
                              loginProveedorForm.rfc =
                                loginProveedorForm.rfc.toUpperCase()
                            "
                            v-model="loginProveedorForm.rfc"
                            :disabled="loadingProcess"
                            :rules="[rules.required]"
                            filled
                            color="blue-grey lighten-2"
                            label="RFC registrada"
                          ></v-text-field>

                          <v-text-field
                            filled
                            :disabled="loadingProcess"
                            v-model="loginProveedorForm.password"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :rules="[rules.required]"
                            :type="showPassword ? 'text' : 'password'"
                            name="input-10-1"
                            color="blue-grey lighten-2"
                            label="Password"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          class="ma-1"
                          rounded
                          x-small
                          outlined
                          color="red"
                          dark
                          @click="mensajeRecuperacion = true"
                        >
                          Olvidé mi contraseña
                        </v-btn>
                        <v-btn
                          outlined
                          rounded
                          x-small
                          color="teal"
                          dark
                          @click="stepWindow = 3"
                          >Regístrate</v-btn
                        >
                      </div>
                      <div class="text-center mt-3 mb-5">
                        <v-btn
                          x-small
                          outlined
                          rounded
                          :disabled="!isValidLoginProveedor"
                          :loading="loadingProcess"
                          color="teal"
                          depressed
                          @click="loginProveedor()"
                        >
                          <v-icon left> mdi-send </v-icon>
                          Login
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="12" class="bg-purple">
                      <div class="text-center">
                        <v-btn
                          class="ma-3 purple--text"
                          rounded
                          x-small
                          outlined
                          @click="stepWindow = 2"
                          >Soy administrador</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <v-col class="mb-5" cols="12">
                          <h2
                            class="headline font-weight-bold mb-3 purple--text"
                          >
                            Administrador
                          </h2>
                        </v-col>
                        <h4 class="text-center mt-4">
                          Ingresa tus credenciales
                        </h4>

                        <v-form v-model="isValidLoginAdmin">
                          <v-text-field
                            v-model="loginAdminForm.usuario"
                            :disabled="loadingProcess"
                            :rules="[rules.required]"
                            filled
                            color="blue-grey lighten-2"
                            label="Usuario"
                          ></v-text-field>

                          <v-text-field
                            filled
                            :disabled="loadingProcess"
                            v-model="loginAdminForm.password"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :rules="[rules.required]"
                            :type="showPassword ? 'text' : 'password'"
                            name="input-10-1"
                            color="blue-grey lighten-2"
                            label="Password"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-5">
                        <v-btn
                          :disabled="!isValidLoginAdmin"
                          :loading="loadingProcess"
                          color="teal"
                          depressed
                          rounded
                          outlined
                          x-small
                          @click="loginAdmin()"
                        >
                          <v-icon left> mdi-send </v-icon>
                          Login
                        </v-btn>
                      </div>
                      <v-col cols="12" md="12" class="bg-purple">
                        <div class="text-center">
                          <v-btn
                            class="ma-3 purple--text"
                            rounded
                            outlined
                            x-small
                            @click="stepWindow--"
                            >Soy proveedor</v-btn
                          >
                        </div>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="3">
                  <v-row class="fill-height">
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <v-col class="mb-5" cols="12">
                          <h2
                            class="headline font-weight-bold mb-3 purple--text"
                          >
                            Regístrate
                          </h2>
                        </v-col>
                        <h4 class="text-center mt-4">
                          Ingresa tus credenciales
                        </h4>

                        <v-form
                          ref="registroProveedorRefForm"
                          v-model="validRegistroForm"
                        >
                          <v-select
                            @change="registroProveedorForm.rfc = ''"
                            :items="['FÍSICA', 'MORAL']"
                            v-model="registroProveedorForm.tipoPersona"
                            :disabled="loadingProcess"
                            :rules="[rules.required]"
                            filled
                            color="teal"
                            label="Tipo de persona"
                          ></v-select>

                          <v-text-field
                            v-model="registroProveedorForm.rfc"
                            :disabled="loadingProcess"
                            :rules="[rules.required, rfcRules]"
                            filled
                            @input="
                              registroProveedorForm.rfc =
                                registroProveedorForm.rfc.toUpperCase()
                            "
                            color="teal"
                            label="RFC"
                          ></v-text-field>

                          <v-text-field
                            color="teal"
                            v-model="registroProveedorForm.correo"
                            :rules="[rules.emailRules]"
                            label="Correo de contacto (NO PERSONAL)"
                            required
                          ></v-text-field>

                          <v-text-field
                            filled
                            :disabled="loadingProcess"
                            v-model="registroProveedorForm.password"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :rules="[rules.required, rules.strongPassword]"
                            :type="showPassword ? 'text' : 'password'"
                            name="input-10-1"
                            color="teal"
                            label="Password"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                          <v-text-field
                            filled
                            :disabled="loadingProcess"
                            v-model="registroProveedorForm.passwordConfirm"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :rules="[rules.required, confirmPasswordRules]"
                            :type="showPassword ? 'text' : 'password'"
                            name="input-10-1"
                            color="teal"
                            label="Confirma password"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-5">
                        <v-btn
                          :disabled="!validRegistroForm"
                          :loading="loadingProcess"
                          color="teal"
                          depressed
                          outlined
                          rounded
                          x-small
                          @click="registroNuevoProveedor()"
                        >
                          <v-icon left> mdi-send </v-icon>
                          Registrar
                        </v-btn>
                      </div>
                      <v-col cols="12" md="12" class="bg-purple">
                        <div class="text-center">
                          <v-btn
                            color="purple"
                            rounded
                            x-small
                            outlined
                            @click="stepWindow = 1"
                            >Ya tengo cuenta</v-btn
                          >
                        </div>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- DIALOG -->
      <v-dialog v-model="mensajeRecuperacion" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5"
              >Por favor, ingresa tu RFC registrada y te llegará un link al correo que registraste para poder actualizar tu password.</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    :rules="[rules.required]"
                    v-model="rfcRecuperacion"
                    label="RFC"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              small
              outlined
              color="purple"
              rounded
              @click="mensajeRecuperacion = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="teal"
              rounded
              outlined
              small
              class="white--text"
              @click="sendRestablecerPassword()"
            >
              Envíar correo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { buildErrorMessage } from '@/helpers/utils';
import AuthService from '../services/AuthService'
import { mapMutations } from 'vuex';
export default {
  name: "LoginView",

  data: () => ({
    currentYear: new Date().getFullYear(),
    isValidLoginProveedor: false,
    validRegistroForm: false,
    isValidLoginAdmin: false,
    registroProveedorForm: {
      rfc: "",
      correo: "",
      password: "",
      passwordConfirm: "",
      tipoPersona: "",
    },
    loginProveedorForm: {
      password: "",
      rfc: "",
    },
    loginAdminForm: {
      password: "",
      usuario: "",
    },
    stepWindow: 1,
    loadingProcess: false,

    showPassword: false,

    rules: {
      required: (value) => !!value || "Campo requerido.",
      emailRules: (value) =>
        /.+@.+\..+/.test(value) || "El formato no es válido.",
      strongPassword: (value) => {
        const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return (
          pattern.test(value) ||
          "Min. 8 caracteres con almenos una mayúscula, un número y un caracter especial."
        );
      },
    },
    mensajeRecuperacion: false,
    rfcRecuperacion: "",
  }),

  computed: {
    /**
     * Verifica que las contraseñas del registro
     * sean iguales
     * */
    confirmPasswordRules: function () {
      return (value) =>
        value === this.registroProveedorForm.password ||
        "Las contraseñas no coinciden.";
    },

    /**
     * Verifica que el numero de caracteres del RFC
     * sea de acuerdo al tipo de persona seleccionada
     */
    rfcRules: function () {
      if (this.registroProveedorForm.tipoPersona === "") {
        return "Seleccione el tipo de persona";
      } else if (this.registroProveedorForm.tipoPersona === "MORAL") {
        return (value) =>
          (value.length > 11 && value.length < 13) || "Deben ser 12 caráteres.";
      } else {
        return (value) =>
          (value.length > 12 && value.length < 14) || "Deben ser 13 caráteres.";
      }
    },
  },
  methods: {
  /* Vuex */
  ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),

  /* Local */
    loginAdmin: async function () {
      try {
        this.setOverlayState({ text: "Autenticando usuario...", visible: true });
        const response =  await AuthService.loginAdmin(this.loginAdminForm)
        localStorage.setItem('proveedores-tkn', response.data.jwt)
        this.setOverlayState({ text: "Autenticando usuario...", visible: false });
        this.$router.push('/admin')
      } catch (error) {
        this.setOverlayState({ text: "Autenticando usuario...", visible: false });
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        });        
      }
    },
    loginProveedor: async function () {
      try {
        this.setOverlayState({ text: "Autenticando usuario...", visible: true });
        const response =  await AuthService.loginProveedor(this.loginProveedorForm)
        localStorage.setItem('proveedores-tkn', response.data.jwt)
        this.setOverlayState({ text: "Autenticando usuario...", visible: false });
        this.$router.push('/proveedores')
      } catch (error) {
        this.setOverlayState({ text: "Autenticando usuario...", visible: false });
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        });        
      }
    },
    registroNuevoProveedor: async function () {
      try {
        this.setOverlayState({ text: "Registrando usuario...", visible: true });
        await AuthService.registraProveedor(this.registroProveedorForm)
        this.setOverlayState({ text: "", visible: false });
        this.stepWindow = 1
      } catch (error) {
        this.setOverlayState({ text: "", visible: false });
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        });        
      }      
    },

    sendRestablecerPassword:async function(){
      try {
        this.mensajeRecuperacion = false
        this.setOverlayState({ text: "Enviando correo", visible: true })
        const resp = await AuthService.sendResetPassword({rfc:this.rfcRecuperacion})
        console.log(resp);
        this.setOverlayState({ text: "", visible: false })
        this.setShowErrorOrSuccessAlert({
          message: "Se envió link al correo "+resp.data.correo,
          success: true,
        });

      } catch (error) {
        this.setOverlayState({ text: "", visible: false });
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        }); 
      }
    }
  },
};
</script>
