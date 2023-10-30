import{u as L,b as D,r as a,t as I,j as e,I as O,B as S,d as R,S as G,E as K,m as A,M as $}from"./index-b4683d61.js";import{l as q,d as H}from"./creditMall-68ad6dbc.js";import{P as r}from"./index-573a6ce5.js";import{O as J}from"./index-6f8a3ac0.js";import{S as Q}from"./index-c09cc6d7.js";import{T as U}from"./Table-76e623b5.js";import"./icon-option-c9fff0bb.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./addEventListener-a27ae3f4.js";import"./Pagination-d2c763c6.js";import"./LeftOutlined-9e6e73a2.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const{confirm:V}=$,me=()=>{const C=L(),d=D(),[c,l]=a.useState(!1),[k,u]=a.useState([]),[m,i]=a.useState(1),[p,x]=a.useState(10),[w,b]=a.useState(0),[n,h]=a.useState(!1),[g,f]=a.useState(""),[_,N]=a.useState([]),[j,y]=a.useState([]);a.useEffect(()=>{document.title="积分商城",C(I("积分商城"))},[]),a.useEffect(()=>{M()},[m,p,n]);const M=()=>{c||(l(!0),q({page:m,size:p,key:g,goods_type:j}).then(s=>{u(s.data.data.data),b(s.data.data.total);let t=s.data.goods_type;const v=[];for(let o=0;o<t.length;o++)v.push({label:t[o].name,value:t[o].value});N(v),l(!1)}).catch(s=>{l(!1)}))},T=()=>{i(1),x(10),u([]),y([]),f(""),h(!n)},P={current:m,pageSize:p,total:w,onChange:(s,t)=>E(s,t),showSizeChanger:!0},E=(s,t)=>{i(s),x(t)},z=[{title:"商品名称",width:400,render:(s,t)=>e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{style:{backgroundImage:"url("+t.thumb+")",width:120,height:120,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center center"}}),e.jsx("div",{className:"ml-10",style:{width:250},children:t.title})]})},{title:"价格",render:(s,t)=>e.jsxs("div",{children:[t.charge,"积分"]})},{title:"库存",width:120,render:(s,t)=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["兑换：",t.sales_count]}),e.jsxs("div",{children:["库存：",t.stock_count]})]})},{title:"是否显示",width:120,render:(s,t)=>e.jsxs(e.Fragment,{children:[t.is_show===1&&e.jsx("span",{className:"c-green",children:"· 显示"}),t.is_show!==1&&e.jsx("span",{className:"c-red",children:"· 隐藏"})]})},{title:"时间",width:200,render:(s,t)=>e.jsx("div",{children:R(t.created_at)})},{title:"操作",width:130,render:(s,t)=>e.jsxs(G,{children:[e.jsx(r,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.credit1Mall.goods.update",onClick:()=>{d("/creditMall/update?id="+t.id)},disabled:null}),e.jsx(r,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.credit1Mall.goods.delete",onClick:()=>{B(t.id)},disabled:null})]})}],B=s=>{s!==0&&V({title:"操作确认",icon:e.jsx(K,{}),content:"确认删除此商品？",centered:!0,okText:"确认",cancelText:"取消",onOk(){c||(l(!0),H(s).then(()=>{l(!1),A.success("删除成功"),F()}).catch(t=>{l(!1)}))},onCancel(){console.log("Cancel")}})},F=()=>{i(1),u([]),h(!n)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(r,{type:"primary",text:"新建积分商品",class:"",icon:null,p:"addons.credit1Mall.goods.store",onClick:()=>d("/creditMall/create"),disabled:null}),e.jsx(r,{type:"primary",text:"积分订单",class:"ml-10",icon:null,p:"addons.credit1Mall.orders.list",onClick:()=>d("/creditMall/orders/index"),disabled:null}),e.jsx(J,{text:"积分配置",value:"/system/creditSignConfig"})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(O,{value:g,onChange:s=>{f(s.target.value)},allowClear:!0,style:{width:150},placeholder:"商品名称关键字"}),e.jsx(Q,{style:{width:150,marginLeft:10},value:j,onChange:s=>{y(s)},allowClear:!0,placeholder:"商品分类",options:_}),e.jsx(S,{className:"ml-10",onClick:T,children:"清空"}),e.jsx(S,{className:"ml-10",type:"primary",onClick:()=>{i(1),h(!n)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(U,{loading:c,columns:z,dataSource:k,rowKey:s=>s.id,pagination:P})})]})};export{me as default};
