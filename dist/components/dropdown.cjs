"use strict";const t=require("./shorty-1329a513.cjs"),D=require("./event-listener-2a5f29ed.cjs"),h=require("./showClass-2174a6d6.cjs"),g=require("./dataBsToggle-c8bc9e7f.cjs"),v=require("./dropdownClasses-c131c53f.cjs"),Z=require("./isEmptyAnchor.cjs"),ot=require("./base-component.cjs"),G="Dropdown",J="dropdown-menu",[p,T,b,q]=v.dropdownMenuClasses,W=`[${g.dataBsToggle}="${p}"],[${g.dataBsToggle}="${T}"],[${g.dataBsToggle}="${q}"],[${g.dataBsToggle}="${b}"]`,f=o=>t.Ln(o,G),st=o=>new X(o),rt=`${J}-end`,A=[p,T],Q=[b,q],O=["A","BUTTON"],it={offset:5,display:"dynamic"},M=t.Wn(`show.bs.${p}`),R=t.Wn(`shown.bs.${p}`),S=t.Wn(`hide.bs.${p}`),_=t.Wn(`hidden.bs.${p}`),V=o=>{const{element:e,menu:n,parentElement:s,options:i}=o,{offset:d}=i;if(t.E(n,"position")==="static")return;const r=t.po(e),c=t.kn(n,rt);["margin","top","bottom","left","right"].forEach(a=>{const j={};j[a]="",t.qn(n,j)});let l=v.dropdownMenuClasses.find(a=>t.kn(s,a))||p;const Y={dropdown:[d,0,0],dropup:[0,0,d],dropstart:r?[-1,0,0,d]:[-1,d,0],dropend:r?[-1,d,0]:[-1,0,0,d]},m={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:r?{left:"100%",right:"auto"}:{left:"auto",right:"100%"},dropend:r?{left:"auto",right:"100%"}:{left:"100%",right:"auto"},menuStart:r?{right:"0",left:"auto"}:{right:"auto",left:"0"},menuEnd:r?{right:"auto",left:"0"}:{right:"0",left:"auto"}},{offsetWidth:w,offsetHeight:x}=n,{clientWidth:F,clientHeight:I}=t.k(e),{left:E,top:y,width:L,height:tt}=t.w(e),P=E-w-d<0,B=E+w+L+d>=F,et=y+x+d>=I,N=y+x+tt+d>=I,k=y-x-d<0,C=(!r&&c||r&&!c)&&E+L-w<0,$=(r&&c||!r&&!c)&&E+w>=F;if(Q.includes(l)&&P&&B&&(l=p),l===b&&(r?B:P)&&(l=q),l===q&&(r?P:B)&&(l=b),l===T&&k&&!N&&(l=p),l===p&&N&&!k&&(l=T),Q.includes(l)&&et&&t.q(m[l],{top:"auto",bottom:0}),A.includes(l)&&(C||$)){let a={left:"auto",right:"auto"};!C&&$&&!r&&(a={left:"auto",right:0}),C&&!$&&r&&(a={left:0,right:"auto"}),a&&t.q(m[l],a)}const nt=Y[l];if(t.qn(n,{...m[l],margin:`${nt.map(a=>a&&`${a}px`).join(" ")}`}),A.includes(l)&&c&&c){const a=!r&&C||r&&$?"menuStart":"menuEnd";t.qn(n,m[a])}},dt=o=>[...o.children].map(e=>{if(e&&O.includes(e.tagName))return e;const{firstElementChild:n}=e;return n&&O.includes(n.tagName)?n:null}).filter(e=>e),z=o=>{const{element:e,options:n}=o,s=o.open?D.E:D.r,i=t.d(e);s(i,t.ut,U),s(i,t._,U),s(i,t.ct,lt),s(i,t.it,at),n.display==="dynamic"&&[t.xt,t.Lt].forEach(d=>{s(t.$n(e),d,ut,t.Rn)})},K=(o,e)=>{(e?D.E:D.r)(o.element,t.ut,ct)},H=o=>{const e=[...v.dropdownMenuClasses,"btn-group","input-group"].map(n=>t.ho(`${n} ${h.showClass}`,t.d(o))).find(n=>n.length);if(e&&e.length)return[...e[0].children].find(n=>v.dropdownMenuClasses.some(s=>s===t.Zt(n,g.dataBsToggle)))},U=o=>{const{target:e,type:n}=o;if(!e||!e.closest)return;const s=H(e),i=s&&f(s);if(!i)return;const{parentElement:d,menu:r}=i,c=t.de(e,W)!==null,u=d&&d.contains(e)&&(e.tagName==="form"||t.de(e,"form")!==null);n===t.ut&&Z(e)&&o.preventDefault(),!(n===t._&&(e===s||e===r||r.contains(e)))&&(u||c||i&&i.hide())},ct=o=>{const{target:e}=o,n=e&&t.de(e,W),s=n&&f(n);s&&(o.stopImmediatePropagation(),s.toggle(),n&&Z(n)&&o.preventDefault())},lt=o=>{[t.He,t.Pe].includes(o.code)&&o.preventDefault()};function at(o){const{code:e}=o,n=H(this),s=n&&f(n),{activeElement:i}=n&&t.d(n);if(!s||!i)return;const{menu:d,open:r}=s,c=dt(d);if(c&&c.length&&[t.He,t.Pe].includes(e)){let u=c.indexOf(i);i===n?u=0:e===t.Pe?u=u>1?u-1:0:e===t.He&&(u=u<c.length-1?u+1:u),c[u]&&t.Bn(c[u])}t.je===e&&r&&(s.toggle(),t.Bn(n))}function ut(){const o=H(this),e=o&&f(o);e&&e.open&&V(e)}class X extends ot{static selector=W;static init=st;static getInstance=f;constructor(e,n){super(e,n);const{parentElement:s}=this.element;this.parentElement=s,this.menu=t.go(`.${J}`,s),K(this,!0)}get name(){return G}get defaults(){return it}toggle(){this.open?this.hide():this.show()}show(){const{element:e,open:n,menu:s,parentElement:i}=this;if(n)return;const d=H(e),r=d&&f(d);r&&r.hide(),[M,R].forEach(c=>{c.relatedTarget=e}),t.Q(i,M),!M.defaultPrevented&&(t.Mn(s,h.showClass),t.Mn(i,h.showClass),t.F(e,t.Ee,"true"),V(this),this.open=!n,t.Bn(e),z(this),t.Q(i,R))}hide(){const{element:e,open:n,menu:s,parentElement:i}=this;n&&([S,_].forEach(d=>{d.relatedTarget=e}),t.Q(i,S),!S.defaultPrevented&&(t.Nn(s,h.showClass),t.Nn(i,h.showClass),t.F(e,t.Ee,"false"),this.open=!n,z(this),t.Q(i,_)))}dispose(){this.open&&this.hide(),K(this),super.dispose()}}module.exports=X;
//# sourceMappingURL=dropdown.cjs.map
