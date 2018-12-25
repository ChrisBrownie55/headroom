import {
  SET_USER,
  SET_CONTACTS,
  ADD_CONTACT,
  RECEIVING,
  OUTGOING,
  REJECTED,
  ONGOING,
  ENDED,
  SET_CALL_HISTORY,
  ADD_CALL_TO_HISTORY,
  SET_LOCAL_STREAM,
  SET_REMOTE_STREAM
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
    case ADD_CONTACT:
      return state.concat(action.payload);
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
    case SET_CALL_HISTORY:
      return action.payload;
    case ADD_CALL_TO_HISTORY:
      return state.concat(action.payload);
    default:
      return state;
  }
};


export const videoStream = (state = { local: null, remote: null }, action) => {
  switch (action.type) {
    case SET_LOCAL_STREAM:
      return {
        ...state,
        local: action.payload
      };
    case SET_REMOTE_STREAM:
      return {
        ...state,
        remote: action.payload
      };
    default:
      return state;
  }
}
