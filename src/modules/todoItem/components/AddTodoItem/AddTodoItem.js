import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddCircle from '@material-ui/icons/AddCircle';

import styles from './styles';

const AddTodoItem = ({
                       classes,
                       addTodoItem,

                     }) => (
    <div onClick={addTodoItem}>
      <AddCircle />
      <span>Add a to-do</span>
    </div>
  );

AddTodoItem.propTypes = {};

export default withStyles(styles)(AddTodoItem);
