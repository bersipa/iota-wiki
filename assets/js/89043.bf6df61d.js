"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89043],{70650:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),o=n(86010),l=n(86881),i="details_1VDD";function c(e){var t=Object.assign({},e);return r.createElement(l.PO,(0,a.Z)({},t,{className:(0,o.Z)("alert alert--info",i,t.className)}))}},61545:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(67294),r=n(3905),o=n(83610),l=n(69075),i=n(86010),c=n(86881),s=n(27213),d=n(90974),m=n(87462),u=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(11614),h=n(63366),b=n(88746),f=n(71699),v=n(13617),E="menuLinkText_1J2g",k=["items"],g=["item"],_=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],N=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},C=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,m.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,h.Z)(e,g);return"category"===t.type?0===t.items.length?null:a.createElement(I,(0,m.Z)({item:t},n)):a.createElement(T,(0,m.Z)({item:t},n))}function I(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=(0,h.Z)(e,_),d=n.items,u=n.label,p=n.collapsible,b=n.className,f=N(n,o),v=(0,c.uR)({initialState:function(){return!!p&&(!f&&n.collapsed)}}),k=v.collapsed,g=v.setCollapsed,Z=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:f,collapsed:k,setCollapsed:g}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&f},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),Z()}:void 0,href:p?"#":void 0},s),u),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(C,{items:d,tabIndex:k?-1:0,onItemClick:r,activePath:o,level:l+1})))}function T(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(0,h.Z)(e,Z),s=t.href,d=t.label,u=t.className,p=N(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:d},a.createElement(b.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n},l),(0,f.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var M="sidebar_15mo",y="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",w="sidebarLogo_3h0W",L="menu_Bmed",B="menuWithAnnouncementBar_2WvA",P="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function x(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",P),onClick:t},a.createElement(u,{className:F}))}function R(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),u=(0,c.LU)(),p=u.navbar.hideOnScroll,h=u.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(M,(t={},t[y]=p,t[A]=s,t))},p&&a.createElement(d.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",L,(n={},n[B]=m,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(C,{items:o,activePath:r,level:1}))),h&&a.createElement(x,{onClick:l}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(C,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function H(e){return a.createElement(c.Cv,{component:D,props:e})}var W=a.memo(R),O=a.memo(H);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(O,e))}var Y=n(27996),J=n(12004),U="backToTopButton_35hR",j="backToTopButtonShow_18ls";function K(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var q=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=K(),s=l.smoothScrollTop,d=l.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||d(),n<300)r(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,U,(e={},e[j]=n,e)),type:"button",onClick:function(){return s()}})},G=n(76775),Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},V=n(51300);function X(e){var t,n,o,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,h=d.pluginId,b=d.version,f=s.sidebar,v=f?d.docsSidebars[f]:void 0,E=(0,a.useState)(!1),k=E[0],g=E[1],_=(0,a.useState)(!1),Z=_[0],N=_[1],C=(0,a.useCallback)((function(){Z&&N(!1),g((function(e){return!e}))}),[Z]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,c.os)(h,b)}},a.createElement("div",{className:Q.docPage},a.createElement(q,null),v&&a.createElement("aside",{className:(0,i.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&k&&N(!0)}},a.createElement(z,{key:f,sidebar:v,path:s.path,onCollapse:C,isHidden:Z}),Z&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},a.createElement(u,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=k||!v,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=k,o))},a.createElement(r.Zo,{components:Y.Z},m)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,G.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(X,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(J.default,null)}},38676:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return p}});var a=n(63366),r=n(87462),o=n(67294),l=n(86010),i=n(11614),c=n(86881),s="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?u:(t=e,function(e){var n,u=e.id,p=(0,a.Z)(e,m),h=(0,c.LU)().navbar.hideOnScroll;return u?o.createElement(t,(0,r.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[d]=h,n[s]=!h,n)),id:u}),p.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},12004:function(e,t,n){n.r(t);var a=n(67294),r=n(69075),o=n(11614);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);