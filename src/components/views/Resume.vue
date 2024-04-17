<template>
  <v-app class="custom-bg">
    <v-row class="rounded rounded-md">
      <Header/>
      <SideBar />
    </v-row>

    <v-row
      class="view"
      style="margin-left: 55px; height: 100%; margin-top: 100px"
    >
      <v-col cols="6">
        <v-card style="border-radius: 20px;" >
          <v-card-title>Select Your Application Category:</v-card-title>
          <div class="mt-3"></div>
          <v-carousel height="320" hide-delimiters>
            <v-carousel-item>
              <v-row class="d-flex justify-space-around" style="margin-left: 20px; margin-right: 20px;">
                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/ux-designer"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-palette"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >UI/UX Design</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/software-engineer"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-desktop"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Backend Engineering</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/system-administrator"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-database"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >System Administrator</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="d-flex justify-space-around" style="margin-left: 20px; margin-right: 20px;">
                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/Business-Development-Manager"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-business-time"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Business Development</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/business-intelligence"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-chart-line"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Business Intelligence</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/digital-marketing-manager"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-shopping-cart"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Marketing</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>

            <v-carousel-item>
              <v-row class="d-flex justify-space-around" style="margin-left: 20px; margin-right: 20px;">
                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/data-scientist"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-flask"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Applied Data Science</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/data-engineer"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-wrench"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Data Engineering</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/ai-engineer"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-robot"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >AI and ML Deployment</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="d-flex justify-space-around" style="margin-left: 20px; margin-right: 20px;">
                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/aws-data-engineer"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-cloud"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Cloud Infrastructure</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/web-developer"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-laptop-code"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Web Development</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-card
                    class="brand"
                    variant="elevated"
                    style="
                      border-radius: 15px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    "
                    href="https://resume.io/resume-examples/accounting-finance"
                    target="_blank"
                  >
                    <v-icon
                      class="fas fa-money-bill-transfer"
                      color="blue"
                      size="60"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Finance</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card>

        <div class="mt-3"></div>

        <v-card class="upload-resume">
          <v-card-title style="margin-top: 20px;">Parse Your Resume:</v-card-title>
          <v-card-text>
            Upload your resume to see your information in My Profile!
          </v-card-text>
          <v-card-text style="margin-bottom: 15px;">
            <v-file-input
              accept="application/pdf"
              label="Upload PDF"
              prepend-icon="mdi-file-pdf-box"
              @change="handleFileUpload"
              :multiple="false"
            >
            
            </v-file-input>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="fixed-card">
          <v-progress-linear v-if="progress" color="primary" indeterminate></v-progress-linear>
          <v-card-title>My Profile</v-card-title>
          <v-card-text>
            <div v-if="resume">
              <div class="section">
                <h3><v-icon>mdi-account</v-icon> Personal Information</h3>
                <p>
                  <strong>Name:</strong>
                  {{ userData.resume.personal_info.name }}
                </p>
                <p>
                  <strong>Email:</strong>
                  {{ userData.resume.personal_info.email }}
                </p>
                <p>
                  <strong>Phone:</strong>
                  {{ userData.resume.personal_info.phone }}
                </p>
                <p>
                  <strong>Address:</strong>
                  {{ userData.resume.personal_info.address }}
                </p>
              </div>

              <div class="section">
                <h3><v-icon>mdi-school</v-icon> Education</h3>
                <ul>
                  <li v-for="education in userData.resume.education">
                    <p><strong>Title:</strong> {{ education.title }}</p>
                    <p><strong>Institute:</strong> {{ education.institute }}</p>
                    <p>
                      <strong>Start Date:</strong> {{ education.start_date }}
                    </p>
                    <p><strong>End Date:</strong> {{ education.end_date }}</p>
                    <p>
                      <strong>Description:</strong> {{ education.description }}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="section">
                <h3><v-icon>mdi-briefcase</v-icon> Work Experiences</h3>
                <ul>
                  <li v-for="experience in userData.resume.work_experience">
                    <p><strong>Title:</strong> {{ experience.title }}</p>
                    <p><strong>Company:</strong> {{ experience.company }}</p>
                    <p>
                      <strong>Start Date:</strong> {{ experience.start_date }}
                    </p>
                    <p><strong>End Date:</strong> {{ experience.end_date }}</p>
                    <p>
                      <strong>Description:</strong> {{ experience.description }}
                    </p>
                    <p><strong>Location:</strong> {{ experience.location }}</p>
                  </li>
                </ul>
              </div>

              <div class="section">
                <h3><v-icon>mdi mdi-tools</v-icon>Skills</h3>
                <ul>
                  <li v-for="skill in userData.resume.skills">{{ skill }}</li>
                </ul>
              </div>

              <div class="section">
                <h3><v-icon>mdi mdi-certificate</v-icon>Certificates</h3>
                <ul>
                  <li v-for="certificate in userData.resume.certificates">
                    {{ certificate }}
                  </li>
                </ul>
              </div>

              <div class="section">
                <h3><v-icon>mdi mdi-earth</v-icon>Languages</h3>
                <li v-for="language in userData.resume.languages">
                  {{ language }}
                </li>
              </div>
            </div>
            <div v-else class="alt-card">
              <div class="mt-3"></div>
              <v-col>
                <div class="section">
                  <h3><v-icon>mdi-account</v-icon> Personal Information</h3>
                  <p>
                    <strong>Name:</strong>
                  </p>
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <p>
                    <strong>Phone:</strong>
                  </p>
                  <p>
                    <strong>Address:</strong>
                  </p>
                </div>

                <div class="section">
                  <h3><v-icon>mdi-school</v-icon> Education</h3>
                  <ul>
                    <li>
                      <p><strong>Title:</strong></p>
                      <p><strong>Institute:</strong></p>
                      <p>
                        <strong>Start Date:</strong>
                      </p>
                      <p><strong>End Date:</strong></p>
                      <p>
                        <strong>Description:</strong>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="section">
                  <h3><v-icon>mdi-briefcase</v-icon> Work Experiences</h3>
                  <ul>
                    <li>
                      <p><strong>Title:</strong></p>
                      <p><strong>Company:</strong></p>
                      <p>
                        <strong>Start Date:</strong>
                      </p>
                      <p><strong>End Date:</strong></p>
                      <p>
                        <strong>Description:</strong>
                      </p>
                      <p><strong>Location:</strong></p>
                    </li>
                  </ul>
                </div>
              </v-col>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
        <v-snackbar location="top" color="green" v-model="showuploaded" :timeout="2000" elevation="24" width="400px">
            You have successfully uploaded your resume.
        </v-snackbar>
  </v-app>
