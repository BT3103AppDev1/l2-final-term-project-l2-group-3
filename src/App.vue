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

  mounted() {
    this.initializeChatbot();
  },
  methods: {
    initializeChatbot() {
      // First, create and append the configuration script
      const configScript = document.createElement('script');
      configScript.text = `
        window.embeddedChatbotConfig = {
          chatbotId: "yIkGQ4CSlvBYYvJSzPejw",
          domain: "www.chatbase.co"
        }
      `;
      document.head.appendChild(configScript);

      // Then, create and append the external script
      const chatbotScript = document.createElement('script');
      chatbotScript.src = "https://www.chatbase.co/embed.min.js";
      chatbotScript.setAttribute("chatbotId", "yIkGQ4CSlvBYYvJSzPejw");
      chatbotScript.setAttribute("domain", "www.chatbase.co");
      chatbotScript.defer = true;
      document.body.appendChild(chatbotScript);

      chatbotScript.onload = () => {
        console.log('Chatbot script loaded successfully');
        // Additional actions after the chatbot loads can be placed here
      };

      chatbotScript.onerror = (e) => {
        console.error('Failed to load the chatbot script:', e);
      };
    }
  }
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

