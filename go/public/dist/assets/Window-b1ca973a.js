import{i as e}from"./index-21f5463a.js";import{i as a}from"./ipcRenderer-5e19eaee.js";import{_ as s,u as t,g as o,r as i,o as r,d as n,b as d,a as u,w as c,t as m,f as p}from"./index-9a718bb9.js";const f={id:"effect-login-window"},l={class:"block-1"},k={key:1},v=s({__name:"Window",setup(s){const v=t(),w=o(!1),_=o("正在登陆......"),b=()=>{w.value=!0,setTimeout((()=>{v.push({name:"Framework"}),a.invoke(e.effect.restoreWindow,{width:980,height:650})}),2e3)};return(e,a)=>{const s=i("a-button");return r(),n("div",f,[d("div",l,[w.value?(r(),n("span",k,m(_.value),1)):(r(),n("a",{key:0,onClick:b},[u(s,{type:"primary"},{default:c((()=>a[0]||(a[0]=[p(" 登录 ")]))),_:1})]))])])}}},[["__scopeId","data-v-c5b3a70d"]]);export{v as default};
