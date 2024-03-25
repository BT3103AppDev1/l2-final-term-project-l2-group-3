<template>
  <div id="app">
    <transition name="fade">
      <router-view :key="$route.path"></router-view>
    </transition>

  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    const router = useRouter();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user; 
    });
  },
}
</script>

<style> 
#app {
  font-family: "Mulish", sans-serif;
  font-weight: 100;
  font-style: normal;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}


</style>

