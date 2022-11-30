//댓글 리스트 조회
export const fetchReplyList = async id => {
  return fetch(
    `http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}/reply`,
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
//댓글 작성(생성)
export const fetchReplyCreate = async fetchData => {
  return fetch(
    `http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}/reply`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify(fetchData),
    },
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
//댓글 삭제
export const fetchDeleteAnswer = async id => {
  return fetch(
    `http://ec2-43-201-130-57.ap-northeast-2.compute.amazonaws.com:8080/mixes/${id}/reply/${id}`,
    {
      method: 'DELETE',
      headers: {
        authorization: sessionStorage.getItem('access_token'),
      },
    },
  )
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
