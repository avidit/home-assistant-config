!function(){"use strict";var t,i=function(){return i=Object.assign||function(t){for(var i,o=1,e=arguments.length;o<e;o++)for(var n in i=arguments[o])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t},i.apply(this,arguments)};function o(t,i,o,e){return new(o||(o=Promise))((function(n,_){function E(t){try{O(e.next(t))}catch(t){_(t)}}function a(t){try{O(e.throw(t))}catch(t){_(t)}}function O(t){var i;t.done?n(t.value):(i=t.value,i instanceof o?i:new o((function(t){t(i)}))).then(E,a)}O((e=e.apply(t,i||[])).next())}))}function e(t,i){var o,e,n,_,E={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return _={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(_[Symbol.iterator]=function(){return this}),_;function a(a){return function(O){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;_&&(_=0,a[0]&&(E=0)),E;)try{if(o=1,e&&(n=2&a[0]?e.return:a[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,a[1])).done)return n;switch(e=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return E.label++,{value:a[1],done:!1};case 5:E.label++,e=a[1],a=[0];continue;case 7:a=E.ops.pop(),E.trys.pop();continue;default:if(!(n=E.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){E=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){E.label=a[1];break}if(6===a[0]&&E.label<n[1]){E.label=n[1],n=a;break}if(n&&E.label<n[2]){E.label=n[2],E.ops.push(a);break}n[2]&&E.ops.pop(),E.trys.pop();continue}a=i.call(t,E)}catch(t){a=[6,t],e=0}finally{o=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,O])}}}"function"==typeof SuppressedError&&SuppressedError;var n,_,E="kiosk-mode",a="kiosk_mode",O="[ Non critial warning ]",r=":shadowRoot";!function(t){t.HEADER="kmHeader",t.SIDEBAR="kmSidebar",t.OVERFLOW="kmOverflow",t.MENU_BUTTON="kmMenuButton",t.ACCOUNT="kmAccount",t.NOTIFICATIONS="kmNotifications",t.SEARCH="kmSearch",t.ASSISTANT="kmAssistant",t.REFRESH="kmRefresh",t.UNUSED_ENTITIES="kmUnusedEntities",t.RELOAD_RESOURCES="kmReloadResources",t.EDIT_DASHBOARD="kmEditDashboard",t.DIALOG_HEADER_ACTION_ITEMS="kmDialogHeaderActionItems",t.DIALOG_HEADER_HISTORY="kmDialogHeaderHistory",t.DIALOG_HEADER_SETTINGS="kmDialogHeaderSettings",t.DIALOG_HEADER_OVERFLOW="kmDialogHeaderOverflow",t.DIALOG_HISTORY="kmDialogHistory",t.DIALOG_LOGBOOK="kmDialogLogbook",t.DIALOG_ATTRIBUTES="kmDialogAttributes",t.DIALOG_MEDIA_ACTIONS="kmDialogMediaActions",t.DIALOG_UPDATE_ACTIONS="kmDialogUpdateActions",t.DIALOG_CLIMATE_ACTIONS="kmDialogClimateActions",t.DIALOG_TIMER_ACTIONS="kmDialogTimerActions",t.DIALOG_HISTORY_SHOW_MORE="kmDialogHistoryShowMore",t.DIALOG_LOGBOOK_SHOW_MORE="kmDialogLogbookShowMore",t.OVERFLOW_MOUSE="kmOverflowMouse",t.MOUSE="kmMouse"}(n||(n={})),function(t){t.KIOSK="kiosk",t.CACHE="cache",t.CLEAR_CACHE="clear_km_cache",t.DISABLE_KIOSK_MODE="disable_km",t.HIDE_SIDEBAR="hide_sidebar",t.HIDE_HEADER="hide_header",t.HIDE_OVERFLOW="hide_overflow",t.HIDE_MENU_BUTTON="hide_menubutton",t.HIDE_ACCOUNT="hide_account",t.HIDE_NOTIFICATIONS="hide_notifications",t.HIDE_SEARCH="hide_search",t.HIDE_ASSISTANT="hide_assistant",t.HIDE_REFRESH="hide_refresh",t.HIDE_UNUSED_ENTITIES="hide_unused_entities",t.HIDE_RELOAD_RESOURCES="hide_reload_resources",t.HIDE_EDIT_DASHBOARD="hide_edit_dashboard",t.HIDE_DIALOG_HEADER_ACTION_ITEMS="hide_dialog_header_action_items",t.HIDE_DIALOG_HEADER_HISTORY="hide_dialog_header_history",t.HIDE_DIALOG_HEADER_SETTINGS="hide_dialog_header_settings",t.HIDE_DIALOG_HEADER_OVERFLOW="hide_dialog_header_overflow",t.HIDE_DIALOG_HISTORY="hide_dialog_history",t.HIDE_DIALOG_LOGBOOK="hide_dialog_logbook",t.HIDE_DIALOG_ATTRIBUTES="hide_dialog_attributes",t.HIDE_DIALOG_MEDIA_ACTIONS="hide_dialog_media_actions",t.HIDE_DIALOG_UPDATE_ACTIONS="hide_dialog_update_actions",t.HIDE_DIALOG_CLIMATE_ACTIONS="hide_dialog_climate_actions",t.HIDE_DIALOG_TIMER_ACTIONS="hide_dialog_timer_actions",t.HIDE_DIALOG_HISTORY_SHOW_MORE="hide_dialog_history_show_more",t.HIDE_DIALOG_LOGBOOK_SHOW_MORE="hide_dialog_logbook_show_more",t.BLOCK_OVERFLOW="block_overflow",t.BLOCK_MOUSE="block_mouse",t.IGNORE_ENTITY_SETTINGS="ignore_entity_settings",t.IGNORE_MOBILE_SETTINGS="ignore_mobile_settings",t.IGNORE_DISABLE_KM="ignore_disable_km"}(_||(_={}));var I,A="ui",s="".concat(A,".common"),c="".concat(A,".panel"),D="".concat(c,".lovelace"),h="".concat(D,".menu"),T="".concat(A,".dialogs.more_info_control");!function(t){t.SEARCH="SEARCH",t.ASSIST="ASSIST",t.REFRESH="REFRESH",t.UNUSED_ENTITIES="UNUSED_ENTITIES",t.RELOAD_RESOURCES="RELOAD_RESOURCES",t.EDIT_DASHBOARD="EDIT_DASHBOARD",t.DIALOG_DISMISS="DIALOG_DISMISS",t.DIALOG_HISTORY="DIALOG_HISTORY",t.DIALOG_SETTINGS="DIALOG_SETTINGS"}(I||(I={}));var d,u=Object.freeze(((t={})[I.SEARCH]="".concat(h,".search"),t[I.ASSIST]="".concat(h,".assist"),t[I.REFRESH]="".concat(s,".refresh"),t[I.UNUSED_ENTITIES]="".concat(D,".unused_entities.title"),t[I.RELOAD_RESOURCES]="".concat(h,".reload_resources"),t[I.EDIT_DASHBOARD]="".concat(h,".configure_ui"),t[I.DIALOG_HISTORY]="".concat(T,".history"),t[I.DIALOG_SETTINGS]="".concat(T,".settings"),t[I.DIALOG_DISMISS]="".concat(T,".dismiss"),t));!function(t){t.HOME_ASSISTANT="home-assistant",t.HOME_ASSISTANT_MAIN="home-assistant-main",t.HA_PANEL_LOVELACE="ha-panel-lovelace",t.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",t.HUI_ROOT="hui-root",t.HUI_VIEW="hui-view",t.MENU_ITEM="ha-icon-button",t.MENU_ITEM_ICON="mwc-icon-button",t.BUTTON_MENU="ha-button-menu",t.OVERLAY_MENU_ITEM="mwc-list-item",t.HA_SIDEBAR="ha-sidebar",t.HA_DRAWER="ha-drawer",t.TOOLBAR=".toolbar",t.ACTION_ITEMS=".action-items",t.HA_MORE_INFO_DIALOG="ha-more-info-dialog",t.HA_DIALOG="ha-dialog",t.HA_DIALOG_HEADER="ha-dialog-header",t.HA_DIALOG_CONTENT=".content",t.HA_DIALOG_MORE_INFO="ha-more-info-info",t.HA_DIALOG_HISTORY="ha-more-info-history",t.HA_DIALOG_LOGBOOK="ha-more-info-logbook",t.HA_DIALOG_MORE_INFO_CONTENT="more-info-content",t.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",t.HA_DIALOG_DEFAULT="more-info-default",t.HA_DIALOG_TIMER="more-info-timer",t.HA_DIALOG_VACUUM="more-info-vacuum",t.HA_DIALOG_MEDIA_PLAYER="more-info-media_player",t.HA_DIALOG_UPDATE="more-info-update",t.HA_DIALOG_CLIMATE="more-info-climate",t.HA_DIALOG_CLIMATE_CONTROL_SELECT="ha-more-info-control-select-container",t.HA_DIALOG_CLIMATE_TEMPERATURE="ha-more-info-climate-temperature",t.HA_DIALOG_CLIMATE_TEMPERATURE_BUTTONS=".buttons",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER="ha-control-circular-slider",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION="#interaction",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_SLIDER='path[role="slider"]',t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET=".target",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET_BORDER=".target-border",t.HA_DIALOG_ATTRIBUTES="ha-attributes"}(d||(d={}));var S,R="true",l="state_changed",L=function(t){return Array.isArray(t)?t:[t]},H=function(t){return t instanceof ShadowRoot?t.host.localName:t.localName},N=function(t){var i=H(t);return t.querySelector("#".concat(a,"_").concat(i))},G=function(t,i){var o=H(i),e=N(i);e||((e=document.createElement("style")).setAttribute("id","".concat(a,"_").concat(o)),i.appendChild(e)),e.innerHTML=t},C=function(t){L(t).forEach((function(t){var i=H(t);N(t)&&t.querySelector("#".concat(a,"_").concat(i)).remove()}))},f=function(t){return L(t).some((function(t){return window.location.search.includes(t)}))},M=function(t,i){L(t).forEach((function(t){return window.localStorage.setItem(t,i)}))},U=function(t){return L(t).some((function(t){return window.localStorage.getItem(t)===R}))},g=function(t){return Object.entries(t).map((function(t){var i=t[0],o=t[1];return"".concat(i,":").concat(o)})).join(";")+";"},v=function(t){return Object.entries(t).map((function(t){var i=t[0],o=t[1];return"".concat(i,"{").concat(g(o),"}")})).join("")},p=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return t.map((function(t){return"".concat(t,"{display: none !important;}")})).join("")},m=function(t){var i=0,o=Object.values(u);return new Promise((function(e,n){var _=function(){var E,a=null===(E=null==t?void 0:t.hass)||void 0===E?void 0:E.resources,O=!1;if(a){var r=t.hass.language;o.find((function(t){return!a[r][t]}))||(O=!0)}O?e(a):++i<500?setTimeout(_,50):n()};_()}))},w=function(t,i,o){return new Promise((function(e,n){var _=0,a=function(){var O=t();O&&i(O)?e(O):++_<500?setTimeout(a,50):n(new Error("".concat(E,": Cannot select ").concat(o," after ").concat(500," attempts. Giving up!")))};a()}))},B=function(t,i){t.forEach((function(t){if(t&&t.dataset&&!t.dataset.selector){var o=t.shadowRoot.querySelector(d.MENU_ITEM_ICON);t.dataset.selector=i[o.title]}}))},b={HEADER:v({"#view":{"min-height":"100vh !important","--header-height":"0px"},".header":{display:"none"}}),ACCOUNT:p(".profile"),NOTIFICATIONS:p(".notifications-container"),DIVIDER:p(".divider"),PEPER_LISTBOX:function(t,i){var o=132;return t&&i?o=0:t?o-=50:i&&(o-=48),v({"paper-listbox":{height:"calc(100% - var(--header-height) - ".concat(o,"px - env(safe-area-inset-bottom)) !important")}})},MENU_BUTTON:p(".menu ha-icon-button"),MENU_BUTTON_BURGER:p("ha-menu-button"),MOUSE:v({"body::after":{bottom:"0",content:'""',cursor:"none",display:"block",left:"0",position:"fixed",right:"0",top:"0","z-index":"999999"}}),SIDEBAR:v({":host":{"--mdc-drawer-width":"0 !important"},"partial-panel-resolver":{"--mdc-top-app-bar-width":"100% !important"},"ha-drawer > ha-sidebar":{display:"none"},".header":{width:"100% !important"}}),ASIDE:p(".mdc-drawer"),OVERFLOW_MENU:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU)),BLOCK_OVERFLOW:v((S={},S["".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU)]={"pointer-events":"none !important"},S)),SEARCH:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(I.SEARCH,'"]'),"".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.SEARCH,'"]')),ASSISTANT:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(I.ASSIST,'"]'),"".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.ASSIST,'"]')),REFRESH:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.REFRESH,'"]')),UNUSED_ENTITIES:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:p("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.BUTTON_MENU," > ").concat(d.OVERLAY_MENU_ITEM,'[data-selector="').concat(I.EDIT_DASHBOARD,'"]')),DIALOG_HEADER_HISTORY:p("".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM,'[data-selector="').concat(I.DIALOG_HISTORY,'"]')),DIALOG_HEADER_SETTINGS:p("".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM,'[data-selector="').concat(I.DIALOG_SETTINGS,'"]')),DIALOG_HEADER_OVERFLOW:p("".concat(d.HA_DIALOG_HEADER," > ").concat(d.BUTTON_MENU)),DIALOG_HISTORY:p(d.HA_DIALOG_HISTORY),DIALOG_LOGBOOK:p(d.HA_DIALOG_LOGBOOK),DIALOG_ATTRIBUTES:p(d.HA_DIALOG_ATTRIBUTES),DIALOG_MEDIA_ACTIONS:p(".controls"),DIALOG_TIMER_ACTIONS:p(".actions"),DIALOG_UPDATE_ACTIONS:p(".actions","hr:has(+ .actions)"),DIALOG_CLIMATE_ACTIONS:p(d.HA_DIALOG_CLIMATE),DIALOG_CLIMATE_CONTROL_SELECT:p(d.HA_DIALOG_CLIMATE_CONTROL_SELECT),DIALOG_CLIMATE_TEMPERATURE_BUTTONS:p(d.HA_DIALOG_CLIMATE_TEMPERATURE_BUTTONS),DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION:p(d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION,d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_SLIDER,d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET_BORDER,d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET),DIALOG_SHOW_MORE:p(".header a")},y=function(){function t(){this.lines=[{content:"%c≡ kiosk-mode",color:"white",background:"#03a9f4"},{content:"%cversion ".concat("4.0.0")}]}return t.prototype.log=function(){var t=[],o=[],e=this.lines.length-1,n={"border-color":"#424242","border-style":"solid",display:"inline-block","font-family":"monospace","font-size":"12px"};this.lines.forEach((function(_,E){t.push(_.content.padEnd(27)),t.push("%c⋮"),E!==e&&t.push("%c\n");var a="0 0 0 1px",O="0 1px 0 1px";0===e?(a="1px 0 1px 1px",O="1px 1px 1px 0"):0===E?(a="1px 0 0 1px",O="1px 1px 0 0"):E===e&&(a="0 0 1px 1px",O="0 1px 1px 0"),o.push(g(i(i({},n),{background:_.background||"white",color:_.color||"#424242",padding:0===E?"1px 0px 1px 5px":"1px 0px 1px 10px","border-width":a}))),o.push(g(i(i({},n),{background:_.background||"white",color:_.color||"white",padding:0===E?"1px 5px":"1px 5px 1px 0px","border-width":O}))),E!==e&&o.push("")})),console.info.apply(console,function(t,i,o){if(o||2===arguments.length)for(var e,n=0,_=i.length;n<_;n++)!e&&n in i||(e||(e=Array.prototype.slice.call(i,0,n)),e[n]=i[n]);return t.concat(e||Array.prototype.slice.call(i))}([t.join("")],o,!1))},t}(),k=function(){function t(){var t=this;window.kioskModeEntities={},f(_.CLEAR_CACHE)&&M([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.NOTIFICATIONS,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.DIALOG_HEADER_ACTION_ITEMS,n.DIALOG_HEADER_HISTORY,n.DIALOG_HEADER_SETTINGS,n.DIALOG_HEADER_OVERFLOW,n.DIALOG_HISTORY,n.DIALOG_LOGBOOK,n.DIALOG_ATTRIBUTES,n.DIALOG_MEDIA_ACTIONS,n.DIALOG_UPDATE_ACTIONS,n.DIALOG_CLIMATE_ACTIONS,n.DIALOG_TIMER_ACTIONS,n.DIALOG_HISTORY_SHOW_MORE,n.DIALOG_LOGBOOK_SHOW_MORE,n.OVERFLOW_MOUSE,n.MOUSE],"false");o(t,void 0,void 0,(function(){var t,i,o,n,_,E,a=this;return e(this,(function(e){switch(e.label){case 0:return t=this,[4,w((function(){return document.querySelector(d.HOME_ASSISTANT)}),(function(t){return!(!t||!t.shadowRoot)}),d.HOME_ASSISTANT)];case 1:return t.ha=e.sent(),i=this,[4,w((function(){var t;return null===(t=a.ha.shadowRoot.querySelector(d.HOME_ASSISTANT_MAIN))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(d.HOME_ASSISTANT_MAIN).concat(r))];case 2:return i.main=e.sent(),o=this,[4,w((function(){var t,i;return null===(i=null===(t=a.ha)||void 0===t?void 0:t.hass)||void 0===i?void 0:i.user}),(function(t){return!!t}),"".concat(d.HOME_ASSISTANT," > hass > user"))];case 3:return o.user=e.sent(),this.version=function(t){var i=t?t.match(/^(\d+)\.(\d+)\.(\w+)(?:\.(\w+))?$/):null;return i?[+i[1],+i[2],i[3]]:null}(null===(E=null===(_=this.ha.hass)||void 0===_?void 0:_.config)||void 0===E?void 0:E.version),[4,w((function(){return a.main.querySelector(d.PARTIAL_PANEL_RESOLVER)}),(function(t){return!!t}),"".concat(d.HOME_ASSISTANT_MAIN," > ").concat(d.PARTIAL_PANEL_RESOLVER))];case 4:return n=e.sent(),this.panelResolverObserver=new MutationObserver(this.watchDashboards),this.dialogsMutationObserver=new MutationObserver(this.watchMoreInfoDialogs),this.dialogContentMutationObserver=new MutationObserver(this.watchMoreInfoDialogsContent),this.panelResolverObserver.observe(n,{childList:!0}),this.dialogsMutationObserver.observe(this.ha.shadowRoot,{childList:!0}),this.run(),this.entityWatch(),[2]}}))})),this.resizeWindowBinded=this.resizeWindow.bind(this)}return t.prototype.run=function(t){var i=this;if(void 0===t&&(t=this.main.querySelector(d.HA_PANEL_LOVELACE)),t)return this.lovelace=t,w((function(){var i;return null===(i=null==t?void 0:t.lovelace)||void 0===i?void 0:i.config}),(function(t){return!!t}),"Lovelace config").then((function(t){return i.processConfig(t.kiosk_mode||{})}))},t.prototype.runDialogs=function(t){var i,n;return void 0===t&&(t=null===(n=null===(i=this.ha)||void 0===i?void 0:i.shadowRoot)||void 0===n?void 0:n.querySelector(d.HA_MORE_INFO_DIALOG)),o(this,void 0,void 0,(function(){var i,o,n,_=this;return e(this,(function(e){switch(e.label){case 0:return t?[4,w((function(){return null==t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(d.HA_MORE_INFO_DIALOG,":").concat(r))]:[2];case 1:return i=e.sent(),[4,w((function(){return i.querySelector(d.HA_DIALOG)}),(function(t){return!!t}),"".concat(d.HA_MORE_INFO_DIALOG,":").concat(r," > ").concat(d.HA_DIALOG))];case 2:return o=e.sent(),[4,w((function(){return o.querySelector(d.HA_DIALOG_CONTENT)}),(function(t){return!!t}),"".concat(d.HA_DIALOG," > ").concat(d.HA_DIALOG_CONTENT))];case 3:return n=e.sent(),w((function(){return n.querySelector("".concat(d.HA_DIALOG_MORE_INFO,", ").concat(d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK))}),(function(t){return!!t}),"".concat(d.HA_DIALOG," > ").concat(d.HA_DIALOG_CONTENT," > child")).then((function(t){_.dialogContentMutationObserver.disconnect(),_.dialogContentMutationObserver.observe(n,{childList:!0}),_.runDialogsChildren(t)})).catch((function(){})),this.insertDialogStyles(o),[2]}}))}))},t.prototype.runDialogsChildren=function(t){return o(this,void 0,void 0,(function(){var i;return e(this,(function(o){switch(o.label){case 0:return!t||t.localName!==d.HA_DIALOG_MORE_INFO&&t.localName!==d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK?[2]:[4,w((function(){return t.shadowRoot}),(function(t){return!!t}),"".concat(d.HA_DIALOG," > ").concat(d.HA_DIALOG_CONTENT," > ").concat(t.localName,":").concat(r))];case 1:return i=o.sent(),this.insertDialogChildStyles(i),[2]}}))}))},t.prototype.processConfig=function(t){return o(this,void 0,void 0,(function(){var i,a,I,A,s,c,D,h,T,S,R,l=this;return e(this,(function(H){switch(H.label){case 0:return i=this.ha.hass.panelUrl,window.kioskModeEntities[i]||(window.kioskModeEntities[i]=[]),this.hideHeader=!1,this.hideSidebar=!1,this.hideOverflow=!1,this.hideMenuButton=!1,this.hideAccount=!1,this.hideNotifications=!1,this.hideSearch=!1,this.hideAssistant=!1,this.hideRefresh=!1,this.hideUnusedEntities=!1,this.hideReloadResources=!1,this.hideEditDashboard=!1,this.hideDialogHeaderActionItems=!1,this.hideDialogHeaderHistory=!1,this.hideDialogHeaderSettings=!1,this.hideDialogHeaderOverflow=!1,this.hideDialogHistory=!1,this.hideDialogLogbook=!1,this.hideDialogAttributes=!1,this.hideDialogMediaActions=!1,this.hideDialogUpdateActions=!1,this.hideDialogClimateActions=!1,this.hideDialogTimerActions=!1,this.hideDialogHistoryShowMore=!1,this.hideDialogLogbookShowMore=!1,this.blockOverflow=!1,this.blockMouse=!1,this.ignoreEntity=!1,this.ignoreMobile=!1,this.ignoreDisableKm=!1,a=this,[4,w((function(){var t,i,o;return null===(o=null===(i=null===(t=l.lovelace)||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(d.HUI_ROOT))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"".concat(d.HUI_ROOT).concat(r))];case 1:return a.huiRoot=H.sent(),I=this,[4,w((function(){return l.main.querySelector(d.HA_DRAWER)}),(function(t){return!!t}),d.HA_DRAWER)];case 2:return I.drawerLayout=H.sent(),A=this,[4,w((function(){return l.huiRoot.querySelector(d.TOOLBAR)}),(function(t){return!!t}),d.TOOLBAR)];case 3:return A.appToolbar=H.sent(),s=this,[4,w((function(){var t;return null===(t=l.drawerLayout.querySelector(d.HA_SIDEBAR))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(d.HA_SIDEBAR).concat(r))];case 4:return s.sideBarRoot=H.sent(),(N=this.ha,o(void 0,void 0,void 0,(function(){var t,i,o,n,_;return e(this,(function(e){switch(e.label){case 0:return[4,m(N)];case 1:return t=e.sent(),i=N.hass.language,o=t[i],n=Object.entries(u),_=n.map((function(t){var i=t[0],e=t[1];return[o[e],i]})),[2,Object.fromEntries(_)]}}))}))).then((function(t){l.menuTranslations=t,l.updateMenuItemsLabels()})).catch((function(){console.warn("".concat(E,": ").concat(O," Cannot get resources translations"))})),c=U([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.NOTIFICATIONS,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.DIALOG_HEADER_ACTION_ITEMS,n.DIALOG_HEADER_HISTORY,n.DIALOG_HEADER_SETTINGS,n.DIALOG_HEADER_OVERFLOW,n.DIALOG_HISTORY,n.DIALOG_LOGBOOK,n.DIALOG_ATTRIBUTES,n.DIALOG_MEDIA_ACTIONS,n.DIALOG_UPDATE_ACTIONS,n.DIALOG_CLIMATE_ACTIONS,n.DIALOG_TIMER_ACTIONS,n.DIALOG_HISTORY_SHOW_MORE,n.DIALOG_LOGBOOK_SHOW_MORE,n.OVERFLOW_MOUSE,n.MOUSE]),D=f([_.KIOSK,_.HIDE_HEADER,_.HIDE_SIDEBAR,_.HIDE_OVERFLOW,_.HIDE_MENU_BUTTON,_.HIDE_ACCOUNT,_.HIDE_NOTIFICATIONS,_.HIDE_SEARCH,_.HIDE_ASSISTANT,_.HIDE_REFRESH,_.HIDE_RELOAD_RESOURCES,_.HIDE_UNUSED_ENTITIES,_.HIDE_EDIT_DASHBOARD,_.HIDE_DIALOG_HEADER_ACTION_ITEMS,_.HIDE_DIALOG_HEADER_HISTORY,_.HIDE_DIALOG_HEADER_SETTINGS,_.HIDE_DIALOG_HEADER_OVERFLOW,_.HIDE_DIALOG_HISTORY,_.HIDE_DIALOG_LOGBOOK,_.HIDE_DIALOG_ATTRIBUTES,_.HIDE_DIALOG_MEDIA_ACTIONS,_.HIDE_DIALOG_UPDATE_ACTIONS,_.HIDE_DIALOG_CLIMATE_ACTIONS,_.HIDE_DIALOG_TIMER_ACTIONS,_.HIDE_DIALOG_HISTORY_SHOW_MORE,_.HIDE_DIALOG_LOGBOOK_SHOW_MORE,_.BLOCK_OVERFLOW,_.BLOCK_MOUSE]),c||D?(this.hideHeader=U(n.HEADER)||f([_.KIOSK,_.HIDE_HEADER]),this.hideSidebar=U(n.SIDEBAR)||f([_.KIOSK,_.HIDE_SIDEBAR]),this.hideOverflow=U(n.OVERFLOW)||f(_.HIDE_OVERFLOW),this.hideMenuButton=U(n.MENU_BUTTON)||f(_.HIDE_MENU_BUTTON),this.hideAccount=U(n.ACCOUNT)||f(_.HIDE_ACCOUNT),this.hideNotifications=U(n.NOTIFICATIONS)||f(_.HIDE_NOTIFICATIONS),this.hideSearch=U(n.SEARCH)||f(_.HIDE_SEARCH),this.hideAssistant=U(n.ASSISTANT)||f(_.HIDE_ASSISTANT),this.hideRefresh=U(n.REFRESH)||f(_.HIDE_REFRESH),this.hideUnusedEntities=U(n.UNUSED_ENTITIES)||f(_.HIDE_UNUSED_ENTITIES),this.hideReloadResources=U(n.RELOAD_RESOURCES)||f(_.HIDE_RELOAD_RESOURCES),this.hideEditDashboard=U(n.EDIT_DASHBOARD)||f(_.HIDE_EDIT_DASHBOARD),this.hideDialogHeaderActionItems=U(n.DIALOG_HEADER_ACTION_ITEMS)||f(_.HIDE_DIALOG_HEADER_ACTION_ITEMS),this.hideDialogHeaderHistory=U(n.DIALOG_HEADER_HISTORY)||f(_.HIDE_DIALOG_HEADER_HISTORY),this.hideDialogHeaderSettings=U(n.DIALOG_HEADER_SETTINGS)||f(_.HIDE_DIALOG_HEADER_SETTINGS),this.hideDialogHeaderOverflow=U(n.DIALOG_HEADER_OVERFLOW)||f(_.HIDE_DIALOG_HEADER_OVERFLOW),this.hideDialogHistory=U(n.DIALOG_HISTORY)||f(_.HIDE_DIALOG_HISTORY),this.hideDialogLogbook=U(n.DIALOG_LOGBOOK)||f(_.HIDE_DIALOG_LOGBOOK),this.hideDialogAttributes=U(n.DIALOG_ATTRIBUTES)||f(_.HIDE_DIALOG_ATTRIBUTES),this.hideDialogMediaActions=U(n.DIALOG_MEDIA_ACTIONS)||f(_.HIDE_DIALOG_MEDIA_ACTIONS),this.hideDialogUpdateActions=U(n.DIALOG_UPDATE_ACTIONS)||f(_.HIDE_DIALOG_UPDATE_ACTIONS),this.hideDialogClimateActions=U(n.DIALOG_CLIMATE_ACTIONS)||f(_.HIDE_DIALOG_CLIMATE_ACTIONS),this.hideDialogTimerActions=U(n.DIALOG_TIMER_ACTIONS)||f(_.HIDE_DIALOG_TIMER_ACTIONS),this.hideDialogHistoryShowMore=U(n.DIALOG_HISTORY_SHOW_MORE)||f(_.HIDE_DIALOG_HISTORY_SHOW_MORE),this.hideDialogLogbookShowMore=U(n.DIALOG_LOGBOOK_SHOW_MORE)||f(_.HIDE_DIALOG_LOGBOOK_SHOW_MORE),this.blockOverflow=U(n.OVERFLOW_MOUSE)||f(_.BLOCK_OVERFLOW),this.blockMouse=U(n.MOUSE)||f(_.BLOCK_MOUSE)):this.setOptions(t,!1),(h=this.user.is_admin?t.admin_settings:t.non_admin_settings)&&this.setOptions(h,!0),t.user_settings&&L(t.user_settings).forEach((function(t){L(t.users).some((function(t){return t.toLowerCase()===l.user.name.toLowerCase()}))&&l.setOptions(t,!0)})),(T=this.ignoreMobile?null:t.mobile_settings)&&(S=T.custom_width?T.custom_width:812,window.innerWidth<=S&&this.setOptions(T,!0)),(R=this.ignoreEntity?null:t.entity_settings)&&R.forEach((function(t){var o=Object.keys(t.entity)[0];window.kioskModeEntities[i].includes(o)||window.kioskModeEntities[i].push(o),l.ha.hass.states[o].state==t.entity[o]&&l.setOptions(t,!1)})),f(_.DISABLE_KIOSK_MODE)&&!this.ignoreDisableKm?[2]:(this.insertStyles(),[2])}var N}))}))},t.prototype.insertStyles=function(){if(this.hideHeader?(G(b.HEADER,this.huiRoot),f(_.CACHE)&&M(n.HEADER,R)):C(this.huiRoot),this.hideSidebar?(G(b.SIDEBAR,this.drawerLayout),G(b.ASIDE,this.drawerLayout.shadowRoot),f(_.CACHE)&&M(n.SIDEBAR,R)):(C(this.drawerLayout),C(this.drawerLayout.shadowRoot)),this.hideAccount||this.hideNotifications||this.hideMenuButton){var t=[this.hideAccount?b.ACCOUNT:"",this.hideNotifications?b.NOTIFICATIONS:"",this.hideAccount&&this.hideNotifications?b.DIVIDER:"",this.hideAccount||this.hideNotifications?b.PEPER_LISTBOX(this.hideAccount,this.hideNotifications):"",this.hideMenuButton?b.MENU_BUTTON:""];G(t.join(""),this.sideBarRoot),this.hideAccount&&f(_.CACHE)&&M(n.ACCOUNT,R)}else C(this.sideBarRoot);if(this.hideSearch||this.hideAssistant||this.hideRefresh||this.hideUnusedEntities||this.hideReloadResources||this.hideEditDashboard||this.hideMenuButton||this.hideOverflow||this.blockOverflow||this.hideSidebar){t=[this.hideSearch?b.SEARCH:"",this.hideAssistant?b.ASSISTANT:"",this.hideRefresh?b.REFRESH:"",this.hideUnusedEntities?b.UNUSED_ENTITIES:"",this.hideReloadResources?b.RELOAD_RESOURCES:"",this.hideEditDashboard?b.EDIT_DASHBOARD:"",this.hideOverflow?b.OVERFLOW_MENU:"",this.blockOverflow?b.BLOCK_OVERFLOW:"",this.hideMenuButton||this.hideSidebar?b.MENU_BUTTON_BURGER:""];G(t.join(""),this.appToolbar),f(_.CACHE)&&(this.hideSearch&&M(n.SEARCH,R),this.hideAssistant&&M(n.ASSISTANT,R),this.hideRefresh&&M(n.REFRESH,R),this.hideUnusedEntities&&M(n.UNUSED_ENTITIES,R),this.hideReloadResources&&M(n.RELOAD_RESOURCES,R),this.hideEditDashboard&&M(n.EDIT_DASHBOARD,R),this.hideOverflow&&M(n.OVERFLOW,R),this.blockOverflow&&M(n.OVERFLOW_MOUSE,R),this.hideMenuButton&&M(n.MENU_BUTTON,R))}else C(this.appToolbar);this.blockMouse?(G(b.MOUSE,document.body),f(_.CACHE)&&M(n.MOUSE,R)):C(document.body),window.removeEventListener("resize",this.resizeWindowBinded),window.addEventListener("resize",this.resizeWindowBinded),window.dispatchEvent(new Event("resize"))},t.prototype.insertDialogStyles=function(t){return o(this,void 0,void 0,(function(){var i,o=this;return e(this,(function(e){return w((function(){return t.querySelectorAll("".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(d.HA_DIALOG_HEADER," > ").concat(d.MENU_ITEM)).then((function(t){B(t,o.menuTranslations)})).catch((function(t){console.warn("".concat(E,": ").concat(O," ").concat(t))})),this.hideDialogHeaderActionItems||this.hideDialogHeaderHistory||this.hideDialogHeaderSettings||this.hideDialogHeaderOverflow?(i=[this.hideDialogHeaderActionItems||this.hideDialogHeaderHistory?b.DIALOG_HEADER_HISTORY:"",this.hideDialogHeaderActionItems||this.hideDialogHeaderSettings?b.DIALOG_HEADER_SETTINGS:"",this.hideDialogHeaderActionItems||this.hideDialogHeaderOverflow?b.DIALOG_HEADER_OVERFLOW:""],G(i.join(""),t),f(_.CACHE)&&(this.hideDialogHeaderActionItems&&M(n.DIALOG_HEADER_ACTION_ITEMS,R),this.hideDialogHeaderHistory&&M(n.DIALOG_HEADER_HISTORY,R),this.hideDialogHeaderSettings&&M(n.DIALOG_HEADER_SETTINGS,R),this.hideDialogHeaderOverflow&&M(n.DIALOG_HEADER_OVERFLOW,R))):C(t),[2]}))}))},t.prototype.insertDialogChildStyles=function(t){return o(this,void 0,void 0,(function(){var i,o,E=this;return e(this,(function(e){return i=Boolean(this.version&&(this.version[0]<2023||2023===this.version[0]&&this.version[1]<9)),this.hideDialogHistory||this.hideDialogLogbook||this.hideDialogClimateActions?(o=[this.hideDialogHistory?b.DIALOG_HISTORY:"",this.hideDialogLogbook?b.DIALOG_LOGBOOK:"",this.hideDialogClimateActions&&i?b.DIALOG_CLIMATE_ACTIONS:""],G(o.join(""),t),f(_.CACHE)&&(this.hideDialogHistory&&M(n.DIALOG_HISTORY,R),this.hideDialogLogbook&&M(n.DIALOG_LOGBOOK,R),this.hideDialogClimateActions&&M(n.DIALOG_CLIMATE_ACTIONS,R))):C(t),i||w((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_CLIMATE))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){E.hideDialogClimateActions?G(b.DIALOG_CLIMATE_CONTROL_SELECT,t):C(t),w((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_CLIMATE_TEMPERATURE))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){E.hideDialogClimateActions?G(b.DIALOG_CLIMATE_TEMPERATURE_BUTTONS,t):C(t),w((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){E.hideDialogClimateActions?G(b.DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION,t):C(t)})).catch((function(t){}))})).catch((function(t){}))})).catch((function(t){})),w((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_HISTORY))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){E.hideDialogHistoryShowMore?(G(b.DIALOG_SHOW_MORE,t),f(_.CACHE)&&M(n.DIALOG_HISTORY_SHOW_MORE,R)):C(t)})).catch((function(t){})),w((function(){var i;return null===(i=t.querySelector(d.HA_DIALOG_LOGBOOK))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){E.hideDialogLogbookShowMore?(G(b.DIALOG_SHOW_MORE,t),f(_.CACHE)&&M(n.DIALOG_LOGBOOK_SHOW_MORE,R)):C(t)})).catch((function(){})),w((function(){var i;return null===(i=t.querySelector(["".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_DEFAULT),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_VACUUM),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_TIMER),"".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_MEDIA_PLAYER)].join(",")))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){if(E.hideDialogAttributes||E.hideDialogTimerActions||E.hideDialogMediaActions){var i=[E.hideDialogAttributes?b.DIALOG_ATTRIBUTES:"",E.hideDialogTimerActions?b.DIALOG_TIMER_ACTIONS:"",E.hideDialogMediaActions?b.DIALOG_MEDIA_ACTIONS:""];G(i.join(""),t),f(_.CACHE)&&(E.hideDialogAttributes&&M(n.DIALOG_ATTRIBUTES,R),E.hideDialogTimerActions&&M(n.DIALOG_TIMER_ACTIONS,R),E.hideDialogMediaActions&&M(n.DIALOG_MEDIA_ACTIONS,R))}else C(t)})).catch((function(){})),w((function(){var i;return null===(i=t.querySelector("".concat(d.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(d.HA_DIALOG_UPDATE)))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"").then((function(t){E.hideDialogUpdateActions?(G(b.DIALOG_UPDATE_ACTIONS,t),f(_.CACHE)&&M(n.DIALOG_UPDATE_ACTIONS,R)):C(t)})).catch((function(){})),[2]}))}))},t.prototype.resizeWindow=function(){var t=this;window.clearTimeout(this.resizeDelay),this.resizeDelay=window.setTimeout((function(){t.updateMenuItemsLabels()}),250)},t.prototype.watchDashboards=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===d.HA_PANEL_LOVELACE&&window.KioskMode.run(t)}))}))},t.prototype.watchMoreInfoDialogs=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===d.HA_MORE_INFO_DIALOG&&window.KioskMode.runDialogs(t).catch((function(t){return console.warn("".concat(O," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.watchMoreInfoDialogsContent=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName!==d.HA_DIALOG_MORE_INFO&&t.localName!==d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK||window.KioskMode.runDialogsChildren(t).catch((function(t){return console.warn("".concat(O," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.updateMenuItemsLabels=function(){var t=this;this.menuTranslations&&(w((function(){return t.appToolbar.querySelectorAll("".concat(d.TOOLBAR," > ").concat(d.ACTION_ITEMS," > ").concat(d.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(d.ACTION_ITEMS," > ").concat(d.MENU_ITEM)).then((function(i){B(i,t.menuTranslations)})).catch((function(t){console.warn("".concat(E,": ").concat(O," ").concat(t))})),this.user.is_admin&&w((function(){return t.appToolbar.querySelectorAll(d.OVERLAY_MENU_ITEM)}),(function(t){return!(!t||!t.length)}),"".concat(d.TOOLBAR," > ").concat(d.OVERLAY_MENU_ITEM)).then((function(i){i.forEach((function(i){if(i&&i.dataset&&!i.dataset.selector){var o=i.textContent.trim();i.dataset.selector=t.menuTranslations[o]}}))})).catch((function(t){console.warn("".concat(E,": ").concat(O," ").concat(t))})))},t.prototype.entityWatch=function(){return o(this,void 0,void 0,(function(){var t=this;return e(this,(function(i){switch(i.label){case 0:return[4,window.hassConnection];case 1:return i.sent().conn.subscribeMessage((function(i){return t.entityWatchCallback(i)}),{type:"subscribe_events",event_type:l}),[2]}}))}))},t.prototype.entityWatchCallback=function(t){return o(this,void 0,void 0,(function(){var i;return e(this,(function(o){switch(o.label){case 0:return!(i=window.kioskModeEntities[this.ha.hass.panelUrl]||[]).length||t.event_type!==l||!i.includes(t.data.entity_id)||t.data.old_state&&t.data.new_state.state===t.data.old_state.state?[3,2]:[4,this.run()];case 1:o.sent(),this.runDialogs().catch((function(){})),o.label=2;case 2:return[2]}}))}))},t.prototype.setOptions=function(t,i){_.HIDE_HEADER in t&&(this.hideHeader=t[_.HIDE_HEADER]),_.HIDE_SIDEBAR in t&&(this.hideSidebar=t[_.HIDE_SIDEBAR]),_.HIDE_OVERFLOW in t&&(this.hideOverflow=t[_.HIDE_OVERFLOW]),_.HIDE_MENU_BUTTON in t&&(this.hideMenuButton=t[_.HIDE_MENU_BUTTON]),_.HIDE_ACCOUNT in t&&(this.hideAccount=t[_.HIDE_ACCOUNT]),_.HIDE_NOTIFICATIONS in t&&(this.hideNotifications=t[_.HIDE_NOTIFICATIONS]),_.HIDE_SEARCH in t&&(this.hideSearch=t[_.HIDE_SEARCH]),_.HIDE_ASSISTANT in t&&(this.hideAssistant=t[_.HIDE_ASSISTANT]),_.HIDE_REFRESH in t&&(this.hideRefresh=t[_.HIDE_REFRESH]),_.HIDE_UNUSED_ENTITIES in t&&(this.hideUnusedEntities=t[_.HIDE_UNUSED_ENTITIES]),_.HIDE_RELOAD_RESOURCES in t&&(this.hideReloadResources=t[_.HIDE_RELOAD_RESOURCES]),_.HIDE_EDIT_DASHBOARD in t&&(this.hideEditDashboard=t[_.HIDE_EDIT_DASHBOARD]),_.HIDE_DIALOG_HEADER_ACTION_ITEMS in t&&(this.hideDialogHeaderActionItems=t[_.HIDE_DIALOG_HEADER_ACTION_ITEMS]),_.HIDE_DIALOG_HEADER_HISTORY in t&&(this.hideDialogHeaderHistory=t[_.HIDE_DIALOG_HEADER_HISTORY]),_.HIDE_DIALOG_HEADER_SETTINGS in t&&(this.hideDialogHeaderSettings=t[_.HIDE_DIALOG_HEADER_SETTINGS]),_.HIDE_DIALOG_HEADER_OVERFLOW in t&&(this.hideDialogHeaderOverflow=t[_.HIDE_DIALOG_HEADER_OVERFLOW]),_.HIDE_DIALOG_HISTORY in t&&(this.hideDialogHistory=t[_.HIDE_DIALOG_HISTORY]),_.HIDE_DIALOG_LOGBOOK in t&&(this.hideDialogLogbook=t[_.HIDE_DIALOG_LOGBOOK]),_.HIDE_DIALOG_ATTRIBUTES in t&&(this.hideDialogAttributes=t[_.HIDE_DIALOG_ATTRIBUTES]),_.HIDE_DIALOG_MEDIA_ACTIONS in t&&(this.hideDialogMediaActions=t[_.HIDE_DIALOG_MEDIA_ACTIONS]),_.HIDE_DIALOG_UPDATE_ACTIONS in t&&(this.hideDialogUpdateActions=t[_.HIDE_DIALOG_UPDATE_ACTIONS]),_.HIDE_DIALOG_CLIMATE_ACTIONS in t&&(this.hideDialogClimateActions=t[_.HIDE_DIALOG_CLIMATE_ACTIONS]),_.HIDE_DIALOG_TIMER_ACTIONS in t&&(this.hideDialogTimerActions=t[_.HIDE_DIALOG_TIMER_ACTIONS]),_.HIDE_DIALOG_HISTORY_SHOW_MORE in t&&(this.hideDialogHistoryShowMore=t[_.HIDE_DIALOG_HISTORY_SHOW_MORE]),_.HIDE_DIALOG_LOGBOOK_SHOW_MORE in t&&(this.hideDialogLogbookShowMore=t[_.HIDE_DIALOG_LOGBOOK_SHOW_MORE]),_.BLOCK_OVERFLOW in t&&(this.blockOverflow=t[_.BLOCK_OVERFLOW]),_.BLOCK_MOUSE in t&&(this.blockMouse=t[_.BLOCK_MOUSE]),_.KIOSK in t&&(this.hideHeader=this.hideSidebar=t[_.KIOSK]),i&&(_.IGNORE_ENTITY_SETTINGS in t&&(this.ignoreEntity=t[_.IGNORE_ENTITY_SETTINGS]),_.IGNORE_MOBILE_SETTINGS in t&&(this.ignoreMobile=t[_.IGNORE_MOBILE_SETTINGS]),_.IGNORE_DISABLE_KM in t&&(this.ignoreDisableKm=t[_.IGNORE_DISABLE_KM]))},t}();(new y).log(),Promise.resolve(customElements.whenDefined(d.HUI_VIEW)).then((function(){window.KioskMode=new k}))}();
