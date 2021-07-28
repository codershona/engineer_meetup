<template>
    <v-container>
        <v-layout>
            <v-flex 
            xs12
            >
      <v-card
    max-width="900"
    class="mx-auto"
  >
    <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title><h4>All Events</h4></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.pexels.com/photos/6315188/pexels-photo-6315188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    >
    </v-img>
    <div>
            <v-card-title
            class="text-h5"
            >
              My MeetUp Events
            </v-card-title>
            <v-card-subtitle>28 July 2021</v-card-subtitle>
           </div>
            <v-card-actions>
              <v-btn
               rounded
               color="success"
               dark
               flat to="/meetups/1"
              >
                View Events
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>