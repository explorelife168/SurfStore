"use strict";(self["webpackChunksurfboardstore"]=self["webpackChunksurfboardstore"]||[]).push([[719],{7196:function(t,s,i){i.d(s,{Z:function(){return u}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[t._m(0),s("div",{staticClass:"down"},[s("div",{staticClass:"nav-1"},[s("ul",[s("li",[s("Router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards"}},[t._v("SURFBOARDS")])],1),s("li",[s("Router-link",{attrs:{to:"/Fins"}},[t._v("FINS")])],1),s("li",[s("Router-link",{attrs:{to:"/Accessories"}},[t._v("ACCESSORIES")])],1),s("li",[s("Router-link",{attrs:{to:"/contact"}},[t._v("CONTACT")])],1)]),t._m(1)])])])},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"top"},[s("div",{staticClass:"subscribe"},[s("div",{staticClass:"label"},[s("label",{attrs:{for:""}},[t._v("Subscribe to our mailing list")]),s("input",{attrs:{type:"text",placeholder:"email address"}})]),s("div",{staticClass:"button"},[s("button",{attrs:{type:"submit"}},[t._v("Subscribe")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"copyright"},[s("p",[t._v(" Copyright 2023 by Surfboards by Donald Takayama/Hawaiian Pro Designs ")])])}],n={name:"Foot390Component"},e=n,r=i(1001),l=(0,r.Z)(e,o,a,!1,null,"50663336",null),u=l.exports},2825:function(t,s,i){i.d(s,{Z:function(){return u}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[t._m(0),s("div",{staticClass:"down"},[s("div",{staticClass:"nav"},[s("ul",[s("li",[s("Router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards"}},[t._v("SURFBOARDS")])],1),s("li",[s("Router-link",{attrs:{to:"/Fins"}},[t._v("FINS")])],1),s("li",[s("Router-link",{attrs:{to:"/Accessories"}},[t._v("ACCESSORIES")])],1),s("li",[s("Router-link",{attrs:{to:"/contact"}},[t._v("CONTACT")])],1)]),t._m(1)])])])},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"top"},[s("div",{staticClass:"subscribe"},[s("div",{staticClass:"label"},[s("label",{attrs:{for:""}},[t._v("Subscribe to our mailing list")]),s("input",{attrs:{type:"text",placeholder:"email address"}})]),s("div",{staticClass:"button"},[s("button",{attrs:{type:"submit"}},[t._v("Subscribe")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"copyright"},[s("p",[t._v(" Copyright 2023 by Surfboards by Donald Takayama/Hawaiian Pro Designs ")])])}],n={name:"FootComponent"},e=n,r=i(1001),l=(0,r.Z)(e,o,a,!1,null,"014df7ec",null),u=l.exports},9112:function(t,s,i){i.d(s,{Z:function(){return u}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-sideMenu"},[s("transition",{attrs:{name:"fade"}},[t.showSideMenu?s("div",{ref:"menu",staticClass:"side-menu"},[s("ul",[s("li",[s("Router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards"}},[t._v("SURFBOARDS")])],1),s("li",[s("Router-link",{attrs:{to:"/Fins"}},[t._v("FINS")])],1),s("li",[s("Router-link",{attrs:{to:"/Accessories"}},[t._v("ACCESSORIES")])],1),s("li",[s("Router-link",{attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])]):t._e()]),s("div",{staticClass:"nav"},[t._m(0),s("div",{staticClass:"nav-bar"},[s("div",{staticClass:"button-on"},[s("button",{attrs:{type:"button"},on:{click:t.showSideMenuController}},[s("i",{staticClass:"fa-solid fa-bars fa-3x"})])])])]),t.showSideMenu?s("div",{staticClass:"side-menu-background"}):t._e()],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"logo-390"},[s("img",{attrs:{src:i(8567),alt:""}})])}],n={name:"Nav390Component",data:function(){return{showSideMenu:!1}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy(){document.removeEventListener("click",this.handleClickOutside)},methods:{showSideMenuController(){this.showSideMenu=!this.showSideMenu},handleClickOutside(t){!this.showSideMenu||this.$refs.menu.contains(t.target)||t.target.closest("button")||(this.showSideMenu=!1)}}},e=n,r=i(1001),l=(0,r.Z)(e,o,a,!1,null,"d6ec1936",null),u=l.exports},8509:function(t,s,i){i.d(s,{Z:function(){return u}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav"},[t._m(0),s("div",{staticClass:"menu-area"},[s("ul",[s("li",[s("Router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards"}},[t._v("SURFBOARDS")]),s("div",{staticClass:"drop-menu-1"},[s("ul",[s("li",[s("Router-link",{attrs:{to:"/SurfBoards/ShortBoard"}},[t._v("SHORTBOARDS")])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards/FunBoard"}},[t._v("FUNBOARDS")])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards/LongBoard"}},[t._v("LONGBOARDS")])],1)])])],1),s("li",[s("Router-link",{attrs:{to:"/Fins"}},[t._v("FINS")]),s("div",{staticClass:"drop-menu-2"},[s("ul",[s("li",[s("Router-link",{attrs:{to:"/Fins/MTP"}},[t._v("MTP FIN")])],1),s("li",[s("Router-link",{attrs:{to:"/Fins/RP"}},[t._v("RP FIN")])],1),s("li",[s("Router-link",{attrs:{to:"/Fins/RLB"}},[t._v("RLB FIN")])],1),s("li",[s("Router-link",{attrs:{to:"/Fins/DTFLEX"}},[t._v("DTFLEX FIN")])],1)])])],1),s("li",[s("Router-link",{attrs:{to:"/Accessories"}},[t._v("ACCESSORIES")])],1),s("li",[s("Router-link",{attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])])])},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:i(8567),alt:""}})])}],n={name:"NavComponent"},e=n,r=i(1001),l=(0,r.Z)(e,o,a,!1,null,"682dfe5c",null),u=l.exports},8719:function(t,s,i){i.r(s),i.d(s,{default:function(){return y}});var o=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"show"},[s("nav",[s("NavComponent")],1),s("div",[s("MTPComponent18")],1),s("footer",[s("FootComponent")],1)]),s("div",{staticClass:"show-390"},[s("nav",[s("Nav390Component")],1),s("div",[s("MTP390Component18")],1),s("footer",[s("Foot390Component")],1)])])},a=[],n=i(8509),e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mtpfin"},[s("div",{staticClass:"link"},[s("ol",[s("li",[s("Router-link",{attrs:{to:"/SurfBoards"}},[s("span",[t._v("SurfBoards")])])],1),s("li",[s("Router-link",{attrs:{to:"/Fins"}},[s("span",[t._v("FINS")])])],1),s("li",[s("Router-link",{attrs:{to:"/SurfBoards/Fins/MTPView"}},[s("span",[t._v("MTP FIN")])])],1)])]),t._m(0)])},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"mtp"},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:i(1644),alt:""}})]),s("div",{staticClass:"txt"},[s("div",{staticClass:"name"},[s("h2",[t._v("MTP FIN")])]),s("h3",[t._v("A True Classic!")]),s("p",[t._v(" A true classic, pivot style fin for more tradtional square tail boards. The MTP will help with noseriding and freeing up the tail of a heavy, single fin log. Can also be used on any other type of board for a more tradtional feel or if you want the tail to really hold in when on the nose. ")]),s("br"),s("p",[t._v('Available size: 9", 9.5" and 10"')]),s("br"),s("p",[t._v(" *Interested in purchasing this fin? Please go to a dealer near you or you can also buy it online here (check out via Noah Ka Oi Surf online store). ")])])])}],l={name:"Scorpion2Component16"},u=l,c=i(1001),d=(0,c.Z)(u,e,r,!1,null,"7f99c3c6",null),v=d.exports,f=i(2825),C=i(9112),_=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"mtpfin-390-18"},[s("div",{staticClass:"name-390-18"},[s("h2",[t._v("MTP FIN")])]),s("div",{staticClass:"pic-390-18"},[s("img",{attrs:{src:i(1644),alt:""}})]),s("div",{staticClass:"txt-390-18"},[s("h3",[t._v("A True Classic!")]),s("p",[t._v(" A true classic, pivot style fin for more tradtional square tail boards. The MTP will help with noseriding and freeing up the tail of a heavy, single fin log. Can also be used on any other type of board for a more tradtional feel or if you want the tail to really hold in when on the nose. ")]),s("br"),s("p",[t._v('Available size: 9", 9.5" and 10"')]),s("br"),s("p",[t._v(" *Interested in purchasing this fin? Please go to a dealer near you or you can also buy it online here (check out via Noah Ka Oi Surf online store). ")])])])}],p={name:"MTP390Component18"},m=p,S=(0,c.Z)(m,_,h,!1,null,"42dcf898",null),b=S.exports,R=i(7196),k={name:"MTPView18 ",components:{NavComponent:n.Z,MTPComponent18:v,FootComponent:f.Z,Nav390Component:C.Z,MTP390Component18:b,Foot390Component:R.Z}},F=k,g=(0,c.Z)(F,o,a,!1,null,"07b053cd",null),y=g.exports},1644:function(t,s,i){t.exports=i.p+"img/MTPFin.b8af3172.jpeg"},8567:function(t,s,i){t.exports=i.p+"img/logo.90e4dddf.jpeg"}}]);
//# sourceMappingURL=719.a2a3db3b.js.map