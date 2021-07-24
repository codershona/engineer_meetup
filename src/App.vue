<template>
  <v-app>
     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-icon
          dark
          left
          color="primary"
        >
          mdi-wrench
        </v-icon>
            <v-list-item-title>View Events</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>

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
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>


export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
