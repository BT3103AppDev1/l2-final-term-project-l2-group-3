<template>
  <v-app class="custom-bg">
    <v-row class="rounded rounded-md">
        <Header />
        <SideBar />
    </v-row>

    <v-row class="view" style="margin-left: 50px; height: 100%; margin-top: 50px;">
      <v-card height="100%" style="margin-top: 12px; margin-left: 12px; background-color: #eff1f7;" variant="flat">
        <h1 style="color:rgb(39, 37, 37); font-weight: 500; padding: 25px;"> Account Settings</h1>
        <v-tabs
          style="margin-left: 25px; opacity: 0.8;"
          v-model="tab"
          bg-color="#eff1f7"
          color="#244d7b"
        >
          <v-tab value="one" class="text-none">User Account</v-tab>
          <v-tab value="two" class="text-none">Job Applications</v-tab>
          <v-tab value="three" class="text-none">Notifications</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-container>
              <br><br>
              <v-row>
                <v-col xl="8" lg="8" md="8">
                    <v-card style="border-radius: 15px; " color="#ffffff" height="max-content" max-width="1900px" >
                      <v-row>
                        <v-col>
                          <h2 style="color:rgb(41, 40, 40); padding: 25px; margin-bottom: -10px;">Account Details</h2>
                          <h3 style="color: rgb(122, 120, 120); font-weight: 400; margin-left: 25px; margin-right: 25px;">The following are your account details. Your name and email cannot be changed upon creation of your account.</h3>
                        </v-col>
                      </v-row>

                    <v-row align="start" justify="start" style="margin-left: 15px;margin-top: 40px;">
                      <v-col xl="1" lg="2" md="3">
                          <v-avatar color="surface-variant" size="120">
                              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>    
                          </v-avatar>
                      </v-col>

                    
                      <v-col xl="11" lg="10" md="9">
                          <h2 style="margin-bottom: 20px; margin-top: 20px; color: rgb(80, 76, 76);"> Sandra Adams </h2>
                          <v-btn class="text-none" style="margin-right: 10px; color: #5da8ff;" variant="tonal">Upload Profile Photo</v-btn>
                          <v-btn variant="outlined" class="text-none" color="red">Delete</v-btn>
                      </v-col>                    

                      <v-spacer></v-spacer>
                        
                    </v-row><br><br>

                    <v-row style="margin-left: 10px;">
                      <v-col cols="4">
                        <h3 style="color: rgb(92, 85, 85); padding: 5px;"> <b>First Name</b></h3>
                        <v-text-field model-value="Shashank" disabled variant="outlined" density="compact"></v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <h3 style="color: rgb(92, 85, 85); padding: 5px;"> <b>Last Name</b></h3>
                        <v-text-field model-value="Shekhar" disabled variant="outlined" density="compact"></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row style="margin-left: 10px; margin-top: -20px;">
                      <v-col cols="8" sm="4">
                        <h3 style="color: rgb(92, 85, 85); padding: 5px;"> <b>Email</b></h3>
                        <v-text-field model-value="shashank@gmail.com" disabled variant="outlined" density="compact"></v-text-field>
                        
                      </v-col>

                    </v-row>
              </v-card>
            </v-col>

            <v-col xl="4" lg="4" md="4">
              <v-row>
                <v-card style="border-radius: 15px;margin-top: 12px; " color="#ffffff" height="max-content" max-width="1900px" >
                  <v-row justify="center" align-content="center" >
                    <v-col>
                      
                      <h2 style="padding: 10px; color:rgb(41, 40, 40); padding: 20px; margin-bottom: -20px;">Change Password</h2>
                    </v-col>
                    
                    <v-col cols="12">
                      <h3 style="color: rgb(122, 120, 120); font-weight: 400; margin-left: 20px; margin-right: 20px; margin-bottom: 20px;">Your password should contain at least 8 characters, one uppercase and one special character.</h3>
                    </v-col>
                        
                    <v-col cols="12" class="d-flex justify-center" style="margin-top: -10px; margin-bottom: 20px;">
                      <v-btn  text="Change Password" @click="showEditPasswordModal = true" class="text-none" style="width: 300px; color: #5da8ff" variant="tonal"></v-btn>
                        <v-dialog v-model="showEditPasswordModal" persistent max-width="600px">
                          <v-card>
                            <v-card-title>
                              Change Password
                            </v-card-title>
                            <v-card-text>
                              <v-form ref="form" v-model="valid">
                                <v-text-field
                                  label="Old Password"
                                  v-model="oldPassword"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="showPassword ? 'text' : 'password'"
                                  @click:append="showPassword = !showPassword"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  label="New Password"
                                  v-model="newPassword"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="showPassword ? 'text' : 'password'"
                                  @click:append="showPassword = !showPassword"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  label="Confirm New Password"
                                  v-model="confirmNewPassword"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="showPassword ? 'text' : 'password'"
                                  @click:append="showPassword = !showPassword"
                                  required
                                ></v-text-field>
                              </v-form>
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="green darken-1" text @click="validatePasswordChange">Change</v-btn>
                              <v-btn color="green darken-1" text @click="showEditPasswordModal = false">Cancel</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      
                    </v-col>
                  </v-row>
                </v-card>

                <v-card style="border-radius: 15px; margin-top: 20px; " color="#ffffff" height="max-content" max-width="1900px" > 
                  <v-row justify="center" align-content="center" >
                    <v-col cols="12">
                      <h2 style="padding: 10px; color:rgb(41, 40, 40); padding: 20px;">Delete Account</h2>
                    </v-col>
                    <v-col cols="12" style="margin-top: -40px;">
                      <h3 style="color: rgb(122, 120, 120); font-weight: 400; padding: 20px;">You can permanently delete your account. This action is irreversible.</h3>
                    </v-col>
                    <v-col cols=12 class="d-flex justify-center align-center" style="margin-bottom: 20px; margin-top: -10px">
                      <v-btn  text="Delete Account" class="text-none" style="width: 300px; color: red" variant="tonal"></v-btn>
                    </v-col>
                    </v-row>
                </v-card>


              </v-row>

            </v-col>
            </v-row>
          </v-container>
          </v-window-item>

            <v-window-item value="two">
              <v-container>
                <v-card style="border-radius: 30px; " color="#B0BECA" height="300px" >
                  <v-row>
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-left: 10px;">Sync Job Listings From</h2>
                        <hr>
                      </v-col>
                  </v-row>
                  

                <v-row class="mt-n0 mb-n10"> <!-- Add bottom margin for spacing -->
                    <v-col cols="6" class="d-flex align-self-center justify-start"> <!-- Place text on the end(right) for LTR languages -->
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Linkedin</b></h3>
                    </v-col>
                    <v-col cols="6" class="d-flex align-self-center justify-end">
                      <v-switch inset color="success" value="success" v-model="syncLinkedin" style="margin-right: 20px;"></v-switch> <!-- properly define vmodel for switch to be toggled -->
                    </v-col>
                  </v-row>

                  <v-row class="mt-n0 mb-n10">
                    <v-col cols="6" class="d-flex align-self-center justify-start">
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Indeed</b></h3>
                    </v-col>
                  
                    <v-col cols="6" class="d-flex align-self-center justify-end">
                      <v-switch inset color="success" value="success" v-model="syncIndeed" style="margin-right: 20px;"></v-switch>
                    </v-col>
                  </v-row>
                </v-card><br>

                <v-card style="border-radius: 30px; " color="#B0BECA" height="150px" >
                  <v-row>
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-left: 10px;">Progress</h2>
                        <hr>
                      </v-col>
                  </v-row>
                  
                  <v-row>
                    <v-col class="my-2">
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Daily Application Goal</b></h3>
                    </v-col>
                  
                    <v-col>
                      <v-radio-group v-model="dailyGoal" row class="radio-group" inline>
                        <v-radio label="5" value="5"></v-radio>
                        <v-radio label="10" value="10"></v-radio>
                        <v-radio label="20" value="20"></v-radio>
                        <v-radio label="Custom" value="radio-4"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-card><br>
              </v-container>
            </v-window-item>

            <v-window-item value="three">
              <v-container>
                <v-card style="border-radius: 30px; " color="#B0BECA" height="250px" >

                  <v-row>
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-left: 10px;">Reminders</h2>
                        <hr>
                      </v-col>
                  </v-row>

                  <v-row class="mt-n0 mb-n10">
                    <v-col cols="12" sm="3" class="d-flex align-center justify-start">
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Microsoft Outlook</b></h3>
                    </v-col>
                    
                    <v-col cols="12" sm="9" class="d-flex align-center justify-end">
                      <v-switch inset color="success" value="success" v-model="remindOutlook" style="margin-right: 20px;"></v-switch>
                    </v-col>
                  </v-row>

                  <v-row class="mt-n0 mb-n10">
                    <v-col cols="12" sm="3" class="d-flex align-center justify-start">
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Telegram</b></h3>
                    </v-col>
                    <v-col cols="12" sm="9" class="d-flex align-center justify-end">
                      <v-switch inset color="success" value="success" v-model="remindTelegram" style="margin-right: 20px;"></v-switch>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-row>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    userEmail: 'user@example.com',
    syncLinkedin: false,
    syncIndeed: false,
    dailyGoal: '10',
    remindOutlook: false,
    remindTelegram: false,
    showEditPasswordModal: false,
    valid: true,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    showPassword: false
  }),
  methods: {
    validatePasswordChange() {
      if (!this.$refs.form.validate()) {
        return;
      }
      if (this.newPassword !== this.confirmNewPassword) {
        this.$refs.form.reset();
        this.$refs.form.resetValidation();
        alert("New passwords must match.");
        return;
      }
      // Process password change logic here
      // For example, send a request to your API to change the password
      this.showEditPasswordModal = false;
  }
 }
}
</script>


<style>
.dashboardpage {
  align-self: flex-start !important;
  max-width: none !important;
  width: 100%;
  height: 100%;
  
}

.dashboardpage .title {
    text-align: left !important;
}

.custom-email-field, .passwordfield {
  margin-top: 20px;
  border-radius: 4px; /* Rounded corners */
  max-width: 250px;
  height: 20px;
}

.dashboardpage .label {
    display: flex;
    align-items: center;
}


.dashboardpage .radio-group {
    margin-left: 300px;
}

.dashboardpage .edit-password-btn {
  background: none !important; /* Removes background */
  border: none !important; /* Removes border */
  box-shadow: none !important; /* Removes shadow if any */
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: pink;
  padding-top: 0;
}


</style>
