(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(13),r=n.n(s),o=(n(39),n(4)),i=n(5),l=(n(40),n(0));function j(e){var t=e.expense,n=void 0===t?0:t,c=e.income,a=void 0===c?0:c,s=Math.floor(a/(n+a)*100)||0;return console.log("income:",a),console.log("incomeWidth:",s),Object(l.jsx)("section",{className:"balance-range",children:s?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"range-container",children:[Object(l.jsx)("span",{className:"range-income",style:{width:"".concat(s,"%")}}),Object(l.jsx)("span",{className:"range-expense"})]})}):""})}n(42);var u=n(3);var d=Object(u.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions,n=function(){var e=0,n=0;return t.forEach((function(t){t.amount>0?e+=t.amount:n-=t.amount})),[e,n,e-n]}(),c=Object(i.a)(n,3),a=c[0],s=c[1],r=c[2];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"watcher",children:Object(l.jsxs)("div",{className:"watcher__container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Income"}),Object(l.jsx)("span",{className:"amount income",children:a})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Total"}),Object(l.jsx)("span",{className:"amount total",children:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Expense"}),Object(l.jsx)("span",{className:"amount expense",children:s})]})]})}),Object(l.jsx)(j,{expense:s,income:a})]})}));n(48);function b(){var e=new Date;return"".concat(e.getFullYear()).concat(O(e.getMonth()+1)).concat(O(e.getDate()),"_").concat(O(e.getHours())).concat(O(e.getMinutes())).concat(O(e.getSeconds()))}function O(e){return e<10?"0".concat(e):"".concat(e)}function x(e,t){var n=new Date(e),c=[O(n.getFullYear()),O(n.getMonth()+1),O(n.getDate())],a=c[0],s=c[1],r=c[2];return t?t.replace(/y/i,"".concat(a)).replace(/m/i,"".concat(s)).replace(/d/i,"".concat(r)):"".concat(a,"-").concat(s,"-").concat(r)}function h(e){var t=x(e),n=[O(e.getHours()),O(e.getMinutes())],c=n[1];return[t,"".concat(n[0],":").concat(c)]}n(49);var p=n(9),m="NEW_TRANSACTION",f="UPDATE_TRANSACTION",g="DELETE_TRANSACTION",v="DELETE_TRANSACTIONS",N="SET_LOGGED_IN",y=function(e){return{type:N,payload:e}},T="USER_NAME",E="TOGGLE_TRANSACTION_MODAL",w=function(e){var t=e.open,n=e.edit;return{type:E,payload:{open:t,edit:n}}};var C=Object(u.b)((function(e){return{transactions:e.transactions,transactionModal:e.transactionModal}}),(function(e){return{toggleModal:function(t){return e(w(t))}}}))((function(e){var t=e.editable,n=void 0!==t&&t,s=e.filteredTransactions,r=void 0===s?null:s,o=e.maxElements,i=void 0===o?null:o,j=e.transactions,u=e.toggleModal,d=r||j;d=i?d.slice(-i):d;var b=a.a.createRef();return Object(c.useEffect)((function(){b.current.scrollIntoView()}),[b]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{className:"transactions__list",children:[d.map((function(e){var t=x(e.created);return Object(l.jsxs)("li",{className:e.amount<0?"negative":"positive",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"trans_date",children:t}),Object(l.jsx)("span",{className:"trans_title",children:e.title})]}),Object(l.jsx)("span",{className:"trans_amount",children:e.amount}),n&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{title:"Edit",className:"trans_show-more",onClick:function(){u({open:!0,edit:e})},children:Object(l.jsx)(p.a,{})})})]},e.id)})),Object(l.jsx)("li",{className:"dummy",ref:b})]})})}));var D=Object(u.b)((function(e){return{transactions:e.transactions,maxTransactions:e.maxTransactions}}),(function(e){return{deleteAll:function(t){return e({type:v,payload:t})}}}))((function(e){return e.transactions,e.deleteAll,Object(l.jsxs)("section",{className:"transactions",children:[Object(l.jsx)("div",{className:"transactions__header",children:Object(l.jsxs)("p",{className:"section-title",children:["Transactions (last ",8," elements)"]})}),Object(l.jsx)(C,{editable:!0,maxElements:8})]})})),k=(n(50),n(18)),S=n.n(k);var _=Object(u.b)(null,(function(e){return{toggleModal:function(t){return e(w(t))},newTransactionAction:function(t){return e({type:m,payload:t})},updateTransaction:function(t){return e({type:f,payload:t})},deleteTransaction:function(t){return e({type:g,payload:t})}}}))((function(e){var t=e.newTransactionAction,n=e.edit,a=e.toggleModal,s=e.deleteTransaction,r=e.updateTransaction,o=new Date,j=Object(c.useState)(""),u=Object(i.a)(j,2),d=u[0],O=u[1],x=Object(c.useState)(""),p=Object(i.a)(x,2),m=p[0],f=p[1],g=Object(c.useState)(h(o).join("T")),v=Object(i.a)(g,2),N=v[0],y=v[1];function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.preventDefault();var c=E(n);c&&(t(c),a({open:!1}))}function E(e){if(d&&m&&N){var t=parseInt(m,10),n=new Date(N).getTime();return{id:e||b(),title:d,amount:t,created:n}}}return Object(c.useEffect)((function(){if(n){var e=new Date(n.created);O(n.title),f(n.amount),y(h(e).join("T"))}}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"section-title",children:n?"Edit item":"Add new item"}),Object(l.jsxs)("form",{onSubmit:n?function(e){T(e,r,n.id)}:function(e){T(e,t)},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Date:"}),Object(l.jsx)("input",{autoFocus:!1,placeholder:"Date",name:"title",type:"datetime-local",value:N,max:N,onChange:function(e){y(e.target.value)}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Title:"}),Object(l.jsx)("input",{autoFocus:!n,placeholder:"Item name",name:"title",type:"text",value:d,onChange:function(e){O(e.target.value)}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Amount:"}),Object(l.jsx)("input",{placeholder:"Item cost",name:"amount",type:"number",value:m,onChange:function(e){f(e.target.value)}})]}),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"primary",type:"submit",children:"Save"}),Object(l.jsx)("button",{className:"neutral",type:"button",onClick:function(){s(n),a({open:!1})},children:"Delete"})]}):Object(l.jsx)("button",{className:"primary",type:"submit",children:"Add to list"})]})]})}));var I=Object(u.b)((function(e){return{transactionModal:e.transactionModal}}),(function(e){return{toggleModal:function(t){return e(w(t))}}}))((function(e){var t=e.toggleModal,n=e.open,c=e.edit;return Object(l.jsx)(S.a,{isOpen:n,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:function(){t({open:!1})},className:"addNewItem",ariaHideApp:!1,style:{overlay:{backgroundColor:"rgba(238, 238, 238, 0.7)"},content:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",background:"#282828",borderRadius:"5px",border:"1px solid #424242",outline:"none",padding:"20px",width:"calc(100% - 30px)",maxWidth:"400px",boxSizing:"border-box"}},children:Object(l.jsx)(_,{edit:c})})}));var M=Object(u.b)((function(e){return{transactionModal:e.transactionModal}}),(function(e){return{toggleModal:function(t){return e(w(t))}}}))((function(e){var t=e.transactionModal,n=e.toggleModal;return Object(c.useEffect)((function(){n({open:!1})}),[n]),Object(l.jsxs)("section",{className:"addNewItem",children:[Object(l.jsx)("button",{className:"primary",type:"submit",onClick:function(){n({open:!0,edit:!1})},children:"Add new item"}),Object(l.jsx)(I,{open:t.open,edit:t.edit})]})}));n(60);function A(){return Object(l.jsxs)("div",{className:"expense-tracker",children:[Object(l.jsx)(d,{}),Object(l.jsx)(D,{}),Object(l.jsx)(M,{})]})}n(61);function L(){return Object(l.jsxs)("div",{className:"error-404",children:[Object(l.jsx)("div",{className:"background"}),Object(l.jsxs)("div",{className:"error-text",children:[Object(l.jsx)("h2",{children:"Error 404"}),Object(l.jsx)("p",{children:"The page does not exist!"})]})]})}n(62);function R(){return Object(l.jsxs)("div",{className:"loginError",children:[Object(l.jsxs)("h2",{children:["Welcome to",Object(l.jsx)("br",{})," Expense Tracker"]}),Object(l.jsx)("p",{children:"This app is for those who like to keep track of what they spent their money on"}),Object(l.jsx)("p",{children:"Please Login to use"})]})}var F=n(22);n(63);function U(e){var t=e.transactions,n=e.parentCallback,a=new Date,s=Object(c.useState)(x(a)),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)(x(a)),d=Object(i.a)(u,2),b=d[0],O=d[1],h=x(a);return Object(l.jsxs)("section",{className:"dateRange",children:[Object(l.jsx)("p",{children:"Select Date Range"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=new Date(o).setHours(0,0,0,0),a=new Date(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(e);return n.setDate(n.getDate()+t),n.getTime()}(b,1)).setHours(0,0,0,0),s=t.filter((function(e){return c<=e.created&&e.created<=a}));n(s)},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Start Date:"}),Object(l.jsx)("input",{type:"date",value:o,onChange:function(e){return j(e.target.value)},max:b})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"End Date:"}),Object(l.jsx)("input",{type:"date",value:b,onChange:function(e){return O(e.target.value)},min:o,max:h})]}),Object(l.jsx)("button",{className:"primary",type:"submit",children:"Select Date"})]})]})}var H=Object(u.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions,n=Object(c.useState)([]),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(l.jsxs)("div",{className:"expense-tracker",children:[Object(l.jsx)(U,{transactions:t,parentCallback:function(e){r(Object(F.a)(e))}}),Object(l.jsx)("section",{className:"transactions",children:Object(l.jsx)(C,{filteredTransactions:s})})]})})),G=n(10);n(64),n(65);function P(e){var t=e.linkTo,n=e.action,c=e.text,a=e.icon,s=e.buttonCls,r=e.disabled,o=void 0!==r&&r;return Object(l.jsx)("button",{type:"button",className:s,onClick:function(){n()},children:t?Object(l.jsxs)(G.b,{to:t,disabled:o,className:"button",children:[a&&Object(l.jsx)("span",{className:"button-icon",children:a}),c]}):Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)("span",{className:"button-icon",children:a}),c]})})}n(70);var W=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}),(function(e){return{setLogin:function(t){return e(y(t))}}}))((function(e){var t=e.toggle,n=e.setLogin,c=Object(o.g)();function a(){t()}return Object(l.jsxs)("div",{className:"menuInner",children:[Object(l.jsx)("div",{className:"close",children:Object(l.jsx)("span",{onClick:a,children:Object(l.jsx)(p.g,{})})}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)(P,{linkTo:"/",action:a,text:"Latest Transactions",icon:Object(l.jsx)(p.d,{}),buttonCls:"neutral"}),Object(l.jsx)(P,{linkTo:"/monthly-transactions",action:a,text:"Transactions by Date",icon:Object(l.jsx)(p.e,{}),buttonCls:"neutral"}),Object(l.jsx)(P,{linkTo:"/",action:function(){n(!1),t(),c.push("/")},text:"Logout",icon:Object(l.jsx)(p.c,{style:{transform:"rotate(180deg)"}}),buttonCls:"neutral"})]}),Object(l.jsxs)("span",{className:"version",children:["version: [","0.1.6","]"]})]})}));n(71);var X=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.loggedIn,n=Object(c.useReducer)((function(e){return!e}),!1),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(l.jsxs)("div",{className:"login-container",children:[t?Object(l.jsx)(P,{action:r,text:"Profile",buttonCls:"profile-button primary",icon:Object(l.jsx)(p.f,{})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{action:function(){},text:"Register",buttonCls:"register-button neutral"}),Object(l.jsx)(P,{action:function(){},linkTo:"/login",text:"Login",buttonCls:"login-button primary",icon:Object(l.jsx)(p.f,{})})]}),Object(l.jsx)(S.a,{closeTimeoutMS:500,isOpen:s,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:r,className:"Menu-Modal",ariaHideApp:!1,style:{overlay:{backgroundColor:"rgba(238, 238, 238, 0)"}},children:Object(l.jsx)(W,{toggle:r})})]})}));function B(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{className:"title",children:Object(l.jsx)(G.b,{to:"/",children:"Expense Tracker"})}),Object(l.jsx)(X,{})]})}function V(){return Object(l.jsx)("footer",{})}n(72);var q=Object(u.b)((function(e){return{loggedIn:e.loggedIn,user:e.user}}),(function(e){return{setLogin:function(t){return e(y(t))},setUserName:function(t){return e(function(e){return{type:T,payload:e}}(t))}}}))((function(e){var t=e.setLogin,n=e.setUserName,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],j=s[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),b=d[0],O=d[1],x=Object(c.useState)(!0),h=Object(i.a)(x,2),p=h[0],m=h[1],f=Object(o.g)();return Object(l.jsxs)("div",{className:"loginInner loginBox",children:[Object(l.jsx)("h2",{children:"Login"}),Object(l.jsx)("span",{className:"error",children:!p&&"Username/password invalid"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=function(e){var t=e.username;return e.password,t}({username:r,password:b});c?(m(!0),t(!0),f.push("/"),n(r)):m(!1)},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"User name:"}),Object(l.jsx)("input",{name:"username",type:"text",value:r,onChange:function(e){j(e.target.value),m(!0)},autoFocus:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Password:"}),Object(l.jsx)("input",{name:"password",type:"password",value:b,onChange:function(e){O(e.target.value),m(!0)}})]}),Object(l.jsx)("button",{type:"submit",className:"primary",children:"Login"})]})]})}));var J=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.loggedIn;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"Background"}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(B,{}),Object(l.jsxs)("main",{children:[!t&&Object(l.jsx)(o.a,{to:"/home"}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.a,{exact:!0,from:"/",to:"/home"}),Object(l.jsx)(o.b,{path:"/home",children:t?Object(l.jsx)(A,{}):Object(l.jsx)(R,{})}),Object(l.jsx)(o.b,{path:"/monthly-transactions",children:Object(l.jsx)(H,{})}),Object(l.jsx)(o.b,{path:"/login",children:Object(l.jsx)(q,{})}),Object(l.jsx)(o.b,{path:"*",children:Object(l.jsx)(L,{})})]})]}),Object(l.jsx)(V,{})]})]})}));n(73);function Y(){return Object(l.jsx)("div",{className:"loadingScreen",children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)(p.b,{})})})}var z=n(12),K=n(21),Q=n(32),Z=n.n(Q),$=n(33),ee=n.n($),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;function a(e){return e.sort((function(e,t){return e.created-t.created}))}switch(n){case m:var s=c,r=[].concat(Object(F.a)(e),[s]);return a(r);case f:var o=e.map((function(e){return e.id===c.id?c:e}));return a(o);case g:var i=c;return e.filter((function(e){return e.id!==i.id}));case v:return[];default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;if(n===N){return c}return e},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;if(n===T){return c}return e},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===E?{open:c.open,edit:c.edit}:e},se=Object(z.a)({transactions:te,loggedIn:ne,user:ce,transactionModal:ae}),re={key:"expense-tracker",storage:Z.a,stateReconciler:ee.a},oe=Object(K.a)(re,se),ie=Object(z.b)(oe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),le=n(34);n(76).config();var je=ie,ue=Object(K.b)(je);r.a.render(Object(l.jsx)(u.a,{store:je,children:Object(l.jsx)(le.PersistGate,{persistor:ue,loading:Object(l.jsx)(Y,{}),children:Object(l.jsx)(G.a,{children:Object(l.jsx)(J,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.3bed23bf.chunk.js.map