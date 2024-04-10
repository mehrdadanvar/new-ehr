<template>
  <div class="p-3 bg-gray-50 rounded-md w-1/3 border">
    <UTable :rows="teams" />
  </div>
</template>

<script setup>
// "Jackie" "RN" "Jason" RN Alexa Med lab technician Gurpreet Med radiographer Matt Respiratory therapist Dr. Notley
//Physician Serge Med radiographer Trache RN Dr. Hunicutt Physician Jim RN Gladys physiotherapy student Herman
//  Respiratory therapist
let teams = [
  {
    id: 1,
    name: "Dr. Singh",
    profession: "Physician",
  },
  {
    id: 2,
    name: "Dr. Singh",
    profession: "Physician",
  },
  {
    id: 3,
    name: "Dr. Singh",
    profession: "Physician",
  },
  {
    id: 4,
    name: "Dr. Singh",
    profession: "Physician",
  },
  {
    id: 5,
    name: "Dr. Singh",
    profession: "Physician",
  },
];
</script>
