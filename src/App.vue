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
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <div>
    <v-toolbar
      dark
      class="teal darken-1"
      tile
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
      <router-link
      to="/"
      tag="span"
      style="cursor: pointer"
      >
      Engineer's MeetUp
      </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
      tile
      small
      flat
      class="hidden-xs-only"
      >
      <v-btn
      v-for="item in menuItems" :key="item.title"
      text
      router
      :to="item.link"
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
      </v-toolbar-items>
    </v-toolbar>
  </div>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>


export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: 'mdi-wrench', title: 'View Events', link: '/meetups' },
        { icon: 'mdi-domain', title: 'Organize Events', link: '/meetup/new' },
        { icon: 'mdi-account', title: 'Profile', link: '/profile' },
        { icon: 'mdi-face', title: 'Register/Signup', link: '/signup' },
        { icon: 'mdi-lock-open', title: 'Log in', link: '/login' }
      ]
    }
  }
}
</script>
