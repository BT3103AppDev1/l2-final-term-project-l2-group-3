<template>
  <div id = "app"> 
    <Template v-if = "isLoggedIn"/>
    <router-view v-else/>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Template from './components/Template.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Template
  },
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

