"use strict";const e=require("./shorty-1329a513.cjs"),d=require("./event-listener-2a5f29ed.cjs"),A=require("./dataBsDismiss-4ee313a7.cjs"),B=require("./dataBsToggle-c8bc9e7f.cjs"),l=require("./showClass-2174a6d6.cjs"),i=require("./offcanvasString-90a219fe.cjs"),m=require("./offcanvasComponent-82813e15.cjs"),q=require("./getTargetElement-379ad550.cjs"),H=require("./isVisible.cjs"),N=require("./scrollbar.cjs"),Q=require("./popupContainer.cjs"),r=require("./backdrop.cjs"),W=require("./base-component.cjs");require("./fadeClass-a4944cf1.cjs");const z=`.${i.offcanvasString}`,b=`[${B.dataBsToggle}="${i.offcanvasString}"]`,F=`[${A.dataBsDismiss}="${i.offcanvasString}"]`,u=`${i.offcanvasString}-toggling`,I={backdrop:!0,keyboard:!0,scroll:!1},f=o=>e.Ln(o,m.offcanvasComponent),L=o=>new $(o),v=e.Wn(`show.bs.${i.offcanvasString}`),k=e.Wn(`shown.bs.${i.offcanvasString}`),p=e.Wn(`hide.bs.${i.offcanvasString}`),D=e.Wn(`hidden.bs.${i.offcanvasString}`),M=o=>{const{element:t}=o,{clientHeight:n,scrollHeight:s}=e.k(t);N.setScrollbar(t,n!==s)},T=(o,t)=>{const n=t?d.E:d.r;o.triggers.forEach(s=>n(s,e.ut,P))},E=(o,t)=>{const n=t?d.E:d.r,s=e.d(o.element);n(s,e.ct,j),n(s,e.ut,x)},w=o=>{const{element:t,options:n}=o;n.scroll||(M(o),e.qn(e.Jn(t),{overflow:"hidden"})),e.Mn(t,u),e.Mn(t,l.showClass),e.qn(t,{visibility:"visible"}),e.zn(t,()=>J(o))},y=(o,t)=>{const{element:n,options:s}=o,a=r.getCurrentOpen(n);n.blur(),!a&&s.backdrop&&e.kn(r.overlay,l.showClass)?(r.hideOverlay(),e.zn(r.overlay,()=>S(o,t))):S(o,t)},P=o=>{const t=e.de(o.target,b),n=t&&q.getTargetElement(t),s=n&&f(n);s&&(s.relatedTarget=t,s.toggle(),t&&t.tagName==="A"&&o.preventDefault())},x=o=>{const{target:t}=o,n=e.go(r.offcanvasActiveSelector,e.d(t)),s=e.go(F,n),a=n&&f(n);if(!a)return;const{options:c,triggers:g}=a,{backdrop:C}=c,h=e.de(t,b),O=e.d(n).getSelection();r.overlay.contains(t)&&C==="static"||(!(O&&O.toString().length)&&(!n.contains(t)&&C&&(!h||g.includes(t))||s&&s.contains(t))&&(a.relatedTarget=s&&s.contains(t)?s:null,a.hide()),h&&h.tagName==="A"&&o.preventDefault())},j=({code:o,target:t})=>{const n=e.go(r.offcanvasActiveSelector,e.d(t)),s=n&&f(n);s&&s.options.keyboard&&o===e.je&&(s.relatedTarget=null,s.hide())},J=o=>{const{element:t}=o;e.Nn(t,u),e.An(t,e.be),e.F(t,e.we,"true"),e.F(t,"role","dialog"),e.Q(t,k),E(o,!0),e.Bn(t)},S=(o,t)=>{const{element:n,triggers:s}=o;e.F(n,e.be,"true"),e.An(n,e.we),e.An(n,"role"),e.qn(n,{visibility:""});const a=v.relatedTarget||s.find(H);a&&e.Bn(a),r.removeOverlay(n),e.Q(n,D),e.Nn(n,u),r.getCurrentOpen(n)||E(o),e.so(t)&&t()};class $ extends W{static selector=z;static init=L;static getInstance=f;constructor(t,n){super(t,n);const{element:s}=this;this.triggers=[...e.bo(b,e.d(s))].filter(a=>q.getTargetElement(a)===s),this.relatedTarget=null,T(this,!0)}get name(){return m.offcanvasComponent}get defaults(){return I}toggle(){e.kn(this.element,l.showClass)?this.hide():this.show()}show(){const{element:t,options:n,relatedTarget:s}=this;let a=0;if(e.kn(t,l.showClass)||(v.relatedTarget=s||void 0,k.relatedTarget=s||void 0,e.Q(t,v),v.defaultPrevented))return;const c=r.getCurrentOpen(t);if(c&&c!==t){const g=f(c)||e.Ln(c,m.modalComponent);g&&g.hide()}n.backdrop?(Q.hasPopup(r.overlay)?r.toggleOverlayType():r.appendOverlay(t,!0),a=e.oe(r.overlay),r.showOverlay(),setTimeout(()=>w(this),a)):(w(this),c&&e.kn(r.overlay,l.showClass)&&r.hideOverlay())}hide(t){const{element:n,relatedTarget:s}=this;e.kn(n,l.showClass)&&(p.relatedTarget=s||void 0,D.relatedTarget=s||void 0,e.Q(n,p),!p.defaultPrevented&&(e.Mn(n,u),e.Nn(n,l.showClass),t?y(this,t):e.zn(n,()=>y(this,t))))}dispose(){T(this),this.hide(()=>super.dispose())}}module.exports=$;
//# sourceMappingURL=offcanvas.cjs.map
