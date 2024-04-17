<template>
  <v-row align="center" justify="center" class="full-height">
    <v-col cols="12" sm="12">
      <v-window v-model="step">
        <v-window-item :value="1" style="height: 1000px">
          <v-row justify="center" align="center" class="full-height">
            <v-col cols="12" md="6" class="d-flex align-center justify-center">
              <v-card flat max-width="700">
                <h2 class="text-center">KiasuCareers Login</h2>
                <br />
                <div class="text-subtitle-1 text-medium-emphasis">Account</div>
                <v-text-field
                  v-model="email"
                  dense
                  placeholder="Email address"
                  prepend-inner-icon="mdi-email-outline"
                  variant="outlined"
                ></v-text-field>
                <div
                  class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                >
                  Password
                  <div class="forgotpassword" @click="showresetpassword= true">
                      Forgot password?
                  </div>
                  <v-dialog max-width="500" v-model="showresetpassword">
                      <v-card title="Reset Password">
                        <v-card-text>Please enter the email address you'll like your password reset link sent to</v-card-text>
                        <v-text-field 
                          style="margin-left:25px;
                          margin-right:50px"
                          v-model="resetEmail"
                          dense
                          placeholder="Email address"
                          prepend-inner-icon="mdi-email-outline"
                          variant="underlined"
                        >
                        </v-text-field>
                        
                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <router-link style="text-decoration: none; colour:inherit" to="/login">
                            <v-btn text="Send Email" 
                            @click=" sendEmail();"
                            color="blue"
                            variant="tonal"
                            ></v-btn>

                            <v-snackbar location="top" color="red" v-model="invalidemail" :timeout="5000" elevation="24" width="200px">
                              Invalid email, please try again.
                              <template v-slot:actions>
                                <v-btn color="white" variant="text" @click="invalidemail = false"> Close </v-btn>
                              </template>
                            </v-snackbar>
                          </router-link>
                        </v-card-actions>
                      </v-card>  
                  </v-dialog>
                  <v-snackbar location="top" color="green" v-model="emailsent" :timeout="5000" elevation="24" width="500px">
                    A password reset link has been sent to your email. Do check your junk if you do not see the email in your inbox.
                    <template v-slot:actions>
                      <v-btn color="white" variant="text" @click="emailsent = false"> Close </v-btn>
                    </template>
                  </v-snackbar>

                  <v-snackbar location="top" color="red" v-model="incompletelogin" :timeout="5000" elevation="24" width="500px">
                    Please enter your email and password to log in.
                    <template v-slot:actions>
                      <v-btn color="white" variant="text" @click="incompletelogin = false"> Close </v-btn>
                    </template>
                  </v-snackbar>

                  <v-snackbar location="top" color="red" v-model="invalidlogin" :timeout="5000" elevation="24" width="500px">
                    Invalid email or password, please try again.
                    <template v-slot:actions>
                      <v-btn color="white" variant="text" @click="invalidlogin = false"> Close </v-btn>
                    </template>
                  </v-snackbar>
                </div>
                <v-text-field
                  v-model="password"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  dense
                  placeholder="Enter your password"
                  prepend-inner-icon="mdi-lock-outline"
                  variant="outlined"
                  @click:append-inner="visible = !visible"
                ></v-text-field>
                <v-btn
                  class="mb-8"
                  color="blue"
                  size="large"
                  variant="tonal"
                  block
                  @click="signIn"
                >
                  Log In
                </v-btn>
                <h4
                  class="text-center style --text mt-4 mb-3"
                  style="color: rgb(137, 136, 136)"
                >
                  Or sign in with one of the following services
                </h4>
                <br />
                <div
                  class="d-flex justify-space-around align-center mx-16 mb-16"
                >
                  <v-btn depressed outlined color="white" @click="googleSignIn">
                    <v-icon class="fab fa-google" color="red"></v-icon>
                  </v-btn>
                  <v-btn
                    depressed
                    outlined
                    color="white"
                    @click="microsoftSignIn"
                  >
                    <v-icon
                      class="fab fa-microsoft"
                      color="light-blue lighten-3"
                    ></v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-col>

            <v-col
              class="rounded-bl-xl d-flex align-center justify-center"
              cols="12"
              md="6"
            >
              <div
                style="
                  text-align: center;
                  justify-items: center;
                  align-items: center;
                  width: 1100px;
                  height: 900px;
                  margin-top: 50px;
                "
              >
                <img
                  src="@/assets/coverimage.png"
                  style="width: 70%; height: 60%"
                />
                <h2 style="color: white; margin-top: -100px">
                  Don't Have an Account Yet?
                </h2>
                <h3 style="color: white">Let's get you all set up.</h3>
                <br />
                <v-row class="d-flex justify-center">
                  <v-col cols="auto">
                    <v-btn
                      rounded
                      tile
                      color="white"
                      variant="tonal"
                      text-color="white"
                      outlined
                      dark
                      @click="step++"
                      >SIGN UP</v-btn
                    >
                  </v-col>

                  <v-col cols="auto">
                    <v-btn
                      rounded
                      tile
                      color="white"
                      variant="tonal"
                      text-color="white"
                      outlined
                      dark
                      @click="gotohome"
                    >
                      Back to Home
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item :value="2" style="height: 1000px">
          <v-row align="center" justify="center" class="full-height">
            <v-col
              class="rounded-br-xl d-flex align-center justify-center"
              cols="12"
              md="6"
            >
              <div
                style="
                  text-align: center;
                  justify-items: center;
                  align-items: center;
                  width: 1100px;
                  height: 900px;
                  margin-top: 50px;
                "
              >
                <img
                  src="@/assets/coverimage.png"
                  style="width: 70%; height: 60%"
                />
                <h2 style="color: white; margin-top: -100px">
                  Already signed up?
                </h2>
                <h3 style="color: white">Log in to your account.</h3>
                <br />

                <v-row class="d-flex justify-center">
                  <v-col cols="auto">
                    <v-btn
                      rounded
                      tile
                      color="white"
                      variant="tonal"
                      text-color="white"
                      outlined
                      dark
                      @click="step--"
                      >LOG IN</v-btn
                    >
                  </v-col>

                  <v-col cols="auto">
                    <v-btn
                      rounded
                      tile
                      color="white"
                      variant="tonal"
                      text-color="white"
                      outlined
                      dark
                      @click="gotohome"
                    >
                      Back to Home
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <v-card flat max-width="700">
                <h2 class="text-center">Create an Account</h2>
                <br />
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="8">
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="firstname"
                          color="primary"
                          label="First name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="lastname"
                          color="primary"
                          label="Last name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field
                      v-model="email"
                      dense
                      label="Email address"
                      prepend-inner-icon="mdi-email-outline"
                      variant="outlined"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      dense
                      label="Enter your password"
                      prepend-inner-icon="mdi-lock-outline"
                      variant="outlined"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>

                    <v-btn
                      color="blue"
                      variant="tonal"
                      block
                      @click="registerUser"
                      >Sign up</v-btn
                    >

                    <v-snackbar location="top" color="red" v-model="incompletesignup" :timeout="5000" elevation="24" width="500px">
                      Please check if you have entered your email and password correctly.
                      <template v-slot:actions>
                        <v-btn color="white" variant="text" @click="incompletesignup = false"> Close </v-btn>
                      </template>
                    </v-snackbar>

                    <v-snackbar location="top" color="red" v-model="weakpassword" :timeout="5000" elevation="24" width="500px">
                      Please ensure that your password is at least 6 characters long.
                      <template v-slot:actions>
                        <v-btn color="white" variant="text" @click="weakpassword = false"> Close </v-btn>
                      </template>
                    </v-snackbar>

                    <v-snackbar location="top" color="red" v-model="emailinuse" :timeout="5000" elevation="24" width="500px">
                      Your email is already in use, please log in instead. 
                      <template v-slot:actions>
                        <v-btn color="white" variant="text" @click="emailinuse = false"> Close </v-btn>
                      </template>
                    </v-snackbar>

                    <br />
                    <h4
                      class="text-center style --text mt-4 mb-3"
                      style="color: rgb(137, 136, 136)"
                    >
                      Or sign up with one of the following services
                    </h4>
                    <br />
                    <div
                      class="d-flex justify-space-around align-center mx-16 mb-16"
                    >
                      <v-btn
                        depressed
                        outlined
                        color="white"
                        @click="googleSignIn"
                        style="margin-right: -130px;"
                      >
                        <v-icon class="fab fa-google" color="red"></v-icon>
                      </v-btn>
                      <v-btn
                        depressed
                        outlined
                        color="white"
                        @click="microsoftSignIn"
                      >
                        <v-icon
                          class="fab fa-microsoft"
                          color="light-blue lighten-3"
                        ></v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-dialog>
            <v-card>
              hello
            </v-card>
          </v-dialog>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import coverimage from "@/assets/coverimage.png";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import firebaseApp from "@/firebase";

