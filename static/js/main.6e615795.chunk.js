(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/Skyscraper.a8d7da83.jpg"},function(e,t,n){e.exports=n.p+"static/media/Border.11d6d290.jpg"},,,,,,,function(e,t,n){e.exports=n.p+"static/media/Bank.f61bfafe.jpg"},function(e,t,n){e.exports=n.p+"static/media/ClubHouse.6c4420df.jpg"},,,,function(e,t,n){e.exports=n.p+"static/media/logo.1298c79f.png"},function(e,t,n){e.exports=n.p+"static/media/Chalet.d056d3bf.jpg"},function(e,t,n){e.exports=n.p+"static/media/Coastline.771d7dab.jpg"},function(e,t,n){e.exports=n.p+"static/media/Consulate.018b7625.jpg"},function(e,t,n){e.exports=n.p+"static/media/Hereford.3873fc80.jpg"},function(e,t,n){e.exports=n.p+"static/media/KafeDostoyevsky.369424ad.jpg"},function(e,t,n){e.exports=n.p+"static/media/Oregon.274c0207.jpg"},function(e,t,n){e.exports=n.p+"static/media/ThemePark.8d8624ed.jpg"},function(e,t,n){e.exports=n.p+"static/media/Villa.d3269e61.jpg"},,,,,function(e,t,n){e.exports=n(64)},,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(26),i=n.n(r),c=n(3),l=n(2),u=n(29),s={route:"mapList"},d={slideIndex:0,lightBoxStatus:"off"},f=(n(40),n(6)),m=n(7),h=n(9),p=n(8),v=n(10),g=(n(42),n(44),function(e){var t=e.routeChange;return o.a.createElement("div",{className:"navBarContainer",onClick:function(){return t("mapList")}},o.a.createElement("img",{src:n(17)}),o.a.createElement("p",null,"RAINBOW ANGLES"))}),k=(n(46),n(48),function(e){var t=e.onClick,n=e.title,a=e.picture;return o.a.createElement("div",{onClick:t,className:"map"},o.a.createElement("img",{src:a}),o.a.createElement("p",null,n))}),E=function(e){var t=e.routeChange;return o.a.createElement("div",{className:"mapListContainer"},o.a.createElement("h1",{className:"welcome"},"Welcome to Rainbow Angles!"),o.a.createElement("img",{className:"logo",src:n(17)}),o.a.createElement("h3",null,"A site featuring good angles on all competitive maps of Rainbowsix Siege!"),o.a.createElement("h1",null,"Current Ranked Maps"),o.a.createElement("div",{className:"mapList"},o.a.createElement(k,{onClick:function(){return t("bank")},title:"Bank",picture:n(12)}),o.a.createElement(k,{onClick:function(){return t("border")},title:"Border",picture:n(5)}),o.a.createElement(k,{onClick:function(){return t("chalet")},title:"Chalet",picture:n(18)}),o.a.createElement(k,{onClick:function(){return t("clubHouse")},title:"Club House",picture:n(13)}),o.a.createElement(k,{onClick:function(){return t("coastline")},title:"Coastline",picture:n(19)}),o.a.createElement(k,{onClick:function(){return t("consulate")},title:"Consulate",picture:n(20)}),o.a.createElement(k,{onClick:function(){return t("hereford")},title:"Hereford",picture:n(21)}),o.a.createElement(k,{onClick:function(){return t("kafeDostoyevsky")},title:"Kafe Dostoyevsky",picture:n(22)}),o.a.createElement(k,{onClick:function(){return t("oregon")},title:"Oregon",picture:n(23)}),o.a.createElement(k,{onClick:function(){return t("skyscraper")},title:"Skyscraper",picture:n(4)}),o.a.createElement(k,{onClick:function(){return t("themePark")},title:"Theme Park",picture:n(24)}),o.a.createElement(k,{onClick:function(){return t("villa")},title:"Villa",picture:n(25)})))},y=(n(50),n(52),function(e){var t=e.direction,n=e.onClick;return o.a.createElement("div",{className:"slide-arrow ".concat(t),onClick:n})}),b=(n(54),function(e){return o.a.createElement("div",{className:"scroll"},e.children)}),C=(n(56),function(e){var t=e.picture,n=e.status,a=e.onClick,r="lightBoxContainer";return"on"===n?r+=" lightBoxContainer-active":r="lightBoxContainer",o.a.createElement("div",{className:r,onClick:a},o.a.createElement("div",{className:"lightBoxPictureContainer"},o.a.createElement("img",{className:"lightBoxPicture",src:t})))}),x=(n(58),function(e){var t=e.pictures,n=e.index,a=e.onClick,r=t[n].map(function(e,r){return o.a.createElement("img",{key:r,src:t[n][r],onClick:function(){return a(t[n][r])}})});return o.a.createElement("div",{className:"imageContainer"},r)}),N=(n(60),function(e){var t=e.pictures,n=e.index,a=e.navigateToTargetSlide,r="dot",i=t.map(function(e,t){return n===t?r+=" dot-active":r="dot",o.a.createElement("div",{className:r,key:t,onClick:function(){return a(t)}})});return o.a.createElement("div",{className:"dotsContainer"},i)}),j=(n(62),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pictures,n=e.slideIndex,a=e.text,r=e.objectiveStart,i=e.lightBoxStatus,c=e.lightBoxPicture,l=e.slideChangeNext,u=e.slideChangePrev,s=e.navigateToObjective,d=e.navigateToTargetSlide,f=e.turnOnLightBox,m=e.turnOffLightBox,h="objectiveNavButton ",p="objectiveNavButton ",v="objectiveNavButton ",g="objectiveNavButton ";return h=n<r[0]?h+=" objectiveNavButton-active":h="objectiveNavButton ",p=n>=r[0]&&n<r[1]?p+=" objectiveNavButton-active ":p="objectiveNavButton ",v=n>=r[1]&&n<r[2]?v+=" objectiveNavButton-active ":v="objectiveNavButton ",g=n>=r[2]?g+=" objectiveNavButton-active ":g="objectiveNavButton ",o.a.createElement("div",null,o.a.createElement("h1",null,n<r[0]?"General Use":n>=r[0]&&n<r[1]?"Secure Area":n>=r[1]&&n<r[2]?"Bomb":n>=r[2]?"Hostage":"Something is wrong"),o.a.createElement("nav",{className:"objectiveNavMobile phone"},o.a.createElement("li",{className:"generalUseSkew fullBorder ".concat(h),onClick:function(){return s(0)}},o.a.createElement("a",null,"General Use")),o.a.createElement("li",{className:"zIndex1 fullBorder ".concat(p),onClick:function(){return s(r[0])}},o.a.createElement("a",null,"Secure Area")),o.a.createElement("li",{className:"zIndex1 noBorderLeft ".concat(v),onClick:function(){return s(r[1])}},o.a.createElement("a",null,"Bomb")),o.a.createElement("li",{className:"hostageSkew fullBorder ".concat(g),onClick:function(){return s(r[2])}},o.a.createElement("a",null,"Hostage"))),o.a.createElement("div",{className:"anglesContainer"},o.a.createElement("div",{className:"carouselContainer"},o.a.createElement("div",null,o.a.createElement(y,{direction:"left",onClick:function(){return u(n,t)}}),o.a.createElement(b,null,o.a.createElement(x,{pictures:t,index:n,onClick:function(e){return f(e)}}),o.a.createElement(C,{picture:c,status:i,onClick:function(){return m()}})),o.a.createElement(y,{direction:"right",onClick:function(){return l(n,t)}})),o.a.createElement(N,{pictures:t,index:n,navigateToTargetSlide:d})),o.a.createElement("div",{className:"textContainer"},o.a.createElement("nav",{className:"objectiveNav desktop"},o.a.createElement("li",{className:"skewedNavButton fullBorder ".concat(h),onClick:function(){return s(0)}},o.a.createElement("a",null,"General Use")),o.a.createElement("li",{className:"skewedNavButton noBorderLeft ".concat(p),onClick:function(){return s(r[0])}},o.a.createElement("a",null,"Secure Area")),o.a.createElement("li",{className:"skewedNavButton noBorderLeft ".concat(v),onClick:function(){return s(r[1])}},o.a.createElement("a",null,"Bomb")),o.a.createElement("li",{className:"unskewedNavButton fullBorder ".concat(g),onClick:function(){return s(r[2])}},o.a.createElement("a",null,"Hostage"))),o.a.createElement("div",{className:"desktop"},o.a.createElement(b,null,o.a.createElement("p",{className:"anglesText"},a[n]))),o.a.createElement("div",{className:"anglesText phone"},o.a.createElement("p",null,a[n])))))}}]),t}(a.Component)),B=Object(l.b)(function(e){return{slideIndex:e.controlCarousel.slideIndex,lightBoxStatus:e.controlCarousel.lightBoxStatus,lightBoxPicture:e.controlCarousel.lightBoxPicture}},function(e){return{slideChangeNext:function(t,n){e(function(e,t){return{type:"NEXT_SLIDE",slideIndex:e,slides:t}}(t,n))},slideChangePrev:function(t,n){e(function(e,t){return{type:"PREV_SLIDE",slideIndex:e,slides:t}}(t,n))},navigateToObjective:function(t){e(function(e){return{type:"TO_OBJECTIVE",objectiveStart:e}}(t))},navigateToTargetSlide:function(t){e(function(e){return{type:"TO_TARGET_SLIDE",targetSlide:e}}(t))},turnOnLightBox:function(t){e(function(e){return{type:"TURN_ON_LIGHT_BOX",status:"on",picture:e}}(t))},turnOffLightBox:function(){e({type:"TURN_OFF_LIGHT_BOX",status:"off"})}}})(j),S=function(e){var t=e.headerPicture,n=e.header,a=e.text,r=e.pictures,i=(e.video,e.objectiveStart);return o.a.createElement("div",null,o.a.createElement("div",{className:"headerContainer",style:{background:"url(".concat(t,") center no-repeat"),backgroundSize:"cover"}},o.a.createElement("h1",null,n)),o.a.createElement(B,{pictures:r,text:a,objectiveStart:i}))},O=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.route,a=e.onRouteChange;return o.a.createElement("div",{className:"App"},o.a.createElement(g,{routeChange:a}),o.a.createElement("div",{className:"contentContainer"},"mapList"===t?o.a.createElement(E,{routeChange:a}):"bank"===t?o.a.createElement(S,{header:"BANK",headerPicture:n(12),objectiveStart:[1,2,3],pictures:[[n(13)],[n(12),n(5)],[n(5)],[n(4),n(4),n(4)]],text:["What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.","oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ","oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof ","oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof oof yikes oof "]}):"border"===t?o.a.createElement(S,{header:n(5),headerPicture:"",objectiveStart:"",pictures:[],text:[""]}):"chalet"===t?o.a.createElement(S,{header:"CHALET",headerPicture:n(18),objectiveStart:"",pictures:[],text:[""]}):"clubHouse"===t?o.a.createElement(S,{header:"CLUB HOUSE",headerPicture:n(13),objectiveStart:"",pictures:[],text:[""]}):"coastline"===t?o.a.createElement(S,{header:"COASTLINE",headerPicture:n(19),objectiveStart:"",pictures:[],text:[""]}):"consulate"===t?o.a.createElement(S,{header:"CONSULATE",headerPicture:n(20),objectiveStart:"",pictures:[],text:[""]}):"hereford"===t?o.a.createElement(S,{header:"HEREFORD",headerPicture:n(21),objectiveStart:"",pictures:[],text:[""]}):"kafeDostoyevsky"===t?o.a.createElement(S,{header:"KAFE DOSTOYEVSKY",headerPicture:n(22),objectiveStart:"",pictures:[],text:[""]}):"oregon"===t?o.a.createElement(S,{header:"OREGON",headerPicture:n(23),objectiveStart:"",pictures:[],text:[""]}):"skyscraper"===t?o.a.createElement(S,{header:"SKYSCRAPER",headerPicture:n(4),objectiveStart:"",pictures:[],text:[""]}):"themePark"===t?o.a.createElement(S,{header:"THEME PARK",headerPicture:n(24),objectiveStart:"",pictures:[],text:[""]}):"villa"===t?o.a.createElement(S,{header:"VILLA",headerPicture:n(25),objectiveStart:"",pictures:[],text:[""]}):"Something isn't working with state."))}}]),t}(a.Component),w=Object(l.b)(function(e){return{route:e.setRoute.route}},function(e){return{onRouteChange:function(t){e({type:"CHANGE_ROUTE",payload:t})}}})(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(c.c)({setRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_ROUTE":return Object.assign({},e,{route:t.payload});default:return e}},controlCarousel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"NEXT_SLIDE":var n=t.slideIndex,a=n===t.slides.length-1?0:++n;return Object.assign({},e,{slideIndex:a});case"PREV_SLIDE":var o=t.slideIndex,r=0===o?t.slides.length-1:--o;return Object.assign({},e,{slideIndex:r});case"TO_OBJECTIVE":return Object.assign({},e,{slideIndex:t.objectiveStart});case"TO_TARGET_SLIDE":return Object.assign({},e,{slideIndex:t.targetSlide});case"TURN_ON_LIGHT_BOX":return console.log(t.picture),Object.assign({},e,{lightBoxStatus:t.status,lightBoxPicture:t.picture});case"TURN_OFF_LIGHT_BOX":return Object.assign({},e,{lightBoxStatus:t.status});default:return e}}}),T=Object(c.d)(I,Object(c.a)(u.a));i.a.render(o.a.createElement(l.a,{store:T},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[30,2,1]]]);
//# sourceMappingURL=main.6e615795.chunk.js.map