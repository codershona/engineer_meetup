<template>
    <v-container>
        <v-layout
        row
        wrap
        no-gutters
        style="height: 150px;"
        >
         <v-flex xs12 sm6>
                <v-btn
                large
                dark
                router to="/meetups"
                class="pink"
                >
                  Expore Events
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6>
                <v-btn
                large
                dark
                router to="/meetup/new"
                class="teal"
                >
                  Organize Events
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>