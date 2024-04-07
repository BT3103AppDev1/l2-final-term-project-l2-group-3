<template>
    <v-col cols="10">
      <v-sheet height="600">
        <VCalendar
        expanded
      :color="selectedColor"
      :attributes="attrs"
      :rows="2"
      :step="1"
      is-dark="system"
    />
      </v-sheet>
    </v-col>
</template>

<script setup>
import { ref } from 'vue';

const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
]);
</script>