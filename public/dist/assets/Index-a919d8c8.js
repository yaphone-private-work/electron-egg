import{i as e}from"./index-21f5463a.js";import{i as l}from"./ipcRenderer-5e19eaee.js";import{_ as a,g as u,h as o,r as n,o as s,d as t,b as r,a as i,w as c,f as d,t as v}from"./index-9a718bb9.js";const f={id:"app-jobs"},k={class:"one-block-2"},p={class:"one-block-2"},b=a({__name:"Index",setup(a){const b=u(""),m=u(0),_=u(0),C=u(0),w=u(0),j=u(0),I=u(0),h=u(0),P=u(0),J=u(0),g=u(0),x=u(0),y=u(0);function N(a,u){const o={jobId:a,type:"timer",action:u};l.invoke(e.framework.someJob,o).then((e=>{if("create"==u)switch(e.jobId){case 1:h.value=e.result.pid;break;case 2:P.value=e.result.pid}}))}function A(a,u){const o={jobId:a,type:"timer",action:u};l.invoke(e.framework.someJobByPool,o).then((e=>{const{jobId:l,result:a}=e;switch(l){case 3:J.value=a.pid;break;case 4:g.value=a.pid;break;case 5:x.value=a.pid;break;case 6:y.value=a.pid}}))}return o((()=>{l.removeAllListeners(e.framework.timerJobProgress),l.removeAllListeners(e.framework.createPoolNotice),l.on(e.framework.timerJobProgress,((e,l)=>{const{jobId:a,pid:u,number:o}=l;switch(a){case 1:m.value=o,h.value=0==u?u:h.value;break;case 2:_.value=o,P.value=0==u?u:P.value;break;case 3:C.value=o,J.value=0==u?u:J.value;break;case 4:w.value=o,g.value=0==u?u:g.value;break;case 5:j.value=o,x.value=0==u?u:x.value;break;case 6:I.value=o,y.value=0==u?u:y.value}})),l.on(e.framework.createPoolNotice,((e,l)=>{b.value=JSON.stringify(l)}))})),(a,u)=>{const o=n("a-button"),L=n("a-space");return s(),t("div",f,[u[31]||(u[31]=r("div",{class:"one-block-1"},[r("span",null," 1. 任务 / 并发任务 ")],-1)),r("div",k,[i(L,null,{default:c((()=>[i(o,{onClick:u[0]||(u[0]=e=>N(1,"create"))},{default:c((()=>u[13]||(u[13]=[d("执行任务1")]))),_:1}),d(" 进度: "+v(m.value)+" , 进程pid: "+v(h.value)+" ",1),i(o,{onClick:u[1]||(u[1]=e=>N(1,"pause"))},{default:c((()=>u[14]||(u[14]=[d("暂停")]))),_:1}),i(o,{onClick:u[2]||(u[2]=e=>N(1,"resume"))},{default:c((()=>u[15]||(u[15]=[d("恢复")]))),_:1}),i(o,{onClick:u[3]||(u[3]=e=>N(1,"close"))},{default:c((()=>u[16]||(u[16]=[d("关闭")]))),_:1})])),_:1}),u[21]||(u[21]=r("p",null,null,-1)),i(L,null,{default:c((()=>[i(o,{onClick:u[4]||(u[4]=e=>N(2,"create"))},{default:c((()=>u[17]||(u[17]=[d("执行任务2")]))),_:1}),d(" 进度: "+v(_.value)+" , 进程pid: "+v(P.value)+" ",1),i(o,{onClick:u[5]||(u[5]=e=>N(2,"pause"))},{default:c((()=>u[18]||(u[18]=[d("暂停")]))),_:1}),i(o,{onClick:u[6]||(u[6]=e=>N(2,"resume"))},{default:c((()=>u[19]||(u[19]=[d("恢复")]))),_:1}),i(o,{onClick:u[7]||(u[7]=e=>N(2,"close"))},{default:c((()=>u[20]||(u[20]=[d("关闭")]))),_:1})])),_:1})]),u[32]||(u[32]=r("div",{class:"one-block-1"},[r("span",null," 2. 任务池 / 并发任务 ")],-1)),r("div",p,[i(L,null,{default:c((()=>[i(o,{onClick:u[8]||(u[8]=a=>{l.send(e.framework.createPool,{number:3})})},{default:c((()=>u[22]||(u[22]=[d("创建进程池")]))),_:1}),d(" 进程pids: "+v(b.value),1)])),_:1}),u[27]||(u[27]=r("p",null,null,-1)),i(L,null,{default:c((()=>[i(o,{onClick:u[9]||(u[9]=e=>A(3,"run"))},{default:c((()=>u[23]||(u[23]=[d("执行任务3")]))),_:1}),d(" 进度: "+v(C.value)+" , 进程pid: "+v(J.value),1)])),_:1}),u[28]||(u[28]=r("p",null,null,-1)),i(L,null,{default:c((()=>[i(o,{onClick:u[10]||(u[10]=e=>A(4,"run"))},{default:c((()=>u[24]||(u[24]=[d("执行任务4")]))),_:1}),d(" 进度: "+v(w.value)+" , 进程pid: "+v(g.value),1)])),_:1}),u[29]||(u[29]=r("p",null,null,-1)),i(L,null,{default:c((()=>[i(o,{onClick:u[11]||(u[11]=e=>A(5,"run"))},{default:c((()=>u[25]||(u[25]=[d("执行任务5")]))),_:1}),d(" 进度: "+v(j.value)+" , 进程pid: "+v(x.value),1)])),_:1}),u[30]||(u[30]=r("p",null,null,-1)),i(L,null,{default:c((()=>[i(o,{onClick:u[12]||(u[12]=e=>A(6,"run"))},{default:c((()=>u[26]||(u[26]=[d("执行任务6")]))),_:1}),d(" 进度: "+v(I.value)+" , 进程pid: "+v(y.value),1)])),_:1})])])}}},[["__scopeId","data-v-90d2deb5"]]);export{b as default};