</template>

<script>
import { parsePdfInfo } from "@/parser.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
onSnapshot,
} from "firebase/firestore";
import firebaseApp from "@/firebase";
import { getAuth } from "firebase/auth";

export default {
  data() {
    return {
      userData: null,
      progress: false,
      resume: null,
      showuploaded: null,
    };
  },

  methods: {
    async handleFileUpload(event) {
      try {
        const file = event.target.files[0];
        const reader = new FileReader();
        console.log(file)
        this.showuploaded = true

        // Start the progress
        this.progress = true;
        this.uploadProgress = 0;
        const intervalId = setInterval(() => {
          this.uploadProgress += 100 / 25; // Increment progress to reach 100% in 15 seconds
          if (this.uploadProgress >= 100) {
            clearInterval(intervalId);
            this.progress = false; // Hide progress bar after completion
          }
        }, 1000); // Update every second

        reader.onload = async (event) => {
          // Handle the file data processing here
          const base64String = event.target.result.split(",")[1];
          console.log(base64String)
          const resumeInfo = await parsePdfInfo(base64String);
          const db = getFirestore(firebaseApp);
          const auth = getAuth();
          const docref = doc(db, "Users", String(auth.currentUser.email));
          const resumeData = {
              resume: {
                work_experience: resumeInfo.work_experience,
                skills: resumeInfo.skills,
                personal_info: resumeInfo.personal_info,
                languages: resumeInfo.languages,
                certificates: resumeInfo.certificates,
                education: resumeInfo.education,
              },
            };

          await setDoc(docref, resumeData, { merge: true });
          clearInterval(intervalId); // Ensure to clear interval on completion
          this.uploadProgress = 100; // Ensure progress is set to 100% at the end
          this.progress = false; // Hide the progress bar
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Failed to parse resume:", error);
        clearInterval(intervalId); // Ensure to clear interval on error
        this.progress = false; // Hide progress bar on error
      }
    },
  },

  async mounted() {

    const db = getFirestore(firebaseApp);
    const auth = getAuth();
    onSnapshot(doc(db, "Users", String(auth.currentUser.email)), doc => {
      this.userData = doc.data()
      if (this.userData.resume) {
        this.resume = true
      }
    });
  },
};
</script>

<style scope>
.view {
  background-color: #eff1f7;
}
.upload-resume {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
}

.fixed-card {
  max-height: 645px;
  overflow-y: auto;
  border-radius: 20px;
}

.alt-card {
  height: 645px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.section {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.section p {
  margin-bottom: 5px;
}

.section ul {
  list-style-type: none;
  padding: 0;
}

.section li {
  margin-bottom: 10px;
}
</style>
