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
                        <v-form ref="loginform">
                          <v-text-field
                            v-model="loginProveedorForm.rfc"
                            :disabled="isUpdating"
                            :rules="[rules.required]"
                            filled
                            color="blue-grey lighten-2"
                            label="RFC registrada"
                          ></v-text-field>

                          <v-text-field
                            filled
                            :disabled="isUpdating"
                            v-model="loginProveedorForm.password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
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
                        <v-btn class="ma-1" rounded x-small outlined color="red" dark>
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
                          :disabled="!isValidFormProvLogin || autoUpdate"
                          :loading="isUpdating"
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
                          >Soy administrador?</v-btn
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

                        <v-form ref="loginform">
                          <v-select
                            :items="[
                              'PPATRONATO',
                              'COMITEBECAS',
                              'DIRECCIONADMIN',
                              'ASISTENTE',
                            ]"
                            v-model="usernameAdmin"
                            :disabled="isUpdating"
                            :rules="[rules.required]"
                            filled
                            color="blue-grey lighten-2"
                            label="Rol"
                          ></v-select>

                          <v-text-field
                            filled
                            :disabled="isUpdating"
                            v-model="passwordAdmin"
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
                          :disabled="!isValidFormAdmin || autoUpdate"
                          :loading="isUpdating"
                          color="teal darken-3"
                          depressed
                          @click="login()"
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
                            @click="stepWindow--"
                            >¿Eres proveedor?</v-btn
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

                        <v-form ref="loginform">
                          <v-select
                            :items="[
                              'PPATRONATO',
                              'COMITEBECAS',
                              'DIRECCIONADMIN',
                              'ASISTENTE',
                            ]"
                            v-model="usernameAdmin"
                            :disabled="isUpdating"
                            :rules="[rules.required]"
                            filled
                            color="blue-grey lighten-2"
                            label="Rol"
                          ></v-select>

                          <v-text-field
                            filled
                            :disabled="isUpdating"
                            v-model="passwordAdmin"
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
                          :disabled="!isValidFormAdmin || autoUpdate"
                          :loading="isUpdating"
                          color="teal darken-3"
                          depressed
                          @click="login()"
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
                            @click="stepWindow = 1"
                            >¿Ya tienes cuenta?</v-btn
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",

  data: () => ({
    currentYear: new Date().getFullYear(),
    isValidLoginProveedor:false,
    isValidRegistroProveedor:false,
    isValidLoginAdmin:false,
    registroProveedorForm: {
      rfc: "",
      correo: "",
      password: "",
      passwordConfirm:"",
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
    isUpdating: false,

    showPassword: false,
    autoUpdate: false,
    rules: {
      required: (value) => !!value || "Campo requerido.",
    },
  }),

  computed:{
    isValidFormProvLogin: function(){
      return (
        this.loginProveedor.password !== "" &&
        this.loginProveedor.rfc !== ""
      )
    },
    isValidFormAdminLogin: function(){
      return (
        this.loginAdmin.password !== "" &&
        this.loginAdmin.usuario !== ""
      )
    },
  },
  methods:{
    loginAdmin: function(){

    },
    loginProveedor: function(){

    },
    registroNuevoProveedor: function(){

    }
  }
};
</script>
