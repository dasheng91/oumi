var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,c=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&l(e,a,t[a]);return e},o=(e,n)=>t(e,a(n));import{R as i,W as m,X as d,I as p,Y as u,r as E,M as y,Z as g,A as h,_ as f,z as b,C as k,$ as v,a0 as x,a1 as N,D as S,a2 as j,a3 as w,J as C,T as I,e as P,a4 as O,a5 as T,O as q,a6 as A,m as R,a7 as _,a8 as z,L as D}from"./vendor.b6308d1a.js";import{a as F,u as L,i as M}from"./index.5d773249.js";import{c as V,a as U}from"./index.03ffb951.js";import{C as $}from"./index.7daf723c.js";import{C as B}from"./index.cadc6c48.js";const H=["string","number","array","object","integer","boolean","int32","int64","ref","file"];function K(e,t){const a={};return function e(a,n){var r;Array.isArray(n)?n.forEach((e=>{console.log("数组的暂没有处理~")})):(r=n)&&"[object Object]"===Object.prototype.toString.call(r)&&Object.keys(r).length>0&&Object.keys(n).forEach((r=>{const s=c({},n[r]);if(s.isArray){delete s.isArray;const t={};e(t,s),a[r]=[t]}else(function(e){if(!e)return!1;const t=e.type||e.schema&&e.schema.type;return!!t&&H.includes(t)})(s)&&(a[r]=function(e,t){a=e,a.type&&"string"==typeof a.type||(a.type=a.schema&&a.schema.type,a.type&&(a.schema&&delete a.schema,"string"==typeof a.in&&delete a.in));var a;const{type:n,items:r,example:s}=e;if(s)return s;const l=r&&r.type?r.type:n;if("array"===n){if("integer"===l||"number"===l)return W(e,[1],t);if("string"===l)return W(e,["1"],t)}if("integer"===n||"number"===n)return W(e,1,t);if("string"===n)return W(e,"string",t);if("boolean"===n)return W(e,!0,t);return W(e,n,t)}(s,t))}))}(a,e),a}const W=(e,t,a)=>{const{resultValueType:n="type"}=a||{},{example:r,description:s}=e;return"type"===n?t:r||s||t};var Z=e=>{const{onFinish:t,form:a}=e;return i.createElement(m,{form:a,name:"customized_form_controls",layout:"inline",onFinish:t},i.createElement(m.Item,{name:"name",label:"搜索",tooltip:{title:"首字母是“v”或包含中文表示搜索tag，否则就是搜索path",icon:i.createElement(d,null)}},i.createElement(p,{placeholder:"可搜索关键字、tag、路径",style:{width:230},allowClear:!0})),i.createElement(m.Item,null,i.createElement(u,{type:"primary",htmlType:"submit"},"搜索")))};const{TabPane:G}=I;var J=e=>{const{swaggerList:t,expandData:a={},expandCacheId:n,loadingId:r,onClickSwaggerHead:s,setSelectId:l,selectId:m,tabsId:d}=e,[p,u]=E.exports.useState(!1),[T,q]=E.exports.useState(null),[A,R]=E.exports.useState("1"),{downloadFile:_}=F(),{request:z,loading:D}=L("/api/export/json",{lazy:!0,methods:"get"}),{request:M,loading:V}=L("/api/export/typescript",{lazy:!0,methods:"get"}),{request:U,loading:$}=L("/api/export/mock",{lazy:!0,methods:"get"}),H=e=>{u(e)},W=(e,t)=>{H(!0),R("1"),q(null),setTimeout((()=>{q(o(c({},e),{key:t}))}),200)},Z=()=>i.createElement(i.Fragment,null,T&&"post"===T.methods&&i.createElement(O,{color:"green"},"POST"),T&&"get"===T.methods&&i.createElement(O,{color:"blue"},"GET"),T&&"delete"===T.methods&&i.createElement(O,{color:"red"},"DELETE"),T&&"put"===T.methods&&i.createElement(O,{color:"volcano"},"PUT")),J=i.createElement(y,null,i.createElement(y.Item,{onClick:()=>{var e;(e=T&&T.key)&&_("/api/export/json",{params:{id:d,searchPath:e}})}},i.createElement("span",null,i.createElement(g,null)," 导出 Response")),i.createElement(y.Item,{onClick:()=>{var e;(e=T&&T.key)&&_("/api/export/mock",{params:{id:d,searchPath:e}})}},i.createElement("span",null,i.createElement(h,null)," 导出 Mock")),i.createElement(y.Item,{onClick:()=>{var e;(e=T&&T.key)&&_("/api/export/typescript",{params:{id:d,searchPath:e}})}},i.createElement("span",null,i.createElement(f,null)," 导出 TS")));return i.createElement("div",{className:"swagger-list"},t&&t.map((e=>i.createElement("div",{className:"swagger-list-item",key:e.id},i.createElement("div",{className:"heading",onClick:()=>s(e)},i.createElement("div",{className:"options"},r===e.id?i.createElement(b,null):n.includes(e.id)?i.createElement(k,null):i.createElement(v,null),n.includes(e.id)&&i.createElement("span",{className:"all",onClick:t=>((e,t)=>{const n=Object.keys(a[t.id]||{});m.includes(n[0])?l(m.filter((e=>!n.includes(e)))):l([...m,...n]),e.stopPropagation(),e.preventDefault()})(t,e)},"全选")),i.createElement("h3",null,e.name)),n.includes(e.id)&&i.createElement("div",{className:"content"},i.createElement("ul",{className:"content-list"},a&&a[e.id]&&Object.keys(a[e.id]).map((t=>{const n=a[e.id][t];return i.createElement("li",{className:`${n.methods||"get"}`,key:t},i.createElement("span",{className:"checkbox"},i.createElement(x,{value:t,onChange:()=>(e=>{m.includes(e)?l(m.filter((t=>t!==e))):l([...m,e])})(t),checked:m.includes(t)})),i.createElement("span",{className:"methods"},(n.methods||"get").toLocaleUpperCase()),i.createElement("span",{className:"path",onClick:()=>W(n,t)},t),i.createElement("span",{className:"desc",title:n.description,onClick:()=>W(n,t)},n.description),i.createElement("span",{className:"bg"},i.createElement(v,null)))}))))))),i.createElement(N,{title:i.createElement("span",null,i.createElement(Z,null)," ",T&&(T.description||T.key)||""),placement:"right",closable:!1,onClose:()=>H(!1),visible:p,width:880,extra:i.createElement("div",{style:{paddingRight:50}},i.createElement(S,{overlay:J},i.createElement("a",{className:"ant-dropdown-link",onClick:e=>e.preventDefault()},i.createElement(j,null)," 导出数据 ",i.createElement(w,null))))},i.createElement("div",{style:{position:"relative",top:-10,overflow:"hidden"}},i.createElement(C,null,"路径:",T&&T.key)),i.createElement(I,{className:"tabs-oumi",activeKey:A,type:"card",onTabClick:e=>{R(e);const t={isDownload:0,id:d,searchPath:null==T?void 0:T.key};"3"!==e||T.code_Response||z(t).then((e=>{q(o(c({},T),{code_Response:e}))})),"4"!==e||T.code_Mock||U(t).then((e=>{q(o(c({},T),{code_Mock:e}))})),"5"!==e||T.code_TS||M(t).then((e=>{q(o(c({},T),{code_TS:e}))}))},style:{marginBottom:32}},i.createElement(G,{tab:"默认",key:"1",forceRender:!1},i.createElement("h3",{className:"mbm5"},"请求头（Request）："),i.createElement(B,{code:T&&K(T.request,{resultValueType:"type"})}),i.createElement("h3",{className:"mbm5"},"响应（Response）："),i.createElement(B,{code:T&&K(T.response,{resultValueType:"desc"})})),i.createElement(G,{tab:"详细",key:"2",forceRender:!1},i.createElement("h3",{className:"mbm5"},"请求头（Request）："),i.createElement(B,{code:T&&T.request}),i.createElement("h3",{className:"mbm5"},"响应（Response）："),i.createElement(B,{code:T&&T.response})),i.createElement(G,{tab:"Response",key:"3"},D&&i.createElement(P,null),i.createElement(B,{code:null==T?void 0:T.code_Response,isCopy:!0})),i.createElement(G,{tab:"Mock",key:"4"},$&&i.createElement(P,null),i.createElement(B,{code:null==T?void 0:T.code_Mock,lang:"javascript",isCopy:!0})),i.createElement(G,{tab:"TypeScript",key:"5"},V&&i.createElement(P,null),i.createElement(B,{code:null==T?void 0:T.code_TS,lang:"javascript",isCopy:!0})))))},X=e=>{const{selectNode:t,onSuccess:a}=e,{dirPath:n}=t||{},[r]=m.useForm(),[s,l]=i.useState(!1),{data:o,request:d,loading:E}=L("/api/project/createDir",{lazy:!0}),y=e=>{l(e)};return i.createElement(T,{title:()=>i.createElement("div",null,i.createElement(m,{form:r,className:"my-popconfirm-form"},i.createElement(m.Item,{name:"dirName",label:"目录名称",rules:[{required:!0,message:"请输入目录名称"},{pattern:/^[a-zA-Z0-9_-]+$/,message:"请输入正确的目录名称"}]},i.createElement(p,null)))),visible:s,onConfirm:()=>{r.validateFields().then((e=>{d(c({currentPath:n},e)).then((e=>{l(!1),"function"==typeof a&&a()}))}))},placement:"top",okButtonProps:{loading:E},onCancel:()=>y(!1),icon:!1},i.createElement(u,{size:"middle",disabled:!t,onClick:()=>y(!0)},"新建文件夹"))};const{DirectoryTree:Y}=A;function Q(e,t,a){return e.map((e=>e.key===t?o(c({},e),{children:a}):e.children?o(c({},e),{children:Q(e.children,t,a)}):e))}var ee=e=>{const{selectId:t,setSelectId:a,configId:n}=e,[r,s]=E.exports.useState([]),[l,c]=E.exports.useState(null),{data:o,loading:m,request:p}=L("/api/swagger/build",{lazy:!0}),y=e=>M.post("/api/project/dirs",e),g=()=>{y().then((e=>{s(e)}))};function h({key:e,children:t,dirPath:a}){return new Promise((n=>{t?n():y({currentPath:a}).then((t=>{Array.isArray(t)&&s((a=>Q(a,e,t))),n()}))}))}E.exports.useEffect((()=>{g()}),[]);return i.createElement("div",{className:"dirs"},i.createElement("div",{className:"dirs-box"},i.createElement("div",{className:"dirs-head"},"生成接口到目录"," ",i.createElement(q,{title:"生成接口的规则在配置中心修改"},i.createElement(d,null)),"："),i.createElement(Y,{loadData:h,treeData:r,onSelect:(e,t)=>{const{selected:a,node:n}=t,{isLeaf:r}=n;c(a&&!r?n:null)}})),i.createElement("div",{className:"dirs-btn"},i.createElement(C,null,i.createElement(u,{type:"primary",size:"middle",disabled:!l,onClick:()=>{if(t.length<=0&&R.warn("请选择需要导出的api"),l&&t.length>0){const{dirPath:e}=l;p({outputPath:e,searchContent:t,configId:n}).then((e=>{R.success("生成文件成功~"),a([])}))}},loading:m},"生成接口到目录"),i.createElement(X,{selectNode:l,onSuccess:()=>{l&&l.key?h({key:l.key,dirPath:l.key}):g()}}))))};const{TabPane:te}=I,ae=()=>i.createElement($,{title:"Swagger"},i.createElement("div",{className:"swagger-error"},"您当前还没有配置Swagger，去 ",i.createElement(D,{to:"/config"},"配置")," 。"));var ne=E.exports.memo((()=>{const[e,t]=E.exports.useState(""),{data:a,error:n,loading:r}=L("/api/config/swagger/get"),[s]=m.useForm(),{data:l,loading:d,request:p}=L("/api/swagger/info",{lazy:!0}),{request:u}=L("/api/swagger/search",{lazy:!0}),[y,g]=E.exports.useState([]),[h,f]=E.exports.useState({}),[b,k]=E.exports.useState(""),[v,x]=E.exports.useState([]),[N,S]=E.exports.useState([]);E.exports.useEffect((()=>{a&&a.length>0&&t(a[0].id)}),[a]),E.exports.useEffect((()=>{l&&Array.isArray(l.tags)&&g((e=>{const t=[],{paths:a}=e;return Object.keys(a).forEach((e=>{const n=a[e],r=n.get||n.post||n.delete||n.put;if(r){const{tags:e}=r;Array.isArray(e)&&e.forEach((e=>{t.some((t=>t.name===e))||t.push({name:e,description:n.summary,id:V(10)})}))}else console.warn(r)})),t.sort(U("name"))})(l))}),[l]),E.exports.useEffect((()=>{if(e){const t=s.getFieldValue("name");S([]),t?j({name:t}):p({id:e})}}),[e]);const j=t=>{const{name:a}=t;if(void 0===a||""===a)p({id:e});else{const t=V(8);g([{name:a,description:"",id:t}]),x([t]),k(t);const n=/[\u4e00-\u9fa5]+/g,r=a.toLocaleUpperCase().startsWith("V")||n.test(a)?{searchTag:a}:{searchPath:a};u(c({configId:e},r)).then((e=>{if(k(""),"object"==typeof e&&Object.keys(e||{}).length>0){const a={};Object.keys(e).forEach((t=>{const n=e[t];a[t]={description:n.description,methods:n.methods,request:n.request,response:n.response}})),f({[t]:a})}else R.warning("没有数据")}))}};if(r)return i.createElement($,{title:"Swagger"},i.createElement(P,null));if(n||!Array.isArray(a)||0===a.length)return i.createElement(ae,null);const w=e=>{S(e?N.filter((t=>t!==e)):[])},C=i.createElement("div",{className:"popover-selected"},i.createElement("a",{onClick:()=>w()},"清空所有"),N&&N.map((e=>i.createElement("p",{key:e},e," ",i.createElement("span",{onClick:()=>w(e),title:"移除"},i.createElement(_,null))))));return i.createElement($,{isMain:!0,title:"Swagger",className:"ui-swagger-container"},i.createElement(I,{className:"tabs-oumi",type:"card",defaultActiveKey:e,onTabClick:e=>{t(e)}},a&&a.map((e=>i.createElement(te,{tab:e.name,key:e.id})))),i.createElement("div",{className:"tabs-content"},d&&i.createElement("div",{className:"fetch-loading"},i.createElement(P,null)),i.createElement("div",{className:"selected flex align-items"},i.createElement(Z,{form:s,onFinish:j}),i.createElement(z,{content:C,title:"已选中",placement:"bottom"},i.createElement("div",{className:"plp2"},"已选中",i.createElement("span",{className:"span"},N.length),"个"))),i.createElement("div",{className:"body-flex"},i.createElement(J,{tabsId:e,selectId:N,setSelectId:S,swaggerList:y,loadingId:b,expandCacheId:v,expandData:h,onClickSwaggerHead:t=>{v.includes(t.id)?x(v.filter((e=>e!==t.id))):h[t.id]?x([...v,t.id]):(k(t.id),u({configId:e,searchTag:t.name}).then((e=>{if(k(""),"object"==typeof e&&Object.keys(e||{}).length>0){const a={};Object.keys(e).forEach((t=>{const n=e[t];a[t]={description:n.description,methods:n.methods,request:n.request,response:n.response}})),x([...v,t.id]),f(o(c({},h),{[t.id]:a}))}else R.warning("没有数据")})).catch((()=>{k("")})))}}),i.createElement(ee,{selectId:N,setSelectId:S,configId:e}))))}));export{ne as default};