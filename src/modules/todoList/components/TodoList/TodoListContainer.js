import { connect } from 'react-redux';

import TodoList from './TodoList';

const mapStateToProps = (state) => ({
  items: state.todoLists.items
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
