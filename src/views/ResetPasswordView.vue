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
                  <v-row class="fill-height">
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <v-col class="mb-5" cols="12">
                          <h2
                            class="headline font-weight-bold mb-3 purple--text"
                          >
                            Restablecer contraseña
                          </h2>
                        </v-col>
                        <h4 class="text-center mt-4">
                          Ingresa tus nuevas credenciales
                        </h4>

                        <v-form
                          ref="registroProveedorRefForm"
                          v-model="validRegistroForm"
                        >                         
                          <v-text-field
                            filled
                            :disabled="loadingProcess"
                            v-model="resetPasswordForm.password"
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
                            v-model="resetPasswordForm.passwordConfirm"
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
                          @click="resetPassword()"
                        >
                          <v-icon left> mdi-send </v-icon>
                          Restablecer
                        </v-btn>
                      </div>                      
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-col>      
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
    validRegistroForm: false, 
    token:"",
    resetPasswordForm: {     
      password: "",
      passwordConfirm: "",
      token:""
    },    
    stepWindow: 1,
    loadingProcess: false,
    showPassword: false,

    rules: {
      required: (value) => !!value || "Campo requerido.",     
      strongPassword: (value) => {
        const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return (
          pattern.test(value) ||
          "Min. 8 caracteres con almenos una mayúscula, un número y un caracter especial."
        );
      },
    },       
  }),

  computed: {
    /**
     * Verifica que las contraseñas del registro
     * sean iguales
     * */
    confirmPasswordRules: function () {
      return (value) =>
        value === this.resetPasswordForm.password ||
        "Las contraseñas no coinciden.";
    },

    
  },
  methods: {
  /* Vuex */
  ...mapMutations("shared", [
      "setShowErrorOrSuccessAlert",
      "setOverlayState",
    ]),

    resetPassword: async function () {
      try {
        this.setOverlayState({ text: "Restableciendo password...", visible: true });
        this.resetPasswordForm.token = this.token
        await AuthService.changePassword(this.resetPasswordForm)
        this.setOverlayState({ text: "", visible: false })
        this.$router.push("/")
        this.setShowErrorOrSuccessAlert({
          message: "Password restablecido exitosamente!",
          success: true,
        })
      } catch (error) {
        this.setOverlayState({ text: "", visible: false })
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        })        
      }      
    },
    validToken: async function(){
      try {
        this.setOverlayState({ text: "Validando...", visible: true });
        this.token = this.$route.params.token
        const resp = await AuthService.validToken(this.token)
        this.setOverlayState({ text: "", visible: false });
        if(!resp.data.valid){
          this.setShowErrorOrSuccessAlert({
          message: "Token inválido",
          errorOnPetition: true,
          })
          this.$router.push("/")
        }                
      } catch (error) {
        this.setOverlayState({ text: "", visible: false });
        this.setShowErrorOrSuccessAlert({
          message: buildErrorMessage(error),
          errorOnPetition: true,
        })
      }
      
    }
  },
  created(){
    this.validToken()
  }

};
</script>
