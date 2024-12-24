import{i as e}from"./main-ce25b28f.js";import{i as s}from"./ipcRenderer-5e19eaee.js";import{a}from"./index-5a77a222.js";import{_ as l,r as o,o as t,b as n,g as i,a as r,w as c,e as d,p,f as u}from"./index-cdcce0e2.js";const v={data:()=>({type:1,serverUrl:""}),methods:{info(){s.invoke(e.crossInfo,{}).then((e=>{console.log("res:",e)}))},getUrl(){s.invoke(e.getCrossUrl,{name:"javaapp"}).then((e=>{this.serverUrl=e,this.$message.info(`服务地址: ${e}`)}))},kill(){s.invoke(e.killCrossServer,{type:"one",name:"javaapp"})},killAll(){s.invoke(e.killCrossServer,{type:"all",name:"javaapp"})},create(){s.invoke(e.createCrossServer,{program:"java"})},request(l){if(1!=l||""!=this.serverUrl)if(1==l){const e=this.serverUrl+"/test1/get";a({method:"get",url:e,params:{id:"1111111"},timeout:1e3}).then((e=>{console.log("res:",e);const s=e.data||null;this.$message.info(`服务返回: ${s}`)}))}else s.invoke(e.requestApi,{name:"javaapp",urlPath:"/test1/get",params:{id:"1111111"}}).then((e=>{console.log("res:",e);const s=e||null;this.$message.info(`服务返回: ${s}`)}));else this.$message.info("请先获取服务地址")}}},k=e=>(p("data-v-9ab69d3b"),e=e(),u(),e),f={id:"app-cross-java"},m=k((()=>i("div",{class:"one-block-1"},[i("span",null," 1. 基础控制 ")],-1))),g={class:"one-block-2"},h=k((()=>i("div",{class:"one-block-1"},[i("span",null," 2. 发送http请求 ")],-1))),_={class:"one-block-2"},b=k((()=>i("div",{class:"one-block-1"},[i("span",null," 3. 多个服务 ")],-1))),C={class:"one-block-2"};const j=l(v,[["render",function(e,s,a,l,p,u){const v=o("a-button"),k=o("a-space");return t(),n("div",f,[m,i("div",g,[r(k,null,{default:c((()=>[r(v,{onClick:s[0]||(s[0]=e=>u.create())},{default:c((()=>[d(" 启动 ")])),_:1}),r(v,{onClick:s[1]||(s[1]=e=>u.getUrl())},{default:c((()=>[d(" 获取地址 ")])),_:1}),r(v,{onClick:s[2]||(s[2]=e=>u.kill())},{default:c((()=>[d(" kill ")])),_:1}),r(v,{onClick:s[3]||(s[3]=e=>u.info())},{default:c((()=>[d(" 查看 ")])),_:1})])),_:1})]),h,i("div",_,[r(k,null,{default:c((()=>[r(v,{onClick:s[4]||(s[4]=e=>u.request(1))},{default:c((()=>[d(" 前端发送 ")])),_:1}),r(v,{onClick:s[5]||(s[5]=e=>u.request(2))},{default:c((()=>[d(" 主进程发送 ")])),_:1})])),_:1})]),b,i("div",C,[r(k,null,{default:c((()=>[r(v,{onClick:s[6]||(s[6]=e=>u.create())},{default:c((()=>[d(" 启动 ")])),_:1}),r(v,{onClick:s[7]||(s[7]=e=>u.killAll())},{default:c((()=>[d(" kill所有 ")])),_:1})])),_:1})])])}],["__scopeId","data-v-9ab69d3b"]]);export{j as default};
