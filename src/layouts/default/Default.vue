<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"/>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import Alert from '@/components/shared/Alert.vue'

  import {useAlertStore} from '@/store/alert'
  const alertStore = useAlertStore();
</script>
