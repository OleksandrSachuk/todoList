import { connect } from 'react-redux';

import AddTodoItem from './AddTodoItem';
import {addTodoItem, removeTodoItem, changeCheckStatusTodoItem} from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addTodoItem,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTodoItem);
