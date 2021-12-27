var U=Object.defineProperty,W=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var w=(n,e,o)=>e in n?U(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,d=(n,e)=>{for(var o in e||(e={}))K.call(e,o)&&w(n,o,e[o]);if(A)for(var o of A(e))J.call(e,o)&&w(n,o,e[o]);return n},j=(n,e)=>W(n,G(e));var P=(n,e,o)=>(w(n,typeof e!="symbol"?e+"":e,o),o);import{R as t,S as Q,a as X,b as F,m as I,l as Y,r as i,u as Z,c as ee,d as te,e as T,L as q,D as ne,f as re,C as oe,M as b,H as ae,g as se,h as ce,i as le,j as ie,k as ue,n as de,A as me,B as pe,o as fe,p as Ee,q as he}from"./vendor.25eb60fb.js";const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};ge();const _e="modulepreload",V={},be="/",p=function(e,o){return!o||o.length===0?e():Promise.all(o.map(r=>{if(r=`${be}${r}`,r in V)return;V[r]=!0;const a=r.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":_e,a||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),a)return new Promise((m,u)=>{l.addEventListener("load",m),l.addEventListener("error",u)})})).then(()=>e())};function f(n){var e;return e=class extends t.Component{constructor(){super(...arguments);P(this,"state",{Component:e.Component})}componentDidMount(){this.state.Component||n().then(({default:r})=>{e.Component=r,this.setState({Component:r})})}render(){const{Component:r}=this.state;return r?t.createElement(r,d({},this.props)):t.createElement("div",{style:{padding:20}},"\u9875\u9762\u52A0\u8F7D\u4E2D...")}},P(e,"Component",null),e}function $(n,e={},o={}){return n?t.createElement(Q,d({},o),n.map((r,a)=>t.createElement(X,{key:r.key||a,path:r.path,exact:r.exact,strict:r.strict,render:s=>r.render?r.render(j(d(d({},s),e),{route:r})):t.createElement(r.component,j(d(d({},s),e),{route:r}))}))):null}const N=F.create({timeout:15e3});N.interceptors.response.use(n=>{if(n&&n.data&&n.data.success===!0)return n.data.data;const{config:e,data:o}=n,r=o&&o.msg?o.msg:"\u7CFB\u7EDF\u7E41\u5FD9~";return e&&(e.errorMsg===void 0||e.errorMsg===!0)&&(I.destroy(),I.error(r)),Promise.reject(n.data)},n=>Promise.reject(n));const xe=window.location.origin,D=Y(xe);D.on("connect",()=>{window.console.log("socket.connected")});D.on("error",n=>{window.console.log("socket.error",n)});const B=i.exports.createContext({socket:D}),Se=()=>i.exports.useContext(B),v=(n,e)=>{const{params:o,methods:r="post",lazy:a=!1,errorMsg:s=!0,onSuccess:l,onError:m}=e||{},[u,C]=i.exports.useState(a),[E]=i.exports.useState(F.CancelToken.source()),[x,O]=i.exports.useState(null),[L,k]=i.exports.useState(null),[S,y]=i.exports.useState(!1),c=i.exports.useCallback((g,_)=>(y(!0),new Promise((M,z)=>{const H=r==="post"?d(d({},o),g):{params:d(d({},o),g)};N[r](n,H,{errorMsg:s,cancelToken:E.token}).then(h=>{y(!1),k(h),typeof l=="function"&&l(h),_&&typeof _.onSuccess=="function"&&_.onSuccess(h),M(h)}).catch(h=>{y(!1),O(h),typeof m=="function"&&m(h),_&&typeof _.onError=="function"&&_.onError(h),z(h)})})),[o]);return i.exports.useEffect(()=>{u===!1&&c(),C(!0)},[c,u,o]),{error:x,data:L,source:E,setData:k,loading:S,request:c}},we=()=>{const n=Z(),e=ee();return Object.assign(n,e),n.query=te.parse(n.search.substr(1)),n},je=()=>({downloadFile:i.exports.useCallback((e,o)=>{const{customFileName:r,params:a}=o||{},s=new URLSearchParams,l=d({},a);Object.keys(l).forEach(u=>{s.append(u,l[u])});const m=`${e}?${s.toString()}`;if(r){const u=document.createElement("a");u.href=m,u.download=r,u.click()}else window.location.href=m},[])});const R="/project/select";var ye=n=>{const e=T(),[o,r]=i.exports.useState(""),[a,s]=i.exports.useState(!1),{request:l,data:m=[]}=v("/api/project/list"),{request:u}=v("/api/project/dashboard",{lazy:!0}),{request:C}=v("/api/openInEditor",{lazy:!0}),{data:E,error:x,request:O}=v("/api/dashboard/init",{errorMsg:!1,lazy:!0});i.exports.useEffect(()=>{s(!0),O().then(()=>{s(!1)}).catch(()=>{s(!1)})},[]),i.exports.useEffect(()=>{x&&e.replace(R)},[x]),i.exports.useEffect(()=>{const{location:c}=e;let g=c.pathname;g.startsWith("/tasks")&&(g="/tasks"),r(g)},[e,e.location]);const L=()=>{e.push(R)},k=c=>{u({id:c.id}).then(()=>{window.location.reload()})},S=async()=>{if(!!E){s(!0);try{await C({input:{file:E.path}}),s(!1)}catch{s(!1)}}},y=()=>t.createElement(b,null,t.createElement(b.Item,{key:"3",onClick:L},t.createElement(ae,null)," Oumi \u7BA1\u7406\u5668"),t.createElement(b.Item,{key:"1",onClick:S},t.createElement(se,null)," \u5728\u7F16\u8F91\u5668\u4E2D\u6253\u5F00"),t.createElement(b.Divider,null),t.createElement(b.ItemGroup,{title:"\u6536\u85CF\u7684\u9879\u76EE"},m&&m.filter(c=>!!c.collection&&E&&c.id!==E.id).map(c=>t.createElement(b.Item,{key:c.id,onClick:()=>k(c)}," ",t.createElement(ce,null)," ",c.name," "))));return E?x?t.createElement("div",{style:{padding:50}},t.createElement(q,{to:R},"\u9009\u62E9\u9879\u76EE")):t.createElement("div",{className:"ui-slider"},t.createElement("header",null,t.createElement(ne,{arrow:!0,placement:"bottomCenter",overlay:y,trigger:["click"]},t.createElement("div",{className:"search"},E.name,a?t.createElement(re,{size:"small"}):t.createElement(oe,null)))),t.createElement("div",{className:"slider-list"},De.map(c=>t.createElement("div",{className:`slider-list-item ${o===c.path?"active":""}`,key:c.path},t.createElement(q,{to:c.path},c.icon,c.name)))),t.createElement("div",{className:"contact-me"})):null};const ke=({route:n})=>{const e=T(),[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{const{location:a}=e;r(a.pathname!=="/project/select")},[e,e.location]),t.createElement(t.Fragment,null,o&&t.createElement(ye,null),t.createElement("div",{className:"root-container"},$(n.routes)))},De=[{name:"\u4EFB\u52A1",path:"/tasks",icon:t.createElement(ie,null)},{name:"\u4F9D\u8D56",path:"/deps",icon:t.createElement(ue,null)},{name:"\u8D44\u4EA7",path:"/blocks",icon:t.createElement(de,null)},{name:"Swagger",path:"/swagger",icon:t.createElement(me,null)},{name:"\u63A5\u53E3\u8C03\u8BD5",path:"/debugger",icon:t.createElement(pe,null)},{name:"\u914D\u7F6E",path:"/config",icon:t.createElement(fe,null)}],ve=[{component:ke,routes:[{path:"/",label:"\u9996\u9875",exact:!0,component:()=>t.createElement(le,{to:"/tasks"})},{path:"/project/select",label:"\u9009\u62E9\u9879\u76EE",exact:!0,component:f(()=>p(()=>import("./index.e2b9325e.js"),["assets/index.e2b9325e.js","assets/index.0ab7a36a.css","assets/vendor.25eb60fb.js"]))},{path:"/dashboard",label:"Dashboard",exact:!0,component:f(()=>p(()=>import("./index.18b7cf00.js"),["assets/index.18b7cf00.js","assets/vendor.25eb60fb.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css"]))},{path:"/swagger",label:"Swagger",exact:!0,component:f(()=>p(()=>import("./index.b2554a79.js"),["assets/index.b2554a79.js","assets/index.3ac2faf0.css","assets/vendor.25eb60fb.js","assets/index.03ffb951.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css","assets/index.71b5dd22.js","assets/index.88df20ea.css"]))},{path:"/tasks",label:"Tasks",component:f(()=>p(()=>import("./index.7884dd66.js"),["assets/index.7884dd66.js","assets/index.826b71da.css","assets/vendor.25eb60fb.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css","assets/event.3f2c0b25.js","assets/index.03ffb951.js"]))},{path:"/tasks/:id",label:"Tasks",component:f(()=>p(()=>import("./index.7884dd66.js"),["assets/index.7884dd66.js","assets/index.826b71da.css","assets/vendor.25eb60fb.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css","assets/event.3f2c0b25.js","assets/index.03ffb951.js"]))},{path:"/blocks",label:"Blocks",exact:!0,component:f(()=>p(()=>import("./index.5e65aeb4.js"),["assets/index.5e65aeb4.js","assets/index.b50aae06.css","assets/vendor.25eb60fb.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css"]))},{path:"/config",label:"Config",exact:!0,component:f(()=>p(()=>import("./index.1bcc8c25.js"),["assets/index.1bcc8c25.js","assets/index.77952f6c.css","assets/vendor.25eb60fb.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css"]))},{path:"/deps",label:"Deps",exact:!0,component:f(()=>p(()=>import("./index.253d264b.js"),["assets/index.253d264b.js","assets/index.e2bc6861.css","assets/vendor.25eb60fb.js","assets/index.6c8aecb8.js","assets/index.35c74af0.css","assets/event.3f2c0b25.js"]))},{path:"/debugger",label:"Debugger",exact:!0,component:f(()=>p(()=>import("./index.76c3bc3e.js"),["assets/index.76c3bc3e.js","assets/index.32f86899.css","assets/vendor.25eb60fb.js","assets/index.03ffb951.js","assets/index.71b5dd22.js","assets/index.88df20ea.css"]))},{path:"/debugger/:id",label:"Debugger",exact:!0,component:f(()=>p(()=>import("./index.76c3bc3e.js"),["assets/index.76c3bc3e.js","assets/index.32f86899.css","assets/vendor.25eb60fb.js","assets/index.03ffb951.js","assets/index.71b5dd22.js","assets/index.88df20ea.css"]))}]}];function Ce(){return t.createElement(Ee,null,$(ve))}he.render(t.createElement(B.Provider,{value:{socket:D}},t.createElement(Ce,null)),document.getElementById("root"));export{je as a,Se as b,we as c,N as i,v as u};