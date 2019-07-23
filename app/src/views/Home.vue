<template lang="pug">
  v-container
    v-layout(row wrap)
      v-btn(@click="login") login
      v-btn(@click="beg") beg
      v-btn(@click="createTracker") createTracker
      v-btn(@click="createSurvey") createSurvey      
</template>

<script>
import {
  login,beg,createTracker,updateProvider,createSurvey
} from './../../utils/metamask.js';
import VueMetamask from 'vue-metamask';

export default {
  name: 'Home',

  components: {
    VueMetamask,
  },

  methods:{
      login() {
        login();
      },
      beg() {
        const beggarAddress = '0xC836Fef5464cDFAec026111aF8E504FEaEC40dff'
        beg(beggarAddress)
      },
      createTracker() {
        createTracker()
      },
      updateProvider() {
        updateProvider()
      },
      createSurvey() {
        const surveyBody = {
          "title": "9:30 Survey",
          "questions": [
            {
              "text": "Is Chainstack good?",
              "options": ["yes", "no","HELL YES"]
            },
            {
              "text": "How long u used it?",
              "options": ["yes", "no"]
            },
            {
              "text":"Is thomas handsome",
              "options":["yes","no"]
            }
          ]
        }
        createSurvey(surveyBody)
      }
   },
};
</script>
