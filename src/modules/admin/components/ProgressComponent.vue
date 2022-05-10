<template>
    <div class="text-center mt-6">
        <v-progress-circular
        :size="70"
        color="purple"
        indeterminate
      ></v-progress-circular>
      <p>Cargando datos...</p>
    </div>
</template>
<script>
export default {
    name:'ProgressComponent',
}
</script>