import{a as b,S as w,i as y}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function f(e,r){const s="https://pixabay.com/api/",a={key:"43052595-a551201a8532f3816f916cad6",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await b.get(s,{params:a})).data}const v=new w(".gallery-link",{captionsData:"alt"});function M(e){const{webformatURL:r,largeImageURL:s,tags:a,likes:t,views:o,comments:i,downloads:L}=e;return`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            src="${r}"
            data-source="${s}"
            alt="${a}"
          />
          <ul class="gallery-description">
          <li class="gallery-dscr_item"><h3>Likes</h3><p>${t}</p>
          </li>
          <li class="gallery-dscr_item"><h3>Views</h3><p>${o}</p>
            </li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${i}</p>
              </li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${L}</p>
                </li>
          </ul>
        </a>
      </li>`}function P(e){return e.map(M).join("")}function g(e){const r=P(e);d.insertAdjacentHTML("beforeend",r),v.refresh()}const q=document.querySelector(".form"),d=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const u=document.querySelector(".load-button");let c,n,p=0;const S=15;q.addEventListener("submit",async e=>{e.preventDefault(),c=e.target.elements.search.value.trim(),d.innerHTML="",n=1,l.style.display="flex";try{const r=await f(c,n);p=Math.ceil(r.totalHits/S),r.hits.length?(g(r.hits),l.style.display="none",h()):(y.error({title:"❌",icon:"",position:"center",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none",m())}catch(r){console.log(r)}e.target.reset()});u.addEventListener("click",$);async function $(){n+=1,l.style.display="flex";try{const e=await f(c,n);g(e.hits)}catch(e){console.log(e)}O(),l.style.display="none",h()}function x(){u.classList.remove("is-hidden")}function m(){u.classList.add("is-hidden")}function h(){n>=p?(m(),y.info({title:"",position:"topRight",message:"We're sorry, but you've reached the end of search results."})):x()}function O(){const e=d.firstChild.getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
