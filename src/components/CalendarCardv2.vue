<template>
  <v-col cols="10">
    <v-sheet height="600">
      <VCalendar
      expanded
    :attributes="attributes"
    :rows="1"
    is-dark="system"
    ref="calendar"
  />
    </v-sheet>
  </v-col>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { db } from '@/firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const auth = getAuth();
const events = ref([]);

async function fetchEvents() {
const userDocRef = doc(db, "Users", auth.currentUser.email);
const docSnap = await getDoc(userDocRef);

if (docSnap.exists() && docSnap.data().events) {
  const eventsMap = docSnap.data().events;
  events.value = Object.entries(eventsMap).map(([key, eventData]) => {

    const startDateTime = eventData.eventstartdatetime.toDate();
    const endDateTime = eventData.eventenddatetime.toDate();

    return {
      name: key, 
      details: eventData.eventname,
      start: startDateTime,
      end: endDateTime,
      color: eventData.eventcolour,
    };
  });
}
}

onMounted(() => {
fetchEvents();
});

const attributes = computed(() => {
return events.value.map(event => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedStartDateTime = event.start.toLocaleString('default', options);
  const formattedEndDateTime = event.end.toLocaleString('default', options);

  let attribute = {
    dot: {
      color: event.color, 
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
});



</script>
