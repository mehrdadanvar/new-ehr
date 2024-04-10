<template>
  <aside
    class="sidebar p-1 border border-r-gray-200 text-center bg-zinc-50 flex flex-col justify-between pb-12 transition-all"
    :class="{ 'w-[290px] p-2': isOpen, 'w-[0px] -z-10': !isOpen }"
  >
    <UAccordion :items="items" variant="ghost" size="xl" color="blue" multiple>
      <template #item="{ item }">
        <NuxtLink :to="item.route">careteam</NuxtLink>
        <p>{{ item.children }}</p>
      </template>
    </UAccordion>

    <!-- <UDropdown :items="uitems" mode="hover" :popper="{ placement: 'top-start' }">
        <UButton color="white" label="Profile" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown> -->
  </aside>
  <button class="w-0 sticky" @click="isOpen = !isOpen">
    <UIcon name="i-solar-round-alt-arrow-left-bold" class="text-3xl text-teal-500 -ml-4" v-if="isOpen" />
    <UIcon name="i-solar-round-alt-arrow-right-bold" class="text-3xl text-teal-500 -ml-4" v-else="isOpen" />
  </button>
</template>

<script setup>
let isOpen = ref(true);
const uitems = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      shortcuts: ["⌘", "D"],
    },
  ],
];
let items = [
  {
    id: 0,
    label: "Patient Profile",
    slot: "getting-started",
  },
  { id: 1, label: "Current Visit", content: "some conent", children: ["child1", "child2"] },
  { id: 2, label: "Patient Chart", content: "some conent", children: ["child3", "child4"] },
  { id: 3, label: "External Resources", content: "some conent", children: ["child1", "child2"] },
  {
    label: "Theming",
    defaultOpen: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
    route: "/careteam",
    children: ["child1", "child2"],
  },
];
const mehrdad = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    slot: "getting-started",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    defaultOpen: true,
    slot: "installation",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    defaultOpen: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Layouts",
    icon: "i-heroicons-rectangle-group",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Components",
    icon: "i-heroicons-square-3-stack-3d",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Utilities",
    icon: "i-heroicons-wrench-screwdriver",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<style scoped></style>
