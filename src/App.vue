<template>
  <v-app>
    <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Engineer's MeetUp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      depressed
      elevation="2"
      large
      class="ma-2"
      color="warning"
    >
      View Events
      <v-icon
          dark
          right
        >
          mdi-wrench
        </v-icon>
    </v-btn>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>

    <v-main>

    </v-main>
  </v-app>
</template>

<script>


export default {

};
</script>
