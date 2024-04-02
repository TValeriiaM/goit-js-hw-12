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
const perPage = 15;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  query = event.target.elements.search.value.trim();
  galleryImages.innerHTML = '';
  currentPage = 1;

  loadMove.style.display = 'flex';

  try {
    const data = await getImage(query, currentPage);
    maxPage = Math.ceil(data.totalHits / perPage);

    if (!data.hits.length) {
      iziToast.error({
        title: '❌',
        icon: '',
        position: 'center',
        message: `Sorry, there are no images matching your search query. Please, try again!`,
      });
      loadMove.style.display = 'none';
      hideLoadMore();
    } else {
      renderGallery(data.hits);
      loadMove.style.display = 'none';
      buttonLoadOff();
    }
  } catch (error) {
    console.log(error);
  }

  event.target.reset();
});

loadButton.addEventListener('click', loadMoreClick);
async function loadMoreClick() {
  currentPage += 1;
  loadMove.style.display = 'flex';

  try {
    const data = await getImage(query, currentPage);
    renderGallery(data.hits);
  } catch (error) {
    console.log(error);
  }
  scrollPage();
  loadMove.style.display = 'none';
  buttonLoadOff();
}

function showLoadMore() {
  loadButton.classList.remove('is-hidden');
}

function hideLoadMore() {
  loadButton.classList.add('is-hidden');
}

function buttonLoadOff() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    iziToast.info({
      title: '',
      position: 'topRight',
      message: `We're sorry, but you've reached the end of search results.`,
    });
  } else {
    showLoadMore();
  }
}

function scrollPage() {
  const scrollHeigth = galleryImages.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: scrollHeigth * 2,
    behavior: 'smooth',
  });
}
