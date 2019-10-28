import { compose } from 'redux';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { changeCheckStatusTodoItem, removeTodoItem } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  removeTodoItem,
  changeCheckStatusTodoItem
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodoItem);
