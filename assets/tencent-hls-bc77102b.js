import{u as _,r as a,t as R,j as t,I as z,B as g,m as j}from"./index-3fd54424.js";import{L as D,M as E}from"./course-c58bd7af.js";import{B as K}from"./index-c3c15456.js";import{P as V}from"./index-df05a090.js";import{O}from"./index-cbea6645.js";import{T as A}from"./Table-59a53b18.js";import{T as S}from"./index-2c039b27.js";import"./LeftOutlined-a0f8cfa6.js";import"./icon-option-c9fff0bb.js";import"./addEventListener-1752243f.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./Pagination-a2ebdf00.js";import"./useForceUpdate-56773729.js";import"./responsiveObserver-a0dea2e5.js";import"./index-ff4e3b6e.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";const ne=()=>{const y=_(),[n,o]=a.useState(!1),[w,l]=a.useState([]),[c,r]=a.useState(1),[d,h]=a.useState(10),[v,C]=a.useState(0),[i,m]=a.useState(!1),[b,T]=a.useState([]),[f,x]=a.useState(""),[u,p]=a.useState([]);a.useEffect(()=>{document.title="腾讯云加密",y(R("腾讯云加密"))},[]),a.useEffect(()=>{k()},[c,d,i]);const k=()=>{n||(o(!0),D({page:c,size:d,keywords:f}).then(e=>{l(e.data.data.data),C(e.data.data.total),T(e.data.hlsVideoIds),o(!1)}).catch(e=>{o(!1)}))},B={current:c,pageSize:d,total:v,onChange:(e,s)=>F(e,s),showSizeChanger:!0},F=(e,s)=>{r(e),h(s)},I={selectedRowKeys:u,onChange:(e,s)=>{p(e)}},N=[{title:"ID",width:150,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"视频",render:(e,s)=>t.jsxs("span",{children:[s.title," "]})},{title:"FileId",width:320,render:(e,s)=>t.jsx("span",{children:s.aliyun_video_id})},{title:"状态",width:200,render:(e,s)=>t.jsx(t.Fragment,{children:typeof b[s.id]>"u"?t.jsx(S,{color:"error",children:"未提交"}):t.jsx(S,{color:"success",children:"已提交"})})}],H=()=>{r(1),h(10),l([]),p([]),x(""),m(!i)},L=()=>{r(1),l([]),p([]),m(!i)},P=()=>{if(u.length===0){j.error("请选择需要操作的数据");return}n||(o(!0),E({ids:u}).then(()=>{o(!1),j.success("成功"),L()}).catch(e=>{o(!1)}))};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(K,{title:"腾讯云加密"}),t.jsxs("div",{className:"float-left j-b-flex  mt-30 mb-30",children:[t.jsxs("div",{className:"d-flex",children:[t.jsx(V,{type:"primary",text:"提交加密转码",class:"",icon:null,p:"addons.TencentCloudHls.videos.submitTransTask",onClick:()=>P(),disabled:null}),t.jsx(O,{text:"腾讯云HLS加密",value:"/system/videoHlsConfig?referer=%2Fcourse%2Fvod%2Fvideo%2Fhls%2Ftencent"})]}),t.jsxs("div",{className:"d-flex",children:[t.jsx(z,{value:f,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"视频名关键字"}),t.jsx(g,{className:"ml-10",onClick:H,children:"清空"}),t.jsx(g,{className:"ml-10",type:"primary",onClick:()=>{r(1),m(!i)},children:"筛选"})]})]}),t.jsx("div",{className:"float-left",children:t.jsx(A,{rowSelection:{type:"checkbox",...I},loading:n,columns:N,dataSource:w,rowKey:e=>e.id,pagination:B})})]})};export{ne as default};