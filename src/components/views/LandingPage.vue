<template>
    <v-app>
        <v-app-bar app clipped-left :elevation="0" color= "#19375a">
            <v-app-bar-title class="logo" style="font-size: x-large;">Kiasu<strong><i>Careers</i></strong></v-app-bar-title>
            <v-btn class = "loginbutton" variant="tonal" @click="gotologin" style="margin-right: 50px; margin-top: 10px;">Log in</v-btn>
        </v-app-bar>

        <v-main class="container">
            <v-row id="main" align-content="center" justify="center" style="height: max-content; margin-bottom: 50px;" @mouseover="hover = true" @mouseleave="hover = false">
                
                <v-col cols="8" align-self="center">
                    <div style="margin-left: 150px;">
                        <h1 class="title" > <h1 class="effect" :class="{ 'hovered' : hover}">Streamline</h1>Your Success, One Application at a Time </h1>    
                        <p class="description"> Review job applications from multiple job portals such as LinkedIn, Indeed and Glassdoor, all under one dashboard. </p>
                        <a class="btn" @click="gotologin" @mouseover="enter" @mouseleave="leave">Get started</a>
                    </div>
                </v-col>
                
                <v-col cols=4>
                    <img class="image" src="@/assets/resume.png" alt="">
                    <div class="home_shadow"></div>
                </v-col>
            </v-row>

            <v-row class="d-flex justify-space-evenly" id="secondcontainer" align-content="center" style= "padding: 50px; margin-top: -50px;">
                <v-col cols="8">
                    <h1 class="heading" style="color: #fff;">Integrated Job Listings</h1>
                    <p class="heading">Indicate your job preferences such as job title, industry, experience level, and view filtered job listings from different job portals.</p>
                    <v-card class="stagger" variant="elevated" style="background-color: #516b9b; border-radius: 40px;">
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
                            <img src="@/assets/resume_template.jpg" style="width: 110%; height: 110%; border-radius: 30px;">
                        </v-col>

                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-card variant="text" style="width: 75%;">
                                <h1 class = "feature_title"> Resume Crafting</h1>
                                <h2 class="feature_description"> Prepare for your applications and interviews using our ATS-optimised templates and interview preparation module which offers resources, mock interviews, and industry-specific tips. </h2> 
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row id="secondfeature">
                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-card variant="text" style="width: 75%">
                                <h1 class="feature_title"> Integrated Reminders </h1>
                                <h2 class="feature_description"> Receive reminders by exporting key interview and application dates to your Outlook calendar, or subscribe to our telegram chatbot for automated reminders. </h2>
                            </v-card>
                        </v-col>
                        <v-col cols="6"> 
                            <img src="@/assets/calendar.jpg" style="width: 110%; height: 110%; border-radius: 30px;">
                        </v-col>
                    </v-row>

                    <v-row id="thirdfeature">
                        <v-col cols="6"> 
                            <img src="@/assets/performance.jpg" style="width: 110%; height: 110%; border-radius: 30px;">
                        </v-col>

                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-card variant="text" style="width: 75%;">
                                <h1 class = "feature_title">Performance Analytics</h1>
                                <h2 class="feature_description"> Discover key performance metrics such as job offer rates and interview rates to track your job application performance.</h2> 
                            </v-card>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>

            <v-row class="d-flex justify-center" id="fourthcontainer" align-content="center" style="height: 500px; margin-top: 150px;">
                <v-col cols="9">
                    <v-row no-gutters="">
                        <v-col>
                            <v-card color="#ccd3db" height="550px" class="d-flex" style="border-bottom-left-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;">
                                <v-container fluid style="margin-left: 20px;"> <br>
                                    <v-row style="margin-top: 80px; margin-left: 100px;">
                                        <v-col>
                                            <h2 class = "particulars">Location</h2>    
                                            <h3 class = "subparticulars"> LT18, 1 Business Link <br>National University of Singapore <br> Singapore 117592 </h3>
                                        </v-col>
                                    </v-row>

                                    <v-row style="margin-left: 100px; margin-top: 60px;">
                                        <v-col>
                                            <h2 class = "particulars">Contact details</h2>
                                            <h3 class = "subparticulars"> Email: kiasucareers@gmail.com </h3>    
                                            <h3 class = "subparticulars"> Phone: +65 6784 5649 </h3>    
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <v-col>
                            <v-card color="#46678a" height="550px" class="justify-center" style= "border-bottom-right-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 0px; border-top-left-radius: 0px;">
                                <v-card-title class="font-weight-light">
                                    <h2 style="margin-left: 15px; margin-top: 20px; color: #b2c0da;"> Contact Us </h2>
                                    <v-container fluid> <br>
                                        <v-row style="margin-top: -40px;">
                                            <v-col cols="12">
                                                <v-text-field v-model="name" label="Enter your name" variant="solo-filled"></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col cols="12"> 
                                                <v-text-field v-model="senderemail" label="Enter a valid email address" variant="solo-filled"></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="message" style="height: 350px;"  variant="solo-filled">
                                                </v-text-field>
                                            </v-col>
                                        </v-row>

                                    </v-container>

                                    <v-card-actions style="margin-top: -160px; margin-left: 10px">
                                        <v-btn variant="outlined" @click="sendEmail"> Submit</v-btn>
                                        <v-snackbar
                                        location="top"
                                        color="green"
                                        v-model="snackbar"
                                        :timeout="5000"
                                        elevation="24"
                                        width="500px"
                                        >
                                        Your enquiry has been sent to our official email, do note that a reply can take up to 2 working days.

                                        <template v-slot:actions>
                                            <v-btn
                                            color="white"
                                            variant="text"
                                            @click="snackbar = false"
                                            >
                                            Close
                                            </v-btn>
                                        </template>
                                        </v-snackbar>
                                    </v-card-actions>
                                </v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-main>
        <Footer />

    </v-app>

