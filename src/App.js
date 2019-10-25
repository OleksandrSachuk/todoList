import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import User from './modules/user/components/User';
import TodoList from './modules/todoList/components/TodoList';
import Header from './modules/common/header/components/Header';
import AddTodoItem from './modules/todoItem/components/AddTodoItem';

import './App.css';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const App = ({classes}) =>  (
  <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <User />
          <TodoList/>
        </Paper>
      </Grid>
      <Grid item xs={9} >
        <Paper className={classes.paper}>
          <Header />
          <AddTodoItem />
        </Paper>
      </Grid>
    </Grid>
  </div>
  );

export default withStyles(styles)(App);
