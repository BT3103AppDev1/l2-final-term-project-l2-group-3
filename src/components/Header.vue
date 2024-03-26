<template>
    <v-app-bar app clipped-left :elevation="2" color= "#244d7b">
        <v-app-bar-title class="logo">Kiasu<strong><i>Careers</i></strong></v-app-bar-title>
    </v-app-bar>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from "@/firebase";

export default {
    data() {
        return {
            firstname: "",
            secondname: "",
        }
    },

    async mounted() {
        const db = getFirestore(firebaseApp);
        const auth = getAuth();
        const docRef = doc(db, "Users", String(auth.currentUser.email));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }


}
</script>

