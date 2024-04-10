<template>
  <main class="flex pt-3">
    <Sidebar />

    <div class="content p-5 border border-gray-200 w-full bg-gray-50 text-gray-800">
      <UDivider
        label="Demographics"
        type="dashed"
        class="pb-3"
        :ui="{ label: 'text-md text-blue-600 dark:text-primary-400' }"
      />
      <div class="flex flex-wrap gap-2">
        <IndexFirst class="" />
        <IndexGender class="" />
        <IndexAge class="" />
        <IndexComposition class="" />
      </div>
      <UDivider
        label="Address"
        type="dashed"
        :ui="{ label: 'text-md text-blue-600 dark:text-primary-400' }"
        class="py-3"
      />
      <div class="second h-64 flex gap-3">
        <IndexAddress class="w-1/3" />
        <IndexContact class="w-1/3" />
      </div>
      <UDivider
        label="Relatives"
        type="dashed"
        :ui="{ label: 'text-md text-blue-600 dark:text-primary-400' }"
        class="py-3"
      />
      <div class="Family">
        <IndexNextofKin />
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "demo-layout",
});
</script>

<style scoped></style>
