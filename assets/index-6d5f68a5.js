import{f as b,u as k,b as P,r as a,t as w,j as t,S as E,E as L,m as v,M as C}from"./index-b4683d61.js";import{j as N,k as T}from"./path-6d6aef48.js";import{B}from"./index-5f967da4.js";import{P as o}from"./index-573a6ce5.js";import{T as D}from"./Table-76e623b5.js";import"./LeftOutlined-9e6e73a2.js";import"./addEventListener-a27ae3f4.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-c09cc6d7.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const{confirm:M}=C,X=()=>{const i=new URLSearchParams(b().search),m=k(),c=P(),[l,n]=a.useState(!1),[u,d]=a.useState([]),[p,h]=a.useState(!1),[r,f]=a.useState(Number(i.get("id"))),[x,g]=a.useState(String(i.get("title")));a.useEffect(()=>{document.title="学习步骤",m(w("学习步骤"))},[]),a.useEffect(()=>{f(Number(i.get("id"))),g(String(i.get("title")))},[i.get("id"),i.get("title")]),a.useEffect(()=>{j()},[r,p]);const j=()=>{l||(n(!0),N({path_id:r}).then(e=>{d(e.data),n(!1)}).catch(e=>{n(!1)}))},S=[{title:"排序",width:"7%",render:(e,s)=>t.jsx("span",{children:s.sort})},{title:"学习步骤",width:"15%",render:(e,s)=>t.jsx("span",{children:s.name})},{title:"课程数",width:"11%",render:(e,s)=>t.jsxs("span",{children:[s.courses_count,"课程"]})},{title:"步骤简介",width:"57%",render:(e,s)=>t.jsx("div",{dangerouslySetInnerHTML:{__html:s.desc}})},{title:"操作",width:"10%",fixed:"right",render:(e,s)=>t.jsxs(E,{children:[t.jsx(o,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.learnPaths.step.update",onClick:()=>{c("/learningpath/step/update?id="+s.id+"&path_id="+r)},disabled:null}),t.jsx(o,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.learnPaths.step.delete",onClick:()=>{y(s.id)},disabled:null})]})}],_=()=>{d([]),h(!p)},y=e=>{e!==0&&M({title:"操作确认",icon:t.jsx(L,{}),content:"确认删除此步骤？",centered:!0,okText:"确认",cancelText:"取消",onOk(){l||(n(!0),T(e).then(()=>{n(!1),v.success("删除成功"),_()}).catch(s=>{n(!1)}))},onCancel(){console.log("Cancel")}})};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(B,{title:x}),t.jsx("div",{className:"float-left  mt-30 mb-30",children:t.jsx(o,{type:"primary",text:"添加步骤",class:"",icon:null,p:"addons.learnPaths.step.store",onClick:()=>c("/learningpath/step/create?path_id="+r),disabled:null})}),t.jsx("div",{className:"float-left",children:t.jsx(D,{loading:l,columns:S,dataSource:u,rowKey:e=>e.id,pagination:!1})})]})};export{X as default};
