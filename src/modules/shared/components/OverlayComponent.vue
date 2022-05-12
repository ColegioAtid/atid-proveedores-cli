<template>
  <div class="text-center">
    <v-overlay :value="overlayState.visible" z-index="10">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <p class="ma-2">
        <b>{{ overlayState.text }}</b>
      </p>
    </v-overlay>
  </div>
</template>



<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "OverlayComponent",
  computed: {
    ...mapState("shared", ["overlayState"]),
  },

  methods: {
    ...mapMutations("shared", ["setOverlayState"]),
  },
};
</script>

