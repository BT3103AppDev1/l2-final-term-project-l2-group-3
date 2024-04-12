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
        <v-card style="border-radius: 20px">
          <v-card-title>Select Your Application Category:</v-card-title>
          <div class="mt-3"></div>
          <v-carousel height="320" hide-delimiters>
            <v-carousel-item>
              <v-row class="d-flex justify-space-around">
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
                      size="72"
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
                      size="72"
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
                      size="72"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >System Administrator</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="d-flex justify-space-around">
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
                      size="72"
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
                      size="72"
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
                      size="72"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >Marketing</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>

            <v-carousel-item>
              <v-row class="d-flex justify-space-around">
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
                      size="72"
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
                      size="72"
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
                      size="72"
                    ></v-icon>
                    <v-card-text class="icon_names text-center"
                      >AI and ML Deployment</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="d-flex justify-space-around">
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
                      size="72"
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
                      size="72"
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
                      size="72"
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
          <v-card-title>Parse Your Resume:</v-card-title>
          <v-card-text>
            Upload your resume to see your information in My Profile!
          </v-card-text>
          <v-card-text>
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
          <v-card-title>My Profile</v-card-title>
          <v-card-text>
            <div v-if="userData">
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
} from "firebase/firestore";
import firebaseApp from "@/firebase";
import { getAuth } from "firebase/auth";

export default {
  data() {
    return {
      userData: null,
    };
  },

  methods: {
    async handleFileUpload(event) {
      try {
        const file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();

        // Set up the onload event handler to handle when the file is loaded
        reader.onload = async function (event) {
          // Extract the base64 string from the result
          const base64String = event.target.result.split(",")[1];
          console.log(base64String);

          const resumeInfo = await parsePdfInfo(base64String);
          console.log(resumeInfo);
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

          // Save the data to Firestore
          await setDoc(docref, resumeData, { merge: true });
          console.log("Saved to firebase!");
        };

        // Read the contents of the file as a data URL (base64-encoded)
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Failed to parse resume:", error);
      }
    },
  },

  async mounted() {
    try {
      const db = getFirestore(firebaseApp);
      const auth = getAuth();
      const user_info = await getDoc(
        doc(db, "Users", String(auth.currentUser.email))
      );
      if (user_info.exists()) {
        console.log(user_info.data());
        this.userData = user_info.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error reading user data:", error);
      return null;
    }
  },
};
</script>

<style scope>
.view {
  background-color: #eff1f7;
}
.upload-resume {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fixed-card {
  max-height: 600px;
  overflow-y: auto;
}

.alt-card {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
