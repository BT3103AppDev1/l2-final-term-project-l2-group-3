<template>
        <div class="save-job-form">
        <v-text-field label="Job Title" v-model="job.title"></v-text-field>
        <v-text-field label="Company Name" v-model="job.company"></v-text-field>
        <v-text-field label="Job Location" v-model="job.location"></v-text-field>
        <v-text-field label="Job Link" v-model="job.link"></v-text-field>
        <v-col class="d-flex justify-center">
            <v-btn variant="tonal" @click="saveJob" width="250px">Save Job</v-btn>
        </v-col>
        </div>
    </template>
    
  <script>
  import { db } from '@/firebase.js'; // Import your Firebase config
  
  export default {
    data() {
      return {
        job: {
          title: '',
          company: '',
          location: '',
          link: ''
        }
      };
    },
    methods: {
      async saveJob() {
        try {
          await db.collection('savedJobs').add(this.job);
          this.$emit('job-saved');
          this.job = { title: '', company: '', location: '', link: '' }; // Reset form
          alert('Job saved successfully!');
        } catch (error) {
          console.error("Error saving job: ", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .save-job-form {
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }
  </style>






