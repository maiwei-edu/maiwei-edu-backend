import{u as v,b as E,r as a,t as N,j as t,B as c,S as T,E as b,m as z,M as P}from"./index-3fd54424.js";import{l as D,d as I}from"./singlepage-a57d638c.js";import{T as _}from"./Table-59a53b18.js";import"./addEventListener-1752243f.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./Pagination-a2ebdf00.js";import"./LeftOutlined-a0f8cfa6.js";import"./useForceUpdate-56773729.js";import"./responsiveObserver-a0dea2e5.js";import"./index-ff4e3b6e.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";const{confirm:B}=P,V=()=>{const u=v(),l=E(),[i,n]=a.useState(!1),[h,d]=a.useState([]),[r,p]=a.useState(1),[o,f]=a.useState(10),[g,L]=a.useState(0),[m,x]=a.useState(!1);a.useEffect(()=>{document.title="单页面",u(N("单页面"))},[]),a.useEffect(()=>{j()},[r,o,m]);const j=()=>{i||(n(!0),D({page:r,size:o}).then(e=>{d(e.data.data),n(!1)}).catch(e=>{n(!1)}))},S=[{title:"唯一标识",width:150,render:(e,s)=>t.jsx("span",{children:s.sign})},{title:"标题",width:280,dataIndex:"title",render:e=>t.jsx("span",{children:e})},{title:"地址",dataIndex:"url",render:e=>t.jsx("span",{children:e})},{title:"浏览次数",width:150,dataIndex:"view_times",render:e=>t.jsxs("span",{children:[e,"次"]})},{title:"操作",width:120,render:(e,s)=>t.jsxs(T,{children:[t.jsx(c,{type:"link",className:"c-primary",onClick:()=>{l("/singlepage/update?id="+s.id)},children:"编辑"}),t.jsx(c,{type:"link",className:"c-red",onClick:()=>{C(s.id)},children:"删除"})]})}],y=()=>{p(1),d([]),x(!m)},C=e=>{e!==0&&B({title:"操作确认",icon:t.jsx(b,{}),content:"确认删除此页面？",centered:!0,okText:"确认",cancelText:"取消",onOk(){i||(n(!0),I(e).then(()=>{n(!1),z.success("删除成功"),y()}).catch(s=>{n(!1)}))},onCancel(){console.log("Cancel")}})},k={current:r,pageSize:o,total:g,onChange:(e,s)=>w(e,s),showSizeChanger:!0},w=(e,s)=>{p(e),f(s)};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx("div",{className:"float-left mb-30",children:t.jsx(c,{type:"primary",onClick:()=>l("/singlepage/create"),children:"添加"})}),t.jsx("div",{className:"float-left",children:t.jsx(_,{loading:i,columns:S,dataSource:h,rowKey:e=>e.id,pagination:k})})]})};export{V as default};