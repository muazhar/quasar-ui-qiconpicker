(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"2da4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"HHh LpR fFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[e._v("\n        QIconPicker "),a("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),a("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),e.$q.screen.width>500?a("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e()],1)],1),a("q-drawer",{staticClass:"menu",attrs:{"show-if-above":"",bordered:"","aria-label":"Menu"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"fas fa-link",size:"1.5em"}}),a("span",{staticStyle:{"font-size":"1.5em"}},[e._v("Essential Links")])],1)],1),a("q-separator"),a("essential-links"),a("q-separator")],1),a("q-page-container",[a("router-view")],1)],1)},o=[],r=(a("d3b7"),a("e6cf"),a("ded3")),s=a.n(r),i=a("2f62"),l=a("0831"),c=a("384e"),u={name:"MyLayout",components:{"essential-links":function(){return a.e(1).then(a.bind(null,"4bd0"))}},data:function(){return{version:c["b"],leftDrawerOpen:this.$q.platform.is.desktop}},mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout((function(){e.scrollTo(t)}),200)}},computed:s()({},Object(i["b"])({toc:"common/toc"})),methods:{scrollTo:function(e){this.activeToc=e;var t=document.getElementById(e);t&&this.scrollPage(t)},scrollPage:function(e){var t=e.offsetTop-50;l["a"].setScrollPosition(window,t,500)}}},d=u,f=a("2877"),b=a("4d5a"),p=a("e359"),m=a("65c6"),v=a("9c40"),h=a("0016"),q=a("6ac5"),w=a("9404"),k=a("1c1c"),Q=a("0170"),g=a("eb85"),_=a("09e3"),O=a("eebe"),T=a.n(O),D=Object(f["a"])(d,n,o,!1,null,null,null);t["default"]=D.exports;T()(D,"components",{QLayout:b["a"],QHeader:p["a"],QToolbar:m["a"],QBtn:v["a"],QIcon:h["a"],QToolbarTitle:q["a"],QDrawer:w["a"],QList:k["a"],QItemLabel:Q["a"],QSeparator:g["a"],QPageContainer:_["a"]})}}]);