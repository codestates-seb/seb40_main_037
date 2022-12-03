import Api from './Account';

export const getBeerList = async page => {
  const response = await Api.get(`/beers?page=${page}`);
  return response.data;
};

export const postBeerOrder = async formData => {
  const result = await Api.post('/drink/order/submit', formData);
  return result;
};
