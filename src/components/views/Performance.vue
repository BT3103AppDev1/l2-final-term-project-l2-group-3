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
                                                    <v-icon small :color="applicationsCompleted.trend >= 0 ? 'green' : 'red'">
                                                        {{ applicationsCompleted.trend >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
                                                    </v-icon>
                                                    <span :class="applicationsCompleted.trend >= 0 ? 'green--text' : 'red--text'">
                                                        {{ applicationsCompleted.trend }}%
                                                    </span>
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
                                                    <v-icon small :color="interviewsAttended.trend >= 0 ? 'green' : 'red'">
                                                        {{ interviewsAttended.trend >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
                                                    </v-icon>
                                                    <span :class="interviewsAttended.trend >= 0 ? 'green--text' : 'red--text'">
                                                        {{ interviewsAttended.trend }}%
                                                    </span>
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
                                            <h5 class="card-title"> Interview to Application Ratio </h5>
                                        </v-card-title>
                                    </v-row>

                                    <v-row style="margin-top: -10px;">
                                        <v-col>
                                            <v-card-text>
                                                <div class="display-1" style="font-size: 40px; text-align: center;"><b>{{ isNaN(progressionToNextStage.count) ? 0 : progressionToNextStage.count }}%</b></div>
                                            </v-card-text>
                                        </v-col>

                                        <!---<v-col cols="6" style="margin-top:15px;">
                                            <v-row style="margin-left: 10px;">
                                                <div style="display: flex; align-items: center; font-size:medium;">
                                                    <v-icon small :color="progressionToNextStage.trend >= 0 ? 'green' : 'red'">
                                                        {{ progressionToNextStage.trend >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
                                                    </v-icon>
                                                    <span :class="progressionToNextStage.trend >= 0 ? 'green--text' : 'red--text'">
                                                        {{ progressionToNextStage.trend }}%
                                                    </span>
                                                </div>
                                            </v-row>

                                            <v-row>
                                                <div class="card-text"> <h5> since last week</h5></div>
                                            </v-row>
                                        </v-col>-->
                                    </v-row>
                                </v-card>
                            </v-col>

                        </v-row>

                        <v-row style="margin-top: 12px; margin-left: 30px;">
                            <v-col cols="12">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="350px" style="border-radius: 10px;">
                                    <h5 class="card-title"> Weekly Application Progress </h5>
                                    <line-chart :data="lineChartData" :min="0" :library="{ backgroundColor: 'transparent', elements: { line: { tension: 0, borderWidth: 4}}}"> </line-chart>

                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row style="margin-top: 12px; margin-left: 30px;">
                            <v-col cols="12">
                                <v-card variant="elevated" color=#ffffff class="pa-3" height="250px" style="border-radius: 10px;">
                                    <h5 class="card-title"> Summary of past interviews </h5>
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
                            <h5 class="card-title"> Top Industries Interested </h5>
                            <column-chart :data="barChartData" :stacked="true" :library="{backgroundColor: 'transparent'}"></column-chart>
                        </v-card><br>

                        <v-card variant="elevated" color=#ffffff class="pa-3" height="350px" style="border-radius: 10px;">
                            <h5 class="card-title"> Applications Overview </h5>
                            <pie-chart :data="applicationsProportions" :donut="true"></pie-chart>
                        </v-card>
                    </v-col>

                </v-row>

            

          </v-card>
        </v-row>
    </v-app>
</template>


<script>
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase";

export default {
    
    data() {
        return {
            applicationsCompleted: {
                count: this.fetchApplied(),
                trend: 0,
            },

            interviewsAttended: {
                count:this.fetchInterview(),
                trend: 0,
            },

            progressionToNextStage: {
                count: this.fetchProgress(),
                trend: 0,
            }, 
      
            barChartData: [],

            lineChartData: {},

            offersAndInterviews: [],

            applicationsProportions: {
                Saved: 0,
                Applied: 0,
                Interviewed: 0
            },

        }
    },

    mounted() {
        this.fetchIndustryData();
        this.fetchAppliedTrend();
        this.fetchInterviewTrend();
        this.fetchApplicationsPerDay();
        this.fetchOffersAndInterviews();
        this.fetchApplicationProportions();
    },

    methods: {

        async fetchApplied() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;
                
                if (user) {
                    const userDocRef = doc(db,"Users", user.email) 
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists) {
                        const appliedJobsDict = userDocSnapshot.data().applications.applied;
                        const appliedJobsCount = Object.keys(appliedJobsDict).length;

                        const appliedInterviewedDict = userDocSnapshot.data().applications.interviewed;
                        const appliedInterviewCount = Object.keys(appliedInterviewedDict).length;


                        this.applicationsCompleted.count = appliedJobsCount + appliedInterviewCount;
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching applied jobs count: ", error);
            }
        },

        async fetchInterview() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;
                
                if (user) {
                    const userDocRef = doc(db,"Users", user.email) 
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists) {
                        const appliedInterviewedDict = userDocSnapshot.data().applications.interviewed;
                        const appliedInterviewCount = Object.keys(appliedInterviewedDict).length;

                        this.interviewsAttended.count = appliedInterviewCount;
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching interview count: ", error);
            }
        },

        async fetchProgress() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;
                
                if (user) {
                    const userDocRef = doc(db,"Users", user.email);
                    const userRef = doc(db,"Users", user.email);
                    const userRefSnapshot= await getDoc(userRef);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists) {
                        const progressSetting= userRefSnapshot.data().settings.progress_settings;
                        const appliedInterviewedDict = userDocSnapshot.data().applications.interviewed;
                        const appliedInterviewCount = Object.keys(appliedInterviewedDict).length;

                        const appliedJobsDict = userDocSnapshot.data().applications.applied;
                        const appliedJobsCount = Object.keys(appliedJobsDict).length;

                        console.log(appliedInterviewCount, appliedJobsCount)

                        this.progressionToNextStage.count = Math.round(appliedInterviewCount / (appliedJobsCount + appliedInterviewCount) * 100);
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching interview count: ", error);
            }
        }, 

        async fetchTrend(status) {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    const userDocRef = doc(db,"Users", user.email);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const sevenDaysAgo = new Date();
                        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                        
                        const applications = userDocSnapshot.data().applications[status];
                        let recentCount = 0;
                        let pastCount = 0;
                        
                        if (status === 'applied') {
                            Object.values(applications).forEach(application => {
                                const [day, month, year] = application.job_applied_date.split('-').map(Number);
                                const appliedDate = new Date(year, month - 1, day); // months are 0-indexed
                    
                                if (appliedDate >= sevenDaysAgo) {
                                 recentCount++;
                                } else {
                                    pastCount++;
                                }
                            });
                        } else {
                            Object.values(applications).forEach(application => {
                                const [day, month, year] = application.job_interviewed_date.split('-').map(Number);
                                const appliedDate = new Date(year, month - 1, day); // months are 0-indexed
                    
                                if (appliedDate >= sevenDaysAgo) {
                                    recentCount++;
                                    console.log('job interview date recent count:,', recentCount)
                                } else {
                                    pastCount++;
                                    console.log('job interview date past count:,', pastCount)
                                }
                            });
                        }

                        if (pastCount === 0) {
                            return recentCount > 0 ? 100 : "N/A";
                        }

                        if (recentCount === 0) {
                            return -100; // Indicate a decrease if no recent applications
                        }

                        return ((recentCount - pastCount) / pastCount) * 100;
                    } else {
                        console.log("User document does not exist.");
                        return 0;
                        
                    }
                } else {
                    console.log("No user is signed in.");
                    return 0;
                    
                }
            } catch (error) {
                console.error("Error fetching trend: ", error);
                return 0;
            }
        },


        async fetchAppliedTrend() {
            const trend = await this.fetchTrend('applied');
            this.applicationsCompleted.trend = trend;
        },

        async fetchInterviewTrend() {
            const trend = await this.fetchTrend('interviewed');
            this.interviewsAttended.trend = trend;
        },

        async fetchIndustryData() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    const userDocRef = doc(db, "Users", user.email);
                    const userDocSnapshot = await getDoc(userDocRef);

                    let industryCounts = {};

                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        const interviewed = userData.applications.interviewed;

                        if (interviewed && typeof interviewed === 'object') {
                            Object.values(interviewed).forEach((job) => {
                                const industry = job.job_industry || 'Others'; //if job_industry is Not Available, reflected as Others in bar chart
                                if (industry) {
                                    industryCounts[industry] = (industryCounts[industry] || 0) + 1;
                                }
                            });
                            this.barChartData = Object.entries(industryCounts).map(([industry, count]) => [industry, count]);
                        } else {
                            console.log("No interviewed jobs or the structure is not as expected.");
                            this.barChartData = [];
                        }
                    } else {
                        console.log("Document does not exist.");
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching industry data: ", error);
            }
        },

        async fetchApplicationProportions() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    const userDocRef = doc(db, "Users", user.email);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const applicationsData = userDocSnapshot.data().applications;
                        const savedCount = Object.keys(applicationsData.saved || {}).length;
                        const appliedCount = Object.keys(applicationsData.applied || {}).length;
                        const interviewedCount = Object.keys(applicationsData.interviewed || {}).length;
                        const totalCount = savedCount + appliedCount + interviewedCount;

                        if (totalCount > 0) {
                            this.applicationsProportions = {
                                Saved: savedCount,
                                Applied: appliedCount,
                                Interviewed: interviewedCount
                            };
                        } else {
                            this.applicationsProportions = {
                                Saved: 0,
                                Applied: 0,
                                Interviewed: 0
                            };
                        }
                    } else {
                        console.log("Document does not exist.");
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching application proportions: ", error);
            }
        },


        async fetchApplicationsPerDay() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;
    
                if (user) {
                    const userDocRef = doc(db, "Users", user.email);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const appliedJobs = userDocSnapshot.data().applications.applied;
                        let applicationsPerDay = {};

                        // Initialize count for each day of the past week
                        let d = new Date();
                        console.log("datee:", d)
                        for (let i = 6; i >= 0; i--) {
                            let date = new Date();
                            date.setDate(date.getDate() - i);
                            let dateString = date.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
                            applicationsPerDay[dateString] = 0;
                        }

                        // Count applications per day
                        Object.values(appliedJobs).forEach((application) => {
                            let [day, month, year] = application.job_applied_date.split('-');

                            // Create a date object at noon UTC to avoid timezone issues
                            let appliedDate = new Date(Date.UTC(year, month - 1, day, 12)); // Month is zero-indexed, so subtract 1
                            let appliedDateString = appliedDate.toISOString().split('T')[0];


                            if (appliedDateString in applicationsPerDay) {
                                applicationsPerDay[appliedDateString]++;
                            }
                        });
                        let chartDataArray = Object.entries(applicationsPerDay).map(([date, count]) => [date, count]);
                        this.lineChartData = chartDataArray;
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching applications per day: ", error);
            }
        },

        async fetchOffersAndInterviews() {
            try {
                const db = getFirestore(firebaseApp);
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    const userDocRef = doc(db, "Users", user.email);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists) {
                        const interviewedDict = userDocSnapshot.data().applications.interviewed;
                        const offersAndInterviewsArray = [];

                        for (const [jobTitle, jobDetails] of Object.entries(interviewedDict)) {
                            offersAndInterviewsArray.push({
                                company: jobDetails.company,
                                role: jobDetails.job_title,
                            });
                        }

                        this.offersAndInterviews = offersAndInterviewsArray;
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching offers and interviews: ", error);
            }
        },

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