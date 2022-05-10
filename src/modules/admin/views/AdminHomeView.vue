<template>
  <v-app gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
      <v-navigation-drawer app color="purple"  dark permanent>
          <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Administración</v-list-item-title>
            <v-list-item-subtitle>Panel de control</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link @click="goTo(item.route)" >
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
      items: [
        { title: "Lista de proveedores", icon: "mdi-view-dashboard", route:{name:'lista-proveedores',params:{}} },
        { title: "Sin validar ", icon: "mdi-account-box", route:{name:'no-validados',params:{}}  },
        { title: "Documentos expirados ", icon: "mdi-gavel", route:{name:'lista-expirados',params:{}}  },
      ],
    };
  },
  methods:{
    /**
     * LLeva al usuario a otra pantalla
     */
    goTo(route){
      // Evitamos ruteo redundante
      if(this.$route.name !== route.name)
        this.$router.push(route)
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-bg{
  background: rgb(136,31,92);
  background: radial-gradient(circle, rgba(136,31,92,1) 39%, rgba(130,54,120,1) 64%);
}
</style>