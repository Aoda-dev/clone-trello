(this["webpackJsonptrello-react"]=this["webpackJsonptrello-react"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(7),a=n.n(i),r=n(14),o=n.n(r),s=(n(23),n(16)),d=n(10),u=n(8),l=(n(24),function(e){var t=e.id,n=e.deleteDesk,i=e.name;return Object(c.jsxs)("div",{className:"Desk",children:[Object(c.jsx)("div",{onClick:n.bind(undefined,t),className:"Desk__delete",children:"X"}),i]})}),b=n(17),j=(n(25),void 0),f=function(e){var t=e.update,n=Object(i.useState)(!1),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(i.useState)(""),l=Object(d.a)(s,2),f=l[0],h=l[1],p=function(){if(!f.trim().length)return alert("\u043d\u0430\u0439\u0441 \u043f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),null;u.a.firestore().collection("desks").add({name:f}).then((function(e){return e.get()})).then((function(e){t(Object(b.a)({id:e.id},e.data()))})).then((function(){return h("")})).catch((function(e){return console.log(e)}))};return r?Object(c.jsxs)("div",{className:"CreateShowDesk",children:[Object(c.jsx)("p",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"}),Object(c.jsx)("input",{onKeyDown:function(e){13===e.keyCode&&p()},autoFocus:!0,type:"text",value:f,onChange:function(e){h(e.target.value)}}),Object(c.jsx)("button",{onClick:p.bind(j),children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(c.jsx)("button",{onClick:function(){return o(!1)},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]}):Object(c.jsx)("div",{onClick:function(){o(!0)}.bind(j),className:"CreateDesk",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})},h=(n(26),function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=function(e){u.a.firestore().collection("desks").doc(e).delete().then((function(){return t=e,a(n.filter((function(e){return e.id!==t})));var t})).catch((function(e){return console.error(e)}))};return Object(i.useEffect)((function(){u.a.firestore().collection("desks").get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,name:e.data().name})})),a(t)}))}),[]),Object(c.jsxs)("div",{className:"DeskList",children:[n.map((function(e){return Object(c.jsx)(l,{id:e.id,deleteDesk:r,name:e.name},e.id)})),Object(c.jsx)(f,{update:function(e){a([].concat(Object(s.a)(n),[e]))}})]})});n(27);var p=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"My Trello App"}),Object(c.jsx)(h,{})]})};n(34),n(28),n(30);u.a.initializeApp({apiKey:"AIzaSyA7yYX44D8IkrcCdClrhK0mxz2B91kOCuU",authDomain:"trello-e73bd.firebaseapp.com",databaseURL:"https://trello-e73bd-default-rtdb.firebaseio.com",projectId:"trello-e73bd",storageBucket:"trello-e73bd.appspot.com",messagingSenderId:"695558317459",appId:"1:695558317459:web:6769ef5cc63d6996a6b466",measurementId:"G-YEPPQX27WJ"}),u.a.analytics(),o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bbf2c7a2.chunk.js.map