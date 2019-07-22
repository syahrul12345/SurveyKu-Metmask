<template lang="pug">
  v-app
    v-toolbar(app='')
      v-toolbar-title.headline.text-uppercase
        router-link.homeIcon.mr-2(to="/") SurveyKu
      v-spacer
      v-btn(:href='explorer', target='_blank' color="primary" :disabled="!explorer")
        span.mr-2 Explorer
    v-content
      router-view
    v-snackbar(v-model='snackbar', color='error') {{ snackMsg }}
      v-btn(flat, @click='snackbar = false')
        | Close
</template>

<script>
import Survey from './components/Survey.vue';

export default {
  name: 'App',
  components: {
    Survey,
  },
  data() {
    return {
      snackbar: false,
      snackMsg: 'oh no, something seems wrong',
      explorer: null,
    };
  },
  methods: {
    showSnack(msg) {
      this.snackMsg = msg;
      this.snackbar = true;
    },
  },
  created() {
    axios.get('/explorer')
      .then(res => {
        this.explorer = res.data;
      });

    this.$eventHub.$on('showSnack', this.showSnack);
  },
  destroyed() {
    this.$eventHub.$off('showSnack');
  },
};
</script>

<style lang="scss">
.homeIcon {
  color: black;
  text-decoration: none;
}
</style>
