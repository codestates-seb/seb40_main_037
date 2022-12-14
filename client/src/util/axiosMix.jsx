import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// Mix 단일 게시물 조회

export const axiosMixDetail = async id => {
  return axios(`${BASE_URL}/mixes/${id}`)
    .then(response => {
      if (!response.ok) {
        throw Error('유효하지 않은 요청입니다.');
      }
      return response.json();
    })
    .catch(error => {
      throw Error(error.message);
    });
};
// Mix 리스트 조회
export const axiosMixList = async page => {
  return axios(`${BASE_URL}/mixes?page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw Error('유효하지 않은 요청입니다.');
      }
      return response.json();
    })
    .catch(error => {
      throw Error(error.message);
    });
};
// mix 새로운 글 작성
export const axiosMixCreate = async fetchData => {
  return axios(`${BASE_URL}/mixes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
    body: JSON.stringify(fetchData),
  })
    .then(response => {
      if (!response.ok) {
        throw Error('유효하지 않은 요청입니다.');
      }
      return response.json();
    })
    .then(data => {
      return data.id;
    })
    .catch(error => {
      throw Error(error.message);
    });
};
// mix 글 수정
export const MixUpdate = async (fetchData, id) => {
  axios(`${BASE_URL}/Mixes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
    body: JSON.stringify(fetchData),
  })
    .then(response => {
      if (!response.ok) {
        throw Error('유효하지 않은 요청입니다.');
      }
      return response.json();
    })
    .then(data => {
      return data.data;
    })
    .catch(error => {
      throw Error(error.message);
    });
};
// mix 글 삭제
export const MixDelete = async id => {
  axios(`${BASE_URL}/Mixes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
  })
    .then(response => {
      if (!response.ok) {
        throw Error('유효하지 않은 요청입니다.');
      }
      return response.json();
    })
    .then(data => {
      return data.data;
    })
    .catch(error => {
      throw Error(error.message);
    });
};
