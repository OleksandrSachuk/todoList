import { compose } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = (state) => {
  const {items, selectedId} = state.todoLists;
  const selectedTodoList = items.find((item) =>item.id ===  selectedId);

  return {
    selectedTodoList
  }
};

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
