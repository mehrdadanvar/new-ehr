<template>
  <main class="mt-24">
    <UContainer>
      <section>
        <h1 class="text-2xl text-orange-600">
          Transforming healthcare education
        </h1>
        <p class="py-24">
          All plans billed to your school. This makes it easy to setup and
          manage, plus, it keeps your student's data private. Billing to the
          school means we don't collect personal information about your
          students. We don't collect email, nor addresses, and especially we do
          not collect credit card numbers.
        </p>
        <div class="flex gap-6 flex-wrap">
          <div v-for="plan in plans" class="min-w-5xl">
            <div class="border border-gray-300 p-6 rounded-2xl">
              <div class="card-header flex flex-row gap-6 mb-6">
                <p
                  class="border border-gray-300 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200"
                >
                  <UIcon :name="plan.figure" class="text-4xl text-orange-400" />
                </p>
                <div>
                  <h2 class="text-xl text-gray-700">{{ plan.title }}</h2>
                  <h3 class="text-gray-500">{{ plan.description }}</h3>
                </div>
              </div>
              <UDivider label="details" />
              <div
                class="card-body border border-gray-200 rounded-lg bg-gray-50 p-3 text-gray-500"
              >
                <p v-for="item in plan.points" class="">{{ item.title }}</p>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </main>
</template>
<script setup>
let plans = [
  {
    id: 1,
    title: "Free is Good",
    description: "For individuals",
    figure: "i-solar-users-group-two-rounded-bold-duotone",
    points: [
      { id: 1, title: "Always free for faculty", content: "" },
      { id: 1, title: "Inactive students are free", content: "" },
      { id: 1, title: "First month free", content: "" },
      { id: 1, title: "Free fully operational demonstration.", content: "" },
      {
        id: 1,
        title: "Free support and orientation for faculty leaders (*)",
        content: "",
      },
    ],
  },
  {
    id: 2,
    title: "Free Single Users",
    description: "For individuals",
    figure: "i-solar-user-rounded-bold-duotone",
    points: [
      "Always free for faculty",
      "Inactive students are free",
      "First month free",
      "Free fully operational demonstration.",
      "Free support and orientation for faculty leaders (*)",
    ],
  },
  {
    id: 3,
    title: "Free is Good",
    description: "For individuals",
    figure: "i-solar-users-group-two-rounded-bold-duotone",
    points: [
      "Always free for faculty",
      "Inactive students are free",
      "First month free",
      "Free fully operational demonstration.",
      "Free support and orientation for faculty leaders (*)",
    ],
  },
];
</script>
<style scoped></style>
