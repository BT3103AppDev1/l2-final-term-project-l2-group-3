<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition
        name="elastic"
        enter-active-class="elastic-enter-active"
        leave-active-class="elastic-leave-active"
        mode="out-in"
      >
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

@keyframes slideRightEnter {
  0% {
    transform: translateX(80%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.elastic-enter-active, .elastic-leave-active {
  transition: transform 0.4s, opacity 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.elastic-enter, .elastic-leave-to /* Starting and ending state for enter/leave transitions */ {
  transform: scale(1.2);
  opacity: 0;
}



</style>

