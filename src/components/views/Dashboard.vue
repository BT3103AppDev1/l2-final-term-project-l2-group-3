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
                    <v-text> <b>Industries</b> </v-text>
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
                    <v-text><b>Job types</b></v-text>
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
        <JobCards />
    </div>

    <div id="progressreminders">
        <h1>progress and reminder</h1>
    </div>

    
</template>

<script>
import JobCards from "@/components/JobCards.vue";

export default {
    data() {
        return {
            dialog: false,
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
            localStorage.setItem('showndialog', 'true');
        }
    },
    mounted() {
        let showndialog = localStorage.getItem('showndialog');
        if (showndialog !== 'true') {
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