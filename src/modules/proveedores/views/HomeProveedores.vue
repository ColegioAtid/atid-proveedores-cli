<template>
  <v-app class="custom-bg">
    <v-fab-transition class="ma-2">
      <v-btn
        @click="showNavigator = true"
        class="ma-2"
        color="purple"
        :elevation="20"
        fab
        dark
        fixed
        top
        left
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-navigation-drawer v-model="showNavigator" app class="purple" dark>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/admin/provider.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Proveedores</v-list-item-title>
            <v-list-item-subtitle>Panel de control</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <progress-component
        v-if="isLoading"
        :color="'white'"
        :size="40"
        :texto="''"
      />
      <v-list v-else>
        <v-list-item
          v-for="item in getRutasNavigator()"
          :key="item.title"
          link
          @click="goTo(item.route)"
          :disabled="item.disable"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="showNavigator = false" color="red" block>
            <v-icon>mdi-arrow-collapse</v-icon>
          </v-btn>
        </div>
        <div class="pa-2">
          <v-btn @click="logout()" color="teal" block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container fill-height fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthService from "@/services/AuthService";
import { mapActions, mapGetters, mapMutations } from "vuex";
import ProgressComponent from "@/components/ProgressComponent.vue";
export default {
  components: {
    ProgressComponent,
  },
  data() {
    return {
      showNavigator: false,
      /* rutasNavigator: [
        {
          title: "Datos generales",
          icon: "mdi-home-circle",
          route: {
            name: "datos-generales-proveedores",
            params: null,
          },
        },
        {
          title: "Actualización de datos",
          icon: "mdi-sign-text",
          route: {
            name: "datos-proveedores",
            params: null,
          },
        },
        {
          title: "Actualización de documentos",
          icon: "mdi-file-send",
          route: {
            name: "documentos-proveedores",
            params: null,
          },
        },
        {
          title: "Registro",
          icon: "mdi-border-color",
          route: {
            name: "registro-proveedores",
            params: null,
          },
        },
      ], */
      datosProveedor: {},
      isLoading:false,
    };
  },
  computed:{
    ...mapGetters("proveedores",["getRutasNavigator"])
  },
  methods: {
    ...mapActions("proveedores", ["getDataproveedor"]),
    ...mapMutations("proveedores", ["setDataProveedor"]),
    /**
     * LLeva al usuario a otra pantalla
     */
    goTo: function (route) {
      // Evitamos ruteo redundante
      if (this.$route.name !== route.name) this.$router.push(route);
    },

    logout: function () {
      AuthService.logout();
    },

    /** FUNCIÓN QUE SIRVE PARA OBTENER LOS DATOS REGISTRADOS
     * DE LOS PROVEEDORES
     */
    async init() {
      this.isLoading = true;
      try {
        await this.getDataproveedor();
        /* this.datosProveedor = proveedorData;
        this.setDataProveedor(this.datosProveedor); */        
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
  created(){
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.custom-bg {
  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>