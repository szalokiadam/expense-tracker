(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{23:function(e,t,n){e.exports={total:"Balance_total__2uVBj",total__amount:"Balance_total__amount__3G5j7"}},24:function(e,t,n){e.exports={addNewItem:"NewTransaction_addNewItem__OT3ii"}},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(13),r=n.n(s),i=(n(41),n(3)),o=n(23),l=n.n(o),j=n(4),u=n(0);var b=Object(j.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions.reduce((function(e,t){return e+t.amount}),0);return Object(u.jsxs)("section",{className:l.a.total,children:[Object(u.jsx)("p",{className:"section-title",children:"Total balance:"}),Object(u.jsx)("p",{className:l.a.total__amount,children:t})]})})),d=n(5);n(48);var O=Object(j.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions,n=function(){var e=0,n=0;return t.forEach((function(t){t.amount>0?e+=t.amount:n-=t.amount})),[e,n]}(),c=Object(d.a)(n,2),a=c[0],s=c[1];return Object(u.jsx)("section",{className:"watcher",children:Object(u.jsxs)("div",{className:"watcher__container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Income"}),Object(u.jsx)("span",{className:"amount income",children:a})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Expense"}),Object(u.jsx)("span",{className:"amount expense",children:s})]})]})})})),x=n(8);n(49);function h(){var e=new Date;return"".concat(e.getFullYear()).concat(m(e.getMonth()+1)).concat(m(e.getDate()),"_").concat(m(e.getHours())).concat(m(e.getMinutes())).concat(m(e.getSeconds()))}function m(e){return e<10?"0".concat(e):"".concat(e)}function p(e,t){var n=new Date(e),c=[m(n.getFullYear()),m(n.getMonth()+1),m(n.getDate())],a=c[0],s=c[1],r=c[2];return t?t.replace(/y/i,"".concat(a)).replace(/m/i,"".concat(s)).replace(/d/i,"".concat(r)):"".concat(a,"-").concat(s,"-").concat(r)}n(50);var f="NEW_TRANSACTION",v="SET_TRANSACTIONS",g="DELETE_TRANSACTION",N="DELETE_TRANSACTIONS",y="SET_LOGGED_IN",_="USER_NAME";var T=Object(j.b)((function(e){return{transactions:e.transactions}}),(function(e){return{deleteTransaction:function(t){return e({type:g,payload:t})}}}))((function(e){var t=e.editable,n=void 0!==t&&t,s=e.filteredTransactions,r=void 0===s?null:s,i=e.maxElements,o=void 0===i?null:i,l=e.transactions,j=e.deleteTransaction,b=r||l;b=o?b.slice(-o):b;var d=a.a.createRef();return Object(c.useEffect)((function(){d.current.scrollIntoView()}),[d]),Object(u.jsxs)("ul",{className:"transactions__list",children:[b.map((function(e){var t=p(e.created);return Object(u.jsxs)("li",{className:e.amount<0?"negative":"positive",children:[Object(u.jsx)("span",{className:"trans_date",children:t}),Object(u.jsx)("span",{className:"trans_title",children:e.title}),Object(u.jsx)("span",{className:"trans_amount",children:e.amount}),n&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("button",{className:"trans_delete",onClick:function(){j(e)},children:["Delete ",Object(u.jsx)(x.h,{})]})})]},e.id)})),Object(u.jsx)("li",{className:"dummy",ref:d})]})}));var C=Object(j.b)((function(e){return{transactions:e.transactions,maxTransactions:e.maxTransactions}}),(function(e){return{deleteAll:function(t){return e({type:N,payload:t})}}}))((function(e){var t=e.transactions,n=e.deleteAll,a=Object(c.useReducer)((function(e){return!e})),s=Object(d.a)(a,2),r=s[0],i=s[1];return Object(u.jsxs)("section",{className:"transactions",children:[Object(u.jsxs)("div",{className:"transactions__header",children:[Object(u.jsxs)("p",{className:"section-title",children:["Transactions (last ",8," elements)"]}),Object(u.jsx)("div",{className:"trans_buttons",children:t.length>0&&(r&&t.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("button",{title:"Clear All",className:"trans_save",onClick:function(){n()},children:["Clear All ",Object(u.jsx)(x.g,{})]}),Object(u.jsxs)("button",{title:"Save",className:"trans_save",onClick:i,children:["Save ",Object(u.jsx)(x.e,{})]})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("button",{title:"Edit",className:"trans_edit",onClick:i,children:["Edit",Object(u.jsx)(x.b,{})]})}))})]}),Object(u.jsx)(T,{editable:r,maxElements:8})]})})),k=n(31),S=n.n(k),w=n(24),I=n.n(w);var E=Object(j.b)((function(e){return{transactions:e.transactions,maxTransactions:e.maxTransactions}}),(function(e){return{onCreatePressed:function(t){return e({type:f,payload:t})},onLoadPage:function(t){return e({type:"GET_TRANSACTIONS",payload:t})}}}))((function(e){e.transactions,e.maxTransactions;var t=e.onCreatePressed,n=(e.onLoadPage,e.dispatch,Object(c.useState)("")),a=Object(d.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(c.useReducer)((function(e){return!e}),!1),O=Object(d.a)(b,2),x=O[0],m=O[1];return Object(u.jsxs)("section",{className:I.a.addNewItem,children:[Object(u.jsx)("button",{className:"primary",type:"submit",onClick:m,children:"Add new item"}),Object(u.jsxs)(S.a,{isOpen:x,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:m,className:I.a.addNewItem,ariaHideApp:!1,style:{overlay:{backgroundColor:"rgba(238, 238, 238, 0.7)"},content:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",background:"#282828",borderRadius:"5px",border:"1px solid #424242",outline:"none",padding:"20px",width:"calc(100% - 30px)",maxWidth:"400px",boxSizing:"border-box"}},children:[Object(u.jsx)("p",{className:"section-title",children:"Add new item"}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),s&&l){var n=parseInt(l,10),c={id:h(),title:s,amount:n,created:(new Date).getTime()};r(""),j(""),t(c),m()}},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Title:"}),Object(u.jsx)("input",{autoFocus:!0,placeholder:"Item name",name:"title",type:"text",value:s,onChange:function(e){r(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Amount:"}),Object(u.jsx)("input",{placeholder:"Item cost",name:"amount",type:"number",value:l,onChange:function(e){j(e.target.value)}})]}),Object(u.jsx)("button",{className:"primary",type:"submit",children:"Add to list"})]})]})]})}));n(60);function D(){return Object(u.jsxs)("div",{className:"expense-tracker",children:[Object(u.jsx)(b,{}),Object(u.jsx)(O,{}),Object(u.jsx)(C,{}),Object(u.jsx)(E,{})]})}n(61);function A(){return Object(u.jsxs)("div",{className:"error-404",children:[Object(u.jsx)("div",{className:"background"}),Object(u.jsxs)("div",{className:"error-text",children:[Object(u.jsx)("h2",{children:"Error 404"}),Object(u.jsx)("p",{children:"The page does not exist!"})]})]})}n(62);function R(){return Object(u.jsxs)("div",{className:"loginError",children:[Object(u.jsxs)("h2",{children:["Welcome to",Object(u.jsx)("br",{})," Expense Tracker"]}),Object(u.jsx)("p",{children:"This app is for those who like to keep track of what they spent their money on"}),Object(u.jsx)("p",{children:"Please Login to use"})]})}var L=n(36);n(63);function P(e){var t=e.transactions,n=e.parentCallback,a=new Date,s=Object(c.useState)(p(a)),r=Object(d.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(p(a)),j=Object(d.a)(l,2),b=j[0],O=j[1],x=p(a);return Object(u.jsxs)("section",{className:"dateRange",children:[Object(u.jsx)("p",{children:"Select Date Range"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=new Date(i).setHours(0,0,0,0),a=new Date(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(e);return n.setDate(n.getDate()+t),n.getTime()}(b,1)).setHours(0,0,0,0),s=t.filter((function(e){return c<=e.created&&e.created<=a}));n(s)},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Star Date:"}),Object(u.jsx)("input",{type:"date",value:i,onChange:function(e){return o(e.target.value)},max:b})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"End Date:"}),Object(u.jsx)("input",{type:"date",value:b,onChange:function(e){return O(e.target.value)},min:i,max:x})]}),Object(u.jsx)("button",{className:"primary",type:"submit",children:"Select Date"})]})]})}var F=Object(j.b)((function(e){return{transactions:e.transactions}}))((function(e){var t=e.transactions,n=Object(c.useState)([]),a=Object(d.a)(n,2),s=a[0],r=a[1];return Object(u.jsxs)("div",{className:"expense-tracker",children:[Object(u.jsx)(P,{transactions:t,parentCallback:function(e){r(Object(L.a)(t))}}),Object(u.jsx)("section",{className:"transactions",children:Object(u.jsx)(T,{filteredTransactions:s})})]})})),B=n(11);n(64);n(65);var U=Object(j.b)((function(e){return{loggedIn:e.loggedIn,user:e.user}}),(function(e){return{setLogin:function(t){return e(function(e){return{type:y,payload:e}}(t))},setUserName:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))((function(e){var t=e.parentCallback,n=e.loggedIn,a=e.setLogin,s=e.user,r=e.setUserName,i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(""),O=Object(d.a)(b,2),h=O[0],m=O[1],p=Object(c.useState)(!0),f=Object(d.a)(p,2),v=f[0],g=f[1];function N(e){e.preventDefault();var t=function(e){var t=e.username;return e.password,t}({username:l,password:h});t?(g(!0),a(!0),y(),r(l)):g(!1)}function y(){t()}var _=function(){y(),a(!1)};return n?Object(u.jsxs)("div",{className:"loginInner",children:[Object(u.jsx)("h2",{children:"Profile"}),Object(u.jsxs)("p",{children:["User: ",s]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(B.b,{to:"/",onClick:y,children:Object(u.jsxs)("button",{type:"button",className:"neutral",children:[Object(u.jsx)("span",{className:"button-icon",children:Object(u.jsx)(x.d,{})}),"Latest Transactions"]})}),Object(u.jsx)(B.b,{to:"/monthly-transactions",onClick:y,children:Object(u.jsxs)("button",{type:"button",className:"neutral",children:[Object(u.jsx)("span",{className:"button-icon",children:Object(u.jsx)(x.f,{})}),"Transactions by Date"]})}),Object(u.jsxs)("button",{type:"button",onClick:_,className:"neutral",children:[Object(u.jsx)("span",{className:"button-icon",children:Object(u.jsx)(x.c,{style:{transform:"rotate(180deg)"}})}),"Logout"]})]}),Object(u.jsxs)("span",{className:"version",children:["version: ","0.1.4"]})]}):Object(u.jsxs)("div",{className:"loginInner loginBox",children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsx)("span",{className:"error",children:!v&&"Username/password invalid"}),Object(u.jsxs)("form",{onSubmit:N,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"User name:"}),Object(u.jsx)("input",{name:"username",type:"text",value:l,onChange:function(e){j(e.target.value),g(!0)},autoFocus:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Password:"}),Object(u.jsx)("input",{name:"password",type:"password",value:h,onChange:function(e){m(e.target.value),g(!0)}})]}),Object(u.jsx)("button",{type:"submit",className:"primary",children:"Login"})]})]})}));var G=Object(j.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.loggedIn,n=Object(c.useReducer)((function(e){return!e}),!1),a=Object(d.a)(n,2),s=a[0],r=a[1];return Object(u.jsxs)("div",{className:"login-container",children:[t?"":Object(u.jsx)("button",{className:"register-button neutral",children:"Register"}),Object(u.jsxs)("button",{className:"login-button primary",onClick:r,children:[Object(u.jsx)("span",{className:"button-icon",children:Object(u.jsx)(x.i,{})}),t?"Profile":"Login"]}),s&&Object(u.jsx)(U,{parentCallback:function(){r()}})]})}));function H(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:"title",children:Object(u.jsx)(B.b,{to:"/",children:"Expense Tracker"})}),Object(u.jsx)(G,{})]})}function M(){return Object(u.jsx)("footer",{})}var W=Object(j.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.loggedIn;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"Background"}),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(H,{}),Object(u.jsxs)("main",{children:[!t&&Object(u.jsx)(i.a,{to:"/home"}),Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.a,{exact:!0,from:"/",to:"/home"}),Object(u.jsx)(i.b,{path:"/home",children:t?Object(u.jsx)(D,{}):Object(u.jsx)(R,{})}),Object(u.jsx)(i.b,{path:"/monthly-transactions",children:Object(u.jsx)(F,{})}),Object(u.jsx)(i.b,{path:"*",children:Object(u.jsx)(A,{})})]})]}),Object(u.jsx)(M,{})]})]})}));n(70);function J(){return Object(u.jsx)("div",{className:"loadingScreen",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)(x.a,{})})})}var V=n(12),Y=n(20),q=n(33),z=n.n(q),K=n(34),Q=n.n(K),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f:var a=c;return e.concat(a);case v:return c;case g:var s=c;return e.filter((function(e){return e.id!==s.id}));case N:return[];default:return e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;if(n===y){return c}return e},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;if(n===_){return c}return e},ee=Object(V.a)({transactions:X,loggedIn:Z,user:$}),te={key:"root",storage:z.a,stateReconciler:Q.a},ne=Object(Y.a)(te,ee),ce=Object(V.b)(ne),ae=n(35);n(73).config();var se=ce,re=Object(Y.b)(se);r.a.render(Object(u.jsx)(j.a,{store:se,children:Object(u.jsx)(ae.PersistGate,{persistor:re,loading:Object(u.jsx)(J,{}),children:Object(u.jsx)(B.a,{children:Object(u.jsx)(W,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.680d1862.chunk.js.map