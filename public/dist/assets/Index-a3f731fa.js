import{i as t}from"./index-21f5463a.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{_ as i}from"./_plugin-vue_export-helper-1b428a4d.js";import{o,m as s,a as n,b as a,f as l,e as c,d,w as p,h as r}from"./index-f3211453.js";const u={id:"app-os-notification"},b={class:"one-block-2"},f=i({__name:"Index",setup(i){const f=[{type:"main",title:"通知标题",subtitle:"副标题",body:"这是通知内容-默认",silent:!0},{type:"main",title:"提示音",subtitle:"副标题-提示音",body:"这是通知内容-提示音",silent:!1},{type:"main",title:"点击通知事件",subtitle:"副标题-点击通知事件",body:"这是通知内容-点击通知事件",clickEvent:!0},{type:"main",title:"关闭通知事件",subtitle:"副标题-关闭通知事件",body:"这是通知内容-点击通知事件",closeEvent:!0}];function m(i){e.send(t.os.sendNotification,f[i])}return o((()=>{e.removeAllListeners(t.os.sendNotification),e.on(t.os.sendNotification,((t,e)=>{"[object Object]"==Object.prototype.toString.call(e)&&s.info(e.msg)}))})),(t,e)=>{const i=n("a-button"),o=n("a-space");return a(),l("div",u,[e[8]||(e[8]=c("div",{class:"one-block-1"},[c("span",null," 1. 弹出桌面通知 ")],-1)),c("div",b,[d(o,null,{default:p((()=>[d(i,{onClick:e[0]||(e[0]=t=>m(0))},{default:p((()=>e[4]||(e[4]=[r("默认")]))),_:1}),d(i,{onClick:e[1]||(e[1]=t=>m(1))},{default:p((()=>e[5]||(e[5]=[r("发出提示音")]))),_:1}),d(i,{onClick:e[2]||(e[2]=t=>m(2))},{default:p((()=>e[6]||(e[6]=[r("点击通知触发事件")]))),_:1}),d(i,{onClick:e[3]||(e[3]=t=>m(3))},{default:p((()=>e[7]||(e[7]=[r("关闭通知触发事件")]))),_:1})])),_:1})])])}}},[["__scopeId","data-v-cbcbc638"]]);export{f as default};
