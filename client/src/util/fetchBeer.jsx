import axios from 'axios';

// Mix 단일 게시물 조회
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const BeerListDetail = async id => {
  return fetch(`${BASE_URL}/beers/${id}`)
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
// Beer 리뷰리스트
export const BeerReviewList = async id => {
  return fetch(`${BASE_URL}/beer/reviews/${id}`)
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
// Beer 리스트 조회 사용하고 있지 않습니다!!!!
export const BeerList = async size => {
  return fetch(`${BASE_URL}/beerList?size=${size}`)
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

// Beer 좋아요 기능
export const BeerLikeButton = async id => {
  return fetch(`${BASE_URL}/beers/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      authorization: localStorage.getItem('access_token'),
    },
    body: JSON.stringify(id),
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
//  새로운 리뷰 작성
export const BeerRivewCreate = async (fetchData, id) => {
  console.log(fetchData);
  console.log(id);
  console.log(fetchData);
  return fetch(`${BASE_URL}/beer/reviews/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      authorization: localStorage.getItem('access_token'),
    },
    body: JSON.stringify(fetchData),
  })
    .then(response => {
      if (!response.ok) {
        throw Error('잘못된 리뷰 등록입니다.');
      }
      return response.json();
    })
    .then(data => {
      return data.id, data.data;
    })
    .catch(error => {
      throw Error(error.message);
    });
};
// mix 글 수정
export const MixUpdate = async (fetchData, id) => {
  fetch(`${BASE_URL}/Mixes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('access_token'),
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
  fetch(`${BASE_URL}/Mixes/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: localStorage.getItem('access_token'),
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
