import{f as p}from"./chunk-c67595dd.js";import{o as u,c as g,a,F as _}from"./app-497639ab.js";const d=a("div",null,"ffmpeg",-1),w={__name:"ffmpeg",setup(h){let t=null,c=null;p({log:!0}).then(async({ffmpeg:e,fetchFile:l})=>{t=e,c=l});const i=async({target:{files:{0:e}}})=>{const{name:l}=e,s=t.FS;s("writeFile",l,await c(e));const f=`-i ${l} -c copy-f segment -segment_time 10 -segment_list_flags +live -segment_list hls-playlist.m3u8 hls-%d.ts`;await t.run(...f.split(" "));const r=s("readdir","/").filter(n=>n.match(/\.(ts|m3u8|m4s|mpd)$/i));for(let n of r){const m=s("readFile",`${n}`);new File([m.buffer],n)}},o=()=>{try{t.exit()}catch{}t=null};return(e,l)=>(u(),g(_,null,[d,a("input",{type:"file",id:"uploader",onChange:i},null,32),a("button",{onClick:o}," Cancel ")],64))}};export{w as default};
