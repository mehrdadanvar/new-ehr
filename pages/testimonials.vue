<template>
  <main class="mt-24 bg-gray-50">
    <UContainer>
      <section class="grid grid-cols-2 gap-12">
        <article v-for="(item, index) in testimonials" class="">
          <div
            class="border border-gray-100 rounded-2xl p-8 transition-all hover:scale-[1.04] hover:border-gray-300 hover:bg-white"
          >
            <div class="flex gap-6 items-center justify-start">
              <img
                :src="`/testimonials/image${index + 1}.jpeg`"
                alt=""
                width="65"
                class="rounded-full"
              />

              <div>
                <p class="text-xl text-gray-800">{{ item.name }}</p>
                <h4 class="text-gray-600 text-sm pl-3">{{ item.role }}</h4>
              </div>
            </div>
            <UDivider label class="py-4" />
            <h2 class="text-orange-700 py-4">{{ item.title }}</h2>
            <h3 class="text-gray-600">{{ item.text }}</h3>
          </div>
        </article>
      </section>
    </UContainer>
  </main>
</template>
<script setup>
import testimonials from "../assets/tests.json";
console.log(testimonials);
</script>
<style scoped></style>
