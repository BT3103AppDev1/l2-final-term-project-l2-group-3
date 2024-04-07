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
import { ref, computed, onMounted } from 'vue';
import { db } from '@/firebase.js'; 
import { collection, query, onSnapshot } from 'firebase/firestore';

const selectedColor = ref('blue'); // Example: default color, adjust as needed

const events = ref([]);

// Assuming you have a method to adjust dates for timezone, if not, you might not need this.
// This is just a placeholder function. Implement timezone adjustment as required.
function adjustForTimezone(date) {
  return date; // Placeholder: adjust the date object to account for timezone if necessary
}

const q = query(collection(db, "events"));

onMounted(() => {
  onSnapshot(q, (querySnapshot) => {
    events.value = querySnapshot.docs.map(doc => {
      const eventData = doc.data();
      const startDateTime = adjustForTimezone(new Date(`${eventData.startdate}T${eventData.starttime}Z`));
      const endDateTime = adjustForTimezone(new Date(`${eventData.enddate}T${eventData.endtime}Z`));

      return {
        ...eventData,
        start: startDateTime,
        end: endDateTime,
      };
    });
  });
});

const attributes = computed(() => events.value.map(event => ({
  dates: { start: event.start, end: event.end },
  dot: {
    color: event.color,
    class: event.isComplete ? 'opacity-75' : '',
  },
  popover: {
    label: event.name, // Assuming you want to use the event name for the popover label
  },
})));
</script>