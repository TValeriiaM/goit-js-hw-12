import{a as b,S as w,i as u}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function y(t,r){const o="https://pixabay.com/api/",a={key:"43052595-a551201a8532f3816f916cad6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await b.get(o,{params:a})).data}const M=new w(".gallery-link",{captionsData:"alt"});function q(t){const{webformatURL:r,largeImageURL:o,tags:a,likes:e,views:s,comments:i,downloads:L}=t;return`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            src="${r}"
            data-source="${o}"
            alt="${a}"
          />
          <ul class="gallery-description">
          <li class="gallery-dscr_item"><h3>Likes</h3><p>${e}</p>
          </li>
          <li class="gallery-dscr_item"><h3>Views</h3><p>${s}</p>
            </li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${i}</p>
              </li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${L}</p>
                </li>
          </ul>
        </a>
      </li>`}function v(t){return t.map(q).join("")}function f(t){const r=v(t);p.insertAdjacentHTML("beforeend",r),M.refresh()}const P=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const d=document.querySelector(".load-button");let c,n,m=0;const S=15;P.addEventListener("submit",async t=>{t.preventDefault(),c=t.target.elements.search.value.trim(),p.innerHTML="",n=1,l.style.display="flex";try{const r=await y(c,n);m=Math.ceil(r.totalHits/S),r.hits.length?(f(r.hits),l.style.display="none",h()):(u.error({title:"❌",icon:"",position:"center",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none",g())}catch(r){console.log(r)}t.target.reset()});d.addEventListener("click",$);async function $(){n+=1,l.style.display="flex";try{const t=await y(c,n);f(t.hits)}catch(t){console.log(t)}l.style.display="none",h()}function x(){d.classList.remove("is-hidden")}function g(){d.classList.add("is-hidden")}function h(){n>=m?(g(),u.info({title:"",position:"topRight",message:"We're sorry, but you've reached the end of search results."})):x()}
//# sourceMappingURL=commonHelpers.js.map
