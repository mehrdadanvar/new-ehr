<template>
  <main class="mt-24">
    <UContainer>
      <section class="me">
        <h1 class="text-2xl text-orange-600 text-center">
          Transforming Healthcare Education
        </h1>
        <p class="py-20 text-gray-700 text-center text-lg">
          All plans billed to your school. This makes it easy to setup and
          manage, plus, it keeps your student's data private. Billing to the
          school means we don't collect personal information about your
          students. We don't collect email, nor addresses, and especially we do
          not collect credit card numbers.
        </p>
        <div class="grid grid-cols-2 gap-6 px-12">
          <div v-for="plan in plans" class="w-full">
            <div class="border border-gray-300 p-12 rounded-3xl bg-white">
              <div class="card-header flex flex-row gap-6 mb-6">
                <p
                  class="border border-gray-300 flex items-center justify-center w-12 h-12 rounded-full bg-gray-50"
                >
                  <UIcon :name="plan.figure" class="text-4xl text-gray-800" />
                </p>
                <div>
                  <h2 class="text-xl text-gray-800">{{ plan.title }}</h2>
                  <h3 class="text-gray-600">{{ plan.description }}</h3>
                </div>
              </div>
              <UDivider label="***" class="pb-4" />
              <div
                class="card-body border border-gray-200 rounded-lg bg-gray-100 p-5 mb-6 text-gray-500 flex flex-col gap-3 items-center"
              >
                <div class="flex flex-row gap-6 items-center">
                  <p class=" text-orange-600">
                    US $ <span class="text-3xl">{{ plan.price }}</span class="text-3xl">
                  </p>
                  <p class="flex flex-col">
                    <span class="text-gray-800">Monthly Payments</span>
                    <span>+ Tax</span>
                  </p>
                </div>
                <button
                  class="w-full bg-gray-800 text-white py-1 rounded-md mb-3 hover:bg-gray-800/90"
                >
                  Get access
                </button>
                <p>Lifetime access. Unlimited projects. Free updates.</p>
              </div>

              <div class="card-footer">
                <div></div>
                <p v-for="item in plan.points" class="">{{ item.title }}</p>
              </div>
            </div>
            <Tail />
          </div>
        </div>
        <UDivider label="Details" class="py-24" />
      </section>
    </UContainer>
    <PricingSection2 />
  </main>
</template>
<script setup>
let plans = [
  {
    id: 1,
    title: "Free is Good",
    price: "0",
    description: "For individuals",
    figure: "i-solar-users-group-two-rounded-bold-duotone",
    points: [
      { id: 1, title: "First month free", content: "" },
      { id: 1, title: "Always free for faculty .Inactive students are free", content: "" },
      { id: 1, title: "Free fully operational demonstration. Free support and orientation for faculty leaders (*)", content: "" },
    ],
  },
  {
    id: 2,
    title: "Monthly Subscription",
    price: "3",
    description: "For individuals",
    figure: "i-solar-user-rounded-bold-duotone", //
    points: [
      { id: 0, title: "Flexible", content: "" },
      { id: 1, title: "Ideal for getting started", content: "" },
      { id: 2, title: "Scale as you need to", content: "" },
      {
        id: 3,
        title: "Billed monthly based on number of active students",
        content: "",
      },
      {
        id: 4,
        title: "Free support and orientation for faculty leaders (*)",
        content: "",
      },
    ],
  },
  {
    id: 3,
    title: "Anual Subscription",
    price: "10",
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
    id: 4,
    title: "Dedicated Server",
    price: "999",
    description: "For individuals",
    figure: "i-solar-server-bold-duotone",
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
];
//

//

//
</script>
<style scoped>
.me {
  background-image: url("/bitmap.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}
</style>
