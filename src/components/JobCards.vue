<template>

    <v-container style="margin-top: 15px;">
        <v-row>
            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="420px" width="420px">
                    <v-row>
                        <v-col cols="7">
                            <h2 class="title"> Find Jobs ({{ findcount }})</h2>
                        </v-col>

                        <v-col cols="5">
                            <v-row>
                                <v-col cols="4">
                                    <v-btn variant="text" @click="refresh"> <v-icon size="x-large">mdi-refresh</v-icon> </v-btn>
                                </v-col>

                                <v-col cols="8">
                                    <v-btn variant="flat" rounded color="#6381a3" @click="editpreferences"> Edit</v-btn>
                                </v-col>

                            </v-row>
                            
                        </v-col>
                    </v-row>
            

                    <v-sheet
                        class="scrollable-sheet"
                        elevation="0"
                        max-height="320px"
                    >
                        <v-progress-linear v-if="progress" color="primary" indeterminate></v-progress-linear>
                        <main v-for="job in findjobs" :key="job.id" style="margin-top: 10px; border-radius: 20px;">
                            <v-card variant="flat" hover style="margin-left: 5px; margin-right: 15px; border-radius: 10px; background-color:rgb(236, 238, 243);" @click="recordjobdetails(job); this.dialog = true;" opacity="0.9" >
                                <v-card-item style="height: max-content; margin-top: 5px;">
                                    <v-row>
                                        <v-col class="d-flex align-center" cols="2">
                                            <div v-if="job.employer_logo" style="float: left;">
                                                <img :src="job.employer_logo" style="width: 40px; border-radius: 10%;">
                                            </div>
                                            <div v-else style="float: left;">
                                                <img src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 50px; border-radius: 10%;">
                                            </div>
                                        </v-col>
                                        <v-col cols="9">
                                            <div>
                                                <v-card-title style="text-align: left; font-weight: 500;font-size: medium; color: rgb(37, 89, 168);">{{ job["job_title"] }}</v-card-title>
                                                <span style="font-weight: 700; color: rgb(76, 76, 76);">{{ job["company"] }}</span> &mdash; <span style="font-weight: 600; color: rgb(118, 118, 118);">{{ job["job_publisher"] }}</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                                <v-card-actions v-if="check_applied(job)" class="justify-end">
                                    <v-btn variant="flat" disabled>Applied</v-btn>
                                    <v-btn color="blue" variant="tonal" @click="saveapplication(job)">Save</v-btn>
                                </v-card-actions>
                                <v-card-actions v-else class="justify-end">
                                    <v-btn color="blue" variant="tonal" :href="job.job_apply_link" target="_blank" @click.stop="applyapplication(job)">Apply</v-btn>
                                    <v-btn color="blue" variant="tonal" @click.stop ="saveapplication(job)">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                                
                        </main>
                    </v-sheet>
                </v-card>
            </v-col>

            <v-dialog v-model="dialog" width="900px">
                <v-card style="border-radius: 25px; background-color: rgba(213,222,238,255);" >
                    <v-row style="padding: 40px;">
                        <v-col cols = "2" class="d-flex align-center">
                            <img v-if="currentviewedjob.employer_logo" :src="currentviewedjob.employer_logo" style="width: 100px;">
                            <img v-else src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 100px; border-radius: 10%;">
                        </v-col>
                        <v-col cols = "10">
                            <v-row>
                                <h2 style="color: #5D78AD"> {{currentviewedjob["job_title"]}}</h2>
                            </v-row>
                            <v-row>
                                <h2> {{ currentviewedjob["company"] }}</h2>
                            </v-row>
                            <v-row v-if="check_saved(currentviewedjob)" class="d-flex justify-space-between">
                                <v-col cols="2">
                                    <v-btn variant="tonal" color="red"> Unsave </v-btn>
                                    
                                </v-col>

                                <v-col v-if="check_applied(currentviewedjob)" style="margin-left: -15px;" cols ="2">
                                    <v-btn color="red" variant="tonal" @click="unapply(currentviewedjob)"> Unapply</v-btn>
                                </v-col>

                                <v-col>
                                    <v-btn style="margin-left: -10px;" color="#5D78AD" :href="currentviewedjob.job_apply_link" target="_blank" @click="applyapplication(currentviewedjob); dialog = false"> {{ check_applied(currentviewedjob) ? 'Go to job link' : 'Apply' }} </v-btn>
                                </v-col>

                            </v-row>

                            <v-row v-else class="d-flex justify-space-between">
                                <v-col cols="2">
                                    <v-btn style="margin-left: -10px;" color="#5D78AD" @click="saveapplication(currentviewedjob); dialog = false"> Save </v-btn>
                                </v-col>

                                <v-col v-if="check_applied(currentviewedjob)" style="margin-left: -35px;" cols ="2">
                                    <v-btn color="red" variant="tonal" @click="unapply(currentviewedjob)"> Unapply</v-btn>
                                </v-col>

                                <v-col>
                                    <v-btn style="margin-left: -10px;" color="#5D78AD" :href="currentviewedjob.job_apply_link" target="_blank" @click="applyapplication(currentviewedjob); dialog = false"> {{ check_applied(currentviewedjob) ? 'Go to job link' : 'Apply' }} </v-btn>
                                </v-col>

                                

                                
                            </v-row>

                        </v-col>
                    </v-row>
                    <v-card-text class="font-weight-light" style="margin-top: -80px;">
                        <v-container fluid> <br>
                            <v-sheet
                                width="820px"
                                color="#c8d3eb"
                                elevation="0"
                                max-height="320px"
                                style="border-radius: 25px; margin-left: -10px;"
                            >
                                <div style="padding: 20px;">
                                    <v-row style="margin-bottom: -40px;">
                                        <v-col>
                                            <h3> <b style="color: rgb(86, 86, 86);">Job Publisher: </b>{{currentviewedjob["job_publisher"]}}</h3> <br>
                                            <h3> <b style="color: rgb(86, 86, 86);">Location: </b> {{ currentviewedjob["job_city"] ? currentviewedjob["job_city"] : "Not Available"}} </h3> <br>
                                            <h3> <b style="color: rgb(86, 86, 86);">Job employment type: </b> {{ currentviewedjob["job_emptype"] ? currentviewedjob["job_emptype"][0] + currentviewedjob["job_emptype"].slice(1,).toLowerCase() : "Not Available"}} </h3> <br>
                                        </v-col>

                                        <v-col>
                                            <h3> <b style="color: rgb(86, 86, 86);">Industry: </b> {{ currentviewedjob["job_industry"] ? currentviewedjob["job_industry"] : "Not Available"}} </h3> <br>
                                            <h3> <b style="color: rgb(86, 86, 86);">Posted On: </b> {{currentviewedjob["job_posted_date"] ? currentviewedjob["job_posted_date"].slice(0, 10) : "Not Available"}}</h3> <br>
                                            <h3> <b style="color: rgb(86, 86, 86);">Application Deadline: </b> {{currentviewedjob["job_expiry"] ? currentviewedjob["job_expiry"].slice(0,10) : "Not Available"}}</h3>
                                        </v-col>
                                    </v-row>
                                    
                                    
                                </div>

                            </v-sheet>
                            
                            <v-row>
                                <br>
                                <v-sheet
                                    color="#c8d3eb"
                                    class="scrollable-sheet"
                                    elevation="0"
                                    max-height="290px"
                                    style="border-radius: 25px;"
                                >
                                    <div style="padding: 15px;" v-html="currentjobdescription"></div>
                                </v-sheet>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions style="padding: 15px;">
                        <v-spacer></v-spacer>
                            <v-btn variant="tonal" color="blue" text="Close" @click="dialog = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="420px" width="420px">
                    <h2 class="title">Applied ({{ appliedcount }})</h2>
                    <v-sheet
                        class="scrollable-sheet"
                        elevation="0"
                        max-height="320px"
                    >
                        <main v-for="job in appliedjobs" :key="job.id" style="margin-top: 10px; border-radius: 20px;">
                            <v-card variant="flat" hover style="margin-left: 5px; margin-right: 15px; border-radius: 10px; background-color:rgb(236, 238, 243);" @click="recordjobdetails(job); this.applieddialog = true" opacity="0.9" >
                                <v-card-item style="height: max-content; margin-top: 5px;">
                                    <v-row>
                                        <v-col class="d-flex align-center" cols="2">
                                            <div v-if="job.employer_logo" style="float: left;">
                                                <img :src="job.employer_logo" style="width: 40px; border-radius: 10%;">
                                            </div>
                                            <div v-else style="float: left;">
                                                <img src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 50px; border-radius: 10%;">
                                            </div>
                                        </v-col>
                                        <v-col cols="9">
                                            <div>
                                                <v-card-title style="text-align: left; font-weight: 500;font-size: medium; color: rgb(37, 89, 168);">{{ job["job_title"] }}</v-card-title>
                                                <span style="font-weight: 700; color: rgb(76, 76, 76);">{{ job["company"] }}</span> &mdash; <span style="font-weight: 600; color: rgb(118, 118, 118);">{{ job["job_publisher"] }}</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                                <v-card-actions class="justify-end">
                                    <v-btn variant="tonal" color="green" @click.stop="confirminterview(job)"> Confirm Interview </v-btn>
                                    <v-btn variant="flat" disabled> Applied</v-btn>
                                    <v-btn disabled variant="flat">Saved</v-btn>
                                </v-card-actions>
                            </v-card>
                                
                        </main>
                    </v-sheet>

                    <v-dialog v-model="applieddialog" width="900px">
                        <v-card style="border-radius: 25px; background-color: rgba(213,222,238,255);" >
                            <v-row style="padding: 40px;">
                                <v-col cols = "2" class="d-flex align-center">
                                    <img v-if="currentviewedjob.employer_logo" :src="currentviewedjob.employer_logo" style="width: 100px;">
                                    <img v-else src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 100px; border-radius: 10%;">
                                </v-col>
                                <v-col cols = "10">
                                    <v-row>
                                        <h2 style="color: #5D78AD"> {{currentviewedjob["job_title"]}}</h2>
                                    </v-row>
                                    <v-row>
                                        <h2> {{ currentviewedjob["company"] }}</h2>
                                    </v-row>
                                    <v-row class="d-flex justify-space-between">
                                        <v-col style="margin-left: -15px;" cols ="2">
                                            <v-btn color="red" variant="tonal" @click="unapply(currentviewedjob); applieddialog = false"> Unapply</v-btn>
                                        </v-col>

                                        <v-col cols="3">
                                            <v-btn style="margin-left: -10px;" color="#5D78AD" :href="currentviewedjob.job_apply_link" @click="applieddialog = false" target="_blank"> Go to job link </v-btn>
                                        </v-col>

                                        <v-col>
                                            <v-btn style="margin-left: -20px;" variant="tonal" color="green" @click="confirminterview(currentviewedjob); applieddialog = false"> Confirm Interview </v-btn>
                                        </v-col>

                                    </v-row>

                                </v-col>
                            </v-row>
                            <v-card-text class="font-weight-light" style="margin-top: -80px;">
                                <v-container fluid> <br>
                                    <v-sheet
                                        width="820px"
                                        color="#c8d3eb"
                                        elevation="0"
                                        max-height="320px"
                                        style="border-radius: 25px; margin-left: -10px;"
                                    >
                                        <div style="padding: 20px;">
                                            <v-row style="margin-bottom: -40px;">
                                                <v-col>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Job Publisher: </b>{{currentviewedjob["job_publisher"]}}</h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Location: </b> {{ currentviewedjob["job_city"] ? currentviewedjob["job_city"] : "Not Available"}} </h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Job employment type: </b> {{ currentviewedjob["job_emptype"] ? currentviewedjob["job_emptype"][0] + currentviewedjob["job_emptype"].slice(1,).toLowerCase() : "Not Available"}} </h3> <br>
                                                </v-col>

                                                <v-col>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Industry: </b> {{ currentviewedjob["job_industry"] ? currentviewedjob["job_industry"] : "Not Available"}} </h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Posted On: </b> {{currentviewedjob["job_posted_date"] ? currentviewedjob["job_posted_date"].slice(0, 10) : "Not Available"}}</h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Application Deadline: </b> {{currentviewedjob["job_expiry"] ? currentviewedjob["job_expiry"].slice(0,10) : "Not Available"}}</h3>
                                                </v-col>
                                            </v-row>
                                            
                                            
                                        </div>

                                    </v-sheet>
                                    
                                    <v-row>
                                        <br>
                                        <v-sheet
                                            color="#c8d3eb"
                                            class="scrollable-sheet"
                                            elevation="0"
                                            max-height="290px"
                                            style="border-radius: 25px;"
                                        >
                                            <div style="padding: 15px;" v-html="currentjobdescription"></div>
                                        </v-sheet>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions style="padding: 15px;">
                                <v-spacer></v-spacer>
                                    <v-btn variant="tonal" color="blue" text="Close" @click="applieddialog = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="420px" width="420px">
                    <v-row>
                        <v-col cols="5">
                            <h2 class="title">Saved ({{ savedcount }})</h2>
                        </v-col>
                        <v-col cols="7">
                            <v-btn class="expandablebutton" height="32px" color= #6381a3 style="margin-top: 2px; margin-left: -55px;" @click="showSaveJob = true" @mouseover="hover = true" @mouseleave="hover = false">
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
                                                <span> <b>Job Title</b> </span>
                                                <v-text-field label="Enter the Job Title" v-model="job.job_title"></v-text-field>
                                                <span> <b>Company</b> </span>
                                                <v-text-field label="Enter the company's name" v-model="job.company"></v-text-field>
                                                <span> <b>Industry</b> </span>
                                                <v-text-field label="Enter the job listing's industry" v-model="job.job_industry"></v-text-field>
                                                <span> <b>Job Link</b> </span>
                                                <v-text-field label="Enter the job listing link" v-model="job.job_apply_link"></v-text-field>
                                            </div>
                                            <v-card-actions class="justify-end" style="margin-right: -20px;">
                                                <v-btn variant="tonal" @click="showSaveJob = false">Cancel</v-btn>
                                                <v-btn variant="tonal" @click="manualsave(job);">Save</v-btn>
                                            </v-card-actions>
                                            
                                        
                                    </v-card-text>
                                </v-card>
                            </v-dialog>
                        </v-col>
                    </v-row>
                    <v-sheet
                        class="scrollable-sheet"
                        elevation="0"
                        max-height="320px"
                    >
                        <main v-for="job in savedjobs" :key="job.id" style="margin-top: 10px; border-radius: 20px;">
                            <v-card class="jobcard" variant="flat" hover style="margin-left: 5px; margin-right: 15px; border-radius: 10px; background-color:rgb(236, 238, 243);" @click="recordjobdetails(job); this.savedialog=true" opacity="0.9" >
                                <v-card-item style="height: max-content; margin-top: 5px;">
                                    <v-row>
                                        <v-col class="d-flex align-center" cols="2">
                                            <div v-if="job.employer_logo" style="float: left;">
                                                <img :src="job.employer_logo" style="width: 40px; border-radius: 10%;">
                                            </div>
                                            <div v-else style="float: left;">
                                                <img src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 50px; border-radius: 10%;">
                                            </div>
                                        </v-col>
                                        <v-col cols="9">
                                            <div>
                                                <v-card-title style="text-align: left; font-weight: 500;font-size: medium; color: rgb(37, 89, 168);">{{ job["job_title"] }}</v-card-title>
                                                <span style="font-weight: 700; color: rgb(76, 76, 76);">{{ job["company"] }}</span> &mdash; <span style="font-weight: 600; color: rgb(118, 118, 118);">{{ job["job_publisher"] }}</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                                <v-card-actions v-if="check_applied(job)" class="justify-end">
                                    <v-btn variant="flat" disabled> Applied</v-btn>
                                    <v-btn color="red" variant="tonal">Unsave</v-btn>
                                </v-card-actions>
                                <v-card-actions v-else class="justify-end">
                                    <v-btn color="blue" variant="tonal" :href="job.job_apply_link" target="_blank" @click.stop="applyapplication(job)">Apply</v-btn>
                                    <v-btn color="red" variant="tonal" @click.stop="unsave(job)">Unsave</v-btn>
                                </v-card-actions>
                            </v-card>
                                
                        </main>
                    </v-sheet>

                    <v-dialog v-model="savedialog" width="900px">
                        <v-card style="border-radius: 25px; background-color: rgba(213,222,238,255);" >
                            <v-row style="padding: 40px;">
                                <v-col cols = "2" class="d-flex align-center">
                                    <img v-if="currentviewedjob.employer_logo" :src="currentviewedjob.employer_logo" style="width: 100px;">
                                    <img v-else src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 100px; border-radius: 10%;">
                                </v-col>
                                <v-col cols = "10">
                                    <v-row>
                                        <h2 style="color: #5D78AD"> {{currentviewedjob["job_title"]}}</h2>
                                    </v-row>
                                    <v-row>
                                        <h2> {{ currentviewedjob["company"] }}</h2>
                                    </v-row>
                                    <v-row class="d-flex justify-space-between">
                                        <v-col style="margin-right: -15px;" cols="2">
                                            <v-btn style="margin-left: -10px;" color="red" variant="tonal"  @click="savedialog = false" > Unsave </v-btn>
                                        </v-col>

                                        <v-col>
                                            <v-btn color="#5D78AD" :href="currentviewedjob.job_apply_link" target="_blank" @click="applyapplication(currentviewedjob); savedialog = false"> Apply</v-btn>
                                        </v-col>

                                    </v-row>

                                </v-col>
                            </v-row>
                            <v-card-text class="font-weight-light" style="margin-top: -80px;">
                                <v-container fluid> <br>
                                    <v-sheet
                                        width="820px"
                                        color="#c8d3eb"
                                        elevation="0"
                                        max-height="320px"
                                        style="border-radius: 25px; margin-left: -10px;"
                                    >
                                        <div style="padding: 20px;">
                                            <v-row style="margin-bottom: -40px;">
                                                <v-col>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Job Publisher: </b>{{currentviewedjob["job_publisher"]}}</h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Location: </b> {{ currentviewedjob["job_city"] ? currentviewedjob["job_city"] : "Not Available"}} </h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Job employment type: </b> {{ currentviewedjob["job_emptype"] ? currentviewedjob["job_emptype"][0] + currentviewedjob["job_emptype"].slice(1,).toLowerCase() : "Not Available"}} </h3> <br>
                                                </v-col>

                                                <v-col>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Industry: </b> {{ currentviewedjob["job_industry"] ? currentviewedjob["job_industry"] : "Not Available"}} </h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Posted On: </b> {{currentviewedjob["job_posted_date"] ? currentviewedjob["job_posted_date"].slice(0, 10) : "Not Available"}}</h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Application Deadline: </b> {{currentviewedjob["job_expiry"] ? currentviewedjob["job_expiry"].slice(0,10) : "Not Available"}}</h3>
                                                </v-col>
                                            </v-row>
                                            
                                            
                                        </div>

                                    </v-sheet>
                                    
                                    <v-row>
                                        <br>
                                        <v-sheet
                                            color="#c8d3eb"
                                            class="scrollable-sheet"
                                            elevation="0"
                                            max-height="290px"
                                            style="border-radius: 25px;"
                                        >
                                            <div style="padding: 15px;" v-html="currentjobdescription"></div>
                                        </v-sheet>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions style="padding: 15px;">
                                <v-spacer></v-spacer>
                                    <v-btn variant="tonal" color="blue" text="Close" @click="savedialog = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-col>

            <v-col>
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="420px" width="420px">
                    <h2 class="title">Interviewed ({{ interviewedcount }})</h2>
                    <v-sheet
                        class="scrollable-sheet"
                        elevation="0"
                        max-height="320px"
                    >
                        <main v-for="job in interviewedjobs" :key="job.id" style="margin-top: 10px; border-radius: 20px;">
                            <v-card variant="flat" hover style="margin-left: 5px; margin-right: 15px; border-radius: 10px; background-color:rgb(236, 238, 243);" @click="recordjobdetails(job); interviewdialog = true" opacity="0.9" >
                                <v-card-item style="height: max-content; margin-top: 5px;">
                                    <v-row>
                                        <v-col class="d-flex align-center" cols="2">
                                            <div v-if="job.employer_logo" style="float: left;">
                                                <img :src="job.employer_logo" style="width: 40px; border-radius: 10%;">
                                            </div>
                                            <div v-else style="float: left;">
                                                <img src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 50px; border-radius: 10%;">
                                            </div>
                                        </v-col>
                                        <v-col cols="9">
                                            <div>
                                                <v-card-title style="text-align: left; font-weight: 500;font-size: medium; color: rgb(37, 89, 168);">{{ job["job_title"] }}</v-card-title>
                                                <span style="font-weight: 700; color: rgb(76, 76, 76);">{{ job["company"] }}</span> &mdash; <span style="font-weight: 600; color: rgb(118, 118, 118);">{{ job["job_publisher"] }}</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                                <v-card-actions class="justify-end">
                                    <v-btn variant="flat" disabled> Interviewed</v-btn>
                                </v-card-actions>
                            </v-card>
                                
                        </main>
                    </v-sheet>

                    <v-dialog v-model="interviewdialog" width="900px">
                        <v-card style="border-radius: 25px; background-color: rgba(213,222,238,255);" >
                            <v-row style="padding: 40px;">
                                <v-col cols = "2" class="d-flex align-center">
                                    <img v-if="currentviewedjob.employer_logo" :src="currentviewedjob.employer_logo" style="width: 100px;">
                                    <img v-else src="@/assets/notavailable.png" alt="@/assets/notavailable.png" style="width: 100px; border-radius: 10%;">
                                </v-col>
                                <v-col cols = "10">
                                    <v-row>
                                        <h2 style="color: #5D78AD"> {{currentviewedjob["job_title"]}}</h2>
                                    </v-row>
                                    <v-row>
                                        <h2> {{ currentviewedjob["company"] }}</h2>
                                    </v-row>
                                    <v-row class="d-flex justify-space-between">
                                        <v-col cols="3">
                                            <v-btn style="margin-left: -10px;" color="#5D78AD" :href="currentviewedjob.job_apply_link" target="_blank"> Go to job link </v-btn>
                                        </v-col>

                                        <v-col>
                                            <v-btn style="margin-left: -20px;" variant="tonal" color="red" @click="cancelinterview(currentviewedjob); this.interviewdialog = false"> Remove Interview </v-btn>
                                        </v-col>

                                    </v-row>

                                </v-col>
                            </v-row>
                            <v-card-text class="font-weight-light" style="margin-top: -80px;">
                                <v-container fluid> <br>
                                    <v-sheet
                                        width="820px"
                                        color="#c8d3eb"
                                        elevation="0"
                                        max-height="320px"
                                        style="border-radius: 25px; margin-left: -10px;"
                                    >
                                        <div style="padding: 20px;">
                                            <v-row style="margin-bottom: -40px;">
                                                <v-col>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Job Publisher: </b>{{currentviewedjob["job_publisher"]}}</h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Location: </b> {{ currentviewedjob["job_city"] ? currentviewedjob["job_city"] : "Not Available"}} </h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Job employment type: </b> {{ currentviewedjob["job_emptype"] ? currentviewedjob["job_emptype"][0] + currentviewedjob["job_emptype"].slice(1,).toLowerCase() : "Not Available"}} </h3> <br>
                                                </v-col>

                                                <v-col>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Industry: </b> {{ currentviewedjob["job_industry"] ? currentviewedjob["job_industry"] : "Not Available"}} </h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Posted On: </b> {{currentviewedjob["job_posted_date"] ? currentviewedjob["job_posted_date"].slice(0, 10) : "Not Available"}}</h3> <br>
                                                    <h3> <b style="color: rgb(86, 86, 86);">Application Deadline: </b> {{currentviewedjob["job_expiry"] ? currentviewedjob["job_expiry"].slice(0,10) : "Not Available"}}</h3>
                                                </v-col>
                                            </v-row>
                                            
                                            
                                        </div>

                                    </v-sheet>
                                    
                                    <v-row>
                                        <br>
                                        <v-sheet
                                            color="#c8d3eb"
                                            class="scrollable-sheet"
                                            elevation="0"
                                            max-height="290px"
                                            style="border-radius: 25px;"
                                        >
                                            <div style="padding: 15px;" v-html="currentjobdescription"></div>
                                        </v-sheet>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions style="padding: 15px;">
                                <v-spacer></v-spacer>
                                    <v-btn variant="tonal" color="blue" text="Close" @click="interviewdialog = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-col>

        </v-row> 

        <v-snackbar location="top" color="green" v-model="showsaved" :timeout="2000" elevation="24" width="400px">
            You have successfully saved this job listing.
        </v-snackbar>

        <v-snackbar location="top" color="green" v-model="showapplied" :timeout="2000" elevation="24" width="400px">
            You have successfully applied for this job.
        </v-snackbar>

        <v-snackbar location="top" color="green" v-model="showinterviewed" :timeout="2000" elevation="24" width="400px">
            You have successfully interviewed for this job.
        </v-snackbar>

        <v-snackbar location="top" color="red" v-model="showunsaved" :timeout="2000" elevation="24" width="400px">
            You have successfully unsaved this job listing.
        </v-snackbar>

        <v-snackbar location="top" color="red" v-model="showunapplied" :timeout="2000" elevation="24" width="400px">
            You have successfully unapplied for this job.
        </v-snackbar>

        <v-snackbar location="top" color="red" v-model="showremovedinterview" :timeout="2000" elevation="24" width="400px">
            You have successfully removed the interview for this job.
        </v-snackbar>

        <v-snackbar location="top" color="green" v-model="manualsuccess" :timeout="2000" elevation="24" width="400px">
            You have successfully saved this job listing.
        </v-snackbar>

        <v-snackbar location="top" color="red" v-model="manualfailure" :timeout="2000" elevation="24" width="400px">
            Invalid job listing. Please make sure all required text fields are completed
        </v-snackbar>

    </v-container>
    
