import{f as N,u as V,b as B,r,t as L,cx as E,j as t,g as A,I as j,B as w,cy as D,m as P}from"./index-b4683d61.js";import{B as T}from"./index-5f967da4.js";import{U as k}from"./index-4432445b.js";import{Q as U}from"./index-353c72a4.js";import{F as i}from"./index-d434f3eb.js";import{S as Q}from"./index-918ef875.js";import{S as R}from"./index-c09cc6d7.js";import"./LeftOutlined-9e6e73a2.js";import"./InboxOutlined-1c6772bb.js";import"./selected-177ec16c.js";import"./Dragger-1df363a5.js";import"./useForceUpdate-f2aff5e0.js";import"./DeleteOutlined-8e7e99fd.js";import"./CheckOutlined-e6bc730e.js";import"./row-4ee18533.js";import"./responsiveObserver-dc429d3b.js";import"./useIcons-e0af7133.js";import"./Pagination-d2c763c6.js";import"./index-1a122d3f.js";const oe=()=>{const g=new URLSearchParams(N().search),S=V(),c=B(),[o]=i.useForm(),[y,d]=r.useState(!0),[v,_]=r.useState({}),[m,x]=r.useState({}),[n,F]=r.useState(String(g.get("key")));r.useEffect(()=>{document.title=n==="会员"?"用户注册":n,S(L(n==="会员"?"用户注册":n))},[n]),r.useEffect(()=>{F(String(g.get("key"))),b()},[g.get("key")]);const b=()=>{_({}),E().then(e=>{let a=e.data;for(let s in a)for(let f in a[s]){let l=a[s][f],h={};if(l.field_type==="image"){let p=m;p[l.key]=l.value,x(p)}if(l.field_type==="switch"?(h[l.key]=Number(l.value),o.setFieldsValue(h)):(h[l.key]=l.value,o.setFieldsValue(h)),l.field_type==="select"){let p=[];for(let u=0;u<l.option_value.length;u++)a[s][f].option_value[u].key+="",p.push({label:a[s][f].option_value[u].title,value:a[s][f].option_value[u].key});l.option_value=p}}_(a),d(!1)}).catch(e=>{d(!1)})},C=e=>{y||(d(!0),D({config:e}).then(a=>{d(!1),P.success("成功！"),b(),c(-1)}).catch(a=>{d(!1)}))},I=e=>{console.log("Failed:",e)};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(T,{title:n==="会员"?"用户注册":n}),y&&t.jsx("div",{style:{width:"100%",textAlign:"center",paddingTop:50,paddingBottom:30,boxSizing:"border-box"},children:t.jsx(A,{})}),!y&&t.jsx("div",{className:"float-left mt-30",children:t.jsx(i,{form:o,name:"system-normal-config",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:C,onFinishFailed:I,autoComplete:"off",children:v[n]&&v[n].map(e=>t.jsxs(i.Item,{label:e.name,name:e.key,children:[e.field_type==="text"&&t.jsx(i.Item,{name:e.key,children:t.jsx(j,{style:{width:300},allowClear:!0})}),e.field_type==="number"&&t.jsx(i.Item,{name:e.key,children:t.jsx(j,{type:"number",style:{width:300},allowClear:!0})}),e.field_type==="textarea"&&t.jsx(i.Item,{name:e.key,children:t.jsx(j.TextArea,{rows:3,style:{width:300},allowClear:!0})}),e.field_type==="longtext"&&t.jsx(i.Item,{name:e.key,children:t.jsx("div",{className:"w-800px",children:t.jsx(U,{mode:"",height:400,defautValue:e.value,isFormula:!1,setContent:a=>{let s={};s[e.key]=a,o.setFieldsValue(s)}})})}),e.name==="网站Logo"&&e.field_type==="image"&&t.jsx(i.Item,{name:e.key,children:t.jsx(k,{text:e.name,onSelected:a=>{let s={};s[e.key]=a,o.setFieldsValue(s),x(s)}})}),e.name==="默认头像"&&e.field_type==="image"&&t.jsx(i.Item,{name:e.key,children:t.jsx(k,{text:e.name,onSelected:a=>{let s={};s[e.key]=a,o.setFieldsValue(s),x(s)}})}),e.name!=="网站Logo"&&e.name!=="默认头像"&&e.field_type==="image"&&t.jsx(i.Item,{name:e.key,children:t.jsx(k,{text:e.name,onSelected:a=>{let s={};s[e.key]=a,o.setFieldsValue(s),x(s)}})}),e.field_type==="switch"&&t.jsx(i.Item,{name:e.key,valuePropName:"checked",children:t.jsx(Q,{onChange:a=>{if(a){let s={};s[e.key]=1,o.setFieldsValue(s)}else{let s={};s[e.key]=0,o.setFieldsValue(s)}}})}),e.field_type==="select"&&t.jsx(i.Item,{name:e.key,children:t.jsx(R,{style:{width:300},allowClear:!0,options:e.option_value})}),e.name==="网站Logo"&&e.field_type==="image"&&m[e.key]&&t.jsx("img",{src:m[e.key],width:200}),e.name==="默认头像"&&e.field_type==="image"&&m[e.key]&&t.jsx("img",{src:m[e.key],width:100}),e.name!=="网站Logo"&&e.name!=="默认头像"&&e.field_type==="image"&&m[e.key]&&t.jsx("img",{src:m[e.key]}),e.help&&t.jsx("div",{className:"form-helper-text",children:t.jsx("span",{children:e.help})})]},e.id))})}),t.jsx("div",{className:"bottom-menus",children:t.jsxs("div",{className:"bottom-menus-box",children:[t.jsx("div",{children:t.jsx(w,{loading:y,type:"primary",onClick:()=>o.submit(),children:"保存"})}),t.jsx("div",{className:"ml-24",children:t.jsx(w,{type:"default",onClick:()=>c(-1),children:"取消"})})]})})]})};export{oe as default};
