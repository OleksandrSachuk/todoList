import { connect } from 'react-redux';

import AddTodoItem from './AddTodoItem';
import {addTodoItem} from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addTodoItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTodoItem);
