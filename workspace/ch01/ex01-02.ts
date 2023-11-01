(()=>{
  // string
  var str: string = 'hello'

  // number
  var age: number = 29

  // boolean
  var done: boolean = true

  // object
  var todo: object = {title: 'TypeScript 공부',  done: false}

  // Array
  var items: Array<string> = ['JS 공부', 'TS 공부']
  var todoList: string[] = ['JS 프로젝트', 'TS 프로젝트']

  // tuple
  var users:[string, string] = ['표지훈', '이용복']

  // any
  var userName: any = '김도노'
  userName = 915

  // null
  var nullVal: null = null

  // undefined
  var undefined: undefined

  console.log(typeof str);
  console.log(typeof age);
  console.log(typeof done);
  console.log(typeof todo);
  console.log(typeof items);
  console.log(typeof todoList);
  console.log(typeof users);
  console.log(typeof userName);
  console.log(typeof nullVal);
  console.log(typeof undefined);
})();

