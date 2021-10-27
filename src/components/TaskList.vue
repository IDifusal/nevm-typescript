<template>
  <h1>TaskList</h1>
  <ul>
    <li
      class="container mx-auto"
      v-for="(task, index) in tasks"
      :key="task.id"
      @click="this.$router.push(`/tasks/${task._id}`)"
    >
      {{ index + 1 }}-{{ task.title }}
    </li>
  </ul>
</template>
<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>