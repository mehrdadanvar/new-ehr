<template>
  <nav class="flex flex-row justify-between">
    <div v-for="link in links">
      <div>{{ link }}</div>
    </div>
  </nav>
</template>
<script setup>
let links = ["Platform", "About", "Pricing", "Contact Us"];
</script>
<style scoped></style>
