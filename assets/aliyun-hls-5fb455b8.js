import{u as L,r as a,t as R,j as t,I as T,B as g,m as j}from"./index-3fd54424.js";import{J as z,K as D}from"./course-c58bd7af.js";import{B as E}from"./index-c3c15456.js";import{P as V}from"./index-df05a090.js";import{O as A}from"./index-cbea6645.js";import{T as O}from"./Table-59a53b18.js";import{T as y}from"./index-2c039b27.js";import"./LeftOutlined-a0f8cfa6.js";import"./icon-option-c9fff0bb.js";import"./addEventListener-1752243f.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./Pagination-a2ebdf00.js";import"./useForceUpdate-56773729.js";import"./responsiveObserver-a0dea2e5.js";import"./index-ff4e3b6e.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";const le=()=>{const S=L(),[l,i]=a.useState(!1),[w,n]=a.useState([]),[c,o]=a.useState(1),[d,h]=a.useState(10),[v,C]=a.useState(0),[r,m]=a.useState(!1),[b,B]=a.useState([]),[f,x]=a.useState(""),[u,p]=a.useState([]);a.useEffect(()=>{document.title="阿里云加密",S(R("阿里云加密"))},[]),a.useEffect(()=>{F()},[c,d,r]);const F=()=>{l||(i(!0),z({page:c,size:d,keywords:f}).then(e=>{n(e.data.data.data),C(e.data.data.total),B(e.data.hlsVideoIds),i(!1)}).catch(e=>{i(!1)}))},I={current:c,pageSize:d,total:v,onChange:(e,s)=>N(e,s),showSizeChanger:!0},N=(e,s)=>{o(e),h(s)},_={selectedRowKeys:u,onChange:(e,s)=>{p(e)}},k=[{title:"ID",width:150,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"视频",render:(e,s)=>t.jsxs("span",{children:[s.title," "]})},{title:"FileId",width:320,render:(e,s)=>t.jsx("span",{children:s.aliyun_video_id})},{title:"状态",width:200,render:(e,s)=>t.jsx(t.Fragment,{children:typeof b[s.id]>"u"?t.jsx(y,{color:"error",children:"未提交"}):t.jsx(y,{color:"success",children:"已提交"})})}],P=()=>{o(1),h(10),n([]),p([]),x(""),m(!r)},H=()=>{o(1),n([]),p([]),m(!r)},K=()=>{if(u.length===0){j.error("请选择需要操作的数据");return}l||(i(!0),D({ids:u}).then(()=>{i(!1),j.success("成功"),H()}).catch(e=>{i(!1)}))};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(E,{title:"阿里云加密"}),t.jsxs("div",{className:"float-left j-b-flex  mt-30 mb-30",children:[t.jsxs("div",{className:"d-flex",children:[t.jsx(V,{type:"primary",text:"提交加密转码",class:"",icon:null,p:"video.aliyun_hls.submit",onClick:()=>K(),disabled:null}),t.jsx(A,{text:"阿里云HLS加密",value:"/system/videoHlsConfig?referer=%2Fcourse%2Fvod%2Fvideo%2Fhls%2Faliyun"})]}),t.jsxs("div",{className:"d-flex",children:[t.jsx(T,{value:f,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"视频名关键字"}),t.jsx(g,{className:"ml-10",onClick:P,children:"清空"}),t.jsx(g,{className:"ml-10",type:"primary",onClick:()=>{o(1),m(!r)},children:"筛选"})]})]}),t.jsx("div",{className:"float-left",children:t.jsx(O,{rowSelection:{type:"checkbox",..._},loading:l,columns:k,dataSource:w,rowKey:e=>e.id,pagination:I})})]})};export{le as default};