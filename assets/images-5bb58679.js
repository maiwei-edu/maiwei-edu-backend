import{f as v,u as C,b as P,r as e,t as T,j as a,d as B,m as h,E as K,M as D}from"./index-b4683d61.js";import{l as F,d as M}from"./snapshot-aa142fe1.js";import{B as O}from"./index-5f967da4.js";import{P as U}from"./index-573a6ce5.js";import{T as $}from"./Table-76e623b5.js";import{I as A}from"./index-e35c971c.js";import"./LeftOutlined-9e6e73a2.js";import"./addEventListener-a27ae3f4.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-c09cc6d7.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const{confirm:q}=D,nt=()=>{const s=new URLSearchParams(v().search),f=C();P();const[i,o]=e.useState(!1),[p,n]=e.useState([]),[z,g]=e.useState(0),[d,x]=e.useState(!1),[G,S]=e.useState([]),[c,l]=e.useState([]),[b,j]=e.useState(Number(s.get("rid"))),[m,w]=e.useState(Number(s.get("other_id"))),[u,N]=e.useState(Number(s.get("user_id")));e.useEffect(()=>{document.title="查看照片",f(T("查看照片"))},[]),e.useEffect(()=>{j(Number(s.get("rid"))),w(Number(s.get("other_id"))),N(Number(s.get("user_id")))},[s.get("other_id"),s.get("user_id"),s.get("rid")]),e.useEffect(()=>{_()},[m,u,d]);const _=()=>{i||(o(!0),F({other_id:m,user_id:u}).then(t=>{n(t.data.data[0].images),g(t.data.total),o(!1),y(t.data.data[0].images)}).catch(t=>{o(!1)}))},y=t=>{const r=[];t.forEach(k=>{r.push(k.thumb)}),S(r)},E=()=>{n([]),l([]),x(!d)},L=[{title:"拍照时间",dataIndex:"created_at",render:t=>a.jsx("span",{children:B(t)})},{title:"操作",width:250,render:(t,r)=>a.jsx(A,{src:r.thumb,width:100,height:100})}],R=()=>{if(c.length===0){h.error("请选择需要操作的数据");return}q({title:"操作确认",icon:a.jsx(K,{}),content:"确认删除选中的图片？",centered:!0,okText:"确认",cancelText:"取消",onOk(){i||(o(!0),M({ids:c,rid:b}).then(()=>{h.success("成功"),E(),o(!1)}).catch(t=>{o(!1)}))},onCancel(){console.log("Cancel")}})},I={selectedRowKeys:c,onChange:(t,r)=>{l(t)}};return a.jsxs("div",{className:"meedu-main-body",children:[a.jsx(O,{title:"查看照片"}),a.jsx("div",{className:"float-left mb-30 mt-30",children:a.jsx(U,{type:"danger",text:"批量删除",class:"",icon:null,p:"addons.Snapshot.images.delete",onClick:()=>R(),disabled:null})}),a.jsx("div",{className:"float-left",children:a.jsx($,{rowSelection:{type:"checkbox",...I},loading:i,columns:L,dataSource:p,rowKey:t=>t.id,pagination:!1})})]})};export{nt as default};