<template>
    <v-app class="custom-bg">
        <v-row class="rounded rounded-md">
            <Header />
            <SideBar />
        </v-row>

        <v-row class="view" style="margin-left: 50px; height: 100%; margin-top: 50px;">
            <v-card height="100%" width="95%" style="margin-top: 12px; margin-left: 12px; background-color: #eff1f7;" variant="flat">
                <h1 style="color:rgb(39, 37, 37); font-weight: 500; padding: 50px; margin-left: -20px;"> Performance </h1>
            
                <v-row>

                    <v-col cols="8">
                        <v-row style="margin-left: 30px;">

                            <v-col cols="12" md="4">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="125px" style="border-radius: 10px;">
                                    <v-row>
                                        <v-card-title>
                                            <h5 class="card-title"> Applications Completed </h5>
                                        </v-card-title>
                                    </v-row>

                                    <v-row style="margin-top: -10px;">
                                        <v-col cols="6">
                                            <v-card-text>
                                                <div class="display-1" style="font-size: 40px; margin-left: 10px;"><b>{{ applicationsCompleted.count }}</b></div>
                                            </v-card-text>
                                        </v-col>

                                        <v-col cols="6" style="margin-top: 15px;">
                                            <v-row style="margin-left: 10px;">
                                                <div style="display: flex; align-items: center; font-size:medium;">
                                                    <v-icon small color="green">{{ applicationsCompleted.trend > 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
                                                    <span :class="applicationsCompleted.trend> 0 ? 'green--text' : 'red--text'"> {{ applicationsCompleted.trend }}% </span>
                                                 </div>
                                            </v-row>
                                            <v-row>
                                                <div class="card-text"> <h5> since last week</h5> </div>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="125px" style="border-radius: 10px;">
                                    <v-row> 
                                        <v-card-title>
                                            <h5 class="card-title"> Interviews Attended </h5>
                                        </v-card-title>
                                    </v-row>

                                    <v-row style="margin-top: -10px;">
                                        <v-col cols="6">
                                            <v-card-text>
                                                <div class="display-1" style="font-size: 40px; margin-left: 10px;"><b>{{ interviewsAttended.count }}</b></div>
                                            </v-card-text>
                                        </v-col>

                                        <v-col cols="6" style="margin-top:15px;">
                                            <v-row style="margin-left: 10px;">
                                                <div style="display: flex; align-items: center; font-size:medium;">
                                                    <v-icon small color="green">{{ interviewsAttended.trend > 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
                                                    <span :class="interviewsAttended.trend > 0 ? 'green--text' : 'red--text'"> {{ interviewsAttended.trend }}% </span>
                                                 </div>
                                            </v-row>

                                            <v-row>
                                                <div class="card-text"> <h5>since last week </h5></div>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="125px" style="border-radius: 10px;">
                                    <v-row> 
                                        <v-card-title>
                                            <h5 class="card-title"> Progression to next stage </h5>
                                        </v-card-title>
                                    </v-row>

                                    <v-row style="margin-top: -10px;">
                                        <v-col cols="6">
                                            <v-card-text>
                                                <div class="display-1" style="font-size: 40px; margin-left: 10px;"><b>{{ progressionToNextStage.count }}</b></div>
                                            </v-card-text>
                                        </v-col>

                                        <v-col cols="6" style="margin-top:15px;">
                                            <v-row style="margin-left: 10px;">
                                                <div style="display: flex; align-items: center; font-size:medium;">
                                                    <v-icon small color="green">{{ progressionToNextStage.trend > 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
                                                    <span :class="progressionToNextStage.trend> 0 ? 'green--text' : 'red--text'"> {{ progressionToNextStage.trend }}% </span>
                                                 </div>
                                            </v-row>

                                            <v-row>
                                                <div class="card-text"> <h5> since last week</h5></div>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>

                        </v-row>

                        <v-row style="margin-top: 12px; margin-left: 30px;">
                            <v-col cols="12">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="350px" style="border-radius: 10px;">
                                    <line-chart :data="lineChartData" :min="0" :max="10" :library="{backgroundColor: 'transparent', elements: { line: { tension: 0, borderWidth: 4 }}}"></line-chart>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row style="margin-top: 12px; margin-left: 30px;">
                            <v-col cols="12">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="250px" style="border-radius: 10px;">
                                    <h5 class="card-title"> Track past offers and interviews </h5>
                                    <v-data-table
                                        :items="offersAndInterviews"
                                        :hide-default-footer="true"
                                        class="elevation-1"
                                        style="max-height: 200px; overflow-y: auto;"
                                    ></v-data-table>

                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="4"> 
                        <v-card variant="elevated" color=#ffffff class="pa-3" height="350px" style="border-radius: 10px;">
                            <h5 class="card-title"> Top industries interested </h5>
                            <column-chart :data="barChartData" :stacked="true" :library="{backgroundColor: 'transparent'}"></column-chart>
                        </v-card><br>

                        <v-card variant="elevated" color=#ffffff class="pa-3" height="350px" style="border-radius: 10px;">
                            <h5 class="card-title"> Companies most likely to contact you </h5>
                            <pie-chart :data="chartData" :donut="true"></pie-chart>
                        </v-card>
                    </v-col>

                </v-row> 

            

          </v-card>
        </v-row>
    </v-app>
</template>


<script>
export default {
    
    // sample data
    data() {
        return {
            applicationsCompleted: {
                count: 34,
                trend: 1
            },

            interviewsAttended: {
                count: 10,
                trend: 2
            },

            progressionToNextStage: {
                count: 1,
                trend: 2
            },

            chartData: {
                "Financial Industry": 67,
                "Other Industries": 33
            },
      
            barChartData: [
                ["Government", 30],
                ["Tech", 50],
                ["Finance", 40],
                ["Manufacturing", 35]
            ],

            lineChartData: {
                'SWE': [[new Date(2023, 11), 0], [new Date(2024, 0), 2], [new Date(2024, 1), 4], [new Date(2024, 2), 8]],
                'Web Dev': [[new Date(2023, 11), 1], [new Date(2024, 0), 3], [new Date(2024, 1), 6], [new Date(2024, 2), 9]],
            },

            offersAndInterviews: [
                { company: 'DBS', date: '28/02/2024', role: 'DBS Structured Internship 2024', step: 'Interview' },
                { company: 'UOB', date: '24/02/2024', role: 'UOB Management Associate Programme 2024', step: 'Interview' },
                { company: 'HSBC', date: '20/01/2024', role: 'Securities Services Graduate Programme 2024', step: 'Interview' }
        
            ]
        }
    },
};
</script>

<style>
.display-1 {
    color: #244d7b;
}

.card-title, .card-text {
    color: rgb(122, 120, 120);
    font-size: medium;
}
</style>