export default {
  data() {
    return {
      weakpassword: false,
      emailinuse: false,
      incompletesignup: false,
      incompletelogin: false,
      invalidlogin: false,
      emailsent: false,
      showresetpassword: false,
      invalidemail: false,
      resetEmail: "",
      confirmationdialog: false,
      coverimage: coverimage,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      visible: false,
      step: 1,
    };
  },
  props: {
    source: String,
  },

  methods: {
    async sendEmail() {
        const auth = getAuth()
        let errorMessage =''
        sendPasswordResetEmail(auth, this.resetEmail)
          .then(()=> {this.confirmationdialog = true; this.showresetpassword = false; this.emailsent = true;})
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.invalidemail = true
          })

    },

    gotohome() {
      this.$router.push("/");
    },

    signIn() {
      const auth = getAuth();
      if (!this.email || !this.password) {
        this.incomplete = true
        return;
      }
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          console.log("Successfully logged in!", result.user);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          let errorMessage;
          switch (error.code) {
            case "auth/invalid-credential":
              errorMessage = "Have your login details been entered correctly?";
              break;
            case "auth/invalid-email":
              errorMessage = "Email invalid.";
              break;
            default:
              errorMessage = error.message;
          }
          console.error(error.code, error.message);
          this.invalidlogin = true
        });
    },

    async saveUserData() {
      try {
        const db = getFirestore(firebaseApp);
        const auth = getAuth();
        const docRef = await setDoc(
          doc(db, "Users", String(auth.currentUser.email)),
          {
            credentials: {
              firstname: this.firstname,
              lastname: this.lastname,
              email: String(auth.currentUser.email),
              userid: String(auth.currentUser.uid),
              firstlogin: true,
              profilephoto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            applications: { applied: {}, interviewed: {}, saved: {}, FindJobs: {} },
            jobpreferences: {},
            settings: {
              progress_settings: 20,
              reminder_settings: { outlook: false, telegram: false },
              sync_settings: {
                glassdoor: false,
                indeed: false,
                linkedin: false,
              },
            },
            events: {},
            reminders: {},
          }
        );
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    },

    async registerUser() {
      let errorMessage = "";
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const userData = await this.saveUserData();
        console.log("Successfully registered!", userCredential);
        this.$router.push("/dashboard");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Your email is already in use at KiasuCareers.";
            this.emailinuse = true
            break;
          case "auth/weak-password":
            errorMessage = "Password should be at least 6 characters.";
            this.weakpassword = true
            break;
          case "auth/invalid-email":
            errorMessage = "Email invalid.";
            this.incompletesignup = true
            break;
          default:
            errorMessage = error.message;
            this.incompletesignup = true
        }
        console.error(error.code, error.message);
      }
    },

    async googleSignIn() {
      const provider = new GoogleAuthProvider();
      const db = getFirestore(firebaseApp);
      const auth = getAuth();

      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Successfully logged in!", result.user);
        // Ensure saveUserData is defined as an async function and returns a promise.
        
        const users = await getDoc(doc(db, "Users", String(auth.currentUser.email)))

        if (!users.data()) {
          await this.saveUserData(); 
          await setDoc(doc(db, "Users", String(auth.currentUser.email)), {credentials: {otherlogin: true}}, {merge: true})
        }
        
        this.$router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },

    async githubSignIn() {
      const provider = new GithubAuthProvider();
      const db = getFirestore(firebaseApp);
      const auth = getAuth();

      try {
          
        const result = await signInWithPopup(auth, provider);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // Ensure saveUserData is defined as an async function and returns a promise.
        
        const users = await getDoc(doc(db, "Users", String(auth.currentUser.email)))

        if (!users.data()) {
          await this.saveUserData();
        }
        this.$router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },

    async microsoftSignIn() {
      const provider = new OAuthProvider("microsoft.com");
      const auth = getAuth();
      const db = getFirestore(firebaseApp);
      try {
          const result = await signInWithPopup(auth, provider);
          const credential = OAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          const idToken = credential.idToken;
          // Ensure saveUserData is defined as an async function and returns a promise.
          console.log("Successfully logged in!", result.user);
          
          const users = await getDoc(doc(db, "Users", String(auth.currentUser.email)))
  
          if (!users.data()) {
            await this.saveUserData();
            await setDoc(doc(db, "Users", String(auth.currentUser.email)), {credentials: {otherlogin: true}}, {merge: true})
          }
          this.$router.push("/dashboard");
        } catch (err) {
          console.log(err);
        }
    },
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}

.rounded-bl-xl {
  background-color: #244d7b;
  color: white;
  border-bottom-left-radius: 400px;
}

.rounded-br-xl {
  background-color: #244d7b;
  color: whitesmoke;
  border-bottom-right-radius: 400px;
}

.forgotpassword {
  color: blue;
  font-size: small;
}

.forgotpassword:hover {
  cursor: pointer;
}
</style>
