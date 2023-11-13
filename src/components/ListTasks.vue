<template>
  <div>
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item v-for="(task, index) in tasks" :key="index" :value="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ task.title }}</v-list-item-title>

        <v-list-item-subtitle>
          {{ task.description }}
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props">
              </v-btn>
            </template>
            <v-list>
              <v-list-item value="1">
                <v-list-item-title
                @click="toggle(index)">Edit</v-list-item-title>
              </v-list-item>
              <v-list-item value="2">
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialigTaskField 
    :dialog="showDialogTaskFields"
    :task="tasks[indexTaskSelected]"
    @toggle="toggle"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import DialigTaskField from "@/components/DialogTaskFields.vue";

const props = defineProps({
  tasks: Object,
});

const indexTaskSelected = ref(0);
const showDialogTaskFields = ref(false);
const toggle = (index)=>{
    showDialogTaskFields.value = !showDialogTaskFields.value; 
    if(index != null)
        indexTaskSelected.value = index;
}
</script>