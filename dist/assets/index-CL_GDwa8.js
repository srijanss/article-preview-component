(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();let n=window.innerWidth;const l=1024,s=document.querySelector(".card__share-btn"),o=document.querySelector(".card__share-links");let c=!1;function p(){c=!0,n<l?(o.classList.add("slider-active"),s.classList.add("slider-active")):(o.classList.add("popover-show"),s.classList.add("popover-show"))}function u(){c=!1,n<l?(o.classList.remove("slider-active"),s.classList.remove("slider-active")):(o.classList.remove("popover-show"),s.classList.remove("popover-show"))}const h=["click","touchstart","keydown"];h.forEach(d=>{s.addEventListener(d,r=>{r.type==="keydown"&&(r.key!=="Enter"||r.key!==" ")||(r.preventDefault(),c?u():p())})});window.addEventListener("resize",()=>{n=window.innerWidth,u()});