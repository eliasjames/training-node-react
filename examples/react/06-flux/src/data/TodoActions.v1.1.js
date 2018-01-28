import TodoActionTypes from './TodoActionTypes.v1.1';
import TodoDispatcher from './TodoDispatcher.v1.1';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
};

export default Actions;
