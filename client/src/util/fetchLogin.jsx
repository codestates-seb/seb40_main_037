const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchUserInfo = async () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      //   'Content-Type': 'application/json;charset=UTF-8',
      //   Accept: 'application/json',
      Accept: '*/*',
      Authorization: localStorage.getItem('access_token').replace(/\"/gi, ''),
    },
  })
    .then(res => {
      if (!res.ok) {
        // error coming back from server
        throw Error('요청에 실패했습니다.');
      }
      return res.json();
    })
    .catch(err => {
      console.error(err.message);
    });
};
export const checkIfLogined = async () => {
  return await fetchUserInfo().then(data => {
    if (!data) {
      setTimeout(() => {
        window.location.href = '/Login';
      }, 1500);
      alert('Please log in.');
    }
  });
};
