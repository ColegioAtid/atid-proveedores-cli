<template>
  <v-app>
    <v-navigation-drawer app class="deep-purple accent-4" dark permanent>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://random.imagecdn.app/500/150" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Proveedores</v-list-item-title>
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
          <v-btn block> Logout </v-btn>
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
      items: [
        {
          title: "Registro",
          icon: "mdi-border-color",
          route: { name: "registro-proveedores", params: {} },
        },
        {
          title: "Actualización de datos",
          icon: "mdi-sign-text",
          route: { name: "datos-proveedores", params: {} },
        },
        {
          title: "Actualización de documentos",
          icon: "mdi-file-send",
          route: { name: "documentos-proveedores", params: {} },
        },
      ],
    };
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

<style>
</style>