import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const TodoItem = ({ classes}) => (
    <div>
      <div>TodoItem</div>
    </div>
  );

TodoItem.propTypes = {};

export default withStyles(styles)(TodoItem);
