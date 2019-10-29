import React from 'react';

import User from './modules/user/components/User';
import TodoList from './modules/todoList/components/TodoList';
import Header from './modules/common/components/Header';
import AddTodoItem from './modules/todoItem/components/AddTodoItem';
import TodoItemsList from './modules/todoItem/components/TodoItemsList';

import './App.css';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const App = ({classes}) =>  (
  <div className={classes.root}>
    <div className={classes.leftContainer}>
      <User />
      <TodoList/>
    </div>
    <div className={classes.rightContainer}>
      <Header />
      <TodoItemsList/>
      <AddTodoItem />
    </div>
  </div>
  );

export default withStyles(styles)(App);
