"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[735],{2735:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,u,c,s,i=e(5861),o=e(885),p=e(7757),f=e.n(p),l=e(2791),h=e(6871),d=e(3268),m=e(168),v=e(6444),x=v.ZP.ul(r||(r=(0,m.Z)(["\n    padding-bottom: 12px;\n    list-style: none;\n"]))),w=v.ZP.li(a||(a=(0,m.Z)(["\n    margin-bottom: 3em;\n"]))),b=v.ZP.h4(u||(u=(0,m.Z)(["\n    margin-block-start: 0.4em;\n    margin-block-end: 0.4em;\n"]))),k=v.ZP.p(c||(c=(0,m.Z)(["\n    margin-block-start: 0.4em;\n    margin-block-end: 0.4em;\n"]))),Z=v.ZP.p(s||(s=(0,m.Z)(["\n    padding: 0 20px 12px 20px;\n   font-style: italic;\n   font-size: 16px;\n"]))),g=e(184),y=function(){var n=(0,l.useState)((function(){return[]})),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)((function(){return null})),u=(0,o.Z)(a,2),c=u[0],s=u[1],p=(0,l.useState)(""),m=(0,o.Z)(p,2),v=m[0],y=m[1],j=(0,h.UO)().id;(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(null),n.prev=1,n.next=4,(0,d.Jh)(j);case 4:if(200===(t=n.sent).status){n.next=7;break}throw new Error("".concat(t.status," | ").concat(t.statusText));case 7:0===t.data.results.length&&y("We don't have any reviews for this movie."),r(t.data.results),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),s(n.t0),r(null);case 16:case 17:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[j]);return(0,g.jsxs)(g.Fragment,{children:[e&&(0,g.jsx)(x,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,g.jsxs)(w,{children:[(0,g.jsxs)(b,{children:["Author: ",e]}),(0,g.jsx)(k,{children:r})]},t)}))}),c&&(0,g.jsx)(Z,{children:"We don't have any reviews for this movie."}),v&&(0,g.jsx)(Z,{children:v})]})}},3268:function(n,t,e){e.d(t,{IQ:function(){return f},Jh:function(){return l},pm:function(){return o},qg:function(){return p},s2:function(){return i}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"833791a5e754a1f0443be5fc62646bdb"}}),i=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("trending/movie/day");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("search/movie",{params:{include_adult:!1,query:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t,"/credits"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t,"/reviews"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=735.ed8d0c3d.chunk.js.map