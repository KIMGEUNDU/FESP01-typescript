(() => {
  interface Todo {
    readonly _id: number;
    title: string;
    content: string;
    done?: boolean;
  }

  interface Toggle {
    (param1: Todo): void;
  }

  var todo1: Todo = {
    _id: 1,
    title: '할일1',
    content: '인터페이스 사용1.',
    done: false
  }

  var todo2: Todo = {
    _id: 2,
    title: '할일2',
    content: '인터페이스 사용2.'
  }

  var toggleFn: Toggle = function (todo: Todo): void {
    todo.done = !todo.done
  }


  todo1.title = "집에가자"

  toggleFn(todo1)
  toggleFn(todo1)
  console.log(todo1);
})();
