<template lang="pug">
  v-dialog(v-model='show', persistent, max-width='290')
    v-card
      v-card-title
        div(v-if="isEdit")
          h3.title.mb-2 Confirm Create Survey?
          ul
            li {{ questions.length }} Survey Questions

        div(v-else)
          h3.title.mb-2 Confirm Submit Survey?
      v-card-actions
        v-btn(
          flat,
          :disabled="isLoading",
          @click='hide',
        ) Cancel
        v-spacer
        v-btn(flat, @click='submit' :loading="isLoading") YES!

</template>

<script>
import { pick, pluck, map, mergeRight, omit } from 'ramda';
import qrCodeUrl from '../images/QR_Code.svg?external';

export default {
  name: 'confirmation',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    survey: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total() {
      return parseInt(this.survey.reward) * parseInt(this.survey.pax);
    },
  },
  data() {
    return {
      qrCodeUrl,
      isLoading: false,
    };
  },
  methods: {
    hide() {
      this.$emit('hide');
    },
    submit() {
      if (this.isEdit) {
        const strippedQuestions = map(x => omit(['id','readonly'], x), this.questions);

        const payload = mergeRight(this.survey, { questions: strippedQuestions });

        //uncomment to call add survey
        this.isLoading = true;
        axios.post('/newSurvey', payload)
          .then(res => {
            this.isLoading = false;
            this.$emit('hide');
            this.$router.push({ name: 'home' });
          });
      } else {
        const address = this.$route.params.survey_address;
        const answers = this.questions.map(x => {
          return {
            text: x.text,
            option: x.answer,
          };
        });

        this.isLoading = true;
        axios.post('/answerQuestion', { address, answers })
          .then((res) => {
            this.isLoading = false;
            this.$emit('hide');

            this.$router.push({ name: 'SurveyResult', params: {survey_address: address,
            }});
          });
      }
    },
  },
};
</script>

<style lang="scss">
  .bold {
    font-weight: 600;
  }
  .green--text {
    color: #00B140 !important;
  }
</style>