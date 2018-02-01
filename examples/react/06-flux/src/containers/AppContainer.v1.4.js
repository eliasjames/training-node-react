import AppView from '../views/AppView.v1.2';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore.v1.3';
import TodoActions from '../data/TodoActions.v1.3';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    onDeleteTodo: TodoActions.deleteTodo,
    onEditTodo: TodoActions.editTodo,
    onSaveEdit: TodoActions.saveEdit,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
