<template>
  <div class="container is-compress pb-100">
    <div class="columns">
      <div class="column">
        <div class="framework-box--container">
          <div class="f-item x2">
            <figure class="image">
              <img src="https://bulma.io/images/bulma-logo.png" alt />
            </figure>
          </div>
          <div class="f-item">
            <figure class="image">
              <img src="https://vuejs.org/images/logo.png" alt />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div
        class="column is-one-quarter-desktop is-one-quarter-desktop is-one-third-tablet"
      >
        <div class="category-container">
          <div
            class="item"
            v-for="(cat, key) in apicat"
            :key="key"
            :class="[{ 'is-active': cat.isActive }]"
            @click="setActive(cat)"
          >
            {{ cat.label }}
          </div>
        </div>
      </div>
      <div class="column">
        <div class="news-loader" :class="[{ 'is-active': loading }]">
          <span class="icon is-large">
            <span class="fa-stack fa-lg">
              <i class="fas fa-spinner fa-pulse fa-stack-1x"></i>
            </span>
          </span>
        </div>
        <paginate
          name="newfeeds"
          :list="articles"
          :per="12"
          class="columns news-container is-variable  is-1"
          v-if="!loading"
        >
          <li
            class="column is-one-third-desktop is-half-tablet"
            v-for="(news, key) in paginated('newfeeds')"
            :key="key"
          >
            <div class="news-item">
              <a :href="news.url" class="image is-3by2">
                <img v-lazy="news.urlToImage" alt="" class="lazyload" />
              </a>
              <div class="news-content">
                <h3>
                  <a :href="news.url">{{ news.title }}</a>
                </h3>
                <span class="subs">{{
                  news.publishedAt | moment("dddd, MMM Do YYYY")
                }}</span>
                <div class="ellipsis">
                  {{ news.description }}
                </div>
              </div>
            </div>
          </li>
        </paginate>
        <paginate-links
          for="newfeeds"
          :show-step-links="true"
          :hide-single-page="true"
          v-if="!loading"
        ></paginate-links>
      </div>
    </div>
  </div>
</template>
