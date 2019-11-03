(function(e){function t(t){for(var l,n,s=t[0],o=t[1],c=t[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},i={app:0},r=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var b=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07a7":function(e,t,a){},"3bee":function(e,t,a){"use strict";var l=a("aedd"),i=a.n(l);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("2b0e"),i=a("5f5b"),r=a("ba48"),n=a.n(r),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark-1",attrs:{id:"app"}},[a("NavBar"),"open-source"===this.$store.getters.selectedSection?a("OpenSource"):e._e(),"blog"===this.$store.getters.selectedSection?a("Blog"):e._e(),"about"===this.$store.getters.selectedSection?a("About"):e._e(),"home"===this.$store.getters.selectedSection?a("Home"):e._e(),a("Footer")],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"bg-black",class:e.$isMobile()?"margin-top-150":"margin-bottom-150"},[a("b-navbar",{class:e.$isMobile()?"fixed-bottom":"fixed-top",attrs:{type:"dark",variant:"dark-1"}},[a("b-navbar-brand",[e._v("Bence László")]),a("b-nav-item",{on:{click:function(t){return e.selectSection("home")}}},[e.$isMobile()?a("div",[a("home-icon",{attrs:{size:"2x"}})],1):a("div",[a("home-icon",{attrs:{size:"3x"}}),a("span",{staticClass:"ml-12"},[e._v("Home")])],1)]),a("b-nav-item",{on:{click:function(t){return e.selectSection("open-source")}}},[e.$isMobile()?a("div",[a("code-icon",{attrs:{size:"2x"}})],1):a("div",[a("code-icon",{attrs:{size:"3x"}}),a("span",{staticClass:"ml-2"},[e._v("Open Source Contributions")])],1)]),a("b-nav-item",{on:{click:function(t){return e.selectSection("about")}}},[e.$isMobile()?a("div",[a("info-icon",{attrs:{size:"2x"}})],1):a("div",[a("info-icon",{attrs:{size:"3x"}}),a("span",{staticClass:"ml-2"},[e._v("About")])],1)])],1)],1)},b=[],u=a("0a35"),d={name:"NavBar",components:{CodeIcon:u["a"],HomeIcon:u["d"],InfoIcon:u["e"]},computed:{},methods:{selectSection:function(e){this.$store.commit("selectSection",e)}},props:{}},g=d,p=(a("ed6b"),a("2877")),v=Object(p["a"])(g,c,b,!1,null,null,null),f=v.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark text-light"},[a("h2",[e._v("Open Source Contributions")]),a("b-card-group",{attrs:{"bg-dark":""}},e._l(e.projects,(function(t){return a("OpenSourceProject",e._b({key:t.name},"OpenSourceProject",t,!1))})),1)],1)},h=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticClass:"bg-secondary",attrs:{title:e.name,"sub-title":e.shortDescription}},[a("b-card-header",{staticClass:"bg-yellow"},[a("b-card-img",{attrs:{"img-src":e.imgSrc,"img-alt":e.imgAlt,"img-top":""}})],1),a("b-card-body",{staticClass:"bg-orange"},[a("b-card-text",[e._v(e._s(e.description))])],1),a("b-card-footer",{staticClass:"bg-red"},[a("div",[e._v(e._s(e.languages.join(", ")))]),a("div",[e._v(e._s(e.license))]),e.gitlabRepositoryLink?a("b-link",{staticClass:"card-link",attrs:{href:e.gitlabRepositoryLink}},[e._v("GitLab Repository")]):e._e(),e.githubRepositoryLink?a("b-link",{staticClass:"card-link",attrs:{href:e.githubRepositoryLink}},[e._v("GitHub Repository")]):e._e(),e.website?a("b-link",{staticClass:"card-link",attrs:{href:e.website}},[e._v("Project Website")]):e._e()],1)],1)},_=[],S={name:"OpenSourceProject",props:{name:{type:String,default:"Project Name"},imgSrc:{type:String,default:""},imgAlt:{type:String,default:""},shortDescription:{type:String,default:""},description:{type:String,default:""},languages:{type:Array,default:function(){return[]}},license:{type:String,default:""},githubRepositoryLink:{type:String,default:""},gitlabRepositoryLink:{type:String,default:""},website:{type:String,default:""}}},C=S,k=Object(p["a"])(C,y,_,!1,null,"ee35115e",null),P=k.exports,w={name:"OpenSource",components:{OpenSourceProject:P},props:{},data:function(){return{projects:[{name:"KEECO",imgSrc:"",imgAlt:"",shortDescription:"Home Automation System.",description:"Home Automation System.",languages:["JavaScript","C++"],license:"GPL-3.0",githubRepositoryLink:"",gitlabRepositoryLink:"",website:""},{name:"randoom",imgSrc:"",imgAlt:"",shortDescription:"CLI Random Data Generator.",description:"An easy-to-use CLI tool for generating random numbers, colors, characters and strings.",languages:["Rust"],license:"GPL-3.0",githubRepositoryLink:"https://github.com/bencelaszlo/randoom",gitlabRepositoryLink:"https://gitlab.com/bencelaszlo/randoom",website:""},{name:"Freenetic World",imgSrc:"",imgAlt:"",shortDescription:"2D Tower-Defense Videogame",description:"",languages:["Rust"],license:"GPL-V3.0",githubRepositoryLink:"https://github.com/bencelaszlo/freeneticworld",gitlabRepositoryLink:"",website:""},{name:"Cubique",imgSrc:"",imgAlt:"",shortDescription:"3D Videogame",description:"Cubique - 3D Videogame with OpenGL.",languages:["C"],license:"",githubRepositoryLink:"https://github.com/bencelaszlo/cubique",gitlabRepositoryLink:"",website:""}]}}},x=w,L=(a("3bee"),Object(p["a"])(x,m,h,!1,null,"5545cc8a",null)),O=L.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},M=[],j={name:"Blog",props:{}},B=j,D=Object(p["a"])(B,z,M,!1,null,"f955fa7a",null),A=D.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-card",{staticClass:"bg-yellow"},[a("b-card-header",{staticClass:"bg-orange"},[a("h1",[e._v("Bence László")])]),a("b-card-body",{staticClass:"bg-dark text-light"},[a("p",[e._v("Software Developer")])]),a("b-card-footer",{staticClass:"bg-dark"})],1),a("b-card",{staticClass:"bg-yellow"},[a("b-card-header",{staticClass:"bg-orange"},[a("h2",[e._v("Experience")])]),a("b-card-body",{staticClass:"bg-dark"},[a("b-list-group",[a("b-list-group-item",{staticClass:"bg-yellow"},[a("h3",[e._v("DACHS Computing & Biosciences")]),a("b-list-group",[a("b-list-group-item",{staticClass:"bg-orange"},[a("h4",[e._v(" Application Developer "),a("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v("2019 Jul -")])],1),e._l(e.applicationDeveloperPills,(function(t){return a("BadgePill",e._b({key:t.label},"BadgePill",t,!1))}))],2),a("b-list-group-item",{staticClass:"bg-yellow"},[a("h4",[e._v(" Application Developer Intern "),a("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v("2018 Sep - 2019 Jun")])],1),e._l(e.internPills,(function(t){return a("BadgePill",e._b({key:t.label},"BadgePill",t,!1))}))],2),a("b-list-group-item",{staticClass:"bg-orange"},[a("h4",[e._v(" Summer Intern "),a("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v("2018 Jul - 2018 Aug")])],1),e._l(e.summerInternPills,(function(t){return a("BadgePill",e._b({key:t.label},"BadgePill",t,!1))}))],2)],1)],1)],1)],1)],1),a("b-card",{staticClass:"bg-yellow container-fluid"},[a("b-card-header",{staticClass:"bg-orange"},[a("h2",[e._v("Education")])]),a("b-card-body",{staticClass:"bg-dark"},[a("b-list-group",[a("b-list-group-item",{staticClass:"bg-yellow"},[a("h3",[e._v(" University of Miskolc - Faculty of Mechanical Engineering and Informatics "),a("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v("2016-2019")])],1),a("p",[e._v("Bachelor's of Science - Computer Science")]),e._l(e.bscTechnologyPills,(function(t){return a("BadgePill",e._b({key:t.label},"BadgePill",t,!1))}))],2),a("b-list-group-item",{staticClass:"bg-yellow"},[a("h3",[e._v(" Attila József Secondary School (Ózd) "),a("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v("2012-2016")])],1),a("p",[e._v("Informatics - Matura")]),e._l(e.highSchoolTechnologyPills,(function(t){return a("BadgePill",e._b({key:t.label},"BadgePill",t,!1))}))],2)],1)],1),a("b-card-footer",{staticClass:"bg-dark"})],1),a("b-card",{staticClass:"bg-yellow"},[a("b-card-header",{staticClass:"bg-orange"},[a("h2",[e._v("Contact")])]),a("b-card-body",{staticClass:"bg-dark"}),a("b-card-footer",{staticClass:"bg-dark"},[a("b-list-group",{attrs:{horizontal:""}},[a("a",{staticClass:".flex-fill ml-auto",attrs:{href:"https://github.com/bencelaszlo",target:"_blank",alt:"GitHub profile",lang:"en"}},[a("b-list-group-item",{staticClass:"bg-dark-2 text-light"},[e.$isMobile()?a("div",[a("github-icon",{attrs:{size:"1x"}})],1):a("div",[a("github-icon",{attrs:{size:"2x"}}),a("span",{staticClass:"ml-2"},[e._v("GitHub")])],1)])],1),a("a",{staticClass:".flex-fill",attrs:{href:"https://gitlab.com/bencelaszlo",target:"_blank",alt:"GitLab profile",lang:"en"}},[a("b-list-group-item",{staticClass:"bg-orange"},[e.$isMobile()?a("div",[a("gitlab-icon",{attrs:{size:"1x"}})],1):a("div",[a("gitlab-icon",{attrs:{size:"2x"}}),a("span",{staticClass:"ml-2"},[e._v("GitLab")])],1)])],1),a("a",{staticClass:".flex-fill",attrs:{href:"https://www.linkedin.com/in/bence-laszlo/",target:"_blank",alt:"LinkedIn profile",lang:"en"}},[a("b-list-group-item",{staticClass:"bg-cyan"},[e.$isMobile()?a("div",[a("linkedin-icon",{attrs:{size:"1x"}})],1):a("div",[a("linkedin-icon",{attrs:{size:"2x"}}),a("span",{staticClass:"ml-2"},[e._v("LinkedIn")])],1)])],1),a("b-list-group-item",{staticClass:".flex-fill mr-auto bg-green"},[e.$isMobile()?a("div",[a("mail-icon",{attrs:{size:"1x"}})],1):a("div",[a("mail-icon",{attrs:{size:"2x"}}),a("span",{staticClass:"ml-2"},[e._v("Email")])],1)])],1)],1)],1)],1)},$=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-badge",{attrs:{pill:"",variant:e.variant}},[e._v(e._s(e.label))])},G=[],J={name:"BadgePill",props:{variant:{type:String,default:"",required:!0},label:{type:String,default:""}}},T=J,E=Object(p["a"])(T,I,G,!1,null,"1888643e",null),H=E.exports,N={name:"About",components:{GithubIcon:u["b"],GitlabIcon:u["c"],MailIcon:u["g"],LinkedinIcon:u["f"],BadgePill:H},data:function(){return{applicationDeveloperPills:[{label:"JavaScript",variant:"yellow"},{label:"Vue.JS",variant:"teal"},{label:"Git",variant:"red"},{label:"Node.JS",variant:"green"},{label:"npm",variant:"red"},{label:"Jest",variant:"purple"},{label:"Amazon S3",variant:"orange"},{label:"Amazon Lambda",variant:"red"},{label:"C#",variant:"indigo"},{label:"ASP.NET Core",variant:"blue"},{label:"WPF",variant:"blue"},{label:"Unity 3D",variant:"bg-dark-2"}],internPills:[{label:"Java",variant:"orange"},{label:"Git",variant:"red"},{label:"C#",variant:"indigo"},{label:"Unity 3D",variant:"bg-dark-2"},{label:"MQTT",variant:"purple"},{label:"Swing",variant:"red"},{label:"PostgreSQL",variant:"blue"},{label:"PL/pgSQl",variant:"blue"},{label:"SQL",variant:"teal"}],summerInternPills:[{label:"Java",variant:"orange"},{label:"Git",variant:"grey"},{label:"Swing",variant:"red"}],bscTechnologyPills:[{label:"ANSI C",variant:"red"},{label:"shell script",variant:"blue"},{label:"bash",variant:"dark"},{label:"HTML",variant:"green"},{label:"CSS",variant:"green"},{label:"Java",variant:"yellow"},{label:"IPC",variant:"yellow"},{label:"TeX",variant:"cyan"},{label:"LaTeX",variant:"blue"},{label:"SQL",variant:"green"},{label:"MatLab",variant:"red"},{label:"database",variant:"ble"},{label:"operating system",variant:"green"},{label:"numerical methods",variant:"blue"},{label:"OpenGL",variant:"purple"},{label:"GLUT",variant:"grey"},{label:"FreeGLUT",variant:"grey"},{label:"parallel processing",variant:"orange"},{label:"OpenMPI",variant:"green"},{label:"R",variant:"blue"},{label:"JavaScript",variant:"yellow"},{label:"Node.JS",variant:"green"},{label:"cmake",variant:"yellow"},{label:"Makefile",variant:"grey"},{label:"jQuery",variant:"purple"},{label:"npm",variant:"red"},{label:"gcc",variant:"grey"},{label:"express",variant:"red"},{label:"OpenMP",variant:"green"},{label:"Rust",variant:"brown"},{label:"rustc",variant:"red"},{label:"Rust Cargo",variant:"orange"},{label:"ReactJS",variant:"cyan"},{label:"flux",variant:"blue"},{label:"mongoDB",variant:"red"},{label:"mongoose",variant:"orange"},{label:"Linux",variant:"teal"},{label:"Git",variant:"grey"},{label:"Sass",variant:"pink"},{label:"node-sass",variant:"purple"},{label:"Pthreads",variant:"red"},{label:"Push.JS",variant:"orange"},{label:"XML",variant:"green"},{label:"XSD",variant:"teal"},{label:"DTD",variant:"Cyan"},{label:"JSON",variant:"blue"},{label:"XPath",variant:"teal"}],highSchoolTechnologyPills:[{label:"HTML",variant:"green"},{label:"CSS",variant:"yellow"},{label:"SQL",variant:"blue"},{label:"Pascal",variant:"teal"}]}},props:{}},Q=N,F=Object(p["a"])(Q,R,$,!1,null,null,null),U=F.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-yellow"},[a("div",{staticClass:"h-100 w-75 ml-auto mr-auto"},[a("b-jumbotron",{attrs:{"bg-variant":"dark-1","text-variant":"yellow"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(e._s(e.startModal.title))]},proxy:!0},{key:"lead",fn:function(){return[e._v(e._s(e.startModal.lead))]},proxy:!0}])},[a("hr",{staticClass:"my-4"}),a("p",[e._v(e._s(e.startModal.description))])])],1)])},X=[],q={name:"Home",props:{},data:function(){return{startModal:{title:"Bence László",lead:"Software Developer",description:""}}},methods:{}},W=q,K=(a("6ad4"),Object(p["a"])(W,V,X,!1,null,"77979d9c",null)),Y=K.exports,Z=void 0,ee={name:"app",components:{NavBar:f,OpenSource:O,Blog:A,About:U,Home:Y},computed:{page:function(){return"open-source"}},methods:{switchPage:function(e){Z.currentPage=e}},data:function(){return{currentPage:"open-source"}}},te=ee,ae=(a("c796"),Object(p["a"])(te,s,o,!1,null,null,null)),le=ae.exports,ie=(a("f9e3"),a("2dd8"),a("2f62"));l["default"].use(ie["a"]);var re=new ie["a"].Store({state:{selectedSection:"home"},mutations:{selectSection:function(e,t){e.selectedSection=t}},getters:{selectedSection:function(e){return e.selectedSection}}});l["default"].use(i["a"]),l["default"].use(n.a),l["default"].config.productionTip=!1,new l["default"]({store:re,render:function(e){return e(le)}}).$mount("#app")},"6ad4":function(e,t,a){"use strict";var l=a("f91a"),i=a.n(l);i.a},aedd:function(e,t,a){},c796:function(e,t,a){"use strict";var l=a("07a7"),i=a.n(l);i.a},d5a8:function(e,t,a){},ed6b:function(e,t,a){"use strict";var l=a("d5a8"),i=a.n(l);i.a},f91a:function(e,t,a){}});
//# sourceMappingURL=app.f1c4ab21.js.map