(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},5034:e=>{"use strict";e.exports=require("url")},7558:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(169),s(8327),s(5866);var r=s(3191),n=s(8716),a=s(7922),i=s.n(a),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,169)),"/Users/mishkat1/cse416/cse416/client/app/page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8327)),"/Users/mishkat1/cse416/cse416/client/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/mishkat1/cse416/cse416/client/app/page.jsx"],u="/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9998:(e,t,s)=>{Promise.resolve().then(s.bind(s,4013))},5566:(e,t,s)=>{Promise.resolve().then(s.bind(s,918))},2485:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},4013:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(326),n=s(7577),a=s(810),i=s.n(a);s(6793);let o=()=>{let e=(0,n.useRef)(),t=(0,n.useRef)(),s=[-98.403102,39.567843],a=[[-146.991116,17.613213],[-51.454007,54.451247]],o="Black",l="Green";(0,n.useEffect)(()=>{t.current||(i().accessToken="pk.eyJ1IjoibnozMSIsImEiOiJjbTFlOWI3OXYxajJ3MnZvbmxndXQ2M2Z6In0.56ahjZJxD52t9UyCTlnm4Q",t.current=new(i()).Map({container:e.current,style:"mapbox://styles/nz31/cm1mpjkcf004101p36vrw409x/draft",center:s,zoom:4,minZoom:4,maxBounds:a}),t.current.on("load",()=>{c("nevada","/geoJSON/nevada-outline.geojson",o),d("nevada-district","/geoJSON/2021Congressional_Final_SB1_Amd2.geojson",l),c("louisiana","/geoJSON/louisiana.geojson",o),d("louisiana-congress","/geoJSON/louisiana-congress.geojson",l),d("louisiana-precincts","/geoJSON/louisiana-precinct.geojson","Purple"),u("louisiana-congress-line"),u("louisiana-precincts-line"),u("nevada-district-line")}))},[t]);let c=(e,s,r)=>{t.current.getSource(e)||(t.current.addSource(e,{type:"geojson",data:s}),t.current.addLayer({id:e+"fill",type:"fill",source:e,layout:{},paint:{"fill-color":r,"fill-opacity":.4}}),t.current.addLayer({id:e+"line",type:"line",source:e,layout:{},paint:{"line-color":r,"line-width":1}}))},d=(e,s,r)=>{t.current.getSource(e)||(t.current.addSource(e,{type:"geojson",data:s}),t.current.addLayer({id:e+"-line",type:"line",source:e,layout:{},paint:{"line-color":r,"line-width":1}}))},u=e=>{t.current.setLayoutProperty(e,"visibility","none")};return r.jsx("div",{ref:e,className:"map-container"})},l=()=>r.jsx("div",{children:r.jsx(o,{})})},918:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(326),n=s(434),a=s(5047);s(1318);let i=()=>{let e=(0,a.useRouter)();return(0,r.jsxs)("nav",{children:[(0,r.jsxs)("div",{className:"nav-tab-container",children:[r.jsx(n.default,{href:"/",children:r.jsx("div",{className:"nav-tab",children:"Home"})}),r.jsx(n.default,{href:"/about",children:r.jsx("div",{className:"nav-tab",children:"About"})})]}),(0,r.jsxs)("div",{className:"select",children:[r.jsx("span",{children:"State "}),(0,r.jsxs)("select",{name:"state",id:"state",onChange:t=>{e.push(`/${t.target.value}`)},children:[r.jsx("option",{value:"",children:"Select..."}),r.jsx("option",{value:"NV",children:"Nevada"}),r.jsx("option",{value:"LA",children:"Louisiana"})]})]})]})}},8327:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(9510);s(7633);let n=(0,s(8570).createProxy)(String.raw`/Users/mishkat1/cse416/cse416/client/components/Nav.jsx#default`),a=({children:e})=>r.jsx("html",{children:(0,r.jsxs)("body",{children:[r.jsx(n,{}),r.jsx("main",{children:e})]})})},169:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`/Users/mishkat1/cse416/cse416/client/app/page.jsx#default`)},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},1318:()=>{},7633:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,982,621,742],()=>s(7558));module.exports=r})();