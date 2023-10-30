import{u as _,b as f,f as k,r as d,t as v,cx as I,j as e,g as F,I as n,B as w,cy as C,m as V}from"./index-b4683d61.js";import{B as S}from"./index-5f967da4.js";import{F as t}from"./index-d434f3eb.js";import{S as g}from"./index-c09cc6d7.js";import"./LeftOutlined-9e6e73a2.js";import"./row-4ee18533.js";import"./responsiveObserver-dc429d3b.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";const z=()=>{const p=_(),u=f(),[l]=t.useForm();new URLSearchParams(k().search);const[r,m]=d.useState(!0),[y,c]=d.useState(""),x=[{value:"aliyun",label:"阿里云"},{value:"tencent",label:"腾讯云"},{value:"yunpian",label:"云片"}],h=[{value:"ap-beijing",label:"华北地区（北京）"},{value:"ap-guangzhou",label:"华南地区（广州）"},{value:"ap-nanjing",label:"华东地区（南京）"}];d.useEffect(()=>{document.title="短信",p(v("短信")),o()},[]);const o=()=>{I().then(i=>{let s=i.data.短信;for(let a in s)s[a].key==="meedu.system.sms"?(l.setFieldsValue({"meedu.system.sms":s[a].value}),c(s[a].value)):s[a].key==="sms.gateways.aliyun.access_key_id"?l.setFieldsValue({"sms.gateways.aliyun.access_key_id":s[a].value}):s[a].key==="sms.gateways.aliyun.access_key_secret"?l.setFieldsValue({"sms.gateways.aliyun.access_key_secret":s[a].value}):s[a].key==="sms.gateways.aliyun.sign_name"?l.setFieldsValue({"sms.gateways.aliyun.sign_name":s[a].value}):s[a].key==="sms.gateways.aliyun.template.password_reset"?l.setFieldsValue({"sms.gateways.aliyun.template.password_reset":s[a].value}):s[a].key==="sms.gateways.aliyun.template.register"?l.setFieldsValue({"sms.gateways.aliyun.template.register":s[a].value}):s[a].key==="sms.gateways.aliyun.template.mobile_bind"?l.setFieldsValue({"sms.gateways.aliyun.template.mobile_bind":s[a].value}):s[a].key==="sms.gateways.aliyun.template.login"?l.setFieldsValue({"sms.gateways.aliyun.template.login":s[a].value}):s[a].key==="sms.gateways.tencent.sdk_app_id"?l.setFieldsValue({"sms.gateways.tencent.sdk_app_id":s[a].value}):s[a].key==="sms.gateways.tencent.region"?l.setFieldsValue({"sms.gateways.tencent.region":s[a].value}):s[a].key==="sms.gateways.tencent.secret_id"?l.setFieldsValue({"sms.gateways.tencent.secret_id":s[a].value}):s[a].key==="sms.gateways.tencent.secret_key"?l.setFieldsValue({"sms.gateways.tencent.secret_key":s[a].value}):s[a].key==="sms.gateways.tencent.sign_name"?l.setFieldsValue({"sms.gateways.tencent.sign_name":s[a].value}):s[a].key==="sms.gateways.tencent.template.password_reset"?l.setFieldsValue({"sms.gateways.tencent.template.password_reset":s[a].value}):s[a].key==="sms.gateways.tencent.template.register"?l.setFieldsValue({"sms.gateways.tencent.template.register":s[a].value}):s[a].key==="sms.gateways.tencent.template.mobile_bind"?l.setFieldsValue({"sms.gateways.tencent.template.mobile_bind":s[a].value}):s[a].key==="sms.gateways.tencent.template.login"?l.setFieldsValue({"sms.gateways.tencent.template.login":s[a].value}):s[a].key==="sms.gateways.yunpian.api_key"?l.setFieldsValue({"sms.gateways.yunpian.api_key":s[a].value}):s[a].key==="sms.gateways.yunpian.template.password_reset"?l.setFieldsValue({"sms.gateways.yunpian.template.password_reset":s[a].value}):s[a].key==="sms.gateways.yunpian.template.register"?l.setFieldsValue({"sms.gateways.yunpian.template.register":s[a].value}):s[a].key==="sms.gateways.yunpian.template.mobile_bind"?l.setFieldsValue({"sms.gateways.yunpian.template.mobile_bind":s[a].value}):s[a].key==="sms.gateways.yunpian.template.login"&&l.setFieldsValue({"sms.gateways.yunpian.template.login":s[a].value});m(!1)}).catch(i=>{m(!1)})},j=i=>{r||(m(!0),C({config:i}).then(s=>{m(!1),V.success("成功！"),o(),u(-1)}).catch(s=>{m(!1)}))},b=i=>{console.log("Failed:",i)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(S,{title:"短信"}),r&&e.jsx("div",{style:{width:"100%",textAlign:"center",paddingTop:50,paddingBottom:30,boxSizing:"border-box"},children:e.jsx(F,{})}),!r&&e.jsx("div",{className:"float-left",children:e.jsxs(t,{form:l,name:"system-message-config",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:j,onFinishFailed:b,autoComplete:"off",children:[e.jsx("div",{className:"from-title mt-30",children:"短信服务商配置"}),e.jsx(t.Item,{label:"短信服务商",name:"meedu.system.sms",children:e.jsx(g,{style:{width:300},onChange:i=>{c(i)},allowClear:!0,options:x})}),y==="aliyun"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"阿里云 AccessKeyId",name:"sms.gateways.aliyun.access_key_id",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"阿里云 AccessKeySecret",name:"sms.gateways.aliyun.access_key_secret",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"阿里云 短信签名",name:"sms.gateways.aliyun.sign_name",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"阿里云 密码重置模板ID",name:"sms.gateways.aliyun.template.password_reset",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"阿里云 注册模板ID",name:"sms.gateways.aliyun.template.register",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"阿里云 手机号绑定模板ID",name:"sms.gateways.aliyun.template.mobile_bind",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"阿里云 手机号登录模板ID",name:"sms.gateways.aliyun.template.login",children:e.jsx(n,{style:{width:300},allowClear:!0})})]}),y==="tencent"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"腾讯云短信 SdkAppId",name:"sms.gateways.tencent.sdk_app_id",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云短信 Region",name:"sms.gateways.tencent.region",children:e.jsx(g,{style:{width:300},allowClear:!0,options:h})}),e.jsx(t.Item,{label:"腾讯云短信 SecretId",name:"sms.gateways.tencent.secret_id",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云短信 SecretKey",name:"sms.gateways.tencent.secret_key",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云短信 SignName",name:"sms.gateways.tencent.sign_name",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云 密码重置模板ID",name:"sms.gateways.tencent.template.password_reset",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云 注册模板ID",name:"sms.gateways.tencent.template.register",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云 手机号绑定模板ID",name:"sms.gateways.tencent.template.mobile_bind",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"腾讯云 手机号登录模板ID",name:"sms.gateways.tencent.template.login",children:e.jsx(n,{style:{width:300},allowClear:!0})})]}),y==="yunpian"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"云片ApiKey",name:"sms.gateways.yunpian.api_key",children:e.jsx(n,{style:{width:300},allowClear:!0})}),e.jsxs(t.Item,{label:"云片密码重置模板",name:"sms.gateways.yunpian.template.password_reset",children:[e.jsx(t.Item,{name:"sms.gateways.yunpian.template.password_reset",children:e.jsx(n.TextArea,{rows:3,style:{width:300},allowClear:!0})}),e.jsx("div",{className:"form-helper-text",children:e.jsx("span",{children:"注意：云片短信不是填写模板ID，而是填写模板内容"})})]}),e.jsx(t.Item,{label:"云片注册模板",name:"sms.gateways.yunpian.template.register",children:e.jsx(n.TextArea,{rows:3,style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"云片手机号绑定模板",name:"sms.gateways.yunpian.template.mobile_bind",children:e.jsx(n.TextArea,{rows:3,style:{width:300},allowClear:!0})}),e.jsx(t.Item,{label:"云片手机号登陆模板",name:"sms.gateways.yunpian.template.login",children:e.jsx(n.TextArea,{rows:3,style:{width:300},allowClear:!0})})]})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(w,{loading:r,type:"primary",onClick:()=>l.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(w,{type:"default",onClick:()=>u(-1),children:"取消"})})]})})]})};export{z as default};
