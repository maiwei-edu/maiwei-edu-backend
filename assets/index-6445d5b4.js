import{r as a,j as e,ca as Te,aR as ie,cb as Ye,M as E,I as C,m as f,h as B,S as H,u as Ve,b as Pe,t as Re,B as D,d as He,D as Ee,e as qe,E as ae}from"./index-3fd54424.js";import{s as We,a as Le,e as oe,b as Ae,l as Ue,d as Oe}from"./member-4894e8dc.js";import{P as p}from"./index-df05a090.js";import{T as z}from"./index-2c039b27.js";import{F as c}from"./index-0ca68444.js";import{S as _}from"./index-ff4e3b6e.js";import{S as ze}from"./index-27712364.js";import{D as K}from"./index-a9db941d.js";import{H as Be}from"./index-d5d1e443.js";import{U as Ke}from"./index-edf85c8b.js";import{R as $e,C as ne}from"./row-98a37fbf.js";import{M as Ge}from"./update-9dff7942.js";import{f as Je,a as Qe}from"./icon-filter-h-a57243b6.js";import{T as Xe}from"./Table-59a53b18.js";import{D as Ze}from"./index-88bdc632.js";import"./useIcons-235bc0cd.js";import"./CheckOutlined-44e74bd9.js";import"./InfoCircleOutlined-fefc69ce.js";import"./InboxOutlined-35d156a9.js";import"./selected-7e6221ce.js";import"./Dragger-3ad849c3.js";import"./useForceUpdate-56773729.js";import"./DeleteOutlined-529a4ffa.js";import"./Pagination-a2ebdf00.js";import"./LeftOutlined-a0f8cfa6.js";import"./responsiveObserver-a0dea2e5.js";import"./addEventListener-1752243f.js";import"./index-a56efb1a.js";import"./iconUtil-14ff0944.js";const es=({tags:l})=>{const[o,d]=a.useState(0);return a.useEffect(()=>{let i="";for(let n=0;n<l.length;n++)if(i+=l[n].name,i.length>8&&window.innerWidth>=1700){d(1);break}else if(i.length>7&&window.innerWidth>=1600){d(1);break}else if(i.length>4&&window.innerWidth<1600){d(1);break}},[l]),e.jsx("div",{className:Te["cursor-pointer"],children:e.jsx(ie,{placement:"top",title:e.jsx(e.Fragment,{children:l.map((i,n)=>e.jsx(z,{color:"processing",className:"ml-5 mb-5",children:i.name},"title"+n))}),color:"#ffffff",children:e.jsxs(e.Fragment,{children:[o>0&&l.slice(0,o).map((i,n)=>e.jsxs("div",{children:[e.jsx(z,{color:"processing",className:"ml-5 mb-5",children:i.name}),"..."]},"ecli"+n)),o===0&&e.jsx(e.Fragment,{children:l.map((i,n)=>e.jsx(z,{color:"processing",className:"ml-5 mb-5",children:i.name},"no"+n))})]})})})},ss=({label:l})=>{const[o,d]=a.useState("");a.useEffect(()=>{if(!l){d("");return}let n=i(l);if(n.length>7&&window.innerWidth>=1700){d(n.slice(0,7)+"...");return}else if(n.length>6&&window.innerWidth>=1600){d(n.slice(0,6)+"...");return}else if(n.length>4&&window.innerWidth<1600){d(n.slice(0,4)+"...");return}d(n),console.log(l)},[l]);const i=n=>{let x=/style\s*?=\s*?([‘"])[\s\S]*?\1/g,u=/<.+?>/g,m=/class\s*?=\s*?([‘"])[\s\S]*?\1/g,h="";return n&&(h=n.replace(x,""),h=h.replace(u,""),h=h.replace(m,"")),h};return e.jsx("div",{className:Ye["cursor-pointer"],children:e.jsx(ie,{placement:"top",title:e.jsx("div",{style:{color:"#333333"},dangerouslySetInnerHTML:{__html:l}}),color:"#ffffff",children:e.jsx("div",{children:o})})})},ts=l=>{const[o]=c.useForm(),[d,i]=a.useState(!1);a.useEffect(()=>{l.open&&o.setFieldsValue({message:""})},[l.open]);const n=u=>{d||(i(!0),l.mid===0?(u.user_ids=l.ids,We(u).then(m=>{i(!1),f.success("成功！"),l.onSuccess()}).catch(m=>{i(!1)})):Le(l.mid,u).then(m=>{i(!1),f.success("成功！"),l.onSuccess()}).catch(m=>{i(!1)}))},x=u=>{console.log("Failed:",u)};return e.jsx(e.Fragment,{children:l.open?e.jsx(E,{title:"发消息",onCancel:()=>{l.onCancel()},open:!0,width:400,maskClosable:!1,onOk:()=>{o.submit()},centered:!0,children:e.jsx("div",{className:"float-left mt-30",children:e.jsx(c,{form:o,name:"message-send-dailog",labelCol:{span:6},wrapperCol:{span:18},initialValues:{remember:!0},onFinish:n,onFinishFailed:x,autoComplete:"off",children:e.jsx(c.Item,{label:"消息文本",name:"message",rules:[{required:!0,message:"请输入消息文本!"}],children:e.jsx(C.TextArea,{style:{width:"100%"},placeholder:"请输入消息文本",allowClear:!0,rows:4,maxLength:500,showCount:!0})})})})}):null})},ls=l=>{const[o]=c.useForm(),[d,i]=a.useState(!1),[n,x]=a.useState(""),u=[{label:"批量设置会员",value:"role_id"},{label:"批量设置标签",value:"tag"},{label:"批量冻结账号",value:"is_lock"}];a.useEffect(()=>{l.open&&o.setFieldsValue({message:""})},[l.open]);const m=r=>{if(!d){if(r.role_id&&!r.role_expired_at){f.error("请选择VIP过期时间");return}if(!r.role_id&&r.role_expired_at){f.error("请选择VIP");return}i(!0),r.user_ids=l.ids,oe({user_ids:l.ids,field:n,value:n==="tag"?null:n==="is_lock"?r.is_lock:r.role_id,role_expired_at:r.role_expired_at?B(new Date(r.role_expired_at)).format("YYYY-MM-DD HH:mm:ss"):null,tag_ids:r.tag_ids}).then(k=>{i(!1),f.success("成功！"),x(""),l.onSuccess()}).catch(k=>{i(!1)})}},h=r=>{console.log("Failed:",r)},g=r=>{r?o.setFieldsValue({is_lock:1}):o.setFieldsValue({is_lock:0})};return e.jsx(e.Fragment,{children:l.open?e.jsx(E,{title:"批量修改",onCancel:()=>{l.onCancel()},open:!0,width:450,maskClosable:!1,onOk:()=>{o.submit()},centered:!0,children:e.jsx("div",{className:"float-left mt-30",children:e.jsxs(c,{form:o,name:"config-update-dailog",labelCol:{span:7},wrapperCol:{span:17},initialValues:{remember:!0},onFinish:m,onFinishFailed:h,autoComplete:"off",children:[e.jsx(c.Item,{label:"设置",name:"field",rules:[{required:!0,message:"请选择设置!"}],children:e.jsx(_,{style:{width:"100%"},onChange:r=>{x(r)},allowClear:!0,placeholder:"请选择",options:u})}),n==="is_lock"&&e.jsx(c.Item,{label:"是否冻结账号",name:"is_lock",valuePropName:"checked",rules:[{required:!0,message:"请选择是否冻结账号!"}],children:e.jsx(ze,{onChange:g})}),n==="role_id"&&e.jsxs(e.Fragment,{children:[e.jsx(c.Item,{label:"设置会员",name:"role_id",rules:[{required:!0,message:"请选择会员!"}],children:e.jsx(_,{style:{width:"100%"},allowClear:!0,placeholder:"请选择会员",options:l.roles})}),e.jsx(c.Item,{label:"会员到期时间",name:"role_expired_at",rules:[{required:!0,message:"请选择会员到期时间!"}],children:e.jsx(K,{format:"YYYY-MM-DD HH:mm:ss",style:{width:300},showTime:!0,placeholder:"选择日期"})})]}),n==="tag"&&e.jsx(c.Item,{label:"设置标签",name:"tag_ids",rules:[{required:!0,message:"请选择标签!"}],children:e.jsx(_,{style:{width:"100%"},allowClear:!0,mode:"multiple",placeholder:"请选择标签",options:l.tags})})]})})}):null})},as=l=>{const[o]=c.useForm(),[d,i]=a.useState(!1),[n,x]=a.useState(""),[u,m]=a.useState(null);a.useEffect(()=>{l.open&&(o.setFieldsValue({nick_name:"",avatar:"",password:"",mobile:"",role_expired_at:"",role_id:[]}),m(null),x(""))},[l.open]);const h=r=>{if(!d){if(r.role_id&&r.role_id.length!==0&&!r.role_expired_at){f.error("请选择VIP过期时间");return}r.role_expired_at=r.role_expired_at?B(new Date(r.role_expired_at)).format("YYYY-MM-DD HH:mm:ss"):"",i(!0),Ae(r).then(k=>{i(!1),f.success("成功！"),l.onSuccess()}).catch(k=>{i(!1)})}},g=r=>{console.log("Failed:",r)};return e.jsx(e.Fragment,{children:l.open?e.jsx(E,{title:"添加学员资料",onCancel:()=>{l.onCancel()},open:!0,width:800,maskClosable:!1,onOk:()=>{o.submit()},centered:!0,children:e.jsx("div",{className:"float-left mt-30",children:e.jsxs(c,{form:o,name:"member-create-dailog",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:h,onFinishFailed:g,autoComplete:"off",children:[e.jsx(c.Item,{label:"学员昵称",name:"nick_name",rules:[{required:!0,message:"请输入学员昵称!"}],children:e.jsx(C,{style:{width:300},placeholder:"请输入学员昵称",allowClear:!0})}),e.jsx(c.Item,{label:"学员头像",name:"avatar",rules:[{required:!0,message:"请上传学员头像!"}],children:e.jsxs(H,{align:"baseline",style:{height:32},children:[e.jsx(c.Item,{name:"avatar",rules:[{required:!0,message:"请上传学员头像!"}],children:e.jsx(Ke,{text:"上传头像",onSelected:r=>{o.setFieldsValue({avatar:r}),x(r)}})}),e.jsx("div",{className:"ml-10",children:e.jsx(Be,{text:"建议尺寸：100x100"})})]})}),n&&e.jsxs($e,{style:{marginBottom:22},children:[e.jsx(ne,{span:3}),e.jsx(ne,{span:21,children:e.jsx("div",{className:"contain-thumb-box",style:{backgroundImage:`url(${n})`,width:100,height:100}})})]}),e.jsx(c.Item,{label:"手机号码",name:"mobile",rules:[{required:!0,message:"请输入手机号码!"}],children:e.jsx(C,{type:"number",style:{width:300},placeholder:"填输入学员登录手机号码",allowClear:!0})}),e.jsx(c.Item,{label:"登录密码",name:"password",rules:[{required:!0,message:"请输入登录密码!"}],children:e.jsx(C.Password,{style:{width:300},placeholder:"填输入登录密码",allowClear:!0})}),e.jsx(c.Item,{label:"设置会员",name:"role_id",children:e.jsx(_,{style:{width:300},onChange:r=>{m(r)},placeholder:"请选择会员",allowClear:!0,options:l.roles})}),e.jsx("div",{style:{display:u?"block":"none"},children:e.jsx(c.Item,{label:"会员到期",name:"role_expired_at",children:e.jsx(K,{format:"YYYY-MM-DD HH:mm:ss",style:{width:300},showTime:!0,placeholder:"授权会员到期时间"})})})]})})}):null})},{confirm:re}=E,{RangePicker:ns}=K,Ps=()=>{const l=Ve(),o=Pe(),[d,i]=a.useState(!1),[n,x]=a.useState([]),[u,m]=a.useState(1),[h,g]=a.useState(10),[r,k]=a.useState(0),[y,N]=a.useState(!1),[S,q]=a.useState(""),[F,$]=a.useState([]),[T,ce]=a.useState([]),[v,G]=a.useState([]),[J,de]=a.useState([]),[Y,Q]=a.useState([]),[me,X]=a.useState([]),[ue,I]=a.useState(!1),[Z,ee]=a.useState(!1),[W,he]=a.useState({}),[se,V]=a.useState(0),[xe,P]=a.useState(!1),[fe,L]=a.useState(!1),[j,A]=a.useState([]),[pe,U]=a.useState(!1),[ge,O]=a.useState(!1);a.useEffect(()=>{document.title="学员列表",l(Re("学员列表"))},[]),a.useEffect(()=>{je()},[u,h,y]);const je=()=>{d||(i(!0),Ue({page:u,size:h,sort:"id",order:"desc",keywords:S,role_id:F,tag_id:v,created_at:Y}).then(s=>{x(s.data.data.data),k(s.data.data.total);let t=s.data.user_remarks;t.length!==0&&he(t);let w=s.data.roles,R=[];w.map(M=>{R.push({label:M.name,value:M.id})}),ce(R);let Ne=s.data.tags,le=[];Ne.map(M=>{le.push({label:M.name,value:M.id})}),de(le),i(!1)}).catch(s=>{i(!1)}))};a.useEffect(()=>{Y&&Y.length>0||v&&v.length!==0||F&&F.length!==0||S?ee(!0):ee(!1)},[Y,F,v,S]);const te=()=>{m(1),g(10),x([]),A([]),q(""),X([]),Q([]),G([]),$([]),N(!y)},be={current:u,pageSize:h,total:r,onChange:(s,t)=>we(s,t),showSizeChanger:!0},we=(s,t)=>{m(s),g(t)},Ce={selectedRowKeys:j,onChange:(s,t)=>{A(s)}},_e=()=>{U(!0)},ke=()=>{if(j.length===0){f.error("请选择需要发消息的学员");return}V(0),P(!0)},ye=()=>{if(j.length===0){f.error("请先勾选要批量设置的学员");return}L(!0)},Se=[{title:"ID",width:"6%",render:(s,t)=>e.jsx("span",{children:t.id})},{title:"学员",width:"15%",render:(s,t)=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:t.avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:t.nick_name})]})})},{title:"手机号码",width:"11%",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.mobile&&e.jsx("span",{children:t.mobile}),!t.mobile&&e.jsx("span",{children:"-"})]})},{title:"VIP类型",width:"8%",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.role&&e.jsx("span",{children:t.role.name}),!t.role&&e.jsx("span",{children:"-"})]})},{title:"积分",width:"8%",dataIndex:"credit1",render:s=>e.jsx("span",{children:s})},{title:"标签",width:"10%",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.tags.length>0&&e.jsx(es,{tags:t.tags}),t.tags.length===0&&e.jsx("span",{children:"-"})]})},{title:"备注信息",width:"9%",render:(s,t)=>e.jsxs(e.Fragment,{children:[W[t.id]&&e.jsx(ss,{label:W[t.id].remark}),!W[t.id]&&e.jsx("span",{children:"-"})]})},{title:"注册时间",width:"14%",dataIndex:"created_at",render:s=>e.jsx("span",{children:He(s)})},{title:"标签",width:"6%",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.is_lock===1&&e.jsx("span",{className:"c-red",children:"·冻结"}),t.is_lock!==1&&e.jsx("span",{className:"c-green",children:"·正常"})]})},{title:"操作",width:"10%",fixed:"right",render:(s,t)=>{const w=[{key:"1",label:e.jsx(p,{type:"link",text:"编辑资料",class:"c-primary",icon:null,p:"member.update",onClick:()=>{Fe(t.id)},disabled:null})},{key:"2",label:e.jsx(p,{type:"link",text:"站内消息",class:"c-primary",icon:null,p:"member.message.send",onClick:()=>{V(t.id),P(!0)},disabled:null})},{key:"3",label:e.jsx(p,{type:"link",text:Me(t),class:"c-red",icon:null,p:"member.update",onClick:()=>{ve(t)},disabled:null})},{key:"4",label:e.jsx(p,{type:"link",text:"删除账号",class:"c-red",icon:null,p:"member.destroy",onClick:()=>{Ie(t.id)},disabled:null})}];return e.jsxs(H,{children:[e.jsx(p,{type:"link",text:"详情",class:"c-primary",icon:null,p:"member.detail",onClick:()=>{o("/member/"+t.id)},disabled:null}),e.jsx(Ee,{menu:{items:w},children:e.jsx(D,{type:"link",className:"c-primary",onClick:R=>R.preventDefault(),children:e.jsxs(H,{size:"small",align:"center",children:["更多",e.jsx(qe,{})]})})})]})}}],Fe=s=>{V(s),O(!0)},ve=s=>{let t="冻结后此账号将无法登录，确认冻结？",w=1;s.is_lock===1&&(t="解冻后此账号将正常登录，确认解冻？",w=0),re({title:"警告",icon:e.jsx(ae,{}),content:t,centered:!0,okText:"确认",cancelText:"取消",onOk(){oe({user_ids:[s.id],field:"is_lock",value:w}).then(()=>{f.success("成功"),b()})},onCancel(){console.log("Cancel")}})},Ie=s=>{re({title:"警告",icon:e.jsx(ae,{}),content:"删除学员账号将删除其所有数据，确认删除？",centered:!0,okText:"确认",cancelText:"取消",onOk(){Oe(s).then(()=>{f.success("成功"),b()})},onCancel(){console.log("Cancel")}})},b=()=>{m(1),x([]),A([]),N(!y)},Me=s=>{let t="冻结账号";return s.is_lock===1&&(t="解冻账号"),t},De=s=>s&&s>=B().add(0,"days");return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(ts,{open:xe,mid:se,ids:j,onCancel:()=>P(!1),onSuccess:()=>{P(!1),b()}}),e.jsx(ls,{tags:J,roles:T,open:fe,ids:j,onCancel:()=>L(!1),onSuccess:()=>{L(!1),b()}}),e.jsx(as,{open:pe,roles:T,onCancel:()=>U(!1),onSuccess:()=>{U(!1),b()}}),e.jsx(Ge,{id:se,open:ge,roles:T,onCancel:()=>O(!1),onSuccess:()=>{O(!1),V(0),b()}}),e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(p,{type:"primary",text:"新建学员",class:"",icon:null,p:"member.store",onClick:()=>_e(),disabled:null}),e.jsx(p,{type:"primary",text:"学员批量导入",class:"ml-10",icon:null,p:"member.store",onClick:()=>o("/member/import"),disabled:null}),e.jsx(p,{type:"primary",text:"批量发消息",class:"ml-10",icon:null,p:"member.message.send",onClick:()=>ke(),disabled:null}),e.jsx(p,{type:"primary",text:"批量设置",class:"ml-10",icon:null,p:"member.update",onClick:()=>ye(),disabled:null})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(C,{value:S,onChange:s=>{q(s.target.value)},allowClear:!0,style:{width:150},placeholder:"昵称或手机号"}),e.jsx(D,{className:"ml-10",onClick:te,children:"清空"}),e.jsx(D,{className:"ml-10",type:"primary",onClick:()=>{m(1),N(!y),I(!1)},children:"筛选"}),e.jsxs("div",{className:"drawerMore d-flex ml-10",onClick:()=>I(!0),children:[Z&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:Je}),e.jsx("span",{className:"act",children:"已选"})]}),!Z&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:Qe}),e.jsx("span",{children:"更多"})]})]})]})]}),e.jsxs("div",{className:"float-left mb-30 check-num",children:["已选择",j.length,"项"]}),e.jsx("div",{className:"float-left",children:e.jsx(Xe,{rowSelection:{type:"checkbox",...Ce},loading:d,columns:Se,dataSource:n,rowKey:s=>s.id,pagination:be})}),ue?e.jsx(Ze,{title:"更多筛选",onClose:()=>I(!1),maskClosable:!1,open:!0,footer:e.jsxs(H,{className:"j-b-flex",children:[e.jsx(D,{onClick:()=>{te(),I(!1)},children:"清空"}),e.jsx(D,{onClick:()=>{m(1),N(!y),I(!1)},type:"primary",children:"筛选"})]}),width:360,children:e.jsxs("div",{className:"float-left",children:[e.jsx(C,{value:S,onChange:s=>{q(s.target.value)},allowClear:!0,placeholder:"昵称或手机号"}),e.jsx(_,{style:{width:"100%",marginTop:20},value:F,onChange:s=>{$(s)},allowClear:!0,placeholder:"VIP会员",options:T}),e.jsx(_,{style:{width:"100%",marginTop:20},value:v,onChange:s=>{G(s)},allowClear:!0,placeholder:"学员标签",options:J}),e.jsx(ns,{disabledDate:De,format:"YYYY-MM-DD",value:me,style:{marginTop:20},onChange:(s,t)=>{t[1]+=" 23:59:59",Q(t),X(s)},placeholder:["注册-开始日期","注册-结束日期"]})]})}):null]})};export{Ps as default};