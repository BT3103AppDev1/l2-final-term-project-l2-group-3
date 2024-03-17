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

    
    <v-row style="padding: 50px;">

        <v-col cols="8">
            <JobCards :jobs = "jobs" />
        </v-col>

        <v-col cols="4">
            <Progress/>
        </v-col>
        
    </v-row>

    
</template>

<script>
import JobCards from "@/components/JobCards.vue";
import Progress from "@/components/Progress.vue";
import {RetrieveJobs} from '@/linkedin.js';

export default {
    data() {
        return {
            jobs: null,
            title: "",
            dialog: true, //setting it to true for now (to test the dialog)
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

    components: {
        JobCards,
        Progress
    },

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
    }
}
</script>

<style scope>

h3 {
    color: rgb(132, 131, 131);
    font-weight: 400;
}

#jobcards {
    width: 50%;
    float: left;
    padding: 10px;
    margin-left: 50px;
    margin-top: 0px;
}

#progressreminders {
    float: left;
    width: max-content;
}

.subheading{
    color:rgb(180, 176, 176);
    padding: 20px;
    font-weight: 350;

}
</style>