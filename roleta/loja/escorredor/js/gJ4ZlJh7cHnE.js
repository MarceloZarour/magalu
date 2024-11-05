(()=>{"use strict";var e={262:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0,t.Random=class{static chooseOne(e){return e[Math.floor(Math.random()*e.length)]}}},745:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeHasher=void 0;class r{static encode(e){return e.replace(/[0-9]/g,(e=>r.map[e]))}static decode(e){const t=Object.values(r.map).join(""),n=new RegExp(`[${t}]`,"g");return e.replace(n,(e=>Object.keys(r.map).find((t=>r.map[t]===e))||""))}static encodeAndInsert(e,t,n=1){const o=r.encode(e);return`${t.slice(0,n)}${o}${t.slice(n)}`}static decodeAndExtract(e){const t=Object.values(r.map).join(""),n=new RegExp(`[${t}]`,"g");let o="";return e.replace(n,(e=>{const t=Object.keys(r.map).find((t=>r.map[t]===e));return t&&(o+=t),e})),""!==o?o:null}static removeAllEncodedChars(e){const t=Object.values(r.map).join(""),n=new RegExp(`[${t}]`,"g");return e.replace(n,"")}}t.UnicodeHasher=r,r.map={0:"​",1:"‌",2:"‍",3:"⁠",4:"⁡",5:"⁢",6:"⁣",7:"⁤",8:"‪",9:"‬"}},202:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UrlRebuilder=void 0;const n=r(262),o=r(745);class i{static randomizePhoneNumberIfNecessary(e){var t;const r=null!==(t=window.phones)&&void 0!==t?t:[];if(0===r.length)return e;const o=n.Random.chooseOne(r);return e.includes("phone=")?i.withReplaceQueryParam(e,"phone",o):e.includes("wa.me")?`https://wa.me/${o}?${e.split("?")[1]}`:e}static insertAdIdInWppUrl(e,t){var r;const n=null!==(r=i.getQueryParams(e).get("text"))&&void 0!==r?r:"Olá",a=t.replace(/[^0-9]/g,""),l=o.UnicodeHasher.removeAllEncodedChars(n),s=o.UnicodeHasher.encodeAndInsert(a,l);return i.withReplaceQueryParam(e,"text",s)}static getAdId(e){var t;const r=null!==(t=e.get("utm_content"))&&void 0!==t?t:"";return r.includes("|")?r.split("|")[1]:null}static getQueryParams(e){const t=e.split("?")[1];return new URLSearchParams(t)}static withReplaceQueryParam(e,t,r){const n=e.split("?")[0],o=e.split("?")[1],i=new URLSearchParams(o);return i.set(t,r),`${n}?${i.toString()}`}static removeSpecialCharacteres(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s-|]/gi,"").replace(/\s/g,"")}}t.UrlRebuilder=i}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{const e=r(202);console.log("utms script loaded! 2.3.11");const t=!!document.querySelector("[data-utmify-ignore-iframe]"),n=!!document.querySelector("[data-utmify-ignore-retry]"),o=!!document.querySelector("[data-utmify-fast-start]"),i=!!document.querySelector("[data-utmify-plus-signal]"),a=!!document.querySelector("[data-utmify-is-click-bank]");var l,s;!function(e){e.Doppus="doppus"}(l||(l={})),function(e){e.PandaVideo="pandavideo.com",e.YouTube="youtube.com",e.EplayVideo="eplay.video",e.Vimeo="vimeo.com"}(s||(s={}));const u=["utm_source","utm_campaign","utm_medium","utm_content","utm_term"];class c{static addUtmParametersToUrl(e){const t=c.urlWithoutParams(e),r=c.paramsFromUrl(e),n=c.getUtmParameters(),o=new URLSearchParams;r.forEach(((e,t)=>o.append(t,e))),n.forEach(((e,t)=>o.append(t,e)));const a=c.urlParametersWithoutDuplicates(o),l=c.simplifyParametersIfNecessary(t,a),s=i?l.toString().split("+").join("%20"):l.toString(),u=-1===t.indexOf("?")?"?":"&";return`${t}${u}${s}`}static urlWithoutParams(e){return e.split("?")[0]}static paramsFromUrl(e){if(!e)return new URLSearchParams;const t=e instanceof URL?e.href:e;if(!t.includes("?"))return new URLSearchParams;const r=t.split("?");if(r.length<=1)return new URLSearchParams;const n=r[1];return new URLSearchParams(n)}static urlParametersWithoutDuplicates(e){const t=Array.from(e.keys()),r=new Map;t.forEach((t=>{const n=e.getAll(t);r.set(t,n[n.length-1])}));const n=new URLSearchParams;return r.forEach(((e,t)=>{n.append(t,e)})),n}static getUtmParameters(){var t;const r="hQwK21wXxR",n="rKm-km-rKm",o=new URLSearchParams(window.location.search);function i(e){const t=o.get(e);if(null!=t&&"null"!==t&&"undefined"!==t&&""!==t)return t;const r=localStorage.getItem(e);if(!r)return"";const n=localStorage.getItem(m(e));return!n||new Date(n)<new Date?(localStorage.removeItem(e),localStorage.removeItem(m(e)),""):r}function l(e){return e.join(r)}const s=i("utm_term"),u=i("utm_content"),c=i("utm_medium"),d=i("utm_campaign"),v=function(e){const t=function(){var e;const t=localStorage.getItem("lead");if(!t)return null;const r=JSON.parse(t);return null!==(e=null==r?void 0:r._id)&&void 0!==e?e:null}();return t?e.includes("jLj")?e:`${e}jLj${t}`:e}(i("utm_source")),p=new URLSearchParams;p.set("utm_source",v),p.set("utm_campaign",d.includes(n)?d:`${d}${n}${c}`),p.set("utm_medium",c),p.set("utm_content",u),p.set("utm_term",s);const w=null!==(t=p.get("utm_campaign"))&&void 0!==t?t:"",h=[v,w,c,u,s],f=l(h);a?(p.set("aff_sub1",e.UrlRebuilder.removeSpecialCharacteres(v)),p.set("aff_sub2",e.UrlRebuilder.removeSpecialCharacteres(w)),p.set("aff_sub3",e.UrlRebuilder.removeSpecialCharacteres(c)),p.set("aff_sub4",e.UrlRebuilder.removeSpecialCharacteres(u)),p.set("aff_sub5",e.UrlRebuilder.removeSpecialCharacteres(s))):(p.set("subid",e.UrlRebuilder.removeSpecialCharacteres(v)),p.set("sid2",e.UrlRebuilder.removeSpecialCharacteres(w)),p.set("subid2",e.UrlRebuilder.removeSpecialCharacteres(w)),p.set("subid3",e.UrlRebuilder.removeSpecialCharacteres(c)),p.set("subid4",e.UrlRebuilder.removeSpecialCharacteres(u)),p.set("subid5",e.UrlRebuilder.removeSpecialCharacteres(w)));const g=i("xcod"),U=i("src"),b=""!==g?g:U,R=function(e,t){if(e.length<=255)return e;const o=Math.floor(18.8);function i(e,t,r){function i(e){return e.substring(0,o)+"..."}if(!t)return i(e);const a=null!=r?r:"|",l=e.split(n)[0].split(a),s=l.length>1?l[l.length-1]:"";return`${i(1===l.length?l[0]:l.slice(0,-1).join(a))}${a}${s}`}const[a,s,u,c,d]=e.split(r);return l([i(a,!0,"jLj"),i(s,!0),i(u,!0),i(c,!0),i(d,!1)])}(h.every((e=>""===e))?b:f);p.set("xcod",R),p.set("sck",R),null!=U&&""!==U&&p.set("src",U);const S=o.get("fbclid");return null!=S&&""!==S&&p.set("fbclid",S),(()=>{const e=e=>null==e||""===e,t=i("utm_source"),r=i("utm_medium"),n=i("utm_campaign"),o=i("utm_content"),a=i("utm_term"),l=i("xcod"),s=i("src"),u=p.get("fbclid");return e(t)&&e(r)&&e(n)&&e(o)&&e(a)&&e(l)&&e(s)&&e(u)})()&&p.set("utm_source","organic"),p}static simplifyParametersIfNecessary(e,t){if(!Object.values(l).some((t=>e.includes(t))))return t;const r=new URLSearchParams;return t.forEach(((e,t)=>{u.includes(t)&&r.append(t,e)})),r}}window.paramsList=["utm_source","utm_campaign","utm_medium","utm_content","utm_term","xcod","src"],window.itemExpInDays=7;const d=["utm_source","utm_campaign","utm_medium","utm_content","xcod","sck"];function m(e){return`${e}_exp`}function v(){function r(t){document.querySelectorAll("a").forEach((r=>{if(!r.href.startsWith("mailto:")&&!r.href.startsWith("tel:")&&!r.href.includes("#")){if(n=r.href,["wa.me/","api.whatsapp.com/send","whatsapp:","link.dispara.ai/"].some((e=>n.includes(e)))){const t=c.getUtmParameters(),n=e.UrlRebuilder.getAdId(t);return r.href=e.UrlRebuilder.randomizePhoneNumberIfNecessary(r.href),void(r.href=e.UrlRebuilder.insertAdIdInWppUrl(r.href,null!=n?n:""))}var n;if(t&&d.every((e=>r.href.includes(e))))return;r.href=c.addUtmParametersToUrl(r.href)}}))}function n(e){document.querySelectorAll("form").forEach((t=>{e&&d.every((e=>t.action.includes(e)))||(t.action=c.addUtmParametersToUrl(t.action),c.getUtmParameters().forEach(((e,r)=>{const n=(o=r,t.querySelector(`input[name="${o}"]`));var o;if(n)return void n.setAttribute("value",e);const i=((e,t)=>{const r=document.createElement("input");return r.type="hidden",r.name=e,r.value=t,r})(r,e);t.appendChild(i)})))}))}!function(){const e=new URLSearchParams(window.location.search);window.paramsList.forEach((t=>{const r=e.get(t);r&&((e,t)=>{localStorage.setItem(e,t);const r=new Date((new Date).getTime()+24*window.itemExpInDays*60*60*1e3);localStorage.setItem(m(e),r.toISOString())})(t,r)}))}();const o=function(){var e,t,r,n,o,i,a,l,s,u,c,d,m,v,p,w,h,f,g,U,b,R,S,y,_,P,O,E,N,I;const $=null!==(r=null===(t=null===(e=null===window||void 0===window?void 0:window.BOOMR)||void 0===e?void 0:e.themeName)||void 0===t?void 0:t.includes("Dropmeta"))&&void 0!==r&&r,j=null!==(i=null===(o=null===(n=null===window||void 0===window?void 0:window.BOOMR)||void 0===n?void 0:n.themeName)||void 0===o?void 0:o.includes("Warehouse"))&&void 0!==i&&i,L=null!==(s=null===(l=null===(a=null===window||void 0===window?void 0:window.BOOMR)||void 0===a?void 0:a.themeName)||void 0===l?void 0:l.includes("Classic®"))&&void 0!==s&&s,x=null!==(d=null===(c=null===(u=null===window||void 0===window?void 0:window.BOOMR)||void 0===u?void 0:u.themeName)||void 0===c?void 0:c.includes("Tema Vision"))&&void 0!==d&&d,M=null!==(p=null===(v=null===(m=null===window||void 0===window?void 0:window.BOOMR)||void 0===m?void 0:m.themeName)||void 0===v?void 0:v.includes("Waresabino"))&&void 0!==p&&p,A=null!==(f=null===(h=null===(w=null===window||void 0===window?void 0:window.BOOMR)||void 0===w?void 0:w.themeName)||void 0===h?void 0:h.includes("Dawn"))&&void 0!==f&&f,C=null!==(b=null===(U=null===(g=null===window||void 0===window?void 0:window.BOOMR)||void 0===g?void 0:g.themeName)||void 0===U?void 0:U.includes("Vortex"))&&void 0!==b&&b,T=null!==(y=null===(S=null===(R=null===window||void 0===window?void 0:window.BOOMR)||void 0===R?void 0:R.themeName)||void 0===S?void 0:S.includes("Warepro"))&&void 0!==y&&y,D=null!==(O=null===(P=null===(_=null===window||void 0===window?void 0:window.BOOMR)||void 0===_?void 0:_.themeName)||void 0===P?void 0:P.includes("Wareimadigital"))&&void 0!==O&&O,W=null!==(I=null===(N=null===(E=null===window||void 0===window?void 0:window.BOOMR)||void 0===E?void 0:E.themeName)||void 0===N?void 0:N.includes("Magazine Luiza"))&&void 0!==I&&I;return $||j||L||x||M||A||C||T||D||W}();r(),function(){const e=window.open;window.open=function(t,r,n){var o;return t=c.addUtmParametersToUrl(null!==(o=null==t?void 0:t.toString())&&void 0!==o?o:""),e(t,r||"",n||"")}}(),o||(n(),function(){const{body:e}=document;new MutationObserver(((e,t)=>{const o=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e;return"INPUT"===t.tagName&&"hidden"===(null==t?void 0:t.type)};e.some((e=>Array.from(e.addedNodes).some(o)))||(r(!0),n(!0))})).observe(e,{subtree:!0,childList:!0})}(),t||document.querySelectorAll("iframe").forEach((e=>{Object.values(s).some((t=>e.src.includes(t)))||(e.src=c.addUtmParametersToUrl(e.src))})))}const p=()=>{v(),n||(setTimeout(v,2e3),setTimeout(v,3e3),setTimeout(v,5e3),setTimeout(v,9e3))};o||"complete"===document.readyState?p():window.addEventListener("load",p)})()})();