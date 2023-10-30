import{f as te,u as se,r as a,t as ae,j as e,B as E,I as P,E as z,m as _,d as ne,M as oe}from"./index-b4683d61.js";import{c as F,g as re,b as le}from"./codeExchanger-b570ffd4.js";import{B as ie}from"./index-5f967da4.js";import{P as N}from"./index-573a6ce5.js";import{u as ce,a as de}from"./xlsx-b055c42d.js";import{T as ue}from"./Table-76e623b5.js";import"./LeftOutlined-9e6e73a2.js";import"./addEventListener-a27ae3f4.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-c09cc6d7.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const{confirm:O}=oe,Ne=()=>{const x=new URLSearchParams(te().search),U=se(),[d,o]=a.useState(!1),[A,f]=a.useState([]),[g,u]=a.useState(1),[j,L]=a.useState(50),[B,K]=a.useState(0),[m,v]=a.useState(!1),[w,I]=a.useState(""),[y,T]=a.useState(""),[b,C]=a.useState([]),[h,q]=a.useState(Number(x.get("id")));a.useEffect(()=>{document.title="兑换码",U(ae("兑换码"))},[]),a.useEffect(()=>{q(Number(x.get("id")))},[x.get("id")]),a.useEffect(()=>{G()},[g,j,m]);const G=()=>{d||(o(!0),F(h,{page:g,size:j,is_used:-1,code:w,user_id:y}).then(t=>{f(t.data.data),K(t.data.total),o(!1)}).catch(t=>{o(!1)}))},D=()=>{u(1),L(50),f([]),C([]),I(""),T(""),v(!m)},R=t=>{O({title:"警告",icon:e.jsx(z,{}),content:"确认操作",centered:!0,okText:"确认",cancelText:"取消",onOk(){d||(o(!0),re(h,{num:t}).then(()=>{o(!1),_.success("成功"),H()}).catch(s=>{o(!1)}))},onCancel(){console.log("Cancel")}})},H=()=>{u(1),f([]),C([]),v(!m)},J=()=>{function t(n,r){r=r||"sheet1";var l={SheetNames:[r],Sheets:{}};l.Sheets[r]=n;var i={bookType:"xlsx",bookSST:!1,type:"binary"},S=de(l,i),Z=new Blob([$(S)],{type:"application/octet-stream"});function $(k){for(var M=new ArrayBuffer(k.length),ee=new Uint8Array(M),p=0;p!=k.length;++p)ee[p]=k.charCodeAt(p)&255;return M}return Z}function s(n,r){typeof n=="object"&&n instanceof Blob&&(n=URL.createObjectURL(n));var l=document.createElement("a");l.href=n,l.download=r||"";var i;window.MouseEvent?i=new MouseEvent("click"):(i=document.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),l.dispatchEvent(i)}let c={};Object.assign(c,{is_used:0,code:w,user_id:y}),Object.assign(c,{page:1,size:B}),F(h,c).then(n=>{let r=[["兑换码"]];n.data.data.forEach(S=>{r.push([S.code])});let l=ce.aoa_to_sheet(r),i=t(l,"兑换码.xlsx");s(i,"兑换码.xlsx")})},Q=()=>{if(b.length===0){_.error("请选择需要操作的数据");return}O({title:"操作确认",icon:e.jsx(z,{}),content:"确认删除选中的兑换码？",centered:!0,okText:"确认",cancelText:"取消",onOk(){d||(o(!0),le(h,{ids:b}).then(()=>{_.success("成功"),D(),o(!1)}).catch(t=>{o(!1)}))},onCancel(){console.log("Cancel")}})},V={current:g,pageSize:j,total:B,onChange:(t,s)=>W(t,s),showSizeChanger:!0},W=(t,s)=>{u(t),L(s)},X=[{title:"ID",width:120,render:(t,s)=>e.jsx("span",{children:s.id})},{title:"兑换码",dataIndex:"code",render:t=>e.jsx("span",{children:t})},{title:"是否使用",width:150,render:(t,s)=>e.jsxs(e.Fragment,{children:[s.is_used===1&&e.jsx("span",{className:"c-red",children:"· 已使用"}),s.is_used!==1&&e.jsx("span",{className:"c-gray",children:"· 未使用"})]})},{title:"学员ID",width:120,render:(t,s)=>e.jsx(e.Fragment,{children:s.used_user_id!==0&&e.jsx("span",{children:s.used_user_id})})},{title:"学员",width:300,render:(t,s)=>{var c,n;return e.jsx(e.Fragment,{children:s.is_used===1&&e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:(c=s.user)==null?void 0:c.avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:(n=s.user)==null?void 0:n.nick_name})]})})}},{title:"使用时间",width:200,dataIndex:"used_at",render:t=>e.jsx("span",{children:ne(t)})}],Y={selectedRowKeys:b,onChange:(t,s)=>{C(t)}};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(ie,{title:"兑换码"}),e.jsxs("div",{className:"float-left j-b-flex mb-30 mt-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(N,{type:"primary",text:"生成10个",class:"",icon:null,p:"addons.CodeExchanger.activity-code.generate",onClick:()=>R(10),disabled:null}),e.jsx(N,{type:"primary",text:"生成50个",class:"ml-10",icon:null,p:"addons.CodeExchanger.activity-code.generate",onClick:()=>R(50),disabled:null}),e.jsx(E,{type:"primary",className:"ml-10",onClick:()=>J(),children:"导出未使用兑换码"}),e.jsx(N,{type:"danger",text:"批量删除",class:"ml-10",icon:null,p:"addons.CodeExchanger.activity-code.destroy",onClick:()=>Q(),disabled:null})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(P,{value:w,onChange:t=>{I(t.target.value)},allowClear:!0,style:{width:150},placeholder:"兑换码"}),e.jsx(P,{value:y,onChange:t=>{T(t.target.value)},allowClear:!0,style:{width:150,marginLeft:10},placeholder:"学员ID"}),e.jsx(E,{className:"ml-10",onClick:D,children:"清空"}),e.jsx(E,{className:"ml-10",type:"primary",onClick:()=>{u(1),v(!m)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(ue,{rowSelection:{type:"checkbox",...Y},loading:d,columns:X,dataSource:A,rowKey:t=>t.id,pagination:V})})]})};export{Ne as default};