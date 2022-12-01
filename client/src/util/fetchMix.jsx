// Mix 단일 게시물 조회
export const fetchMixDetail = async id => {
  return fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}`)
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
export const fetchMixList = async page => {
  return fetch(
    `http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes?page=${page}`,
  )
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
export const fetchMixCreate = async fetchData => {
  return fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      authorization: sessionStorage.getItem('access_token'),
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
  fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/Mixes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: sessionStorage.getItem('access_token'),
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
  fetch(`http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/Mixes/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: sessionStorage.getItem('access_token'),
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
