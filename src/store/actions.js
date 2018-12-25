export const SET_USER = 'UPDATE_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_CONTACTS = 'SET_CONTACT';
export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts
});
