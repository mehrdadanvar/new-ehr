<template>
  <main class="mt-24">
    <UContainer>
      <section>
        <div class="flex flex-col gap-12">
          <article v-for="member in team">
            <div class="flex items-center">
              <div v-if="member.image.length > 0">
                <img
                  :src="`/team/${member.image}`"
                  alt=""
                  width="125"
                  class="rounded-3xl"
                />
              </div>
              <div v-else>
                <UIcon
                  name="i-solar-user-circle-bold-duotone"
                  class="text-5xl text-gray-700"
                />
              </div>
              <div class="pl-5">
                <h2 class="text-xl text-gray-800">{{ member.name }}</h2>
                <h3 class="text text-orange-600/80">
                  {{ member.role }}
                </h3>
              </div>
            </div>

            <div
              class="ml-12 p-5 border-l border-b border-gray-300 rounded-bl-3xl bg-gradient-to-tr from-gray-50 to-white"
            >
              <h4
                v-for="paragraph in member.content"
                class="py-1 text-gray-700"
              >
                {{ paragraph }}
              </h4>
            </div>
          </article>
        </div>
      </section>
    </UContainer>
  </main>
</template>
<script setup>
import team from "../assets/team.json";
</script>
<style scoped></style>
