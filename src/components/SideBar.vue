<template>
        <v-navigation-drawer
        color="#244d7b"
        expand-on-hover
        rail
        permanent
        >
        <v-list>
            <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
            >
            <v-btn text="Log out" @click="logout" variant="text"></v-btn>
            </v-list-item>
        </v-list>

        

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" to="/settings"></v-list-item>
            <v-list-item prepend-icon="mdi-file-document-check-outline" title="Resume" value="resume" to="/resume"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-badge-outline" title="Calendar" value="calendar" to="/calendar"></v-list-item>
            <v-list-item prepend-icon="mdi-google-analytics" title="Performance" value="performance" to="/performance"></v-list-item>
        </v-list>
        </v-navigation-drawer>
      
</template>
  
<script>
  import {getAuth, signOut} from "firebase/auth";
  import gsap from 'gsap';
  
    export default {
      data() {
        return {
          links: [
            'Home',
            'About Us',
            'Contact Us',
          ],
          menu_pressed:false
        }
      },
      mounted() {
        gsap.fromTo('.logo', 
                  { opacity: 0, y: 10 }, // From
                  { opacity: 1, y: 0, duration: 1, delay: 1 } // To
        );
      },
  
      methods:{
        pressmenu() {
          this.menu_pressed = true;
          console.log(this.menu_pressed)
        },
        print() {
          console.log("clicked")
        },
        logout() {
          const auth = getAuth();
          signOut(auth).then(() => {
            console.log("User signed out successfully");
            this.$router.push("/login");
          }).catch((error) => {
            console.error("Error signing out:", error);
          });
        }
      }
    }

</script>

<style scoped>


.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

</style>

