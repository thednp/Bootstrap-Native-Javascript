"use strict";const e=require("./base-component-4K-5H-MO.js"),E=require("./index-CxumdV5N.js"),g=require("./activeClass-CxJYQAGN.js"),A=require("./isDisabled-BFPGF6I2.js"),w="scrollspy",y="ScrollSpy",L='[data-bs-spy="scroll"]',q="[href]",H={offset:10,target:void 0},x=r=>e.Xn(r,y),k=r=>new d(r),b=e.po(`activate.bs.${w}`),D=r=>{const{target:t,_itemsLength:n,_observables:s}=r,o=e.ke("A",t),c=e.d(t);!o.length||n===s.size||(s.clear(),Array.from(o).forEach(l=>{const i=e.j(l,"href")?.slice(1),h=i?.length?c.getElementById(i):null;h&&!A.isDisabled(l)&&r._observables.set(h,l)}),r._itemsLength=r._observables.size)},T=r=>{Array.from(e.ke("A",r)).forEach(t=>{e.Gn(t,g.activeClass)&&e.qn(t,g.activeClass)})},_=(r,t)=>{const{target:n,element:s}=r;T(n),r._activeItem=t,e.Kn(t,g.activeClass);let o=t;for(;o!==n;)if(o=o.parentElement,["nav","dropdown-menu","list-group"].some(c=>e.Gn(o,c))){const c=o.previousElementSibling;c&&!e.Gn(c,g.activeClass)&&e.Kn(c,g.activeClass)}b.relatedTarget=t,e.G(s,b)},p=(r,t)=>{const{scrollTarget:n,element:s,options:o}=r;return(n!==s?e.y(t).top+n.scrollTop:t.offsetTop)-(o.offset||10)};class d extends e.BaseComponent{static selector=L;static init=k;static getInstance=x;constructor(t,n){super(t,n);const{element:s,options:o}=this,c=e.Ho(o.target,e.d(s));c&&(this.target=c,this.scrollTarget=s.clientHeight<s.scrollHeight?s:e.w(s),this._observables=new Map,this.refresh(),this._observer=new E.v(()=>{requestAnimationFrame(()=>this.refresh())},{root:this.scrollTarget}),this._toggleEventListeners(!0))}get name(){return y}get defaults(){return H}refresh=()=>{const{target:t,scrollTarget:n}=this;if(!t||t.offsetHeight===0)return;D(this);const{_itemsLength:s,_observables:o,_activeItem:c}=this;if(!s)return;const l=o.entries().toArray(),{scrollTop:i,scrollHeight:h,clientHeight:S}=n;if(i>=h-S){const a=l[s-1]?.[1];c!==a&&_(this,a);return}const f=l[0]?.[0]?p(this,l[0][0]):null;if(f!==null&&i<f&&f>0){this._activeItem=null,T(t);return}for(let a=0;a<s;a+=1){const[I,u]=l[a],C=p(this,I),v=l[a+1]?.[0],m=v?p(this,v):null;if(c!==u&&i>=C&&(m===null||i<m)){_(this,u);break}}};_scrollTo=t=>{const n=e.Se(t.target,q),s=n&&e.j(n,"href")?.slice(1),o=s&&e.Wo(s,this.target);o&&(this.scrollTarget.scrollTo({top:o.offsetTop,behavior:"smooth"}),t.preventDefault())};_toggleEventListeners=t=>{const{target:n,_observables:s,_observer:o,_scrollTo:c}=this;(t?e.E:e.r)(n,e.gt,c),t?s?.forEach((i,h)=>o.observe(h)):o.disconnect()};dispose(){this._toggleEventListeners(),super.dispose()}}module.exports=d;
//# sourceMappingURL=scrollspy.cjs.map
