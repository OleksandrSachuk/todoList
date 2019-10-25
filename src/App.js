import React from 'react';

import TodoList from './modules/todoList/components/TodoList/TodoList';
import './App.css';

const App = () =>  (
    <div className="App">
      <div className="TodoList">
        <TodoList />
      </div>
    </div>
  );

export default App;
