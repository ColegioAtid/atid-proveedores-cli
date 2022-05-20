<template>
    <div class="text-center mt-6">
        <v-progress-circular
        :size="size"
        :width="5"
        :color="color"
        indeterminate
      ></v-progress-circular>
      <p class="mt-5 white--text" v-if="texto || texto === ''">{{texto}}</p>
      <p class="mt-5" v-else>Cargando datos...</p>

    </div>
</template>
<script>
export default {
    name:'ProgressComponent',
    props:["size","color","texto"]
}
</script>