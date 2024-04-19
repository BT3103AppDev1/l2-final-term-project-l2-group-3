<template>
  <v-app class="custom-bg">
    <v-row class="rounded rounded-md">
      <Header />
      <SideBar />
    </v-row>
    

    <v-row class="fill-height" style="margin-top: 100px; margin-left: 70px;">
      <v-col cols="10">
        <CalendarCard />    
      </v-col>

      <v-col cols="2">
            <v-btn class="expandablebutton" color="#154c79" @click="dialogEvent = true" @mouseover="hover = true" @mouseleave="hover = false">
              <v-icon>mdi-plus</v-icon>
              <span v-if="hover" class="button-text">Add Event</span>
            </v-btn>

            <v-btn @click="gotosettings" variant="flat" color="#154c79" style="margin-top: 35px;"> Set Notifications </v-btn>

            <v-dialog v-model="dialogEvent" persistent max-width="600px">
              <v-card width="800px" prepend-icon="mdi-pencil" title="Add an Event" color="#244d7b">
                <v-card-text class="font-weight-light">
                  Fill up details of important events below to receive personalised reminders!
                  <v-container fluid>
                    <br>
                    <v-row>
                      <v-col cols="12">
                        <v-row>
                          <span><b>Event Details</b></span>
                          <v-col cols="12">
                            <v-text-field v-model="eventDetail" label="Enter details of event"></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row>
                          <span><b>Event Date & Time</b></span>
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
                          <span><b>Event Colour Tag</b></span>
                          <v-col cols="12">
                            <v-combobox v-model="eventColour" :items="colours" label="Choose the colour of event tag"></v-combobox>
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
    <Footer />
    <v-snackbar location="top" color="green" v-model="showaddedevent" :timeout="2000" elevation="24" width="400px">
      You have successfully created an event in your calendar.
    </v-snackbar>

    <v-snackbar location="top" color="red" v-model="addeventfailure" :timeout="2000" elevation="24" width="400px">
      Invalid input. Make sure all required fields are completed.
    </v-snackbar>
  </v-app>
</template>


<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '@/firebase.js';
import { getFirestore, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import firebaseApp from "@/firebase";
import { PublicClientApplication } from '@azure/msal-browser';
import CalendarCard from '@/components/CalendarCard.vue'

export default {
  data() {
    return {
      addeventfailure: false,
      showaddedevent: false,
      dialogEvent: false,
      eventDetail: '',
      eventStartDate: '',
      eventStartTime: '',
      eventEndDate: '',
      eventEndTime: '',
      eventColour: '',
      user: null,
      hover: false,
      token: null,
      msalInstance: null,
      colours: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'red']
    };
  },
  async created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });

    if (auth.currentUser) {
      this.user = auth.currentUser;
    }

    await this.initializeMsal();
  },
  methods: {
    gotosettings() {
      this.$router.push("/settings")
    },

    async initializeMsal() {
      const msalConfig = {
        auth: {
          clientId: '609540be-0088-4b46-8a90-e3e070280d8e', // Replace with your Azure application client ID
          authority: 'https://login.microsoftonline.com/common', // Replace 'your-tenant-id' with your Azure AD tenant ID
          redirectUri: 'http://localhost:3000/settings/' // Assuming you handle redirects at the root
        },
        cache: {
          cacheLocation: "localStorage", // Enables cache to be stored in localStorage
          storeAuthStateInCookie: true, // Recommended for browsers
        }
      };

      this.msalInstance = await PublicClientApplication.createPublicClientApplication(msalConfig);
    },
    
    //reminder settings methods
    async save_to_outlook(event) {

      const loginRequest = {
        scopes: ['openid', 'profile', 'User.Read', 'Calendars.ReadWrite'],
      };

      try {
        // Try to get all accounts from the cache
        const accounts = this.msalInstance.getAllAccounts();
        if (accounts.length > 0) {
          // If there are accounts in the cache, set the first one as the active account
          this.msalInstance.setActiveAccount(accounts[0]);
        }
        console.log(accounts)

        const silentResult = await this.msalInstance.acquireTokenSilent(loginRequest);
        console.log('Token acquired silently', silentResult.accessToken);
        this.token = silentResult.accessToken
      } catch (error) {
        // If silent token acquisition fails, fallback to interactive method
        console.log('Silent token acquisition failed, acquiring token using popup');
        try {
          const popupResult = await this.msalInstance.loginPopup(loginRequest);
          console.log('Token acquired via popup', popupResult.accessToken);
          this.token = popupResult.accessToken;
          // Set the account from the popupResult as the active account
          this.msalInstance.setActiveAccount(popupResult.account);
          // Continue with your logic here...
        } catch (popupError) {
          console.error('Error acquiring token via popup', popupError);
        }
      } finally {
          const db = getFirestore(firebaseApp);
          const auth = getAuth();

          const docref = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))

          this.addEventToOutlookCalendar(this.token, event)
          }

          console.log("event added")
    },

    convert_timestamp(seconds) {
      const utc = new Date(seconds * 1000)
      const sgt = new Date(utc.getTime() + 8 * 3600 * 1000)
      const sgtDateString = sgt.toISOString().replace('.000Z', '');

      return sgtDateString;
    },

    addEventToOutlookCalendar(token, event) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;

      headers.append('Authorization', bearer);
      headers.append('Content-Type', 'application/json');

      console.log(this.convert_timestamp(event.eventstartdatetime.seconds))

      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          subject: event.eventname,
          start: {
              dateTime: this.convert_timestamp(event.eventstartdatetime.seconds), // Set the start time
              timeZone: 'Singapore Standard Time'
          },
          end: {
              dateTime: this.convert_timestamp(event.eventenddatetime.seconds), // Set the end time
              timeZone: 'Singapore Standard Time'
          },
        })
      };

      fetch('https://graph.microsoft.com/v1.0/me/events', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        });
    },

    async saveEvent() {
      if (this.user && this.user.email) {
        const userDocRef = doc(db, "Users", this.user.email);

        try {
          const docSnap = await getDoc(userDocRef);
          const eventsArray = docSnap.data().events;
          const nextEventName = `event${Object.keys(eventsArray).length + 1}`;
          const start = Timestamp.fromDate(new Date(`${this.eventStartDate}T${this.eventStartTime}`));
          const end = Timestamp.fromDate(new Date(`${this.eventEndDate}T${this.eventEndTime}`));
          const id = String(this.eventDetail + start.toMillis());

          const newEventData = {
            [id]: {
              eventname: this.eventDetail,
              eventstartdatetime: start,
              eventenddatetime: end,
              eventcolour: this.eventColour,
            }
          };

          if (docSnap.data()['settings']['reminder_settings']['outlook']) {
            this.save_to_outlook(newEventData[id])
          }

          

          await setDoc(userDocRef, { events: newEventData }, { merge: true });

          this.resetFormFields();
          this.showaddedevent = true
        } catch (error) {
          console.error('Error saving event:', error);
          this.addeventfailure = true
        }
      } else {
        console.error('User is not authenticated');
      }
    },

    resetFormFields() {
      this.dialogEvent = false;
      this.eventDetail = '';
      this.eventStartDate = '';
      this.eventStartTime = '';
      this.eventEndDate = '';
      this.eventEndTime = '';
      this.eventColour = '';
    }
  }
}
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