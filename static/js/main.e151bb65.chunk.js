(this["webpackJsonppersonal-website-framework"]=this["webpackJsonppersonal-website-framework"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),a=t.n(n),i=t(4),r=t.n(i);t(10),t(11),t(12);var j=t.p+"static/media/placeholder.74f7ff06.jpg";function l(){return Object(s.jsxs)("section",{className:"hero",children:[Object(s.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(j,")")}}),Object(s.jsx)("div",{className:"hero-content-area",children:Object(s.jsxs)("h1",{children:[" ","UNLIMITED CODE WORKS"," "]})}),Object(s.jsx)("div",{id:"about",className:"hero-content-area",children:Object(s.jsx)("h3",{children:"Hi, my name is Kartikeya, I'm a fullstack web developer. Welcome to my website."})})]})}var d=t(2);t(13);function o(e){var c=e.url,t=e.more;return""===c?Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)("a",{href:t,className:"btn btn-warning",children:"Read More"})}):""===t?Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)("a",{href:c,className:"btn btn-primary",children:"Demo"})}):Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("a",{href:c,className:"btn btn-primary",children:"Demo"}),Object(s.jsx)("a",{href:t,className:"btn btn-info",children:"Read More"})]})}function b(e){var c=e.title,t=e.text,n=e.url,a=e.thumbnail,i=e.more;return Object(s.jsxs)("div",{className:"card",style:{backgroundImage:"url(".concat(a,")")},children:[Object(s.jsx)("img",{src:a,className:"card-img",alt:"..."}),Object(s.jsxs)("div",{className:"card-img-overlay d-flex flex-column justify-content-between",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h5",{className:"card-title",children:c}),Object(s.jsx)("p",{className:"card-text",children:t})]}),Object(s.jsx)(o,{url:n,more:i})]})]})}t(14);function h(){var e=Object(n.useState)(!1),c=Object(d.a)(e,2),t=c[0],a=c[1],i=Object(n.useState)(null),r=Object(d.a)(i,2),j=r[0],l=r[1],o=Object(n.useState)([]),h=Object(d.a)(o,2),m=h[0],x=h[1];return Object(n.useEffect)((function(){fetch("https://unlimited-code-works-server.herokuapp.com/api/projects").then((function(e){return e.json()})).then((function(e){a(!0),x(e)}),(function(e){l(e),console.log(e)}))}),[]),j?Object(s.jsxs)("div",{className:"destinations",children:["Error: ",j.message]}):t?Object(s.jsxs)("section",{className:"projects",children:[Object(s.jsx)("h3",{className:"title",children:"Some of my Work:"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{children:Object(s.jsx)("ul",{className:"grid",children:m.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(b,{title:e.title,text:e.description,url:e.url,thumbnail:e.thumbnail,more:e.readMore})},e._id)}))})})]}):Object(s.jsx)("div",{className:"destinations",children:"Loading..."})}var m=t.p+"static/media/mongoDB.06f6ca45.png",x=t.p+"static/media/expressjs.890c1bd9.png",u=t.p+"static/media/react.c8f929cb.png",O=t.p+"static/media/nodejs.fb847427.png";function f(){return Object(s.jsxs)("section",{className:"packages",children:[Object(s.jsx)("h3",{className:"title",children:"Technologies I have worked with"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("ul",{className:"grid",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{className:"img-fluid",src:m,alt:"MongoDb"}),Object(s.jsx)("h4",{children:"Mongo DB"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{className:"img-fluid",src:x,alt:"Express.js"}),Object(s.jsx)("h4",{children:"Express.js"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{className:"img-fluid",src:u,alt:"React"}),Object(s.jsx)("h4",{children:"React"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{className:"img-fluid",src:O,alt:"Nodejs"}),Object(s.jsx)("h4",{children:"node"})]})]})]})}function p(){return Object(s.jsxs)("footer",{children:[Object(s.jsxs)("p",{children:["Images courtesy of ",Object(s.jsx)("a",{href:"http://unsplash.com/",children:"unsplash"}),"."]}),Object(s.jsx)("p",{children:"Contact me on these platforms"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{id:"linkedin",href:"https://www.linkedin.com/in/kartikeya-arun/",children:Object(s.jsx)("i",{class:"fa fa-linkedin-square fa-2x"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{id:"github",href:"https://github.com/Watch-D0GS",children:Object(s.jsx)("i",{class:"fa fa-github-square fa-2x"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{id:"codepen",href:"https://codepen.io/c-h-o-c-o-l-a-t-e",children:Object(s.jsx)("i",{class:"fa fa-codepen fa-2x"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{id:"instagram",href:"https://www.instagram.com/kartikeya_arun/",children:Object(s.jsx)("i",{class:"fab fa-instagram-square fa-2x"})})})]})]})}var g=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),Object(s.jsx)(h,{}),Object(s.jsx)(f,{}),Object(s.jsx)(p,{})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),N()}],[[15,1,2]]]);
//# sourceMappingURL=main.e151bb65.chunk.js.map