import{f as ee,u as te,b as se,r as a,t as re,j as e,g as ie,S as n,I as v,B as k,m as b,h as ae}from"./index-3fd54424.js";import{a as ne,c as le,u as oe}from"./topic-e7e1a389.js";import{B as ce}from"./index-c3c15456.js";import{P as de}from"./index-df05a090.js";import{H as c}from"./index-d5d1e443.js";import{U as me}from"./index-edf85c8b.js";import{Q as F}from"./index-019b594b.js";import{M as y}from"./index-7d5b5e96.js";import{d as he,D as ue}from"./index-a9db941d.js";import{F as r}from"./index-0ca68444.js";import{S as ge}from"./index-ff4e3b6e.js";import{R as xe,C as q}from"./row-98a37fbf.js";import{S as V}from"./index-27712364.js";import"./LeftOutlined-a0f8cfa6.js";import"./InfoCircleOutlined-fefc69ce.js";import"./InboxOutlined-35d156a9.js";import"./selected-7e6221ce.js";import"./Dragger-3ad849c3.js";import"./useForceUpdate-56773729.js";import"./DeleteOutlined-529a4ffa.js";import"./CheckOutlined-44e74bd9.js";import"./useIcons-235bc0cd.js";import"./Pagination-a2ebdf00.js";import"./responsiveObserver-a0dea2e5.js";import"./index-749454db.js";const Oe=()=>{const g=new URLSearchParams(ee().search),[i]=r.useForm(),M=te(),x=se(),[w,Y]=a.useState(!0),[N,f]=a.useState(!1),[R,P]=a.useState([]),[p,d]=a.useState(0),[C,B]=a.useState(0),[H,m]=a.useState(0),[I,S]=a.useState(""),[l,E]=a.useState(""),[A,O]=a.useState(""),[o,K]=a.useState(""),[h,T]=a.useState(Number(g.get("id"))),[U,j]=a.useState(""),[W,_]=a.useState("");a.useEffect(()=>{document.title="编辑图文",M(re("编辑图文")),L()},[h]),a.useEffect(()=>{T(Number(g.get("id")))},[g.get("id")]);const L=async()=>{await $(),await Q(),Y(!1)},Q=async()=>{if(h===0)return;var s=(await ne(h)).data;i.setFieldsValue({cid:s.cid,title:s.title,thumb:s.thumb,is_show:s.is_show,is_vip_free:s.is_vip_free,short_desc:s.short_desc,original_content:s.original_content,free_content:s.free_content,charge:s.charge,sorted_at:he(s.sorted_at,"YYYY-MM-DD HH:mm")}),s.charge>0?(i.setFieldsValue({is_free:0}),m(0)):(i.setFieldsValue({is_free:1}),m(1)),d(s.charge),K(s.original_content),O(s.free_content),_(s.free_content_render),j(s.render_content),B(s.charge),S(s.thumb),E(s.editor)},$=async()=>{let s=(await le()).data;const D=[];for(let u=0;u<s.length;u++)D.push({label:s[u].name,value:s[u].id});P(D)},z=t=>{if(!N){if(t.is_free===1&&(t.charge=0,t.is_vip_free=!1,t.free_content="",t.free_content_render="",_("")),Number(t.charge)%1!==0){b.error("图文价格必须为整数");return}if(t.is_free===0&&Number(t.charge)<=0){b.error("图文价格必须输入且大于0");return}t.editor=l,l==="MARKDOWN"?(t.render_content=U,t.free_content_render=W):(t.render_content=t.original_content,t.free_content_render=t.free_content),t.sorted_at=ae(new Date(t.sorted_at)).format("YYYY-MM-DD HH:mm"),t.is_need_login=0,f(!0),oe(h,t).then(s=>{f(!1),b.success("保存成功！"),x(-1)}).catch(s=>{f(!1)})}},G=t=>{console.log("Failed:",t)},J=t=>{t?i.setFieldsValue({is_show:1}):i.setFieldsValue({is_show:0})},X=t=>{t?i.setFieldsValue({is_vip_free:!0}):i.setFieldsValue({is_vip_free:!1})},Z=t=>{t?(i.setFieldsValue({is_free:1,charge:0}),m(1),d(0)):(i.setFieldsValue({is_free:0,original_charge:C}),d(C),m(0))};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(ce,{title:"编辑图文"}),w&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx(ie,{})}),e.jsx("div",{style:{display:w?"none":"block"},className:"float-left mt-30",children:e.jsxs(r,{form:i,name:"topic-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:z,onFinishFailed:G,autoComplete:"off",children:[e.jsx(r.Item,{name:"cid",label:"所属分类",rules:[{required:!0,message:"请选择分类!"}],children:e.jsxs(n,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"cid",rules:[{required:!0,message:"请选择分类!"}],children:e.jsx(ge,{style:{width:300},allowClear:!0,placeholder:"请选择分类",options:R})}),e.jsx("div",{children:e.jsx(de,{type:"link",text:"分类管理",class:"c-primary",icon:null,p:"addons.meedu_topics.category.list",onClick:()=>{x("/topic/category/index")},disabled:null})})]})}),e.jsx(r.Item,{label:"图文名称",name:"title",rules:[{required:!0,message:"请输入图文名称!"}],children:e.jsx(v,{style:{width:300},placeholder:"请输入图文名称",allowClear:!0})}),e.jsx(r.Item,{label:"图文封面",name:"thumb",rules:[{required:!0,message:"请上传图文封面!"}],children:e.jsxs(n,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"thumb",rules:[{required:!0,message:"请上传图文封面!"}],children:e.jsx(me,{text:"选择图片",onSelected:t=>{i.setFieldsValue({thumb:t}),S(t)}})}),e.jsx("div",{className:"ml-10",children:e.jsx(c,{text:"建议尺寸400x300 宽高比4:3"})})]})}),I&&e.jsxs(xe,{style:{marginBottom:22},children:[e.jsx(q,{span:3}),e.jsx(q,{span:21,children:e.jsx("div",{className:"normal-thumb-box",style:{backgroundImage:`url(${I})`,width:200,height:150}})})]}),e.jsx(r.Item,{label:"免费",name:"is_free",valuePropName:"checked",children:e.jsx(V,{onChange:Z})}),H===0&&e.jsx(r.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(n,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(v,{style:{width:300},placeholder:"单位：元",allowClear:!0,type:"number",onChange:t=>{d(Number(t.target.value))}})}),e.jsx("div",{className:"ml-10",children:e.jsx(c,{text:"请输入整数"})})]})}),p>0&&e.jsx(r.Item,{label:"会员免费",name:"is_vip_free",children:e.jsxs(n,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"is_vip_free",valuePropName:"checked",children:e.jsx(V,{onChange:X})}),e.jsx("div",{className:"ml-10",children:e.jsx(c,{text:"如果开启该选项，则购买VIP会员的学员可以无需购买即可观看该电子书。"})})]})}),e.jsx(r.Item,{label:"上架时间",required:!0,children:e.jsxs(n,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"sorted_at",rules:[{required:!0,message:"请选择上架时间!"}],children:e.jsx(ue,{format:"YYYY-MM-DD HH:mm",style:{width:300},showTime:!0,placeholder:"请选择上架时间"})}),e.jsx("div",{className:"ml-10",children:e.jsx(c,{text:"上架时间越晚，排序越靠前"})})]})}),e.jsx(r.Item,{label:"显示",name:"is_show",children:e.jsxs(n,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"is_show",valuePropName:"checked",children:e.jsx(V,{onChange:J})}),e.jsx("div",{className:"ml-10",children:e.jsx(c,{text:"关闭后电此图文在前台隐藏显示"})})]})}),p>0&&e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{label:"免费内容",name:"free_content",rules:[{required:!0,message:"请输入付费内容!"}],style:{height:840},children:e.jsx("div",{className:"w-800px",children:l==="MARKDOWN"?e.jsx(y,{height:800,defautValue:o,setContent:(t,s)=>{i.setFieldsValue({free_content:t}),_(s)}}):e.jsx(F,{mode:"",height:800,defautValue:A,isFormula:!1,setContent:t=>{i.setFieldsValue({free_content:t})}})})}),e.jsx(r.Item,{label:"付费内容",name:"original_content",rules:[{required:!0,message:"请输入付费内容!"}],style:{height:840},children:e.jsx("div",{className:"w-800px",children:l==="MARKDOWN"?e.jsx(y,{height:800,defautValue:o,setContent:(t,s)=>{i.setFieldsValue({original_content:t}),j(s)}}):e.jsx(F,{mode:"",height:800,defautValue:o,isFormula:!1,setContent:t=>{i.setFieldsValue({original_content:t})}})})})]}),p===0&&e.jsx(r.Item,{label:"文章内容",name:"original_content",rules:[{required:!0,message:"请输入文章内容!"}],style:{height:840},children:e.jsx("div",{className:"w-800px",children:l==="MARKDOWN"?e.jsx(y,{height:800,defautValue:o,setContent:(t,s)=>{i.setFieldsValue({original_content:t}),j(s)}}):e.jsx(F,{mode:"",height:800,defautValue:o,isFormula:!1,setContent:t=>{i.setFieldsValue({original_content:t})}})})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(k,{loading:N,type:"primary",onClick:()=>i.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(k,{type:"default",onClick:()=>x(-1),children:"取消"})})]})})]})};export{Oe as default};