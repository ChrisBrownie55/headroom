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
