'use strict';
(():void => {
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언
  
  // TODO: Todo Type 지정
  type Todos = {
    id: number,
    title: string,
    done: boolean,
  };


  // eslint-disable-next-line prefer-const
  let todoItems: Todos[];

  // api
  function fetchTodoItems(): Todos[] {
    const todos = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }

  // crud methods
  function fetchTodos(): Todos[] {
    const todos = fetchTodoItems();
    return todos;
  }
  function addTodo(todo: Todos): void {
    todoItems.push(todo);
  }
  function deleteTodo(index: number): void {
    todoItems.splice(index, 1);
  }
  function completeTodo(index: number, todo: Todos): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }
  // business logic
  function logFirstTodo(): Todos {
    return todoItems[0];
  }
  function showCompleted(): Todos[] {
    return todoItems.filter((item) => item.done);
  }
  function addTwoTodoItems(): void {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    const todo1: Todos = { id: 4, title: '안녕4', done: false }
    const todo2: Todos = { id: 5, title: '안녕5', done: true }

    addTodo(todo1)
    addTodo(todo2)

    const first: Todos = logFirstTodo()
    console.log(first);

    deleteTodo(4)
    completeTodo(3, todoItems[3])

    const result = showCompleted()
    console.log(result);
  }
  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  addTwoTodoItems();
  console.log(todoItems);
})();
