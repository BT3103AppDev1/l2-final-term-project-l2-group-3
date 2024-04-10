<template>
    <v-col cols="10">
      <v-sheet height="600">
        <VCalendar
        expanded
      :color="selectedColor"
      :attributes="attributes"
      :rows="2"
      :step="1"
      is-dark="system"
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
    events.value = docSnap.data().events.reduce((acc, current, index) => {
      const eventKey = `event${index + 1}`;
      const eventData = current[eventKey];
      
      if (eventData) {
        const startDateTime = eventData.eventstartdatetime.toDate();
        const endDateTime = eventData.eventenddatetime.toDate();

        acc.push({
          name: eventKey,
          details: eventData.details,
          start: startDateTime,
          end: endDateTime,
          color: 'blue' 
        });
      }

      return acc;
    }, []);
  }
}


onMounted(() => {
  fetchEvents();
});

const attributes = computed(() => {
  return events.value.map(event => {
    let attribute = {
      dot: {
        color: event.color || 'blue', 
      },
      popover: {
        label: event.details,
        visibility: 'hover',
        hideIndicator: true,
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
