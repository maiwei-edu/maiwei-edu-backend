import{u as p,b,f as w,r as o,t as v,cx as S,j as s,g as C,I as a,B as f,cy as g,m as I}from"./index-b4683d61.js";import{B as F}from"./index-5f967da4.js";import{F as i}from"./index-d434f3eb.js";import{S as V}from"./index-c09cc6d7.js";import"./LeftOutlined-9e6e73a2.js";import"./row-4ee18533.js";import"./responsiveObserver-dc429d3b.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";const L=()=>{const k=p(),r=b(),[t]=i.useForm();new URLSearchParams(w().search);const[c,n]=o.useState(!0),[m,u]=o.useState(""),h=[{value:"public",label:"本地"},{value:"oss",label:"阿里云OSS"},{value:"cos",label:"腾讯云COS"},{value:"qiniu",label:"七牛云"}];o.useEffect(()=>{document.title="图片存储",k(v("图片存储")),y()},[]);const y=()=>{S().then(d=>{let e=d.data.图片存储;for(let l in e)e[l].key==="meedu.upload.image.disk"?(t.setFieldsValue({"meedu.upload.image.disk":e[l].value}),u(e[l].value)):e[l].key==="filesystems.disks.qiniu.domains.default"?t.setFieldsValue({"filesystems.disks.qiniu.domains.default":e[l].value}):e[l].key==="filesystems.disks.qiniu.domains.https"?t.setFieldsValue({"filesystems.disks.qiniu.domains.https":e[l].value}):e[l].key==="filesystems.disks.qiniu.access_key"?t.setFieldsValue({"filesystems.disks.qiniu.access_key":e[l].value}):e[l].key==="filesystems.disks.qiniu.secret_key"?t.setFieldsValue({"filesystems.disks.qiniu.secret_key":e[l].value}):e[l].key==="filesystems.disks.qiniu.bucket"?t.setFieldsValue({"filesystems.disks.qiniu.bucket":e[l].value}):e[l].key==="filesystems.disks.oss.access_id"?t.setFieldsValue({"filesystems.disks.oss.access_id":e[l].value}):e[l].key==="filesystems.disks.oss.access_key"?t.setFieldsValue({"filesystems.disks.oss.access_key":e[l].value}):e[l].key==="filesystems.disks.oss.bucket"?t.setFieldsValue({"filesystems.disks.oss.bucket":e[l].value}):e[l].key==="filesystems.disks.oss.endpoint"?t.setFieldsValue({"filesystems.disks.oss.endpoint":e[l].value}):e[l].key==="filesystems.disks.oss.cdnDomain"?t.setFieldsValue({"filesystems.disks.oss.cdnDomain":e[l].value}):e[l].key==="filesystems.disks.cos.region"?t.setFieldsValue({"filesystems.disks.cos.region":e[l].value}):e[l].key==="filesystems.disks.cos.credentials.appId"?t.setFieldsValue({"filesystems.disks.cos.credentials.appId":e[l].value}):e[l].key==="filesystems.disks.cos.credentials.secretId"?t.setFieldsValue({"filesystems.disks.cos.credentials.secretId":e[l].value}):e[l].key==="filesystems.disks.cos.credentials.secretKey"?t.setFieldsValue({"filesystems.disks.cos.credentials.secretKey":e[l].value}):e[l].key==="filesystems.disks.cos.bucket"?t.setFieldsValue({"filesystems.disks.cos.bucket":e[l].value}):e[l].key==="filesystems.disks.cos.cdn"&&t.setFieldsValue({"filesystems.disks.cos.cdn":e[l].value});n(!1)}).catch(d=>{n(!1)})},x=d=>{c||(n(!0),g({config:d}).then(e=>{n(!1),I.success("成功！"),y(),r(-1)}).catch(e=>{n(!1)}))},j=d=>{console.log("Failed:",d)};return s.jsxs("div",{className:"meedu-main-body",children:[s.jsx(F,{title:"图片存储"}),c&&s.jsx("div",{style:{width:"100%",textAlign:"center",paddingTop:50,paddingBottom:30,boxSizing:"border-box"},children:s.jsx(C,{})}),!c&&s.jsx("div",{className:"float-left mt-30",children:s.jsxs(i,{form:t,name:"system-imagesSave-config",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:x,onFinishFailed:j,autoComplete:"off",children:[s.jsx(i.Item,{label:"图片存储驱动",name:"meedu.upload.image.disk",children:s.jsx(V,{style:{width:300},onChange:d=>{u(d)},allowClear:!0,options:h})}),m==="oss"&&s.jsxs(s.Fragment,{children:[s.jsx(i.Item,{label:"阿里云OSS AccessKeyId",name:"filesystems.disks.oss.access_id",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"阿里云OSS AccessKeySecret",name:"filesystems.disks.oss.access_key",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"阿里云OSS Bucket",name:"filesystems.disks.oss.bucket",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsxs(i.Item,{label:"阿里云OSS Endpoint",name:"filesystems.disks.oss.endpoint",children:[s.jsx(i.Item,{name:"filesystems.disks.oss.endpoint",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx("div",{className:"form-helper-text",children:s.jsx("span",{children:"必须配置，否则无法上传图片"})})]}),s.jsxs(i.Item,{label:"阿里云OSS CDN加速域名",name:"filesystems.disks.oss.cdnDomain",children:[s.jsx(i.Item,{name:"filesystems.disks.oss.cdnDomain",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx("div",{className:"form-helper-text",children:s.jsx("span",{children:"必须配置，否则无法上传图片"})})]})]}),m==="cos"&&s.jsxs(s.Fragment,{children:[s.jsx(i.Item,{label:"腾讯云COS Region",name:"filesystems.disks.cos.region",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"腾讯云COS AppId",name:"filesystems.disks.cos.credentials.appId",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"腾讯云COS SecretId",name:"filesystems.disks.cos.credentials.secretId",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"腾讯云COS SecretKey",name:"filesystems.disks.cos.credentials.secretKey",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"腾讯云COS Bucket",name:"filesystems.disks.cos.bucket",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"腾讯云COS CDN域名",name:"filesystems.disks.cos.cdn",children:s.jsx(a,{style:{width:300},allowClear:!0})})]}),m==="qiniu"&&s.jsxs(s.Fragment,{children:[s.jsx(i.Item,{label:"七牛访问域名",name:"filesystems.disks.qiniu.domains.default",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"七牛访问域名(https)",name:"filesystems.disks.qiniu.domains.https",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"七牛AccessKey",name:"filesystems.disks.qiniu.access_key",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"七牛SecretKey",name:"filesystems.disks.qiniu.secret_key",children:s.jsx(a,{style:{width:300},allowClear:!0})}),s.jsx(i.Item,{label:"七牛Bucket",name:"filesystems.disks.qiniu.bucket",children:s.jsx(a,{style:{width:300},allowClear:!0})})]})]})}),s.jsx("div",{className:"bottom-menus",children:s.jsxs("div",{className:"bottom-menus-box",children:[s.jsx("div",{children:s.jsx(f,{loading:c,type:"primary",onClick:()=>t.submit(),children:"保存"})}),s.jsx("div",{className:"ml-24",children:s.jsx(f,{type:"default",onClick:()=>r(-1),children:"取消"})})]})})]})};export{L as default};