</template>

<script>
    import gsap from 'gsap'
    import ScrollTrigger from "gsap/ScrollTrigger";
    import Lenis from '@studio-freight/lenis'
    import Footer from "@/components/Footer.vue"
    import emailjs from 'emailjs-com' 
    import { alignJustify } from 'fontawesome';

    export default {
        data() {
            return {
                snackbar: false,
                name: "",
                senderemail: "",
                message: "",
                hover: false
            }
        },
        methods: {
            sendEmail() {
                var templateParams = {
                    to_name: "KiasuCareers",
                    from_name: this.name,
                    email_id: this.senderemail,
                    message: this.message
                };

                emailjs.send('service_cd7alk8', 'template_k3ptflf', templateParams, 'zagrIUfGnZEM9-wlw').then(
                (response) => {
                    this.snackbar = true
                    
                },
                (error) => {
                    alert('FAILED...', error);
                },
                );


            },
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

            /*
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

            */
            //animations 
            gsap.registerPlugin(ScrollTrigger);

            let t1 = gsap.timeline({
                scrollTrigger : {
                    trigger: '.heading',
                    start:'top center',
                    end: 'bottom center',
                    scrub: true,
                    markers: false,
                }
            })

            t1.fromTo('.heading', {opacity:0, y: -100}, {opacity:1, y:0})

            let t = gsap.timeline({
                scrollTrigger : {
                    trigger: '.heading',
                    start:'top 50%',
                    end: 'bottom 20%',
                    scrub: true,
                    markers: false,
                }
            })
            t.fromTo('.stagger', {opacity:0, y: -100}, {opacity:1, y:0})
            t.fromTo('.brand', {opacity:0, y: -100}, {opacity:1, y:0, stagger: 0.5})

            let t2 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#firstfeature',
                    start: '-50% center',
                    end: '60% center',
                    scrub: true,
                    markers: false,
                }
            })

            t2.from('#firstfeature', {opacity:0, x: 800})

            let t3 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#secondfeature',
                    start: '-40% center',
                    end: '40% center',
                    scrub: true,
                    markers: false,
                }
            })

            t3.from('#secondfeature', {opacity:0, x: -800})

            let t4 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#thirdfeature',
                    start: '-40% center',
                    end: '50% center',
                    scrub: true,
                    markers: false,
                }
            })

            t4.from('#thirdfeature', {opacity:0, x: 800})

            let t5 = gsap.timeline( {
                scrollTrigger : {
                    trigger: '#thirdfeature',
                    start: '110% center',
                    end: '200% center',
                    scrub: true,
                    markers: false,
                }
            })

            t5.from('#fourthcontainer', {rotation: 40, opacity:0, x:-500})

            gsap.fromTo('.loginbutton', 
                { opacity: 0, y: 0 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );

            gsap.fromTo('.logo', 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );

            gsap.fromTo('.title', 
                { opacity: 0, y: 30, rotation:-30 },
                { opacity: 1, y: 0, duration: 1,rotation:0, delay: 1.6 }
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
        background-color: #19375a;
        height: 3400px;
    }
        
    p {
        font-family: "Mulish", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: x-large;
        color: #fff;
        margin-bottom: 20px;

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

    .particulars{
        color: #3f5377;
        font-weight: 800
    }

    .subparticulars {
        color: #3f5377;
        font-weight: 500
    }

    .effect{
        font-size: 60px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        float: left;
        margin-right: 10px;
    }

    .effect {
        color: transparent;
        -webkit-text-stroke: 2px #5a93f6;
        position: relative;
    }

    .effect::before {
        content: "Streamline";
        position: absolute;
        width: 0%;
        height: 100%;
        overflow: hidden;
        color: #5a93f6;
        border-right: 4px solid #5a93f6;
        transition: 1s ease-in-out;
    }

    .effect.hovered::before{
        width: 100%;
        filter: drop-shadow(0 0 3px #5a93f6);
    }
</style>

