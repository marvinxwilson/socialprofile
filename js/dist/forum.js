module.exports=function(t){var o={};function n(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=o,n.d=function(t,o,a){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)n.d(a,i,function(o){return t[o]}.bind(null,i));return a},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=16)}([function(t,o){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,o){t.exports=flarum.core.compat["forum/app"]},function(t,o){t.exports=flarum.core.compat["common/utils/classList"]},function(t,o){t.exports=flarum.core.compat["common/components/Badge"]},function(t,o){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,o){t.exports=flarum.core.compat["common/components/Modal"]},function(t,o){t.exports=flarum.core.compat["common/components/Button"]},function(t,o){t.exports=flarum.core.compat["common/helpers/icon"]},,function(t,o){t.exports=flarum.core.compat["common/Model"]},function(t,o){t.exports=flarum.core.compat["common/models/User"]},function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["forum/components/UserCard"]},function(t,o){t.exports=flarum.core.compat["common/Component"]},function(t,o){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,o){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,o,n){"use strict";n.r(o);var a=n(1),i=n.n(a),e=n(9),s=n.n(e),r=n(10),c=n.n(r),l=n(11),f=n(12),u=n.n(f),b=n(3),d=n.n(b),p=n(4),h=n.n(p),v=n(2),g=n.n(v);function y(t,o){return(y=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function x(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,y(t,o)}var w=n(5),B=n.n(w),k=n(6),N=n.n(k),S=n(0),j=n.n(S),O=n(13),E=n.n(O),_=n(14),F=n.n(_);var C=n(15),M=n.n(C),U=n(7),I=n.n(U),P=function(t){function o(){return t.apply(this,arguments)||this}x(o,t),o.initAttrs=function(o){t.initAttrs.call(this,o),o.className="icondropdown",o.buttonClassName="Button Button--icon",o.menuClassName="social-dropdown-menu"};var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.icons={social:["fas fa-envelope","fas fa-globe","fab fa-amazon","fab fa-angellist","fab fa-apple","fab fa-behance","fab fa-bitbucket","fab fa-codepen","fab fa-connectdevelop","fab fa-dashcube","fab fa-delicious","fab fa-deviantart","fab fa-digg","fab fa-discord","fab fa-dribbble","fab fa-dropbox","fab fa-drupal","fab fa-facebook","fab fa-flickr","fab fa-foursquare","fab fa-get-pocket","fab fa-git","fab fa-github","fab fa-github-alt","fab fa-google","fab fa-google-plus","fab fa-google-wallet","fab fa-hacker-news","fab fa-instagram","fab fa-ioxhost","fab fa-joomla","fab fa-jsfiddle","fab fa-lastfm","fab fa-leanpub","fab fa-linkedin","fab fa-mastodon","fab fa-medium","fab fa-odnoklassniki","fab fa-opencart","fab fa-pagelines","fab fa-paypal","fab fa-pied-piper-alt","fab fa-pinterest-p","fab fa-playstation","fab fa-qq","fab fa-reddit","fab fa-renren","fab fa-sellsy","fas fa-share-alt","fab fa-shirtsinbulk","fab fa-simplybuilt","fab fa-skyatlas","fab fa-skype","fab fa-slack","fab fa-slideshare","fab fa-soundcloud","fab fa-spotify","fab fa-stack-exchange","fab fa-stack-overflow","fab fa-steam","fab fa-stumbleupon","fab fa-telegram","fab fa-tencent-weibo","fab fa-trello","fab fa-tripadvisor","fab fa-tumblr","fab fa-twitch","fab fa-twitter","fab fa-viacoin","fab fa-vimeo","fab fa-vine","fab fa-vk","fab fa-weibo","fab fa-weixin","fab fa-whatsapp","fab fa-wordpress","fab fa-xbox","fab fa-xing","fab fa-y-combinator","fab fa-yandex","fab fa-yandex-international","fab fa-yelp","fab fa-youtube"]}},n.view=function(o){return o.children=this.items().toArray(),t.prototype.view.call(this,o)},n.getButtonContent=function(){var t=this,o=function(t){return I()(t,{className:"icondropdown-activeIcon fa-fw"})};return[/^favicon(-\w+)?$/.test(this.attrs.selection())?this.attrs.allowsExternal?[m("img",{className:g()({"icondropdown-activeIcon":!0,"social-greyscale-button":"favicon-grey"===this.attrs.selection(),"social-button":"favicon-grey"===!this.attrs.selection()}),alt:"",src:this.attrs.favicon(),onerror:function(){t.attrs.favicon("none"),t.select(t.icons.social[0])}})]:o("fas fa-globe"):o(this.attrs.selection()),this.attrs.caretIcon?I()(this.attrs.caretIcon,{className:"Button-caret"}):""]},n.items=function(){var t=this,o=new h.a;return"none"!==this.attrs.favicon()&&this.attrs.allowsExternal&&(o.add("favicon",m("div",{onclick:function(){return t.select("favicon")},role:"button",className:g()({"iconpicker-item":!0,"iconpicker-item--highlighted":"favicon"===this.attrs.selection()}),title:"Favicon"},m("img",{className:"iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),102),o.add("favicon-grey",m("div",{onclick:function(){return t.select("favicon-grey")},role:"button",className:g()({"iconpicker-item iconpicker-item--invertColors":!0,"iconpicker-item--highlighted":"favicon-grey"===this.attrs.selection()}),title:"Grey Favicon"},m("img",{className:"social-greyscale-button iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),101)),this.icons.social.forEach((function(n){o.add(n.replace(/ /,"-"),m("div",{onclick:function(){return t.select(n)},className:g()({"iconpicker-item":!0,"iconpicker-item--highlighted":t.attrs.selection()===n}),role:"button",title:"."+n},I()(n,{className:"social-icon fa-fw"})),100)})),o},n.select=function(t){this.attrs.selection(t)},o}(M.a),A=function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.button=this.attrs.button,this.allowsExternal=i.a.forum.attribute("fof-socialprofile.allow_external_favicons")},n.view=function(){return m("div",{className:"Form-group form-group-social",id:"socialgroup-"+this.button.index()},m("input",{type:"text",className:"SocialFormControl SocialFormControl-title",placeholder:i.a.translator.trans("fof-socialprofile.forum.edit.title"),tabIndex:2*(this.button.index()+1)-1,bidi:this.button.title}),P.component({selection:this.button.icon,favicon:this.button.favicon,index:this.button.index,allowsExternal:this.allowsExternal}),m("input",{type:"text",className:"SocialFormControl SocialFormControl-url",placeholder:i.a.translator.trans("fof-socialprofile.forum.edit.url"),tabIndex:2*(this.button.index()+1),value:this.button.url(),onchange:F()("value",this.onUrlChange.bind(this))}),m("input",{type:"hidden",className:"SocialFormControl SocialFormControl-icon",id:"icon"+this.button.index()+"-icon",bidi:this.button.icon}),m("input",{type:"hidden",className:"SocialFormControl SocialFormControl-favicon",id:"icon"+this.button.index()+"-favicon",bidi:this.button.favicon}))},n.onUrlChange=function(t){var o=this;this.button.url(t),this.allowsExternal&&(clearTimeout(this.waitUntilFinished),"fas fa-circle-notch fa-spin"!==this.button.icon()&&(this.button.icon("fas fa-circle-notch fa-spin"),this.button.favicon("none")),this.waitUntilFinished=setTimeout((function(){if(function(t){var o;try{o=new URL(t)}catch(t){return!1}return["http:","https:"].includes(o.protocol)}(o.button.url())){var t=function(t){var o;try{o=new URL(t)}catch(t){return null}return["http:","https:"].includes(o.protocol)?o.origin:null}(o.button.url())+"/favicon.ico";o.button.favicon(t),o.button.icon("favicon"),m.redraw()}else o.button.icon("fas fa-globe"),o.button.favicon("none"),m.redraw()}),1e3))},o}(E.a),D=function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var n=o.prototype;return n.oninit=function(o){var n=this;t.prototype.oninit.call(this,o),this.buttons=[];var a=this.attrs.user.socialButtons();a.length?a.forEach((function(t,o){""!==t.title&&n.createButtonObject(o,t)})):this.createButtonObject(0)},n.className=function(){return"SocialButtonsModal Modal--small"},n.title=function(){return app.translator.trans("fof-socialprofile.forum.edit.headtitle")},n.content=function(){var t=this.buttons.some((function(t){return"fas fa-circle-notch fa-spin"===t.icon()}));return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.buttons.map((function(t){return A.component({button:t})})),m("div",{className:"Form-group",id:"submit-button-group"},m("div",{className:"Button Button--primary EditSocialButtons-add",style:"margin-left: 1%;",onclick:this.addSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-plus"})),m("div",{className:"Button Button--primary EditSocialButtons-del",style:"margin-left: 1%;",onclick:this.delSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-minus"})),N.a.component({type:"submit",style:"float: right;",className:"Button Button--primary EditSocialButtons-save",loading:this.loading,disabled:t,title:t?app.translator.trans("fof-socialprofile.forum.edit.save_disabled_fetching_favicons"):null},app.translator.trans("fof-socialprofile.forum.edit.submit")))))},n.data=function(){var t=[];return this.buttons.forEach((function(o,n){""!==o.title()&&(t[n]={},t[n].title=o.title(),t[n].url=o.url(),t[n].icon=o.icon(),t[n].favicon=o.favicon())})),{socialButtons:JSON.stringify(t)}},n.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.attrs.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch((function(){o.loading=!1,m.redraw()}))},n.addSocialButton=function(){var t=this;this.createButtonObject(this.buttons.length),m.redraw(),$("document").ready((function(){$("#socialgroup-"+(t.buttons.length-1)).slideDown()}))},n.delSocialButton=function(){var t=this,o=this.buttons.length-1;$("#socialgroup-"+o).slideUp("normal",(function(){t.buttons.splice(o,1),m.redraw()}))},n.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=j()(t),this.buttons[t].favicon=j()("none"),this.buttons[t].title=j()(""),this.buttons[t].url=j()(""),this.buttons[t].icon=j()("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=j()(t),this.buttons[t].favicon=j()(o.favicon),this.buttons[t].title=j()(o.title),this.buttons[t].url=j()(o.url),this.buttons[t].icon=j()(o.icon))},o}(B.a),L=function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var n=o.prototype;return n.oninit=function(o){var n=this;t.prototype.oninit.call(this,o),this.buttons=[],this.index=this.attrs.index;var a=this.attrs.user.socialButtons();this.button=a[this.index],a.forEach((function(t,o){n.createButtonObject(o,t)}))},n.className=function(){return"SocialButtonsModal Modal--small"},n.title=function(){return app.translator.trans("fof-socialprofile.forum.edit.deletetitle")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("h3",{className:"SocialProfile-title"},this.button.title),m("p",{className:"SocialProfile-url"},this.button.url),m("div",{className:"Form-group",id:"submit-button-group"},N.a.component({type:"submit",className:"Button Button--primary EditSocialButtons-delete",loading:this.loading},app.translator.trans("fof-socialprofile.forum.edit.delete")))))},n.data=function(){var t=[];return this.buttons.forEach((function(o,n){""!==o.title()&&(t[n]={},t[n].title=o.title(),t[n].url=o.url(),t[n].icon=o.icon(),t[n].favicon=o.favicon())})),{socialButtons:JSON.stringify(t)}},n.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.buttons.splice(this.index,1),this.attrs.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch((function(){o.loading=!1,m.redraw()}))},n.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=j()(t),this.buttons[t].favicon=j()("none"),this.buttons[t].title=j()(""),this.buttons[t].url=j()(""),this.buttons[t].icon=j()("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=j()(t),this.buttons[t].favicon=j()(o.favicon),this.buttons[t].title=j()(o.title),this.buttons[t].url=j()(o.url),this.buttons[t].icon=j()(o.icon))},o}(B.a);i.a.initializers.add("fof/socialprofile",(function(){c.a.prototype.socialButtons=s.a.attribute("socialButtons",(function(t){return JSON.parse(t||"[]")})),Object(l.extend)(u.a.prototype,"infoItems",(function(t){var o=this;this.isSelf=i.a.session.user===this.attrs.user,this.canEdit=!!i.a.session.user&&i.a.session.user.data.attributes.canEdit,this.buttons=this.attrs.user.socialButtons();var n=new h.a;this.buttons.length?(this.buttons.forEach((function(t,a){if(""!==t.title&&""!==t.icon&&""!==t.url){var e,s,r="",c=g()(((e={})["social-button "+t.icon+"-"+a+" social-icon-"+a]=!0,e["social-greyscale-button"]="favicon-grey"===t.icon,e));"favicon"!==t.icon&&"favicon-grey"!==t.icon||(i.a.forum.attribute("fof-socialprofile.allow_external_favicons")?r='\n                                background-image: url("'+t.favicon+'");\n                                background-size: 60%;\n                                background-position: center;\n                                background-repeat: no-repeat;\n                            ':c+=" fas fa-globe"),n.add("social-icon-"+a,d.a.component({className:g()((s={},s[c]=!0,s["social-icon--deleting"]=o.deleting,s)),type:"social",icon:t.icon,label:t.title,style:r,onclick:function(){o.deleting?i.a.modal.show(L,{user:o.attrs.user,index:a}):window.open(t.url,"_blank")}}))}})),this.isSelf?n.add("settings social-button",d.a.component({type:"social social-settings",icon:"fas fa-cog",label:i.a.translator.trans("fof-socialprofile.forum.edit.edit"),onclick:function(){i.a.modal.show(D,{user:o.attrs.user})}}),-1):this.canEdit&&n.add("settings social-button",d.a.component({type:"social social-moderate "+(this.deleting?"social-moderate--highlighted":""),icon:"fas fa-exclamation-triangle",label:i.a.translator.trans("fof-socialprofile.forum.edit.delete"),onclick:function(){o.deleting=!o.deleting}}),-1)):this.isSelf&&n.add("settings social-button",d.a.component({type:"social null-social-settings",icon:"fas fa-plus",label:i.a.translator.trans("fof-socialprofile.forum.edit.add"),onclick:function(){i.a.modal.show(D,{user:o.attrs.user})}}),-1),n.toArray().length>0&&(t.has("lastSeen")&&t.replace("lastSeen",t.lastSeen,50),t.has("joined")&&t.replace("joined",t.joined,40),t.add("fofsocialprofile",n.toArray(),20))}))}))}]);
//# sourceMappingURL=forum.js.map