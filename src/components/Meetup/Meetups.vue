<template>
 <div class="bodycolor">
    <v-container>
        <v-layout v-for="meetup in meetups" :key="meetup.id" class="mb-2">
            <v-flex 
            xs12
            >
      <v-card
    max-width="900"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title>
        <h4>
          All Events
          </h4>
          </v-toolbar-title>
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
      :src="meetup.imageUrl"
    >
    </v-img>
    <div>
            <v-card-title
            class="text-h5"
            >
              {{ meetup.title }}
            </v-card-title>
            <v-card-subtitle>{{ meetup.date }}</v-card-subtitle>
           </div>
           <v-card-actions>
              <v-btn
               rounded
               color="success"
               dark
               flat :to="'/meetups/' + meetup.id"
              >
                View Events
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
export default {
  computed: {
  meetups () {
   return this.$store.getters.loadedMeetups
   }
  }
}
</script>



<style scoped>
  .bodycolor {
    background: rgb(174,213,238);
    background: radial-gradient(circle, rgba(174,213,238,1) 2%, rgba(170,232,195,1) 95%);
    width: 100%;
  }
</style>