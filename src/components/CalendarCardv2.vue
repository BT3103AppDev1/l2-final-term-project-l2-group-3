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
import { ref, onMounted, watchEffect, computed } from 'vue';
import { db } from '@/firebase.js'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

const events = ref([]);

async function fetchEvents() {
  const usersCollectionRef = collection(db, "Users");
  const userDocsSnapshot = await getDocs(usersCollectionRef);
  const eventsPromises = userDocsSnapshot.docs.map(async (userDoc) => {
    const userEmail = userDoc.id;
    const userEventsCollectionRef = collection(db, "Users", userEmail, "reminders");
    const eventsSnapshot = await getDocs(userEventsCollectionRef);
    return eventsSnapshot.docs.map((eventDoc) => {
      const eventData = eventDoc.data();
      const startDateTime = new Date(eventData.eventstartdatetime);
      const endDateTime = new Date(eventData.eventenddatetime);
      return {
        eventname: eventData.eventname,
        eventstartdatetime: startDateTime,
        eventenddatetime: endDateTime,
      };
    });
  });
  const eventsNestedArray = await Promise.all(eventsPromises);
  events.value = eventsNestedArray.flat();
}

onMounted(() => {
  fetchEvents();
});

const attributes = computed(() => {
  return events.value.map(event => ({
    dates: { start: event.eventstartdatetime, end: event.eventenddatetime },
    dot: {
      color: event.color || 'green', 
    },
    customData: {
      name: event.eventname,
      description: event.description || 'No description',
    },
    popover: {
      label: todo.description,
      visibility: 'hover',
      hideIndicator: true,
    },
  }));
});

</script>
