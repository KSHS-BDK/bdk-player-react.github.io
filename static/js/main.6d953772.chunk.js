(this["webpackJsonpbdk-player-react.github.io"]=this["webpackJsonpbdk-player-react.github.io"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('[{"name":"NEXT COLOR PLANET","artist":"\u661f\u8857\u3059\u3044\u305b\u3044","url":"music/NEXT COLOR PLANET.mp3","cover":"pic/NEXT COLOR PLANET.jpg","album":"","tags":["hololive","original"]},{"name":"GHOST","artist":"\u661f\u8857\u3059\u3044\u305b\u3044","url":"music/GHOST.mp3","cover":"pic/GHOST.jpg","album":"","tags":["hololive","original"]},{"name":"\u30cf\u30eb\u30b8\u30aa\u30f3","artist":"YOASOBI","url":"music/\u30cf\u30eb\u30b8\u30aa\u30f3.mp3","cover":"pic/the book.jpeg","album":"THE BOOK","tags":[]},{"name":"\u30e9\u30d6\u30ec\u30bf\u30fc","artist":"YOASOBI","url":"music/\u30e9\u30d6\u30ec\u30bf\u30fc.mp3","cover":"","album":"","tags":[]},{"name":"\u602a\u7269","artist":"YOASOBI","url":"music/\u602a\u7269.mp3","cover":"","album":"","tags":[]},{"name":"\u8e0a","artist":"Ado","url":"music/\u8e0a.mp3","cover":"","album":"","tags":[]},{"name":"\u3046\u3063\u305b\u3047\u308f","artist":"Ado","url":"music/\u3046\u3063\u305b\u3047\u308f.mp3","cover":"","album":"","tags":[]},{"name":"\u30ae\u30e9\u30ae\u30e9","artist":"Ado","url":"music/\u30ae\u30e9\u30ae\u30e9.mp3","cover":"","album":"","tags":[]},{"name":"\u30b0\u30c3\u30d0\u30a4\u5ba3\u8a00 Aqua cover","artist":"\u6e4a\u3042\u304f\u3042","url":"music/\u30b0\u30c3\u30d0\u30a4\u5ba3\u8a00-aqua.mp3","cover":"","album":"","tags":["hololive","cover"]},{"name":"\u30c7\u30a3\u30b9\u30b3\u30df\u30e5\u661f\u4eba Pekora cover","artist":"\u514e\u7530\u307a\u3053\u3089","url":"music/\u30c7\u30a3\u30b9\u30b3\u30df\u30e5\u661f\u4eba-pekora.mp3","cover":"","album":"","tags":["hololive","cover"]},{"name":"\u5c11\u5973\u30ec\u30a4 covered by Suisei","artist":"\u661f\u8857\u3059\u3044\u305b\u3044","url":"music/\u5c11\u5973\u30ec\u30a4 covered by Suisei.mp3","cover":"pic/\u5c11\u5973\u30ec\u30a4.png","album":"","tags":["hololive","cover"]},{"name":"\u591c\u306b\u99c6\u3051\u308b","artist":"YOASOBI","url":"music/\u591c\u306b\u99c6\u3051\u308b.mp3","cover":"pic/the book.jpeg","album":"THE BOOK","tags":[]},{"name":"\u7fa4\u9752","artist":"YOASOBI","url":"music/\u7fa4\u9752.mp3","cover":"pic/the book.jpeg","album":"THE BOOK","tags":[]},{"name":"\u8e0a covered by Shion","artist":"\u7d2b\u54b2\u30b7\u30aa\u30f3","url":"music/\u8e0a covered by Shion.mp3","cover":"","album":"","tags":["hololive","cover"]},{"name":"\u30f4\u30a1\u30f3\u30d1\u30a4\u30a2 coverd by Aqua","artist":"\u6e4a\u3042\u304f\u3042","url":"music/\u30f4\u30a1\u30f3\u30d1\u30a4\u30a2 coverd by Aqua.mp3","cover":"","album":"","tags":["hololive","cover"]},{"name":"\u30c0\u30c0\u30c0\u30c0\u5929\u4f7f covered by aqua","artist":"\u6e4a\u3042\u304f\u3042","url":"music/\u30c0\u30c0\u30c0\u30c0\u5929\u4f7f covered by aqua.mp3","cover":"","album":"","tags":["hololive","cover"]}]')},39:function(e,t,a){},45:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(19),i=a.n(r),s=(a(39),a(12)),o=a(7),l=a(14),u=a(29),b=a(3),d=a(2),j="INIT_APLAYER",O="SET_MUSIC_LIST",m="SET_CATEGORY",f="SET_CATEGORY_ARTISTS",v="SET_CATEGORY_ALBUMS",p="SET_CATEGORY_TAGS",g="SET_CATEGORY_MUSIC_LIST",h={list:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;return a===O?Object(d.a)(Object(d.a)({},e),{},{list:Object(b.a)(c)}):e},y={aplayer:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;return a===j?Object(d.a)(Object(d.a)({},e),{},{aplayer:c.aplayer}):e},N=a(11),w={categories:{albums:[],artists:[],tags:[]},categoryMusicList:{albums:[],artists:[],tags:[]}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case m:var n=t.category;return Object(d.a)(Object(d.a)({},e),{},{categories:Object(d.a)(Object(d.a)({},e.categories),{},Object(N.a)({},n,c))});case g:var r=t.category;return Object(d.a)(Object(d.a)({},e),{},{categoryMusicList:Object(d.a)(Object(d.a)({},e.categoryMusicList),{},Object(N.a)({},r,c))});case f:return Object(d.a)(Object(d.a)({},e),{},{categories:Object(d.a)(Object(d.a)({},e.categories),{},{artists:Object(b.a)(c.artists)})});case v:return Object(d.a)(Object(d.a)({},e),{},{categories:Object(d.a)(Object(d.a)({},e.categories),{},{albums:Object(b.a)(c.albums)})});case p:return Object(d.a)(Object(d.a)({},e),{},{categories:Object(d.a)(Object(d.a)({},e.categories),{},{tags:Object(b.a)(c.tags)})});default:return e}},S=Object(l.b)({music:x,player:C,category:k});var T=a.p+"static/media/spotify.b0990d4c.svg",E=(a(45),"/home"),L="/search",A="/library",H="/playlist",P=a(0);function B(e){return Object(P.jsxs)("div",{className:"SideNav container-fluid",children:[Object(P.jsx)("div",{className:"nav-header",children:Object(P.jsxs)("h2",{className:"fs-4 py-4 px-2",children:[Object(P.jsx)("img",{src:T,alt:"logo",width:40,height:40}),Object(P.jsx)("span",{className:"ps-2",children:e.navTitle})]})}),Object(P.jsx)("div",{className:"nav-nav",children:Object(P.jsxs)("ul",{className:"nav flex-column",children:[Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsxs)(s.b,{className:"nav-link text-secondary",id:"nav-home",to:E,children:[Object(P.jsx)("i",{className:"bi-house-door"}),"Home"]})}),Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsxs)(s.b,{className:"nav-link text-secondary",id:"nav-search",to:L,children:[Object(P.jsx)("i",{className:"bi-search"}),"Search"]})}),Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsxs)(s.b,{className:"nav-link text-secondary",id:"nav-library",to:A,children:[Object(P.jsx)("i",{className:"bi-archive"}),"Library"]})}),Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsxs)(s.b,{className:"nav-link text-secondary",id:"nav-playlist",to:H,children:[Object(P.jsx)("i",{className:"bi bi-collection-play"}),"Playlist"]})})]})})]})}B.defaultProps={navTitle:"Spotikai"};var M=B,I=a(21),_=a.n(I),D=a(31),G=a(32),R=a.n(G),q=a(6),F=a(5),Y=a(4),z=a.n(Y),X=a(33),U=a.n(X);a(56);function J(e){var t=e.greetingText,a=e.greetingHourRange;return Object(P.jsx)("div",{className:"Greeting",children:Object(P.jsx)("h2",{className:"sf-2",children:function(){var e=U()().format("HH");return e>=a.morning.from&&e<a.morning.to?t.morning:e>=a.afternoon.from&&e<a.afternoon.to?t.afternoon:e>=a.evening.from&&e<a.evening.to?t.evening:e>=a.night.from||e<a.night.to?t.night:"Hello"}()})})}J.defaultProps={greetingText:{morning:"Good morning.",afternoon:"Good afternoon.",evening:"Good evening.",night:"Good night."},greetingHourRange:{morning:{from:4,to:12},afternoon:{from:12,to:17},evening:{from:17,to:20},night:{from:20,to:4}}};var K=J;a(57);function V(e){return Object(P.jsx)("div",{className:"PlayButton ".concat(e.className),style:function(){var t={width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),fontSize:"".concat(.5*e.size,"px")};return e.isDefaultHidden?Object(d.a)(Object(d.a)({},t),{},{opacity:e.show?"1":"0"}):Object(d.a)({},t)}(),name:e.buttonName,onClick:function(t){t.preventDefault(),e.onClick(t)},children:Object(P.jsx)("i",{className:"bi bi-play-fill"})})}V.defaultProps={isDefaultHidden:!1,show:!0,size:40,onClick:function(e){console.log(e)}};var W=V;a(58);function Q(e){var t=e.cardCategory,a=Object(c.useState)(!1),n=Object(F.a)(a,2),r=n[0],i=n[1],s=Object(c.useState)(""),o=Object(F.a)(s,2),l=o[0],u=o[1];Object(c.useEffect)((function(){var e=t.list.filter((function(e){return!!e.cover&&e.cover.length>0}));e.length>0&&u(z.a.shuffle(e)[0].cover)}),[t]);var b=function(){i(!r)};return Object(P.jsxs)("div",{className:"CategoryCard rounded-2",onMouseEnter:b,onMouseLeave:b,onClick:function(t){t.preventDefault(),e.onCardClick(Object(d.a)({},e.cardCategory))},children:[Object(P.jsx)("div",{className:"card-cover rounded-start",style:{backgroundImage:"url('".concat(l,"')"),backgroundColor:e.coverBackgroundColor}}),Object(P.jsxs)("div",{className:"card-space",children:[Object(P.jsx)("div",{className:"card-name",children:e.cardCategory.title}),Object(P.jsx)(W,{isDefaultHidden:!0,show:r,onClick:function(t){t.preventDefault(),e.onCardPlayButtonClick(e.cardCategory.list)}})]})]})}Q.defaultProps={cardCategory:{title:"Default category",label:"",list:[]},coverBackgroundColor:"#dddddd",onCardClick:function(e){console.log(e)},onCardPlayButtonClick:function(e){console.log(e)}};var Z=Q,$=["#4a9bd0","#00afb9","#fdfcdc","#fed9b7","#f07167","#7db8a8","#c8e5d8","#faf9f9","#ffd6ba","#cf995f","#b3ffcc","#006450"];function ee(e){var t=e||$.length;if(e<=$.length)return z.a.shuffle($).slice(0,t);for(var a=[];t>$.length;)a=[].concat(Object(b.a)(a),Object(b.a)(z.a.shuffle($))),t-=$.length;return a=[].concat(Object(b.a)(a),Object(b.a)(z.a.shuffle($).slice(0,t)))}a(59);var te=Object(o.b)((function(e){return{aplayer:e.player.aplayer,categories:e.category.categories,categoryMusicList:e.category.categoryMusicList}}),{})((function(e){var t=e.categoryMusicList,a=Object(c.useState)([]),n=Object(F.a)(a,2),r=n[0],i=n[1],s=Object(c.useState)(ee(6)),o=Object(F.a)(s,1)[0],l=Object(c.useCallback)((function(e){var a=z.a.flatMap(t);return z.a.shuffle(a).slice(0,e)}),[t]);function u(t){e.aplayer.list.clear(),e.aplayer.list.add(Object(b.a)(t)),e.aplayer.play()}Object(c.useEffect)((function(){var e=l(6);i(e)}),[l]);var d=r.map((function(e,t){return Object(P.jsx)("div",{className:"col-md-6 col-xl-4 pb-3",children:Object(P.jsx)(Z,{cardCategory:e,coverBackgroundColor:o[t],onCardPlayButtonClick:u})},"".concat(t,"-").concat(e))}));return Object(P.jsxs)("div",{className:"Home container-fluid px-4",children:[Object(P.jsx)("div",{className:"row content-top-bar"}),Object(P.jsx)("div",{className:"row greeting pb-2",children:Object(P.jsx)(K,{})}),Object(P.jsx)("div",{className:"row category-row",children:window.innerWidth<992?d.slice(0,4):d})]})}));a(60);function ae(e){return Object(P.jsxs)("div",{className:"SearchInput input-group my-3",children:[Object(P.jsx)("span",{className:"input-group-text",children:Object(P.jsx)("i",{className:e.iconClass})}),Object(P.jsx)("input",{type:"text",className:"form-control",placeholder:e.placeholder,onChange:e.onSearchInputChange})]})}ae.defaultProps={onSearchInputChange:function(e){console.log(e.target.value)},iconClass:"bi bi-search",placeholder:"Artist, album or tags"};var ce=ae,ne=a(34);a(62);function re(e){var t=e.data,a=e.columns,c=Object(ne.useTable)({columns:a,data:t}),n=c.getTableProps,r=c.getTableBodyProps,i=c.headerGroups,s=c.rows,o=c.prepareRow;return Object(P.jsxs)("table",Object(d.a)(Object(d.a)({className:"table table-borderless"},n()),{},{children:[Object(P.jsx)("thead",{children:i.map((function(e){return Object(P.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(P.jsx)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(P.jsx)("tbody",Object(d.a)(Object(d.a)({},r()),{},{children:s.map((function(e,t){return o(e),Object(P.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(P.jsx)("td",Object(d.a)(Object(d.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}re.defaultProps={data:[],columns:[]};var ie=re;a(63);var se=Object(o.b)((function(e){return{music:e.music,player:e.player}}),{})((function(e){var t=e.music.list,a=e.player.aplayer,n=Object(c.useState)(""),r=Object(F.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)([]),l=Object(F.a)(o,2),u=l[0],d=l[1];Object(c.useEffect)((function(){d(Object(b.a)(t))}),[t]),Object(c.useEffect)((function(){if(0!==i.length){var e=t.filter((function(e){return z.a.includes(e.name.toLowerCase(),i.toLowerCase())||z.a.includes(e.artist.toLowerCase(),i.toLowerCase())||z.a.includes(e.album.toLowerCase(),i.toLowerCase())||z.a.includes(e.tags.join(" "),i)}));d(Object(b.a)(e))}else d(Object(b.a)(t))}),[i,t]);var j=Object(c.useCallback)((function(e){if(a){var t=z.a.findIndex(a.list.audios,(function(t){return e.original.name===t.name}));t<0?(a.list.clear(),a.list.add(e.original),a.play()):(a.list.switch(t),a.play())}}),[a]),O=Object(c.useCallback)((function(e){a&&(a.list.add(e.original),a.list.show())}),[a]),m=Object(c.useMemo)((function(){return[{Header:"#",accessor:"id",Cell:function(e){return Object(P.jsx)("div",{children:+e.row.id+1})}},{Header:"Name",accessor:"name"},{Header:"Artist",accessor:"artist"},{Header:"Album",accessor:"album"},{Header:"Tags",accessor:"tags",Cell:function(e){return Object(P.jsx)("div",{children:e.row.original.tags.join(", ")})}},{Header:"",accessor:"play",width:40,Cell:function(e){return Object(P.jsx)("button",{className:"btn btn-link",onClick:function(){j(e.row)},children:Object(P.jsx)("i",{className:"bi bi-play-fill"})})}},{Header:"",accessor:"action",Cell:function(e){return Object(P.jsx)("button",{className:"btn btn-link",onClick:function(){O(e.row)},children:Object(P.jsx)("i",{className:"bi bi-plus"})})}}]}),[j,O]);function f(e){e.preventDefault(),a.list.clear(),a.list.add(u),a.play()}return Object(P.jsxs)("div",{className:"Search container-fluid",children:[Object(P.jsx)("div",{className:"row content-top-bar",children:Object(P.jsx)(ce,{onSearchInputChange:function(e){e.preventDefault(),s(e.target.value)}})}),Object(P.jsxs)("div",{className:"row pt-2 pb-3 align-items-center",children:[Object(P.jsx)(W,{className:"play-all-button ms-3",isDefaultHidden:!1,show:!0,size:50,onClick:f}),Object(P.jsxs)("div",{className:"dropdown col",children:[Object(P.jsx)("button",{className:"btn btn-link dropdown-toggle",type:"button",id:"dropdownMenuButtonSearchTableAction","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(P.jsx)("i",{className:"bi bi-three-dots"})}),Object(P.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"dropdownMenuButtonSearchTableAction",children:[Object(P.jsx)("li",{children:Object(P.jsx)("button",{className:"dropdown-item",onClick:f,children:"Play all"})}),Object(P.jsx)("li",{children:Object(P.jsx)("button",{className:"dropdown-item",onClick:function(e){e.preventDefault(),a.list.add(u),a.list.show()},children:"Add all to queue"})})]})]})]}),Object(P.jsx)("div",{className:"result-table",children:Object(P.jsx)(ie,{columns:m,data:u})})]})}));a(64);var oe=Object(o.b)((function(e){return{music:e.music,player:e.player}}),{})((function(e){var t=e.music.list,a=e.player.aplayer,n=e.searchTextFromProps,r=Object(c.useState)(""),i=Object(F.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)([]),u=Object(F.a)(l,2),d=u[0],j=u[1];Object(c.useEffect)((function(){j(Object(b.a)(t))}),[t]),Object(c.useEffect)((function(){if(0!==s.length){var e=t.filter((function(e){return z.a.includes(e.name.toLowerCase(),s.toLowerCase())||z.a.includes(e.artist.toLowerCase(),s.toLowerCase())||z.a.includes(e.album.toLowerCase(),s.toLowerCase())||z.a.includes(e.tags.join(" "),s)}));j(Object(b.a)(e))}else j(Object(b.a)(t))}),[s,t]),Object(c.useEffect)((function(){n&&o(n)}),[n]);var O=Object(c.useCallback)((function(e){if(a){var t=z.a.findIndex(a.list.audios,(function(t){return e.original.name===t.name}));t<0?(a.list.clear(),a.list.add(e.original),a.play()):(a.list.switch(t),a.play())}}),[a]),m=Object(c.useCallback)((function(e){a&&(a.list.add(e.original),a.list.show())}),[a]),f=Object(c.useMemo)((function(){return[{Header:"#",accessor:"id",Cell:function(e){return Object(P.jsx)("div",{children:+e.row.id+1})}},{Header:"Name",accessor:"name"},{Header:"Artist",accessor:"artist"},{Header:"Album",accessor:"album"},{Header:"Tags",accessor:"tags",Cell:function(e){return Object(P.jsx)("div",{children:e.row.original.tags.join(", ")})}},{Header:"",accessor:"play",width:40,Cell:function(e){return Object(P.jsx)("button",{className:"btn btn-link",onClick:function(){O(e.row)},children:Object(P.jsx)("i",{className:"bi bi-play-fill"})})}},{Header:"",accessor:"action",Cell:function(e){return Object(P.jsx)("button",{className:"btn btn-link",onClick:function(){m(e.row)},children:Object(P.jsx)("i",{className:"bi bi-plus"})})}}]}),[O,m]);function v(e){e.preventDefault(),a.list.clear(),a.list.add(d),a.play()}return Object(P.jsxs)("div",{className:"LibrarySearch container-fluid",children:[Object(P.jsx)("div",{className:"search-title",children:e.searchTextFromProps}),Object(P.jsxs)("div",{className:"row pt-2 pb-3 align-items-center",children:[Object(P.jsx)(W,{className:"play-all-button ms-3",isDefaultHidden:!1,show:!0,size:50,onClick:v}),Object(P.jsxs)("div",{className:"dropdown col",children:[Object(P.jsx)("button",{className:"btn btn-link dropdown-toggle",type:"button",id:"dropdownMenuButtonSearchTableAction","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(P.jsx)("i",{className:"bi bi-three-dots"})}),Object(P.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"dropdownMenuButtonSearchTableAction",children:[Object(P.jsx)("li",{children:Object(P.jsx)("button",{className:"dropdown-item",onClick:v,children:"Play all"})}),Object(P.jsx)("li",{children:Object(P.jsx)("button",{className:"dropdown-item",onClick:function(e){e.preventDefault(),a.list.add(d),a.list.show()},children:"Add all to queue"})})]})]})]}),Object(P.jsx)("div",{className:"result-table",children:Object(P.jsx)(ie,{columns:f,data:d})})]})}));a(65);function le(e){var t=function(t){t.preventDefault(),e.onNavClick(t.target.name)},a=e.navs.map((function(a,c){return Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)("button",{className:"nav-link ".concat(a.value===e.currentNavigation?"active":""),name:a.value,onClick:t,value:a.value,children:a.title})},"".concat(c,"-").concat(a.title))}));return Object(P.jsx)("div",{className:"LibraryTopNav",children:Object(P.jsx)("ul",{className:"nav nav-pills",children:a})})}le.defaultProps={navs:[],currentNavigation:"all",onNavClick:function(e){console.log(e)}};var ue=le;a(66);function be(e){var t=e.cardCategory,a=Object(c.useState)(!1),n=Object(F.a)(a,2),r=n[0],i=n[1],s=Object(c.useState)(""),o=Object(F.a)(s,2),l=o[0],u=o[1];function b(){i(!r)}return Object(c.useEffect)((function(){var e=t.list.filter((function(e){return!!e.cover&&e.cover.length>0}));e.length>0&&u(z.a.shuffle(e)[0].cover)}),[t]),Object(P.jsxs)("div",{className:"LibraryCard rounded-3",onMouseEnter:b,onMouseLeave:b,onClick:function(t){t.preventDefault(),e.onCardClick(e.cardCategory)},children:[Object(P.jsx)("div",{className:"card-image rounded-1",style:{backgroundColor:e.coverBackgroundColor,backgroundImage:"url('".concat(l,"')")},children:Object(P.jsx)(W,{isDefaultHidden:!0,show:r,onClick:function(t){t.preventDefault(),t.stopPropagation(),e.onCardPlayButtonClick(e.cardCategory)}})}),Object(P.jsxs)("div",{className:"card-title",children:[Object(P.jsx)("div",{className:"card-title-main",children:e.cardCategory.title}),Object(P.jsx)("div",{className:"card-title-sub",children:z.a.capitalize(e.cardCategory.label)})]})]})}be.defaultProps={cardCategory:{title:"Default category",label:"tags",list:[]},coverBackgroundColor:"#FFF",onCardClick:function(e){console.log(e)},onCardPlayButtonClick:function(e){console.log(e)}};var de=be,je=(a(67),[{title:"Library",value:"all"},{title:"Artists",value:"artists"},{title:"Albums",value:"albums"},{title:"Tags",value:"tags"}]);var Oe=Object(o.b)((function(e){return{categoriesSummary:e.category.categories,categories:e.category.categoryMusicList,aplayer:e.player.aplayer}}),{})((function(e){var t=e.categories,a=e.categoriesSummary,n=Object(c.useState)("all"),r=Object(F.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)([]),l=Object(F.a)(o,2),u=l[0],j=l[1],O=Object(c.useState)(ee()),m=Object(F.a)(O,2),f=m[0],v=m[1],p=Object(c.useState)(!1),g=Object(F.a)(p,2),h=g[0],x=g[1],y=Object(c.useState)({}),C=Object(F.a)(y,2),N=C[0],w=C[1];function k(t){e.aplayer.list.clear(),e.aplayer.list.add(Object(b.a)(t.list)),e.aplayer.play()}function S(e){x(!0),w(e)}Object(c.useEffect)((function(){v(ee(z.a.flatMap(a).length))}),[a]),Object(c.useEffect)((function(){j("all"===i?z.a.flatMap(t):t[i])}),[i,t]);var T=u.map((function(e,t){return Object(P.jsx)("div",{className:"col-4 col-md-3 col-xl-15 col-xxl-2 mb-3",children:Object(P.jsx)(de,{cardCategory:e,coverBackgroundColor:f[t],onCardClick:S,onCardPlayButtonClick:k})},"".concat(t,"-").concat(e.title))}));return Object(P.jsxs)("div",{className:"Library container-fluid",children:[Object(P.jsx)("div",{className:"row content-top-bar pt-2",children:Object(P.jsx)(ue,{navs:je,currentNavigation:i,onNavClick:function(e){s(e),x(!1)}})}),h?Object(P.jsx)(oe,Object(d.a)(Object(d.a)({},e),{},{searchTextFromProps:N.title})):Object(P.jsx)("div",{className:"row categories",children:T})]})}));a(68);var me=Object(o.b)((function(e){return{}}),{})((function(e){return Object(P.jsx)("div",{className:"Playlist",children:"Coming soon."})}));var fe=Object(q.g)((function(){return Object(P.jsxs)(q.d,{children:[Object(P.jsx)(q.b,{exact:!0,path:E,component:te}),Object(P.jsx)(q.b,{exact:!0,path:L,component:se}),Object(P.jsx)(q.b,{exact:!0,path:A,component:Oe}),Object(P.jsx)(q.b,{exact:!0,path:H,component:me}),Object(P.jsx)(q.a,{from:"/",to:E})]})}));function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:m,category:e,payload:t}}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:g,category:e,payload:t}}var ge=a(25),he={audio:[],listMaxHeight:"80vh",fixed:!0,listFolded:!0};var xe=Object(o.b)((function(e){return{player:e.player}}),{initAplayer:function(e){return{type:j,payload:{aplayer:e}}},initMusicList:function(){return function(e){var t;e({type:O,payload:Object(b.a)(ge)}),e((t=ge,function(e){var a=t.reduce((function(e,t){var a=t.artist,c=t.album,n=t.tags;return a.length>0&&e[0].push(a),c.length>0&&e[1].push(c),n.forEach((function(t){t.length>0&&e[2].push(t)})),e}),[[],[],[]]),c=Object(F.a)(a,3),n=c[0],r=c[1],i=c[2];n=z.a.uniq(n),r=z.a.uniq(r),i=z.a.uniq(i),e(ve("artists",n)),e(ve("albums",r)),e(ve("tags",i));var s=n.map((function(e){return{title:e,label:"artist",list:t.filter((function(t){return t.artist===e}))}})),o=r.map((function(e){return{title:e,label:"album",list:t.filter((function(t){return t.album===e}))}})),l=i.map((function(e){return{title:e,label:"tags",list:t.filter((function(t){return t.tags.includes(e)}))}}));e(pe("artists",s)),e(pe("albums",o)),e(pe("tags",l))}))}}})((function(e){var t=e.initMusicList;Object(c.useEffect)((function(){t()}),[t]);var a=function(){var t=Object(D.a)(_.a.mark((function t(a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.initAplayer(a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(P.jsxs)("div",{className:"AppContent",children:[Object(P.jsx)(fe,{}),Object(P.jsx)(R.a,Object(d.a)(Object(d.a)({},he),{},{onInit:a}))]})})),ye=(a(69),Object(l.d)(S,Object(l.c)(Object(l.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())));var Ce=function(){return Object(P.jsx)(o.a,{store:ye,children:Object(P.jsx)(s.a,{basename:"/bdk-player-react.github.io",children:Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)("div",{className:"side-nav",children:Object(P.jsx)(M,{})}),Object(P.jsx)("div",{className:"app-content",children:Object(P.jsx)(xe,{})})]})})})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};a(70);i.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(Ce,{})}),document.getElementById("root")),Ne()}},[[71,1,2]]]);
//# sourceMappingURL=main.6d953772.chunk.js.map