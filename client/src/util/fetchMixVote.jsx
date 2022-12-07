const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchMixUpVote = async id => {
  return fetch(`${BASE_URL}/mixes/${id}/1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
    body: JSON.stringify({}),
  })
    .then(async response => {
      if (!response.ok) {
        return response.json().then(res => {
          throw Error(res.message);
        });
      }
      return response.json();
    })
    .then(data => data.data)
    .catch(error => {
      throw Error(error.message);
    });
};

export const fetchMixDownVote = async id => {
  return fetch(`${BASE_URL}/mixes/${id}/2`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
    body: JSON.stringify({}),
  })
    .then(async response => {
      if (!response.ok) {
        return response.json().then(res => {
          throw Error(res.message);
        });
      }
      return response.json();
    })
    .then(data => data.data)
    .catch(error => {
      throw Error(error.message);
    });
};

export const fetchMixDeleteVote = async id => {
  return fetch(`${BASE_URL}/mixes/${id}/3`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
    body: JSON.stringify({}),
  })
    .then(async response => {
      if (!response.ok) {
        return response.json().then(res => {
          throw Error(res.message);
        });
      }
      return response.json();
    })
    .then(data => data.data)
    .catch(error => {
      throw Error(error.message);
    });
};
