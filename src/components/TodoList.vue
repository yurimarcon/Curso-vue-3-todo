<template>
    <v-text-field
      clearable
      label="Add Task"
      v-model="task.title"
      @keyup.enter="addTask"
    ></v-text-field>

    <ListTasks :tasks="tasks"/>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { ref } from "vue";

const tasks = ref([
  {
    title: "Estudar Vue",
    description: "Estudar vue com Vuetify...",
  },
  {
    title: "Ler documentação",
    description: "Estudar vue com Vuetify...",
  },
]);

const task = ref({
  title: "",
  description: "",
});
const addTask = () => {
  tasks.value.push({
    title: task.value.title,
    description: task.value.descriptio,
  });
  task.value = {
    title: "",
    description: "",
  };
};

</script>
