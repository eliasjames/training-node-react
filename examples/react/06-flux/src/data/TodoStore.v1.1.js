import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes.v1.1';
import TodoDispatcher from './TodoDispatcher.v1.1';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new TodoStore();
