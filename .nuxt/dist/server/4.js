exports.ids = [4];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/index.vue?vue&type=template&id=ad0eb280&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Don't have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errorsArr),function(err,index){return ("<li>"+_vm._ssrEscape("That "+_vm._s(err.type)+" "+_vm._s(err.content))+"</li>")}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input"+(_vm._ssrAttr("disabled",_vm.isLoading))+" type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userData.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input"+(_vm._ssrAttr("disabled",_vm.isLoading))+" type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userData.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input"+(_vm._ssrAttr("disabled",_vm.isLoading))+" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userData.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/index.vue?vue&type=template&id=ad0eb280&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/auth.js
 // 登录

async function login(params) {
  return request["a" /* api */].post('/users/login', params).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 注册

async function register(params) {
  return request["a" /* api */].post('/users', params).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 获取用户信息

async function geteUser() {
  return request["a" /* api */].get('/user').then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 更新用户信息

async function updateUser(params) {
  return request["a" /* api */].put('/user', params).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
}
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var authvue_type_script_lang_js_ = ({
  name: 'AuthIndex',
  middleware: 'nonauth',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
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
    };
  },

  methods: {
    async handleSubmit() {
      this.isLoading = true;

      if (this.isLogin) {
        let [err, res] = await login({
          user: this.userData
        });
        this.handleAuth(err, res);
        this.isLoading = false;
      } else {
        let [err, res] = await register({
          user: this.userData
        });
        this.handleAuth(err, res);
        this.isLoading = false;
      }
    },

    handleAuth(err, res) {
      this.errorsArr = [];

      if (err) {
        let {
          errors
        } = err.response.data;
        Object.keys(errors).forEach(err => {
          this.errorsArr.push({
            type: err,
            content: errors[err]
          });
        });
        console.log(errors);
      } else {
        console.log(res);
        this.setUser(res.user);
        this.$router.replace('/');
      }
    },

    ...Object(external_vuex_["mapMutations"])({
      setUser: 'setUser'
    })
  }
});
// CONCATENATED MODULE: ./pages/auth/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_authvue_type_script_lang_js_ = (authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "741f983c"
  
)

/* harmony default export */ var auth = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map