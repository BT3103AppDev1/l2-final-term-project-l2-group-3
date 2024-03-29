<template>
  <v-app class="custom-bg">
    <v-row class="rounded rounded-md">
        <Header />
        <SideBar />
    </v-row>

    <v-row class="view" style="margin-left: 50px; height: 100%; margin-top: 50px;">
      <v-card height="100%" style="margin-top: 12px; margin-left: 12px; background-color: #eff1f7;" variant="flat">
        <h1 style="color:rgb(39, 37, 37); font-weight: 500; padding: 50px; margin-left: -20px;"> Account Settings</h1>
        <v-tabs
          style="margin-left: 25px; margin-top: -50px; opacity: 0.8;"
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
            <v-window-item value="one" style="width: 1300px;">
              <v-container style="width: 100%;">
              <br><br>
              <v-row style="margin-top: -50px;">
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
                              <!--<v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>-->
                              <v-img :src="profileImageUrl"></v-img>     
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
                <v-card style="border-radius: 15px;margin-top: 12px; " color="#ffffff" height="max-content" width="700px" >
                  <v-row justify="center" align-content="center" >
                    <v-col>
                      
                      <h2 style="padding: 10px; color:rgb(41, 40, 40); padding: 20px; margin-bottom: -20px;">Change or Reset Password</h2>
                    </v-col>
                    
                    <v-col cols="12">
                      <h3 style="color: rgb(122, 120, 120); font-weight: 400; margin-left: 20px; margin-right: 20px; margin-bottom: 20px;">Your password should contain at least 8 characters, one uppercase and one special character.</h3>
                    </v-col>
                        
                    <v-col cols="12" class="d-flex justify-center" style="margin-top: -10px; margin-bottom: 20px;">
                      <v-row class="d-flex justify-space">
                        <v-col cols="auto" style="margin-left: 30px;">
                          <v-btn  text="Change Password" @click="showEditPasswordModal = true" class="text-none" style="width: 150px; color: #5da8ff" variant="tonal"></v-btn>
                        </v-col>

                        <v-col cols="auto">
                          <v-btn  text="Reset Password" @click="showResetPasswordModal = true" class="text-none" style="width: 150px; color: #5da8ff" variant="tonal"></v-btn>
                        </v-col>
                      </v-row>
                      <v-dialog max-width="500" v-model="showResetPasswordModal">
                          <v-card title="Reset Password">
                            <v-card-text>A password reset email will be sent to your registered email. Would you like to proceed?</v-card-text>
                            
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn text="Yes" 
                                @click=" sendEmail(); showResetPasswordModal = false;"
                                color="blue"
                                variant="tonal"
                              ></v-btn>

                              <v-btn text="Cancel" 
                                @click="showResetPasswordModal = false"
                                color="grey"
                                variant="tonal"
                              ></v-btn>
                            </v-card-actions>
                          </v-card>  
                      </v-dialog>
                    
                    <v-dialog v-model="confirmationdialog" width="auto">
                      <v-card title="Reset password" class="d-flex text-wrap" width="550px" height="180px">
                        <v-card-subtitle style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px; font-size: medium ;"> A reset password link is sent to the email you have indicated,<br> please check your junk if you do not see the email in your inbox.</v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn class="text-none" color="blue" variant="tonal" text="Close" @click="confirmationdialog=false"></v-btn>
                        </v-card-actions>
                      </v-card>

                    </v-dialog>
                      
                      
                        <v-dialog v-model="showEditPasswordModal" persistent max-width="600px">
                          <v-card>
                            <v-card-title>
                              Change Password
                            </v-card-title>
                            <v-card-text>
                              <v-form ref="form" v-model="valid">
                                <v-text-field
                                  style="margin-left: 50px; margin-right: 50px;"
                                  label="Old Password"
                                  v-model="oldPassword"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="showPassword ? 'text' : 'password'"
                                  @click:append="showPassword = !showPassword"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  style="margin-left: 50px; margin-right: 50px;"
                                  label="New Password"
                                  v-model="newPassword"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="showPassword ? 'text' : 'password'"
                                  @click:append="showPassword = !showPassword"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  style="margin-left: 50px; margin-right: 50px;"
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
                              <v-btn color="green darken-1" text @click="showEditPasswordModal = false">Cancel</v-btn>
                              <v-btn color="green darken-1" text @click="validatePasswordChange">Change</v-btn>
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

                      <v-btn  @click="showDeleteConfirmation = true" text="Delete Account" class="text-none" style="width: 300px; color: red" variant="tonal"></v-btn>
                      <v-dialog v-model="showDeleteConfirmation" persistent max-width="400px">
                      <v-card>
                        <v-card-title class="text-h6">Confirm Account Deletion</v-card-title>
                        <v-card-text>Are you sure you want to permanently delete your account? This action cannot be undone.</v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="green darken-1" text @click="showDeleteConfirmation = false">Cancel</v-btn>
                          <v-btn color="red darken-1" text @click="deleteUserAccount">Delete</v-btn>
                        </v-card-actions>
                      </v-card>
                      </v-dialog>



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
                <v-card style="border-radius: 30px; width: 1000px;" color="#ffffff" height="300px" >
                  <v-row style="width: 100%;">
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-top: 10px; margin-left: 10px;">Sync Job Listings</h2>
                        <h3 style="padding: 10px; color: rgb(80, 77, 77); font-weight: 400; margin-left: 10px;"> Enable to automatically import job listings from each platform </h3>
                        <hr>
                      </v-col>
                  </v-row>
                  

                  <v-row align="center" class="mt-n0 mb-n10">

                    <v-col cols="6" class="d-flex align-self-center justify-start">
                      <v-icon style="margin-left: 20px;" color=rgb(10,102,194)>mdi-linkedin</v-icon>
                      <h3 class="switch-label" style="margin-left: 5px;"><b>Linkedin</b></h3>
                    </v-col>

                    <v-col cols="6" class="d-flex align-self-center justify-end">
                      <v-switch inset color="success" value="success" v-model="syncLinkedin" style="margin-right: 20px;"></v-switch> <!-- properly define vmodel for switch to be toggled -->
                    </v-col>
                  </v-row>

                  <v-row class="mt-n0 mb-n10">
                    <v-col cols="6" class="d-flex align-self-center justify-start">
                      <v-list-item-icon style="margin-left: 20px;">
                        <indeed-logo />
                      </v-list-item-icon>
                      <h3 class="switch-label" style="margin-left: 5px;"><b>Indeed</b></h3>
                    </v-col>
                  
                    <v-col cols="6" class="d-flex align-self-center justify-end">
                      <v-switch inset color="success" value="success" v-model="syncIndeed" style="margin-right: 20px;"></v-switch>
                    </v-col>
                  </v-row>
                </v-card><br>

                <v-card style="border-radius: 30px; " color="ffffff" height="165px" >
                  <v-row>
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-top: 10px; margin-left: 10px;">Progress</h2>
                        <h3 style="padding: 10px; color: rgb(80, 77, 77); font-weight: 400; margin-left: 10px;"> Set your daily application goal to track your progress  </h3>
                        <hr>
                      </v-col>
                  </v-row>
                  
                  <v-row class="my-2" justify="space-between">
                    <v-col cols="auto">
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Daily Application Goal</b></h3>
                    </v-col>
                    
                  
                    <v-col cols="auto"> 
                      <v-radio-group v-model="dailyGoal" @change="handleRadioChange" row class="radio-group" inline color="indigo-darken-3">
                        <v-radio label="5" value="5"></v-radio>
                        <v-radio label="10" value="10"></v-radio>
                        <v-radio label="20" value="20"></v-radio>
                        <v-radio :label="customLabel" value="custom"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>

                  <!-- Dialog for custom goal input -->
                  <v-dialog v-model="showCustomDialog" persistent max-width="290">
                    <v-card>
                      <v-card-title>Enter Custom Goal</v-card-title>
                        <v-card-text>
                          <v-text-field v-model="inputCustomGoal" label="Custom Goal" type="number"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="blue darken-1" text @click="closeCustomDialog">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="submitCustomGoal">Ok</v-btn>
                        </v-card-actions>
                    </v-card>
                  </v-dialog>

                </v-card><br>
              </v-container>
            </v-window-item>

            <!-- window 3-->

            <v-window-item value="three">
              <v-container>
                <v-card style="border-radius: 30px; width: 1000px; " color="ffffff" height="260px" >

                  <v-row>
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-top: 10px; margin-left: 10px;">Reminders</h2>
                        <h3 style="padding: 10px; color: rgb(80, 77, 77); font-weight: 400; margin-left: 10px;"> Set notification preferences for reminders </h3>
                        <hr>
                      </v-col>
                  </v-row>

                  <v-row class="mt-n0 mb-n10">
                    <v-col cols="12" sm="3" class="d-flex align-center justify-start">
                      <v-list-item-icon style="margin-left: 20px; margin-bottom: 10px;">
                        <outlook-logo />
                      </v-list-item-icon>
                      <h3 class="switch-label" style="margin-left: 10px;"><b>Microsoft Outlook</b></h3>
                    </v-col>
                    
                    <v-col cols="12" sm="9" class="d-flex align-center justify-end">
                      <v-switch inset color="success" value="success" v-model="remindOutlook" style="margin-right: 20px;"></v-switch>
                    </v-col>
                  </v-row>

                  <v-row class="mt-n0 mb-n10">
                    <v-col cols="12" sm="3" class="d-flex align-center justify-start">
                      <v-list-item-icon style="margin-left: 20px; margin-bottom: 10px;">
                        <telegram-logo />
                      </v-list-item-icon>
                      <h3 class="switch-label" style="margin-left: 10px;"><b>Telegram</b></h3>
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
import IndeedLogo from "@/components/IndeedLogo.vue";
import TelegramLogo from "@/components/TelegramLogo.vue";
import OutlookLogo from "@/components/OutlookLogo.vue";
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword, deleteUser, sendPasswordResetEmail } from 'firebase/auth';


