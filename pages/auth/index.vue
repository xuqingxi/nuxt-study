<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up'}}</h1>
        <p class="text-xs-center">
          <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
          <nuxt-link v-else to="/register">Don't have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <template v-for="(err, index) in errorsArr">
            <li :key="err.type+index">That {{err.type}} {{err.content}}</li>
          </template>
        </ul>

        <form @submit.prevent="handleSubmit">
          <fieldset class="form-group" v-if="!isLogin">
            <input :disabled="isLoading" v-model="userData.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input :disabled="isLoading" v-model="userData.email" class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input :disabled="isLoading" v-model="userData.password" class="form-control form-control-lg" type="password" placeholder="Password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin ? 'Sign in' : 'Sign up'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login, register} from '../../api/auth'
import { mapMutations } from 'vuex'
export default {
    name: 'AuthIndex',
    middleware: 'nonauth',
    computed: {
        isLogin() {
            return this.$route.name === 'login'
        }
    },
    data() {
      return {
        isLoading: false,
        userData: {
          username: "",
          email: "",
          password: ""
        },
        errorsArr: []
      }
    },
    methods: {
      async handleSubmit() {
        this.isLoading = true
        if(this.isLogin) {
          let [err, res] = await login({
            user: this.userData
          })
          this.handleAuth(err, res)
          this.isLoading = false
        }else {
          let [err, res] = await register({
            user: this.userData
          })
          this.handleAuth(err, res)
          this.isLoading = false
        }
      },
      handleAuth(err, res) {
        this.errorsArr = []
        if(err) {
          let { errors } = err.response.data
          Object.keys(errors).forEach(err => {
            this.errorsArr.push({
              type: err,
              content: errors[err]
            })
          })
          console.log(errors);
        }else {
          console.log(res)
          this.setUser(res.user)
          this.$router.replace('/')
        }
      },
      ...mapMutations({
        setUser: 'setUser'
      })
    }
}
</script>

<style>

</style>