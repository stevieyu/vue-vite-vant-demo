import{m as u,I as m,n as t,o as d,c as _,b as l,a as o,t as p,h}from"./index.56d0a142.js";import{u as v}from"./index.es.6d1ee1b7.js";const f={key:0},g={class:"p-1"},y=["innerHTML"],k={__name:"[id]",props:{id:{type:[Number,String],required:!0}},setup(c){const n=c,a=u(()=>+n.id),r=async()=>{const s=new URL(`https://dev.to/api/articles/${a.value}`);return await(await fetch(s,{})).json()},{data:e}=v(r,{cacheKey:()=>`show-${a.value}`});return(s,w)=>{const i=m;return t(e)?(d(),_("div",f,[l(i,{src:t(e).cover_image?t(e).cover_image:""},null,8,["src"]),o("h1",g,p(t(e).title),1),o("div",{innerHTML:t(e).body_html,class:"max-wh-auto p-1"},null,8,y)])):h("",!0)}}};export{k as default};
