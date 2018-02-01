import TodoActionTypes from './TodoActionTypes.v1.3';
import TodoDispatcher from './TodoDispatcher.v1.1';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },

  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },
  editTodo( id ){
    TodoDispatcher.dispatch({
      type: TodoActionTypes.EDIT_TODO,
      id,
    });
  },
  saveEdit( id, text ){
    TodoDispatcher.dispatch({
      type: TodoActionTypes.SAVE_EDIT,
      id,
      text
    });
  },
  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },
};

window.TodoActions = Actions;
export default Actions;
