import React from 'react';
import Grid from '@material-ui/core/Grid';

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
    <Grid container spacing={0}>
      <Grid item xs={12} sm={3}>
        <div className={classes.leftContainer}>
          <User />
          <TodoList/>
        </div>
      </Grid>
      <Grid item xs={12} sm={9}>
        <div className={classes.rightContainer}>
          <Header />
          <TodoItemsList/>
          <AddTodoItem />
        </div>
      </Grid>
    </Grid>
  </div>
  );

export default withStyles(styles)(App);
