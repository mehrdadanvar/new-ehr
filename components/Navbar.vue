<template>
  <UContainer>
    <nav class="flex flex-row justify-between text-gray-700 py-4 items-center">
      <NuxtLink to="/">
        <div class=""><img src="/logo1.svg" alt="" width="50" /></div>
      </NuxtLink>
      <div class="flex w-1/3 gap-4">
        <div>
          <UDropdown
            v-model:open="aboutIsopen"
            :items="aboutItems"
            :popper="{ placement: 'bottom-start' }"
          >
            <button class="">About</button>
          </UDropdown>
        </div>
        <div>
          <UDropdown
            v-model:open="pricingIsopen"
            :items="pricingItems"
            :popper="{ placement: 'bottom-start' }"
          >
            <button class="">Pricing</button>
          </UDropdown>
        </div>
      </div>
      <div class="flex w-1/3 gap-6 items-center">
        <p>Sign in</p>
        <UButton
          color="black"
          icon="i-solar-round-alt-arrow-right-bold"
          :trailing="true"
          >Get Acess</UButton
        >
      </div>
    </nav>
  </UContainer>
</template>
<!-- <div
class="border border-gray-300 rounded-full px-6 text-center bg-gradient-to-br from-orange-600 to-orange-800 text-white"
>
EDEHR
</div> -->
<script setup>
let platformItems = [];
let aboutItems = [
  [
    {
      label: "Testimonials",
      icon: "i-solar-user-speak-rounded-bold",
      click: async () => {
        await navigateTo("/testimonials");
      },
    },
  ],
  [
    {
      label: "Team",
      icon: "i-solar-users-group-two-rounded-bold-duotone",
      click: async () => {
        await navigateTo("/team");
      },
    },
  ],
  [
    {
      label: "Histroy",
      icon: "i-solar-history-line-duotone",
      click: async () => {
        await navigateTo("/about");
      },
    },
  ],
];
let aboutIsopen = ref(false);
let pricingIsopen = ref(false);
let pricingItems = [
  [
    {
      label: "Pricing",
      icon: "i-solar-chat-round-money-bold-duotone",
      click: async () => {
        await navigateTo("/pricing");
      },
    },
  ],
  [
    {
      label: "Team",
      icon: "i-solar-users-group-two-rounded-bold-duotone",
      click: async () => {
        await navigateTo("/team");
      },
    },
  ],
];
</script>
<style scoped></style>
