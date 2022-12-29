import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//댓글 리스트 조회
export const axiosReplyList = async id => {
  return axios(`${BASE_URL}/mixes/${id}/reply`)
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
//댓글 작성(생성)
export const axiosReplyCreate = async fetchData => {
  return axios(`${BASE_URL}/mixes/${id}/reply`, {
    method: 'POST',
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
    .catch(error => {
      throw Error(error.message);
    });
};
//댓글 삭제
export const axiosDeleteAnswer = async id => {
  return axios(`${BASE_URL}/mixes/${id}/reply/${id}`, {
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
      return data;
    })
    .catch(error => {
      throw Error(error.message);
    });
};
