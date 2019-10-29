import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TodoListItem from '../TodoListItem';
import styles from './styles';

const TodoList = ({ classes, items}) => (
    <div className={classes.todoList}>
      {items.map((item) => <TodoListItem key={item.id} item={item}/>)}
    </div>
  );

TodoList.propTypes = {
  items: PropTypes.array
};

TodoList.defaultProps = {
  items: []
};

export default withStyles(styles)(TodoList);
