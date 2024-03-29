<template>
    <v-app class="custom-bg">
        <v-row class="rounded rounded-md">
            <Header />
            <SideBar />
        </v-row>
        
        <div class="text-center">
            <v-dialog v-model="dialog" width="auto">
                <v-card width="800px" prepend-icon="mdi-account-edit" title="Welcome to KiasuCareers!" color="#244d7b">
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
                                    <v-combobox clearable :items="portals" label="Find jobs posted in the job portals you select"> </v-combobox>
                                </v-col>
                            </v-row>

                            <v-row>
                                <span><b>Employment types</b></span>
                                <v-col cols="12">
                                    <v-combobox clearable chips :items="jtypes" label="Select employment types"></v-combobox>
                                </v-col>
                            </v-row>

                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn class="text-none" variant="tonal" text="Save" @click="closedialog"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>        
        </div>

            
        <v-row class="view" style="margin-left: 55px; height: 100%; margin-top: 70px;">

            <v-col cols="9">
                <JobCards :jobs = "jobs" @datadata="childcall($event)" />
            </v-col>

            <v-col cols="3">
                <Progress/>
            </v-col>
                
        </v-row>
            
        <Footer />

    </v-app>
    
</template>

<script>
import JobCards from "@/components/JobCards.vue";
import Progress from "@/components/Progress.vue";
import {RetrieveJobsFromLinkedIn} from '@/linkedin.js';
//import {RetrieveJobsFromGlassdoor} from '@/glassdoor.js';
// import {RetrieveJobsFromIndeed} from '@/indeed.js';
import SaveJob from "@/components/SaveJob.vue"
import Header from "@/components/Header.vue"
//import SideBar from "@/components/SideBar.vue"
import Footer from "@/components/Footer.vue"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebaseApp from "@/firebase";
import {getAuth} from 'firebase/auth';

export default {
    data() {
        return {
            jobs: null,
            title: "",
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

        async closedialog() {
            this.dialog = false;
            //console.log(this.title);
            //const linkedinJobs = await RetrieveJobsFromLinkedIn(this.title);
            //const indeedJobs = await RetrieveJobsFromIndeed(title);
            //const glassdoorJobs = await RetrieveJobsFromGlassdoor(title);
            //this.jobs = [...linkedinJobs, ...indeedJobs, ...glassdoorJobs]; 
            //this.jobs = await RetrieveJobsFromLinkedIn(this.title);
            //console.log("this is the job object")
            //console.log(this.jobs);
            this.GetUserData();
            const db = getFirestore(firebaseApp);
            const auth = getAuth();
            const docRef = await setDoc(doc(db, 'Users', String(auth.currentUser.email)), {credentials: {firstlogin: false}}, {merge: true})
            //console.log(typeof(this.jobs))
            
        },

        async GetUserData() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const docRef = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))
                console.log(docRef.data())
                console.log("printed user data")
            } catch (error) {
                console.error('Error reading user data:', error);
            }
        },
    },

    async mounted() {
        const db = getFirestore(firebaseApp);
        const auth = getAuth();
        const docRef = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))
        if (docRef.data()['credentials']['firstlogin']) {
            this.dialog = true
        }
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