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
                  <router-link
                    to="/forgotPassword"
                    class="text-caption text-decoration-none text-blue"
                  >
                    Forgot password?
                  </router-link>
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
                  class="d-flex justify-space-between align-center mx-10 mb-16"
                >
                  <v-btn depressed outlined color="white" @click="googleSignIn">
                    <v-icon class="fab fa-google" color="red"></v-icon>
                  </v-btn>
                  <v-btn depressed outlined color="white" @click="githubSignIn">
                    <v-icon class="fab fa-github" color="black"></v-icon>
                  </v-btn>
                  <v-btn depressed outlined color="white" @click="microsoftSignIn">
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
                      Go Back to Home
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
                      Go Back to Home
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
                    <br />
                    <h4
                      class="text-center style --text mt-4 mb-3"
                      style="color: rgb(137, 136, 136)"
                    >
                      Or sign up with one of the following services
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
                      <v-btn
                        depressed
                        outlined
                        color="white"
                        @click="githubSignIn"
                      >
                        <v-icon class="fab fa-github" color="black"></v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="white" @click="microsoftSignIn">
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
  OAuthProvider
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
    gotohome() {
      this.$router.push("/");
    },

    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          console.log("Successfully logged in!", result.user);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.error(error.code, error.message);
          alert(error.message);
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
            },
            applications: { applied: {}, interviewed: {}, saved: {} },
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
          }
        );
        console.log("User data saved.");
        console.log(auth.currentUser.email);
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
            break;
          case "auth/weak-password":
            errorMessage = "Password should be at least 6 characters.";
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

    githubSignIn() {
      const provider = new GithubAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken; //if we want to access Github API
          console.log("Successfully logged in!", result.user);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    microsoftSignIn() {
      const provider = new OAuthProvider('microsoft.com');
      const auth = getAuth();
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
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
</style>
