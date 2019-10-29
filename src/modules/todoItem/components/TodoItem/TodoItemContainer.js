import { connect } from 'react-redux';

import { changeCheckStatusTodoItem, changeTodoItemText, removeTodoItem } from '../../actions';
import TodoItem from './TodoItem';

const mapDispatchToProps = {
  removeTodoItem,
  changeCheckStatusTodoItem,
  changeTodoItemText
};

export default connect(
    null,
    mapDispatchToProps,
)(TodoItem);
