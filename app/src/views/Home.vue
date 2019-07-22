<template lang="pug">
  v-container
    v-layout(row wrap)
      v-flex(xs12)
        v-btn.mx-0.mb-2(:to="{ name: 'CreateSurvey' }") Create New Survey
      v-flex(xs12)
        v-data-table.elevation-1(:headers='headers', :items='surveys' hide-actions)
          template(v-slot:items='props')
            td 
              v-btn.primary(:to="{ name: 'AnswerSurvey', params: { survey_address: props.item.address }}") {{ props.item.title }}
            td {{ props.item.address }}
            td {{ props.item.participants }}
            td
              v-btn(icon, small, :to="{ name: 'SurveyResult', params: { survey_address: props.item.address }}")
                v-icon show_chart


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
        { text: 'Participants', value: 'participants'},
        {},
      ],
    };
  },

  created() {
    axios.get('/getAllSurveys')
      .then(res => {
        this.surveys = res.data.map((survey) => zipObj(['title', 'address', 'participants'], values(survey)));
      });
  },

  methods: {
    redirect() {
      this.$router.push({name: 'AnswerSurvey', params: { survey_id: this.id } });
    },
  },
};
</script>
