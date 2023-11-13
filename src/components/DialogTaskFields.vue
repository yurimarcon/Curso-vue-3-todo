<template>
    <div>
        <v-dialog
          v-model="props.dialog"
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
                @click="$emit('toggle')"
              >
                Disagree
              </v-btn>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="$emit('toggle')"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    dialog: Boolean
})

</script>