import AppView from '../views/AppView.v1.1';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore.v1.1';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);
