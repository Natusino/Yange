<template>
  <v-app>
    <Navbar />
    <!-- <HomePage /> -->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar';
// import HomePage from '@/components/homePage'
export default {
  name: 'App',

  components: {
    Navbar,
    // HomePage
  },

  // data: () -> ({
    // 
  // }),
}
</script>