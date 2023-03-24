import axios from 'axios';

const handlePostRequest = async (url, data) => {
  const response = await axios.post(url, data);
  console.log(response);
  return response;
};

export { handlePostRequest };
