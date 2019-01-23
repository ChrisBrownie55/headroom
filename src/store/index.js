import { createContext } from 'react';
import * as reducers from './reducers';

function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return function combinedReducer(state = {}, action) {
    let hasChanged = false;
    const nextState = {};

    reducerKeys.forEach(key => {
      nextState[key] = reducers[key](state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    });

    return hasChanged ? nextState : state;
  };
}

export const reducer = combineReducers(reducers);
export const context = createContext();
