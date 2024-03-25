<template>
    <v-app>
        <v-app-bar app clipped-left :elevation="0" color= "#244d7b">
            <v-app-bar-title class="logo" style="font-size: x-large;">Kiasu<strong><i>Careers</i></strong></v-app-bar-title>
            <v-btn variant="tonal" @click="gotologin" style="margin-right: 50px; margin-top: 10px;">Log in</v-btn>
        </v-app-bar>

        <v-main class="container">
            <v-row id="main" align-content="center" justify="center">
                
                <v-col cols="8" align-self="center">
                    <div style="margin-left: 150px;">
                        <h1 class="title"><span>Streamline</span> Your Success, One Application at a Time </h1>    
                        <p class="description"> Review job applications from multiple job portals such as LinkedIn, Indeed and Glassdoor, all under one dashboard. </p>
                        <a href="#" class="btn" @click="gotologin" @mouseover="enter" @mouseleave="leave">Get started</a>
                    </div>
                </v-col>
                
                <v-col cols=4>
                    <img class="image" src="@/assets/resume.png" alt="">
                    <div class="home_shadow"></div>
                </v-col>
            </v-row>

            <v-row class="d-flex justify-space-evenly" id="secondcontainer" align-content="center" style= "padding: 50px; margin-top: 50px;">
                <v-col cols="8">
                    <h1 style="color: #fff;">Integrated Job Listings</h1>
                    <p>Indicate your job preferences such as job title, industry, experience level, and view filtered job listings from different job portals.</p>
                    <v-card class="stagger" v-motion-slide-visible-top variant="elevated" style="background-color: #58719e; border-radius: 40px;">
                        <v-row>
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
                </v-col>    
            </v-row>

            <v-row class="d-flex justify-space-evenly" id="thirdcontainer" align-content="center" style="margin-top: 150px;">
                <v-col cols="9">
                    <v-row id="firstfeature">
                        <v-col cols="6"> 
                            <img src="@/assets/resume_template.jpg" style="width: 100%; height: 100%; border-radius: 30px;">
                        </v-col>

                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-card variant="blank" style="width: 75%;">
                                <h1 class = "feature_title"> Resume Crafting</h1>
                                <h2 class="feature_description"> Prepare for your applications and interviews using our ATS-optimised templates and interview preparation module which offers resources, mock interviews, and industry-specific tips. </h2> 
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row id="secondfeature">
                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-card variant="blank" style="width: 75%">
                                <h1 class="feature_title"> Integrated Reminders </h1>
                                <h2 class="feature_description"> Receive reminders by exporting key interview and application dates to your Outlook calendar, or subscribe to our telegram chatbot for automated reminders. </h2>
                            </v-card>
                        </v-col>
                        <v-col cols="6"> 
                            <img src="@/assets/calendar.jpg" style="width: 100%; height: 100%; border-radius: 30px;">
                        </v-col>
                    </v-row>

                    <v-row id="thirdfeature">
                        <v-col cols="6"> 
                            <img src="@/assets/performance.jpg" style="width: 100%; height: 100%; border-radius: 30px;">
                        </v-col>

                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-card variant="blank" style="width: 75%;">
                                <h1 class = "feature_title"> Resume Crafting</h1>
                                <h2 class="feature_description"> Prepare for your applications and interviews using our ATS-optimised templates and interview preparation module which offers resources, mock interviews, and industry-specific tips. </h2> 
                            </v-card>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>

            <v-row class="d-flex justify-space-evenly" id="thirdcontainer" align-content="center" style="margin-top: 150px; height: 500px;">
            
            </v-row>

        </v-main>

    </v-app>

</template>

<script>
    import gsap from 'gsap'
    import ScrollTrigger from "gsap/ScrollTrigger";
    import Lenis from '@studio-freight/lenis'

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
            //smooth scroll
            const lenis = new Lenis()

            lenis.on('scroll', (e) => {
            console.log(e)
            })

            function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)

            //animations 
            gsap.registerPlugin(ScrollTrigger);

            let t1 = gsap.timeline({
                scrollTrigger : {
                    trigger: '.stagger .brand',
                    start: '-40% center',
                    end: '60% center',
                    scrub: true,
                    markers: false,
                }
            })

            let t2 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#firstfeature',
                    start: '-20% center',
                    end: '80% center',
                    scrub: true,
                    markers: false,
                }
            })

            t2.from('#firstfeature', {opacity:0, x: 800})

            let t3 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#secondfeature',
                    start: 'top center',
                    end: '60% center',
                    scrub: true,
                    markers: false,
                }
            })

            t3.from('#secondfeature', {opacity:0, x: -800})

            let t4 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#thirdfeature',
                    start: 'top center',
                    end: '50% center',
                    scrub: true,
                    markers: false,
                }
            })

            t4.from('#thirdfeature', {opacity:0, x: 800})

            gsap.fromTo('.logo', 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
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
                { opacity: 0, x: 500 },
                { opacity: 1, x: 0, duration: 1, delay: 2.0 }
            );

            gsap.fromTo('.image', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.6 }
            );

            gsap.fromTo('.home_shadow', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 2.6 }
            );

            t1.fromTo('#secondcontainer', {opacity:0, y: 100}, {opacity: 1, y: 0, duration: 1.5})
            t1.to('.stagger', {opacity: 1, duration: 1.5})
            t1.from('.stagger .brand', {opacity:0, x: 80, stagger: 0.5})
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
        margin-bottom: 50px;
        
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

    .feature_title {
        font-size: 30px;
        color: #fff;
        font-weight: 800;
    }

    .feature_description {
        font-size: 20px; color: #fff; 
        margin-top: 10px;
        font-weight: 400;
        line-height: 1.6;
    }

    .title {
        font-size: 60px;
        color: #fff;
        
    }

    .title span{
        
        color: #5a93f6;
    }

    .description{
        font-size: 22px;
        font-weight:400;
        line-height: 1.8;
        padding: 1rem 0;
        color: #fff;
    }

    .btn {
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
            transform: translateY(30px);
        }
    }
</style>

