(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(3),o=n.n(a),u=(n(9),n(1)),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)([]),c=Object(u.a)(n,2),a=c[0],o=c[1],l=Object(r.useState)(!1),i=Object(u.a)(l,2),s=i[0],d=i[1],f=Object(r.useState)(null),p=Object(u.a)(f,2),m=p[0],b=p[1];return Object(r.useEffect)(function(){d(!0),fetch(e,t).then(function(e){return e.json()}).then(function(e){return o(e)}).catch(function(e){b(e),console.error(e)}).finally(function(){return d(!1)})},[]),{tasks:a,isLoading:s,error:m}};function i(){var e=l("https://jsonplaceholder.typicode.com/todos"),t=e.tasks,n=e.isLoading,r=e.error;return c.a.createElement("div",{className:"App"},n?c.a.createElement("p",null,"Loading..."):t.map(function(e){return c.a.createElement("h4",{key:e.id},e.title)}),r?c.a.createElement("pre",null):null)}var s=document.getElementById("root");o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),s)},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.677ad329.chunk.js.map