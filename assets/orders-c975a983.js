import{u as R,b as Y,r as a,t as K,j as e,I as S,B as C,d as M,h as G}from"./index-3fd54424.js";import{o as O}from"./tuangou-cc2a4f55.js";import{B as U}from"./index-c3c15456.js";import{P as q}from"./index-df05a090.js";import{T as H}from"./index-04a133fc.js";import{S as J}from"./index-ff4e3b6e.js";import{T as Q}from"./Table-59a53b18.js";import{D as V}from"./index-a9db941d.js";import{T as b}from"./index-2c039b27.js";import"./LeftOutlined-a0f8cfa6.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./addEventListener-1752243f.js";import"./Pagination-a2ebdf00.js";import"./useForceUpdate-56773729.js";import"./responsiveObserver-a0dea2e5.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";const{RangePicker:W}=V,pe=()=>{const y=R(),N=Y(),[d,r]=a.useState(!1),[_,c]=a.useState([]),[l,o]=a.useState(1),[i,u]=a.useState(10),[k,T]=a.useState(0),[n,m]=a.useState(!1),[h,g]=a.useState(""),[p,x]=a.useState(""),[f,j]=a.useState(-1),[D,v]=a.useState([]),[P,w]=a.useState([]),B=[{value:-1,label:"全部"},{value:0,label:"未支付"},{value:1,label:"已支付"}];a.useEffect(()=>{document.title="团购订单",y(K("团购订单"))},[]),a.useEffect(()=>{L()},[l,i,n]);const L=()=>{d||(r(!0),O({page:l,size:i,keywords:h,user_id:p,status:f,created_at:D}).then(t=>{c(t.data.data.data),T(t.data.data.total),r(!1)}).catch(t=>{r(!1)}))},z=()=>{o(1),u(10),c([]),j(-1),g(""),x(""),w([]),v([]),m(!n)},A={current:l,pageSize:i,total:k,onChange:(t,s)=>E(t,s),showSizeChanger:!0},E=(t,s)=>{o(t),u(s)},F=[{title:"商品名称",width:400,render:(t,s)=>e.jsxs(e.Fragment,{children:[!s.goods&&e.jsx("span",{className:"c-red",children:"商品已删除"}),s.goods&&e.jsx(H,{value:s.goods.goods_thumb,width:120,height:90,title:s.goods.goods_title,border:4})]})},{title:"学员",width:300,render:(t,s)=>e.jsxs(e.Fragment,{children:[s.user&&e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:s.user.avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:s.user.nick_name})]}),!s.user&&e.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"团购价",width:200,render:(t,s)=>e.jsxs("div",{children:[s.charge,"元"]})},{title:"状态",width:100,render:(t,s)=>e.jsxs(e.Fragment,{children:[s.status===1&&e.jsx(b,{color:"success",children:"已支付"}),s.status!==1&&e.jsx(b,{color:"default",children:"未支付"})]})},{title:"时间",width:200,render:(t,s)=>e.jsx("div",{children:M(s.created_at)})}],I=t=>t&&t>=G().add(0,"days");return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(U,{title:"团购订单"}),e.jsxs("div",{className:"float-left j-b-flex mb-30 mt-30",children:[e.jsx("div",{className:"d-flex",children:e.jsx(q,{type:"primary",text:"退款订单",class:"",icon:null,p:"addons.TuanGou.refund",onClick:()=>N("/tuangou/goods/refund"),disabled:null})}),e.jsxs("div",{className:"d-flex",children:[e.jsx(S,{value:h,onChange:t=>{g(t.target.value)},allowClear:!0,style:{width:150},placeholder:"商品名称关键字"}),e.jsx(S,{value:p,onChange:t=>{x(t.target.value)},allowClear:!0,style:{width:150,marginLeft:10},placeholder:"学员ID"}),e.jsx(J,{style:{width:150,marginLeft:10},value:f,onChange:t=>{j(t)},allowClear:!0,placeholder:"状态",options:B}),e.jsx(W,{disabledDate:I,format:"YYYY-MM-DD",value:P,style:{marginLeft:10},onChange:(t,s)=>{s[1]+=" 23:59:59",v(s),w(t)},placeholder:["开始日期","结束日期"]}),e.jsx(C,{className:"ml-10",onClick:z,children:"清空"}),e.jsx(C,{className:"ml-10",type:"primary",onClick:()=>{o(1),m(!n)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(Q,{loading:d,columns:F,dataSource:_,rowKey:t=>t.id,pagination:A})})]})};export{pe as default};