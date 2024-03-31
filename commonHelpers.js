import{S as d,i as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43052595-a551201a8532f3816f916cad6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${r}?${s}`;return fetch(l).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const y=new d(".gallery-link",{captionsData:"alt"});function p(o){const r=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:i,comments:c,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            src="${s}"
            data-source="${l}"
            alt="${e}"
          />
          <ul class="gallery-description">
          <li class="gallery-dscr_item"><h3>Likes</h3><p>${t}</p>
          </li>
          <li class="gallery-dscr_item"><h3>Views</h3><p>${i}</p>
            </li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${c}</p>
              </li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${u}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),y.refresh()}const h=document.querySelector(".form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";h.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="";const r=o.target.elements.search.value.trim();r&&(a.style.display="flex",m(r).then(s=>{s.hits.length||f.error({title:"❌",icon:"",message:"Sorry, there are no images matching your search query. Please, try again!"}),p(s.hits),a.style.display="none"}).catch(s=>{console.log(s),a.style.display="none"})),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
