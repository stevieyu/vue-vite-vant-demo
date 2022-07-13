import{q as se,s as Q,v as I,m as A,f as b,x as ie,y as K,z as Y}from"./index.56d0a142.js";const le={},ce=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),fe=()=>le,k=e=>e!==null&&typeof e=="object",F=e=>e instanceof Function,M=e=>e==null,H=typeof window>"u",J=()=>{var e;return H||M((e=window.document)===null||e===void 0?void 0:e.visibilityState)?!0:window.document.visibilityState==="visible"},de=()=>{var e,r;return(e=!H&&((r=window.navigator)===null||r===void 0?void 0:r.onLine))!==null&&e!==void 0?e:!0},W=()=>new Promise(()=>{});function ve(e,r){const n=Object.assign({},e);for(const t of r)delete n[t];return n}const me=(e,r=!1)=>{const n=`Warning: [vue-request] ${e}`;if(r)return new Error(n);console.error(n)},P=e=>ie(e)?e.value:e,$=new Map,ge=e=>M(e)?void 0:$.get(e),he=(e,r,n)=>{const t=$.get(e);t!=null&&t.timer&&clearTimeout(t.timer);const a=setTimeout(()=>$.delete(e),r);$.set(e,{...n,timer:a})},C=e=>e;function X(e,r,n){let t,a,l,i,o,u,c=0,g=!1,R=!1,E=!0;const w=!r&&r!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");r=+r||0,k(n)&&(g=!!n.leading,R="maxWait"in n,l=R?Math.max(+n.maxWait||0,r):l,E="trailing"in n?!!n.trailing:E);function d(m){const O=t,B=a;return t=a=void 0,c=m,i=e.apply(B,O),i}function T(m,O){return w?(window.cancelAnimationFrame(o),window.requestAnimationFrame(m)):setTimeout(m,O)}function f(m){if(w)return window.cancelAnimationFrame(m);clearTimeout(m)}function p(m){return c=m,o=T(s,r),g?d(m):i}function v(m){const O=m-u,B=m-c,z=r-O;return R?Math.min(z,l-B):z}function _(m){const O=m-u,B=m-c;return u===void 0||O>=r||O<0||R&&B>=l}function s(){const m=Date.now();if(_(m))return h(m);o=T(s,v(m))}function h(m){return o=void 0,E&&t?d(m):(t=a=void 0,i)}function y(){o!==void 0&&f(o),c=0,t=u=a=o=void 0}function x(){return o===void 0?i:h(Date.now())}function L(){return o!==void 0}function S(...m){const O=Date.now(),B=_(O);if(t=m,a=this,u=O,B){if(o===void 0)return p(u);if(R)return o=T(s,r),d(u)}return o===void 0&&(o=T(s,r)),i}return S.cancel=y,S.flush=x,S.pending=L,S}function Ee(e,r,n){let t=!0,a=!0;if(typeof e!="function")throw new TypeError("Expected a function");return k(n)&&(t="leading"in n?!!n.leading:t,a="trailing"in n?!!n.trailing:a),X(e,r,{leading:t,trailing:a,maxWait:r})}var Z=C((e,{debounceInterval:r,debounceOptions:n,manual:t})=>{const a=b(!1),l=b(),i=A(()=>n),o=A(()=>P(r)),u=b(e.context.runAsync);return t||(a.value=!0),Y(c=>{M(o.value)||(l.value=X(g=>g(),o.value,i.value),e.context.runAsync=(...g)=>new Promise((R,E)=>{a.value?(a.value=!1,u.value(...g).then(R).catch(E)):l.value(()=>{u.value(...g).then(R).catch(E)})}),c(()=>{var g;(g=l.value)===null||g===void 0||g.cancel(),e.context.runAsync=u.value}))}),{onCancel(){var c;(c=l.value)===null||c===void 0||c.cancel()}}}),q=C((e,{errorRetryCount:r=0,errorRetryInterval:n=0})=>{const t=b(),a=b(0),l=A(()=>P(r)),i=A(()=>P(n));let o=!1;const u=()=>{a.value=0},c=A(()=>{if(i.value)return i.value;const E=1e3,w=1,d=9,T=Math.floor(Math.random()*2**Math.min(a.value,d)+w);return E*T}),g=()=>{let E;const w=l.value===-1,d=a.value<l.value;return(w||d)&&(w||(a.value+=1),E=setTimeout(()=>{o=!0,e.context.refresh()},c.value)),()=>E&&clearTimeout(E)},R=()=>{t.value&&t.value()};return{onBefore(){o||u(),o=!1,R()},onSuccess(){u()},onError(){t.value=g()},onCancel(){u(),R()}}}),ee=C((e,{ready:r=b(!0),manual:n,defaultParams:t=[]})=>(K(r,a=>{!n&&a&&e.context.run(...t)},{flush:"sync"}),{onBefore(){if(!r.value)return e.loading.value=!1,{isBreak:!0}}})),ne=C((e,{refreshDeps:r=[],refreshDepsAction:n,manual:t})=>(r!=null&&r.length&&K(r,()=>{n?n():!t&&e.context.refresh()}),{})),te=C((e,{throttleInterval:r,throttleOptions:n})=>{const t=b(),a=A(()=>P(r)),l=A(()=>n),i=b(e.context.runAsync);return Y(o=>{if(M(r))return{};t.value=Ee(u=>u(),a.value,l.value),e.context.runAsync=(...u)=>new Promise((c,g)=>{t.value(()=>{i.value(...u).then(c).catch(g)})}),o(()=>{var u;(u=t.value)===null||u===void 0||u.cancel(),e.context.runAsync=i.value})}),{onCancel(){var o;(o=t.value)===null||o===void 0||o.cancel()}}});const pe=(e,r)=>n=>{Object.keys(n).forEach(t=>{e[t].value=n[t]}),r.forEach(t=>t(e))},Re=(e,r)=>()=>{let n=r;for(let t=e.length;t-- >0;)n=e[t](n);return n()},we=(e,r,n)=>{var t,a;const{initialData:l,onSuccess:i,onError:o,onBefore:u,onAfter:c}=r,g=b((t=n==null?void 0:n.loading)!==null&&t!==void 0?t:!1),R=I((a=n==null?void 0:n.data)!==null&&a!==void 0?a:l),E=I(n==null?void 0:n.error),w=b(n==null?void 0:n.params),d=b([]),T=I("pending"),f={},p=pe({status:T,loading:g,data:R,error:E,params:w},[]),v=(s,...h)=>{if(s==="onQuery"){const y=d.value.map(x=>x.onQuery).filter(Boolean);return{servicePromise:Re(y,h[0])()}}else{const y=d.value.map(x=>{var L;return(L=x[s])===null||L===void 0?void 0:L.call(x,...h)});return Object.assign({},...y)}},_=b(0);return f.runAsync=async(...s)=>{p({loading:!0,params:s,status:"pending"}),_.value+=1;const h=_.value,{isBreak:y,breakResult:x=W()}=v("onBefore",s);if(y)return p({status:"settled"}),x;u==null||u(s);try{const L=()=>new Promise(O=>O(e(...w.value)));let{servicePromise:S}=v("onQuery",L);S||(S=L());const m=await S;return h!==_.value?W():(p({data:m,loading:!1,error:void 0,status:"settled"}),v("onSuccess",m,s),i==null||i(m,s),v("onAfter",s,m,void 0),c==null||c(s),m)}catch(L){if(h!==_.value)return W();throw p({loading:!1,error:L,status:"settled"}),v("onError",L,s),o==null||o(L,s),v("onAfter",s,void 0,L),c==null||c(s),L}},f.run=async(...s)=>{f.runAsync(...s).catch(h=>{o||console.error(h)})},f.cancel=()=>{_.value+=1,p({loading:!1}),v("onCancel")},f.refresh=()=>{f.run(...w.value||[])},f.refreshAsync=()=>f.runAsync(...w.value||[]),f.mutate=s=>{const h=F(s)?s(R.value):s,y=k(h)?Object.assign({},h):h;p({data:y}),v("onMutate",y)},{status:T,loading:g,data:R,error:E,params:w,plugins:d,context:f}};function re(e,r={},n){const t=se(ce,{}),a={...fe(),...t,...r},{manual:l=!1,defaultParams:i=[]}=a,o=we(e,a);if(o.plugins.value=n.map(u=>u(o,a)),!l){const u=o.params.value||i;o.context.run(...u)}return Q(()=>{o.context.cancel()}),{loading:o.loading,data:o.data,error:o.error,params:o.params,cancel:o.context.cancel,refresh:o.context.refresh,refreshAsync:o.context.refreshAsync,mutate:o.context.mutate,run:o.context.run,runAsync:o.context.runAsync}}function Be(e,r){const{isNoMore:n,...t}=r!=null?r:{},a=I(),l=A(()=>{var s;return((s=a.value)===null||s===void 0?void 0:s.list)||[]}),i=b(!1),o=b(!1),u=b(0),{runAsync:c,run:g,cancel:R,...E}=re(async s=>{const h=u.value,y=await e(s);return h===u.value&&(s?a.value={...y,list:[...s.list,...y.list]}:a.value=y),y},{...t,defaultParams:[],refreshDepsAction:()=>{t!=null&&t.refreshDepsAction?t.refreshDepsAction():f()},onError:s=>{var h;t==null||(h=t.onError)===null||h===void 0||h.call(t,s)},onSuccess:s=>{var h;t==null||(h=t.onSuccess)===null||h===void 0||h.call(t,s)},onBefore:()=>{var s;u.value+=1,o.value&&(o.value=!1,i.value=!0),t==null||(s=t.onBefore)===null||s===void 0||s.call(t)},onAfter:()=>{var s;i.value=!1,o.value=!1,t==null||(s=t.onAfter)===null||s===void 0||s.call(t)}},[q,Z,te,ne,ee]),w=A(()=>n&&F(n)?n(a.value):!1),d=()=>{T().catch(()=>{})},T=()=>w.value?Promise.reject(me("No more data. You need to ignore this error by checking if `noMore` is false before calling `loadMoreAsync`",!0)):(o.value=!0,c(a.value)),f=()=>g();return{data:a,dataList:l,loadingMore:i,noMore:w,cancel:()=>{u.value+=1,R(),i.value=!1},mutate:s=>{const h=F(s)?s(a.value):s,y=k(h)?Object.assign({},h):h;a.value=y},refresh:f,refreshAsync:()=>c(),loadMore:d,loadMoreAsync:T,...ve(E,["refresh","refreshAsync","mutate","params","data"])}}const D=new Map,Te=(e,r)=>{D.set(e,r),r.then(n=>(D.delete(e),n)).catch(()=>{D.delete(e)})},be=e=>D.get(e),N=new Map,_e=(e,r)=>{N.has(e)&&N.get(e).forEach(n=>n(r))},ye=(e,r)=>(N.has(e)?N.get(e).push(r):N.set(e,[r]),()=>{const n=N.get(e).indexOf(r);N.get(e).splice(n,1)});var Ae=C((e,{cacheKey:r,cacheTime:n=6e5,staleTime:t=0,getCache:a,setCache:l})=>{if(!r)return{};const i=F(r)?r:()=>r,o=b(()=>{});let u;const c=f=>a?a(f):ge(f),g=(f,p,v)=>{l?l(f,v):he(f,p,v),_e(f,v.data)},R=f=>t===-1||f+t>new Date().getTime(),E=(f,p)=>Object.prototype.hasOwnProperty.call(f,p),w=f=>{const p=i(f);return ye(p,v=>{e.data.value=v})},d=i(),T=c(d);return T&&E(T,"data")&&(e.data.value=T.data,e.params.value=T.params),d&&(o.value=w()),Q(()=>{o.value()}),{onBefore(f){const p=i(f),v=c(p);if(!v||!E(v,"data"))return{};if(R(v.time))return e.data.value=v.data,e.loading.value=!1,{isBreak:!0,breakResult:v.data};e.data.value=v.data},onQuery(f){const p=e.params.value,v=i(p);let _=be(v);return _&&_!==u?()=>_:(_=f(),u=_,Te(v,_),()=>_)},onSuccess(f,p){const v=i(p);v&&(o.value(),g(v,n,{data:f,params:p,time:new Date().getTime()}),o.value=w(p))},onMutate(f){const p=i(e.params.value);p&&(o.value(),g(p,n,{data:f,params:e.params.value,time:new Date().getTime()}),o.value=w(e.params.value))}}});function Le(e){let r,n;class t extends Promise{constructor(l){super(l),this.cancel=()=>{n(),clearTimeout(r)}}}return new t(a=>{n=a,r=setTimeout(n,e)})}function V(){return new Date().getTime()}var Oe=C((e,{loadingDelay:r=0,loadingKeep:n=0})=>{const t=b(()=>{}),a=A(()=>P(r)),l=A(()=>P(n));let i=V(),o={};const u=()=>{let c;return a.value&&(c=setTimeout(()=>{e.status.value==="pending"&&(e.loading.value=!0)},a.value)),()=>c&&clearTimeout(c)};return{onBefore(){e.loading.value=!a.value,t.value(),t.value=u(),i=V()},onQuery(c){if(!l.value)return()=>c();o=Le(l.value+a.value);const g=Promise.allSettled([c().finally(()=>{V()-i<=a.value&&o.cancel()}),o]).then(R=>{const E=R[0];return E.status==="fulfilled"?E.value:Promise.reject(E.reason)});return()=>g},onCancel(){t.value()},onAfter(){t.value()}}}),U;const oe=new Set,ae=new Set,ue=new Set,j=(e,r)=>{let n;switch(e){case"FOCUS_LISTENER":n=oe;break;case"RECONNECT_LISTENER":n=ue;break;case"VISIBLE_LISTENER":n=ae;break}if(!n.has(r))return n.add(r),()=>{n.delete(r)}},G=e=>{e.forEach(r=>{r()})};!H&&(U=window)!==null&&U!==void 0&&U.addEventListener&&(window.addEventListener("visibilitychange",()=>{J()&&G(ae)},!1),window.addEventListener("focus",()=>G(oe),!1),window.addEventListener("online",()=>G(ue),!1));var Pe=C((e,{pollingInterval:r,pollingWhenHidden:n=!1,pollingWhenOffline:t=!1,errorRetryCount:a=0})=>{const l=b(),i=b(!1),o=A(()=>P(r)),u=A(()=>P(a)),c=[],g=d=>{d&&c.push(d)},R=()=>(n||J())&&(t||de()),E=d=>{if(e.error.value&&u.value!==0)return;let T;if(!M(o.value)&&o.value>=0)if(R())T=setTimeout(d,o.value);else{i.value=!0;return}return()=>T&&clearTimeout(T)},w=()=>{i.value&&R()&&(e.context.refresh(),i.value=!1)};return K(o,()=>{l.value&&(l.value(),l.value=E(()=>e.context.refresh()))}),n||g(j("VISIBLE_LISTENER",w)),t||g(j("RECONNECT_LISTENER",w)),Q(()=>{c.forEach(d=>d())}),{onBefore(){var d;(d=l.value)===null||d===void 0||d.call(l)},onCancel(){var d;(d=l.value)===null||d===void 0||d.call(l)},onAfter(){l.value=E(()=>e.context.refresh())}}});const Ce=(e,r)=>{let n=!1;return(...t)=>{n||(n=!0,e(...t),setTimeout(()=>{n=!1},r))}};var xe=C((e,{refreshOnWindowFocus:r=!1,refocusTimespan:n=5e3})=>{const t=A(()=>P(r)),a=A(()=>P(n)),l=[],i=u=>{u&&l.push(u)},o=()=>{l.forEach(u=>u())};return Y(()=>{if(o(),t.value){const u=Ce(e.context.refresh,a.value);i(j("VISIBLE_LISTENER",u)),i(j("FOCUS_LISTENER",u))}}),Q(()=>{o()}),{}});function Ne(e,r){return re(e,r,[Oe,q,Z,Pe,te,xe,ne,ee,Ae])}export{Be as a,Ne as u};
