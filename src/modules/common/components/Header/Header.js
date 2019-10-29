import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Header = ({ classes, selectedTodoList}) => (
    <div className={classes.header}>
      <div className={classes.headerTitle}>{selectedTodoList.title}</div>
      <div className={classes.headerDate}>{selectedTodoList.date}</div>
    </div>
  );

Header.propTypes = {
  selectedTodoList: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  })
};

Header.defaultProps = {
  selectedTodoList: {
    title: '',
    date: ''
  }
};

export default withStyles(styles)(Header);
