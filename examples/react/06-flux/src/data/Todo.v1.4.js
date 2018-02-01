import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  complete: false,
  editMode: false,
  text: '',
});

export default Todo;
