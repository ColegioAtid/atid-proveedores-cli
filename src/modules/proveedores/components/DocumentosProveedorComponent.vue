<template>
  <v-form ref="documentosProveedorForm" v-model="valid" lazy-validation class="px-7">
    <v-row>
      <v-col cols="12"
        ><p>Por favor, adjunta los siguientes documentos:</p></v-col
      >
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-file-input
          v-model="documento1"
          label="File input 1"
          :rules="documentosRules"
          accept=".pdf"
          required
          :show-size="1000"
          counter
          outlined
          color="teal"
          dense
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="#9b33b0" dark label small>
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-file-input
          v-model="documento2"
          label="File input 2"
          :rules="documentosRules"
          accept=".pdf"
          required
          :show-size="1000"
          counter
          outlined
          color="teal"
          dense
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="#9b33b0" dark label small>
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-file-input
          v-model="documento3"
          label="File input 3"
          :rules="documentosRules"
          accept=".pdf"
          required
          :show-size="1000"
          counter
          outlined
          color="teal"
          dense
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="#9b33b0" dark label small>
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-file-input
          v-model="documento4"
          label="File input 4"
          :rules="documentosRules"
          accept=".pdf"
          required
          :show-size="1000"
          counter
          outlined
          color="teal"
          dense
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="#9b33b0" dark label small>
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-file-input
          v-model="documento5"
          label="File input 5"
          :rules="documentosRules"
          accept=".pdf"
          required
          :show-size="1000"
          counter
          outlined
          color="teal"
          dense
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="#9b33b0" dark label small>
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "DocumentosProveedorComponent",
  data() {
    return {
      valid: true,
      documento1: null,
      documento2: null,
      documento3: null,
      documento4: null,
      documento5: null,
      documentosRules: [
        (value) => !!value || "Campo requerido.",
        (value) => !value || value.size < 3000000 || "Máximo deben ser 3 MB!",
      ],
    };
  },
};
</script>

<style>
</style>