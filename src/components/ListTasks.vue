<template>
  <div>
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item v-for="(task, index) in props.tasks" :key="index" :value="index">
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
              <v-btn 
              color="grey-lighten"
              icon="mdi-dots-vertical"
              variant="text" 
              v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item value="1">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>

              <v-list-item value="2">
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tasks: Object
})

</script>