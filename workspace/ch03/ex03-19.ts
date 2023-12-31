// ex03-18.ts 복사
(() => {
  const kim: User = {
    name: '김철수',
    age: 30,
    nickName: '철숭'
  }

  const lee: UnkownUser = {
    name: '이영희',
    age: '비공개'
  }

  const hong: AdminUser = {
    name: '홍길동'
  }

  function printUser(user: User | UnkownUser | AdminUser) {
    // 유저타입일 경우 나이 출력
    if (isUser(user)) {
      console.log(user.nickName);
    }
  }

  // 타입 가드 함수
  function isUser(user: User | UnkownUser | AdminUser): user is User {
    return typeof (user as User).age === 'number'
  }

  printUser(kim)
  printUser(lee)
  printUser(hong)
})();