import axios from 'axios';

const keyAPI = '35160839-4fe9cbd0f2e961147388a4735';

const fetchImagesFromApi = async ({ query }) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default fetchImagesFromApi;
