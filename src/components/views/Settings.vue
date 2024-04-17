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
                          <h2 style="margin-bottom: 20px; margin-top: 20px; color: rgb(80, 76, 76);"> {{ userFirstName }} {{ userLastName }} </h2>
                          <v-btn class="text-none" style="margin-right: 10px; color: #5da8ff;" @click="triggerFileInput" variant="tonal">Upload Profile Photo</v-btn>
                          <input type="file" ref="fileInput" @change="onFileSelected" hidden />
                          <v-btn variant="outlined" class="text-none" color="red" @click="deleteProfileImage">Delete</v-btn>
                      </v-col>                    

                      <v-spacer></v-spacer>
                        
                    </v-row><br><br>

                    <v-row style="margin-left: 10px;">
                      <v-col cols="4">
                        <h3 style="color: rgb(92, 85, 85); padding: 5px;"> <b>First Name</b></h3>
                        <v-text-field :model-value="userFirstName" disabled variant="outlined" density="compact"></v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <h3 style="color: rgb(92, 85, 85); padding: 5px;"> <b>Last Name</b></h3>
                        <v-text-field :model-value="userLastName" disabled variant="outlined" density="compact"></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row style="margin-left: 10px; margin-top: -20px;">
                      <v-col cols="8" sm="4">
                        <h3 style="color: rgb(92, 85, 85); padding: 5px;"> <b>Email</b></h3>
                        <v-text-field :model-value="userEmail" disabled variant="outlined" density="compact"></v-text-field>
                        
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
                    
                      <v-snackbar location="top" color="green" v-model="emailsent" :timeout="5000" elevation="24" width="500px">
                        A password reset link has been sent to your email. Do check your junk if you do not see the email in your inbox.
                        <template v-slot:actions>
                          <v-btn color="white" variant="text" @click="emailsent = false"> Close </v-btn>
                        </template>
                      </v-snackbar>
                      
                      
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
                      <v-snackbar location="top" color="red" v-model="deleted" :timeout="5000" elevation="24" width="500px">
                        Your account has been deleted, goodbye.
                        <template v-slot:actions>
                          <v-btn color="white" variant="text" @click="deleted = false"> Close </v-btn>
                        </template>
                      </v-snackbar>



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
                <v-card style="border-radius: 30px; width: 1000px;" color="ffffff" height="175px">
                  <v-row>
                      <v-col>
                        <h2 style="padding: 10px; color:rgb(80, 77, 77); margin-top: 10px; margin-left: 10px;">Progress</h2>
                        <h3 style="padding: 10px; color: rgb(80, 77, 77); font-weight: 400; margin-left: 10px;"> Set your daily application goal to track your progress  </h3>
                        <hr>
                      </v-col>
                  </v-row>
                  
                  <v-row class="mt-n0 mb-n10" justify="space-between">
                    <v-col cols="6" class="d-flex align-self-center justify-start">
                      <h3 class="switch-label" style="margin-left: 20px;"><b>Daily Application Goal</b></h3>
                    </v-col>
                    
                  
                    <v-col cols="auto"> 
                      <v-radio-group v-model="dailyGoal" @change="handleRadioChange" row class="radio-group" inline color="indigo-darken-3">
                        <v-radio label="5" value="5"></v-radio>
                        <v-radio label="10" value="10"></v-radio>
                        <v-radio label="20" value="20"></v-radio>
                        <v-radio :label="`Custom: ${customGoal || 'N/A'}`" value="custom"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>

                  <!-- Dialog for custom goal input -->
                  <v-dialog v-model="showCustomDialog" persistent max-width="290">
                    <v-card>
                      <v-card-title>Enter Custom Goal</v-card-title>
                        <v-card-text>
                          <v-text-field v-model="inputCustomGoal" label="Custom Goal" type="number" :rules="customGoalRules"></v-text-field>
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

                    <v-snackbar location="top" color="green" v-model="syncsuccess" :timeout="2000" elevation="24" width="500px">
                        You have successfully synced your events to your Outlook Calendar.
                      </v-snackbar>
                    
                    <v-col cols="12" sm="9" class="d-flex align-center justify-end">
                      <v-switch inset color="success" v-model="remindOutlook" @change="handleRemindOutlook" style="margin-right: 20px;"></v-switch>
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
                      <v-switch inset color="success" v-model="remindTelegram" @change="handleRemindTelegram" style="margin-right: 20px;"></v-switch>
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
//import IndeedLogo from "@/components/IndeedLogo.vue";
//import TelegramLogo from "@/components/TelegramLogo.vue";
import OutlookLogo from "@/components/OutlookLogo.vue";
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword, deleteUser, sendPasswordResetEmail } from 'firebase/auth';
import { waitForPendingWrites } from "firebase/firestore";
//import GlassdoorLogo from "@/components/GlassdoorLogo.vue";
import { getFirestore, collection, query, where, getDocs, getDoc, deleteDoc, doc, setDoc  } from 'firebase/firestore';
import firebaseApp from "@/firebase";
import { PublicClientApplication } from '@azure/msal-browser';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from "@/firebase";


