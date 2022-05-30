<template>
  <v-bottom-sheet v-model="alertActive" persistent inset>
    <v-sheet class="text-center" height="200px">
      <v-btn class="mt-6" text color="error" @click="setActiveSheetAlert()">
        cerrar
      </v-btn>
      <div class="my-3 text-center">
        <h4>{{ getMessageAlertState() }}</h4>
        <v-img
          v-if="getSuccessErrorState()"
          :src="require('@/assets/shared/success.png')"
          width="60"
          style="margin: auto"
        ></v-img>
        <v-img
          v-else
          :src="require('@/assets/shared/wrong.png')"
          width="60"
          style="margin: auto"
        ></v-img>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SuccessErrorMessage",
  computed: {
    /* Vuex */
    ...mapGetters("shared", [
      "getMessageAlertState",
      "getActiveAlertState",
      "getActiveSuccesAlertState",
      "getSuccessErrorState",
    ]),
    /* Local */
    alertActive: function () {
      return this.getActiveAlertState();
    },
  },

  methods: {
    ...mapMutations("shared", [
      "setActiveSheetAlert",
      "setActiveSheetSuccessAlert",
    ]),
  },
};
</script>