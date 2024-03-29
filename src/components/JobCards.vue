<template>
    <v-row style="margin-top: 20px;">
        <h2 class="subheading">Dashboard</h2>
        <v-btn class="expandablebutton" color= #154c79 @click="showSaveJob = true" @mouseover="hover = true" @mouseleave="hover = false">
            <v-icon>mdi-plus</v-icon>
            <span v-if="hover" class="button-text">Save a new job</span>
        </v-btn>
        <v-dialog v-model="showSaveJob" max-width="700px">
            <v-card color="#54739a" title="Save a new job">
                <v-card-text class="font-weight-light">
                Enter the following details and the application will appear under Saved Jobs!
                </v-card-text>

                <v-card-text>
                    <SaveJob @job-saved="showSaveJob = false" />
                    <v-col class="d-flex justify-center">
                        <v-btn variant="tonal" width="250px" @click="showSaveJob = false">Close</v-btn>
                    </v-col>
                </v-card-text>
            </v-card>
        </v-dialog>

    </v-row>


    <v-container>
        <v-row class="ga-5">
            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="550px">
                    <v-card-title style="text-align: center;">Find Jobs</v-card-title>
                    <v-card-subtitle style="text-align: center;">Here are the list of jobs according to your preference!</v-card-subtitle>
                    <v-infinite-scroll
                        height="400"
                        mode="manual"
                        @load="load"
                        empty-text="There are no job postings that fit your descriptions!"
                    >
                        <main v-for="(job) in jobs" style="margin-top: 10px; border-radius: 20px;" >
                            <v-card variant="flat" hover style="border-radius: 10px;" @click="dialog = true; currentviewedjob = job" opacity=0.9 color="#e9f5f9"> <!--just an example, will probably add a for loop to create these v-cards once jobs are extracted from api -->
                                <v-card-item class="custom-card-item" prepend-icon="mdi-bank">
                                    <v-card-title style="text-align: left; font-weight: 500; color: rgb(37, 89, 168);"> {{ job["job_position"] }}</v-card-title>
                                    <v-card-subtitle>{{ job["company_name"] }}</v-card-subtitle>
                                    <v-card-subtitle>Source: LinkedIn</v-card-subtitle>
                                </v-card-item>

                                <v-dialog v-model="dialog" width="600px" opacity=0.1>
                                    <v-card>
                                        <v-card-title>{{ currentviewedjob["company_name"] }}</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text height="200px">Job description</v-card-text>
                                    </v-card>
                                </v-dialog>
                            </v-card>
                            
                        </main>
                    </v-infinite-scroll>
                    
                </v-card>
            </v-col>

            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="550px">
                    <v-card-title style="text-align: center;">Applied Jobs</v-card-title>
                    <v-card-subtitle style="text-align: center;">Here are the jobs you have applied on KiasuCareers</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="d-flex ga-5">
            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="550px">
                    <v-card-title style="text-align: center;">Saved Jobs</v-card-title>
                    <v-card-subtitle style="text-align: center;">Here are the jobs you have saved on KiasuCareers</v-card-subtitle>
                </v-card>
            </v-col>

            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="550px">
                    <v-card-title style="text-align: center;">Interviewed</v-card-title>
                    <v-card-subtitle style="text-align: center;">Here are the jobs you have interviewed with!</v-card-subtitle>
                </v-card>
            </v-col>

        </v-row> 

    </v-container>
    
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            currentviewedjob: null,
            hover: false,
            showSaveJob: false,
        }
    },

    props: {
        jobs: Object
    },

    methods : {
        print() {
            console.log(Object.values(this.jobs)[1])
        },

        load ({ done }) {
            setTimeout(() => {
                console.log(typeof(this.jobs));
            this.jobs.push(...Array.from({ length: 10 }, (k, v) => v + this.jobs.at(-1) + 1))

            done('ok')
            }, 1000)
        },
    }
}
</script>

<style scoped>
.subheading{
    color:#1e2242;
    font-weight: 500;

}

.pa-3 {
    border-radius: 20px;
    box-shadow: none;
}

.expandablebutton {
    transition: width 0.3s ease, background-color 0.3s ease;
    width: 50px; /* Initial width */
    overflow: hidden;
    margin-top: 20px;
/* Center items horizontally */
}

.expandablebutton:hover {
  width: 200px; /* Expanded width to fit the phrase */
  background-color: #f5f5f5; /* Optional: change background color on hover */
}

.button-text {
  margin-left: 8px; /* Adjust spacing between icon and text */
  white-space: nowrap; /* Ensure the text does not wrap */
}

.btn {
    text-transform: none;
}


</style>