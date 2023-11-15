<template>
  <div class="alert-notification">
    <v-alert
      type="success"
      text="Task created cusscess!!!"
      closable
    ></v-alert>
  </div>
</template>

<style scoped>
.alert-notification{
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 35% 0 35%;
}

</style>