import{d as g,s as _,o as r,c as n,w as e,V as k,a as x,v as c,A as p,h as l,z as y,b as t,C as F,D as B,F as S,l as T,e as h,f as N,G as $,g as w,B as f,i as A,j as D,k as i,I as b}from"./index-Dg02P-wm.js";import{u as I}from"./favorites-BYZ7KqBP.js";import{u as P}from"./cart-DB-e-9E6.js";const G=g({__name:"FavoritesPage",setup(R){const d=I(),m=P(),{items:u}=_(d),C=o=>{d.toggleFavorite(o)},v=o=>{m.addToCart(o)};return(o,s)=>(r(),n(k,null,{default:e(()=>[s[2]||(s[2]=x("h1",{class:"text-h4 mb-6"},"Favorite Products",-1)),c(u).length===0?(r(),n(p,{key:0,type:"info"},{default:e(()=>s[0]||(s[0]=[l(" You haven't added any products to your favorites yet ")])),_:1})):y("",!0),t(T,null,{default:e(()=>[(r(!0),F(S,null,B(c(u),a=>(r(),n(h,{key:a.id,cols:"12",sm:"6",md:"4",lg:"3"},{default:e(()=>[t(N,null,{default:e(()=>[t($,{src:a.image,height:"200",cover:""},null,8,["src"]),t(w,{class:"text-truncate"},{default:e(()=>[l(f(a.title),1)]),_:2},1024),t(A,null,{default:e(()=>[l(" $"+f(a.price),1)]),_:2},1024),t(D,null,{default:e(()=>[t(i,{variant:"text",to:`/products/${a.id}`},{default:e(()=>s[1]||(s[1]=[l(" Details ")])),_:2},1032,["to"]),t(b),t(i,{icon:"mdi-heart",color:"red",variant:"text",onClick:V=>C(a)},null,8,["onClick"]),t(i,{icon:"mdi-cart",variant:"text",onClick:V=>v(a)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}});export{G as default};