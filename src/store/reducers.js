import {
  SET_USER,
  SET_CONTACTS
} from './actions';

export const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export const contacts = (state = [], action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;
    default:
      return state;
  }
}
