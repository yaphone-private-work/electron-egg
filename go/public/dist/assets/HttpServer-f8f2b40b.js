import{i as t}from"./main-ce25b28f.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{a as s}from"./index-5a77a222.js";import{s as o}from"./store2-1f431d52.js";import{_ as r,r as a,o as n,b as i,g as l,t as c,e as d,a as u,w as p,p as h,f as m}from"./index-cdcce0e2.js";const v={data:()=>({currentStatus:"关闭",servicAddress:"无"}),mounted(){this.init()},methods:{init(){e.invoke(t.checkHttpServer,{}).then((t=>{t.enable&&(this.currentStatus="开启",this.servicAddress=t.server,o.set("httpServiceConfig",t))}))},sendRequest(e){"关闭"!=this.currentStatus?this.requestHttp(t.doHttpRequest,{id:e}).then((t=>{})):this.$message.error("http服务未开启")},requestHttp(t,e){const r=o.get("httpServiceConfig").server||"http://localhost:7071";let a=t.split(".").join("/");return a=r+"/"+a,console.log("url:",a),s({url:a,method:"post",data:e,timeout:6e4})},backendRequest(){console.log("GO_URL:","http://www.test.com");s({baseURL:"http://www.test.com",method:"get",url:"/hello",timeout:6e4}).then((t=>{console.log("res:",t);const e=t.data||null;this.$message.info(`go服务返回: ${e}`)}))}}},f=t=>(h("data-v-6adfc3d0"),t=t(),m(),t),b={id:"app-base-httpserver"},g=f((()=>l("div",{class:"one-block-1"},[l("span",null," 1. 使用http与主进程通信 ")],-1))),k={class:"one-block-2"},w=f((()=>l("div",{class:"one-block-1"},[l("span",null," 2. 使用http与服务端通信 ")],-1))),R={class:"one-block-2"};const q=r(v,[["render",function(t,e,s,o,r,h){const m=a("a-button");return n(),i("div",b,[g,l("div",k,[l("p",null,"* 状态："+c(r.currentStatus),1),l("p",null,"* 地址："+c(r.servicAddress),1),l("p",null,[d("* 发送请求： "),u(m,{onClick:e[0]||(e[0]=t=>h.sendRequest("pictures"))},{default:p((()=>[d(" 打开【我的图片】 ")])),_:1})])]),w,l("div",R,[l("p",null,[u(m,{onClick:e[1]||(e[1]=t=>h.backendRequest())},{default:p((()=>[d(" 发送请求 ")])),_:1}),d(" （请自行创建服务） ")])])])}],["__scopeId","data-v-6adfc3d0"]]);export{q as default};
