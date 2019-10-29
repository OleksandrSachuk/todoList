import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddCircle from '@material-ui/icons/AddCircle';

import styles from './styles';

const AddTodoItem = ({ classes, addTodoItem }) => (
    <div
      className={classes.addTodoItemContainer}
      onClick={addTodoItem}
    >
      <div className={classes.addTodoItem}>
      <AddCircle />
      <span className={classes.addTodoItemTitle}>Add a to-do</span>
      </div>
    </div>
  );

AddTodoItem.propTypes = {
  addTodoItem: PropTypes.func
};

AddTodoItem.defaultProps = {
  addTodoItem: () => null
};

export default withStyles(styles)(AddTodoItem);
