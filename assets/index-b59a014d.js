import{u as L,b as O,r as a,t as K,j as e,I as M,B as g,d as R,S as C,D as A,e as $,E as q,m as G,M as H}from"./index-b4683d61.js";import{l as J,d as Q}from"./topic-842c58e2.js";import{P as o}from"./index-573a6ce5.js";import{O as U}from"./index-6f8a3ac0.js";import{T as V}from"./index-ae12b8d6.js";import{S as W}from"./index-c09cc6d7.js";import{T as X}from"./Table-76e623b5.js";import"./icon-option-c9fff0bb.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./addEventListener-a27ae3f4.js";import"./Pagination-d2c763c6.js";import"./LeftOutlined-9e6e73a2.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const{confirm:Y}=H,ge=()=>{const b=L(),r=O(),[p,n]=a.useState(!1),[k,m]=a.useState([]),[u,c]=a.useState(1),[h,j]=a.useState(10),[S,v]=a.useState(0),[d,x]=a.useState(!1),[f,y]=a.useState(""),[w,_]=a.useState([]),[N,D]=a.useState([]);a.useEffect(()=>{document.title="图文",b(K("图文"))},[]),a.useEffect(()=>{T()},[u,h,d]);const T=()=>{p||(n(!0),J({page:u,size:h,sort:"id",order:"desc",keywords:f,category_id:w}).then(s=>{m(s.data.data.data),v(s.data.data.total);let t=s.data.categories;const i=[];for(let l=0;l<t.length;l++)i.push({label:t[l].name,value:t[l].id});D(i),n(!1)}).catch(s=>{n(!1)}))},E=()=>{c(1),j(10),m([]),y(""),_([]),x(!d)},F={current:u,pageSize:h,total:S,onChange:(s,t)=>P(s,t),showSizeChanger:!0},P=(s,t)=>{c(s),j(t)},z=[{title:"ID",width:"6%",render:(s,t)=>e.jsx("span",{children:t.id})},{title:"图文",width:"20%",render:(s,t)=>e.jsx(V,{width:120,value:t.thumb,height:90,title:t.title,border:4})},{title:"分类",width:"7%",render:(s,t)=>{var i;return e.jsxs(e.Fragment,{children:[t.category&&e.jsx("span",{children:((i=t==null?void 0:t.category)==null?void 0:i.name)||"-"}),!t.category&&e.jsx("span",{className:"c-red",children:"数据不完整"})]})}},{title:"价格",width:"7%",render:(s,t)=>t.charge>0?e.jsxs("span",{children:[t.charge,"元"]}):e.jsx("span",{children:"-"})},{title:"销量",width:"8%",render:(s,t)=>e.jsx("span",{children:t.user_count})},{title:"阅读",width:"8%",render:(s,t)=>e.jsxs("span",{children:[t.vote_count,"次"]})},{title:"点赞",width:"8%",render:(s,t)=>e.jsx("span",{children:t.vote_count})},{title:"上架时间",width:"14%",render:(s,t)=>e.jsx("span",{children:R(t.sorted_at)})},{title:"是否显示",width:"8%",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.is_show===1&&e.jsx("span",{className:"c-green",children:"· 显示"}),t.is_show!==1&&e.jsx("span",{className:"c-red",children:"· 隐藏"})]})},{title:"操作",width:"13%",fixed:"right",render:(s,t)=>{const i=[{key:"1",label:e.jsx(o,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.meedu_topics.topic.delete",onClick:()=>{I(t.id)},disabled:null})}];return e.jsxs(C,{children:[e.jsx(o,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.meedu_topics.topic.update",onClick:()=>{r("/topic/update?id="+t.id)},disabled:null}),e.jsx(o,{type:"link",text:"学员",class:"c-primary",icon:null,p:"addons.meedu_topics.orders",onClick:()=>{r("/topic/order?id="+t.id)},disabled:null}),e.jsx(A,{menu:{items:i},children:e.jsx(g,{type:"link",className:"c-primary",onClick:l=>l.preventDefault(),children:e.jsxs(C,{size:"small",align:"center",children:["更多",e.jsx($,{})]})})})]})}}],B=()=>{c(1),m([]),x(!d)},I=s=>{s!==0&&Y({title:"操作确认",icon:e.jsx(q,{}),content:"确认删除此图文？",centered:!0,okText:"确认",cancelText:"取消",onOk(){p||(n(!0),Q(s).then(()=>{n(!1),G.success("删除成功"),B()}).catch(t=>{n(!1)}))},onCancel(){console.log("Cancel")}})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(o,{type:"primary",text:"新建图文",class:"",icon:null,p:"addons.meedu_topics.topic.store",onClick:()=>r("/topic/create"),disabled:null}),e.jsx(o,{type:"primary",text:"图文分类",class:"ml-10",icon:null,p:"addons.meedu_topics.category.list",onClick:()=>r("/topic/category/index"),disabled:null}),e.jsx(o,{type:"primary",text:"图文评论",class:"ml-10",icon:null,p:"addons.meedu_topics.comments",onClick:()=>r("/topic/comment"),disabled:null}),e.jsx(U,{text:"图文推荐",value:"/system/topicConfig?referer=%2Ftopic%2Findex"})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(M,{value:f,onChange:s=>{y(s.target.value)},allowClear:!0,style:{width:150},placeholder:"图文关键字"}),e.jsx(W,{style:{width:150,marginLeft:10},value:w,onChange:s=>{_(s)},allowClear:!0,placeholder:"分类",options:N}),e.jsx(g,{className:"ml-10",onClick:E,children:"清空"}),e.jsx(g,{className:"ml-10",type:"primary",onClick:()=>{c(1),x(!d)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(X,{loading:p,columns:z,dataSource:k,rowKey:s=>s.id,pagination:F})})]})};export{ge as default};
