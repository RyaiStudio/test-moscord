import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";
import HomePage from "./templates/Home.vue";

import { apicat } from "../../utils/static-data";
import NewsAPI from "newsapi";
const newsapi = new NewsAPI("f198ab4e16684147b891015b5f31c57f");

@Component({
  mixins: [HomePage],

  components: {
    Fragment
  }
})
export default class Home extends Vue {
  data() {
    return {
      apicat,
      articles: [],
      paginate: ["newfeeds"],
      loading: false
    };
  }

  setActive(cat) {
    this.$data.apicat.map(c => (c.isActive = false));
    cat.isActive = true;
    this.getHeadlines(cat.label);
  }

  limitString(str, length) {
    const $str = str.trim();
    return $str.length > length ? `${$str.substring(0, length)}...` : $str;
  }

  getHeadlines(cat = "technology") {
    this.$data.loading = true;
    newsapi.v2
      .topHeadlines({
        category: cat,
        language: "en",
        country: "us"
      })
      .then(async res => {
        this.$data.articles = await res.articles.map(news => {
          news.urlToImage = news.urlToImage ? news.urlToImage : "";
          news.title = news.title ? this.limitString(news.title, 55) : "";
          news.description = news.description
            ? this.limitString(news.description, 150)
            : "";

          return news;
        });

        setTimeout(() => {
          this.$data.loading = false;
        }, 300);
      });
  }

  beforeMount() {
    this.getHeadlines();
  }
}
