<template>
    <v-app class="custom-bg">
    <v-row class="rounded rounded-md">
        <v-app-bar app clipped-left :elevation="2" color= "#244d7b">
            <v-app-bar-title>Kiasu<strong><i>Careers</i></strong></v-app-bar-title>
        </v-app-bar>

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
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" to="/settings"></v-list-item>
            <v-list-item prepend-icon="mdi-file-document-check-outline" title="Resume" value="resume" to="/resume"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-badge-outline" title="Calendar" value="calendar" to="/calendar"></v-list-item>
            <v-list-item prepend-icon="mdi-google-analytics" title="Performance" value="performance" to="/performance"></v-list-item>
        </v-list>
        </v-navigation-drawer>

        <v-main class = "view" style="height:100%;" >
            <router-view/>
            <v-footer color="#244d7b">
              <v-row justify="center" no-gutters>
                <v-col class="text-center mt-1" cols="2">
                  {{ new Date().getFullYear() }} — <strong>KiasuCareers</strong>
                </v-col>
              </v-row>
            </v-footer>
        </v-main>

        
    </v-row>
        


    </v-app>
</template>
  
<script>
  import {getAuth, signOut} from "firebase/auth";
  
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
