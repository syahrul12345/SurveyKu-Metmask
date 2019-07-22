<template lang="pug">
    Survey(:surveyData="survey" v-if="doneLoading")
</template>

<script>
import Survey from '../components/Survey';

export default {
  components: {
    Survey,
  },
  created() {
    this.getSurvey(this.$route.params.survey_address);
  },
  data() {
    return {
      doneLoading: false,
      survey: {},
    };
  },
  methods: {
    getSurvey(surveyAddress) {
      axios.post('/getQuestions', { surveyAddress })
        .then((res) => {
          this.survey = res.data;
          this.doneLoading = true;
        });
    },
  },
};
</script>
