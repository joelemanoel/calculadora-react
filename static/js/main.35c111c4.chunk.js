(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{18:function(n,r,t){},23:function(n,r,t){"use strict";t.r(r);var e,i=t(1),o=t(0),a=t.n(o),c=t(9),u=t.n(c),l=(t(18),t(4));!function(n){n.limparVisor="C",n.apagarUltimoItem="\u232b",n.calcular="=",n.multiplicar="\xd7",n.dividir="\xf7",n.somar="+",n.subtrair="-"}(e||(e={}));var s=function(n){return isNaN(parseInt(n.toString()))?"="===n?{background:"#d10028",color:"#fff"}:"C"===n?{background:"#ea4900",color:"#fff"}:{background:"#d3d3d3",color:"#0a0a0a"}:{background:"#0a0a0a",color:"#808080"}},p=["(",")",e.apagarUltimoItem,e.limparVisor,7,8,9,e.dividir,4,5,6,e.multiplicar,1,2,3,e.subtrair,0,".",e.calcular,e.somar],d=p.map((function(n){var r=s(n);return{label:n,background:r.background,color:r.color}})),f=t(2),b=t(3);function h(){var n=Object(f.a)(["\n  background: ",";\n  color: ",";\n  width: 50px;\n  height: 50px;\n  border: 0;\n  border-radius: 8px;\n  font-size: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return h=function(){return n},n}var v=b.a.button(h(),(function(n){return n.background}),(function(n){return n.color})),g=function(n){var r=n.onClick,t=n.label,e=n.background,o=n.color;return Object(i.jsx)(v,{onClick:r,background:e,color:o,children:Object(i.jsx)("span",{children:t})})};function x(){var n=Object(f.a)(["\n  color: #991B1B !important;\n  background: #FCA5A5;\n  border-radius: 4px;\n  font-size: 12px !important;\n  display: inline;\n  padding: 6px;\n  position: absolute;\n  left: 0;\n  transition: all 0.2;\n  font-weight: bold;\n"]);return x=function(){return n},n}function j(){var n=Object(f.a)(["\n  width: 260px;\n  padding: 16px;\n  background: #000;\n  text-align: right;\n  box-sizing: border-box;\n  min-height: 87px;\n  \n  > div {\n    color: #808080;\n    font-size: 16px;\n    word-break: break-all;\n    height: 19px;\n    position: relative;\n  }\n\n  div:last-child {\n    color: #fff;\n    font-size: 30px;\n  }\n"]);return j=function(){return n},n}var m=b.a.div(j()),O=b.a.div(x()),k=function(n){var r=n.erro,t=n.expressao,e=n.resultado;return Object(i.jsxs)(m,{children:[Object(i.jsxs)("div",{children:[r&&Object(i.jsx)(O,{children:r}),t]}),Object(i.jsx)("div",{children:e})]})};function w(){var n=Object(f.a)(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n"]);return w=function(){return n},n}function E(){var n=Object(f.a)(["\n  padding: 15px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n"]);return E=function(){return n},n}function y(){var n=Object(f.a)(["\n  background: #1e1e1e;\n  margin: auto;\n  width: 260px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;\n"]);return y=function(){return n},n}var S=b.a.div(y()),N=b.a.div(E()),I=b.a.button(w()),V=function n(r,t){var e=r.shift();if(void 0===e)throw new Error("Token inv\xe1lido");if("("===e){var i=r.shift();if(void 0===i)throw new Error("Operador inv\xe1lido");var o=t[i];if(void 0===o)throw new Error("Operador n\xe3o encontrado");for(var a=[];")"!==r[0];)a.push(n(r,t));return r.shift(),o(a)}return e},C=function(n){if(")"!==n.slice(-1)&&isNaN(parseInt(n.slice(-1))))return!1;var r=n.split(""),t=0,e=0;if(r.forEach((function(n){"("===n?t++:")"===n&&e++})),t!==e)return!1;for(var i=n.length-1;i>-1;i--)if(")"!==n[i]){if(isNaN(parseInt(n[i])))return!1;break}return!0},D=function(n){for(var r=function(n){return!isNaN(parseFloat(n))||"."===n},t="",e="",i="",o=0,a=0;a<n.length;a++){var c=n[a];if("("!==c)if(")"!==c){if(o<0)throw new Error("Express\xe3o inv\xe1lida. Verifique os par\xeanteses.");if(r(c))i+=c;else{i+=" ",e+=c;for(var u=a,l=n[a+1];!r(l)&&"("!==l;)e+=l,l=n[++u+1];for(;r(l);)i+=l,l=n[++u+1];a=u,t+=" (".concat(e," ").concat(i.trim()),i="",e="",o++}}else o--,t+=c;else o++,t+=" (+ 0",i.length>0&&0===e.length&&(t+=" (* ".concat(i),i="",o++)}return"".concat(t).concat(")".repeat(o)).trim()},z={"+":function(n){return n.reduce((function(n,r){return n+r}))},"-":function(n){return n.reduce((function(n,r){return n-r}))},"*":function(n){return n.reduce((function(n,r){return n*r}))},"/":function(n){return n.reduce((function(n,r){return n/r}))}},B=function(n){var r=n.split(" "),t=[];return r.forEach((function(n){if("("===n[0])t.push("("),t.push(n.slice(1));else if(")"===n.slice(-1)){for(var r=n.length-1,e=[];r;)")"===n[r]&&e.push(")"),r--;t.push(parseFloat(n.slice(0,-1))),e.map((function(n){return t.push(n)}))}else t.push(parseFloat(n))})),t},F=function(n){if(!C(n))throw new Error("Express\xe3o inv\xe1lida");n=n.replaceAll(e.dividir,"/").replaceAll(e.multiplicar,"*");var r=V(B(D(n)),z);if(isNaN(+r))throw new Error("Verifique sua express\xe3o");return r},T=p.join("").replace("Backspace",e.apagarUltimoItem).replace("Delete",e.limparVisor).split(""),U=function(){var n=Object(o.useState)(""),r=Object(l.a)(n,2),t=r[0],a=r[1],c=Object(o.useState)(""),u=Object(l.a)(c,2),s=u[0],p=u[1],f=Object(o.useState)(""),b=Object(l.a)(f,2),h=b[0],v=b[1],x=Object(o.useRef)(null);Object(o.useEffect)((function(){var n,r;null===(n=x.current)||void 0===n||null===(r=n.querySelector("button"))||void 0===r||r.focus()}),[]);var j=function(n){v(n.replace("Error: ","")),setTimeout((function(){v("")}),3e3)},m=function(n){return n===e.calcular?function(n){try{var r=F(n);p(r.toString()),a(n)}catch(t){j(t.toString())}}(s):n===e.limparVisor?(a(""),void p("")):void(n!==e.apagarUltimoItem?p("".concat(s).concat(n)):p(s.slice(0,-1)))},O=function(n){var r=n.currentTarget.innerText;m(r),n.currentTarget.blur()};return Object(i.jsxs)(S,{id:"calculadora",onKeyDown:function(n){n.preventDefault(),n.stopPropagation();var r=n.key;"Backspace"===r?r=e.apagarUltimoItem:"Delete"===r?r=e.limparVisor:"Enter"===r?r=e.calcular:"/"===r?r=e.dividir:"*"===r?r=e.multiplicar:"c"===r?r=e.limparVisor:","===r&&(r="."),T.includes(r)&&m(r)},onClick:function(){var n,r;null===(n=x.current)||void 0===n||null===(r=n.querySelector("button"))||void 0===r||r.focus()},ref:x,children:[Object(i.jsx)(k,{erro:h,expressao:t,resultado:s}),Object(i.jsxs)(N,{children:[Object(i.jsx)(I,{}),d.map((function(n){return Object(i.jsx)(g,{onClick:O,label:n.label.toString(),background:n.background,color:n.color},n.label)}))]})]})};function q(){var n=Object(f.a)(["\n  margin: 0 auto;\n  text-align: center;\n  align-self: flex-end;\n  padding: 16px;\n"]);return q=function(){return n},n}var A=b.a.footer(q()),M=function(){return Object(i.jsxs)(A,{children:[Object(i.jsxs)("p",{children:["Made with \u2764\ufe0f by"," ",Object(i.jsx)("a",{href:"https://douglasmoura.dev",target:"_blank",rel:"noreferrer",children:"Douglas Moura"})]}),Object(i.jsxs)("p",{children:["See on ",Object(i.jsx)("a",{href:"https://github.com/DouglasdeMoura/calculadora-react",children:"GitHub"})]})]})},J=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(U,{}),Object(i.jsx)(M,{})]})};u.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(J,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.35c111c4.chunk.js.map