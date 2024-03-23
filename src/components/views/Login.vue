<template>
    <div class="login-container">
      <v-img
        class="mx-auto my-6"
        max-width="520"
        :src="kiasulogo"
      ></v-img>
  
      <v-card
        class="mx-auto pa-16 pb-16"
        elevation="8"
        max-width="600"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          v-model="email"
          dense
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <router-link
            to="/forgotPassword"
            class="text-caption text-decoration-none text-blue"
          >
            Forgot login password?
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
  
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="googleSignIn"
        >
          Sign in with Google
        </v-btn>
  
        <router-link
          to="/register"
          class="text-blue text-decoration-none"
        >
          Sign up now
          <v-icon>mdi-chevron-right</v-icon>
        </router-link>
      </v-card>
  
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from 'firebase/auth';
  import kiasulogo from '@/assets/kiasulogo.png';

  export default {
    data() {
      return {
        kiasulogo: kiasulogo,
        email: '',
        password: '',
        visible: false,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      };
    },
    methods: {
      signIn() {
        const auth = getAuth();
        const user = auth.currentUser
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((result) => {
            console.log('Successfully logged in!', result.user);
            this.$router.push('/dashboard');
          })
          .catch(error => {
            console.error(error.code, error.message);
            alert(error.message);
          });
        if (user){
          console.log(user.email)
        }
      },
  
      googleSignIn(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
          console.log('Successfully logged in!', result.user);
          this.$router.push('/dashboard');
        }).catch(err => {
          console.log(err)
        });
      }
    }
  }
  </script>
  
  <style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .my-6 {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  
  .pa-16 {
    padding: 48px;
  }
  
  .pb-16 {
    padding-bottom: 32px;
  }
  
  .text-subtitle-1 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  
  .text-medium-emphasis {
    color: rgba(0, 0, 0, 0.87);
  }
  
  .text-caption {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.03333em;
  }
  
  .text-blue {
    color: #007bff;
  }
  
  .text-decoration-none {
    text-decoration: none;
  }
  
  .text-center {
    text-align: center;
  }
  
  .mb-12 {
    margin-bottom: 48px;
  }
  
  .mb-8 {
    margin-bottom: 32px;
  }
  
  .max-width {
    max-width: 100%;
  }
  
  .surface-variant {
    background-color: #ffffff;
  }
  
  .variant-tonal {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  </style>