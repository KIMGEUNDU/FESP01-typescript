// 유니언 타입
(()=>{
  function log(msg: string | number | null): void{
    console.log(msg);
  }

  log('hello')
  log(2015)

  var msg1: string = 'world'
  var msg2: number = 200
  log(msg1)
  log(msg2)

  var msg3: string | null = prompt('다이어트하실건가요?')
  log(msg3)
})();

