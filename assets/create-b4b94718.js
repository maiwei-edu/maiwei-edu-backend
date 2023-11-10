import{u as Q,b as U,r as i,t as W,j as e,B as h,I as p,S as C,m as u}from"./index-3fd54424.js";import{c as D,s as G}from"./creditMall-114b4416.js";import{B as K}from"./index-c3c15456.js";import{H as S}from"./index-d5d1e443.js";import{U as L}from"./index-edf85c8b.js";import{S as $}from"./index-28ac63f6.js";import{Q as z}from"./index-019b594b.js";import{F as t}from"./index-0ca68444.js";import{T as J}from"./index-47408a6e.js";import{S as _}from"./index-27712364.js";import{S as O}from"./index-ff4e3b6e.js";import{R as X,C as w}from"./row-98a37fbf.js";import"./LeftOutlined-a0f8cfa6.js";import"./InfoCircleOutlined-fefc69ce.js";import"./InboxOutlined-35d156a9.js";import"./selected-7e6221ce.js";import"./Dragger-3ad849c3.js";import"./useForceUpdate-56773729.js";import"./DeleteOutlined-529a4ffa.js";import"./CheckOutlined-44e74bd9.js";import"./useIcons-235bc0cd.js";import"./Pagination-a2ebdf00.js";import"./responsiveObserver-a0dea2e5.js";import"./course-c58bd7af.js";import"./Table-59a53b18.js";import"./addEventListener-1752243f.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";import"./live-9d1ed6d0.js";import"./role-ccbd4852.js";import"./book-3be45c7b.js";import"./path-1a3bf99e.js";import"./topic-e7e1a389.js";import"./paper-57a0cabd.js";import"./practice-c882748e.js";import"./mock-e0c98417.js";import"./index-749454db.js";import"./PlusOutlined-18e71fec.js";const Ee=()=>{const[l]=t.useForm(),F=Q(),x=U(),[o,n]=i.useState(!1),[j,b]=i.useState(0),[m,I]=i.useState("base"),[k,V]=i.useState([]),[N,c]=i.useState(!1),[d,T]=i.useState(""),[f,g]=i.useState(""),[y,R]=i.useState(""),B=[{key:"base",label:"基础信息"},{key:"dev",label:"可选信息"}];i.useEffect(()=>{document.title="新建积分商品",F(W("新建积分商品")),l.setFieldsValue({is_show:1,is_v:0}),q()},[]);const q=()=>{D().then(s=>{let a=s.data.types;const v=[];for(let r=0;r<a.length;r++)v.push({label:a[r].name,value:a[r].value});V(v)})},A=s=>{I(s)},E=s=>{if(!o){if(s.is_v===0&&l.setFieldsValue({v_type:null,v_id:null}),s.is_v===1&&!s.v_type){u.error("请选择虚拟商品类型");return}if(s.is_v===1&&s.v_type&&!s.v_id){u.error("请选择虚拟商品");return}n(!0),G(s).then(a=>{n(!1),u.success("保存成功！"),x(-1)}).catch(a=>{n(!1)})}},P=s=>{console.log("Failed:",s)},H=s=>{s?l.setFieldsValue({is_show:1}):l.setFieldsValue({is_show:0})},M=s=>{s?(l.setFieldsValue({is_v:1}),b(1)):(l.setFieldsValue({is_v:0}),b(0))};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(K,{title:"新建积分商品"}),e.jsx($,{open:N,enabledResource:y,onCancel:()=>c(!1),onSelected:s=>{l.setFieldsValue({v_id:s.id,title:s.title,thumb:s.thumb}),T(s.title),g(s.thumb),c(!1)}}),e.jsx("div",{className:"center-tabs mb-30",children:e.jsx(J,{defaultActiveKey:m,items:B,onChange:A})}),e.jsx("div",{className:"float-left",children:e.jsxs(t,{form:l,name:"creditMall-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:E,onFinishFailed:P,autoComplete:"off",children:[e.jsxs("div",{style:{display:m==="base"?"block":"none"},children:[e.jsx(t.Item,{label:"是否虚拟商品",name:"is_v",valuePropName:"checked",children:e.jsx(_,{onChange:M})}),j===1&&e.jsx(t.Item,{name:"v_type",label:"虚拟商品类型",children:e.jsx(O,{style:{width:300},allowClear:!0,placeholder:"请选择虚拟商品类型",options:k,onChange:s=>{R(s)}})}),j===1&&y&&e.jsx(t.Item,{label:"虚拟商品",name:"v_id",children:e.jsxs(h,{loading:o,type:"primary",onClick:()=>c(!0),children:[d&&e.jsxs("span",{children:["已选择「",d,"」"]}),!d&&e.jsx("span",{children:"选择商品"})]})}),e.jsx(t.Item,{label:"商品名",name:"title",rules:[{required:!0,message:"请输入商品名!"}],children:e.jsx(p,{style:{width:300},placeholder:"请输入商品名",allowClear:!0})}),e.jsx(t.Item,{label:"商品封面",name:"thumb",rules:[{required:!0,message:"请上传商品封面!"}],children:e.jsx(L,{text:"上传封面",onSelected:s=>{l.setFieldsValue({thumb:s}),g(s)}})}),f&&e.jsxs(X,{style:{marginBottom:22},children:[e.jsx(w,{span:3}),e.jsx(w,{span:21,children:e.jsx("div",{className:"contain-thumb-box",style:{backgroundImage:`url(${f})`,width:400,height:400,backgroundColor:"#f4fafe"}})})]}),e.jsx(t.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(C,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(p,{style:{width:300},placeholder:"单位：积分",allowClear:!0,type:"number"})}),e.jsx("div",{className:"ml-10",children:e.jsx(S,{text:"价格最小单位为：积分，不支持小数"})})]})}),e.jsx(t.Item,{label:"介绍",name:"desc",rules:[{required:!0,message:"请输入介绍!"}],style:{height:440},children:e.jsx(z,{mode:"",height:400,defautValue:"",isFormula:!1,setContent:s=>{l.setFieldsValue({desc:s})}})}),e.jsx(t.Item,{label:"库存",name:"stock_count",rules:[{required:!0,message:"请输入库存!"}],children:e.jsx(p,{type:"number",style:{width:300},placeholder:"商品库存数量",allowClear:!0})})]}),e.jsx("div",{style:{display:m==="dev"?"block":"none"},children:e.jsx(t.Item,{label:"显示",name:"is_show",children:e.jsxs(C,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_show",valuePropName:"checked",children:e.jsx(_,{onChange:H})}),e.jsx("div",{className:"ml-10",children:e.jsx(S,{text:"控制用户是否能看到该商品"})})]})})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(h,{loading:o,type:"primary",onClick:()=>l.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(h,{type:"default",onClick:()=>x(-1),children:"取消"})})]})})]})};export{Ee as default};