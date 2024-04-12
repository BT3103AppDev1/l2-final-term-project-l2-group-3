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
          <span v-if="hover" class="button-text">Add Event</span>
          </v-btn>

          <v-dialog v-model="dialogEvent" persistent max-width="600px">
          <v-card width="800px" prepend-icon="mdi-pencil" title="Add an Event" color="#244d7b">
          <v-card-text class="font-weight-light">
            Fill up details of important events below to receive personalised reminders!
          <v-container fluid> <br>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <span> <b>Event Details</b> </span>
                  <v-col cols="12">
                    <v-text-field v-model="eventDetail" label="Enter details of event"></v-text-field>
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
import { ref, onMounted } from 'vue';
import { db } from '@/firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc, Timestamp, setDoc } from 'firebase/firestore';

const dialogEvent = ref(false);
const eventDetail = ref('');
const eventStartDate = ref('');
const eventStartTime = ref('');
const eventEndDate = ref('');
const eventEndTime = ref('');
const user = ref(null);
const hover = ref(false);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    user.value = user;
  } else {
    user.value = null;
  }
});

async function saveEvent() {
  if (user.value && user.value.email) {
    // Reference to the user's document that contains the "events" field
    const userDocRef = doc(db, "Users", user.value.email);

    try {
      // Get the user's document
      const docSnap = await getDoc(userDocRef);

      const eventsArray = docSnap.data().events;
      

      // Determine the name for the next event
      const nextEventName = `event${Object.keys(eventsArray).length + 1}`;

      // Prepare the new event data with Timestamp
      const start = Timestamp.fromDate(new Date(`${eventStartDate.value}T${eventStartTime.value}`))
      const end = Timestamp.fromDate(new Date(`${eventEndDate.value}T${eventEndTime.value}`))
      const id = String(eventDetail.value + start.toMillis())

      const newEventData = {
        [id]: {
          eventname: eventDetail.value,
          eventstartdatetime: start,
          eventenddatetime:end,
        }
      };

      // Update the document with the new events array
      await setDoc(userDocRef, { events: newEventData }, {merge: true});

      // Reset the form fields
      dialogEvent.value = false;
      eventDetail.value = '';
      eventStartDate.value = '';
      eventStartTime.value = '';
      eventEndDate.value = '';
      eventEndTime.value = '';

    } catch (error) {
      console.error('Error saving event:', error);
    }
  } else {
    console.error('User is not authenticated');
  }
}

onMounted(() => {
  if (auth.currentUser) {
    user.value = auth.currentUser;
  }
});
</script>




<style scoped>
.expandablebutton {
    transition: width 0.3s ease, background-color 0.3s ease;
    width: 50px; 
    overflow: hidden;
    margin-top: 20px;
}

.expandablebutton:hover {
  width: 200px; 
  background-color: #f5f5f5; 
}

.button-text {
  margin-left: 8px; 
  white-space: nowrap; 
}
</style>