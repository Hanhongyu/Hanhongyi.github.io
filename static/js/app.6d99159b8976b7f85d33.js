webpackJsonp([1],{0:function(e,t){},"AHS/":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("O534"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},n=s("6yNO")({name:"app"},a,!1,function(e){s("X7uv")},null,null).exports,o=s("1eSk"),u={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",userId:"",password:""}},methods:{addUser:function(){var e=this.userId,t=this.password;console.log(e),console.log(t),this.$http({method:"post",url:"http://172.20.10.2:3000/api/user/addUser",body:{id:e,password:t}})}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userId,expression:"userId"}],attrs:{type:"text",name:"userid"},domProps:{value:e.userId},on:{input:function(t){t.target.composing||(e.userId=t.target.value)}}}),e._v(" "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("br"),e._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:e.addUser}},[e._v("提交")])])])},staticRenderFns:[]},p=s("6yNO")(u,d,!1,function(e){s("q1eI")},"data-v-96dd0dc8",null).exports;r.default.use(o.a);var i=new o.a({routes:[{path:"/",name:"HelloWorld",component:p}]}),l=s("XRx9"),c=s.n(l),v=(s("AHS/"),s("jGYP")),m=s("gCy3"),f=s.n(m);r.default.use(o.a),r.default.use(v.a),r.default.use(c.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:i,http:f.a,template:"<App/>",components:{App:n}})},X7uv:function(e,t){},q1eI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6d99159b8976b7f85d33.js.map