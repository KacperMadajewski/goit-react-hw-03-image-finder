import axios from 'axios';

const fetchImagesFromApi = async ({ query }) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=${query}&image_type=photo&orientation=horizontal&per_page=12`
  );
    return response.data.hits;
};

export default {
    fetchImagesFromApi,
};