(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(14),r=n.n(s),i=(n(40),n(4)),o=n(5),l=(n(41),n(0));function j(e){var t=e.expense,n=void 0===t?0:t,c=e.income,a=void 0===c?0:c,s=Math.floor(a/(n+a)*100);return Object(l.jsx)("section",{className:"balance-range",children:isNaN(s)?"":Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"range-container",children:[Object(l.jsx)("span",{className:"range-income",style:{width:"".concat(s,"%")}}),Object(l.jsx)("span",{className:"range-expense"})]})})})}n(43);var u=n(3);var b=Object(u.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions,n=function(){var e=0,n=0;return t.forEach((function(t){t.amount>0?e+=t.amount:n-=t.amount})),[e,n,e-n]}(),c=Object(o.a)(n,3),a=c[0],s=c[1],r=c[2];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"watcher",children:Object(l.jsxs)("div",{className:"watcher__container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Income"}),Object(l.jsx)("span",{className:"amount income",children:a})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Total"}),Object(l.jsx)("span",{className:"amount total",children:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Expense"}),Object(l.jsx)("span",{className:"amount expense",children:s})]})]})}),Object(l.jsx)(j,{expense:s,income:a})]})}));n(49);function d(){var e=new Date;return"".concat(e.getFullYear()).concat(O(e.getMonth()+1)).concat(O(e.getDate()),"_").concat(O(e.getHours())).concat(O(e.getMinutes())).concat(O(e.getSeconds()))}function O(e){return e<10?"0".concat(e):"".concat(e)}function x(e,t){var n=new Date(e),c=[O(n.getFullYear()),O(n.getMonth()+1),O(n.getDate())],a=c[0],s=c[1],r=c[2];return t?t.replace(/y/i,"".concat(a)).replace(/m/i,"".concat(s)).replace(/d/i,"".concat(r)):"".concat(a,"-").concat(s,"-").concat(r)}function m(e){var t=x(e),n=[O(e.getHours()),O(e.getMinutes())],c=n[1];return[t,"".concat(n[0],":").concat(c)]}n(50);var h=n(8),p=n(13),f=n.n(p),g="NEW_TRANSACTION",v="UPDATE_TRANSACTION",N="DELETE_TRANSACTION",y="DELETE_TRANSACTIONS",T="SET_LOGGED_IN",C=function(e){return{type:T,payload:e}},S="USER_NAME",E="TOGGLE_TRANSACTION_MODAL",_=function(e){var t=e.open,n=e.edit;return{type:E,payload:{open:t,edit:n}}},w="SET_SETTINGS";var k=Object(u.b)(null,(function(e){return{toggleModal:function(t){return e(_(t))},newTransactionAction:function(t){return e({type:g,payload:t})},updateTransaction:function(t){return e({type:v,payload:t})},deleteTransaction:function(t){return e({type:N,payload:t})}}}))((function(e){var t=e.newTransactionAction,n=e.edit,a=e.toggleModal,s=e.deleteTransaction,r=e.updateTransaction,i=new Date,j=Object(c.useState)(""),u=Object(o.a)(j,2),b=u[0],O=u[1],x=Object(c.useState)(""),h=Object(o.a)(x,2),p=h[0],f=h[1],g=Object(c.useState)(m(i).join("T")),v=Object(o.a)(g,2),N=v[0],y=v[1];function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.preventDefault();var c=C(n);c&&(t(c),a({open:!1}))}function C(e){if(b&&p&&N){var t=parseInt(p,10),n=new Date(N).getTime();return{id:e||d(),title:b,amount:t,created:n}}}return Object(c.useEffect)((function(){if(n){var e=new Date(n.created);O(n.title),f(n.amount),y(m(e).join("T"))}}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"section-title",children:n?"Edit item":"Add new item"}),Object(l.jsxs)("form",{onSubmit:n?function(e){T(e,r,n.id)}:function(e){T(e,t)},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Date:"}),Object(l.jsx)("input",{autoFocus:!1,placeholder:"Date",name:"title",type:"datetime-local",value:N,max:N,onChange:function(e){y(e.target.value)}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Title:"}),Object(l.jsx)("input",{autoFocus:!n,placeholder:"Item name",name:"title",type:"text",value:b,onChange:function(e){O(e.target.value)}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Amount:"}),Object(l.jsx)("input",{placeholder:"Item cost",name:"amount",type:"number",value:p,onChange:function(e){f(e.target.value)},min:-999999,max:999999})]}),Object(l.jsx)("div",{className:"buttons-container",children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"primary",type:"submit",children:"Save"}),Object(l.jsx)("button",{className:"neutral",type:"button",onClick:function(){s(n),a({open:!1})},children:"Delete"})]}):Object(l.jsx)("button",{className:"primary",type:"submit",children:"Add to list"})})]})]})}));var D=Object(u.b)((function(e){return{transactionModal:e.transactionModal}}),(function(e){return{toggleModal:function(t){return e(_(t))}}}))((function(e){var t=e.toggleModal,n=e.open,c=e.edit;return Object(l.jsx)(f.a,{isOpen:n,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:function(){t({open:!1})},overlayClassName:"NewItem-Modal-Overlay",className:"NewItem-Modal-Content",ariaHideApp:!1,children:Object(l.jsx)(k,{edit:c})})}));var I=Object(u.b)((function(e){return{transactions:e.transactions,transactionModal:e.transactionModal}}),(function(e){return{toggleModal:function(t){return e(_(t))}}}))((function(e){var t=e.filteredTransactions,n=void 0===t?null:t,s=e.maxElements,r=void 0===s?null:s,i=e.transactions,o=e.toggleModal,j=e.transactionModal,u=n||i;u=r?u.slice(-r):u;var b=a.a.createRef();return Object(c.useEffect)((function(){o({open:!1})}),[o]),Object(c.useEffect)((function(){b.current.scrollIntoView()}),[b]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("ul",{className:"transactions__list",children:[u.map((function(e){var t=x(e.created);return Object(l.jsxs)("li",{className:e.amount<0?"negative":"positive",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"trans_date",children:t}),Object(l.jsx)("span",{className:"trans_title",children:e.title})]}),Object(l.jsx)("span",{className:"trans_amount",children:e.amount}),Object(l.jsx)("button",{title:"Edit",className:"trans_show-more",onClick:function(){o({open:!0,edit:e})},children:Object(l.jsx)(h.a,{})})]},e.id)})),Object(l.jsx)("li",{className:"dummy",ref:b})]}),Object(l.jsx)(D,{open:j.open,edit:j.edit})]})}));var M=Object(u.b)((function(e){var t;return{maxTransactions:null===(t=e.settings)||void 0===t?void 0:t.maxTransactions}}))((function(e){var t=e.maxTransactions;return Object(l.jsxs)("section",{className:"transactions",children:[Object(l.jsx)("div",{className:"transactions__header",children:Object(l.jsxs)("p",{className:"section-title",children:["Transactions (last ",t," elements)"]})}),Object(l.jsx)(I,{maxElements:t})]})}));n(60);var A=Object(u.b)((function(e){return{transactionModal:e.transactionModal}}),(function(e){return{toggleModal:function(t){return e(_(t))}}}))((function(e){var t=e.toggleModal;return Object(l.jsx)("section",{className:"addNewItem",children:Object(l.jsx)("button",{className:"primary",type:"submit",onClick:function(){t({open:!0,edit:!1})},children:"Add new item"})})}));n(61);function L(){return Object(l.jsxs)("div",{className:"expense-tracker",children:[Object(l.jsx)(b,{}),Object(l.jsx)(M,{}),Object(l.jsx)(A,{})]})}n(62);function R(){return Object(l.jsxs)("div",{className:"error-404",children:[Object(l.jsx)("div",{className:"background"}),Object(l.jsxs)("div",{className:"error-text",children:[Object(l.jsx)("h2",{children:"Error 404"}),Object(l.jsx)("p",{children:"The page does not exist!"})]})]})}n(63);function F(){return Object(l.jsxs)("div",{className:"loginError",children:[Object(l.jsxs)("h2",{children:["Welcome to",Object(l.jsx)("br",{})," Expense Tracker"]}),Object(l.jsx)("p",{children:"This app is for those who like to keep track of what they spent their money on"}),Object(l.jsx)("p",{children:"Please Login to use"})]})}var U=n(23);n(64);function H(e){var t=e.transactions,n=e.parentCallback,a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],i=s[1],j=new Date,u=Object(c.useState)(x(j)),b=Object(o.a)(u,2),d=b[0],O=b[1],m=Object(c.useState)(x(j)),h=Object(o.a)(m,2),p=h[0],f=h[1],g=x(j);function v(){var e=new Date(d).setHours(0,0,0,0),n=new Date(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(e);return n.setDate(n.getDate()+t),n.getTime()}(p,1)).setHours(0,0,0,0);return t.filter((function(t){return e<=t.created&&t.created<n}))}return Object(c.useEffect)((function(){if(r){var e=v();n(e)}}),[t]),Object(l.jsxs)("section",{className:"dateRange",children:[Object(l.jsx)("p",{className:"section-title",children:"Select Date Range"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=v();i(!0),n(t)},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Start Date:"}),Object(l.jsx)("input",{type:"date",value:d,onChange:function(e){return O(e.target.value)},max:p})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"End Date:"}),Object(l.jsx)("input",{type:"date",value:p,onChange:function(e){return f(e.target.value)},min:d,max:g})]}),Object(l.jsx)("button",{className:"primary",type:"submit",children:"Select Date"})]})]})}var G=Object(u.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions,n=Object(c.useState)([]),a=Object(o.a)(n,2),s=a[0],r=a[1];return Object(l.jsxs)("div",{className:"expense-tracker",children:[Object(l.jsx)(H,{transactions:t,parentCallback:function(e){r(Object(U.a)(e))}}),Object(l.jsx)("section",{className:"transactions",children:Object(l.jsx)(I,{filteredTransactions:s})})]})})),P=n(10);n(65),n(66);function X(e){var t=e.linkTo,n=e.action,c=e.text,a=e.icon,s=e.buttonCls,r=e.disabled,i=void 0!==r&&r;return Object(l.jsx)("button",{type:"button",className:s,onClick:function(){n()},children:t?Object(l.jsxs)(P.b,{to:t,disabled:i,className:"button",children:[a&&Object(l.jsx)("span",{className:"button-icon",children:a}),c]}):Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)("span",{className:"button-icon",children:a}),c]})})}n(71);var B=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}),(function(e){return{setLogin:function(t){return e(C(t))}}}))((function(e){var t=e.toggle,n=e.setLogin,c=Object(i.g)();function a(){t()}return Object(l.jsxs)("div",{className:"menuInner",children:[Object(l.jsx)("div",{className:"close",children:Object(l.jsx)("span",{onClick:a,children:Object(l.jsx)(h.h,{})})}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)(X,{linkTo:"/",action:a,text:"Latest Transactions",icon:Object(l.jsx)(h.e,{}),buttonCls:"neutral"}),Object(l.jsx)(X,{linkTo:"/monthly-transactions",action:a,text:"Transactions by Date",icon:Object(l.jsx)(h.f,{}),buttonCls:"neutral"}),Object(l.jsx)(X,{linkTo:"/settings",action:a,text:"Settings",icon:Object(l.jsx)(h.b,{}),buttonCls:"neutral"}),Object(l.jsx)(X,{linkTo:"/",action:function(){n(!1),t(),c.push("/")},text:"Logout",icon:Object(l.jsx)(h.d,{style:{transform:"rotate(180deg)"}}),buttonCls:"neutral"})]}),Object(l.jsxs)("span",{className:"version",children:["version: [","0.1.9","]"]})]})}));n(72);var V=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.loggedIn,n=Object(c.useReducer)((function(e){return!e}),!1),a=Object(o.a)(n,2),s=a[0],r=a[1];return Object(l.jsxs)("div",{className:"login-container",children:[t?Object(l.jsx)(X,{action:r,text:"Profile",buttonCls:"profile-button primary",icon:Object(l.jsx)(h.g,{})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(X,{action:function(){},text:"Register",buttonCls:"register-button neutral"}),Object(l.jsx)(X,{action:function(){},linkTo:"/login",text:"Login",buttonCls:"login-button primary",icon:Object(l.jsx)(h.g,{})})]}),Object(l.jsx)(f.a,{closeTimeoutMS:500,isOpen:s,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:r,className:"Menu-Modal",ariaHideApp:!1,style:{overlay:{backgroundColor:"rgba(238, 238, 238, 0)"}},children:Object(l.jsx)(B,{toggle:r})})]})}));function q(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{className:"title",children:Object(l.jsx)(P.b,{to:"/",children:"Expense Tracker"})}),Object(l.jsx)(V,{})]})}function J(){return Object(l.jsx)("footer",{})}n(73);var W=Object(u.b)((function(e){return{loggedIn:e.loggedIn,user:e.user}}),(function(e){return{setLogin:function(t){return e(C(t))},setUserName:function(t){return e(function(e){return{type:S,payload:e}}(t))}}}))((function(e){var t=e.setLogin,n=e.setUserName,a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],j=s[1],u=Object(c.useState)(""),b=Object(o.a)(u,2),d=b[0],O=b[1],x=Object(c.useState)(!0),m=Object(o.a)(x,2),h=m[0],p=m[1],f=Object(i.g)();return Object(l.jsxs)("div",{className:"loginInner loginBox",children:[Object(l.jsx)("h2",{children:"Login"}),Object(l.jsx)("span",{className:"error",children:!h&&"Username/password invalid"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=function(e){var t=e.username;return e.password,t}({username:r,password:d});c?(p(!0),t(!0),f.push("/"),n(r)):p(!1)},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"User name:"}),Object(l.jsx)("input",{name:"username",type:"text",value:r,onChange:function(e){j(e.target.value),p(!0)},autoFocus:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Password:"}),Object(l.jsx)("input",{name:"password",type:"password",value:d,onChange:function(e){O(e.target.value),p(!0)}})]}),Object(l.jsx)("button",{type:"submit",className:"primary",children:"Login"})]})]})})),Y=n(17);n(74);var z=Object(u.b)((function(e){return{settings:e.settings}}),(function(e){return{setSettings:function(t){return e({type:w,payload:t})}}}))((function(e){var t=e.settings,n=e.setSettings,a=Object(c.useState)(t),s=Object(o.a)(a,2),r=s[0],i=s[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],d=u[1];function O(e){i(Object(Y.a)(Object(Y.a)({},r),e))}return Object(l.jsxs)("section",{className:"settings",children:[Object(l.jsxs)("div",{className:"settings__header",children:[Object(l.jsx)("p",{className:"section-title",children:"Settings"}),Object(l.jsx)("button",{type:"button",className:"primary",onClick:function(){n(Object(Y.a)(Object(Y.a)({},t),r)),d(!0)},children:"Save"})]}),Object(l.jsxs)("div",{className:"settings__content",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{className:"label",children:"Maximum transactions"}),Object(l.jsx)("select",{name:"max-transaction",value:r.maxTransactions,onChange:function(e){return O({maxTransactions:Number(e.target.value)})},children:Array.from(Array(51).keys()).filter((function(e){return e>0&&e%5===0})).map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{className:"label",children:"Change User Name"}),Object(l.jsx)("input",{maxLength:60,type:"text",value:null===r||void 0===r?void 0:r.userName,onChange:function(e){return O({userName:e.target.value})}})]})]}),Object(l.jsx)(f.a,{isOpen:b,ariaHideApp:!1,overlayClassName:"Settings-Modal-Overlay",className:"Settings-Modal-Content",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Save completed!"}),Object(l.jsx)("button",{type:"button",className:"primary",onClick:function(){return d(!1)},children:"Ok"})]})})]})}));var K=Object(u.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.loggedIn;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"Background"}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(q,{}),Object(l.jsxs)("main",{children:[!t&&Object(l.jsx)(i.a,{to:"/home"}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.a,{exact:!0,from:"/",to:"/home"}),Object(l.jsx)(i.b,{path:"/home",children:t?Object(l.jsx)(L,{}):Object(l.jsx)(F,{})}),Object(l.jsx)(i.b,{path:"/login",children:t?Object(l.jsx)(i.a,{to:"/home"}):Object(l.jsx)(W,{})}),Object(l.jsx)(i.b,{path:"/monthly-transactions",children:Object(l.jsx)(G,{})}),Object(l.jsx)(i.b,{path:"/settings",children:Object(l.jsx)(z,{})}),Object(l.jsx)(i.b,{path:"*",children:Object(l.jsx)(R,{})})]})]}),Object(l.jsx)(J,{})]})]})}));n(75);function Q(){return Object(l.jsx)("div",{className:"loadingScreen",children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)(h.c,{})})})}var Z=n(12),$=n(22),ee=n(33),te=n.n(ee),ne=n(34),ce=n.n(ne),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;function a(e){return e.sort((function(e,t){return e.created-t.created}))}switch(n){case g:var s=c,r=[].concat(Object(U.a)(e),[s]);return a(r);case v:var i=e.map((function(e){return e.id===c.id?c:e}));return a(i);case N:var o=c;return e.filter((function(e){return e.id!==o.id}));case y:return[];default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;if(n===T){return c}return e},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;if(n===S){return c}return e},ie={maxTransactions:15,userName:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===w?c:e},le=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===E?{open:c.open,edit:c.edit}:e},je=Object(Z.a)({transactions:ae,loggedIn:se,user:re,transactionModal:le,settings:oe}),ue={key:"expense-tracker",storage:te.a,stateReconciler:ce.a},be=Object($.a)(ue,je),de=Object(Z.b)(be,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Oe=n(35);n(78).config();var xe=de,me=Object($.b)(xe);r.a.render(Object(l.jsx)(u.a,{store:xe,children:Object(l.jsx)(Oe.PersistGate,{persistor:me,loading:Object(l.jsx)(Q,{}),children:Object(l.jsx)(P.a,{children:Object(l.jsx)(K,{})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.ceed54fe.chunk.js.map