import{u as N,b as q,r,t as k,j as e,B as p,S as a,I as h,m as o,h as g}from"./index-b4683d61.js";import{s as F}from"./tuangou-86f5d757.js";import{B as H}from"./index-5f967da4.js";import{H as l}from"./index-133d6e1c.js";import{S as M}from"./index-ea4492e3.js";import{F as s}from"./index-d434f3eb.js";import{D as R}from"./index-cc7d88a3.js";import"./LeftOutlined-9e6e73a2.js";import"./InfoCircleOutlined-4d24221b.js";import"./course-7dc1c12e.js";import"./Table-76e623b5.js";import"./addEventListener-a27ae3f4.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-c09cc6d7.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";import"./live-ef2dd82c.js";import"./role-513b287e.js";import"./book-a8b4ca06.js";import"./path-6d6aef48.js";import"./topic-842c58e2.js";import"./paper-7f0d6524.js";import"./practice-e65e37d7.js";import"./mock-274446b7.js";import"./index-d198db66.js";import"./PlusOutlined-c97c4cac.js";import"./row-4ee18533.js";const{RangePicker:T}=R,he=()=>{const[m]=s.useForm(),j=N(),u=q(),[n,c]=r.useState(!1),[i,f]=r.useState(""),[b,_]=r.useState(""),[y,x]=r.useState(""),[S,w]=r.useState(""),[C,d]=r.useState(!1);r.useEffect(()=>{document.title="新建团购活动",j(k("新建团购活动"))},[]);const Y=t=>{if(!n){if(t.charge<0){o.error("请输入正确的团购价");return}if(t.people_num<2){o.error("组团成功人数最少为2个");return}if(t.time_limit<0){o.error("请输入正确的有效期");return}c(!0),t.goods_type=y,t.original_charge=S,t.goods_title=i,t.goods_thumb=b,t.other_id=t.goods_id,t.ended_at=g(new Date(t.started_at[1])).format("YYYY-MM-DD HH:mm"),t.started_at=g(new Date(t.started_at[0])).format("YYYY-MM-DD HH:mm"),F(t).then(I=>{c(!1),o.success("保存成功！"),u(-1)}).catch(I=>{c(!1)})}},D=t=>{console.log("Failed:",t)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(H,{title:"新建团购活动"}),e.jsx(M,{open:C,enabledResource:"vod,live,book,learnPath",onCancel:()=>d(!1),onSelected:t=>{m.setFieldsValue({goods_id:t.id}),f(t.title),_(t.thumb),t.resource_type==="vod"?x("course"):x(t.resource_type),w(t.original_charge),d(!1)}}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(s,{form:m,name:"tuangou-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:Y,onFinishFailed:D,autoComplete:"off",children:[e.jsx(s.Item,{label:"商品",name:"goods_id",rules:[{required:!0,message:"请选择商品!"}],children:e.jsxs(p,{loading:n,type:"primary",onClick:()=>d(!0),children:[i&&e.jsxs("span",{children:["已选择「",i,"」"]}),!i&&e.jsx("span",{children:"选择商品"})]})}),e.jsx(s.Item,{label:"团购价",name:"charge",rules:[{required:!0,message:"请输入团购价!"}],children:e.jsxs(a,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"charge",rules:[{required:!0,message:"请输入团购价!"}],children:e.jsx(h,{style:{width:300},placeholder:"请输入团购价",allowClear:!0,type:"number"})}),e.jsx("div",{className:"ml-10",children:e.jsx(l,{text:"最小单位：元。不支持小数。"})})]})}),e.jsx(s.Item,{label:"组团成功人数",name:"people_num",rules:[{required:!0,message:"请输入组团成功人数!"}],children:e.jsxs(a,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"people_num",rules:[{required:!0,message:"请输入组团成功人数!"}],children:e.jsx(h,{type:"number",style:{width:300},placeholder:"请输入组团成功人数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(l,{text:"组团达到指定人数即为组团成功。原则上最少为2个人。"})})]})}),e.jsx(s.Item,{label:"有效期",name:"time_limit",rules:[{required:!0,message:"请输入有效期!"}],children:e.jsxs(a,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"time_limit",rules:[{required:!0,message:"请输入有效期!"}],children:e.jsx(h,{type:"number",style:{width:300},placeholder:"单位：天",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(l,{text:"团长开团时刻起多少天内有效，失败的话将自动转为退款订单"})})]})}),e.jsx(s.Item,{label:"活动时间",required:!0,children:e.jsxs(a,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"started_at",rules:[{required:!0,message:"请输入活动时间!"}],children:e.jsx(T,{format:"YYYY-MM-DD HH:mm",showTime:!0,placeholder:["开始时间","结束时间"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(l,{text:"团购开始时间，时间达到之后，学员才能参与团购"})})]})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(p,{loading:n,type:"primary",onClick:()=>m.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(p,{type:"default",onClick:()=>u(-1),children:"取消"})})]})})]})};export{he as default};
