import{u as _,b as g,r,a as O,t as T,cx as b,j as e,g as y,I as i,B as c,cy as v,m as I}from"./index-b4683d61.js";import{B as F}from"./index-5f967da4.js";import{F as d}from"./index-d434f3eb.js";import{S}from"./index-918ef875.js";import"./LeftOutlined-9e6e73a2.js";import"./row-4ee18533.js";import"./responsiveObserver-dc429d3b.js";const D=()=>{const u=_(),o=g(),[l]=d.useForm(),[m,n]=r.useState(!0),x=O(t=>t.enabledAddonsConfig.value.enabledAddons);r.useEffect(()=>{document.title="IOS配置",u(T("IOS配置")),p()},[]);const p=()=>{b().then(t=>{let a=t.data.立春模板;for(let s in a)a[s].key==="meedu.addons.TemplateOne.apple.product_ids"?l.setFieldsValue({"meedu.addons.TemplateOne.apple.product_ids":a[s].value}):a[s].key==="meedu.addons.TemplateOne.apple.app_bundle_id"?l.setFieldsValue({"meedu.addons.TemplateOne.apple.app_bundle_id":a[s].value}):a[s].key==="meedu.addons.TemplateOne.apple.credit2_name"?l.setFieldsValue({"meedu.addons.TemplateOne.apple.credit2_name":a[s].value}):a[s].key==="meedu.addons.TemplateOne.apple.credit2_exchange_rate"?l.setFieldsValue({"meedu.addons.TemplateOne.apple.credit2_exchange_rate":a[s].value}):a[s].key==="meedu.addons.TemplateOne.app.ios_key"?l.setFieldsValue({"meedu.addons.TemplateOne.app.ios_key":a[s].value}):a[s].key==="meedu.addons.TemplateOne.app.ios_free_login"&&l.setFieldsValue({"meedu.addons.TemplateOne.app.ios_free_login":Number(a[s].value)});n(!1)}).catch(t=>{n(!1)})},h=t=>{m||(n(!0),v({config:t}).then(a=>{n(!1),I.success("成功！"),p(),o(-1)}).catch(a=>{n(!1)}))},f=t=>{console.log("Failed:",t)},j=t=>{t?l.setFieldsValue({"meedu.addons.TemplateOne.app.ios_free_login":1}):l.setFieldsValue({"meedu.addons.TemplateOne.app.ios_free_login":0})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(F,{title:"IOS配置"}),m&&e.jsx("div",{style:{width:"100%",textAlign:"center",paddingTop:50,paddingBottom:30,boxSizing:"border-box"},children:e.jsx(y,{})}),!m&&e.jsx("div",{className:"float-left",children:e.jsx(d,{form:l,name:"system-IOS-config",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:h,onFinishFailed:f,autoComplete:"off",children:x.TemplateOne===1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"from-title mt-30",children:"苹果支付"}),e.jsx(d.Item,{label:"苹果App BundleID",name:"meedu.addons.TemplateOne.apple.app_bundle_id",children:e.jsx(i,{style:{width:300},allowClear:!0})}),e.jsxs(d.Item,{label:"苹果App虚拟货币名",name:"meedu.addons.TemplateOne.apple.credit2_name",children:[e.jsx(d.Item,{name:"meedu.addons.TemplateOne.apple.credit2_name",children:e.jsx(i,{style:{width:300},allowClear:!0})}),e.jsx("div",{className:"form-helper-text",children:e.jsx("span",{children:"请填写1元人民币换算后的虚拟货币数值"})})]}),e.jsxs(d.Item,{label:"苹果App虚拟货币汇率",name:"meedu.addons.TemplateOne.apple.credit2_exchange_rate",children:[e.jsx(d.Item,{name:"meedu.addons.TemplateOne.apple.credit2_exchange_rate",children:e.jsx(i,{style:{width:300},allowClear:!0})}),e.jsx("div",{className:"form-helper-text",children:e.jsx("span",{children:"请填写1元人民币换算后的虚拟货币数值"})})]}),e.jsx(d.Item,{label:"苹果产品id参数",name:"meedu.addons.TemplateOne.apple.product_ids",children:e.jsx(i.TextArea,{rows:3,style:{width:300},allowClear:!0})}),e.jsx("div",{className:"from-title mt-30",children:"IOS开发"}),e.jsx(d.Item,{label:"苹果IOS-应用key",name:"meedu.addons.TemplateOne.app.ios_key",children:e.jsx(i,{style:{width:300},allowClear:!0})}),e.jsx(d.Item,{label:"苹果IOS-游客模式",name:"meedu.addons.TemplateOne.app.ios_free_login",valuePropName:"checked",children:e.jsx(S,{onChange:j})})]})})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(c,{loading:m,type:"primary",onClick:()=>l.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(c,{type:"default",onClick:()=>o(-1),children:"取消"})})]})})]})};export{D as default};
