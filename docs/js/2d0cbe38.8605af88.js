(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0cbe38"],{"4c1d":function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("q-layout",{attrs:{view:"HHh Lpr lFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(n){e.leftDrawerOpen=!e.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),r("q-icon",{staticClass:"q-ml-md",attrs:{name:"bolt",size:"1.5rem"}}),e.$q.screen.width>500?r("q-toolbar-title",[e._v("\n        QIconPicker\n        "),e.$q.screen.width<1077?r("q-tooltip",[e._v("\n          QIconPicker\n        ")]):e._e()],1):e._e(),r("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),r("q-drawer",{attrs:{bordered:"","content-class":"white",width:350},model:{value:e.leftDrawerOpen,callback:function(n){e.leftDrawerOpen=n},expression:"leftDrawerOpen"}},[r("div",{staticClass:"col-12"},[r("q-expansion-item",{attrs:{"expand-separator":"","default-opened":"",group:"somegroup",icon:"fas fa-cogs",label:"Playground",caption:"Play with properties"}},[r("playground")],1),r("q-expansion-item",{attrs:{"expand-separator":"",group:"somegroup",icon:"fas fa-link",label:"Essential Links"}},[r("essential-links")],1)],1)]),r("q-page-container",[r("router-view")],1)],1)},o=[],a=r("0967"),i=r("2b0e"),l=function(e,n){var r=window.open;if(!0===a["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)r=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(e);var t=r(e,"_blank");if(t)return t.focus(),t;n&&n()},s={name:"IconPickerLayout",components:{playground:function(){return r.e("2d0b37e1").then(r.bind(null,"2937"))},"essential-links":function(){return r.e("2d0cc070").then(r.bind(null,"4bd0"))}},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:l}},p=s,c=r("2877"),d=Object(c["a"])(p,t,o,!1,null,null,null);n["default"]=d.exports}}]);