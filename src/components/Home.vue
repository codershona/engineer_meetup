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
         class="text-sm-right"
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
            <v-flex xs12 sm6>
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
    </v-container>
</template>