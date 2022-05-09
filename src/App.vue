<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="#36827B">
      <div class="text-center  white--text">
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
    //
  }),
};
</script>
