<template>

    <v-container style="margin-top: 15px;">
        <v-row>
            <v-col cols="12">
                <v-card variant="elevated" color="#6381a3" class="pa-3" height="400px">
                    <v-card-title style="text-align: center;">
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-col cols="4">
                            Daily Targets 
                            </v-col>

                            <v-col>
                                <v-btn variant="tonal" size="small" @click = "gotosettings"> Edit Target</v-btn>
                            </v-col>
                        </v-row>

                        
                    </v-card-title>

                    <v-row style="padding: 10px">
                        <v-col cols="4">
                            <h3 style="color: #fff;"> Jobs Applied</h3>
                        </v-col>
                        <v-col cols="6" style="margin-left: -20px; margin-top: 8px;">
                            <v-progress-linear
                                rounded=""
                                v-model="appliedcounttoday"
                                color="blue-lighten-3"
                                height="15"
                            ></v-progress-linear>
                        </v-col>

                        <v-col cols="2">
                            <h3 style="color: #fff; margin-right: -10px"> {{ appliedcounter + "/" + applicationgoal }}</h3>
                        </v-col>
                        
                    </v-row>

                    <v-row style="padding: 10px">
                        <v-col cols="4">
                            <h3 style="color: #fff;"> Jobs Saved</h3>
                        </v-col>
                        <v-col cols="6" style="margin-left: -20px; margin-top: 8px;">
                            <v-progress-linear
                                rounded=""
                                v-model="savedcounttoday"
                                color="blue-lighten-3"
                                height="15"
                            ></v-progress-linear>
                        </v-col>

                        <v-col cols="2">
                            <h3 style="color: #fff; margin-right: -10px;"> {{ savedcounter + "/" + applicationgoal }}</h3>
                        </v-col>
                        
                    </v-row>
                </v-card>
            </v-col>
        </v-row>    

        <v-row class="ga-5">
            <v-col cols="12">
                <v-card variant="elevated" color="#6381a3" class="pa-3" height="400px">
                    <v-card-title style="text-align: center;">Reminders</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    
    
</template>

<script>
import { getFirestore, doc, setDoc, getDoc, onSnapshot, updateDoc, deleteField, DocumentReference} from "firebase/firestore";
import firebaseApp from "@/firebase";
import {getAuth} from 'firebase/auth';

const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    data() {
        return {
            appliedcounttoday: null,
            savedcounttoday: null,
            applicationgoal: null,
            appliedcounter: 0,
            savedcounter: 0,

        }
    },

    async mounted() {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currdate = `${day}-${month}-${year}`;

        onSnapshot(doc(db, 'Users', String(auth.currentUser.email)), doc => {
            const applieddocref = doc.data()['applications']['applied']
            const saveddocref = doc.data()['applications']['saved']
            this.applicationgoal = doc.data()['settings']['progress_settings']
            this.appliedcounter = 0
            this.savedcounter = 0
            for (const job in applieddocref) {
                if (applieddocref[job]["job_applied_date"] == currdate) {
                    this.appliedcounter += 1
                }
            }

            for (const job in saveddocref) {
                if (saveddocref[job]["job_saved_date"] == currdate) {
                    this.savedcounter += 1
                }
            }
            this.appliedcounttoday = this.appliedcounter / this.applicationgoal * 100
            this.savedcounttoday = this.savedcounter / this.applicationgoal * 100
        })
    },

    methods: {
        gotosettings() {
            this.$router.push("/settings")
        }
    }
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

</style>