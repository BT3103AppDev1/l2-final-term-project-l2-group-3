<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}




</style>

