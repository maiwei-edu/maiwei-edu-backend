import{u as c,b as d,k as p,r as i,t as _,j as e}from"./index-b4683d61.js";import{q as u}from"./member-43775307.js";import{B as x}from"./index-5f967da4.js";import{I as b}from"./index-e35c971c.js";import"./LeftOutlined-9e6e73a2.js";import"./addEventListener-a27ae3f4.js";const g="_image_1rgl1_51",s={"user-main-body":"_user-main-body_1rgl1_1","panel-info-box":"_panel-info-box_1rgl1_6","panel-info-item":"_panel-info-item_1rgl1_19","info-item":"_info-item_1rgl1_28","info-label":"_info-label_1rgl1_36","info-value":"_info-value_1rgl1_46",image:g},I=()=>{const o=c();d();const r=p(),[n,l]=i.useState(!1),[a,m]=i.useState({});i.useEffect(()=>{document.title="实名信息",o(_("实名信息"))},[]),i.useEffect(()=>{f()},[r.memberId]);const f=()=>{n||(l(!0),u(Number(r.memberId)).then(t=>{m(t.data.data),l(!1)}).catch(t=>{l(!1)}))};return e.jsxs("div",{className:s["user-main-body"],children:[e.jsxs("div",{className:"float-left bg-white br-15 p-30",children:[e.jsx(x,{title:"实名信息"}),e.jsxs("div",{className:s["panel-info-box"],children:[e.jsxs("div",{className:s["panel-info-item"],children:["真实姓名： ",a.profile?a.profile.real_name:""]}),e.jsxs("div",{className:s["panel-info-item"],children:["身份证号码： ",a.profile?a.profile.id_number:""]})]})]}),e.jsx("div",{className:"panel-box mt-30",children:e.jsx("div",{className:"panel-body",children:e.jsx("div",{className:"float-left mb-15 d-flex",children:e.jsxs("div",{className:s["info-item"],children:[e.jsx("div",{className:s["info-label"],children:"认证照片："}),e.jsx("div",{className:s["info-value"],children:a.profile&&a.profile.verify_image_url?e.jsx(b,{width:150,height:200,style:{borderRadius:8},src:a.profile.verify_image_url}):e.jsx("div",{className:s.image})})]})})})})]})};export{I as default};
