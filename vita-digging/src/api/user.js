// 더미 API 호출 시뮬레이션
export const getUserInfo = async () => {
  return new Promise((resolve) =>
    setTimeout(() =>
      resolve({
        id: 'exampleID',
        nickname: '홍길동',
        email: 'healthy@example.com',
        birth: '2002-04-15',
        gender: 'female',
      }), 300)
  );
};

export const getUserPills = async () => {
  return new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          manufacturer: '종근당',
          name: '비타민C 1000mg',
          image: '/images/dummy_pill.png',
        },
        {
          id: 2,
          manufacturer: '뉴트리라이트',
          name: '오메가-3',
          image: '/images/dummy_pill.png',
        },
      ]), 300)
  );
};
