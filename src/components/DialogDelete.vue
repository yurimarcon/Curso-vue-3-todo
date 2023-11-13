<template>
    <v-row justify="center">
      <v-dialog
        v-model="taskStore.showDialogDelete"
        persistent
        width="auto"
      >
        <v-card>
          <v-card-title class="text-h5">
            Use Google's location service?
          </v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="taskStore.toggleDelete"
            >
              No
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="taskStore.deleteTask"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script setup>
import { useTaskStore} from '@/store/task'

const taskStore = useTaskStore();
</script>