<template lang="pug">
    Result(v-if="doneLoading" :survey="survey")
</template>

<script>
import Result from '../components/Result.vue';

export default {
  components: {
    Result,
  },
  created() {
    this.getResult(this.$route.params.survey_address);
  },
  data() {
    return {
      doneLoading: false,
      survey: {},
    };
  },
  methods: {
    getResult(surveyAddress) {
      axios.post('/getAnswers', { surveyAddress })
        .then((res) => {
          this.survey = res.data;
          this.doneLoading = true;
        });
    },
  },
};
</script>
