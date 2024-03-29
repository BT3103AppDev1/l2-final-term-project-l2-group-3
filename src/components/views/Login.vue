<template>
  <v-row align="center" justify="center" class="full-height">
    <v-col cols="12" sm="12">
      <v-window v-model="step">
        <v-window-item>
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
                  variant="underlined"
                ></v-text-field>
                <div
                  class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                >
                  Password

                  <v-dialog max-width="500">
                    <template v-slot:activator="{props: activatorProps}">
                      <div
                      class="forgotpassword"
                      v-bind="activatorProps"
                      >
                      Forgot password?
                      </div>
                    </template>
                  <template v-slot:default="{ isActive }">
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
                        @click=" sendEmail(); isActive.value = false;"
                        color="blue"
                        variant="tonal"
                        ></v-btn>
                      </router-link>
                    </v-card-actions>
                    </v-card>  
                  </template>
                  </v-dialog>
                </div>
                <v-text-field
                  v-model="password"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  dense
                  placeholder="Enter your password"
                  prepend-inner-icon="mdi-lock-outline"
                  variant="underlined"
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
                <h4 class="text-center style --text mt-4 mb-3">
                  Or sign in with one of the following services
                </h4>
                <br />
                <div
                  class="d-flex justify-space-between align-center mx-10 mb-16"
                >
                  <v-btn depressed outlined color="white" @click="googleSignIn">
                    <v-icon class="fab fa-google" color="red"></v-icon>
                  </v-btn>
                  <v-btn depressed outlined color="white">
                    <v-icon class="fab fa-facebook-f" color="blue"></v-icon>
                  </v-btn>
                  <v-btn depressed outlined color="white">
                    <v-icon
                      class="fab fa-twitter"
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
              <div style="text-align: center; padding: 120px 0 180px">
                <v-img
                  class="mx-auto my-6 img-max-width"
                  :src="coverimage"
                ></v-img>
                <h2 style="color: white">Don't Have an Account Yet?</h2>
                <h3 style="color: white">Let's get you all set up.</h3>
                <br />
                <v-btn
                  tile
                  color="white"
                  variant="tonal"
                  text-color="white"
                  outlined
                  dark
                  @click="step++"
                  >SIGN UP</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item :value="2">
          <v-row align="center" justify="center" class="full-height">
            <v-col
              cols="12"
              md="6"
              class="rounded-br-xl d-flex align-center justify-center"
            >
              <div style="text-align: center; padding: 120px 0 180px">
                <v-img
                  class="mx-auto my-6 img-max-width"
                  :src="coverimage"
                ></v-img>
                <h2 style="color: white">Already Signed up?</h2>
                <h3 style="color: white">Log in to your account.</h3>
                <br />
                <v-btn
                  tile
                  color="white"
                  variant="tonal"
                  text-color="white"
                  outlined
                  dark
                  @click="step--"
                  >Log in</v-btn
                >
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
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="lastname"
                          color="primary"
                          label="Last name"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field
                      v-model="email"
                      dense
                      label="Email address"
                      prepend-inner-icon="mdi-email-outline"
                      variant="underlined"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      dense
                      label="Enter your password"
                      prepend-inner-icon="mdi-lock-outline"
                      variant="underlined"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>

                    <v-btn
                      color="blue"
                      variant="tonal"
                      block
                      @click="registerUser"
                      >Sign up</v-btn
                    >
                    <br />
                    <h4 class="text-center style --text mt-4 mb-3">
                      Or sign in with one of the following services
                    </h4>
                    <br />
                    <div
                      class="d-flex justify-space-between align-center mx-10 mb-16"
                    >
                      <v-btn
                        depressed
                        outlined
                        color="white"
                        @click="googleSignIn"
                      >
                        <v-icon class="fab fa-google" color="red"></v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="white">
                        <v-icon class="fab fa-facebook-f" color="blue"></v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="white">
                        <v-icon
                          class="fab fa-twitter"
                          color="light-blue lighten-3"
                        ></v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script>
import {
  getAuth,
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";
import coverimage from "@/assets/coverimage.png";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from "@/firebase";

export default {
  data() {
    return {
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

    sendEmail() {
      let errorMessage =''
        const auth = getAuth();
        sendPasswordResetEmail(auth, this.resetEmail)
        .then(()=> {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })
      },

    signIn() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((result) => {
            console.log('Successfully logged in!', result.user);
            this.$router.push('/dashboard');
          })
          .catch(error => {
            console.error(error.code, error.message);
            alert(error.message);
          });
        },

        async saveUserData() {
          try {
            const db = getFirestore(firebaseApp);
            const auth = getAuth();
            const docRef = await setDoc(doc(db, 'Users', String(auth.currentUser.uid)), {
              firstName: this.firstname,
              lastName: this.lastname
            });
            console.log('User data saved.');
          } catch (error) {
            console.error('Error saving user data:', error);
          }
        },


        async registerUser() {
          let errorMessage = '';
          try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
            const userData = await this.saveUserData(); 
            console.log('Successfully registered!', userCredential);
            this.$router.push('/dashboard'); 
          } catch (error) {
            switch (error.code) {
              case 'auth/email-already-in-use':
                errorMessage = 'Your email is already in use at KiasuCareers.';
                break;
              case 'auth/weak-password':
                errorMessage = 'Password should be at least 6 characters.';
                break;
              default:
                errorMessage = error.message;
            }
            console.error(error.code, error.message);
            alert(errorMessage);
          }
        },

    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("Successfully logged in!", result.user);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
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
</style>
