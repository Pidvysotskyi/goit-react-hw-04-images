import axios from 'axios';
const API_KEY = '29264907-2ab68c5d7b62ca0acfac904a2';

export function getImages(query, pageNumber) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => {
      return response.data;
    });
}
