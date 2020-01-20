import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";
import HomePage from "./templates/Home.vue";

@Component({
  mixins: [HomePage],

  components: {
    Fragment
  }
})
export default class Home extends Vue {
  data() {
    return {};
  }
}
