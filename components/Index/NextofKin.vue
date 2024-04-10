<template>
  <div class="first gender p-3 bg-gray-200 rounded-md">
    <UIcon name="i-solar-users-group-two-rounded-bold-duotone" class="text-3xl text-gray-600" />
    <div class="relatives flex gap-4">
      <div class="flex flex-col w-1/3 gap-2">
        <div class="flex gap-3 items-center lg:flex-grow">
          <span class="min-w-40">Next of Kin Name</span>
          <UInput name=" firstname" placeholder="Eric" size="md" class="w-2/3" />
        </div>
        <div class="flex gap-3 items-center lg:flex-grow">
          <span class="min-w-40">Relationship:</span>
          <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
        </div>
        <div class="flex gap-3 items-center lg:flex-grow">
          <span class="min-w-40">Phone Number:</span>
          <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
        </div>
      </div>
      <div class="flex flex-col w-1/3">
        <div class="flex gap-3 items-center lg:flex-grow">
          <span class="min-w-40">Decisionmaker Name:</span>
          <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
        </div>
        <div class="flex gap-3 items-center lg:flex-grow">
          <span class="min-w-40">Phone Number:</span>
          <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
        </div>
        <div class="flex gap-3 items-center lg:flex-grow">
          <span class="min-w-40">Relationship:</span>
          <UInput placeholder="Eric" disabled size="md" class="w-2/3" />
        </div>
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
