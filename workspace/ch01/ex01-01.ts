(()=>{
  // 타입정해주기 ":데이터타입"
  // function 이름 뒤에는 return값의 데이터타입지정해주는 것

  function hello(name:string):string{
    return 'Hi ' + name
  }

  console.log(hello('Typescript!!!'));
})();

