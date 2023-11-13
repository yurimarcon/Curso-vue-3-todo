<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
      src="https://picsum.photos/1920/1080?random"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      height="80"
      cover
      class="pt-2"
      >

        <v-list>
          <v-list-item
            prepend-avatar="https://github.com/yurimarcon/avatars/blob/main/Colored/ToyFaces_Colored_BG_29.jpg?raw=true"
            title="Yuri Marcon"
            subtitle="To Do List"
          >
          </v-list-item>
        </v-list>
      </v-img>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <router-link v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title :textContent="item.text"></v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
      density="prominent"
    >
    <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To Do List</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

const items = [
  { text: "Home", icon: "mdi-folder", to: "/" },
  { text: "About", icon: "mdi-account-multiple", to: "/about" },
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: #505050;
}
</style>
