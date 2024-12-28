import{i as n}from"./index-21f5463a.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{_ as o,g as l,h as s,m as a,r as c,o as i,d as t,b as d,a as u,w as r,f,t as k}from"./index-9a718bb9.js";const p={id:"app-os-subwindow-ipc"},v={class:"one-block-2"},w={class:"one-block-2"},m={class:"one-block-2"},_={class:"one-block-2"},g=o({__name:"Ipc",setup(o){const g=l(""),b=l(""),M=l(""),S=l("");function y(){e.send(n.framework.ipcSendMsg,{type:"start",content:"开始"})}function C(){e.send(n.framework.ipcSendMsg,{type:"end",content:""})}function I(){e.invoke(n.framework.ipcInvokeMsg,"异步-回调").then((n=>{console.log("r:",n),b.value=n}))}async function h(){const o=await e.invoke(n.framework.ipcInvokeMsg,"异步");console.log("msg:",o),M.value=o}function j(){const o=e.sendSync(n.framework.ipcSendSyncMsg,"同步");S.value=o}return s((()=>{e.on(n.framework.ipcSendMsg,((e,o)=>{console.log("[ipcRenderer] [socketMsgStart] result:",o),g.value=o,e.sender.send(n.framework.hello,"electron-egg")})),e.removeAllListeners(n.os.window1ToWindow2),e.on(n.os.window1ToWindow2,((n,e)=>{a.info(e)}))})),(o,l)=>{const s=c("a-button"),a=c("a-space");return i(),t("div",p,[l[8]||(l[8]=d("div",{class:"one-block-1"},[d("span",null," 1. 发送异步消息 ")],-1)),d("div",v,[u(a,null,{default:r((()=>[u(s,{onClick:I},{default:r((()=>l[1]||(l[1]=[f("发送 - 回调")]))),_:1}),f(" 结果："+k(b.value),1)])),_:1}),l[3]||(l[3]=d("p",null,null,-1)),u(a,null,{default:r((()=>[u(s,{onClick:h},{default:r((()=>l[2]||(l[2]=[f("发送 - async/await")]))),_:1}),f(" 结果："+k(M.value),1)])),_:1})]),l[9]||(l[9]=d("div",{class:"one-block-1"},[d("span",null," 2. 同步消息（不推荐，阻塞执行） ")],-1)),d("div",w,[u(a,null,{default:r((()=>[u(s,{onClick:j},{default:r((()=>l[4]||(l[4]=[f("同步消息")]))),_:1}),f(" 结果："+k(S.value),1)])),_:1})]),l[10]||(l[10]=d("div",{class:"one-block-1"},[d("span",null," 3. 长消息： 服务端持续向前端页面发消息 ")],-1)),d("div",m,[u(a,null,{default:r((()=>[u(s,{onClick:y},{default:r((()=>l[5]||(l[5]=[f("开始")]))),_:1}),u(s,{onClick:C},{default:r((()=>l[6]||(l[6]=[f("结束")]))),_:1}),f(" 结果："+k(g.value),1)])),_:1})]),l[11]||(l[11]=d("div",{class:"one-block-1"},[d("span",null," 4. 多窗口通信：窗口之间互相通信 ")],-1)),d("div",_,[u(a,null,{default:r((()=>[u(s,{onClick:l[0]||(l[0]=o=>{e.invoke(n.os.window1ToWindow2,{receiver:"main",content:"窗口2给主窗口发送消息"})})},{default:r((()=>l[7]||(l[7]=[f("向主窗口发消息")]))),_:1})])),_:1})])])}}},[["__scopeId","data-v-2cb52ebc"]]);export{g as default};
