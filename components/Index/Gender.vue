<template>
  <div class="gender p-3 bg-gray-200 rounded-md">
    <div class="grid grid-cols-2 w-5">
      <UIcon name="i-ph-gender-female-duotone" class="text-2xl text-gray-500" />
      <UIcon name="i-ph-gender-male-duotone" class="text-2xl text-gray-500" />
      <!-- <UIcon name="i-ph-gender-intersex-duotone" class="text-2xl text-gray-500 -ml-5 mt-2" /> -->
      <!-- <UIcon name="i-ph-gender-transgender-duotone" class="text-2xl text-gray-500 -ml-7 mt-3" /> -->
    </div>

    <div class="name flex flex-col gap-3">
      <div class="flex gap-3 items-center">
        <span class="min-w-32">Sex at birth:</span>
        <UInputMenu v-model="selectedBirth" :options="birthOptions" class="flex-grow" />
      </div>
      <div class="flex gap-3 items-center">
        <span class="min-w-32">Gender Identity:</span>
        <UInputMenu v-model="selectedGenderIdentity" :options="genderIdentity" class="flex-grow" />
      </div>
      <div class="flex gap-3 items-center">
        <span class="min-w-32">Gender marker:</span>
        <UInput name=" firstname" placeholder="Eric" size="md" class="flex-grow" />
      </div>
      <div class="flex gap-3 items-center">
        <span class="min-w-32">Pronouns:</span>
        <UInput name=" firstname" placeholder="Eric" size="md" class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script setup>
let birthOptions = ["Male", "Female", "Intersex"];
let selectedBirth = ref(birthOptions[0]);

let genderIdentity = ["Female", "Male", "Transgender Female", "Transgender Male", "Prefer not to say"];
let selectedGenderIdentity = ref(genderIdentity[0]);
</script>

<style scoped></style>
