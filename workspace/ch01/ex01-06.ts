// 타입 별칭
// ex01-05.ts 복사
(()=>{
  type Message = string | number | null

  function log(msg: Message): void{
    console.log(msg);
  }

  log('hello')
  log(2015)

  var msg1: Message = 'world'
  var msg2: Message = 200
  log(msg1)
  log(msg2)

  var msg3: Message = prompt('다이어트하실건가요?')
  log(msg3)
})();