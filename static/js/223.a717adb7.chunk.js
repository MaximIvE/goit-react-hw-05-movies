"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{2434:function(n,t,e){e.d(t,{Z:function(){return w}});var r,u,a=e(5861),c=e(885),s=e(7757),i=e.n(s),o=e(2791),f=e(501),p=e(6871),d=e(168),l=e(6444),h=l.ZP.ol(r||(r=(0,d.Z)(["\n    font-size: large;\n"]))),x=e(184),v=function(n){var t=n.data,e=void 0===t?[]:t,r=(0,p.TH)(),u=e.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsx)(f.rU,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}));return(0,x.jsx)(h,{children:u})},m=e(3268),b=l.ZP.div(u||(u=(0,d.Z)(["\n    padding: 0 20px 10px 20px;\n    margin-bottom: 20px;\n"]))),w=function(n){var t=n.qwery,e=(0,o.useState)((function(){return[]})),r=(0,c.Z)(e,2),u=r[0],s=r[1],f=(0,o.useState)((function(){return null})),p=(0,c.Z)(f,2),d=p[0],l=p[1],h=(0,o.useState)((function(){return!1})),w=(0,c.Z)(h,2),g=w[0],Z=w[1],k=(0,o.useState)((function(){return""})),y=(0,c.Z)(k,2),j=y[0],_=y[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,l(null),Z(!0),e=null,!t){n.next=10;break}return n.next=7,(0,m.pm)(t);case 7:e=n.sent,n.next=13;break;case 10:return n.next=12,(0,m.s2)();case 12:e=n.sent;case 13:if(200===e.status){n.next=15;break}throw new Error("".concat(e.status," | ").concat(e.statusText));case 15:0===e.data.results.length&&_("No movies found by ".concat(t,".")),Z(!1),s(e.data.results),n.next=26;break;case 21:n.prev=21,n.t0=n.catch(0),l(n.t0),Z(!1),s([]);case 26:case 27:case"end":return n.stop()}}),n,null,[[0,21]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,x.jsxs)(b,{children:[u.length>0&&(0,x.jsx)(v,{data:u}),g&&(0,x.jsx)("h2",{children:"Loading..."}),d&&(0,x.jsx)("h2",{children:"Error.  Unable to display movies"}),j&&(0,x.jsx)("h3",{children:j})]})}},9223:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r,u=e(2434),a=e(168),c=e(6444).ZP.div(r||(r=(0,a.Z)(["\n    font-size: large;\n    padding: 0 20px;\n    margin-bottom: 20px;\n"]))),s=e(184),i=function(){return(0,s.jsxs)(c,{children:[(0,s.jsx)("h1",{children:"Tranding today"}),(0,s.jsx)(u.Z,{})]})}},3268:function(n,t,e){e.d(t,{IQ:function(){return p},Jh:function(){return d},pm:function(){return o},qg:function(){return f},s2:function(){return i}});var r=e(5861),u=e(7757),a=e.n(u),c=e(4569),s=e.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"833791a5e754a1f0443be5fc62646bdb"}}),i=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("trending/movie/day");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("search/movie",{params:{include_adult:!1,query:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t,"/credits"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t,"/reviews"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=223.a717adb7.chunk.js.map