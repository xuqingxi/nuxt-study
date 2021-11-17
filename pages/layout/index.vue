<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" :to="{
              name: 'home'
            }"
            :class="{
              active: $route.name == 'home'
            }">Home</nuxt-link>
          </li>
          <li class="nav-item" v-if="user">
            <nuxt-link class="nav-link" :to="{
              name: 'editor'
            }"
            :class="{
              active: $route.name == 'editor'
            }">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="user">
            <nuxt-link class="nav-link" :to="{
              name: 'settings'
            }"
            :class="{
              active: $route.name == 'settings'
            }">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="!user">
            <nuxt-link class="nav-link" :to="{
              name: 'login'
            }"
            :class="{
              active: $route.name == 'login'
            }">Sign up</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt-child />
    <footer>
      <div class="container">
        <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: 'user'
    })
  }
};
</script>

<style>
</style>