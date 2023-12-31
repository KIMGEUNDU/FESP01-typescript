// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    age: number;
    // phone?: string;
    // address?: string;
    // hobby?: string;
    // 나머지 기타 정보 저장
    [etc: string]: string | number | undefined;
  }

  var kim: User = {
    name: '김철수',
    email: 'kim@gmail.com',
    age: 30,
    phone: '010...',
    address: '서울시...',
    hobby: '독서'
  }


  var lee: User = {
    name: '이영희',
    email: 'lee@gmail.com',
    age: 35,
  }

  console.log(kim, lee);

})();

