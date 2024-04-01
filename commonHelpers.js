import{a as u,S as d}from"./assets/vendor-988dafa7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function m(r,s){const o="https://pixabay.com/api/",a={key:"43052595-a551201a8532f3816f916cad6",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return(await u.get(o,{params:a})).data}const p=new d(".gallery-link",{captionsData:"alt"});function f(r){const{webformatURL:s,largeImageURL:o,tags:a,likes:e,views:t,comments:l,downloads:c}=r;return`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            src="${s}"
            data-source="${o}"
            alt="${a}"
          />
          <ul class="gallery-description">
          <li class="gallery-dscr_item"><h3>Likes</h3><p>${e}</p>
          </li>
          <li class="gallery-dscr_item"><h3>Views</h3><p>${t}</p>
            </li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${l}</p>
              </li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${c}</p>
                </li>
          </ul>
        </a>
      </li>`}function y(r){return r.map(f).join("")}function g(r){const s=y(r);n.insertAdjacentHTML("beforeend",s),p.refresh()}const h=document.querySelector(".form"),n=document.querySelector(".gallery"),L=document.querySelector(".loader");L.style.display="none";document.querySelector(".load-button");let i;h.addEventListener("submit",async r=>{r.preventDefault(),n.innerHTML="",i=r.target.elements.search.value.trim();const s=await m(i);g(s.hits),r.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
