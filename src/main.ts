import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VuePaginate from "vue-paginate";
import VueLazyload from "vue-lazyload";
import VueMoment from "vue-moment";

import routes from "./routes";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "./assets/images/sample.jpg",
  loading: "./assets/images/sample.jpg",
  attempt: 1
});
Vue.use(VuePaginate);
Vue.use(VueMoment);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
