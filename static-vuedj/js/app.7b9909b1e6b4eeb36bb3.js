webpackJsonp([1],{NHnr:function(t,n,e){"use strict";function o(t){e("oDa1")}function a(t){e("qEYB")}Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),i={name:"app",data:function(){return{hostname:location.host,org:null}},mounted:function(){var t=this,n="http://"+this.hostname+"/api/organization/";fetch(n).then(function(t){return t.json()}).then(function(n){return t.org=n[0]})}},s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("h3",[t._v(" Tenant Organization Profile ")]),t._v(" "),t.org.name?e("h1",[t._v(" Name: "+t._s(t.org.name)+" ")]):t._e(),t._v(" "),t.org.email?e("p",[t._v(" Email: "+t._s(t.org.email)+" ")]):t._e(),t._v(" "),t.org.contact?e("p",[t._v(" Phone: "+t._s(t.org.contact)+" ")]):t._e(),t._v(" "),t.org.website?e("p",[t._v(" Website: "+t._s(t.org.website)+" ")]):t._e(),t._v(" "),t.org.contact?e("p",[t._v(" Location: "+t._s(t.org.location)+" ")]):t._e(),t._v(" "),e("p",[t._v(" Tenant Domain URL: "),e("a",{attrs:{href:"{{hostname}}"}},[t._v(" "+t._s(t.hostname)+" ")])]),t._v(" "),e("hr")]),t._v(" "),e("router-view")],1)},_=[],c={render:s,staticRenderFns:_},h=c,u=e("VU/8"),l=o,v=u(i,h,!1,l,null,null),m=v.exports,p=e("/ocq"),f={data:function(){return{hostname:location.host,clients:null}},mounted:function(){var t=this,n="http://"+this.hostname+"/api/clients/";fetch(n).then(function(t){return t.json()}).then(function(n){return t.clients=n})}},d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("List of Other Tenants on this Instance: ")]),t._v(" "),t._l(t.clients,function(n){return e("div",{key:n.id},[e("p",[t._v(" Client name: "+t._s(n.name)+" ")]),t._v(" "),e("p",[t._v(" Client schema: "+t._s(n.schema_name)+" ")]),t._v(" "),e("p",[t._v(" Client API Endpoints: "),e("a",{attrs:{href:"http://{{client.domain_url}}/docs/"}},[t._v(" http://"+t._s(n.domain_url)+"/docs/ ")])]),t._v(" "),e("p",[t._v(" Admin URL: "),e("a",{attrs:{href:"http://{{client.domain_url}}/admin"}},[t._v(" http://"+t._s(n.domain_url)+"/admin ")])]),t._v(" "),e("p",[t._v(" Admin Username: "+t._s(n.schema_name)+" ")]),t._v(" "),e("p",[t._v(" Admin Default Password: Ask the teanant you're on for this ")]),t._v(" "),e("hr")])}),t._v(" "),t._m(0)],2)},g=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[t._v(" This is still work in progress, alot has been done on the backend, feel free to contribute "),e("a",{attrs:{href:"https://github.com/Timtech4u/employee-manager"}},[t._v(" here ")])])}],b={render:d,staticRenderFns:g},w=b,A=e("VU/8"),E=a,T=A(f,w,!1,E,"data-v-74ebf152",null),k=T.exports;r.a.use(p.a);var P=new p.a({routes:[{path:"/",name:"Hello",component:k}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:P,template:"<App/>",components:{App:m}})},oDa1:function(t,n){},qEYB:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.7b9909b1e6b4eeb36bb3.js.map