</template>

<script>
import { getFirestore, doc, setDoc, getDoc, onSnapshot, updateDoc, deleteField} from "firebase/firestore";
import firebaseApp from "@/firebase";
import {getAuth} from 'firebase/auth';
import gsap from 'gsap'
import {RetrieveJobs} from '@/jsearch.js';

const db = getFirestore(firebaseApp);
const auth = getAuth();
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currdate = `${day}-${month}-${year}`;


export default {
    data() {
        return {
            manualsuccess: null,
            manualfailure: null,
            showsaved: null,
            showapplied: null,
            showinterviewed: null,
            showunsaved: null,
            showunapplied: null,
            showremovedinterview: null,
            progress: false,
            findcount: null,
            appliedcount: null,
            savedcount: null,
            interviewedcount: null,
            findjobs: null,
            appliedjobs: null,
            savedjobs: null,
            interviewedjobs: null,
            dialog: false,
            applieddialog: false,
            interviewdialog: false,
            savedialog: false,
            currentviewedjob: null,
            currentjobindustry: null,
            currentjoblink: null,
            currentgooglelink: null,
            currentjobdescription: null,
            hover: false,
            showSaveJob: false,
            generatedimage: null,
            job: {
                job_title: '',
                company: '',
                job_apply_link: '',
                job_industry: ''
            }
        }
    },
    async mounted() {
        onSnapshot(doc(db, 'Users', String(auth.currentUser.email)), doc => {
            let applications = doc.data().applications;

            this.findjobs = this.sortJobsByTitle(applications.FindJobs);

            this.appliedjobs = this.sortJobsByTitle(applications.applied);
            this.savedjobs = this.sortJobsByTitle(applications.saved);
            this.interviewedjobs = this.sortJobsByTitle(applications.interviewed);

            const findjobs_object = {}

            // for (const job in applications.FindJobs) {
            //     console.log(job)
            //     const id = applications.FindJobs[job]["job_id"] 
            //     findjobs_object[id] = applications.FindJobs[job]
            // }

            // console.log("dic", findjobs_object)

            // this.findjobs = this.sortJobsByTitle(findjobs_object)

            
            this.findcount = this.findjobs.length;
            this.appliedcount = this.appliedjobs.length;
            this.savedcount = this.savedjobs.length;
            this.interviewedcount = this.interviewedjobs.length;
        })
        
    },

    emits:["datadata"],


    methods : {
        sortJobsByTitle(jobsObject) {
            let jobsArray = Object.values(jobsObject || {});

            jobsArray.sort((a, b) => {
                let titleA = a.job_title.toUpperCase(); 
                let titleB = b.job_title.toUpperCase(); 
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }

                return 0;
            });

            return jobsArray;
        },

        async refresh() {
            const docref = doc(db, 'Users', String(auth.currentUser.email))
            const preferencesref = await getDoc(docref)
            const preferences = preferencesref.data()['jobpreferences']

            const list = []
            for (const portal in preferences["jobportals"].split(",")) {
                list.push(preferences["jobportals"].split(",")[portal])
            }

            const updatedfindjobs = await RetrieveJobs(preferences["jobtitle"], preferences["emptypes"], list)
            await updateDoc(docref, {'applications.FindJobs' : updatedfindjobs})

        },
        check_saved(job) {
            const jobtitle = job["job_title"] + job["company"]
            return jobtitle in this.savedjobs
        },

        check_applied(job) {
            const jobtitle = job["job_title"] + job["company"]
            return jobtitle in this.appliedjobs
        },

        async applyapplication(job) {
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            let id = job["job_id"]

            if (id == null) {
                id = job.job_title + job.company
            }

            await updateDoc(docref, {[`applications.FindJobs.${id}`] : deleteField()})
            await updateDoc(docref, {[`applications.saved.${id}`] : deleteField()})


            await setDoc(docref, {applications : {applied : {[id] : job}}}, {merge: true})
            await setDoc(docref, {applications : {applied : {[id] : {job_applied_date : currdate}}}}, {merge: true})
            this.showapplied = true
        },

        async saveapplication(job) {
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            const id = job["job_id"]
            await setDoc(docref, {applications : {saved : {[id] : job}}}, {merge: true})
            await setDoc(docref, {applications : {saved : {[id] : {job_saved_date : currdate}}}}, {merge: true})
            await updateDoc(docref, {[`applications.FindJobs.${id}`] : deleteField()})
            this.showsaved = true
        },
        
        async manualsave(job) {
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            const id = job["job_title"] + job["company"]
            job.job_publisher = "Manual"
            if (job.job_title && job.company && job.job_industry && job.job_apply_link) {
                await setDoc(docref, {applications : {saved : {[id] : job}}}, {merge: true})
                await setDoc(docref, {applications : {saved : {[id] : {job_saved_date : currdate}}}}, {merge: true})
                this.showSaveJob = false
                this.manualsuccess = true
            }
            else {
                this.manualfailure = true
            }
            

        },
        
        async confirminterview(job) {
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            const id = job["job_id"]
            await setDoc(docref, {applications : {interviewed : {[id] : job}}}, {merge: true})
            await setDoc(docref, {applications : {interviewed : {[id] : {job_interviewed_date : currdate}}}}, {merge: true})
            await updateDoc(docref, {[`applications.applied.${id}`] : deleteField()})
            this.showinterviewed = true
        }, 

        async unsave(job) {
            this.dialog = false
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            let id = job["job_id"]
            if (id == null) {
                id = job.job_title + job.company
            }
            await updateDoc(docref, {[`applications.saved.${id}`] : deleteField()})
            await setDoc(docref, {applications : {FindJobs : {[id] : job}}}, {merge: true})
            this.showunsaved = true
            

        },

        async unapply(job) {
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            let id = job["job_id"]

            if (id == null) {
                id = job.job_title + job.company
            }
            await updateDoc(docref, {[`applications.applied.${id}`] : deleteField()})
            await setDoc(docref, {applications : {saved : {[id] : job}}}, {merge: true})
            this.showunapplied = true
        },

        async cancelinterview(job) {
            const docref = doc(db, 'Users', String(auth.currentUser.email));
            const id = job["job_id"]
            await updateDoc(docref, {[`applications.interviewed.${id}`] : deleteField()})
            await setDoc(docref, {applications : {applied : {[id] : job}}}, {merge: true})
            this.showremovedinterview = true
        },

        async editpreferences() {
            this.$emit("datadata", true)
            this.progress = true
            await new Promise(resolve => setTimeout(resolve, 15000));
            this.progress = false
        },

        recordjobdetails(job) {
            this.currentviewedjob = job
            this.currentjobindustry = this.currentviewedjob["job_industry"]
            this.currentjoblink = this.currentviewedjob["job_apply_link"]
            this.currentjobdescription = this.currentviewedjob["job_description"] ? this.currentviewedjob["job_description"].split("\n").map(paragraph => `<p>${paragraph.replace(/\n/, '<br>')}</p>`).join('<br>')
                                            : ""

        },
    }
}
</script>

<style scoped>
* {
    font-family: "K2D", sans-serif;
    font-style: normal;
}

.scrollable-sheet {
  overflow-y: auto; /* Enables vertical scrolling */
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

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
    border-radius: 20px;
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

h3 {
    color: #5D78AD;
    font-weight: 600;
    font-size: medium;
}


</style>
