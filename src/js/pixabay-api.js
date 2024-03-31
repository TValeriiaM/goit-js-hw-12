export function getImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const parameters = new URLSearchParams({
    key: '43052595-a551201a8532f3816f916cad6',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${parameters}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
