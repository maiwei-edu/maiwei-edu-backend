import{b5 as l,T as d}from"./index-b4683d61.js";const m=["xxl","xl","lg","md","sm","xs"],x=n=>({xs:`(max-width: ${n.screenXSMax}px)`,sm:`(min-width: ${n.screenSM}px)`,md:`(min-width: ${n.screenMD}px)`,lg:`(min-width: ${n.screenLG}px)`,xl:`(min-width: ${n.screenXL}px)`,xxl:`(min-width: ${n.screenXXL}px)`}),$=n=>{const e=n,t=[].concat(m).reverse();return t.forEach((o,a)=>{const r=o.toUpperCase(),i=`screen${r}Min`,s=`screen${r}`;if(!(e[i]<=e[s]))throw new Error(`${i}<=${s} fails : !(${e[i]}<=${e[s]})`);if(a<t.length-1){const c=`screen${r}Max`;if(!(e[s]<=e[c]))throw new Error(`${s}<=${c} fails : !(${e[s]}<=${e[c]})`);const p=`screen${t[a+1].toUpperCase()}Min`;if(!(e[c]<=e[p]))throw new Error(`${c}<=${p} fails : !(${e[c]}<=${e[p]})`)}}),n};function M(){const[,n]=l(),e=x($(n));return d.useMemo(()=>{const t=new Map;let o=-1,a={};return{matchHandlers:{},dispatch(r){return a=r,t.forEach(i=>i(a)),t.size>=1},subscribe(r){return t.size||this.register(),o+=1,t.set(o,r),r(a),o},unsubscribe(r){t.delete(r),t.size||this.unregister()},unregister(){Object.keys(e).forEach(r=>{const i=e[r],s=this.matchHandlers[i];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),t.clear()},register(){Object.keys(e).forEach(r=>{const i=e[r],s=h=>{let{matches:p}=h;this.dispatch(Object.assign(Object.assign({},a),{[r]:p}))},c=window.matchMedia(i);c.addListener(s),this.matchHandlers[i]={mql:c,listener:s},s(c)})},responsiveMap:e}},[n])}export{m as r,M as u};
