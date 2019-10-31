import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';

import styles from './styles';

const TodoListItem = ({ classes, item}) => (
    <div className={classnames(classes.listItem, classes.listActive)}>
      <ListIcon/>
      <span className={classes.listTitle}>{item.title}</span>
    </div>
  );

TodoListItem.propTypes = {};

export default withStyles(styles)(TodoListItem);
