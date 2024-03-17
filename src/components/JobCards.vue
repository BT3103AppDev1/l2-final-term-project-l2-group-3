<template>
    <h2 class="subheading">Dashboard</h2>
    <div class="d-flex flex-wrap ga-5 lr-1">

        <v-layout row class="d-flex ga-5">
            <v-card color="#F4F7FF" class="pa-3" width="50%" height="500px">
                <v-card-title style="text-align: center;">Find Jobs</v-card-title>
                <v-card-subtitle style="text-align: center;">Here are the list of jobs according to your preference!</v-card-subtitle>
                <v-infinite-scroll
                    height="400"
                    mode="manual"
                    @load="load"
                >
                    <main v-for="(job) in jobs" style="margin-top: 10px" >
                        <v-card variant="elevated" style="border-radius: 10px;" @click="dialog = true; currentviewedjob = job"> <!--just an example, will probably add a for loop to create these v-cards once jobs are extracted from api -->
                            <v-card-item class="custom-card-item" prepend-icon="mdi-bank">
                                <v-card-title style="text-align: left; font-weight: 500; color: rgb(37, 89, 168);"> {{ job["job_position"] }}</v-card-title>
                                <v-card-subtitle>{{ job["company_name"] }}</v-card-subtitle>
                                <v-card-subtitle>Source: LinkedIn</v-card-subtitle>
                            </v-card-item>

                            <v-dialog v-model="dialog" scrollable max-width="80%">
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

            <v-card color="#F4F7FF" class="pa-3" width="50%" height="500px">
                <v-card-title style="text-align: center;">Applied Jobs</v-card-title>
                <v-card-subtitle style="text-align: center;">Here are the jobs you have applied on KiasuCareers</v-card-subtitle>
            </v-card>
        </v-layout>

        <v-layout row class="d-flex ga-5">
            <v-card color="#F4F7FF" class="pa-3" width="50%" height="500px">
                <v-card-title style="text-align: center;">Saved Jobs</v-card-title>
                <v-card-subtitle style="text-align: center;">Here are the jobs you have saved on KiasuCareers</v-card-subtitle>
            </v-card>

            <v-card color="#F4F7FF" class="pa-3" width="50%" height="500px">
                <v-card-title style="text-align: center;">Interviewed</v-card-title>
                <v-card-subtitle style="text-align: center;">Here are the jobs you have interviewed with!</v-card-subtitle>
            </v-card>

        </v-layout> 
	@@ -56,36 +31,6 @@

</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            currentviewedjob: null
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
    color:rgb(180, 176, 176);
