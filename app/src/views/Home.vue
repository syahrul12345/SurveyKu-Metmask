<template lang="pug">
  v-layout(row wrap)
    v-btn(:to="{ name: 'CreateSurvey' }") Create New Survey

    //- v-btn(:to="{ name: 'AnswerSurvey', params: { survey_id: 10 } }") Demo Survey

    v-data-table.elevation-1(:headers='headers', :items='surveys')
      template(v-slot:items='props')
        td 
          v-btn.primary(:to="{ name: 'AnswerSurvey', params: { survey_address: props.item.address }}") {{ props.item.title }}
        td {{ props.item.address }}

</template>

<script>
import {
  values,
  zipObj,
} from 'ramda';

export default {
  name: 'Home',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      surveys: [],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Address', value: 'address' },
      ],
    };
  },

  created() {
    axios.get('/getAllSurveys')
      .then(res => {
        this.surveys = res.data.map(survey => zipObj(['title', 'address'], values(survey)));
      });
  },

  methods: {
    redirect() {
      this.$router.push({name: 'AnswerSurvey', params: { survey_id: this.id } });
    },
  },
};
</script>
