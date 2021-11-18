exports.ids = [2];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=057b647a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea required=\"required\" rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\""+(_vm._ssrAttr("required",!_vm.article.tagList.length))+" placeholder=\"Enter tags\" class=\"form-control\"> "+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<div class=\"tag-list\">"+_vm._ssrEscape(_vm._s(tag))+"</div>")}))+"</fieldset> <button type=\"submit\" class=\"btn btn-lg pull-xs-right btn-primary\">\r\n                            Publish Article\r\n                        </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=057b647a&

// EXTERNAL MODULE: ./api/article.js + 1 modules
var article = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: 'editor',
  middleware: 'authenticated',

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  methods: {
    addTag(e) {
      if (this.article.tagList.includes(e.target.value)) return;
      this.article.tagList.push(e.target.value);
      e.target.value = '';
    },

    async submit(e) {
      console.dir(this.$refs.form); //   e.preventDefault()
      //   let res = await createArticle({
      //       article
      //   })
      //   console.log(res);
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c2f4a67"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map