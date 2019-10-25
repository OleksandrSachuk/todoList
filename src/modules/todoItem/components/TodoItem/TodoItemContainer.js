import { compose } from 'redux';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodoItem);
