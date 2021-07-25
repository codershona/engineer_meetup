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
          v-for="item in menuItems" :key="item.title"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-icon
          dark
          left
          color="primary"
        >
          {{ item.icon }}
        </v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      class="teal darken-1"
      tile
      max-height="600"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon
        @click.native.stop="drawer = !drawer"
        class="hidden-sm-and-up"
        >
        </v-app-bar-nav-icon>

      <v-toolbar-title
      large
      >
      Engineer's MeetUp
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      depressed
      elevation="2"
      v-for="item in menuItems" :key="item.title"
      large
      class="ma-2"
      color="warning"
    >
      {{ item.title }}
      <v-icon
          dark
          right
        >
         {{ item.icon }}
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
      drawer: false,
      menuItems: [
        { icon: 'mdi-wrench', title: 'View Events' },
        { icon: 'mdi-room', title: 'Organize Events' },
        { icon: 'mdi-person', title: 'Profile' },
        { icon: 'mdi-face', title: 'Register/Signup' },
        { icon: 'mdi-lock-open', title: 'Log in' }
      ]
    }
  }
}
</script>
