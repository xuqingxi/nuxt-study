(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(e,t,r){"use strict";r.r(t);r(23),r(30),r(49),r(50);var n=r(10),o=r(4),c=r(21),l=(r(36),r(31),r(38),r(51),r(68));function m(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.post("/users/login",t).then((function(data){return[null,data]})).catch((function(e){return[e]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.post("/users",t).then((function(data){return[null,data]})).catch((function(e){return[e]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=r(48);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var O={name:"AuthIndex",middleware:"nonauth",computed:{isLogin:function(){return"login"===this.$route.name}},data:function(){return{isLoading:!1,userData:{username:"",email:"",password:""},errorsArr:[]}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({handleSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,c,l,d,v,h,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoading=!0,!e.isLogin){t.next=12;break}return t.next=4,m({user:e.userData});case 4:r=t.sent,o=Object(n.a)(r,2),c=o[0],l=o[1],e.handleAuth(c,l),e.isLoading=!1,t.next=20;break;case 12:return t.next=14,f({user:e.userData});case 14:d=t.sent,v=Object(n.a)(d,2),h=v[0],w=v[1],e.handleAuth(h,w),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},handleAuth:function(e,t){var r=this;if(this.errorsArr=[],e){var n=e.response.data.errors;Object.keys(n).forEach((function(e){r.errorsArr.push({type:e,content:n[e]})})),console.log(n)}else console.log(t),this.setUser(t.user),this.$router.replace("/")}},Object(h.b)({setUser:"setUser"}))},y=O,x=r(29),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign in":"Sign up"))]),e._v(" "),r("p",{staticClass:"text-xs-center"},[e.isLogin?r("nuxt-link",{attrs:{to:"/register"}},[e._v("Don't have an account?")]):r("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},[e._l(e.errorsArr,(function(t,n){return[r("li",{key:t.type+n},[e._v("That "+e._s(t.type)+" "+e._s(t.content))])]}))],2),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e.isLogin?e._e():r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.username,expression:"userData.username"}],staticClass:"form-control form-control-lg",attrs:{disabled:e.isLoading,type:"text",placeholder:"Your Name"},domProps:{value:e.userData.username},on:{input:function(t){t.target.composing||e.$set(e.userData,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.email,expression:"userData.email"}],staticClass:"form-control form-control-lg",attrs:{disabled:e.isLoading,type:"text",placeholder:"Email"},domProps:{value:e.userData.email},on:{input:function(t){t.target.composing||e.$set(e.userData,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],staticClass:"form-control form-control-lg",attrs:{disabled:e.isLoading,type:"password",placeholder:"Password"},domProps:{value:e.userData.password},on:{input:function(t){t.target.composing||e.$set(e.userData,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);