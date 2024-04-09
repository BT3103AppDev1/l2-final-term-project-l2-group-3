<template>
    <v-app class="custom-bg">
        <v-row class="rounded rounded-md">
            <Header />
            <SideBar />
        </v-row>

        <v-row class="fill-height">
        <v-col>
         
          <v-row style="margin-left: 55px; height: 100%; margin-top: 70px;">
            <CalendarCardv2/>

            <v-col cols="2">

            <v-btn class="expandablebutton" color= #154c79 @click="dialogEvent = true" @mouseover="hover = true" @mouseleave="hover = false">
            <v-icon>mdi-plus</v-icon>
            <span v-if="hover" class="button-text">Add Events</span>
            </v-btn>

            <v-dialog v-model="dialogEvent" persistent max-width="600px">
            <v-card width="800px" prepend-icon="mdi-pencil" title="Add an Event" color="#244d7b">
            <v-card-text class="font-weight-light">
              Fill up details of important events below to receive personalised reminders!
            <v-container fluid> <br>
              <v-row>
                <v-col cols="12">
                  <v-row>
                    <span> <b>Event Title</b> </span>
                    <v-col cols="12">
                      <v-text-field v-model="eventTitle" label="Enter title of event"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <span> <b>Event Description</b> </span>
                    <v-col cols="12">
                      <v-text-field v-model="eventDescription" label="Enter description of event"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <span> <b>Event Date & Time</b> </span>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="eventStartDate" label="Start Date" type="date"></v-text-field>
                      <v-text-field v-model="eventStartTime" label="Start Time" suffix="SGT" type="time"></v-text-field>
                    </v-col> 
                    <v-col>
                      <v-text-field v-model="eventEndDate" label="End Date" type="date"></v-text-field>
                      <v-text-field v-model="eventEndTime" label="End Time" suffix="SGT" type="time"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <span> <b>Colour Tag</b> </span>
                    <v-col cols="12">
                      <v-color-picker v-model="eventColor" dot-size="30" label="Pick a Color"></v-color-picker>
                    </v-col>
                  </v-row>

                </v-col>
              </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="text-none" variant="tonal" text="Close" @click="dialogEvent = false"></v-btn>
            <v-btn class="text-none" variant="tonal" text="Save" @click="saveEvent"></v-btn>
            </v-card-actions>
            </v-card>
            </v-dialog>
            </v-col>
            </v-row>

      </v-col>
      </v-row>

    <Footer />
    </v-app>


</template>

<script setup>
import CalendarCard from "@/components/CalendarCard.vue";
import Header from "@/components/Header.vue"; 
import SideBar from "@/components/SideBar.vue"; 
import { ref } from 'vue';
import { db } from '@/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const dialogEvent = ref(false);
const eventTitle = ref('');
const eventDescription = ref('');
const eventStartDate = ref('');
const eventStartTime = ref('');
const eventEndDate = ref('');
const eventEndTime = ref('');
const eventColor = ref('#FFFFFF');

async function saveEvent() {
  if (user.value) {
    const userEventsCollectionRef = collection(db, "Users", user.value.uid, "events");
    await addDoc(userEventsCollectionRef, {
      title: eventTitle.value,
      description: eventDescription.value,
      startdatetime: `${eventStartDate.value}T${eventStartTime.value}`,
      enddatetime: `${eventEndDate.value}T${eventEndTime.value}`,
      color: eventColor.value,
    });
    eventTitle.value = '';
    eventDescription.value = '';
    eventStartDate.value = '';
    eventStartTime.value = '';
    eventEndDate.value = '';
    eventEndTime.value = '';
    eventColor.value = '#FFFFFF';
    dialogEvent.value = false;
  } else {
    console.error('User is not authenticated');
  }
}

</script>

<style scoped>
.expandablebutton {
    transition: width 0.3s ease, background-color 0.3s ease;
    width: 50px; /* Initial width */
    overflow: hidden;
    margin-top: 20px;
/* Center items horizontally */
}

.expandablebutton:hover {
  width: 200px; /* Expanded width to fit the phrase */
  background-color: #f5f5f5; /* Optional: change background color on hover */
}

.button-text {
  margin-left: 8px; /* Adjust spacing between icon and text */
  white-space: nowrap; /* Ensure the text does not wrap */
}
</style>