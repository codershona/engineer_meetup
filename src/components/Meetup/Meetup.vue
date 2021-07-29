<template>
<div class="bodycolor">
  <v-container>
    <v-layout row wrap no-gutters>
      <v-flex
      xs12
      >
        <v-card
        max-width="900"
        class="mx-auto">
         <v-card-title>
             <h5 class="teal--text">
               {{ meetup.title }}
               </h5>
         </v-card-title>
         <v-img
                  :src="meetup.imageUrl"
                  height="300px"
                ></v-img>
                <v-card-text>
                    <div class="info--text">{{ meetup.date }} -- Where the events hosted?</div>
                    <div>It has been hosted in New york Location and there was around 200 people who attended this events</div>
                </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            class="pink"
            dark
            >
            Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>


<style scoped>
  .bodycolor {
    background: rgb(155,164,210);
    background: radial-gradient(circle, rgba(155,164,210,1) 0%, rgba(209,189,193,1) 100%);
    width: 100%;
  }
</style>