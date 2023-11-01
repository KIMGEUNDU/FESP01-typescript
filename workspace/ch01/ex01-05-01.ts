// 유니언 타입
(()=>{
  type Type = string | number | boolean

  function print(msg: Type): void{
    if(typeof msg === 'string'){ //타입 가드
      console.log(`${msg} 글자수: ${msg.length}`); 
    }else if(typeof msg === 'number'){
      console.log(`${msg} + 10 = ${msg + 10}`);
    }else{
      console.log(`${msg} : ${msg ? '참' : '거짓'}`);
    }
  }
  print('표지훈')
  print(31)
  print(false)
})();