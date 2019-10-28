import { connect } from 'react-redux';

import TodoItemsList from './TodoItemsList';
import { changeCheckStatusTodoItem, removeTodoItem, changeTodoItemText } from '../../actions';

const mapStateToProps = (state) => ({
  items: state.todoItems.items
});

const mapDispatchToProps = {
  removeTodoItem,
  changeCheckStatusTodoItem,
  changeTodoItemText
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoItemsList);
