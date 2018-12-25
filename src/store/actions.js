// user
export const SET_USER = 'UPDATE_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

// contacts
export const SET_CONTACTS = 'SET_CONTACT';
export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts
});

export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact
});

// call state
export const RECEIVING = 'RECEIVING';
export const receivingCallFrom = caller => ({
  type: RECEIVING,
  payload: caller
});

export const OUTGOING = 'OUTGOING';
export const outgoingCallTo = callee => ({
  type: OUTGOING,
  payload: callee
});

export const REJECTED = 'REJECTED';
export const callRejected = () => ({
  type: REJECTED
});

export const ONGOING = 'ONGOING';
export const ongoingCall = () => ({
  type: ONGOING
});

export const ENDED = 'ENDED';
export const callEnded = () => ({
  type: ENDED
});

// call history
export const SET_CALL_HISTORY = 'SET_CALL_HISTORY';
export const setCallHistory = history => ({
  type: SET_CALL_HISTORY,
  payload: history
});

export const ADD_CALL_TO_HISTORY = 'ADD_CALL_TO_HISTORY';
export const addCallToHistory = call => ({
  type: ADD_CALL_TO_HISTORY,
  payload: call
});

export const SET_LOCAL_STREAM = 'SET_LOCAL_STREAM';
export const setLocalStream = stream => ({
  type: SET_LOCAL_STREAM,
  payload: stream
});

export const SET_REMOTE_STREAM = 'SET_REMOTE_STREAM';
export const setRemoteStream = stream => ({
  type: SET_REMOTE_STREAM,
  payload: stream
});
