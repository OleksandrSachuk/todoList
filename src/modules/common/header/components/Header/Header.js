import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Header = ({ classes, selectedTodoList}) => (
    <div>
      <div>{selectedTodoList.title}</div>
      <div>{selectedTodoList.date}</div>
    </div>
  );

Header.propTypes = {};

export default withStyles(styles)(Header);
