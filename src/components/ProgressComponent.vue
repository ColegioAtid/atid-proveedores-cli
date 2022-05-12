<template>
    <div class="text-center mt-6">
        <v-progress-circular
        :size="80"
        :width="5"
        color="purple"
        indeterminate
      ></v-progress-circular>
      <p class="mt-5">Cargando datos...</p>
    </div>
</template>
<script>
export default {
    name:'ProgressComponent',
}
</script>