(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),b=a(5),i=a(8),l=a(7),r=a(1),o=a.n(r),d=a(6),u=a.n(d),j=a(0),h=function(t){var e=t.selectedTabId,a=t.tabs,n=t.onTabSelected;return Object(j.jsx)("div",{className:"tabs",children:Object(j.jsx)("ul",{className:"tabs__list",children:a.map((function(t){return Object(j.jsx)("li",{className:"tabs__item",children:Object(j.jsx)("button",{type:"button",onClick:function(){return n(t)},className:u()("tabs__button",{"tabs__button--active":e===t.id}),children:t.title})},t.id)}))})})},m=(a(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(t){Object(i.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),b=0;b<n;b++)c[b]=arguments[b];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:m[0]},t.changeTab=function(e){t.setState({selectedTab:e})},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{className:"App__title",children:["Selected tab is\xa0",t.title]}),Object(j.jsx)(h,{tabs:m,selectedTabId:t.id,onTabSelected:this.changeTab}),Object(j.jsx)("p",{className:"tabs__content",children:null===t||void 0===t?void 0:t.content})]})}}]),a}(o.a.Component);c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.622b788e.chunk.js.map