<template>
    <v-row style="margin-top: 10px;">
        <h2 class="subheading">Dashboard</h2>
        <v-btn class="expandablebutton" color= #154c79 @click="showSaveJob = true" @mouseover="hover = true" @mouseleave="hover = false">
            <v-icon>mdi-plus</v-icon>
            <span v-if="hover" class="button-text">Save a new job</span>
        </v-btn>
        <v-dialog v-model="showSaveJob" max-width="700px">
            <v-card color="#244d7b" title="Save a new job">
                <v-card-text class="font-weight-light">
                Enter the following details and the application will appear under Saved Jobs!
                </v-card-text>

                <v-card-text>
                    
                        <div class="save-job-form">
                            <v-text-field label="Job Title" v-model="job.title"></v-text-field>
                            <v-text-field label="Company Name" v-model="job.company"></v-text-field>
                            <v-text-field label="Job Location" v-model="job.location"></v-text-field>
                            <v-text-field label="Job Link" v-model="job.link"></v-text-field>
                            <v-col class="d-flex justify-center">
                                <v-btn variant="tonal" width="250px">Save Job</v-btn>
                            </v-col>
                        </div>
                        <v-btn variant="tonal" width="250px" @click="showSaveJob = false" style="margin-left: 201px; margin-top: -30px;">Close</v-btn>
                    
                </v-card-text>
            </v-card>
        </v-dialog>

    </v-row>


    <v-container>
        <v-row>
            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="400px">
                    <v-row>
                        <v-col cols="5">
                            <h2 class="title"> Find Jobs</h2>
                        </v-col>

                        <v-col cols="7">
                            <v-row>
                                <v-col cols="3">
                                    <v-btn variant="blank"> <v-icon size="x-large">mdi-refresh</v-icon> </v-btn>
                                </v-col>

                                <v-col cols="9">
                                    <v-btn variant="tonal" rounded color="#244d7b" @click="editpreferences"> Edit preferences</v-btn>
                                </v-col>

                            </v-row>
                            
                        </v-col>
                    </v-row>
                    <v-infinite-scroll
                        height="400"
                        mode="manual"
                        @load="load"
                        empty-text="There are no job postings that fit your descriptions!"
                    >
                        <main v-for="(job) in jobs" style="margin-top: 10px; border-radius: 20px;" >
                            <v-card variant="flat" hover style="border-radius: 10px;" @click="dialog = true; currentviewedjob = job" opacity=0.9 color="#e9f5f9"> 
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
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="400px">
                    <h2 class="title">Applied</h2>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="400px">
                    <h2 class="title">Saved</h2>
                </v-card>
            </v-col>

            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="400px">
                    <h2 class="title">Interviewed</h2>
                </v-card>
            </v-col>

        </v-row> 

    </v-container>
    
</template>

<script>
export default {
    data() {
        return {
            currentviewedjob: null,
            hover: false,
            showSaveJob: false,
            job: {
                title: '',
                company: '',
                location: '',
                link: ''
            }
        }
    },

    props: {
        jobs: Object
    },

    emits:["datadata"],

    methods : {
        editpreferences() {
            this.$emit("datadata", true)
        },

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

.title {
    text-align: left;
    padding: 10px;
    margin-top: -10px;
    color: rgb(139, 139, 139);
    font-weight: 600;
    font-size: 22px;
}

.save-job-form {
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
}


</style>