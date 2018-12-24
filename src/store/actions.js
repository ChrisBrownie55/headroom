const UPDATE_USER = 'UPDATE_USER';

const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
});

export {
  UPDATE_USER,
  updateUser
};
