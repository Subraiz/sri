(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/SRILogo.a21402d8.png"},,,,,,,,,,,,function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/edgar.a2580768.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),s=a.n(i),c=(a(32),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),d=(a(33),a(34),a(35),a(6)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).navDrawer=r.a.createRef(),a.navItems=r.a.createRef(),a.desktopNavbar=r.a.createRef(),a.hamburger=r.a.createRef(),a.state={openNavDrawer:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"openNavDrawer",value:function(){var e=this;this.state.openNavDrawer=!this.state.openNavDrawer,this.state.openNavDrawer?(this.navDrawer.current.classList.remove("hide"),setTimeout(function(){e.navDrawer.current.style.maxWidth="60vw",e.navItems.current.style.display="block",e.hamburger.current.classList.add("is-active")},100)):(this.navDrawer.current.style.maxWidth="0",this.hamburger.current.classList.remove("is-active"),setTimeout(function(){e.navDrawer.current.classList.add("hide")},700))}},{key:"render",value:function(){return"bar"===this.props.barStyle?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bar-container"},r.a.createElement("div",{className:"bar-navbar-container"},r.a.createElement("img",{src:a(15),alt:""}),r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",{className:"bar-navbar-item"},r.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("button",{id:"Home"===this.props.selected?"bar-selected":"",className:"bar-navbar-button"},"Home"))),r.a.createElement("li",{className:"bar-navbar-item"},r.a.createElement(d.b,{to:"/about",style:{textDecoration:"none"}},r.a.createElement("button",{className:"bar-navbar-button",id:"About"===this.props.selected?"bar-selected":""},"About"))),r.a.createElement("li",{className:"bar-navbar-item"},r.a.createElement(d.b,{to:"/listings",style:{textDecoration:"none"}},r.a.createElement("button",{className:"bar-navbar-button",id:"Listings"===this.props.selected?"bar-selected":""},"Listings"))),r.a.createElement("li",{className:"bar-navbar-item"},r.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{className:"bar-navbar-button",id:"Contact"===this.props.selected?"bar-selected":""},"Contact")))))),r.a.createElement("div",{className:"mobile-navbar-container"},r.a.createElement("div",{className:"mobile-navbar-header"},r.a.createElement("button",{className:"hamburger hamburger--collapse ",type:"button",id:"nav-button-icon",ref:this.hamburger,onClick:this.openNavDrawer.bind(this)},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("img",{src:a(15),alt:"",id:"mobile-logo"})),r.a.createElement("div",{className:"mobile-navbar-drawer hide",ref:this.navDrawer},r.a.createElement("ul",{className:"mobile-navbar",ref:this.navItems},r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Home"===this.props.selected?"selected":""},"Home"))),r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/about",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"About"===this.props.selected?"selected":""},"About"))),r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/listings",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Listings"===this.props.selected?"selected":""},"Listings"))),r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Contact"===this.props.selected?"selected":""},"Contact"))))))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-container",ref:this.desktopNavbar},r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Home"===this.props.selected?"selected":""},"Home"))),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(d.b,{to:"/about",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"About"===this.props.selected?"selected":""},"About")))),r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement("img",{src:a(15),id:"logo",alt:"",width:"150"}))),r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(d.b,{to:"/listings",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Listings"===this.props.selected?"selected":""},"Listings"))),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Contact"===this.props.selected?"selected":""},"Contact"))))),r.a.createElement("div",{className:"mobile-navbar-container"},r.a.createElement("div",{className:"mobile-navbar-header"},r.a.createElement("button",{className:"hamburger hamburger--collapse ",type:"button",id:"nav-button-icon",ref:this.hamburger,onClick:this.openNavDrawer.bind(this)},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("img",{src:a(15),alt:"",id:"mobile-logo"})),r.a.createElement("div",{className:"mobile-navbar-drawer hide",ref:this.navDrawer},r.a.createElement("ul",{className:"mobile-navbar",ref:this.navItems},r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Home"===this.props.selected?"selected":""},"Home"))),r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/about",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"About"===this.props.selected?"selected":""},"About"))),r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/listings",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Listings"===this.props.selected?"selected":""},"Listings"))),r.a.createElement("li",{className:"navbar-item-drawer"},r.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{className:"navbar-button",id:"Contact"===this.props.selected?"selected":""},"Contact")))))))}}]),t}(n.Component),p=(a(40),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).divider=r.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"short"===this.props.height&&(this.divider.current.style.height="10vh")}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbarDivider",ref:this.divider})}}]),t}(n.Component)),h=(a(41),a(8)),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wave-container"},r.a.createElement("div",{className:"wave"},r.a.createElement("div",{className:"mission-container"},r.a.createElement("p",null,"Our Mission"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"building"}),r.a.createElement(h.c,{className:"arrow"})))}}]),t}(n.Component),v=(a(42),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).type=function(e,t){var n=a.state,r=n.position,i=n.speed;r<t.length?(e.innerHTML+=t.charAt(r),a.setState({position:a.state.position+1}),setTimeout(function(){a.type(e,t)},i)):setTimeout(function(){a.erase(e,t)},1e3)},a.erase=function(e,t){var n=a.state,r=n.position,i=n.speed;r>=0?(e.innerHTML=t.substring(0,r),a.setState({position:a.state.position-1}),setTimeout(function(){a.erase(e,t)},i)):"Investing"===a.state.value?(setTimeout(function(){a.type(e,"Real Estate")},500),a.setState({value:"Real Estate"})):(setTimeout(function(){a.type(e,"Investing")},500),a.setState({value:"Investing"}))},a.input=r.a.createRef(),a.state={speed:150,position:0,value:"Real Estate"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.input.current,a=t.innerText;t.innerText="",setTimeout(function(){e.type(t,a)},100)}},{key:"render",value:function(){return r.a.createElement("div",{className:"slogan-container"},r.a.createElement("p",{className:"text input",ref:this.input},"Real Estate"),r.a.createElement("span",{className:"type-cursor"},"|"),r.a.createElement("p",null,"\xa0\xa0Made Simple"))}}]),t}(n.Component)),f=(a(43),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-address"},r.a.createElement("p",null,"2000 Commonwealth Ave. Brighton, MA 02135 | 862-273-2073 |"," ",r.a.createElement("span",null,r.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{className:"footer-button"},r.a.createElement("p",null,"Contact Us"))))),r.a.createElement("div",null)),r.a.createElement("div",{className:"footer-address-mobile"},r.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{className:"footer-button"},r.a.createElement("p",null,"Contact Us"))),r.a.createElement("p",null,"862-273-2073"),r.a.createElement("p",null,"2000 Commonwealth Ave. Brighton, MA, 02135"),r.a.createElement("div",null)),r.a.createElement("div",{className:"footer-content"},r.a.createElement("div",{className:"footer-social"},r.a.createElement("div",{className:"social-media"},r.a.createElement("button",{className:"footer-button social"},r.a.createElement(h.g,{className:"social-icon"})),r.a.createElement("button",{className:"footer-button social"},r.a.createElement(h.i,{className:"social-icon"})),r.a.createElement("button",{className:"footer-button social"},r.a.createElement(h.h,{className:"social-icon"}))))))}}]),t}(n.Component)),N=(a(44),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"listing-container"},r.a.createElement("div",{className:"top-container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:this.props.listing.image,alt:"",className:"house-image"})),r.a.createElement("div",{className:"primary-container"},r.a.createElement("div",{className:"photo-counter-container"}),r.a.createElement("div",{className:"address-container"},r.a.createElement("p",{className:"address"},this.props.listing.address)))),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("p",{className:"price"},this.props.listing.price),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-column"},r.a.createElement("div",{className:"bath-container info"},r.a.createElement(h.d,{className:"icon"}),r.a.createElement("p",null,"Bathrooms: ",this.props.listing.bath)),r.a.createElement("div",{className:"area-container info"},r.a.createElement(h.f,{className:"icon"}),r.a.createElement("p",null,"Area: ",this.props.listing.area))),r.a.createElement("div",{className:"second-column"},r.a.createElement("div",{className:"bed-container info"},r.a.createElement(h.e,{className:"icon"}),r.a.createElement("p",null,"Bedrooms: ",this.props.listing.bed)),r.a.createElement("div",{className:"year-container info"},r.a.createElement(h.j,{className:"icon"}),r.a.createElement("p",null,"Year: ",this.props.listing.year)))),r.a.createElement("div",{className:"view-more"},r.a.createElement("button",null,"View More"))))}}]),t}(n.Component)),g=(a(45),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"testimonial-container"},r.a.createElement("div",{className:"testimonial-message-container"},r.a.createElement("div",{className:"testimonial-message-header"},r.a.createElement("p",null,"Buy or Sell With Us"),r.a.createElement("div",{className:"testimonial-line"})),r.a.createElement("p",{className:"testimonial-message"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"house-vector-container"}))}}]),t}(n.Component)),y=(a(46),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).container=r.a.createRef(),a.card=r.a.createRef(),a.state={selectedIndex:0,scrollDistance:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderListings",value:function(){var e=this;return this.props.listings.map(function(t,a){return r.a.createElement("div",{className:"listing-item",id:"listing".concat(a),key:a,ref:e.card},r.a.createElement(N,{listing:t}))})}},{key:"scrollToNextItem",value:function(){var e=Math.floor(window.innerWidth/this.card.current.offsetWidth);if(this.state.selectedIndex<this.props.listings.length-e){var t=this.state.scrollDistance+this.card.current.offsetWidth;this.container.current.scroll({left:t,behavior:"smooth"}),this.setState({scrollDistance:t,selectedIndex:this.state.selectedIndex+1})}}},{key:"scrollToPreviousItem",value:function(){this.state.selectedIndex>0&&(this.container.current.scroll({left:this.state.scrollDistance-this.card.current.offsetWidth,behavior:"smooth"}),this.setState({scrollDistance:this.state.scrollDistance-this.card.current.offsetWidth,selectedIndex:this.state.selectedIndex-1}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"featured-listings-container",ref:this.container},this.renderListings()),r.a.createElement("div",{className:"actions-container"},r.a.createElement("button",{onClick:this.scrollToPreviousItem.bind(this),className:"featured-button"},r.a.createElement(h.a,{className:"action",id:"backward"})),r.a.createElement("button",{onClick:this.scrollToNextItem.bind(this),className:"featured-button"},r.a.createElement(h.b,{className:"action",id:"forward"}))))}}]),t}(n.Component)),j=(a(47),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"overview-container"},r.a.createElement("div",{className:"company-overview"},r.a.createElement("p",null,"Company Overview"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"history"},r.a.createElement("p",null,"History"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}}]),t}(n.Component)),O=(a(48),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={reasons:["Reason 1","Reason 2","Reason 3","Reason 4","Reason 5","Reason 6"]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderReasons",value:function(){return this.state.reasons.map(function(e,t){return r.a.createElement("li",{key:t},e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"reasons-container"},r.a.createElement("div",{className:"choose"},r.a.createElement("p",null,"Why Choose Us?"),r.a.createElement("ol",{className:"reasons-list"},this.renderReasons())),r.a.createElement("div",{className:"ceo"},r.a.createElement("img",{src:a(49),alt:"",className:"ceo-image"}),r.a.createElement("div",{className:"ceo-info"},r.a.createElement("p",null,"Edgar Sanchez"),r.a.createElement("p",null,"CEO & Founder of SRI"))),r.a.createElement("div",{className:"mobile-choose"},r.a.createElement("p",null,"Why Choose Us?"),r.a.createElement("ol",{className:"reasons-list"},this.renderReasons())))}}]),t}(n.Component)),w=[{address:"2000 Commonwealth Ave. Brighton, MA 02135",area:"1200 sq ft.",bath:"2",bed:"3",description:"A great house",image:"https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794670?k=6&m=856794670&s=612x612&w=0&h=gneLQSj2K6CzxU4r7DG_HUjd00ZMiZnYhYW_R0goPZ4=",price:"$600,000",year:"2011"},{address:"22 D Marion Pepe Drive Lodi, NJ 07644",area:"800 sq ft.",bath:"1",bed:"2",description:"A great house",image:"https://www.gannett-cdn.com/presto/2018/10/25/PMJS/bf024196-6522-411a-a52a-42715aea59ad-BayViewLurie1.PNG?crop=1131,636,x0,y0&width=3200&height=1680&fit=bounds",price:"$200,000",year:"2006"},{address:"2000 Commonwealth Ave. Brighton, MA 02135",area:"1200 sq ft.",bath:"2",bed:"3",description:"A great house",image:"https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794670?k=6&m=856794670&s=612x612&w=0&h=gneLQSj2K6CzxU4r7DG_HUjd00ZMiZnYhYW_R0goPZ4=",price:"$600,000",year:"2011"},{address:"22 D Marion Pepe Drive Lodi, NJ 07644",area:"800 sq ft.",bath:"1",bed:"2",description:"A great house",image:"https://www.gannett-cdn.com/presto/2018/10/25/PMJS/bf024196-6522-411a-a52a-42715aea59ad-BayViewLurie1.PNG?crop=1131,636,x0,y0&width=3200&height=1680&fit=bounds",price:"$200,000",year:"2006"}],x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(b,{selected:"Home",barStyle:"main"}),r.a.createElement("div",{className:"section1"},r.a.createElement(v,null),r.a.createElement(E,null)),r.a.createElement("div",{className:"section2"},r.a.createElement("div",{className:"featured-header"},r.a.createElement("div",{className:"line"}),r.a.createElement("p",null,"Featured Listings"),r.a.createElement("div",{className:"line"})),r.a.createElement(y,{listings:w})),r.a.createElement("div",{className:"section3"},r.a.createElement(g,null)),r.a.createElement(f,null))}}]),t}(n.Component),D=(a(50),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(b,{selected:"About",barStyle:"bar"}),r.a.createElement(p,{height:"short"}),r.a.createElement("div",{className:"section1-about"},r.a.createElement(j,null),r.a.createElement(O,null)),r.a.createElement(f,null))}}]),t}(n.Component)),k=(a(51),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={listings:w},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderListings",value:function(){return this.state.listings.map(function(e,t){return r.a.createElement("div",{className:"top-listings-listing",key:t},r.a.createElement(N,{listing:e}))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"listings"},r.a.createElement(b,{barStyle:"bar",selected:"Listings"}),r.a.createElement(p,{height:"short"}),r.a.createElement("div",{className:"listings-header-image"}),r.a.createElement("div",{className:"top-listings-header"},r.a.createElement("div",{className:"line"}),r.a.createElement("p",null,"View Some of Our Top Listings"),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"top-listings-container"},this.renderListings()),r.a.createElement(f,null))}}]),t}(n.Component)),C=(a(52),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{barStyle:"bar",selected:"Contact"}),r.a.createElement(p,{height:"short"}),r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-header"},r.a.createElement("p",null,"Contact Us"),r.a.createElement("p",null,"Feel free to drop us a line below!")),r.a.createElement("div",{className:"form-info name"},r.a.createElement("div",{className:"form-input"},r.a.createElement("p",null,"Full Name:"),r.a.createElement("input",{placeholder:"Enter a full name"})),r.a.createElement("div",{className:"form-input email"},r.a.createElement("p",null,"Email Address:"),r.a.createElement("input",{placeholder:"Enter an email address"})),r.a.createElement("div",{className:"form-input phone"},r.a.createElement("p",null,"Phone:"),r.a.createElement("input",{placeholder:"Enter a phone number"})),r.a.createElement("div",{className:"form-input message"},r.a.createElement("p",null,"Message:"),r.a.createElement("input",{placeholder:"Your message..."}))),r.a.createElement("div",{className:"contact-button"},r.a.createElement("button",null,"Get In Touch")))),r.a.createElement(f,null))}}]),t}(n.Component)),L=a(12),A=a(26),I=a.n(A),R=(a(56),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){I.a.initializeApp({apiKey:"AIzaSyAApyyCpNNZkoTmoFTyZ6n2Mqt9dcMHx4M",authDomain:"sanchezri.firebaseapp.com",databaseURL:"https://sanchezri.firebaseio.com",projectId:"sanchezri",storageBucket:"sanchezri.appspot.com",messagingSenderId:"382928925541",appId:"1:382928925541:web:b772d0b5b1e8f934"})}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(L.a,{exact:!0,path:"/",component:x}),r.a.createElement(L.a,{path:"/about",component:D}),r.a.createElement(L.a,{path:"/listings",component:k}),r.a.createElement(L.a,{path:"/contact",component:C})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.0b2d9d6e.chunk.js.map