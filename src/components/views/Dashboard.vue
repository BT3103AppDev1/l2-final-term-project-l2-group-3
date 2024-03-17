<template>
    <div class="text-center pa-4">

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

    <div id="jobcards">
        <v-btn color="primary" @click="showSaveJob = true">Save a Job</v-btn>
        <v-dialog v-model="showSaveJob" persistent max-width="600px">
            <v-card>
                <v-card-title class="text-h5">Save a New Job</v-card-title>
                <v-card-text>
                    <SaveJob @job-saved="showSaveJob = false" />
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="showSaveJob = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <JobCards />
    </div>

    <div id="progressreminders">
        <h1>progress and reminder</h1>
    </div>

    
</template>

<script>
import JobCards from "@/components/JobCards.vue";
import SaveJob from "@/components/SaveJob.vue";

export default {
    data() {
        return {
            showSaveJob: false,
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

    methods: {
        closedialog() {
            this.dialog = false;
            localStorage.setItem('shown', 'true');
        }
    },
    mounted() {
        let shown = localStorage.getItem('shown');
        if (shown !== 'true') {
            this.dialog = true;
        }
    },
    
    components: { JobCards }
}
</script>

<style scope>

h3 {
    color: rgb(132, 131, 131);
    font-weight: 400;
}

#jobcards {
    width: 2000px;
    float: left;
    padding: 20px;
    margin-left: 50px;
    margin-top: 0px;
}

#progressreminders {
    float: left;
}
</style>