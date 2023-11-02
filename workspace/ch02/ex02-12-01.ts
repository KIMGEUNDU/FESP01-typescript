(() => {
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>;
  type TodoInfo = Omit<TodoInfoDetail, 'createdAt' | 'updatedAt'>
  type TodoList = Omit<TodoInfo, 'content'>

  var todo1: TodoRegist = {
    title: '할일 1',
    content: '등록'
  }

  var todo2: TodoInfo = {
    title: '할일 1',
    content: '등록',
    _id: 1,
    done: true
  }

  var todo3: TodoList = {
    title: '할일 1',
    _id: 1,
    done: true
  }

  console.log(todo1);
  console.log(todo2);
  console.log(todo3);

})();
