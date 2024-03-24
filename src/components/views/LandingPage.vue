<template>
    <v-app>
        <v-app-bar app clipped-left :elevation="0" color= "#244d7b">
            <v-app-bar-title class="logo" style="font-size: x-large;">Kiasu<strong><i>Careers</i></strong></v-app-bar-title>
        </v-app-bar>

        <v-main class="container">
            <v-row id="main" align-content="center" justify="center">
                <v-col cols="7" align-self="center">
                    <div style="margin-left: 150px;">
                        <h1 class="title"><span>Track, analyse, and prepare</span> for your <br> job applications under <span>one platform</span></h1>    
                        <p class="description"> Review job applications from multiple job portals such as LinkedIn, Indeed and Glassdoor, all under one dashboard. </p>
                        <a href="#" class="btn" @click="gotologin" @mouseover="enter" @mouseleave="leave">Get started</a>
                    </div>
                </v-col>
                
                <v-col cols=1></v-col>
                <v-col cols=4>
                    <img class="image" src="@/assets/resume.png" alt="">
                    <div class="home_shadow"></div>
                </v-col>
            </v-row>
        </v-main>

        <v-main class="secondcontainer">

            <div class="second" style= "width: 60%; align-self: center; justify-content: center; margin-top: 50px ;">
                <h1 style="color: #fff;">Integrated Job Listings</h1>
                <p>Indicate your job preferences such as job title, industry, experience level, and view filtered job listings from different job portals.</p>
                <v-card v-motion-slide-visible-right variant="elevated" style="background-color: #2f5fb3; border-radius: 40px;">
                    <v-row class="stagger">
                        <v-col style="padding: 50px;" class="brand">
                            <v-card class="d-flex justify-center align-center flex-column" variant="tonal" style="border-radius: 40px; height: fit-content;">
                                <img class="icons" src="@/assets/linkedin.png" alt="LinkedIn Logo">
                                <v-card-text class="icon_names">
                                    Linkedin
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col style="padding: 50px;" class="brand">
                            <v-card class="d-flex justify-center align-center flex-column" variant="tonal" style="border-radius: 40px; height: fit-content">
                                <img class="icons" src="@/assets/glassdoor.png" alt="Glassdoor Logo">
                                <v-card-text class="icon_names">
                                    Glassdoor
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col style="padding: 50px;" class="brand">
                            <v-card class="d-flex justify-center align-center flex-column" variant="tonal" style="border-radius: 40px; height: fit-content">
                                <img class="icons" src="@/assets/indeed.png" alt="Indeed Logo">
                                <v-card-text class="icon_names">
                                    Indeed
                                </v-card-text>
                            </v-card>
                        </v-col>
                    
                    </v-row>
                </v-card>
                
            </div>
        </v-main>

        <v-main class="thirdcontainer">
            <div class="second" style="padding: 190px; width: 60%; align-self: center; justify-content: center;">
                <v-row>
                    <v-card class="target" v-motion-slide-visible-right>2</v-card>
                </v-row>
            </div>  

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

            gsap.fromTo('.second',         
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.6 }
            );

            gsap.fromTo('.stagger .brand ', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.6, stagger: 0.3 }
            );
        }
    }

</script>

<style scoped>
    .target {
        width: 70%;
        height: 100%;
        margin: 300px auto 500px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #43b883;
        border-radius: 10px;
        font-weight: bold;
    }
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
        
    p {
        font-family: "Mulish", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: x-large;
        color: #fff;
        margin-bottom: 20px;

    }

    .container{
        font-family: "Mulish", sans-serif;
        font-weight: 800;
        font-style: normal;       
        background-color: #244d7b;
    }

    .secondcontainer{
        font-family: "Mulish", sans-serif;
        font-weight: 800;
        font-style: normal;       
        background-color: #244d7b;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .thirdcontainer{
        font-family: "Mulish", sans-serif;
        font-weight: 800;
        font-style: normal;       
        background-color: #244d7b;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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

    .icons {
        margin-top: 20px;
        width: 40%;
    }

    .icon_names {
        color: #fff;
        font-family: "Mulish", sans-serif;
        font-weight: 600;
        font-style:normal;
        font-size: x-large;     
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

