(window.webpackJsonp=window.webpackJsonp||[]).push([[23,7],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(89);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},91:function(e,a,t){"use strict";var n=t(2),l=t(0),r=t.n(l),c=t(79),i=t(80),s=t(78),o=t(98),m=t(92),b=t(82),d=t(99),v=t(85),g=t(86),u=t(87),h=t(47),k=t.n(h),E=t(93);const _="right";a.a=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:a=[],hideOnScroll:t=!1,style:h}={},colorMode:{disableSwitch:N=!1}={}}},isClient:f}=Object(s.a)(),[p,w]=Object(l.useState)(!1),[O,j]=Object(l.useState)(!1),{isDarkTheme:y,setLightTheme:C,setDarkTheme:x}=Object(b.a)(),{navbarRef:I,isNavbarVisible:L}=Object(d.a)(t),{logoLink:M,logoLinkProps:S,logoImageUrl:D,logoAlt:T}=Object(u.a)();Object(v.a)(p);const P=Object(l.useCallback)((()=>{w(!0)}),[w]),B=Object(l.useCallback)((()=>{w(!1)}),[w]),F=Object(l.useCallback)((e=>e.target.checked?x():C()),[C,x]),H=Object(g.a)();Object(l.useEffect)((()=>{H===g.b.desktop&&w(!1)}),[H]);const{leftItems:J,rightItems:R}=function(e){return{leftItems:e.filter((e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:_)})),rightItems:e.filter((e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:_)}))}}(a);return r.a.createElement("nav",{ref:I,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===h,"navbar--primary":"primary"===h,"navbar-sidebar--show":p,[k.a.navbarHideable]:t,[k.a.navbarHidden]:!L})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,Object(n.a)({className:"navbar__brand",to:M},S),null!=D&&r.a.createElement("img",{key:f,className:"navbar__logo",src:D,alt:T}),null!=e&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",{[k.a.hideLogoText]:O})},e)),J.map(((e,a)=>r.a.createElement(E.a,Object(n.a)({},e,{key:a}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},R.map(((e,a)=>r.a.createElement(E.a,Object(n.a)({},e,{key:a})))),!N&&r.a.createElement(m.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:F}),r.a.createElement(o.a,{handleSearchBarToggle:j,isSearchBarExpanded:O}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,Object(n.a)({className:"navbar__brand",onClick:B,to:M},S),null!=D&&r.a.createElement("img",{key:f,className:"navbar__logo",src:D,alt:T}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!N&&p&&r.a.createElement(m.a,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},a.map(((e,a)=>r.a.createElement(E.a,Object(n.a)({mobile:!0},e,{onClick:B,key:a})))))))))}}}]);