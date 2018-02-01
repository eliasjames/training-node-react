import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes.v1.3';
import TodoDispatcher from './TodoDispatcher.v1.1';
import Counter from '../Counter';
import Todo from './Todo.v1.2';

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
        // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }));

      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id);

      case TodoActionTypes.EDIT_TODO:
        return state.update( 
           action.id,
           todo => todo.set( 'editMode', true )
        );

      case TodoActionTypes.SAVE_EDIT:
        //let editText = action.text;
        let myFunc = ( todo ) => { 
           return todo.set( 'editMode', false )
             .set( 'text', action.text )
         };
        return state.update( 
          action.id,
          myFunc
        );

      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete),
        );

      default:
        return state;
    }
  }
}

let myTDS = new TodoStore();
export default myTDS;
window.TodoStore = myTDS;
