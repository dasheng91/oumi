var Ae=Object.defineProperty,Be=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ae=(l,t,a)=>t in l?Ae(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,F=(l,t)=>{for(var a in t||(t={}))me.call(t,a)&&ae(l,a,t[a]);if(Y)for(var a of Y(t))de.call(t,a)&&ae(l,a,t[a]);return l},w=(l,t)=>Be(l,Se(t));var ne=(l,t)=>{var a={};for(var n in l)me.call(l,n)&&t.indexOf(n)<0&&(a[n]=l[n]);if(l!=null&&Y)for(var n of Y(l))t.indexOf(n)<0&&de.call(l,n)&&(a[n]=l[n]);return a};var M=(l,t,a)=>(ae(l,typeof t!="symbol"?t+"":t,a),a);import{r as d,R as e,I as S,ae as qe,av as Te,a6 as Oe,D as Ee,aw as Pe,ax as we,z as Ie,ay as pe,B as le,M as z,a5 as se,aq as Re,J as _,Y as I,W as N,V as re,az as Ve,aA as Le,ak as ve,aB as U,T as R,an as L,aC as $e,aD as ze,f as _e,C as Ke,O as je,aE as Ge,$ as Je,aF as ye,m as X,e as Me,U as Ue}from"./vendor.25eb60fb.js";import{u as P}from"./index.22863799.js";import{l as H,c as fe,u as He}from"./index.03ffb951.js";import{C as he}from"./index.71b5dd22.js";const{DirectoryTree:Qe}=Oe,We=l=>{if(!Array.isArray(l))return[];const t=[...l];function a(n){Array.isArray(n)&&n.forEach(r=>{r.isTest?r.icon=()=>e.createElement(le,null):r.method&&(r.icon=()=>e.createElement("span",{className:`method ${r.method}-color`},r.method.toLocaleUpperCase())),r.children&&a(r.children)})}return a(t),t},Ye=({addChildGroup:l})=>{const t=(a,n)=>{a.stopPropagation(),a.preventDefault(),n()};return e.createElement(z,null,e.createElement(z.Item,null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"",onClick:a=>{a.stopPropagation(),a.preventDefault()}},"1st menu item")),e.createElement(z.Item,null,e.createElement("span",{onClick:a=>t(a,l)},"\u6DFB\u52A0\u5B50\u5206\u7C7B")))},Xe=d.exports.memo(l=>{const{node:t,addChildGroup:a,removeItem:n,removeLoading:r}=l,{group:i,key:c}=t;return e.createElement("div",{className:"tree-title"},e.createElement("div",{className:"title-name truncate"},t.title),e.createElement("div",{className:"title-handler"},(()=>i?e.createElement(Ee,{overlay:e.createElement(Ye,{addChildGroup:a}),placement:"bottomCenter",arrow:!0},e.createElement(Pe,null)):e.createElement(e.Fragment,null,e.createElement("span",{className:"icons title-copy",title:"\u590D\u5236"},e.createElement(we,null)),e.createElement("span",{className:"icons title-delete",title:"\u5220\u9664",onClick:u=>{u.preventDefault(),u.stopPropagation(),n(c)}},r?e.createElement(Ie,null):e.createElement(pe,null))))()))});var Ze=({addPane:l,list:t,removeItem:a,removeLoading:n,expandedKeys:r,onExpand:i})=>{const[c,u]=d.exports.useState([]),h=(s,E)=>{const{node:m}=E;l({title:m.title,method:m.method,url:m.url,key:m.key,env:m.env,pkey:m.pkey,isTest:m.isTest})},f=s=>{const E=s.node.key,m=s.dragNode.key,y=s.node.pos.split("-"),D=s.dropPosition-Number(y[y.length-1]);if(!s.dropToGap&&!s.node.group)return;const g=[...c];let B;if(H(g,m,(C,q,O)=>{O.splice(q,1),B=C}),!s.dropToGap)H(g,E,C=>{C.children=C.children||[],C.children.unshift(B)});else if((s.node.props.children||[]).length>0&&s.node.props.expanded&&D===1)H(g,E,C=>{C.children=C.children||[],C.children.unshift(B)});else{let C,q;H(g,E,(O,j,G)=>{C=G,q=j}),D===-1?C.splice(q,0,B):C&&C.splice(q+1,0,B)}u(g)},p=({dropNode:s})=>!!(s.group||s.children&&s.children.length>0),b=s=>{},v=s=>{const E={title:"new parent1",key:Math.random(),group:1};u(m=>be(m,s.key,[...s.children,E]))};return d.exports.useEffect(()=>{u(We(t))},[t]),e.createElement("div",{className:"debugger-slider"},e.createElement("div",{className:"search"},e.createElement(S,{prefix:e.createElement(qe,null),allowClear:!0,placeholder:"\u641C\u7D22"}),e.createElement("span",{className:"add",onClick:()=>l({title:"\u65B0\u5EFA\u63A5\u53E3",isNew:!0})},e.createElement(Te,null))),e.createElement("div",{className:"api-list"},e.createElement(Qe,{defaultExpandAll:!0,onSelect:h,treeData:c,allowDrop:p,onExpand:i,onDrop:f,onDragEnter:b,draggable:s=>!s.isLeaf,titleRender:s=>e.createElement(Xe,{node:s,addChildGroup:()=>v(s),removeItem:a,removeLoading:n})})))};function be(l,t,a){return l.map(n=>n.key===t?w(F({},n),{children:a}):n.children?w(F({},n),{children:be(n.children,t,a)}):n)}const et=S.TextArea,ge=e.createContext(null),tt=()=>fe(5),at=a=>{var n=a,{index:l}=n,t=ne(n,["index"]);const[r]=N.useForm(),i=`${t["data-row-key"]}_form`||"form";return e.createElement(N,{form:r,name:i,component:!1},e.createElement(ge.Provider,{value:r},e.createElement("tr",F({},t))))},nt=u=>{var h=u,{title:l,editable:t,children:a,dataIndex:n,record:r,handleSave:i}=h,c=ne(h,["title","editable","children","dataIndex","record","handleSave"]);const[f,p]=d.exports.useState(!0),b=d.exports.useRef(null),v=d.exports.useContext(ge);d.exports.useEffect(()=>{f&&b.current},[f]);const s=()=>{v.setFieldsValue({[n]:r[n]})},E=async()=>{try{const y=await v.validateFields(),D=F(F({},r),y);v.setFieldsValue(D),i(D)}catch(y){console.log("Save failed:",y)}};let m=a;return t&&(m=f?e.createElement(N.Item,{style:{margin:0},name:n,initialValue:r[n]},e.createElement(S,{ref:b,onPressEnter:E,onBlur:E})):e.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:s},a)),e.createElement("td",F({},c),m)};class T extends e.PureComponent{constructor(t){super(t);M(this,"columns");M(this,"handleDelete",t=>{const{onEditChange:a}=this.props,n=[...this.state.dataSource];this.setState({dataSource:n.filter(r=>r.key!==t)},()=>{typeof a=="function"&&a(this.state.dataSource)})});M(this,"handleAdd",()=>{const{dataSource:t}=this.state,a={key:tt(),name:"",value:"",remark:""};this.setState({dataSource:[...t,a]})});M(this,"handleSave",t=>{const{onEditChange:a}=this.props,n=[...this.state.dataSource],r=n.findIndex(c=>t.key===c.key),i=n[r];n.splice(r,1,F(F({},i),t)),this.setState({dataSource:n}),typeof a=="function"&&a(n)});const{size:a}=t;this.columns=[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:a==="small"?"20%":"30%",editable:!0},{title:"\u53C2\u6570\u503C",dataIndex:"value",editable:!0},{title:"\u8BF4\u660E",dataIndex:"remark",editable:!0},{title:"\u5904\u7406",dataIndex:"operation",width:a==="small"?150:200,render:(n,r)=>this.state.dataSource.length>=1?e.createElement(se,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>this.handleDelete(r.key)},e.createElement("a",null,"\u5220\u9664")):null}],this.state={toggle:!1,dataSource:t.tableData||[{key:"0",name:"",value:"",remark:""}]}}componentWillReceiveProps(t){t.tableData&&t.tableData!==this.state.dataSource&&setTimeout(()=>{this.setState({dataSource:t.tableData||[]})},0)}render(){const{tableTitle:t}=this.props,{dataSource:a,toggle:n}=this.state,r={body:{row:at,cell:nt}},i=this.columns.map(c=>c.editable?w(F({},c),{onCell:u=>({record:u,editable:c.editable,dataIndex:c.dataIndex,title:c.title,handleSave:this.handleSave})}):c);return e.createElement("div",{className:""},e.createElement("div",{className:"table-title mbm10"},t),e.createElement("div",{className:"flex rel"},e.createElement("div",{className:"rel table-pad flex-1"},!n&&e.createElement(Re,{size:"small",components:r,rowClassName:()=>"editable-row",bordered:!0,dataSource:a,columns:i,pagination:!1}),n&&e.createElement("div",{className:"table-textarea"},e.createElement("div",{className:"t-header flex-sp"},e.createElement("p",null,"\u683C\u5F0F\uFF1A\u53C2\u6570\u540D,\u5FC5\u586B,\u793A\u4F8B\u503C,\u8BF4\u660E"),e.createElement("div",{className:"t-handler"},e.createElement(_,null,e.createElement(I,{size:"small",type:"primary"},"\u786E\u5B9A"),e.createElement(I,{size:"small",onClick:()=>this.setState({toggle:!1})},"\u53D6\u6D88")))),e.createElement(et,null),e.createElement("div",{className:"t-header flex-sp"},e.createElement("span",{className:"gray-color"},"\u5B57\u6BB5\u4E4B\u95F4\u4EE5\u82F1\u6587\u9017\u53F7(,)\u5206\u9694\uFF0C\u591A\u6761\u8BB0\u5F55\u4EE5\u6362\u884C\u5206\u9694")))),e.createElement("div",{className:"table-row-btn"},e.createElement(I,{onClick:this.handleAdd,size:"small",style:{marginBottom:16}},"\u65B0\u589E\u4E00\u884C")),e.createElement("div",{className:"table-textarea-toggle",onClick:()=>this.setState({toggle:!this.state.toggle})},"\u6279\u91CF\u4FEE\u6539")))}}var lt=()=>e.createElement("div",{className:"request-content-front"},"\u63A5\u53E3\u524D\u7F6E");const De=(l,t,a)=>{if(!!Array.isArray(l))for(let n=0;n<l.length;n++){if(l[n].key===t){a(l[n],n,l);return}l[n].children&&De(l[n].children,t,a)}},st=l=>{if(!l)return"";const t=l.startsWith("http");let a=t?new URL(l).pathname:l;return t&&(a==="/"||!a)&&(a=new URL(l).hostname),a},rt=l=>{const t=[];return Array.isArray(l)&&l.forEach(a=>{a.title=a.title||st(a.url),a.pkey?De(t,a.pkey,(n,r,i)=>{Array.isArray(n.children)?n.children.push(a):n.children=[a]}):t.push(a)}),t},ut=[{name:"Response JSON",value:"1"}],Fe=[{name:"\u5FC5\u9700\u5B58\u5728",value:"required"},{name:"\u7B49\u4E8E",value:"eq"},{name:"\u4E0D\u7B49\u4E8E",value:"neq"},{name:"\u5C0F\u4E8E",value:"lt"},{name:"\u5C0F\u4E8E\u6216\u7B49\u4E8E",value:"lte"},{name:"\u5927\u4E8E",value:"gt"},{name:"\u5927\u4E8E\u6216\u7B49\u4E8E",value:"gte"},{name:"\u5305\u542B",value:"include"},{name:"\u4E0D\u5305\u542B",value:"ninclude"},{name:"\u4E3A\u7A7A",value:"empty"}],ct={responseData:null,requestData:{query:[],bodyFormData:[],bodyJSON:[],header:[],cookie:[]},setRequestData:l=>{},requestPostData:[],setRequestPostData:l=>{}},Ce=d.exports.createContext(ct),ue=()=>d.exports.useContext(Ce),{Option:Ne}=U,ot=d.exports.memo(l=>{const{visible:t,setVisible:a,callback:n,editData:r,title:i}=l,[c]=N.useForm();d.exports.useEffect(()=>{r?c.setFieldsValue(F({},r)):c.resetFields()},[c,r]);const u=()=>{a(!1)},h=()=>{c.submit(),c.validateFields().then(p=>{typeof n=="function"&&n(F({},p)),u(),c.resetFields()})},f={type:"assert",assertObject:"1",assertEnumKey:"eq"};return e.createElement(ve,{title:"\u6DFB\u52A0\u65AD\u8A00",visible:t,onCancel:u,onOk:h,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},e.createElement(N,{name:"form_config",form:c,labelCol:{span:5},initialValues:f},e.createElement(N.Item,{name:"key",hidden:!0},e.createElement(S,null)),e.createElement(N.Item,{name:"type",hidden:!0},e.createElement(S,null)),e.createElement(N.Item,{name:"name",label:"\u65AD\u8A00\u540D\u79F0"},e.createElement(S,null)),e.createElement(N.Item,{name:"assertObject",label:"\u65AD\u8A00\u5BF9\u8C61"},e.createElement(U,{disabled:!0},ut.map(p=>e.createElement(Ne,{key:p.value,value:p.value},p.name)))),e.createElement(N.Item,{name:"expression",label:"\u63D0\u53D6\u8868\u8FBE\u5F0F",rules:[{required:!0,message:"\u8868\u8FBE\u5F0F\u5FC5\u586B"}]},e.createElement(S,{placeholder:"JSON path\u8868\u8FBE\u5F0F\uFF0C\u5982$.data.list[0].name"})),e.createElement("div",{className:"flex assert-flex"},e.createElement(N.Item,{name:"assertEnumKey",label:"\u65AD\u8A00"},e.createElement(U,null,Fe.map(p=>e.createElement(Ne,{key:p.value,value:p.value},p.name)))),e.createElement(N.Item,{name:"assertValue",label:""},e.createElement(S,null)))))});var it=d.exports.memo(l=>{const{requestPostData:t,setRequestPostData:a}=ue(),[n,r]=d.exports.useState(!1),[i,c]=d.exports.useState(null),[u,h]=d.exports.useState([]);d.exports.useEffect(()=>{h(t)},[t]);const f=s=>{let E=[];if(s.key){const m=u.findIndex(y=>y.key===s.key);m>-1&&(u.splice(m,1,s),E=[...u])}else{const m=w(F({},s),{key:fe()});E=[...u,m]}a(E)},p=s=>{a(u.filter(E=>E.key!==s.key))},b=s=>{r(!0),c(s)},v=s=>{const{name:E,type:m,assertEnumKey:y,expression:D,assertValue:g}=s,B=Fe.find(O=>O.value===y),C=B?B.name:"",q=m==="assert"?"\u65AD\u8A00":"";return e.createElement("span",null,e.createElement("span",{className:"type prp10"},q),E&&e.createElement("span",null,E),!E&&e.createElement("span",null,D," ",C," ",g))};return e.createElement("div",{className:"request-content-front"},e.createElement(_,{className:"mbm10"},e.createElement(I,{type:"primary",onClick:()=>{c(null),r(!0)}},"\u6DFB\u52A0\u65AD\u8A00")),e.createElement(re,{itemLayout:"horizontal",dataSource:u,className:"assert-list",renderItem:s=>e.createElement(re.Item,null,e.createElement(re.Item.Meta,{title:e.createElement("div",{className:"flex-sp"},e.createElement("div",null,e.createElement("span",{className:"icon"},e.createElement(Ve,null))," ",e.createElement("span",null,v(s))),e.createElement("div",{className:"heandler"},e.createElement(_,null,e.createElement(Le,{className:"cur",onClick:()=>b(s)}),e.createElement(se,{title:"\u786E\u5B9A\u8981\u5220\u9664\u5417?",onConfirm:()=>p(s),okText:"Yes",cancelText:"No"},e.createElement(pe,{className:"cur",onClick:E=>{E.stopPropagation()}})))))}))}),e.createElement(ot,{visible:n,setVisible:r,editData:i,callback:f}))});const{TabPane:K}=R;var mt=l=>{const{setRequestData:t,requestData:a}=ue(),{isTestExample:n}=l,[r,i]=d.exports.useState(!1),[c,u]=d.exports.useState("6"),[h,f]=d.exports.useState(1);d.exports.useEffect(()=>{a&&r===!1&&(a.bodyFormData&&Object.keys(a.bodyFormData).length>0?(u("2"),f(2),i(!0)):a.bodyJSON&&Object.keys(a.bodyJSON).length>0?(u("2"),f(3),i(!0)):a.query&&a.query.length>0?(u("1"),i(!0)):a.header&&a.header.length>0&&(u("3"),i(!0)))},[a,r]);const p=v=>{const{value:s}=v.target;f(s)},b=(v,s)=>{t({[v]:s})};return e.createElement(R,{activeKey:c,onChange:v=>u(v)},e.createElement(K,{tab:"Params",key:"1"},e.createElement(T,{tableData:a.query,tableTitle:"Query\u53C2\u6570",onEditChange:v=>b("query",v)})),e.createElement(K,{tab:"Body",key:"2"},e.createElement(L.Group,{onChange:p,name:"bodyRadioGroup",value:h},e.createElement(L,{value:1},"none"),e.createElement(L,{value:2},"form-data"),e.createElement(L,{value:3},"json")),h===1&&e.createElement("div",{className:"body-none"},"\u8BE5\u8BF7\u6C42\u65E0 Body "),h===2&&e.createElement("div",null,e.createElement(T,{tableData:a.bodyFormData,onEditChange:v=>b("bodyFormData",v)})),h===3&&e.createElement("div",null,e.createElement(T,{tableData:a.bodyJSON,onEditChange:v=>b("bodyJSON",v)}))),e.createElement(K,{tab:"Header",key:"3"},e.createElement(T,{tableData:a.header,onEditChange:v=>b("header",v)})),e.createElement(K,{tab:"Cookie",key:"4"},e.createElement(T,{tableData:a.cookie,onEditChange:v=>b("cookie",v)})),n&&e.createElement(K,{tab:"\u63A5\u53E3\u524D\u7F6E",key:"5"},e.createElement(lt,null)),n&&e.createElement(K,{tab:"\u63A5\u53E3\u540E\u7F6E",key:"6"},e.createElement(it,null)))};const{TabPane:Z}=R;var dt=l=>{const{responseData:t}=ue(),{header:a={},body:n="",isJSON:r,status:i,statusText:c,timer:u,requestHeader:h,fetchUrl:f,assertResult:p}=t||{},[b,v]=d.exports.useState("pretty"),s=E=>{const{value:m}=E.target;v(m)};return e.createElement("div",{className:"rel"},e.createElement(R,{defaultActiveKey:"1"},e.createElement(Z,{tab:"Body",key:"1"},Array.isArray(p)&&e.createElement("div",{className:"assert-result"},e.createElement("p",null,"\u65AD\u8A00\u7ED3\u679C\uFF1A"),p.map((E,m)=>e.createElement("div",{className:"assert-result__item",key:m},e.createElement("div",{className:`icon ${E.success?"green":"red"}`},E.success&&e.createElement($e,null),!E.success&&e.createElement(ze,null)),e.createElement("div",{className:"name"},E.name)))),e.createElement(L.Group,{onChange:s,value:b},e.createElement(L.Button,{value:"pretty"},"Pretty"),e.createElement(L.Button,{value:"preview"},"Preview")),b==="pretty"&&e.createElement("div",{className:"response-body"},e.createElement(he,{code:n})),b==="preview"&&e.createElement("div",{className:"response-body"},e.createElement(he,{code:typeof n=="object"?JSON.stringify(n):n}))),e.createElement(Z,{tab:"Response Headers",key:"3"},e.createElement("div",{className:"list-line"},e.createElement("div",{className:"list-line_item"},e.createElement("span",{className:"name"},"\u540D\u79F0"),e.createElement("span",{className:"value"},"\u503C")),a&&Object.keys(a).map(E=>{const m=a[E];return e.createElement("div",{className:"list-line_item",key:E},e.createElement("span",{className:"name"},E),e.createElement("span",{className:"value"},Array.isArray(m)?m[0]:m))}))),e.createElement(Z,{tab:"Request Headers",key:"4"},e.createElement("div",{className:"list-line"},e.createElement("div",{className:"list-line_item"},e.createElement("span",{className:"name"},"\u540D\u79F0"),e.createElement("span",{className:"value"},"\u503C")),h&&Object.keys(h).map(E=>{const m=h[E]||"";return e.createElement("div",{className:"list-line_item",key:E},e.createElement("span",{className:"name"},E),e.createElement("span",{className:"value",title:m},m))}))),e.createElement(Z,{tab:"Other",key:"5"},e.createElement("div",{className:"list-line"},e.createElement("div",{className:"list-line_item"},e.createElement("span",{className:"name"},"URL"),e.createElement("span",{className:"value"},f))))),e.createElement("div",{className:`response-status status-${i}`},i&&e.createElement("span",null,"\u72B6\u6001\u7801:"," ",e.createElement("u",null,i," ",c)),i&&e.createElement("span",null,"\u8017\u65F6: ",e.createElement("u",null,u," ms"))))},Et=l=>{const{onAddCase:t}=l,[a]=N.useForm(),n=(c,u)=>{u&&(u.preventDefault(),u.stopPropagation())},r=()=>{a.validateFields().then(c=>{t(c)})},i=()=>e.createElement("div",null,e.createElement(N,{form:a,className:"my-popconfirm-form"},e.createElement(N.Item,{name:"name",label:"\u7528\u4F8B\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u4F8B\u540D\u79F0"}]},e.createElement(S,null))));return e.createElement(se,{title:i,onConfirm:r,placement:"bottom",onCancel:c=>n(!1,c),icon:!1},e.createElement(I,{type:"primary",danger:!0,icon:e.createElement(le,null)},"\u53E6\u5B58\u4E3A\u7528\u4F8B"))};const pt=({onClick:l})=>e.createElement(z,null,e.createElement(z.Item,{key:"get",onClick:()=>l("get")},e.createElement("span",null,"GET")),e.createElement(z.Item,{key:"post",onClick:()=>l("post")},e.createElement("span",null,"POST"))),vt=()=>e.createElement("div",null,e.createElement("h2",null,"\u9879\u76EE\u6982\u89C8\u7684\u5185\u5BB9\u3002"),e.createElement("p",null,"\u63A5\u53E3\u8C03\u901F\u5668\uFF01"));var yt=d.exports.memo(l=>{const{pane:t,env:a,onSaveSuccess:n,addChildTree:r}=l,{isTest:i,isNew:c}=t,[u,h]=d.exports.useState(""),[f,p]=d.exports.useState("get"),[b,v]=d.exports.useState([]),[s,E]=d.exports.useState({query:[],bodyFormData:[],bodyJSON:[],header:[],cookie:[]}),{request:m,loading:y}=P("/api/debugger/taskDetail",{lazy:!0}),{request:D}=P("/api/debugger/creatTestExp",{lazy:!0}),{request:g,loading:B,data:C}=P("/api/debugger/runTask",{lazy:!0}),{request:q,loading:O}=P("/api/debugger/saveTask",{lazy:!0}),j={requestData:s,responseData:C,setRequestData:E,requestPostData:b,setRequestPostData:v},G=()=>{g({method:f,url:u,env:a,request:s,requestPost:b})},Q=async()=>{const A=await q({key:t.key,method:f,url:u,env:a,request:s,requestPost:b,isTest:i});typeof n=="function"&&n({pane:F(w(F({},t),{prevKey:t.key}),A)}),X.success("\u4FDD\u5B58\u6210\u529F")},W=A=>{const{value:J}=A.target;h(J)},te=A=>{D({title:A.name,pkey:t.key}).then(J=>{const o=F({},J);o.icon=()=>e.createElement(le,null),r(t.key,[o]),X.success("\u6DFB\u52A0\u7528\u4F8B\u6210\u529F")})};return d.exports.useEffect(()=>{t&&t.key&&t.key!=="1"&&m({key:t.key,pkey:t.pkey}).then(A=>{!A||(A.url&&h(A.url),A.method&&p(A.method),A.request&&E(A.request),A.requestPost&&v(A.requestPost))})},[t]),t.key==="1"?e.createElement(vt,null):y?e.createElement("div",{className:"rel",style:{height:300}},e.createElement("div",{className:"fetch-loading"},e.createElement(_e,null))):e.createElement(Ce.Provider,{value:j},e.createElement("div",{className:"content-body"},e.createElement("div",{className:"d-header flex-center"},e.createElement("div",{className:"radius flex-center"},!i&&e.createElement("div",{className:`method ${f}-color`},e.createElement(Ee,{overlay:e.createElement(pt,{onClick:p}),trigger:["click"]},e.createElement("div",null,f.toLocaleUpperCase()," ",e.createElement(Ke,null)))),i&&e.createElement("div",{className:`method ${f}-color`},e.createElement("span",{style:{marginRight:10}},f.toLocaleUpperCase()),e.createElement(je,{placement:"bottom",title:"\u6D4B\u8BD5\u7528\u4F8B\u7684URL\u9700\u8981\u7236\u7EA7\u4FDD\u5B58\u624D\u80FD\u751F\u6548\u54E6~"},e.createElement(Ge,null))),e.createElement("div",{className:"input"},!i&&e.createElement(S,{placeholder:'\u63A5\u53E3\u8DEF\u5F84 "/"\u6216"http"\u8D77\u59CB ',onChange:W,defaultValue:t.url}),i&&e.createElement(S,{placeholder:'\u63A5\u53E3\u8DEF\u5F84 "/"\u6216"http"\u8D77\u59CB ',onChange:W,value:u,disabled:!0}))),e.createElement("div",{className:"handler rel"},!c&&e.createElement(_,null,e.createElement(I,{type:"primary",icon:e.createElement(Je,null),onClick:G,loading:B},"\u8FD0\u884C"),!i&&e.createElement(Et,{onAddCase:te}),e.createElement(I,{type:"default",icon:e.createElement(ye,null),onClick:Q,loading:O},"\u4FDD\u5B58")),c&&e.createElement(_,null,e.createElement(I,{type:"primary",icon:e.createElement(ye,null),onClick:Q,loading:O},"\u4FDD\u5B58")))),e.createElement("div",{className:"content-scroll"},e.createElement("h2",{className:"title"},"\u8BF7\u6C42\u53C2\u6570\uFF1A"),e.createElement("div",{className:"request"},e.createElement(mt,{isTestExample:i})),e.createElement("h2",{className:"title"},"\u54CD\u5E94\u7ED3\u679C\uFF1A"),e.createElement("div",{className:"response"},e.createElement(dt,null)))))});const{TabPane:ee}=R,ce=()=>e.createElement("div",{className:"tips"},"\u6E29\u99A8\u63D0\u793A\uFF1A\u6BCF\u6B21\u4FDD\u5B58\u4EC5\u9650\u5F53\u524D\u9009\u9879\u5361\u7684\u5185\u5BB9\uFF01"),ft={e1:"\u5F00\u53D1\u73AF\u5883",e2:"\u6D4B\u8BD5\u73AF\u5883",e3:"\u751F\u4EA7\u73AF\u5883"},oe={e1:"dev",e2:"test",e3:"prod"},ht=d.exports.memo(({form:l,ckey:t,onChange:a,envList:n})=>{const[r,i]=d.exports.useState({dev:[],test:[],prod:[]}),c=u=>{const h=oe[t],f=w(F({},r),{[h]:u});i(f),a(u,"envList")};return d.exports.useEffect(()=>{const u=oe[t],h={name:ft[t],env:u,url:""};if(Array.isArray(n)){const f=n.find(p=>p.envName===u);if(f&&(i(w(F({},r),{[u]:f.data})),f.form)){l.setFieldsValue(F({},f.form));return}}l.setFieldsValue(h)},[l,t]),e.createElement(e.Fragment,null,e.createElement(N,{name:`${l}_${t}`,form:l,labelCol:{span:3},initialValues:{url:"http: 127.0.0.1"}},e.createElement(N.Item,{name:"name",label:"\u73AF\u5883\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u540D\u79F0"}]},e.createElement(S,null)),e.createElement(N.Item,{name:"url",label:"\u524D\u7F6EURL"},e.createElement(S,null)),e.createElement(N.Item,{name:"env",hidden:!0},e.createElement(S,null))),e.createElement("div",{className:"title"},"\u73AF\u5883\u53D8\u91CF"),e.createElement(T,{tableData:r[oe[t]],size:"small",onEditChange:u=>c(u)}),e.createElement(ce,null))}),bt=d.exports.memo(({ckey:l,onChange:t,form:a,globalData:n})=>{const[r,i]=d.exports.useState(!1),[c,u]=d.exports.useState("1"),[h,f]=d.exports.useState([]),[p,b]=d.exports.useState({query:[],header:[],cookie:[],bodyFormData:[],bodyJSON:[]}),{global:v,envList:s}=n||{};d.exports.useEffect(()=>{if(!Array.isArray(v))return;const y=v.find(g=>g.type==="params");y&&b(y.data);const D=v.find(g=>g.type==="var");D&&f(D.data)},[n,v]),d.exports.useEffect(()=>{p&&r===!1&&(p.bodyFormData&&Object.keys(p.bodyFormData).length>0||p.bodyJSON&&Object.keys(p.bodyJSON).length>0?u("2"):p.query&&p.query.length>0?u("1"):p.header&&p.header.length>0&&u("3"),i(!0))},[p,r]);const E=(y,D)=>{f(y),t(y,D)},m=(y,D)=>{const g=w(F({},p),{[y]:D});b(g),t(g,"params")};return l==="g1"?e.createElement(e.Fragment,null,e.createElement("div",{className:"title"},"\u5168\u5C40\u53D8\u91CF"),e.createElement(T,{tableData:h,size:"small",onEditChange:y=>E(y,"var")}),e.createElement(ce,null)):l==="g2"?e.createElement(e.Fragment,null,e.createElement("div",{className:"title"},"\u5168\u5C40\u53C2\u6570"),e.createElement(R,{activeKey:c,onChange:y=>u(y)},e.createElement(ee,{tab:"Params",key:"1"},e.createElement(T,{size:"small",tableData:p.query,tableTitle:"Query\u53C2\u6570",onEditChange:y=>m("query",y)})),e.createElement(ee,{tab:"Body",key:"2"},e.createElement(T,{size:"small",tableData:p.bodyFormData,onEditChange:y=>m("bodyFormData",y)})),e.createElement(ee,{tab:"Header",key:"3"},e.createElement(T,{size:"small",tableData:p.header,onEditChange:y=>m("header",y)})),e.createElement(ee,{tab:"Cookie",key:"4"},e.createElement(T,{size:"small",tableData:p.cookie,onEditChange:y=>m("cookie",y)}))),e.createElement(ce,null)):e.createElement(ht,{form:a,ckey:l,onChange:t,envList:s})});var gt=l=>{const{visible:t,setVisible:a}=l,[n,r]=d.exports.useState("e1"),[i,c]=d.exports.useState({type:"",data:null}),{request:u,data:h={}}=P("/api/debugger/getGlobalVar",{lazy:!0}),{request:f,loading:p}=P("/api/debugger/saveGlobalVar",{lazy:!0});d.exports.useEffect(()=>{t===!0&&u()},[t]);const[b]=N.useForm(),v=y=>{r(y)},s=()=>{a(!1)},E=(y,D)=>{c({data:y,type:D})},m=()=>{const{type:y,data:D}=i,g={type:y,data:D};n.substr(0,1)==="e"?(b.submit(),b.validateFields().then(B=>{g.form=B,f(g).then(()=>{X.success("\u4FDD\u5B58\u6210\u529F"),s()})})):f(g).then(()=>{X.success("\u4FDD\u5B58\u6210\u529F"),s()})};return e.createElement(ve,{title:"\u53D8\u91CF\u914D\u7F6E",width:1e3,visible:t,onCancel:s,onOk:m,okText:"\u4FDD\u5B58",cancelText:"\u53D6\u6D88",okButtonProps:{loading:p}},e.createElement("div",{className:"modal-env"},e.createElement("div",{className:"env-slider"},e.createElement("div",{className:"title"},"\u5168\u5C40"),e.createElement("div",{className:"env-list"},e.createElement("div",{className:`env-list__item ${n==="g1"?"active":""}`,onClick:()=>v("g1")},e.createElement("span",{className:"name"},"\u5168\u5C40\u53D8\u91CF")),e.createElement("div",{className:`env-list__item ${n==="g2"?"active":""}`,onClick:()=>v("g2")},e.createElement("span",{className:"name"},"\u5168\u5C40\u53C2\u6570"))),e.createElement("div",{className:"title"},"\u73AF\u5883"),e.createElement("div",{className:"env-list"},e.createElement("div",{className:`env-list__item ${n==="e1"?"active":""}`,onClick:()=>v("e1")},e.createElement("span",{className:"name"},"\u5F00\u53D1\u73AF\u5883")),e.createElement("div",{className:`env-list__item ${n==="e2"?"active":""}`,onClick:()=>v("e2")},e.createElement("span",{className:"name"},"\u6D4B\u8BD5\u73AF\u5883")),e.createElement("div",{className:`env-list__item ${n==="e3"?"active":""}`,onClick:()=>v("e3")},e.createElement("span",{className:"name"},"\u751F\u4EA7\u73AF\u5883")))),e.createElement("div",{className:"env-content"},e.createElement(bt,{ckey:n,onChange:E,form:b,globalData:h}))))};const{TabPane:Dt}=R,{Option:ie}=U,ke=[{title:"\u9879\u76EE\u6982\u89C8",content:"Content of Tab Pane 1",key:"1"}];var At=()=>{const l=Me(),[t,a]=d.exports.useState([...ke]),[n,r]=d.exports.useState(!1),[i,c]=d.exports.useState(ke[0].key),[u,h]=d.exports.useState([]),[f,p]=d.exports.useState([]),{request:b,data:v,setData:s}=P("/api/debugger/getCurrentEnv"),{request:E}=P("/api/debugger/toggleEnv",{lazy:!0}),{data:m,request:y}=P("/api/debugger/getList"),{request:D,loading:g}=P("/api/debugger/remove",{lazy:!0});d.exports.useEffect(()=>{h(rt(m))},[m]),d.exports.useEffect(()=>{const{hash:o}=window.location;if(o&&m){const k=o.substr(1);H(m,k,x=>{O(x)})}},[m,l,l.location]);const B=o=>{c(o)},C=(o,k)=>{k==="remove"&&typeof o=="string"&&j(o)},q=o=>{o.title!=="\u65B0\u5EFA\u63A5\u53E3"&&(window.location.hash=`${o.key}`)},O=o=>{const k=t[t.length-1];if(k.isNew&&o.title===k.title){c(k.key);return}o.key||(o.key=`newTab${t.length++}`);const x=t.find(V=>V&&V.key===o.key);if(x)c(x.key);else{const V=F({},o);a([...t,V].filter($=>$&&$.key)),c(V.key)}q(o)},j=o=>{let k="",x=i;t.forEach(($,xe)=>{$.key===o&&(k=xe-1)});const V=t.filter($=>$.key!==o);t.length&&i===o&&(k>=0?x=t[k].key:x=t[0].key),a([...V]),c(x)},G=o=>{s(o),E({env:o})},Q=()=>e.createElement(_,{className:"operations prp10"},e.createElement(U,{value:v,style:{width:120},onChange:G},e.createElement(ie,{value:"dev"},"\u5F00\u53D1\u73AF\u5883"),e.createElement(ie,{value:"test"},"\u6D4B\u8BD5\u73AF\u5883"),e.createElement(ie,{value:"prod"},"\u751F\u4EA7\u73AF\u5883")),e.createElement("span",{className:"icon",onClick:()=>r(!0)},e.createElement(Ue,null))),W=({pane:o})=>{if(y(),o&&o.isNew){const k=t.findIndex(x=>x.key===o.prevKey);k>-1&&(delete o.isNew,t.splice(k,1,o)),a([...t]),c(o.key),q(o)}},te=async o=>{o&&!g&&(await D({key:o}),y(),t.findIndex(x=>x.key===o)>-1&&(a(t.filter(x=>x.key!==o)),i===o&&c("1")))},A=(o,k)=>{h(x=>He(x,o,k)),p([...f,o])},J=(o,{expanded:k,node:x})=>{console.log("xx",o,k,x)};return e.createElement("div",{className:"container-debugger"},e.createElement(Ze,{addPane:O,expandedKeys:f,list:u,removeItem:te,removeLoading:g,onExpand:J}),e.createElement("div",{className:"container-content"},e.createElement(R,{className:"custom-tabs",hideAdd:!0,onChange:B,onEdit:C,activeKey:i,type:"editable-card",tabBarExtraContent:e.createElement(Q,null)},t.map(o=>e.createElement(Dt,{tab:o.title,key:o.key},e.createElement("div",{className:"tab-content"},e.createElement(yt,{pane:o,env:v,onSaveSuccess:W,addChildTree:A})))))),e.createElement(gt,{visible:n,setVisible:r}))};export{At as default};