(() => {
  console.log(new Function() instanceof Function); //true
  console.log({} instanceof Object); //true
  console.log([] instanceof Array); //true
  console.log([] instanceof Object); //true
  console.log([] instanceof Date); //false
  console.log([] instanceof Function); //false
  console.log(new Date() instanceof Date); //true

  class Todo {
    title: string;
    content: string;

    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }

    getTitle() {
      return this.title;
    }
  }

  function getTitle(todo: Todo | string[]) {
    // 타입 가드를 적용해서 title값을 리턴하는 함수 작성
    if (todo instanceof Todo) {
      return todo.getTitle()
    } else {
      return todo[0]
    }
  }

  const todo1 = new Todo('할일 1', '내용 1')
  const todo2 = ['할일 2', '내용 2']

  console.log(getTitle(todo1));
  console.log(getTitle(todo2));
})();
