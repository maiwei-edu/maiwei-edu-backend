import{r,j as t,c9 as g}from"./index-b4683d61.js";import{S as u}from"./index-1a122d3f.js";const y=p=>{const{height:c,defautValue:l,setContent:d}=p,[a,n]=r.useState(""),[h,i]=r.useState(!1);return r.useEffect(()=>{l&&n(l)},[l]),r.useEffect(()=>{let e=document.getElementById("render-content"),o=e.getElementsByTagName("div")[0].querySelectorAll(".anchor");for(let s=0;s<o.length;s++)o[s].remove();let m=e.getElementsByTagName("div")[0].innerHTML;d(a,m)},[a]),t.jsx(t.Fragment,{children:t.jsxs("div",{style:{height:c||300},children:[t.jsx(g,{className:"gooooooooo",height:c||300,value:a,onChange:(e="")=>{n(e)},components:{toolbar:(e,o,m)=>{if(e.keyCommand==="image")return t.jsx("button",{"aria-label":"Insert image",disabled:o,onClick:s=>{s.stopPropagation(),i(!0),m(e,e.groupName)},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",children:t.jsx("path",{fill:"currentColor",d:"M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"})})})}}}),t.jsx("div",{id:"render-content",style:{display:"none"},children:t.jsx(g.Markdown,{source:a,style:{whiteSpace:"pre-wrap"}})}),t.jsx(u,{open:h,from:0,onCancel:()=>{let e=a;e.indexOf("![image](https://example.com/your-image.png)")!=-1&&(e=e.replace("![image](https://example.com/your-image.png)",""),n(e)),i(!1)},onSelected:e=>{let o=a;o.indexOf("![image](https://example.com/your-image.png)")!=-1&&(o=o.replace("![image](https://example.com/your-image.png)","![image]("+e+")"),n(o)),i(!1)}})]})})};export{y as M};
