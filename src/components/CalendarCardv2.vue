<template>
  <v-col cols="10">
    <v-sheet height="600">
      <VCalendar
        expanded
        :color="selectedColor"
        :attributes="attributes"
        :rows="1"
        is-dark="system"
        ref="calendar"
      />
    </v-sheet>
  </v-col>
</template>

<script>
import { db } from '@/firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

export default {
  data() {
    return {
      events: [],
      selectedColor: 'blue', // Assuming 'selectedColor' is a data property
    };
  },
  computed: {
    attributes() {
      return this.events.map(event => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedStartDateTime = event.start.toLocaleString('default', options);
        const formattedEndDateTime = event.end.toLocaleString('default', options);
        let attribute = {
          dot: {
            color: event.color
          },
          popover: {
            label: `${event.details} from ${formattedStartDateTime} to ${formattedEndDateTime}`,
            visibility: 'hover',
          }
        };

        if (event.start.getDate() !== event.end.getDate() ||
            event.start.getMonth() !== event.end.getMonth() ||
            event.start.getFullYear() !== event.end.getFullYear()) {
          attribute.dates = { start: event.start, end: event.end };
        } else {
          attribute.dates = event.start;
        }

        return attribute;
      });
    },
  },

  mounted() {
  const auth = getAuth();
  onSnapshot(doc(db, "Users", auth.currentUser.email), (docSnapshot) => {
    if (docSnapshot.exists() && docSnapshot.data().events) {
      const eventsMap = docSnapshot.data().events;
      this.events = Object.entries(eventsMap).map(([key, eventData]) => {
        const startDateTime = eventData.eventstartdatetime.toDate();
        const endDateTime = eventData.eventenddatetime.toDate();

        return {
          name: key,
          details: eventData.eventname,
          start: startDateTime,
          end: endDateTime,
          color: eventData.eventcolour
        };
      });
    }
  });
},

watch: {
  events(newVal, oldVal) {
    // Perform the tasks that need to be done when events change.
    // Avoid calling this.refreshCalendar() to prevent an infinite loop.
  }
}

};
</script>
