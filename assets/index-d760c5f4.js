import{r as s,j as e,M as w,I as j,S,m as y,g as L,u as _,f as q,t as U,E as T}from"./index-b4683d61.js";import{G as V,H as B,I as P,J as W,K as A}from"./live-ef2dd82c.js";import{B as H}from"./index-5f967da4.js";import{P as b}from"./index-573a6ce5.js";import{H as F}from"./index-133d6e1c.js";import{F as i}from"./index-d434f3eb.js";import{T as O}from"./Table-76e623b5.js";import"./LeftOutlined-9e6e73a2.js";import"./InfoCircleOutlined-4d24221b.js";import"./row-4ee18533.js";import"./responsiveObserver-dc429d3b.js";import"./addEventListener-a27ae3f4.js";import"./useIcons-e0af7133.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./index-c09cc6d7.js";import"./index-10f1a096.js";import"./iconUtil-f3f90360.js";const R=t=>{const[l]=i.useForm(),[c,a]=s.useState(!1);s.useEffect(()=>{t.open&&l.setFieldsValue({name:"",sort:""})},[t.open,t.cid]);const m=r=>{c||(a(!0),r.course_id=t.cid,V(r).then(h=>{a(!1),y.success("成功！"),t.onSuccess()}).catch(h=>{a(!1)}))},d=r=>{console.log("Failed:",r)};return e.jsx(e.Fragment,{children:t.open?e.jsx(w,{title:"添加章节",onCancel:()=>{t.onCancel()},open:!0,width:800,maskClosable:!1,onOk:()=>{l.submit()},centered:!0,children:e.jsx("div",{className:"float-left mt-30",children:e.jsxs(i,{form:l,name:"live-chapter-create-dailog",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:m,onFinishFailed:d,autoComplete:"off",children:[e.jsx(i.Item,{label:"章节名称",name:"name",rules:[{required:!0,message:"请输入章节名称!"}],children:e.jsx(j,{style:{width:300},placeholder:"请输入章节名称",allowClear:!0})}),e.jsx(i.Item,{label:"排序",name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsxs(S,{align:"baseline",style:{height:32},children:[e.jsx(i.Item,{name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsx(j,{type:"number",style:{width:300},placeholder:"填输入排序",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(F,{text:"填写整数，数字越小排序越靠前"})})]})})]})})}):null})},Z=t=>{const[l]=i.useForm(),[c,a]=s.useState(!0),[m,d]=s.useState(!1);s.useEffect(()=>{t.open&&(a(!0),l.setFieldsValue({name:"",sort:""})),t.id>0&&t.cid&&r()},[t.open,t.cid,t.id]);const r=async()=>{await h(),a(!1)},h=async()=>{const o=await B(t.id);l.setFieldsValue({name:o.data.name,sort:o.data.sort})},g=o=>{m||(d(!0),o.course_id=t.cid,P(t.id,o).then(x=>{d(!1),y.success("成功！"),t.onSuccess()}).catch(x=>{d(!1)}))},f=o=>{console.log("Failed:",o)};return e.jsx(e.Fragment,{children:t.open?e.jsxs(w,{title:"编辑章节",onCancel:()=>{t.onCancel()},open:!0,width:800,maskClosable:!1,onOk:()=>{l.submit()},centered:!0,children:[c&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx(L,{})}),e.jsx("div",{style:{display:c?"none":"block"},className:"float-left mt-30",children:e.jsxs(i,{form:l,name:"live-chapter-update-dailog",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:g,onFinishFailed:f,autoComplete:"off",children:[e.jsx(i.Item,{label:"章节名称",name:"name",rules:[{required:!0,message:"请输入章节名称!"}],children:e.jsx(j,{style:{width:300},placeholder:"请输入章节名称",allowClear:!0})}),e.jsx(i.Item,{label:"排序",name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsxs(S,{align:"baseline",style:{height:32},children:[e.jsx(i.Item,{name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsx(j,{type:"number",style:{width:300},placeholder:"填输入排序",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(F,{text:"填写整数，数字越小排序越靠前"})})]})})]})})]}):null})},{confirm:K}=w,ue=()=>{const t=_(),l=new URLSearchParams(q().search),[c,a]=s.useState(!1),[m,d]=s.useState([]),[r,h]=s.useState(!1),[g,f]=s.useState(!1),[o,x]=s.useState(!1),[k,I]=s.useState(0),[p,N]=s.useState(Number(l.get("id")));s.useEffect(()=>{document.title="直播课程章节",t(U("直播课程章节"))},[]),s.useEffect(()=>{N(Number(l.get("id")))},[l.get("id")]),s.useEffect(()=>{v()},[p,r]);const v=()=>{c||(a(!0),W({id:p}).then(n=>{d(n.data),a(!1)}).catch(n=>{a(!1)}))},D=[{title:"排序",width:120,render:(n,u)=>e.jsx("span",{children:u.sort})},{title:"章节名",render:(n,u)=>e.jsxs("span",{children:[u.name," "]})},{title:"操作",width:160,fixed:"right",render:(n,u)=>e.jsxs(S,{children:[e.jsx(b,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.Zhibo.course_chapter.update",onClick:()=>{I(u.id),x(!0)},disabled:null}),e.jsx(b,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.Zhibo.course_chapter.delete",onClick:()=>{E(u.id)},disabled:null})]})}],C=()=>{d([]),h(!r)},E=n=>{n!==0&&K({title:"操作确认",icon:e.jsx(T,{}),content:"确认删除此章节？",centered:!0,okText:"确认",cancelText:"取消",onOk(){c||(a(!0),A(n).then(()=>{a(!1),y.success("删除成功"),C()}).catch(u=>{a(!1)}))},onCancel(){console.log("Cancel")}})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(H,{title:"直播课程章节"}),e.jsx(R,{cid:p,open:g,onCancel:()=>f(!1),onSuccess:()=>{C(),f(!1)}}),e.jsx(Z,{id:k,cid:p,open:o,onCancel:()=>x(!1),onSuccess:()=>{C(),x(!1)}}),e.jsx("div",{className:"float-left  mt-30 mb-30",children:e.jsx(b,{type:"primary",text:"添加章节",class:"",icon:null,p:"addons.Zhibo.course_chapter.store",onClick:()=>f(!0),disabled:null})}),e.jsx("div",{className:"float-left",children:e.jsx(O,{loading:c,columns:D,dataSource:m,rowKey:n=>n.id,pagination:!1})})]})};export{ue as default};