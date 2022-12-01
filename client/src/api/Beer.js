import Api from '.';

export const getBeerList = async (page = 0) => {
  const result = await Api.get(`/beers?page=${page}`);
  return result.data;
};

export const postBeerOrder = async formData => {
  const result = await Api.post('/drink/order/submit', formData);
  return result;
};
