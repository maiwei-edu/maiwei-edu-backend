import{f as A,u as M,b as K,r as a,t as O,j as e,B as S,d as U,S as q,E as G,m as H,M as J}from"./index-3fd54424.js";import{k as Q,m as V}from"./book-3be45c7b.js";import{B as W}from"./index-c3c15456.js";import{P as d}from"./index-df05a090.js";import{S as X}from"./index-ff4e3b6e.js";import{T as Y}from"./Table-59a53b18.js";import"./LeftOutlined-a0f8cfa6.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./addEventListener-1752243f.js";import"./Pagination-a2ebdf00.js";import"./useForceUpdate-56773729.js";import"./responsiveObserver-a0dea2e5.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";const{confirm:Z}=J,he=()=>{const i=new URLSearchParams(A().search),_=M(),m=K(),[u,o]=a.useState(!1),[y,p]=a.useState([]),[h,n]=a.useState(1),[x,g]=a.useState(100),[C,N]=a.useState(0),[r,f]=a.useState(!1),[b,j]=a.useState([]),[v,w]=a.useState([]),[l,B]=a.useState(Number(i.get("bid"))),[E,L]=a.useState(String(i.get("title")));a.useEffect(()=>{document.title="电子书文章管理",_(O("电子书文章管理"))},[]),a.useEffect(()=>{B(Number(i.get("bid"))),L(String(i.get("title")))},[i.get("bid"),i.get("title")]),a.useEffect(()=>{P()},[l,h,x,r]);const P=()=>{u||(o(!0),Q({page:h,size:x,sort:"published_at",order:"asc",book_id:l,chapter_id:b}).then(t=>{p(t.data.data.data),N(t.data.data.total);let s=t.data.chapters;const k=[];for(let c=0;c<s.length;c++)k.push({label:s[c].name,value:s[c].id});w(k),o(!1)}).catch(t=>{o(!1)}))},T=()=>{n(1),g(100),p([]),j([]),f(!r)},D=()=>{n(1),p([]),f(!r)},z={current:h,pageSize:x,total:C,onChange:(t,s)=>F(t,s),showSizeChanger:!0},F=(t,s)=>{n(t),g(s)},I=[{title:"ID",width:120,render:(t,s)=>e.jsx("span",{children:s.id})},{title:"标题",width:500,render:(t,s)=>e.jsxs(e.Fragment,{children:[s.chapter&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:s.chapter.name}),e.jsx("span",{className:"mx-5",children:"/"})]}),e.jsx("span",{children:s.title})]})},{title:"浏览",width:150,render:(t,s)=>e.jsxs("span",{children:[s.view_times,"次"]})},{title:"上架时间",dataIndex:"published_at",render:t=>e.jsx("span",{children:U(t)})},{title:"操作",width:120,fixed:"right",render:(t,s)=>e.jsxs(q,{children:[e.jsx(d,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.meedu_books.book_article.update",onClick:()=>{m("/meedubook/article/update?id="+s.id+"&bid="+l)},disabled:null}),e.jsx(d,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.meedu_books.book_article.delete",onClick:()=>{R(s.id)},disabled:null})]})}],R=t=>{t!==0&&Z({title:"警告",icon:e.jsx(G,{}),content:"确认操作？",centered:!0,okText:"确认",cancelText:"取消",onOk(){u||(o(!0),V(t).then(()=>{o(!1),H.success("删除成功"),D()}).catch(s=>{o(!1)}))},onCancel(){console.log("Cancel")}})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(W,{title:E}),e.jsxs("div",{className:"float-left j-b-flex mb-30 mt-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(d,{type:"primary",text:"添加",class:"",icon:null,p:"addons.meedu_books.book_article.store",onClick:()=>m("/meedubook/article/create?book_id="+l),disabled:null}),e.jsx(d,{type:"primary",text:"文章章节",class:"ml-10",icon:null,p:"addons.meedu_books.book_chapter.list",onClick:()=>m("/meedubook/chapter/index?bid="+l),disabled:null})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(X,{style:{width:150,marginLeft:10},value:b,onChange:t=>{j(t)},allowClear:!0,placeholder:"章节",options:v}),e.jsx(S,{className:"ml-10",onClick:T,children:"清空"}),e.jsx(S,{className:"ml-10",type:"primary",onClick:()=>{n(1),f(!r)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(Y,{loading:u,columns:I,dataSource:y,rowKey:t=>t.id,pagination:z})})]})};export{he as default};