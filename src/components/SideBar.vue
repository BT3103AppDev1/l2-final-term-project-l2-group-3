<template>
        <v-navigation-drawer
        color="#244d7b"
        expand-on-hover
        rail
        permanent
        >
        <v-list>
            <v-list-item
            prepend-avatar="@/assets/user.png"
            >
            <v-list-item-subtitle> {{ email }}</v-list-item-subtitle>
            <v-list-item-title> {{ name }}</v-list-item-title>
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
  import { getFirestore, doc, getDoc } from "firebase/firestore";
  import firebaseApp from "@/firebase";
  
    export default {
      data() {
        return {
          links: [
            'Home',
            'About Us',
            'Contact Us',
          ],
          menu_pressed:false,
          name: "",
          email: "",
        }
      },
      async mounted() {
        gsap.fromTo('.logo', 
                  { opacity: 0, y: 10 }, // From
                  { opacity: 1, y: 0, duration: 1, delay: 1 } // To
        );
        const db = getFirestore(firebaseApp);
        const auth = getAuth();
        const docRef = doc(db, "Users", String(auth.currentUser.email));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userdata = docSnap.data()
          this.name = userdata['credentials']['firstname'] + " " + userdata['credentials']['lastname']
          this.email = String(auth.currentUser.email)
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
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

