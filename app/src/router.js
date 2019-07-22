import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/create',
      name: 'CreateSurvey',
      component: () => import(/* webpackChunkName: "about" */ './views/CreateSurvey.vue'),
    },
    {
      path: '/answer/:survey_address',
      name: 'AnswerSurvey',
      component: () => import(/* webpackChunkName: "about" */ './views/AnswerSurvey.vue'),
      props: true,
    },
    {
      path: '/result/:survey_address',
      name: 'SurveyResult',
      component: () => import(/* webpackChunkName: "about" */ './views/SurveyResult.vue'),
      props: true,
    },
  ],
});
