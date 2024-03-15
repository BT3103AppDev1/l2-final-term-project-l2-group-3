<template>
    <v-app class="custom-bg">
    <v-layout class="rounded rounded-md">
    <v-app-bar app clipped-left :elevation="2" color= "#729CBD">
        <v-app-bar-title>KiasuCareers</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
    color="#729CBD"
    expand-on-hover
    rail
    permanent
    >
    <v-list>
        <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
        ></v-list-item>
    </v-list>

    

    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" to="/settings"></v-list-item>
        <v-list-item prepend-icon="mdi-file-document-check-outline" title="Resume" value="resume" to="/resume"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar-badge-outline" title="Calendar" value="calendar" to="/calendar"></v-list-item>
        <v-list-item prepend-icon="mdi-google-analytics" title="Performance" value="performance" to="/performance"></v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-main style="height:1200px;" >
        <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is="Component"></component>
        </transition>
        </router-view>
    </v-main>
    </v-layout>
        


    </v-app>
</template>

<script>
    export default {
        data() {
            return {
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
        }
    }
    }

</script>

<style scope>


</style>