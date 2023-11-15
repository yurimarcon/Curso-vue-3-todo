<template>
    <v-row justify="center">
      <v-dialog
        v-model="taskStore.showDialogDelete"
        persistent
        width="auto"
      >
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want delete this task?
          </v-card-title>
          <v-card-text>This action can't be reverted..</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red-darken-1"
              variant="elevated"
              @click="taskStore.toggleDelete"
            >
              No
            </v-btn>
            <v-btn
              color="red-darken-1"
              variant="outlined"
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