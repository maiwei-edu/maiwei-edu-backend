import{f as v,u as S,r as s,t as b,j as t,d as w}from"./index-b4683d61.js";import{e as D}from"./tuangou-86f5d757.js";import{B as E}from"./index-5f967da4.js";import{T as m}from"./Table-76e623b5.js";import"./LeftOutlined-9e6e73a2.js";import"./addEventListener-a27ae3f4.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-c09cc6d7.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const H=()=>{const i=new URLSearchParams(v().search),u=S(),[r,d]=s.useState(!1),[T,f]=s.useState([]),[o,h]=s.useState([]),[_,p]=s.useState([]),[x,L]=s.useState(!1),[l,j]=s.useState(Number(i.get("id"))),[c,g]=s.useState(Number(i.get("tid")));s.useEffect(()=>{document.title="团列表详情",u(b("团列表详情"))},[]),s.useEffect(()=>{j(Number(i.get("id"))),g(Number(i.get("tid")))},[i.get("id"),i.get("tid")]),s.useEffect(()=>{N()},[l,c,x]);const N=()=>{r||(d(!0),D(l,c).then(e=>{f(e.data.item),h(e.data.users),p(e.data.goods),d(!1)}).catch(e=>{d(!1)}))},n=[{title:"ID",width:80,render:(e,a)=>t.jsx("span",{children:a.id})},{title:"团员",render:(e,a)=>t.jsxs(t.Fragment,{children:[a.user&&t.jsxs("div",{className:"user-item d-flex",children:[t.jsx("div",{className:"avatar",children:t.jsx("img",{src:a.user.avatar,width:"40",height:"40"})}),t.jsx("div",{className:"ml-10",children:a.user.nick_name})]}),!a.user&&t.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"加入日期",width:300,render:(e,a)=>t.jsx("div",{children:w(a.created_at)})}];return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(E,{title:"团列表详情"}),t.jsxs("div",{className:"float-left",children:[t.jsx("div",{className:"float-left mt-30 mb-30",children:"已支付团员："}),t.jsx("div",{className:"float-left",children:t.jsx(m,{loading:r,columns:n,dataSource:o[1],rowKey:e=>e.id,pagination:!1})}),t.jsx("div",{className:"float-left mt-30 mb-30",children:"未支付团员："}),t.jsx("div",{className:"float-left",children:t.jsx(m,{loading:r,columns:n,dataSource:o[0],rowKey:e=>e.id,pagination:!1})})]})]})};export{H as default};