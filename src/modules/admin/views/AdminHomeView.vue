<template>
  <v-app class="custom-bg">
    <v-fab-transition  class="ma-2">
      <v-btn @click="showNavigator = true" class="ma-2" color="purple" :elevation="20" fab dark small fixed top left>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-navigation-drawer v-model="showNavigator" app color="purple" dark>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Administración</v-list-item-title>
            <v-list-item-subtitle>Panel de control</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item.route)"
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
          <v-btn color="teal" block> Logout </v-btn>
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
export default {
  data() {
    return {
      showNavigator: false,
      items: [
        {
          title: "Lista de proveedores",
          icon: "mdi-view-dashboard",
          route: { name: "lista-proveedores", params: {} },
        },
        {
          title: "Sin validar ",
          icon: "mdi-account-box",
          route: { name: "no-validados", params: {} },
        },
        {
          title: "Documentos expirados ",
          icon: "mdi-gavel",
          route: { name: "lista-expirados", params: {} },
        },
      ],
    };
  },
  computed: {
    /* mini() {
    this.isResponsive = true
    this.showNavigator = false
    return this.$vuetify.breakpoint.mdAndDown
    } */
  },
  methods: {
    /**
     * LLeva al usuario a otra pantalla
     */
    goTo(route) {
      // Evitamos ruteo redundante
      if (this.$route.name !== route.name) this.$router.push(route);
    },
  },
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