(() => {
  type UserFields = 'id' | 'name' | 'address' | 'phone'

  type User = {
    [Filed in UserFields]: string
  }

  const kim: User = {
    id: 'KIM',
    name: '김철수',
    address: '서울시 강동구',
    phone: '010-123-456',
  }

  console.log(kim);






})();