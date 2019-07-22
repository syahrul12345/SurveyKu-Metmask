<template lang="pug">
  v-layout(row wrap)
    v-btn(:to="{ name: 'CreateSurvey' }") Create New Survey

    v-btn(:to="{ name: 'AnswerSurvey', params: { survey_id: 10 } }") Demo Survey

    //- v-data-table.elevation-1(:headers='headers', :items='desserts')
    //-   template(v-slot:items='props')
    //-     | {{ props.item.name }}
    //-     | {{ props.item.calories }}
    //-     | {{ props.item.fat }}
    //-     | {{ props.item.carbs }}
    //-     | {{ props.item.protein }}
    //-     | {{ props.item.iron }}



</template>

<script>
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
      headers: [
        { text: 'Title', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
    };
  },

  created() {
    axios.get('/getAllSurveys')
      .then(res => {
        console.log(res);
      });
  },

  methods: {
    redirect() {
      this.$router.push({name: 'AnswerSurvey', params: { survey_id: this.id } });
    },
  },
};
</script>
