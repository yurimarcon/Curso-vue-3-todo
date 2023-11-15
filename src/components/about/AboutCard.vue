<template>
    <v-card class="mx-auto" width="250">
      <v-img
        :src="props.image"
        height="200px"
        cover
      ></v-img>
      <v-card-title>{{ props.title }}</v-card-title>
      <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            {{ props.text }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';

  const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
    text: String
  })
  
  const show = ref(false);
  
  </script>