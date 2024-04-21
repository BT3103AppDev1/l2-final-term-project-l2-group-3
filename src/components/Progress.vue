<template>

    <v-container style="margin-top: 15px;">
        <v-row>
            <v-col cols="12">
                <v-card variant="elevated" color="#6381a3" class="pa-3" height="200px">
                    <v-card-title style="text-align: center;">
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-col cols="4">
                            Daily Targets 
                            </v-col>

                            <v-col>
                                <v-btn style="margin-left: 10px;" variant="tonal" size="small" @click = "gotosettings"> Edit Target</v-btn>
                            </v-col>
                        </v-row>

                        
                    </v-card-title>

                    <v-row style="padding: 10px">
                        <v-col cols="3">
                            <h3 style="color: #fff;"> Applied</h3>
                        </v-col>
                        <v-col cols="6" style="margin-left: -20px; margin-top: 8px;">
                            <v-progress-linear
                                rounded=""
                                v-model="appliedcounttoday"
                                color="blue-lighten-3"
                                height="15"
                            ></v-progress-linear>
                        </v-col>

                        <v-col cols="3">
                            <h3 style="color: #fff; margin-right: -10px"> {{ appliedcounter + "/" + applicationgoal }}</h3>
                        </v-col>
                        
                    </v-row>

                    <v-row style="padding: 10px">
                        <v-col cols="3">
                            <h3 style="color: #fff;"> Saved</h3>
                        </v-col>
                        <v-col cols="6" style="margin-left: -20px; margin-top: 8px;">
                            <v-progress-linear
                                rounded=""
                                v-model="savedcounttoday"
                                color="blue-lighten-3"
                                height="15"
                            ></v-progress-linear>
                        </v-col>

                        <v-col cols="3">
                            <h3 style="color: #fff; margin-right: 0px;"> {{ savedcounter + "/" + applicationgoal }}</h3>
                        </v-col>
                        
                    </v-row>

                </v-card>
            </v-col>
        </v-row>    

        <v-row class="ga-5">
            <v-col cols="12">
                <v-card variant="elevated" color="#6381a3" class="pa-3" height="500px">
                    <v-card-title style="text-align: center;">Reminders</v-card-title>
                    <v-sheet
                        class="scrollable-sheet"
                        elevation="0"
                        max-height="400px"
                    >
                    <main v-for="reminder in reminders" :key="reminder.id" style="margin-top: 10px; border-radius: 20px;">
                        <v-card variant="flat" hover style="margin-left: 15px; margin-right: 15px; border-radius: 10px; background-color:rgb(236, 238, 243);" @click="recordjobdetails(job); this.dialog = true;" opacity="0.9" >
                            <v-card-title style="font-size: large; font-weight: 800;"> 
                                
                            <v-row>                            
                                <v-col cols="2">
                                    Upcoming Event 
                                </v-col>

                                <v-col cols="10">
                                    <v-btn 
                                    style="margin-left: 225px; border-radius: 11px;" 
                                    color="#cf5555" 
                                    size="x-small" 
                                    icon="mdi-close"
                                    @click="clearreminder(reminder)">
                                </v-btn>
                                </v-col>
                            </v-row>
                            </v-card-title>
                            <h4 style="margin-left: 17px; margin-right: 17px;"> <span style="color: rgb(75, 114, 255); font-weight: 800;">{{ reminder["eventname"] }}</span> is happening in less than 24 hours.</h4> <br>
                            <h4 style="margin-left: 17px; margin-right: 17px;"> <span style="color: rgb(75, 114, 255); font-weight: 800;"> Start Date:</span> {{ String(reminder["eventstartdatetime"].toDate()).slice(0, String(reminder["eventstartdatetime"].toDate()).length - 38) }}</h4>
                            <h4 style="margin-left: 17px; margin-right: 17px;"> <span style="color: rgb(75, 114, 255); font-weight: 800;"> End Date:</span> {{ String(reminder["eventenddatetime"].toDate()).slice(0, String(reminder["eventstartdatetime"].toDate()).length - 38) }}</h4>
                            <v-card-item style="height: max-content; margin-top: 5px;">

                            </v-card-item>
                        </v-card>
                    </main>
                    </v-sheet>
                </v-card>
                
            </v-col>
        </v-row>

        <v-snackbar location="top" color="red" v-model="showremovedreminder" :timeout="2000" elevation="24" width="400px">
            You have successfully removed the reminder for this event.
        </v-snackbar>

    </v-container>

    
    
</template>

<script>
import { getFirestore, doc, getDoc, onSnapshot, Timestamp, setDoc, updateDoc, deleteField} from "firebase/firestore";
import firebaseApp from "@/firebase";
import {getAuth} from 'firebase/auth';

