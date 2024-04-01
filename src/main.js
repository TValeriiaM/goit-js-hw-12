import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const searchForm = document.querySelector('.form');
export const galleryImages = document.querySelector('.gallery');

const loadMove = document.querySelector('.loader');
loadMove.style.display = 'none';

const loadButton = document.querySelector('.load-button');

let query;
let currentPage;
let maxPage = 0;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  galleryImages.innerHTML = '';
  query = event.target.elements.search.value.trim();
  currentPage = 1;

  const data = await getImage(query);

  renderGallery(data.hits);

  event.target.reset();
});

function showLoadMore() {
  loadButton.classList.remove('.is-hidden');
}

function hideLoadMore() {
  loadButton.classList.add('.is-hidden');
}

// const loadMove = document.querySelector('.loader');
// loadMove.style.display = 'none';

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   galleryImages.innerHTML = '';
//   const query = event.target.elements.search.value.trim();

//   if (query) {
//     loadMove.style.display = 'flex';

//     getImage(query)
//       .then(data => {
//         if (!data.hits.length) {
//           iziToast.error({
//             title: '❌',
//             icon: '',
//             message: `Sorry, there are no images matching your search query. Please, try again!`,
//           });
//         }
//         renderGallery(data.hits);
//         loadMove.style.display = 'none';
//         showLoadMore()
//       })
//       .catch(error => {
//         console.log(error);
//         loadMove.style.display = 'none';
//       });
//   }
//   event.target.reset();
// });
