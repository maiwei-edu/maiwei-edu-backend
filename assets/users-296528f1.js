import{r as t,a as de,j as e,B as g,M as X,m as A,E as ae,d as Q,h as L,I as oe,k as he,u as ue,t as me}from"./index-3fd54424.js";import{B as fe}from"./index-c3c15456.js";import{r as xe,n as ee,o as ge,p as te,q as je,t as _e}from"./course-c58bd7af.js";import{l as pe}from"./snapshot-f665cacc.js";import{D as se}from"./index-423292da.js";import{S as we}from"./index-035ffcb5.js";import{T as Z}from"./Table-59a53b18.js";import{u as ne,w as ie}from"./xlsx-b055c42d.js";import{S as Se}from"./index-ff4e3b6e.js";import{D as re}from"./index-a9db941d.js";import{P as ve}from"./index-df05a090.js";import{U as Ce}from"./index-fcbb72d1.js";import{U as De}from"./index-dd790b41.js";import{T as ke}from"./index-47408a6e.js";import"./LeftOutlined-a0f8cfa6.js";import"./index-0e80bad7.js";import"./addEventListener-1752243f.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./Pagination-a2ebdf00.js";import"./useForceUpdate-56773729.js";import"./responsiveObserver-a0dea2e5.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";import"./live-9d1ed6d0.js";import"./certificate-846043b1.js";import"./index-0b71564b.js";import"./Dragger-3ad849c3.js";import"./DeleteOutlined-529a4ffa.js";import"./member-4894e8dc.js";import"./PlusOutlined-18e71fec.js";const ye=i=>{const[o,n]=t.useState(!1),[D,f]=t.useState([]),[u,h]=t.useState({}),[j,S]=t.useState(!1),[k,b]=t.useState(0),Y=de(c=>c.enabledAddonsConfig.value.enabledAddons);t.useEffect(()=>{h({}),i.open&&i.cid!==0&&i.uid!==0&&v()},[i.open,i.cid,i.uid]);const v=()=>{o||(n(!0),xe(i.cid,i.uid,{}).then(c=>{f(c.data.data),n(!1);let d=[],m=c.data.data;m.length>0&&m.map(y=>{d.push(y.video_id)}),Y.Snapshot&&C(d)}).catch(c=>{n(!1)}))},I=[{title:"标题",render:(c,d)=>e.jsx("span",{children:d.video_title})},{title:"进度",width:300,render:(c,d)=>e.jsxs(e.Fragment,{children:[d.watch_seconds>0&&e.jsx(se,{duration:d.watch_seconds}),d.watch_seconds<=0&&e.jsx("span",{children:"0:00"}),"/",e.jsx(se,{duration:d.duration})]})},{title:"状态",width:120,render:(c,d)=>e.jsx(e.Fragment,{children:d.watch_seconds>=d.duration?e.jsx("span",{className:"c-green",children:"已学完"}):e.jsx("span",{children:"未学完"})})},Y.Snapshot?{title:"已拍照片",width:120,render:(c,d)=>e.jsx(e.Fragment,{children:u[d.video_id]&&u[d.video_id].images.length>0?e.jsx(g,{size:"small",className:"c-primary",type:"link",onClick:()=>{x(d.video_id)},children:u[d.video_id].images.length}):e.jsx("span",{children:"-"})})}:{}],C=c=>{pe({user_id:i.uid,type:"vod",other_ids:c}).then(d=>{h(d.data)})},x=c=>{b(c),S(!0)},_=()=>{b(0),S(!1),v()};return e.jsxs(e.Fragment,{children:[i.open?e.jsx(X,{title:"学习进度",onCancel:()=>{i.onCancel()},open:!0,width:1e3,maskClosable:!1,footer:null,centered:!0,children:e.jsx("div",{className:"mt-30",children:e.jsx(Z,{loading:o,columns:I,dataSource:D,rowKey:c=>c.video_title+Math.random(),pagination:!1})})}):null,e.jsx(we,{open:j,vid:k,uid:i.uid,onCancel:()=>{_()}})]})},{confirm:Ne}=X,{RangePicker:be}=re,Ye=i=>{const[o,n]=t.useState(!1),[D,f]=t.useState([]),[u,h]=t.useState(1),[j,S]=t.useState(10),[k,b]=t.useState(0),[Y,v]=t.useState(0),[I,C]=t.useState(!1),[x,_]=t.useState(!1),[c,d]=t.useState({}),[m,y]=t.useState([]),[p,M]=t.useState([]),[T,R]=t.useState([]),[U,P]=t.useState([]),z=[{label:"未看完",value:0},{label:"已看完",value:1}];t.useEffect(()=>{W()},[i.id,u,j,x]);const W=()=>{o||(n(!0),ee(i.id,{page:u,size:j,sort:"id",order:"desc",user_id:null,is_watched:m.length===0?-1:m,watched_start_at:p[0],watched_end_at:p[1]}).then(s=>{f(s.data.data.data),b(s.data.data.total),d(s.data.users),n(!1)}).catch(s=>{n(!1)}))},E=()=>{if(U.length===0){A.error("请选择需要操作的数据");return}Ne({title:"操作确认",icon:e.jsx(ae,{}),content:"确认删除选中的学员学习记录？",centered:!0,okText:"确认",cancelText:"取消",onOk(){o||(n(!0),ge(i.id,{record_ids:U}).then(()=>{n(!1),A.success("成功"),B()}).catch(s=>{n(!1)}))},onCancel(){console.log("Cancel")}})},B=()=>{h(1),f([]),P([]),_(!x)},H=()=>{h(1),S(10),f([]),P([]),y([]),R([]),M([]),_(!x)},K={current:u,pageSize:j,total:k,onChange:(s,r)=>V(s,r),showSizeChanger:!0},V=(s,r)=>{h(s),S(r)},a={selectedRowKeys:U,onChange:(s,r)=>{P(s)}},l=[{title:"ID",width:120,render:(s,r)=>e.jsx("span",{children:r.id})},{title:"学员",render:(s,r)=>e.jsxs(e.Fragment,{children:[c[r.user_id]&&e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:c[r.user_id].avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:c[r.user_id].nick_name})]}),!c[r.user_id]&&e.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"观看进度",width:150,render:(s,r)=>e.jsxs("span",{children:[r.progress,"%"]})},{title:"开始时间",width:200,dataIndex:"created_at",render:s=>e.jsx("span",{children:Q(s)})},{title:"看完时间",width:200,dataIndex:"watched_at",render:s=>e.jsx("span",{children:Q(s)})},{title:"看完",width:80,render:(s,r)=>e.jsxs(e.Fragment,{children:[r.is_watched===1&&e.jsx("span",{className:"c-red",children:"是"}),r.is_watched!==1&&e.jsx("span",{children:"否"})]})},{title:"操作",width:100,fixed:"right",render:(s,r)=>e.jsx(g,{type:"link",className:"c-primary",onClick:()=>{O(r)},children:"详情"})}],$=()=>{if(o)return;n(!0);let s={page:1,size:k,sort:"id",order:"desc",user_id:null,is_watched:m.length===0?-1:m,watched_start_at:p[0],watched_end_at:p[1]};ee(i.id,s).then(r=>{if(r.data.data.total===0){A.error("数据为空"),n(!1);return}let q=r.data.users,G="课程学习记录|"+L().format("YYYY-MM-DD HH:mm:ss")+".xlsx",w="sheet1",F=[["用户ID","用户","手机号","观看进度","开始时间","看完时间"]];r.data.data.data.forEach(N=>{let J=q[N.user_id];typeof J>"u"||F.push([N.user_id,J.nick_name,J.mobile,N.progress+"%",N.created_at?L(N.created_at).format("YYYY-MM-DD HH:mm"):"",N.watched_at?L(N.watched_at).format("YYYY-MM-DD HH:mm"):""])});const le=ne.json_to_sheet(F),ce={SheetNames:[w],Sheets:{[w]:le}};ie(ce,G),n(!1)})},O=s=>{v(s.user_id),C(!0)};return e.jsxs("div",{className:"float-left",children:[e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsx("div",{className:"d-flex",children:e.jsx(g,{type:"primary",danger:!0,onClick:()=>E(),children:"删除"})}),e.jsxs("div",{className:"d-flex",children:[e.jsx(Se,{style:{width:150},value:m,onChange:s=>{y(s)},allowClear:!0,placeholder:"看完",options:z}),e.jsx(be,{format:"YYYY-MM-DD",value:T,style:{marginLeft:10},onChange:(s,r)=>{M(r),R(s)},placeholder:["看完时间-开始","看完时间-结束"]}),e.jsx(g,{className:"ml-10",onClick:H,children:"清空"}),e.jsx(g,{className:"ml-10",type:"primary",onClick:()=>{h(1),_(!x)},children:"筛选"}),e.jsx(g,{type:"primary",className:"ml-10",onClick:()=>$(),children:"导出表格"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(Z,{rowSelection:{type:"checkbox",...a},loading:o,columns:l,dataSource:D,rowKey:s=>s.id,pagination:K})}),e.jsx(ye,{open:I,cid:i.id,uid:Y,onCancel:()=>C(!1)})]})},{confirm:Ae}=X,{RangePicker:Ie}=re,Me=i=>{const[o,n]=t.useState(!1),[D,f]=t.useState([]),[u,h]=t.useState(1),[j,S]=t.useState(10),[k,b]=t.useState(0);t.useState(0);const[Y,v]=t.useState(!1),[I,C]=t.useState(!1),[x,_]=t.useState(!1),[c,d]=t.useState({}),[m,y]=t.useState(""),[p,M]=t.useState([]),[T,R]=t.useState([]);t.useEffect(()=>{U()},[i.id,u,j,x]);const U=()=>{o||(n(!0),te(i.id,{page:u,size:j,user_id:m,subscribe_start_at:p[0],subscribe_end_at:p[1]}).then(a=>{f(a.data.data.data),b(a.data.data.total),d(a.data.users),n(!1)}).catch(a=>{n(!1)}))},P=a=>{a!==0&&Ae({title:"警告",icon:e.jsx(ae,{}),content:"确认操作？",centered:!0,okText:"确认",cancelText:"取消",onOk(){o||(n(!0),_e(i.id,{user_id:a}).then(()=>{n(!1),A.success("成功"),z()}).catch(l=>{n(!1)}))},onCancel(){console.log("Cancel")}})},z=()=>{h(1),f([]),_(!x)},W=()=>{h(1),S(10),f([]),y(""),R([]),M([]),_(!x)},E={current:u,pageSize:j,total:k,onChange:(a,l)=>B(a,l),showSizeChanger:!0},B=(a,l)=>{h(a),S(l)},H=[{title:"学员ID",width:120,render:(a,l)=>e.jsx("span",{children:l.user_id})},{title:"学员",render:(a,l)=>e.jsxs(e.Fragment,{children:[c[l.user_id]&&e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:c[l.user_id].avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:c[l.user_id].nick_name})]}),!c[l.user_id]&&e.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"价格",width:200,render:(a,l)=>e.jsxs(e.Fragment,{children:[l.charge===0&&e.jsx("span",{children:"-"}),l.charge!==0&&e.jsxs("span",{children:["￥",l.charge]})]})},{title:"订阅时间",width:200,dataIndex:"created_at",render:a=>e.jsx("span",{children:Q(a)})},{title:"操作",width:100,fixed:"right",render:(a,l)=>e.jsx(g,{type:"link",className:"c-red",onClick:()=>{P(l.user_id)},children:"删除"})}],K=()=>{if(o)return;n(!0);let a={page:1,size:k,user_id:m,watched_start_at:p[0],watched_end_at:p[1]};te(i.id,a).then(l=>{if(l.data.data.total===0){A.error("数据为空"),n(!1);return}let $=l.data.users,O="录播课程订阅学员.xlsx",s="sheet1",r=[["学员ID","学员","手机号","价格","时间"]];l.data.data.data.forEach(w=>{let F=$[w.user_id];r.push([w.user_id,F.nick_name,F.mobile,w.charge===0?"-":"￥"+w.charge,w.created_at?L(w.created_at).format("YYYY-MM-DD HH:mm"):""])});const q=ne.json_to_sheet(r),G={SheetNames:[s],Sheets:{[s]:q}};ie(G,O),n(!1)})},V=a=>{o||(n(!0),je(i.id,{user_id:a}).then(()=>{n(!1),A.success("成功"),v(!1),z()}).catch(l=>{n(!1)}))};return e.jsxs("div",{className:"float-left",children:[e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(g,{type:"primary",onClick:()=>v(!0),children:"添加学员"}),e.jsx(ve,{type:"primary",text:"批量导入",class:"ml-10",icon:null,p:"course.subscribe.create",onClick:()=>C(!0),disabled:null})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(oe,{style:{width:150},value:m,onChange:a=>{y(a.target.value)},allowClear:!0,placeholder:"学员ID"}),e.jsx(Ie,{format:"YYYY-MM-DD",value:T,style:{marginLeft:10},onChange:(a,l)=>{M(l),R(a)},placeholder:["订阅时间-开始","订阅时间-结束"]}),e.jsx(g,{className:"ml-10",onClick:W,children:"清空"}),e.jsx(g,{className:"ml-10",type:"primary",onClick:()=>{h(1),_(!x)},children:"筛选"}),e.jsx(g,{type:"primary",className:"ml-10",onClick:()=>K(),children:"导出表格"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(Z,{loading:o,columns:H,dataSource:D,rowKey:a=>a.id,pagination:E})}),e.jsx(Ce,{open:I,id:i.id,type:"vod",name:"学员批量导入模板",onCancel:()=>C(!1),onSuccess:()=>{C(!1),z()}}),e.jsx(De,{type:"",open:Y,onCancel:()=>v(!1),onSuccess:a=>{V(a)}})]})},ot=()=>{const i=he(),o=ue();t.useState(!1);const[n,D]=t.useState("watch-records"),f=[{key:"watch-records",label:"学习记录"},{key:"sub-users",label:"付费学员"}];t.useEffect(()=>{document.title="录播学员",o(me("录播学员"))},[]);const u=h=>{D(h)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(fe,{title:"录播学员"}),e.jsx("div",{className:"float-left mt-30",children:e.jsx(ke,{defaultActiveKey:n,items:f,onChange:u})}),e.jsxs("div",{className:"float-left",children:[n==="watch-records"&&e.jsx(Ye,{id:Number(i.courseId)}),n==="sub-users"&&e.jsx(Me,{id:Number(i.courseId)})]})]})};export{ot as default};