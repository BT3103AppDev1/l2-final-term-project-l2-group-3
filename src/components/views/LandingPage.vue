<template>
    <v-app>
        <v-app-bar app clipped-left :elevation="0" color= "#244d7b">
            <v-app-bar-title class="logo" style="font-size: x-large;">Kiasu<strong><i>Careers</i></strong></v-app-bar-title>
        </v-app-bar>

        <v-main class="container">
            <v-row id="main" align-content="center" justify="center">
                <v-col cols="8" align-self="center">
                    <div style="margin-left: 150px;">
                        <h1 class="title"><span>Track, analyse, and prepare</span> for your job applications under <span>one platform</span></h1>    
                        <p class="description"> Review job applications from multiple job portals such as LinkedIn, Indeed and Glassdoor, all under one dashboard. </p>
                        <a href="#" class="btn" @click="gotologin" @mouseover="enter" @mouseleave="leave">Get started</a>
                    </div>
                </v-col>
                
                <v-col cols=1></v-col>
                
                <v-col cols=3>
                    <img class="image" src="@/assets/resume.png" alt="">
                    <div class="home_shadow"></div>
                </v-col>

            </v-row>
        </v-main>
    </v-app>

</template>

<script>
    import gsap from 'gsap'

    export default {
        data() {
            return {
                //
            }
        },
        methods: {
            gotologin() {
                this.$router.push("/login")
            },

            enter() {
                gsap.to('.btn', { duration: 0.3, scale: 1.1 });
            },
            leave() {
                gsap.to('.btn', { duration: 0.3, scale: 1 });
            }
        },

        mounted() {
            gsap.fromTo('.logo', 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );

            gsap.fromTo('.navbar .nav_item',
                {opacity: 0, y: 30},
                {opacity: 1, duration: 1, delay: 2.1, stagger: 0.4}
            );

            gsap.fromTo('.title', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 1.6 }
            );

            gsap.fromTo('.description', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 1.8 }
            );

            gsap.fromTo('.btn', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.0 }
            );

            gsap.fromTo('.image', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.6 }
            );

            gsap.fromTo('.home_shadow', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.6 }
            );
        }
    }

</script>

<style scoped>
    #main {
        margin-top: 50px;
    }

    .container{
        font-family: "Mulish", sans-serif;
        font-weight: 800;
        font-style: normal;
        min-height: 100vh;        
        background-color: #244d7b;
    }

    .title {
        font-size: 3rem;
        color: #fff;
        text-transform: uppercase;
    }

    .title span{
        text-transform: uppercase;
        color: #5a93f6;
    }

    .description{
        font-size: 1.5rem;
        font-weight: lighter;
        line-height: 1.8;
        padding: 1rem 0;
        color: #fff;
    }

    .btn {
        margin-top: 1rem;
        display: inline-block;
        padding: .9rem 3rem;
        font-size: 1.7rem;
        color: #fff;
        background: #5a93f6;
        cursor: pointer;
        border-radius: 20px;
        text-align: center;
        text-decoration: none;
    }
    .image {
        flex: 1 1 40rem;
        width: 50%;
        animation: floaty 1.5s infinite alternate;
    }

    .home_shadow {
        margin-top: 20px;
        width: 50%;
        height: 24px;
        background-color: hsla(0, 2%, 8%, 0.16);
        border-radius: 50%;
        filter: blur(4px);
        animation: shadow 1.8s infinite alternate;
    }

    @keyframes shadow {
        0% {
            transform: scale(1, 1);
        }
        100% {
            transform: scale(.85, .85);
        }
    }

    @keyframes floaty {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(40px);
        }
    }

</style>