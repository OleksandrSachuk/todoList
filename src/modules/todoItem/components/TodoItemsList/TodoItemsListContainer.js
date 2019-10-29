import { connect } from 'react-redux';

import TodoItemsList from './TodoItemsList';
import { changeCheckStatusTodoItem, changeTodoItemText, removeTodoItem } from '../../actions';
import { todoItemsSelector } from '../../selectors';

const mapStateToProps = (state) => ({
  items: todoItemsSelector(state)
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
