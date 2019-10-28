import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import todoLists from '../modules/todoList/reducers';
import todoItems from '../modules/todoItem/reducers';
import user from '../modules/user/reducers';

const rootReducer = combineReducers({
  user,
  todoLists,
  todoItems,
});

const rootEpic = combineEpics();

export default function configureStore(preloadedState) {

  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
