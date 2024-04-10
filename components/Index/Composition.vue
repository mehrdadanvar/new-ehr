<template>
  <div class="composition p-3 bg-gray-200 rounded-md">
    <UIcon name="i-solar-body-bold-duotone" class="text-2xl text-gray-500" />
    <div class="flex flex-col gap-2 max-w-md">
      <div class="">
        <div class="flex gap-3 items-center">
          <span class="min-w-32">Weight:</span>
          <UInput name=" firstname" placeholder="75 kg?Ibs" size="md" class="flex-grow" />
        </div>
        <div class="flex gap-3 items-center">
          <span class="min-w-32">Height:</span>
          <UInput name=" firstname" placeholder="Eric" size="md" class="w-2/3" />
        </div>
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-32">Marital Status:</span>
        <UInputMenu v-model="selected" :options="maritalStatus" size="md" class="flex-grow" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-32">Indigenous Origin:</span>
        <UInput placeholder="Eric" disabled size="md" class="flex-grow" />
      </div>
      <div class="flex gap-3 items-center lg:">
        <span class="min-w-32">Occupation:</span>
        <UInput placeholder="Eric" disabled size="md" class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script setup>
let maritalStatus = ["Married", "single", "widowed", "Left partner", "Divorced"];
let selected = ref(maritalStatus[0]);
</script>

<style scoped></style>
