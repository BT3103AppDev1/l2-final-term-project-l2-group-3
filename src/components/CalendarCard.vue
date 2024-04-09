<template>
    <v-col cols="10">
      <v-sheet class="d-flex" height="54" tile>
        <v-select v-model="type" :items="types" class="ma-2" label="View" variant="outlined" dense hide-details></v-select>
        <v-select v-model="weekday" :items="weekdays" class="ma-2" label="Weekdays" variant="outlined" dense hide-details></v-select>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar ref="calendar" v-model="value" :events="events" :view-mode="type" :weekdays="weekday" :interval-height="60">
        </v-calendar>
        <template #interval-content="{ interval }">
          <div class="interval-label">
            {{ interval.time }}
          </div>
        </template>
      </v-sheet>
    </v-col>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDate } from 'vuetify';
import { db } from '@/firebase.js'; 
import { collection, query, onSnapshot } from 'firebase/firestore';

const props = defineProps({
  externalEvents: Array
});

const type = ref('month');
const types = ['month', 'week', 'day'];
const weekday = ref([0, 1, 2, 3, 4, 5, 6]);
const weekdays = [
  { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
  { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
  { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
  { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
];
const value = ref([new Date()]); 

const events = ref([]);

const q = query(collection(db, "events"));

onMounted(() => {
  onSnapshot(q, (querySnapshot) => {
    events.value = querySnapshot.docs.map(doc => {
      const eventData = doc.data();

      // These Date objects are in the local timezone. If your local timezone is SGT
      // and the dates/times are supposed to be in SGT, no adjustment is necessary.
      //const startDateTime = new Date(`${eventData.startdate}T${eventData.starttime}`);
      //const endDateTime = new Date(`${eventData.enddate}T${eventData.endtime}`);

      // If your Firestore dates/times are stored in UTC, you can convert them to SGT
      const startDateTime = adjustForTimezone(new Date(`${eventData.startdate}T${eventData.starttime}Z`));
      const endDateTime = adjustForTimezone(new Date(`${eventData.enddate}T${eventData.endtime}Z`));

      return {
        name: eventData.title,
        start: startDateTime,
        end: endDateTime,
        color: eventData.color,
        details: eventData.description,
        timed: true,
      };
    });
  });
});

function adjustForTimezone(date) {
  // SGT is UTC+8, so we subtract 8 hours from the date provided to get the UTC time
  // (480 minutes * 60 seconds * 1000 milliseconds)
  const sgtOffsetMs = 8 * 60 * 60 * 1000;
  return new Date(date.getTime() + sgtOffsetMs);
}

const getEventColor = (event) => {
  return event.color;
};
</script>

<style scoped>
.interval-label {
  text-align: right;
  padding-right: 8px; /* Adjust as needed */
  opacity: 0.7;
  font-size: 0.75rem;
  /* Additional styles as needed */
}
</style>



