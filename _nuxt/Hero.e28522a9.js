import r from"./ContentSlot.e92f7764.js";import{a as _,o as a,i as d,k as t,m as n,w as i,L as c,c as m,j as u,l as p,O as f,x as g}from"./entry.63033658.js";const h={class:"hero"},v={class:"layout"},y={class:"content"},x={class:"title"},C={class:"description"},H=_({__name:"Hero",props:{image:{type:String,default:null},imageAlt:{type:String,default:"Hero Image"},imagePosition:{type:String,default:"right"}},setup(e){return(s,k)=>{const o=r,l=f;return a(),d("section",h,[t("div",v,[t("div",y,[t("div",x,[n(o,{use:s.$slots.title,unwrap:"p"},{default:i(()=>[c(" Hero title ")]),_:1},8,["use"])]),t("div",C,[n(o,{use:s.$slots.description,unwrap:"p"},{default:i(()=>[c(" Hero description ")]),_:1},8,["use"])])]),e.image?(a(),m(l,{key:0,class:u(e.imagePosition),src:e.image,alt:e.imageAlt,width:16,height:9},null,8,["class","src","alt"])):p("",!0)])])}}});const S=g(H,[["__scopeId","data-v-a4f02330"]]);export{S as default};