export default {
  data: () => ({
    resetEmail: "",
    tab: null,
    userEmail: 'user@example.com',
    syncLinkedin: true,
    syncIndeed: false,
    dailyGoal: '20',
    showCustomDialog: false,
    customGoal: '',
    inputCustomGoal: '',
    remindOutlook: false,
    remindTelegram: false,
    showEditPasswordModal: false,
    showResetPasswordModal: false,
    confirmationdialog: false,
    valid: true,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    showPassword: false,
    showDeleteConfirmation: false,
    profileImageUrl: "https://randomuser.me/api/portraits/women/85.jpg", // Placeholder image
  }),

  computed: {
    customLabel() {
      console.log(this.dailyGoal);
      return this.customGoal ? `Custom: ${this.customGoal}` : "Custom: N/A";
    }
  },

  methods: {
    async sendEmail() {
        const auth = getAuth()
        let errorMessage =''
        sendPasswordResetEmail(auth, String(auth.currentUser.email))
          .then(()=> {this.confirmationdialog = true})
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          })

    },

    async validatePasswordChange() {
      if (!this.$refs.form.validate()) {
        return;
      }
      if (this.newPassword !== this.confirmNewPassword) {
        this.$refs.form.reset();
        this.$refs.form.resetValidation();
        alert("New passwords must match.");
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        alert("No user is currently signed in.");
        return;
      }

      //re-authenticate the user
      const credential = EmailAuthProvider.credential(user.email, this.oldPassword);

      try {
        await reauthenticateWithCredential(user, credential);
        //user re-authenticated, proceed with password change
        await updatePassword(user, this.newPassword);
        alert("Password changed successfully!");
        this.showEditPasswordModal = false;
      } catch (error) {
        console.error("Error changing password:", error);
        if (error.code === 'auth/invalid-credential') {
          alert("Incorrect current password. Please try again.");
        } else {
          //requires recent login
          alert("Failed to change password. Please log out and sign in again.")
        }
      }
    },
    
    async deleteUserAccount() {
      this.showDeleteConfirmation = false;
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        alert("No user is currently signed in.")
        return;
      }

      try {
        await deleteUser(user);
        alert("Account deleted successfully!");
        console.log("Account deleted.");
        this.$router.push('/');
      } catch (error) {
        //requires recent login
        console.error("Error deleting user account", error);
        alert("Failed to delete user account. Please log out and sign in again.")
      }
    },
    
    //methods for custom option under Daily Application Goal
    handleRadioChange(value) {
      console.log("Radio value changed:", this.dailyGoal);
      if (this.dailyGoal == 'custom' && !this.showCustomDialog) {
        console.log("Custom option selected, showing dialog...");
        this.showCustomDialog = true;
      }
    }, 

    closeCustomDialog() {
      this.showCustomDialog = false;
    }, 

    submitCustomGoal() {
      //console.log("Submitting custom goal:", this.customGoal);
      if (this.inputCustomGoal && !isNaN(this.inputCustomGoal)) {
        this.customGoal = this.inputCustomGoal; //updates the stored custom value
        this.dailyGoal = 'custom'; //keeps the custom radio button selected
        console.log("Daily goal updated to custom value:", this.dailyGoal)
      }
      this.closeCustomDialog();
    },

    
    //logic not done yet
    async handleSyncLinkedin() { 
      console.log('syncLinkedIn changed:', this.syncLinkedin);
    },

    async handleSyncIndeed() {
      console.log('syncIndeed changed:', this.syncIndeed);
    },

    async handleRemindOutlook() {
      console.log('remindOutlook changed:', this.remindOutlook);
    },

    async handleRemindTelegram() {
      console.log('remindTelegram changed:', this.remindTelegram);
    },
 }
}
</script>


<style>

.mt-n0.mb-n10 .switch-label {
  align-items: center;
  margin-bottom: 15px;
  color: #646666;
}

.my-2 .switch-label {
  color: #646666;
  margin-top: 10px;
}

hr {
  border-color: white;
  opacity: 40%;
}

.radio-group {
  margin-right: 20px;
}

</style>
