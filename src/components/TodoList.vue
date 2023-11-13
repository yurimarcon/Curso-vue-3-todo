<template>
    <div>
        <v-text-field 
        clearable
        label="Add Task"
        v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask"
        ></v-text-field>
    
        <ListTasks/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from './ListTasks.vue';
import { useTaskStore} from '@/store/task'

const taskStore = useTaskStore();

onMounted(()=>{
    taskStore.getTasks();
})

</script>