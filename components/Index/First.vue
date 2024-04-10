<template>
  <div class="first gender p-3 bg-gray-200 rounded-md" @mouseover="hoverState = true" @mouseleave="hoverState = false">
    <div class="flex justify-between pb-2 items-center">
      <UIcon name="i-solar-user-id-bold-duotone" class="text-3xl text-gray-500/75" />
      <span>{{ editingState }}</span>
      <UIcon
        name="i-solar-pen-new-round-bold-duotone"
        class="text-xl text-teal-400 hover:cursor-pointer"
        v-if="hoverState"
        @click="editingState = !editingState"
      />
    </div>
    <div class="name flex gap-2 flex-col">
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Legal first name:</span>
        <UInput name=" firstname" placeholder="Eric" size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Middle name:</span>
        <UInput placeholder="Johnson" size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Last name:</span>
        <UInput placeholder="Obamma" size="md" class="w-2/3" />
      </div>
      <div class="flex gap-3 items-center lg:flex-grow">
        <span class="min-w-28">Preferred Name:</span>
        <!-- prettier ignore -->
        <UInput placeholder="Eric" size="md" class="w-2/3" :class="{ 'cursor-not-allowed': editingState }" />
      </div>
    </div>
  </div>
</template>

<script setup>
let firstname = ref("Eric");
let lastname = ref("Johns");
let pronouns = ["", "She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Hir/Hirs", "Please Ask"];
let selected = ref(pronouns[0]);

let hoverState = ref(false);
let editingState = ref(false);

async function activateEditing() {
  editingState.value = !editingState.value;
}
let cursorState = ref("disabled ");
</script>

<style lang="scss" scoped></style>
