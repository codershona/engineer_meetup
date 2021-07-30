import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
                {
                imageUrl: 'https://images.pexels.com/photos/6315188/pexels-photo-6315188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe121',
                title: 'Events in New York',
                date: '2021-07-29'
                },
                {
                imageUrl: 'https://images.pexels.com/photos/7169637/pexels-photo-7169637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe122',
                title: 'Events in Canada',
                date: '2021-07-29'
                },
                {
                imageUrl: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe123',
                title: 'Events in Australia',
                date: '2021-07-29'
                },
                {
                imageUrl: 'https://images.pexels.com/photos/7245330/pexels-photo-7245330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 'afanedwe124',
                title: 'Events in London',
                date: '2021-07-29'
                }
        ],
        user: {
            id: 'zasdwedwdwe1233',
            registeredMeetups: ['aaddwedwefrg1242']
        }
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'wadwefwefw1123'
            }
        // Reaching to firebase to store it.
          commit('createMeetup', meetup)
        }
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }

})