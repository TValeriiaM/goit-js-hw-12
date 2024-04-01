import axios from 'axios';

export async function getImage(query, currentPage) {
  const URL = 'https://pixabay.com/api/';

  const params = {
    key: '43052595-a551201a8532f3816f916cad6',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  const res = await axios.get(URL, { params });
  return res.data;
}
