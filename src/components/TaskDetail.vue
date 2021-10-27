<template>
  <h1>Detalles tarea</h1>
  <div class="flex justify-items-center">
    <div class="w-1/3">
      <form @submit.prevent="handleUpdate()">
        <input
          v-model="currentTask.title"
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
          v-model="currentTask.description"
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
          Update
        </button>
      </form>
      <button
        @click="handleDelete()"
        class="
          border border-red-500
          bg-red-500
          hover:bg-red-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        await updateTask(this.$route.params.id, this.currentTask);
        this.$router.push({ name: "tasks" });
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        await deleteTask(this.$route.params.id);
        this.$router.push({ name: "tasks" });
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
<style scoped>
.flex.justify-items-center {
  justify-content: center;
}
</style>