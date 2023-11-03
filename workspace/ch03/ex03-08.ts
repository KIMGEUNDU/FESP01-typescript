(() => {
  interface Todo {
    _id: number;
    title: string;
  }

  type OptionalTodo<T> = {
    // 첫번째방법
    // _id?: number;
    // title?: string;

    // 두번째방법
    // [P in '_id' | 'title']?: Todo[P]

    // 세번째 방법
    // [P in keyof Todo]?: Todo[P]

    // 네번째 방법
    [P in keyof T]?: T[P]
  }

  const todo1: Todo = {
    _id: 1,
    title: '할일 1'
  }

  const todo2: OptionalTodo<Todo> = {
    title: '할일 2'
  }

  const todo3: Partial<Todo> = {
    title: '할일 2'
  }


  console.log(todo1, todo2, todo3);


})();