// 객체 타입 선언
(()=>{
  // 객체의 타입 선언
  type User = {name: string, age: number}

  //객체 생성
  var kim: User = {name: '표지훈', age: 31}

  function printUser(user: User): void{
    console.log(user);
  }

  printUser(kim)
})();