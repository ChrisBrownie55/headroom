import {
  SET_USER,
  SET_CONTACTS,
  RECEIVING,
  OUTGOING,
  REJECTED,
  ONGOING,
  ENDED
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
};

export const callState = (state = { state: null, caller: null, callee: null }, action) => {
  switch (action.type) {
    case RECEIVING:
      return {
        state: RECEIVING,
        caller: action.payload,
        callee: null
      };
    case OUTGOING:
      return {
        state: OUTGOING,
        caller: null,
        callee: action.payload
      };
    case REJECTED:
      return {
        ...state,
        state: REJECTED
      };
    case ONGOING:
      return {
        ...state,
        state: ONGOING
      };
    case ENDED:
      return {
        ...state,
        state: ENDED
      };
    default:
      return state;
  }
};

export const callHistory = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