export default {
  data: () => ({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    deleted: false,
    emailsent: false,
    resetEmail: "",
    tab: null,
    userEmail: 'user@example.com',
    dailyGoal: '20',
    showCustomDialog: false,
    customGoal: '',
    inputCustomGoal: '',
    customGoalRules: [v => (v >= 0 && v <= 100) || 'Custom goal must be between 0 and 100'],
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
    profileImageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // Placeholder image
    msalInstance: null,
    msalReady: false,
    token: null,
    syncsuccess: null,
  }),

  computed: {
    customLabel() {
      console.log(this.dailyGoal);
      return this.customGoal ? `Custom: ${this.customGoal}` : "Custom: N/A";
    }
  },

  async created() {
    await this.initializeMsal();
  },

  methods: {
    //for profile pic
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadProfileImage(file);
      }
    },

    async uploadProfileImage(file) {
      try {
        const auth = getAuth();
        const storageRef = ref(storage, 'profilePictures/' + auth.currentUser.email);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        
        this.profileImageUrl = url;
        await this.updateUserProfileImage(url);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    },
    
    async updateUserProfileImage(imageUrl) {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();
      const userDocRef = doc(db, 'Users', auth.currentUser.email);
      try {
        await setDoc(userDocRef, {credentials: { profilephoto: imageUrl }}, { merge: true });
        console.log("successfully updated user profile image in firebase")
      } catch (error) {
        console.error("Error updating user profile image:", error);
      }
    },

    async deleteProfileImage() {
      const auth = getAuth();
      const db = getFirestore(firebaseApp);
      const userDocRef = doc(db, 'Users', auth.currentUser.email);
      const storageRef = ref(storage, 'profilePictures/' + auth.currentUser.email);

      try {
        // Delete the image from Firebase Storage
        await deleteObject(storageRef);
        console.log("Profile image deleted from storage.");

        // Update Firestore document to remove the image URL
        await setDoc(userDocRef, {credentials: { profilephoto: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}, { merge: true });
        console.log("Profile image reference removed from Firestore.");

        // Update local state
        this.profileImageUrl = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
      } catch (error) {
        console.error("Error deleting the profile image: ", error);
      }
    },

    async sendEmail() {
        const auth = getAuth()
        let errorMessage =''
        sendPasswordResetEmail(auth, String(auth.currentUser.email))
          .then(()=> {this.emailsent = true})
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

      const db = getFirestore();
      const userDocRef = doc(db, 'Users', user.email);

      try {
        await deleteDoc(userDocRef);

        await deleteUser(user);
        
        console.log("Account deleted.");
        this.deleted = true
        await new Promise(resolve => setTimeout(resolve, 3000));
        this.$router.push('/')
      } catch (error) {
        //requires recent login
        console.error("Error deleting user account", error);
        alert("Failed to delete user account. Please log out and sign in again.")
      }
    },
    
    //methods for Daily Application Goal
    handleRadioChange(value) {
      console.log("Radio value changed:", this.dailyGoal);
      if (this.dailyGoal == 'custom' && !this.showCustomDialog) {
        console.log("Custom option selected, showing dialog...");
        this.showCustomDialog = true;
      } else {
        this.updateDailyGoal(this.dailyGoal);
      }
    }, 

    closeCustomDialog() {
      this.showCustomDialog = false;
    }, 

    submitCustomGoal() {
      if (this.inputCustomGoal && !isNaN(this.inputCustomGoal)) {
        this.customGoal = this.inputCustomGoal; //updates the stored custom value
        this.dailyGoal = 'custom'; //keeps the custom radio button selected
        console.log("Daily goal updated to custom value:", this.dailyGoal)
        this.updateDailyGoal(this.customGoal);
      }
      this.closeCustomDialog();
    },

    updateDailyGoal(goalValue) {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();
      const userDocRef = doc(db, 'Users', String(auth.currentUser.email));

      setDoc(userDocRef, {settings: {progress_settings: goalValue}}, {merge:true});
      console.log('Progress setting in firebase updated to:', goalValue);
    },

    async initializeMsal() {
      const msalConfig = {
        auth: {
          clientId: 'c1f19158-7cc2-4107-b2e8-37082fa9d5bd', // Replace with your Azure application client ID
          authority: 'https://login.microsoftonline.com/common', // Replace 'your-tenant-id' with your Azure AD tenant ID
          redirectUri: 'http://localhost:3000/settings/' // Assuming you handle redirects at the root
        },
        cache: {
          cacheLocation: "localStorage", // Enables cache to be stored in localStorage
          storeAuthStateInCookie: true, // Recommended for browsers
        }
      };

      this.msalInstance = await PublicClientApplication.createPublicClientApplication(msalConfig);
    },
    
    //reminder settings methods
    async signIn() {
      this.msalReady = true;

      const loginRequest = {
        scopes: ['openid', 'profile', 'User.Read', 'Calendars.ReadWrite'],
      };

      try {
        // Try to get all accounts from the cache
        const accounts = this.msalInstance.getAllAccounts();
        if (accounts.length > 0) {
          // If there are accounts in the cache, set the first one as the active account
          this.msalInstance.setActiveAccount(accounts[0]);
        }

        const silentResult = await this.msalInstance.acquireTokenSilent(loginRequest);
        console.log('Token acquired silently', silentResult.accessToken);
        this.token = silentResult.accessToken
      } catch (error) {
        // If silent token acquisition fails, fallback to interactive method
        console.log('Silent token acquisition failed, acquiring token using popup');
        try {
          const popupResult = await this.msalInstance.loginPopup(loginRequest);
          console.log('Token acquired via popup', popupResult.accessToken);
          this.token = popupResult.accessToken;
          // Set the account from the popupResult as the active account
          this.msalInstance.setActiveAccount(popupResult.account);
          // Continue with your logic here...
        } catch (popupError) {
          console.error('Error acquiring token via popup', popupError);
        }
      } finally {
        const db = getFirestore(firebaseApp);
          const auth = getAuth();

          const docref = await getDoc(doc(db, 'Users', String(auth.currentUser.email)))

          for (const event in docref.data()['events']) {
            //console.log(docref.data()['events'][event])
            console.log(event)
            this.addEventToOutlookCalendar(this.token, docref.data()['events'][event])
          }

          console.log("event added")
      }
    },

    convert_timestamp(seconds) {
      const utc = new Date(seconds * 1000)
      const sgt = new Date(utc.getTime() + 8 * 3600 * 1000)
      const sgtDateString = sgt.toISOString().replace('.000Z', '');

      return sgtDateString;
    },

    addEventToOutlookCalendar(token, event) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;

      headers.append('Authorization', bearer);
      headers.append('Content-Type', 'application/json');

      console.log(this.convert_timestamp(event.eventstartdatetime.seconds))

      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          subject: event.eventname,
          start: {
              dateTime: this.convert_timestamp(event.eventstartdatetime.seconds), // Set the start time
              timeZone: 'Singapore Standard Time'
          },
          end: {
              dateTime: this.convert_timestamp(event.eventenddatetime.seconds), // Set the end time
              timeZone: 'Singapore Standard Time'
          },
        })
      };

      fetch('https://graph.microsoft.com/v1.0/me/events', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        });
    },

    async handleRemindOutlook() {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();

      if (!auth.currentUser) {
        console.error("No user is currently signed in.");
      }

      const userDocRef = doc(db, 'Users', String(auth.currentUser.email));

      if (this.remindOutlook) {
        await this.signIn()
        this.syncsuccess = true
      }

      try {
        await setDoc(userDocRef, {settings: {reminder_settings: {outlook: this.remindOutlook}}}, {merge:true});
        console.log('remindOutlook setting updated in Firestore to:', this.remindOutlook);
      } catch (error) {
        console.error('Error updating remindOutlook setting:', error);
      }
    },

    async handleRemindTelegram() {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();

      if (!auth.currentUser) {
        console.error("No user is currently signed in.");
      }

      if (this.remindTelegram) {
        const url = 'https://t.me/KiasuCareersBot?start=' + auth.currentUser.uid; 
        window.open(url, '_blank');
      }

      const userDocRef = doc(db, 'Users', String(auth.currentUser.email));

      try {
        await setDoc(userDocRef, {settings: {reminder_settings: {telegram: this.remindTelegram}}}, {merge:true});
        console.log('remindTelegram setting updated in Firestore to:', this.remindTelegram);
      } catch (error) {
        console.error('Error updating remindTelegram setting:', error);
      }
    },

    async fetchSettings() {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();
      const userDocRef = doc(db, 'Users', String(auth.currentUser.email));

      try {
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          const settings = docSnapshot.data().settings;
          if (settings) {

            this.syncLinkedin = settings.sync_settings?.linkedin ?? false; // fallback to false if not set
            this.syncIndeed = settings.sync_settings?.indeed ?? false;
            this.syncGlassdoor = settings.sync_settings?.glassdoor ?? false;
            this.syncOthers = settings.sync_settings?.others ?? false;
            const progressSetting = settings.progress_settings;
            if (progressSetting && progressSetting !== '5' && progressSetting !== '10' && progressSetting !== '20') {
              this.dailyGoal = 'custom';
              this.customGoal = progressSetting;
            } else {
            this.dailyGoal = progressSetting || '20';
            }
            this.remindOutlook = settings.reminder_settings?.outlook ?? false;
            this.remindTelegram = settings.reminder_settings?.telegram ?? false;
          }
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    },

    async fetchUserDetails() {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();
      if (auth.currentUser) {
        const userDocRef = doc(db, 'Users', auth.currentUser.email);
        try {
          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data().credentials; 
            this.userFirstName = userData.firstname;
            this.userLastName = userData.lastname;
            this.userEmail = userData.email;
            this.profileImageUrl = userData.profilephoto;
          } else {
            console.log("No user document found.");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        console.error("No user is currently signed in.");
      }
    },
  },
  
  async mounted() {
    await this.fetchSettings();
    await this.fetchUserDetails();
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
