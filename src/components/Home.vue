<template>
    <v-container>
        <v-layout
        row
        wrap
        no-gutters
        style="height: 150px;"
        >
         <v-flex
         xs12
         sm6
         class="text-xs-center text-sm-right"
         >
                <v-btn
                class="ma-2"
                large
                dark
                router to="/meetups"
                color="pink"
                >
                  Expore Events
                </v-btn>
            </v-flex>
            <v-flex
            xs12
            sm6
            class="text-xs-center text-sm-left"
            >
                <v-btn
                class="ma-2"
                large
                dark
                router to="/meetup/new"
                color="teal"
                >
                  Organize Events
                </v-btn>
            </v-flex>
        </v-layout>
    <v-layout
    row
    wrap
    >
        <v-flex
        xs12
        >
       <v-carousel
       height="300"
       hide-delimiter-background
       show-arrows-on-hover
       cycle
       >
        <v-carousel-item
         v-for="meetup in meetups"
         :key="meetup.id"
         :src="meetup.imageUrl"
         elevation="24"
         max-width="444"
         class="mx-auto"
    >
     <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
    <div
    class="title"
    >
      {{ meetup.title }}
    </div>
    </v-row>
    </v-carousel-item>
  </v-carousel>
  </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data () {
        return {
            meetups: [
                {
                imageUrl: 'https://images.pexels.com/photos/6315188/pexels-photo-6315188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe121',
                title: 'Events in New York'
                },
                {
                imageUrl: 'https://images.pexels.com/photos/7169637/pexels-photo-7169637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe122',
                title: 'Events in Canada'
                },
                {
                imageUrl: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe123',
                title: 'Events in Australia'
                },
                {
                imageUrl: 'https://images.pexels.com/photos/7245330/pexels-photo-7245330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe124',
                title: 'Events in London'
                }
            ]
        }
    }
}
</script>


<style scoped>
  .title {
      position: absolute;
      bottom: 50px;
      background-color: rgba(0,0,0,0.5);
      color: white;
      font-size: 2.2em;
      padding: 20px;
  }
</style>