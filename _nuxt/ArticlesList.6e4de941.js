import v from"./ArticlesListItem.f7738e1f.js";import k from"./ProseA.4475af85.js";import w from"./ProseCodeInline.34f0b0be.js";import{u as g}from"./asyncData.49533724.js";import{d as A,Y as I,J as S,N as n,b as a,c as r,e as o,g as i,F as C,Z as L,E as e,w as d,p as B,i as N,q as V,$ as b,X as q,k as E}from"./entry.f09675ae.js";import"./date.824a539b.js";const F=t=>(B("data-v-6e68fa1c"),t=t(),N(),t),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},D={key:1,class:"tour"},J=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),X=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=I(async()=>g("articles",async()=>await V(b(u.path)).sort({date:-1}).find())),s=await s,_(),s),c=S(()=>m.value||[]);return(Z,$)=>{var p;const l=v,f=k,h=w;return(p=n(c))!=null&&p.length?(a(),r("div",P,[o("div",T,[i(l,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(C,null,L(n(c).slice(1),(y,x)=>(a(),q(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",D,[J,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const O=E(X,[["__scopeId","data-v-6e68fa1c"]]);export{O as default};
