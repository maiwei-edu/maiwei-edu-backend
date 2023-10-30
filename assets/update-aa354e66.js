import{r,j as e,M as y,g as I,I as d,S as C,m as x,h as D}from"./index-b4683d61.js";import{c as Y,u as F}from"./member-43775307.js";import{d as S,D as k}from"./index-cc7d88a3.js";import{H as M}from"./index-133d6e1c.js";import{U as H}from"./index-4432445b.js";import{F as l}from"./index-d434f3eb.js";import{R as v,C as h}from"./row-4ee18533.js";import{S as V}from"./index-c09cc6d7.js";const A=t=>{const[s]=l.useForm(),[m,c]=r.useState(!0),[j,i]=r.useState(!1),[u,o]=r.useState(""),[p,n]=r.useState(null);r.useEffect(()=>{t.open&&(c(!0),s.setFieldsValue({password:""}),n(null),o("")),t.id>0&&f()},[t.open,t.id]);const f=async()=>{await _(),c(!1)},_=async()=>{const a=await Y(t.id);s.setFieldsValue({nick_name:a.data.nick_name,avatar:a.data.avatar,mobile:a.data.mobile,role_expired_at:a.data.role_id==0?"":S(a.data.role_expired_at,"YYYY-MM-DD HH:mm:ss"),role_id:a.data.role_id==0?[]:a.data.role_id}),n(a.data.role_id==0?null:a.data.role_id),o(a.data.avatar)},b=a=>{if(!j){if(a.role_id&&a.role_id.length!==0&&!a.role_expired_at){x.error("请选择VIP过期时间");return}a.role_expired_at=a.role_expired_at?D(new Date(a.role_expired_at)).format("YYYY-MM-DD HH:mm:ss"):"",i(!0),F(t.id,a).then(w=>{i(!1),x.success("成功！"),t.onSuccess()}).catch(w=>{i(!1)})}},g=a=>{console.log("Failed:",a)};return e.jsx(e.Fragment,{children:t.open?e.jsxs(y,{title:"编辑学员资料",onCancel:()=>{t.onCancel()},open:!0,width:800,maskClosable:!1,onOk:()=>{s.submit()},centered:!0,children:[m&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx(I,{})}),e.jsx("div",{style:{display:m?"none":"block"},className:"float-left mt-30",children:e.jsxs(l,{form:s,name:"member-update-dailog",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:b,onFinishFailed:g,autoComplete:"off",children:[e.jsx(l.Item,{label:"学员昵称",name:"nick_name",rules:[{required:!0,message:"请输入学员昵称!"}],children:e.jsx(d,{style:{width:300},placeholder:"请输入学员昵称",allowClear:!0})}),e.jsx(l.Item,{label:"学员头像",name:"avatar",rules:[{required:!0,message:"请上传学员头像!"}],children:e.jsxs(C,{align:"baseline",style:{height:32},children:[e.jsx(l.Item,{name:"avatar",rules:[{required:!0,message:"请上传学员头像!"}],children:e.jsx(H,{text:"上传头像",onSelected:a=>{s.setFieldsValue({avatar:a}),o(a)}})}),e.jsx("div",{className:"ml-10",children:e.jsx(M,{text:"建议尺寸：100x100"})})]})}),u&&e.jsxs(v,{style:{marginBottom:22},children:[e.jsx(h,{span:3}),e.jsx(h,{span:21,children:e.jsx("div",{className:"contain-thumb-box",style:{backgroundImage:`url(${u})`,width:100,height:100}})})]}),e.jsx(l.Item,{label:"手机号码",name:"mobile",rules:[{required:!0,message:"请输入手机号码!"}],children:e.jsx(d,{type:"number",style:{width:300},placeholder:"填输入学员登录手机号码",allowClear:!0})}),e.jsx(l.Item,{label:"登录密码",name:"password",children:e.jsx(d.Password,{style:{width:300},placeholder:"如需修改请输入新密码",allowClear:!0})}),e.jsx(l.Item,{label:"设置会员",name:"role_id",children:e.jsx(V,{style:{width:300},onChange:a=>{n(a)},placeholder:"请选择会员",allowClear:!0,options:t.roles})}),e.jsx("div",{style:{display:p?"block":"none"},children:e.jsx(l.Item,{label:"会员到期",name:"role_expired_at",children:e.jsx(k,{format:"YYYY-MM-DD HH:mm:ss",style:{width:300},showTime:!0,placeholder:"授权会员到期时间"})})})]})})]}):null})};export{A as M};
