(function(e){function t(t){for(var r,i,a=t[0],c=t[1],s=t[2],l=0,p=[];l<a.length;l++)i=a[l],u[i]&&p.push(u[i][0]),u[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},u={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("04f5"),u=n.n(r);u.a},"04f5":function(e,t,n){},"4ee6":function(e,t,n){"use strict";var r=n("91bd"),u=n.n(r);u.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var r=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h4",[e._v("vue | 002-fetch")]),n("Users")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.items,function(t){return n("li",{key:t.id},[e._v("\n      "+e._s(t.name)+"\n    ")])}))])},a=[],c=(n("96cf"),n("3040")),s="https://mock-server-yznxmkzmvo.now.sh",f={name:"Users",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/users"));case 2:if(t=e.sent,t.ok){e.next=5;break}return e.abrupt("return",alert("通信エラー"));case 5:return e.next=7,t.json();case 7:n=e.sent,this.items=n;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},l=f,p=(n("4ee6"),n("2877")),d=Object(p["a"])(l,i,a,!1,null,"a75573f8",null),v=d.exports,h={name:"app",components:{Users:v}},b=h,m=(n("034f"),Object(p["a"])(b,u,o,!1,null,null,null)),y=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"91bd":function(e,t,n){}});
//# sourceMappingURL=app.e9cacdb0.js.map