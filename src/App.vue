<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img
        class="text-center"
        contain
        max-height="50"
        max-width="50"
        :src="require('./assets/atid_icon.png')"
      ></v-img>
      <v-toolbar-title>Sistema de proveedores Atid</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu left bottom >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="#36827B">
      <div class="text-center white--text">
        <h5>Colegio Atid</h5>
        <p>
          Atid School was established in 1993 within the network of schools of
          the Jewish-Mexican community, as part of the Maguen David Community.
          It offers an alternative for those families for whom English is a
          priority within a Jewish context. Atid includes all sections from
          Preschool to High School.
        </p>
        © {{ currentYear }} Copyright: Todos los derechos reservados
        <a class="white--text" href="https://atid.edu.mx/">atid.edu.mx</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    currentYear: new Date().getFullYear(),
  }),
};
</script>
