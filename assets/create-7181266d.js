import{u as L,b as T,r as n,t as A,j as t,S as D,B as x,m as a}from"./index-b4683d61.js";import{g as J,s as O}from"./question-10c27e70.js";import{B as R}from"./index-5f967da4.js";import{P as V}from"./index-573a6ce5.js";import{S as z,Q as G,a as H,b as K,c as M,d as U,e as W}from"./cap-649d1eff.js";import{F as p}from"./index-d434f3eb.js";import{S as f}from"./index-c09cc6d7.js";import"./LeftOutlined-9e6e73a2.js";import"./CheckOutlined-e6bc730e.js";import"./Pagination-d2c763c6.js";import"./useForceUpdate-f2aff5e0.js";import"./responsiveObserver-dc429d3b.js";import"./Dragger-1df363a5.js";import"./DeleteOutlined-8e7e99fd.js";import"./index-7a22fa40.js";import"./index-1a122d3f.js";import"./InboxOutlined-1c6772bb.js";import"./selected-177ec16c.js";import"./row-4ee18533.js";import"./useIcons-e0af7133.js";import"./index-133d6e1c.js";import"./InfoCircleOutlined-4d24221b.js";import"./index-10f1a096.js";const je=()=>{const w=L(),g=T(),[y]=p.useForm(),[d,m]=n.useState(!1),[r,j]=n.useState(0),[S,q]=n.useState([]),[u,k]=n.useState([]),[N,Q]=n.useState([]),[F,P]=n.useState([]),[l,b]=n.useState({}),[C,v]=n.useState(null);n.useEffect(()=>{document.title="添加试题",w(A("添加试题")),B()},[]);const B=()=>{J().then(e=>{let s=[];e.data.categories.length>0&&e.data.categories.map(o=>{s.push({label:o.name,value:o.id})}),q(s);let i=[];e.data.types.length>0&&e.data.types.map(o=>{i.push({label:o.name,value:o.id})}),Q(i);let h=[];e.data.levels.length>0&&e.data.levels.map(o=>{h.push({label:o.name,value:o.id})}),P(h)})},I=e=>{if(d)return;m(!0);let s={category_id:e.category_id,type:e.type,level:e.level,content:null,score:null,answer:null,option1:null,option2:null,option3:null,option4:null,option5:null,option6:null,option7:null,option8:null,option9:null,option10:null,remark:null};b(s),j(r+1),m(!1)},_=e=>{console.log("Failed:",e)},E=()=>{if(!d){if((l.type===1||l.type===2)&&!l.option2){a.error("至少得有两个选项");return}if(l.type===6&&C){let e=!1;if(C.forEach((s,i)=>{let h=i+1;if(typeof s.score>"u"||s.score===null){a.error("请填写第"+h+"题子题分数"),e=!0;return}}),e)return}if(l.type===6&&!l.score){a.warning("请至少添加一个子题");return}if(l.type===3&&!l.score){a.warning("请填写每空分数");return}if(!l.score){a.warning("试题分数不能为空");return}if(!l.content){a.warning("试题内容不能为空");return}if((l.type===1||l.type===3||l.type===5)&&l.answer===null){a.warning("试题答案不能为空");return}if(l.type===2&&l.answer.length===0){a.warning("试题答案不能为空");return}m(!0),O(l).then(e=>{m(!1),a.success("保存成功！"),g(-1)}).catch(e=>{m(!1)})}},c=(e,s)=>{let i={...l};Object.assign(i,e),b(i),v(s||null)};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(R,{title:"添加试题"}),t.jsx("div",{className:"float-left step-box mb-30 mt-30",children:t.jsx(z,{current:r,items:[{title:"确认试题类型"},{title:"完善试题信息"}]})}),t.jsx("div",{className:"float-left",style:{display:r===0?"block":"none"},children:t.jsxs(p,{form:y,name:"question-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:I,onFinishFailed:_,autoComplete:"off",children:[t.jsx(p.Item,{label:"所属分类",name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:t.jsxs(D,{align:"baseline",style:{height:32},children:[t.jsx(p.Item,{name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:t.jsx(f,{style:{width:300},allowClear:!0,placeholder:"请选择分类",options:S})}),t.jsx(V,{type:"link",text:"分类管理",class:"c-primary",icon:null,p:"addons.Paper.question_category.list",onClick:()=>{g("/exam/question/category/index")},disabled:null})]})}),t.jsx(p.Item,{label:"试题类型",name:"type",rules:[{required:!0,message:"请选择试题类型!"}],children:t.jsx(f,{style:{width:300},allowClear:!0,placeholder:"请选择试题类型",onChange:e=>{k(e)},options:N})}),t.jsx(p.Item,{label:"试题难度",name:"level",rules:[{required:!0,message:"请选择试题难度!"}],children:t.jsx(f,{style:{width:300},allowClear:!0,placeholder:"请选择试题难度",options:F})})]})}),r===1&&t.jsxs("div",{className:"float-left pl-200",children:[u===1&&t.jsx(G,{question:null,index:null,onChange:(e,s)=>c(e,s)}),u===2&&t.jsx(H,{question:null,index:null,onChange:(e,s)=>c(e,s)}),u===3&&t.jsx(K,{question:null,index:null,onChange:(e,s)=>c(e,s)}),u===4&&t.jsx(M,{question:null,index:null,onChange:(e,s)=>c(e,s)}),u===5&&t.jsx(U,{question:null,index:null,onChange:(e,s)=>c(e,s)}),u===6&&t.jsx(W,{question:null,onChange:(e,s)=>c(e,s)})]}),t.jsx("div",{className:"bottom-menus",children:t.jsxs("div",{className:"bottom-menus-box",children:[t.jsxs("div",{children:[r===1&&t.jsx(x,{loading:d,type:"primary",onClick:()=>E(),children:"保存"}),r===0&&t.jsx(x,{loading:d,onClick:()=>y.submit(),children:"下一步"})]}),r===1&&t.jsx("div",{className:"ml-24",children:t.jsx(x,{onClick:()=>j(0),children:"上一步"})}),t.jsx("div",{className:"ml-24",children:t.jsx(x,{type:"default",onClick:()=>g(-1),children:"取消"})})]})})]})};export{je as default};
