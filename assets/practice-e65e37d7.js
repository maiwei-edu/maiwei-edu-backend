import{c as a}from"./index-b4683d61.js";function n(e){return a.get("/backend/addons/Paper/practice/index",e)}function c(){return a.get("/backend/addons/Paper/practice/create",{})}function s(e){return a.post("/backend/addons/Paper/practice/create",e)}function d(e){return a.get(`/backend/addons/Paper/practice/${e}`,{})}function p(e){return a.post("/backend/addons/Paper/practice/delete/multi",e)}function o(e,t){return a.put(`/backend/addons/Paper/practice/${e}`,t)}function i(e,t){return a.get(`/backend/addons/Paper/practice/${e}/users`,t)}function u(e,t){return a.post(`/backend/addons/Paper/practice/${e}/user/delete`,t)}function f(e,t){return a.post(`/backend/addons/Paper/practice/${e}/user/insert`,t)}function b(e,t){return a.get(`/backend/addons/Paper/practice/${e}/user/${t}/progress`,{})}function k(e){return a.get("/backend/addons/Paper/practice_chapter/index",e)}function P(e){return a.post("/backend/addons/Paper/practice_chapter/delete/multi",e)}function h(e){return a.post("/backend/addons/Paper/practice_chapter/create",e)}function l(e){return a.get(`/backend/addons/Paper/practice_chapter/${e}`,{})}function $(e,t){return a.put(`/backend/addons/Paper/practice_chapter/${e}`,t)}function g(e,t){return a.get(`/backend/addons/Paper/practice_chapter/${e}/questions`,t)}function q(e,t){return a.get(`/backend/addons/Paper/practice_chapter/${e}/questions/params`,t)}function _(e,t){return a.post(`/backend/addons/Paper/practice_chapter/${e}/questions/delete`,t)}function m(e,t){return a.post(`/backend/addons/Paper/practice_chapter/${e}/questions`,t)}export{d as a,i as b,c,p as d,u as e,f,b as g,k as h,P as i,h as j,l as k,n as l,$ as m,_ as n,q as o,m as p,g as q,s,o as u};
