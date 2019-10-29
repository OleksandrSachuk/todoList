import { connect } from 'react-redux';

import TodoList from './TodoList';
import {todoListsSelector } from '../../selectors';

const mapStateToProps = (state) => ({
  items: todoListsSelector(state)
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
