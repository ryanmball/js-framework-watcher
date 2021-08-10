import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "https://api.github.com" : "/";

Vue.config.productionTip = false;

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
