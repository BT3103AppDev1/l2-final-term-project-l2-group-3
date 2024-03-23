<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto">
            <v-card
                width="800px"
                prepend-icon="mdi-account-edit"
                title="Welcome to KiasuCareers!"
                color="#729CBD"
            >
            <v-card-text class="font-weight-light">
                New member here? Fill up and indicate some details below to have your own personalised dashboard!
                <v-container fluid>
                    <br>
                    <v-row>
                    <span> <b>Job Title</b> </span>
                    <v-col cols="12">
                        <v-text-field v-model="title" label="Enter job title you are looking for, or any keywords"></v-text-field>
                    </v-col>
                    </v-row>

                    <v-row>
                    <span> <b>Industries</b> </span>
                    <v-col cols="12">
                        <v-combobox
                        clearable
                        chips
                        :items="items"
                        label="Select the industries you are interested in"
                        multiple
                        ></v-combobox>
                    </v-col>
                    </v-row>

                    <v-row>
                    <span><b>Job types</b></span>
                    <v-col cols="12">
                        <v-combobox
                        clearable
                        chips
                        :items="jtypes"
                        label="Select job types"
                        multiple
                        ></v-combobox>
                    </v-col>
                    </v-row>

                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn
                        variant="tonal"
                        class="ms-auto"
                        text="save"
                        @click="closedialog"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        
    </div>

    
<<<<<<< HEAD
    <v-row style="padding: 50px;">
=======
    <v-row style="margin-left: 30px;">

        <v-col cols="8">
            <JobCards :jobs = "jobs" />
        </v-col>

>>>>>>> aeb17a5 (fixing bugs)
        <v-col cols="4">
            <Progress/>
        </v-col>
        
    </v-row>

    
</template>

<script>
import JobCards from "@/components/JobCards.vue";
import Progress from "@/components/Progress.vue";
import {RetrieveJobs} from '@/linkedin.js';
import SaveJob from "@/components/SaveJob.vue"

export default {
    data() {
        return {
<<<<<<< HEAD
            showSaveJob: false,
=======

>>>>>>> aeb17a5 (fixing bugs)
            jobs: null,
            title: "",
            dialog: true, //setting it to true for now
            select: ['Vuetify', 'Programming'],
            items: [
                'Financial Services',
                'IT Services and IT Consulting',
                'Staffing and Recruiting',
                'Human Resources Services',
                'Banking',
                'Technology, information and internet',
                'Entertainment Provides',
                'Hospitals abd Healthcare'
            ],
            jtypes: [
                'Full-time',
                'Contract',
                'Part-time',
                'Internship',
                'Temporary',
                'Volunteer'
            ],
        };
    },

<<<<<<< HEAD
=======
    components: {
        JobCards,
        Progress,
        SaveJob
    },

>>>>>>> aeb17a5 (fixing bugs)
    methods: {
        async closedialog() {
            this.dialog = false;
            localStorage.setItem('shown', 'true');
            console.log(this.title);
            this.jobs = await RetrieveJobs(this.title);
            console.log("this is the job object")
            console.log(this.jobs);
            //console.log(typeof(this.jobs))
        }
    },
    mounted() {
        let shown = localStorage.getItem('shown');
        if (shown !== 'true') {
            this.dialog = true;
        }
    },
    
    components: { 
        Progress,
        SaveJob,
        JobCards }
}
</script>

<style scope>

h3 {
    color: rgb(132, 131, 131);
    font-weight: 400;
}

#jobcards {
<<<<<<< HEAD
    width: 2000px;
    float: left;
    padding: 20px;
=======
    padding: 10px;
>>>>>>> aeb17a5 (fixing bugs)
    margin-left: 50px;
    margin-top: 0px;
}

#progressreminders {
<<<<<<< HEAD
    float: left;
=======
    width: max-content;
}

.subheading{
    color:rgb(180, 176, 176);
    padding: 20px;
    font-weight: 350;

>>>>>>> aeb17a5 (fixing bugs)
}


</style>