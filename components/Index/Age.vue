<template>
  <div class="Age p-3 bg-gray-200 rounded-md">
    <UIcon name="i-solar-calendar-mark-bold-duotone" class="text-2xl text-gray-500" />
    <div class="age flex flex-col gap-2">
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-32">Age:</span>
        <UInput name=" firstname" placeholder="Eric" size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-32">Date of birth:</span>
        <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-32">Primary Language:</span>
        <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-32">Religon:</span>
        <UInput name=" firstname" placeholder="Eric" size="md" class="w-2/3" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
