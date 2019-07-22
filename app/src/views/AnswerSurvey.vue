<template lang="pug">
    h1 woohoo!
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
          console.log(res);
          // this.survey = res.data.survey;
          // this.survey.userId = 'grab_xuwhh12';
          // this.doneLoading = true;
        });
    },
  },
};
</script>
