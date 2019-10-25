import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TodoListItem from '../TodoListItem';
import styles from './styles';

const TodoList = ({ classes, items}) => (
    <div >
      {items.map((item) => <TodoListItem key={item.id} item={item}/>)}
    </div>
  );

TodoList.propTypes = {};

export default withStyles(styles)(TodoList);
