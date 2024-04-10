<template>
  <div class="first gender p-3 bg-gray-200 rounded-md">
    <UIcon name="i-solar-user-circle-bold-duotone" class="text-2xl text-gray-500" />
    <div class="contact flex gap-2 flex-col">
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Email Address:</span>
        <UInput name=" firstname" placeholder="Eric" size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Phone Number:</span>
        <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">PMN:</span>
        <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Patient Service:</span>
        <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
      </div>
    </div>
  </div>
</template>

<script setup>
let firstname = ref("Eric");
let lastname = ref("Johns");
let pronouns = ["", "She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Hir/Hirs", "Please Ask"];
let selected = ref(pronouns[0]);
</script>

<style lang="scss" scoped></style>
