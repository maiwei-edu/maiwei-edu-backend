import{f as N,u as S,b,r as n,t as k,m as B,j as t,B as P}from"./index-b4683d61.js";import{v as R}from"./paper-7f0d6524.js";import{B as L}from"./index-5f967da4.js";import{C as U,S as O,I as D,Q as E,J as I,a as J,h as Q}from"./htmlToPdf-f6fb4c46.js";import"./LeftOutlined-9e6e73a2.js";import"./index-ae12b8d6.js";import"./index-9c2b15e9.js";import"./Dragger-1df363a5.js";import"./useForceUpdate-f2aff5e0.js";import"./DeleteOutlined-8e7e99fd.js";import"./CheckOutlined-e6bc730e.js";const Y=()=>{const c=new URLSearchParams(N().search),m=S(),g=b();n.useState(!1);const[i,q]=n.useState({}),[l,h]=n.useState({}),[w,_]=n.useState({}),[p,j]=n.useState([]),[d,v]=n.useState(Number(c.get("id"))),[f,x]=n.useState(Number(c.get("pid")));n.useEffect(()=>{document.title="查看考试",m(k("查看考试"))},[]),n.useEffect(()=>{v(Number(c.get("id"))),x(Number(c.get("pid")))},[c.get("id"),c.get("pid")]),n.useEffect(()=>{y()},[d,f]);const y=()=>{R(d,f).then(s=>{q(s.data.paper),h(s.data.user_paper),_(s.data.user);let o=s.data.questions;if(o.length===0){B.error("未获取到试题"),g(-1);return}let e=[];for(let r in o)e.push(...o[r]);j(e)})},C=()=>{let o=document.querySelector("#pdfDom").querySelectorAll("img");if(o){var e;for(e=1;e<o.length;e++){o[e].src+="&timeSign="+Date.now().toString(),window.URL=window.URL||window.webkitURL;var r=new XMLHttpRequest;r.open("get",o[e].src,!0),r.send()}}Q.getPdf(i.title)},u=(s,o,e)=>{console.log(s+":"+e+":"+o)};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(L,{title:"查看考试"}),t.jsx(P,{className:"mt-30",type:"primary",onClick:()=>{C()},children:"下载pdf格式试卷"}),t.jsx("div",{className:"float-left",id:"pdfDom",children:t.jsxs("div",{className:"read-paper-box",children:[t.jsxs("div",{className:"top float-left d-flex",children:[t.jsxs("div",{className:"user-info",children:["考生：",w.nick_name]}),t.jsxs("div",{className:"user-info",children:["考卷：",i.title]}),t.jsxs("div",{className:"score-info",children:["及格分/总分：",i.pass_score,"/",i.score]}),l&&l.status===2?t.jsxs("div",{className:"score",children:["考试得分：",t.jsxs("strong",{children:[l.score,"分"]})]}):t.jsx("div",{className:"score",children:"阅卷中"})]}),t.jsx("div",{className:"line float-left d-flex"}),p&&l&&t.jsx("div",{className:"questions-box",children:p.length>0&&p.map((s,o)=>t.jsxs("div",{className:"item",children:[s.question.type===1&&t.jsx(U,{num:o+1,question:s.question,reply:s.answer_content,score:s.score,isCorrect:s.is_correct,isOver:!0,wrongBook:!1,update:(e,r,a)=>{u(e,r,a)}},s.question_id),s.question.type===2&&t.jsx(O,{num:o+1,question:s.question,reply:s.answer_contents_rows,score:s.score,isCorrect:s.is_correct,isOver:!0,wrongBook:!1,update:(e,r,a)=>{u(e,r,a)}},s.question_id),s.question.type===3&&t.jsx(D,{num:o+1,question:s.question,reply:s.answer_contents_rows,score:s.score,isCorrect:s.is_correct,isOver:!0,wrongBook:!1,update:(e,r,a)=>{u(e,r,a)}},s.question_id),s.question.type===4&&t.jsx(E,{num:o+1,question:s.question,reply:s.answer_content,thumbs:s.thumbs_rows,score:s.score,isCorrect:s.is_correct,isOver:!0,showImage:!0,wrongBook:!1,update:(e,r,a)=>{u(e,r,a)}},s.question_id),s.question.type===5&&t.jsx(I,{num:o+1,question:s.question,reply:s.answer_contents_rows,score:s.score,isCorrect:s.is_correct,isOver:!0,wrongBook:!1,update:(e,r,a)=>{u(e,r,a)}},s.question_id),s.question.type===6&&t.jsx(J,{num:o+1,question:s.question,reply:s.answer_contents_rows,score:s.score,isCorrect:s.is_correct,isOver:!0,showImage:!0,wrongBook:!1,update:(e,r,a)=>{u(e,r,a)}},s.question_id)]},o))})]})})]})};export{Y as default};
