"use strict";var g=Object.defineProperty;var v=(s,n,t)=>n in s?g(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var a=(s,n,t)=>(v(s,typeof n!="symbol"?n+"":n,t),t);const e=require("@thednp/shorty"),l=require("@thednp/event-listener"),c=require("./activeClass-a1284579.js"),d=require("./dataBsToggle-c8bc9e7f.js"),h=require("./base-component-f3cef043.js"),C="button",u="Button",b=`[${d.dataBsToggle}="${C}"]`,m=s=>e.getInstance(s,u),p=s=>new o(s);class o extends h.BaseComponent{constructor(t){super(t);a(this,"isActive",!1);a(this,"toggle",t=>{t&&t.preventDefault();const{element:i,isActive:r}=this;!e.hasClass(i,"disabled")&&!e.getAttribute(i,"disabled")&&((r?e.removeClass:e.addClass)(i,c.activeClass),e.setAttribute(i,e.ariaPressed,r?"false":"true"),this.isActive=e.hasClass(i,c.activeClass))});a(this,"_toggleEventListeners",t=>{(t?l.addListener:l.removeListener)(this.element,e.mouseclickEvent,this.toggle)});const{element:i}=this;this.isActive=e.hasClass(i,c.activeClass),e.setAttribute(i,e.ariaPressed,String(!!this.isActive)),this._toggleEventListeners(!0)}get name(){return u}dispose(){this._toggleEventListeners(),super.dispose()}}a(o,"selector",b),a(o,"init",p),a(o,"getInstance",m);module.exports=o;
//# sourceMappingURL=button.cjs.map