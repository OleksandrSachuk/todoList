import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = (state) => {
  const {items, selectedId} = state.todoLists;
  const selectedTodoList = items.find((item) =>item.id ===  selectedId);

  return {
    selectedTodoList
  }
};

export default connect(mapStateToProps)(Header);
