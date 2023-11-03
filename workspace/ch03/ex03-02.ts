(() => {
  interface Todo {
    _id: string,
    title: string,
    content?: string,
  }

  const todo1: Required<Todo> = {
    _id: '1',
    title: '할일 1',
    content: '내용 1'
  }

  console.log(todo1);
})();