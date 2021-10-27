<template>
  <nav class="bg-gray-800 p-5 flex justify-between">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
      class="w-7"
    />
    <ul class="flex">
      <li class="mr-6">
        <router-link class="text-white hover:text-green-200" :to="'/'"
          >Lista de Treas</router-link
        >
      </li>
      <li class="mr-6">
        <router-link class="text-white hover:text-green-200" :to="'/tasks/new'"
          >Agregar tarea</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Navbar",
});
</script>