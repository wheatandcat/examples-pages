!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="uXl7")}({EBst:function(e){!function(){"use strict";function t(e,t){var n,o,r,i,l=W;for(i=arguments.length;i-- >2;)U.push(arguments[i]);for(t&&null!=t.children&&(U.length||U.push(t.children),delete t.children);U.length;)if((o=U.pop())&&void 0!==o.pop)for(i=o.length;i--;)U.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?l[l.length-1]+=o:l===W?l=[o]:l.push(o),n=r;var u=new P;return u.nodeName=e,u.children=l,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==S.vnode&&S.vnode(u),u}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function r(e){!e.__d&&(e.__d=!0)&&1==T.push(e)&&(S.debounceRendering||E)(i)}function i(){var e,t=T;for(T=[];e=t.pop();)e.__d&&C(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&u(e,t.nodeName):n||e._componentConstructor===t.nodeName}function u(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function a(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===M.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,f,l):e.removeEventListener(t,f,l),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var u=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function f(e){return this.__l[e.type](S.event&&S.event(e)||e)}function _(){for(var e;e=L.pop();)S.afterMount&&S.afterMount(e),e.componentDidMount&&e.componentDidMount()}function d(e,t,n,o,r,i){D++||(A=null!=r&&void 0!==r.ownerSVGElement,B=null!=e&&!("__preactattr_"in e));var l=h(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--D||(B=!1,i||_()),l}function h(e,t,n,o,r){var i=e,l=A;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0))),i.__preactattr_=!0,i;var c=t.nodeName;if("function"==typeof c)return N(e,t,n,o);if(A="svg"===c||"foreignObject"!==c&&A,c+="",(!e||!u(e,c))&&(i=a(c,A),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0)}var s=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var _=i.attributes,d=_.length;d--;)p[_[d].name]=_[d].value}return!B&&f&&1===f.length&&"string"==typeof f[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=f[0]&&(s.nodeValue=f[0]):(f&&f.length||null!=s)&&v(i,f,n,o,B||null!=p.dangerouslySetInnerHTML),y(i,t.attributes,p),A=l,i}function v(e,t,n,o,r){var i,u,c,a,p,f=e.childNodes,_=[],d={},v=0,b=0,y=f.length,g=0,x=t?t.length:0;if(0!==y)for(var w=0;w<y;w++){var C=f[w],N=C.__preactattr_,k=x&&N?C._component?C._component.__k:N.key:null;null!=k?(v++,d[k]=C):(N||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(_[g++]=C)}if(0!==x)for(var w=0;w<x;w++){a=t[w],p=null;var k=a.key;if(null!=k)v&&void 0!==d[k]&&(p=d[k],d[k]=void 0,v--);else if(b<g)for(i=b;i<g;i++)if(void 0!==_[i]&&l(u=_[i],a,r)){p=u,_[i]=void 0,i===g-1&&g--,i===b&&b++;break}p=h(p,a,n,o),c=f[w],p&&p!==e&&p!==c&&(null==c?e.appendChild(p):p===c.nextSibling?s(c):e.insertBefore(p,c))}if(v)for(var w in d)void 0!==d[w]&&m(d[w],!1);for(;b<=g;)void 0!==(p=_[g--])&&m(p,!1)}function m(e,t){var n=e._component;n?k(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||s(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;m(e,!0),e=t}}function y(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||p(e,o,n[o],n[o]=void 0,A);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||p(e,o,n[o],n[o]=t[o],A)}function g(e,t,n){var o,r=V.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),j.call(o,t,n)):(o=new j(t,n),o.constructor=e,o.render=x);r--;)if(V[r].constructor===e)return o.__b=V[r].__b,V.splice(r,1),o;return o}function x(e,t,n){return this.constructor(e,n)}function w(e,t,n,o,i){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===S.syncComponentUpdates&&e.base?r(e):C(e,1,i)),e.__r&&e.__r(e))}function C(e,t,o,r){if(!e.__x){var i,l,u,a=e.props,s=e.state,p=e.context,f=e.__p||a,h=e.__s||s,v=e.__c||p,b=e.base,y=e.__b,x=b||y,N=e._component,j=!1,O=v;if(e.constructor.getDerivedStateFromProps&&(s=n(n({},s),e.constructor.getDerivedStateFromProps(a,s)),e.state=s),b&&(e.props=f,e.state=h,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,s,p)?j=!0:e.componentWillUpdate&&e.componentWillUpdate(a,s,p),e.props=a,e.state=s,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!j){i=e.render(a,s,p),e.getChildContext&&(p=n(n({},p),e.getChildContext())),b&&e.getSnapshotBeforeUpdate&&(O=e.getSnapshotBeforeUpdate(f,h));var P,U,W=i&&i.nodeName;if("function"==typeof W){var E=c(i);l=N,l&&l.constructor===W&&E.key==l.__k?w(l,E,1,p,!1):(P=l,e._component=l=g(W,E,p),l.__b=l.__b||y,l.__u=e,w(l,E,0,p,!1),C(l,1,o,!0)),U=l.base}else u=x,P=N,P&&(u=e._component=null),(x||1===t)&&(u&&(u._component=null),U=d(u,i,p,o||!b,x&&x.parentNode,!0));if(x&&U!==x&&l!==N){var M=x.parentNode;M&&U!==M&&(M.replaceChild(U,x),P||(x._component=null,m(x,!1)))}if(P&&k(P),e.base=U,U&&!r){for(var T=e,A=e;A=A.__u;)(T=A).base=U;U._component=T,U._componentConstructor=T.constructor}}for(!b||o?L.unshift(e):j||(e.componentDidUpdate&&e.componentDidUpdate(f,h,O),S.afterUpdate&&S.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);D||r||_()}}function N(e,t,n,o){for(var r=e&&e._component,i=r,l=e,u=r&&e._componentConstructor===t.nodeName,a=u,s=c(t);r&&!a&&(r=r.__u);)a=r.constructor===t.nodeName;return r&&a&&(!o||r._component)?(w(r,s,3,n,o),e=r.base):(i&&!u&&(k(i),e=l=null),r=g(t.nodeName,s,n),e&&!r.__b&&(r.__b=e,l=null),w(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,m(l,!1))),e}function k(e){S.beforeUnmount&&S.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?k(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,s(t),V.push(e),b(t)),e.__r&&e.__r(null)}function j(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function O(e,t,n){return d(n,e,{},!1,t,!1)}var P=function(){},S={},U=[],W=[],E="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,M=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,T=[],L=[],D=0,A=!1,B=!1,V=[];n(j.prototype,{setState:function(e,t){var o=this.__s=this.state;"function"==typeof e&&(e=e(o,this.props)),this.state=n(n({},o),e),t&&this.__h.push(t),r(this)},forceUpdate:function(e){e&&this.__h.push(e),C(this,2)},render:function(){}});var F={h:t,createElement:t,cloneElement:o,Component:j,render:O,rerender:i,options:S};e.exports=F}()},FWi5:function(){},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return s});var i=n("EBst"),l=(n.n(i),n("FWi5")),u=(n.n(l),Object(i.h)("h3",null,"preact | 002-fetch")),c=Object(i.h)("br",null),a=Object(i.h)("h3",null,"users"),s=function(e){function t(){for(var t,n,r,i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return t=n=o(this,e.call.apply(e,[this].concat(l))),n.state={users:[]},r=t,o(n,r)}return r(t,e),t.prototype.componentDidMount=function(){return new Promise(function(e,t){var n,o;return Promise.resolve(fetch("https://mock-server-yznxmkzmvo.now.sh/users")).then(function(r){try{return n=r,Promise.resolve(n.json()).then(function(n){try{return o=n,this.setState({users:o}),e()}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},t.prototype.render=function(){return Object(i.h)("div",{style:{padding:"1rem"}},u,c,a,Object(i.h)("ul",null,Object(i.h)("ul",null,this.state.users.map(function(e,t){return Object(i.h)("li",{key:t},e.name)}))))},t}(i.Component)},uXl7:function(e,t,n){"use strict";var o=n("EBst");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,l=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};l()}}});
//# sourceMappingURL=bundle.ab88d.js.map