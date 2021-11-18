exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getFeedArticles; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getGlobalArticles; });

// UNUSED EXPORTS: createArticle, getArticle, updateArticle, deleteArticle, getArticleComments, createArticleComment, deleteArticleComment

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./utils/common.js
function objToQueryStr(obj) {
  if (typeof obj != 'object') return;
  let queryStr = '';

  for (let key in obj) {
    if (obj[key] && obj[key] != 0) queryStr += key + '=' + obj[key] + '&';
  }

  return queryStr.slice(0, -1);
}
// CONCATENATED MODULE: ./api/article.js

 // 获取关注文章

async function getFeedArticles(params) {
  params = objToQueryStr(params);
  return request["a" /* api */].get(`/articles/feed?${params}`).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 获取所有文章

async function getGlobalArticles(params) {
  params = objToQueryStr(params);
  return request["a" /* api */].get(`/articles?${params}`).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 生成文章

async function createArticle(params) {
  return request["a" /* api */].post(`/articles`, params).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 获取文章

async function getArticle(slug) {
  return request["a" /* api */].get(`/articles/${slug}`).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 更新文章

async function updateArticle(slug, params) {
  return request["a" /* api */].update(`/articles/${slug}`, params).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 删除文章

async function deleteArticle(slug) {
  return request["a" /* api */].delete(`/articles/${slug}`).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 获取文章评论

async function getArticleComments(slug) {
  return request["a" /* api */].get(`/articles/${slug}/comments`).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 生成文章评论

async function createArticleComment(slug, params) {
  return request["a" /* api */].post(`/articles/${slug}/comments`, params).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
} // 删除文章评论

async function deleteArticleComment(slug, id) {
  return request["a" /* api */].delete(`/articles/${slug}/comments/${id}`).then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("005a1c53", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a0ac214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a0ac214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a0ac214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a0ac214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a0ac214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-split[data-v-3a0ac214]{display:flex;width:100%;flex-wrap:wrap;align-items:center;box-sizing:border-box}.page-btn[data-v-3a0ac214]{height:20px;line-height:19px;padding:0 5px;border:1px solid;text-align:center}.active-btn[data-v-3a0ac214]{background:#5cb85c;border:1px solid #5cb85c;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=3a0ac214&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-3a0ac214><div class=\"container\" data-v-3a0ac214><h1 class=\"logo-font\" data-v-3a0ac214>conduit</h1> <p data-v-3a0ac214>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-3a0ac214>","</ul>",[(_vm.hasLogin)?_vm._ssrNode("<li class=\"nav-item\" data-v-3a0ac214>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  'active': _vm.$route.query.type == 'feed'
                },attrs:{"to":{
                  name: 'home',
                  query: {
                    limit: 20,
                    offset: 0,
                    type: 'feed'
                  }
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-3a0ac214>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  'active': (!_vm.$route.query.type && !_vm.$route.query.tag) || _vm.$route.query.type == 'global'
                },attrs:{"to":{
                  name: 'home',
                  query: {
                    limit: 20,
                    offset: 0,
                    type: 'global'
                  }
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.$route.query.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-3a0ac214>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  'active': _vm.$route.query.tag
                },attrs:{"to":{
                  tag: _vm.$route.query.tag,
                  limit: 20,
                  offset: 0
                }}},[_vm._v("#"+_vm._s(_vm.$route.query.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-3a0ac214>","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile'
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-3a0ac214>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name: 'profile'
              }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-3a0ac214>"+_vm._ssrEscape(_vm._s(article.createdAt))+"</span>")],2),_vm._ssrNode(" <button class=\"btn btn-outline-primary btn-sm pull-xs-right\" data-v-3a0ac214><i class=\"ion-heart\" data-v-3a0ac214></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                name: 'profile'
              }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-3a0ac214>","</div>",[_vm._ssrNode("<p data-v-3a0ac214>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-3a0ac214>","</div>",_vm._l((_vm.tagList),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
              name: 'home',
              query: {
                tag: tag,
              }
            }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-split\" data-v-3a0ac214>","</div>",_vm._l((_vm.totalPage),function(count){return _c('nuxt-link',{key:count,class:['page-btn', _vm.currentPage == count?'active-btn':''],attrs:{"to":{
        name: 'home',
        query: {
          tag: _vm.$route.query.tag,
          limit: 20,
          offset: (count - 1) * 20
        }
      }}},[_vm._v(_vm._s(count))])}),1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=3a0ac214&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/home.js
 // 获取标签类别

async function getTags() {
  return request["a" /* api */].get('/tags').then(data => {
    return [null, data];
  }).catch(err => {
    return [err];
  });
}
// EXTERNAL MODULE: ./api/article.js + 1 modules
var article = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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
//
//


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',

  data() {
    return {};
  },

  watchQuery: ['tag', 'offset', 'type'],

  async asyncData({
    query,
    store
  }) {
    let pArr = [getTags(), Object(article["b" /* getGlobalArticles */])(query)];

    if (store.state.user) {
      pArr.push(Object(article["a" /* getFeedArticles */])(query));
    }

    let [tagRes, articleRes, feedRes] = await Promise.all(pArr);
    let tagList = [],
        articles = [];
    let totalCount = 0;
    console.log(tagRes);

    if (tagRes[1] && tagRes[1].tags) {
      tagList = tagRes[1].tags.slice(0, 10);
    }

    if (articleRes[1] && articleRes[1].articles) {
      articles = articleRes[1].articles;
      totalCount = articleRes[1].articlesCount;
    }

    return {
      tagList,
      articles,
      totalCount
    };
  },

  methods: {},
  computed: {
    hasLogin() {
      return this.$store.state.user;
    },

    totalPage() {
      return Math.ceil(this.totalCount / (this.$route.query.limit || 20));
    },

    currentPage() {
      return this.$route.query.offset / this.$route.query.limit + 1;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a0ac214",
  "6764f259"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map