const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    data() {
        return {
            showremovedreminder: null,
            appliedcounttoday: null,
            savedcounttoday: null,
            applicationgoal: null,
            appliedcounter: 0,
            savedcounter: 0,
            streak: null,
            worker: null,
            reminders: null,

        }
    },

    async mounted() {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currdate = `${day}-${month}-${year}`;

        onSnapshot(doc(db, 'Users', String(auth.currentUser.email)), doc => {
            this.reminders = doc.data()["reminders"]
            const applieddocref = doc.data()['applications']['applied']
            const saveddocref = doc.data()['applications']['saved']
            const intervieweddocref = doc.data()['applications']['interviewed']
            this.applicationgoal = doc.data()['settings']['progress_settings']
            this.appliedcounter = 0
            this.savedcounter = 0
            for (const job in applieddocref) {
                if (applieddocref[job]["job_saved_date"] == currdate) {
                    this.savedcounter += 1
                }
                if (applieddocref[job]["job_applied_date"] == currdate) {
                    this.appliedcounter += 1
                }
            }

            for (const job in saveddocref) {
                if (saveddocref[job]["job_saved_date"] == currdate) {
                    this.savedcounter += 1
                }
                if (saveddocref[job]["job_applied_date"] == currdate) {
                    this.appliedcounter += 1
                }
            }

            for (const job in intervieweddocref) {
                if (intervieweddocref[job]["job_applied_date"] == currdate) {
                    this.appliedcounter += 1
                }

                if (intervieweddocref[job]["job_saved_date"] == currdate) {
                    this.savedcounter += 1
                }
            }
            this.appliedcounttoday = this.appliedcounter / this.applicationgoal * 100
            this.savedcounttoday = this.savedcounter / this.applicationgoal * 100

        })


        this.initializeWorker();
    },

    methods: {
        initializeWorker() {
            const workerCode = `
                self.onmessage = (e) => {
                    if (e.data === 'start') {
                        setInterval(() => {
                            self.postMessage({ action: 'checkEvents' });
                        }, 10000); // 10 seconds
                    }
                };
            `;

            const blob = new Blob([workerCode], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            this.worker = new Worker(url);

            this.worker.onmessage = (event) => {
                if (event.data.action === 'checkEvents') {
                    this.checkEventsAndSetReminders();
                }
            };

            // Start the worker
            this.worker.postMessage('start');
        },
        
        async checkEventsAndSetReminders() {
            const now = new Date();
            const twentyFourHoursLater = new Date(now.getTime() + (24 * 60 * 60 * 1000));
            const target = Timestamp.fromDate(twentyFourHoursLater);
            const today = Timestamp.fromDate(new Date(now.getTime()))
            const docref = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))
            const eventdocref = docref.data()['events']
            for (const event in eventdocref) {
                if (eventdocref[event]["eventstartdatetime"] <= target && eventdocref[event]["eventstartdatetime"] >= today && !(event in docref.data()["reminders"])) {
                        await setDoc(doc(db, 'Users', String(auth.currentUser.email)), {reminders: {[event] : eventdocref[event]}}, {merge: true})
                }
            }
        },

        gotosettings() {
            this.$router.push("/settings")
        },

        formatdate(date) {
            const formatter = new Intl.DateTimeFormat('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
            })

            return formatter.format(date.datetime.toDate())
        },

        async clearreminder(reminder) {
            const docref = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))
            const remindersref = docref.data()["reminders"]
            console.log(remindersref)
            let id = null

            for (const r in remindersref) {
                if (remindersref[r]["eventname"] == reminder.eventname && remindersref[r]["eventstartdatetime"].isEqual(reminder.eventstartdatetime) && remindersref[r]["eventenddatetime"].isEqual(reminder.eventenddatetime)) {
                    id = r
                }
            }
            console.log(id)
            await updateDoc(doc(db, 'Users', String(auth.currentUser.email)), {[`reminders.${id}`] : deleteField()})
            await updateDoc(doc(db, 'Users', String(auth.currentUser.email)), {[`events.${id}`] : deleteField()})

            this.showremovedreminder = true
        }

    },
    beforeDestroy() {
        if (this.worker) {
            this.worker.terminate();
        }
    },
}
</script>

<style scoped>
.subheading{
    color:#1e2242;
    margin-top: 20px;
    font-weight: 500;

}

.pa-3 {
    border-radius: 20px;
    box-shadow: none;
    color: #6381a3;
    
}

.scrollable-sheet {
  overflow-y: auto; 
  overflow-x: hidden;
  background-color: #6381a3;
}

</style>