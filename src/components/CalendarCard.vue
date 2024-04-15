<template>
  <div>
    <v-sheet
      class="d-flex"
      height="54"
      tile
      style="margin-bottom: 30px;"
    >
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        label="View Mode"
        variant="solo"
        bg-color="#a0bbdb"
        dense
        hide-details
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        class="ma-2"
        label="weekdays"
        variant="solo"
        bg-color="#a0bbdb"
        dense
        hide-details
      ></v-select>
    </v-sheet>
    <v-sheet style="margin-left: 10px; margin-bottom: 20px;">
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
  import { useDate } from 'vuetify'
  import { db } from '@/firebase.js';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { doc, getDoc, onSnapshot } from 'firebase/firestore';

  export default {
    data: () => ({
      type: 'month',
      types: ['month', 'week', 'day'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: [new Date()],
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      titles: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
      this.getEvents()
    },
    methods: {
      getEvents () {
        const auth = getAuth();
        onSnapshot(doc(db, "Users", auth.currentUser.email), (docSnapshot) => {
          if (docSnapshot.exists() && docSnapshot.data().events) {
            const eventsMap = docSnapshot.data().events;
            this.events = Object.entries(eventsMap).map(([key, eventData]) => {
              const startDateTime = eventData.eventstartdatetime.toDate();
              const endDateTime = eventData.eventenddatetime.toDate();

              return {
                title: eventData.eventname,
                start: startDateTime,
                end: endDateTime,
                color: eventData.eventcolour
              };
            });
          }
        });
      },

      getEventColor (event) {
        return event.color
      },
    },
  }
</script>
