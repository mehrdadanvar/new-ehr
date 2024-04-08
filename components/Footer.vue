<template>
  <footer class="bg-gradient-to-bl from-gray-800 to-gray-900 text-white">
    <p class="text-center text-lg text-gray-200 py-12">
      The EdEHR software is licensed under GNU Affero General Public License
      v3.0
    </p>
    <div
      class="grid grid-cols-3 gap-6 w-8/12 px-6 py-4 rounded-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <div v-for="link in footers">
        <NuxtLink
          :to="link.route"
          class="text-orange-500 hover:bg-gray-800 hover:text-orange-400"
          >{{ link.label }}</NuxtLink
        >
      </div>
    </div>
    <p class="py-12 text-center">© 2024 EdEHR Technologies Inc.</p>
  </footer>
</template>
<script setup>
let footers = [
  { id: "1", label: "EdEHR", route: "/" },
  { id: "2", label: "Features", route: "/" },
  { id: "3", label: "Testimonials", route: "/" },
  { id: "4", label: "Contact Us", route: "/" },
  { id: "5", label: "Privacy", route: "/" },
  { id: "6", label: "Terms and Conditions", route: "/" },
];
</script>
<style scoped></style>
