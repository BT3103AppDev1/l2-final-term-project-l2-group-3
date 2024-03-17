<template>
    <main class="dashboardpage">
        <v-container>
        <h1 class="title">  Settings </h1>
        <v-row>
          <v-col>
            <h2>Account</h2>
            <hr>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="3" md="2">
            <v-avatar color="surface-variant" size="100">
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-avatar>
          </v-col>
        </v-row>

        <v-row class="mt-n1 mb-n15"> 
          <v-col cols="12" sm="6"></v-col>
          <v-col cols="12" sm="1" class="d-flex align-end justify-center">
          <v-btn icon @click="showEditPasswordModal = true" size="x-small" rounded="0" class="edit-password-btn">
            Edit
          </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
           <v-text-field
            class="custom-email-field"
            label="Email"
            model-value="shashank@gmail.com"
            variant="outlined"
            disabled
            density="compact"
           ></v-text-field>
          </v-col>
        
          <v-col cols="12" sm="4">
           <v-text-field
            class="passwordfield"
            hint="Enter your password to access this website"
            label="Password"
            model-value="**********"
            variant="outlined"
            type="input"
            disabled
            density="compact"
           ></v-text-field>
          </v-col>
        </v-row>

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

        <v-row>
          <v-col>
            <h2>Sync Job Listings From</h2>
          </v-col>
        </v-row>
        <hr>

        <v-row class="mt-n0 mb-n10"> <!-- Add bottom margin for spacing -->
        <v-col cols="6" class="d-flex align-self-center justify-start"> <!-- Place text on the end(right) for LTR languages -->
          <span class="switch-label">Linkedin</span>
        </v-col>
        <v-col cols="6" class="d-flex align-self-center justify-end">
          <v-switch inset color="success" value="success" v-model="syncLinkedin"></v-switch> <!-- properly define vmodel for switch to be toggled -->
        </v-col>
        </v-row>

        <v-row class="mt-n0 mb-n10">
        <v-col cols="6" class="d-flex align-self-center justify-start">
          <span class="switch-label">Indeed</span>
        </v-col>
        
        <v-col cols="6" class="d-flex align-self-center justify-end">
          <v-switch inset color="success" value="success" v-model="syncIndeed"></v-switch>
        </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h2>Progress</h2>
          </v-col>
        </v-row>
        <hr>
        
        <v-row>
        <v-col class="my-2">
        <p> Daily Application Goal</p>
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

        <v-row>
          <v-col>
            <h2>Reminders</h2>
          </v-col>
        </v-row>
        <hr>

        <v-row class="mt-n0 mb-n10">
        <v-col cols="12" sm="3" class="d-flex align-center justify-start">
            <span>Microsoft Outlook</span>
        </v-col>
        <v-col cols="12" sm="9" class="d-flex align-center justify-end">
        <v-switch inset color="success" value="success" v-model="remindOutlook"></v-switch>
        </v-col>
        </v-row>

        <v-row class="mt-n0 mb-n10">
        <v-col cols="12" sm="3" class="d-flex align-center justify-start">
            <span>Telegram</span>
        </v-col>
        <v-col cols="12" sm="9" class="d-flex align-center justify-end">
        <v-switch inset color="success" value="success" v-model="remindTelegram"></v-switch>
        </v-col>
        </v-row>






    </v-container>
  </main>
</template>

<script>
export default {
  data: () => ({
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
