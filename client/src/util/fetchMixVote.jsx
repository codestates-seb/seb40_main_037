const BASE_URL = 'http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080';

export const fetchMixUpVote = async id => {
  return fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}/1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: sessionStorage.getItem('access_token'),
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
  return fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}/2`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: sessionStorage.getItem('access_token'),
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
  return fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}/3`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: sessionStorage.getItem('access_token'),
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
