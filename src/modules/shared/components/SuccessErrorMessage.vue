<template>
    <v-bottom-sheet v-model="activeAlert" inset>
          <v-sheet class="text-center" height="200px">
            <v-btn
              class="mt-6"
              text
              color="error"
              @click="setActiveSheetAlert()"
            >
              cerrar
            </v-btn>
            <div class="my-3 text-center">
              <h4> {{ messageAlert }}</h4>
              <v-img  
                v-if="successError"             
                :src="require('@/assets/success.png')"
                width="60"
                style="margin: auto"
              ></v-img>              
              <v-img 
                v-else              
                :src="require('@/assets/wrong.png')"
                width="60"
                style="margin: auto"
              ></v-img>              
            </div>
          </v-sheet>
        </v-bottom-sheet>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name:'SuccessErrorMessage',
    computed:{
        ...mapState(["messageAlert","activeAlert","activeSuccessAlert","successError"])
    },

    methods:{
        ...mapMutations(["setActiveSheetAlert","setActiveSheetSuccessAlert"])
    }
}
</script>