import{i as e}from"./main-ce25b28f.js";import{i as t}from"./ipcRenderer-5e19eaee.js";import{_ as o,h as n,r as a,o as l,b as s,g as i,a as d,w as c,e as w,p as m,f as v}from"./index-cdcce0e2.js";const r={data:()=>({views:[{type:"web",content:"https://www.baidu.com/"},{type:"html",content:"/public/html/view_example.html"}]}),methods:{loadViewContent(o){t.invoke(e.loadViewContent,n(this.views[o])).then((e=>{console.log(e)}))},removeViewContent(o){t.invoke(e.removeViewContent,n(this.views[o])).then((e=>{console.log(e)}))}}},p=e=>(m("data-v-ec4d1253"),e=e(),v(),e),u={id:"app-base-window-view"},h=p((()=>i("div",{class:"one-block-1"},[i("span",null," 1. 嵌入web内容 ")],-1))),f={class:"one-block-2"},C=p((()=>i("div",{class:"one-block-1"},[i("span",null," 2. 嵌入html内容 ")],-1))),b={class:"one-block-2"};const k=o(r,[["render",function(e,t,o,n,m,v){const r=a("a-button"),p=a("a-space");return l(),s("div",u,[h,i("div",f,[d(p,null,{default:c((()=>[d(r,{onClick:t[0]||(t[0]=e=>v.loadViewContent(0))},{default:c((()=>[w("加载百度页面")])),_:1}),d(r,{onClick:t[1]||(t[1]=e=>v.removeViewContent(0))},{default:c((()=>[w("移除百度页面")])),_:1})])),_:1})]),C,i("div",b,[d(p,null,{default:c((()=>[d(r,{onClick:t[2]||(t[2]=e=>v.loadViewContent(1))},{default:c((()=>[w("加载html页面")])),_:1}),d(r,{onClick:t[3]||(t[3]=e=>v.removeViewContent(1))},{default:c((()=>[w("移除html页面")])),_:1})])),_:1})])])}],["__scopeId","data-v-ec4d1253"]]);export{k as default};
