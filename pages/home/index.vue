<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="hasLogin">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      limit: 20,
                      offset: 0,
                      type: 'feed'
                    }
                  }"
                  class="nav-link"
                  :class="{
                    'active': $route.query.type == 'feed'
                  }">Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link 
                  :to="{
                    name: 'home',
                    query: {
                      limit: 20,
                      offset: 0,
                      type: 'global'
                    }
                  }"
                  class="nav-link"
                  :class="{
                    'active': (!$route.query.type && !$route.query.tag) || $route.query.type == 'global'
                  }">Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="$route.query.tag">
                <nuxt-link
                  :to="{
                    tag: $route.query.tag,
                    limit: 20,
                    offset: 0
                  }"
                  class="nav-link"
                  :class="{
                    'active': $route.query.tag
                  }">#{{$route.query.tag}}</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key = article.slug>
            <div class="article-meta">
              <nuxt-link 
                :to="{
                  name: 'profile'
                }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile'
                }" class="author">{{article.author.username}}</nuxt-link>
                <span class="date">{{article.createdAt}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link :to="{
                  name: 'profile'
                }" class="preview-link">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <nuxt-link v-for="tag in tagList" :key="tag"
              :to="{
                name: 'home',
                query: {
                  tag,
                }
              }" class="tag-pill tag-default">{{tag}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="page-split">
        <nuxt-link 
        :class="['page-btn', currentPage == count?'active-btn':'']"
        :to="{
          name: 'home',
          query: {
            tag: $route.query.tag,
            limit: 20,
            offset: (count - 1) * 20
          }
        }" v-for="count in totalPage" :key="count">{{count}}</nuxt-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getTags } from '../../api/home'
import { getFeedArticles, getGlobalArticles } from '../../api/article'
export default {
    name: 'HomeIndex',
    data() {
      return {
        
      }
    },
    watchQuery: ['tag', 'offset', 'type'],
    async asyncData({query, store}) {
      let pArr = [getTags(), getGlobalArticles(query)]
      if(store.state.user) {
        pArr.push(getFeedArticles(query))
      }
      let [tagRes, articleRes, feedRes] = await Promise.all(pArr)
      let tagList = [], articles = []
      let totalCount = 0
      if(tagRes[1].tags) {
        tagList = tagRes[1].tags.slice(0, 10)
      }
      if(articleRes[1].articles) {
        articles = articleRes[1].articles
        totalCount = articleRes[1].articlesCount
      }
      return {
        tagList,
        articles,
        totalCount
      }
    },
    methods: {
    },
    computed: {
      hasLogin() {
        return this.$store.state.user
      },
      totalPage() {
        return Math.ceil(this.totalCount / (this.$route.query.limit || 20))
      },
      currentPage() {
        return (this.$route.query.offset / this.$route.query.limit) + 1
      }
    }
};
</script>

<style scoped>
.page-split{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
}
.page-btn {
  /* width: 20px; */
  height: 20px;
  line-height: 19px;
  padding: 0 5px;
  border: 1px solid;
  text-align: center;
}
.active-btn {
  background: #5cb85c;
  border: 1px solid #5cb85c;
  color: white;
}
</style>