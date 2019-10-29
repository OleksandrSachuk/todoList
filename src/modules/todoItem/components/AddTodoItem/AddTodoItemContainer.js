import { connect } from 'react-redux';

import AddTodoItem from './AddTodoItem';
import { addTodoItem } from '../../actions';

const mapDispatchToProps = {
  addTodoItem,
};

export default connect(
    null,
    mapDispatchToProps,
)(AddTodoItem);
