"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{510:function(n,t,r){r.d(t,{Bt:function(){return m},Hq:function(){return h},d5:function(){return d},h_:function(){return p},wr:function(){return a}});var e=r(861),c=r(757),o=r.n(c),i="https://api.themoviedb.org/3",u="6162be73d8284a514c6daa14bf64a77d";function a(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(u)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(u)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=1")).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},415:function(n,t,r){r.r(t);var e=r(861),c=r(439),o=r(757),i=r.n(o),u=r(791),a=r(510),s=r(87),p=r(184);t.default=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),r=t[0],o=t[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.wr)().then((function(n){return o(n.results)}));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("ul",{children:r.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"movies/".concat(n.id),children:(0,p.jsx)("article",{children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:["Rating: ",n.vote_average]}),(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(n.poster_path),alt:n.title}),(0,p.jsxs)("p",{children:[n.title,"(",n.original_title,")"]}),(0,p.jsx)("p",{children:n.overview})]})})})},n.id)}))})]})}},861:function(n,t,r){function e(n,t,r,e,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void r(s)}u.done?t(a):Promise.resolve(a).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,o){var i=n.apply(t,r);function u(n){e(i,c,o,u,a,"next",n)}function a(n){e(i,c,o,u,a,"throw",n)}u(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.c3d5ca41.chunk.js.map