import{a as s,j as i,B as c}from"./index-3fd54424.js";const u=e=>{const l=s(n=>n.loginUser.value.user),t=()=>{if(!l.permissions)return!1;if(Array.isArray(e.p)){let n=!1;if(e.p)for(let a=0;a<e.p.length;a++)typeof l.permissions[e.p[a]]<"u"&&(n=!0);return n}else return typeof l.permissions[e.p]<"u"};return i.jsxs(i.Fragment,{children:[t()&&e.type==="link"&&i.jsx(c,{size:"small",className:e.class==="c-red"?"c-red-link":e.class,type:"link",icon:e.icon,onClick:()=>{e.onClick()},disabled:e.disabled,children:e.text}),t()&&e.type!=="link"&&e.type==="danger"&&i.jsx(c,{className:e.class,type:"primary",icon:e.icon,onClick:()=>{e.onClick()},disabled:e.disabled,danger:!0,children:e.text}),t()&&e.type!=="link"&&e.type!=="danger"&&i.jsx(c,{className:e.class,type:e.type,icon:e.icon,onClick:()=>{e.onClick()},disabled:e.disabled,children:e.text})]})};export{u as P};