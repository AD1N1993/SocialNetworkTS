(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[4],{295:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__aG8Dr"}},296:function(e,a,t){e.exports={dialogs:"Message_dialogs__-WMjs",active:"Message_active__8vfNh"}},297:function(e,a,t){e.exports={"dialogs-items":"Dialogitem_dialogs-items__3DOs0","dialog__item-link":"Dialogitem_dialog__item-link__3olNe"}},303:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(295),o=t.n(i),r=t(296),l=t.n(r),c=t(297),m=t.n(c),u=t(13),g=function(e){var a="/dialogs/"+e.id;return s.a.createElement("li",{className:m.a.dialog__item},s.a.createElement(u.b,{className:m.a.dialog__itemLink,to:a},e.name))};function d(e){var a=e.dialogsData.map((function(e){return s.a.createElement(g,{name:e.name,id:e.id})}));return s.a.createElement("ul",{className:m.a.dialogsItems},a)}var f=t(11),_=t(128),b=t(129),p=t(67),h=t(86),E=function(e){return s.a.createElement("div",{className:l.a.dialogs__message},e.message)};var v=Object(h.a)(10),D=Object(b.a)({form:"message"})((function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{action:"#",onSubmit:e.handleSubmit},s.a.createElement(_.a,{type:"text",placeholder:"message",name:"message",id:"message",component:p.b,validate:[h.b,v]}),s.a.createElement("button",null,"send")))})),j=t(15),O=t(8),k=t(36),N=t(37),A=t(39),M=t(38),w=t(106),x=Object(O.compose)(Object(j.b)((function(e){return{messagesData:e.messagesPage.messagesData,dialogsData:e.messagesPage.dialogsData,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(a){e(Object(w.a)(a))}}})),(function(e){var a=function(a){Object(A.a)(n,a);var t=Object(M.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(f.a,{to:"/login"})}}]),n}(s.a.Component);return Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}))(a)}))((function(e){var a=e.messagesData.map((function(e){return s.a.createElement(E,{message:e.message,id:e.id})}));return e.isAuth?s.a.createElement("div",{className:l.a.dialogsMessages},s.a.createElement(d,{dialogsData:e.dialogsData}),a,s.a.createElement(D,{onSubmit:function(a){e.sendMessage(a.message)}})):s.a.createElement(f.a,{to:"/login"})}));a.default=function(){return s.a.createElement("div",{className:o.a.dialogs},s.a.createElement(x,null))}}}]);
//# sourceMappingURL=4.80856cbe.chunk.js.map