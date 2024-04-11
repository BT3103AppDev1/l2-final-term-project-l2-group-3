<template>
    <v-app class="custom-bg">
        

        <v-row class="rounded rounded-md">
            <Header />
            <SideBar />
        </v-row>
        
        <div class="text-center">
            <v-snackbar location="top" v-model="welcome" :timeout="5000" color="#6381a3" rounded="pill" style="display: flex; justify-content: center; align-items: center;">
                <h3 style="color: #fff; margin-left: 30px; font-weight: 500;">Welcome to KiasuCareers, {{ firstname }}.</h3>
            </v-snackbar>
            <v-dialog v-model="dialog" width="auto">
                <v-card width="800px" prepend-icon="mdi-account-edit" title="Welcome to KiasuCareers." color="#244d7b">
                    <v-card-text class="font-weight-light">
                        New member here? Fill up and indicate some details below to have your own personalised dashboard!
                        <v-container fluid> <br>
                            <v-row>
                                <span> <b>Job Title</b> </span>
                                <v-col cols="12">
                                    <v-text-field v-model="title" label="Enter job title you are looking for"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <span> <b>Job portals</b> </span>
                                <v-col cols="12"> 
                                    <v-combobox clearable multiple chips v-model="portalchoices" :items="portals" label="Find jobs posted in the job portals you select"> </v-combobox>
                                </v-col>
                            </v-row>

                            <v-row>
                                <span><b>Employment types</b></span>
                                <v-col cols="12">
                                    <v-combobox clearable chips v-model="jtypeschoices" :items="jtypes" label="Select employment types"></v-combobox>
                                </v-col>
                            </v-row>

                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn class="text-none" variant="tonal" text="Save" @click="closedialog"></v-btn>
                            <v-btn class="text-none" variant="tonal" text="Cancel" @click="closedialogwithoutquery"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>        
        </div>

            
        <v-row class="view" style="margin-left: 55px; height: 100%; margin-top: 70px;">

            <v-col cols="8">
                <JobCards @datadata="childcall($event)" />
            </v-col>

            <v-col cols="4">
                <Progress/>
            </v-col>
                
        </v-row>
            
        <Footer />

    </v-app>
    
</template>

<script>
import JobCards from "@/components/JobCards.vue";
import Progress from "@/components/Progress.vue";
import {RetrieveJobs} from '@/jsearch.js';
import SaveJob from "@/components/SaveJob.vue"
import Header from "@/components/Header.vue"
//import SideBar from "@/components/SideBar.vue"
import Footer from "@/components/Footer.vue"
import { getFirestore, doc, setDoc, getDoc, updateDoc} from "firebase/firestore";
import firebaseApp from "@/firebase";
import {getAuth} from 'firebase/auth';

export default {
    data() {
        return {
            welcome: false,
            firstname: "",
            findjobs: null,
            title: "",
            portalchoices: null,
            jtypeschoices: null,
            dialog: null, 
            portals: [
                'LinkedIn',
                'Indeed',
                'Glassdoor',
                'Others'
            ],
            jtypes: [
                'Full-time',
                'Contractor',
                'Part-time',
                'Intern',
            ],
        };
    },

    components: {
        JobCards,
        Progress,
        SaveJob
    },

    methods: {
        childcall(x) {
            this.dialog = x
        },

        closedialogwithoutquery() {
            this.dialog = false
        },

        async closedialog() {
            this.dialog = false;
            //this.jobs = await RetrieveJobs(this.title);
            //console.log("this is the job object")
            //console.log(this.jobs);
            const job_title = this.title
            const job_portals = []
            this.portalchoices.forEach(x => job_portals.push(x))
            const employment_types = this.jtypeschoices.toUpperCase()
            this.findjobs = await RetrieveJobs(job_title, employment_types, job_portals)
            console.log(this.findjobs)

            this.GetUserData();
            const db = getFirestore(firebaseApp);
            const auth = getAuth();
            const docref = doc(db, 'Users', String(auth.currentUser.email))

            await setDoc(docref, {credentials: {firstlogin: false}}, {merge: true})
            await updateDoc(docref, {'applications.FindJobs' : this.findjobs})
            await setDoc(docref, {jobpreferences: {jobtitle : job_title, jobportals: String(job_portals), emptypes: employment_types}}, {merge: true})
            
            
        },

        async GetUserData() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const docRef = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))
                //console.log(docRef.data())
                //console.log("printed user data")
            } catch (error) {
                console.error('Error reading user data:', error);
            }
        },
    },

    async mounted() {
        this.welcome = true
        const db = getFirestore(firebaseApp);
        const auth = getAuth();
        const docRef = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))
        if (docRef.data()['credentials']['firstlogin']) {
            this.dialog = true
        }
        this.firstname = docRef.data()['credentials']['firstname']

        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        // ...
        console.log(idToken)
        }).catch(function(error) {
        // Handle error
        });
    }

}
</script>

<style scope>

.view {
    background-color: #eff1f7;
}

h3 {
    color: rgb(132, 131, 131);
    font-weight: 400;
}


.subheading{
    color:rgb(180, 176, 176);
    padding: 20px;
    font-weight: 350;

}

</style>