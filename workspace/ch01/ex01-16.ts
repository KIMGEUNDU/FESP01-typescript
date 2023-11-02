// 인터페이스 다중 상속
(function () {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoList {
    _id: number;
    title: string;
    done: boolean;
  }

  // 인터페이스 다중 상속
  interface TodoInfo extends Todo, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  var todo1: Todo = {
    title: '할일1',
    content: '등록할 때 사용'
  }

  var todo3: TodoInfo = {
    _id: 3,
    title: '할일 3',
    content: '시간을 포함한 상세 조회에 사용',
    done: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  console.log(todo1, todo3);
})();

