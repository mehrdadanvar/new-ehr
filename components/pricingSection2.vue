<template>
  <section
    class="py-24 my-12 bg-gradient-to-br from-gray-600 to-gray-900 text-gray-100"
  >
    <div v-for="item in section2">
      <div class="flex flex-row 500 rounded-2xl mx-48 my-12">
        <div class="left w-1/2 h-[500px] rounded-l-2xl" :style="item.imageLink">
          <p class="backdrop-blur-sm py-0 backdrop-brightness-75 mt-36"></p>
        </div>
        <div class="mid h-full relative w-0">
          <button
            class="shadow-sm shadow-gray-500 text-gray-300 backdrop-blur-sm backdrop-brightness-75 absolute top-12 -left-40 rounded-md w-80 py-1 transition-all hover:scale-105 hover:backdrop-blur-md hover:text-white"
          >
            Get Access to {{ item.title }}
          </button>
        </div>
        <div
          class="right w-1/2 bg-gradient-to-tr from-gray-800 to-gray-950 rounded-r-2xl"
        >
          <div
            class="card rounded-2xl p-8 m-6 bg-gradient-to-br from-gray-800/50 to-gray-900 mt-36"
          >
            <h2 class="text-orange-500 text-xl py-3 pl-3">{{ item.title }}</h2>
            <li v-for="para in item.content" class="list-item pl-6">
              {{ para }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <div>
            <img :src="item.imageLink" alt="" width="350" class="rounded-xl" />
            <h2
              class="backdrop-blur-sm px-6 py-2 border border-orange-500 w-36 rounded-full -mt-12 text-orange-800"
            >
              {{ item.title }}
            </h2>
          </div> -->
<script setup>
let section2 = [
  {
    id: 0,
    title: "Free features",
    imageLink:
      "background-image: url('" +
      "https://edehr.org/img/classAtWork.7d0b8b5b.jpg" +
      "');",
    content: [
      "A full demonstration mode is available for you to try it out.",
      "Faculty is always free First month free.",
      "Inactive students can browse and review their past work for free. This is perfect for between terms.",
      "Free support and orientation for faculty leaders.",
    ],
  },
  {
    id: 1,
    title: "Flexibale Monthly",
    imageLink:
      "background-image: url('" +
      "https://edehr.org/img/patientCare.a423a362.jpg" +
      "');",
    content: [
      "A full demonstration mode is available for you to try it out.",
      "Faculty is always free First month free.",
      "Inactive students can browse and review their past work for free. This is perfect for between terms.",
      "Free support and orientation for faculty leaders.",
    ],
  },
  {
    id: 2,
    title: "Annual",
    imageLink:
      "background-image: url('" +
      "https://edehr.org/img/interprofessional.e602fdb8.jpg" +
      "');",
    content: [
      "A full demonstration mode is available for you to try it out.",
      "Faculty is always free First month free.",
      "Inactive students can browse and review their past work for free. This is perfect for between terms.",
      "Free support and orientation for faculty leaders.",
    ],
  },
  {
    id: 3,
    title: "Dedicated Server",
    imageLink:
      "background-image: url('" +
      "https://edehr.org/img/curriculumDevelopment.cd7cf374.jpg" +
      "');",
    content: [
      "A full demonstration mode is available for you to try it out.",
      "Faculty is always free First month free.",
      "Inactive students can browse and review their past work for free. This is perfect for between terms.",
      "Free support and orientation for faculty leaders.",
    ],
  },
];
</script>
<style scoped>
.left {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
