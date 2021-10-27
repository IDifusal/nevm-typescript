<template>
  <div class="flex justify-items-center">
    <div class="w-1/3 p-7">
      <form @submit.prevent="saveTasks()">
        <input
          v-model="task.title"
          type="text"
          placeholder="Write a title"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-red-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
        />
        <textarea
          v-model="task.description"
          cols="30"
          rows="3"
          placeholder="Write a description"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-blue-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
        ></textarea>
        <button
          :disabled="!task.title || !task.description"
          class="
            border border-blue-500
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          Guardar
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";
export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTasks() {
      await createTask(this.task);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
<style scoped>
.flex.justify-items-center {
  justify-content: center;
}
</style>