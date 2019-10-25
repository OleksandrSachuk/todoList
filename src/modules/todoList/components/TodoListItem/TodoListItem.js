import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const TodoListItem = ({ classes, item}) => (
    <div>
      <div>{item.title}</div>
    </div>
  );

TodoListItem.propTypes = {};

export default withStyles(styles)(TodoListItem);
