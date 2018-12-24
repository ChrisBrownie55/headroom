import * as reducers from './reducers';
import { updateUsers } from './actions';

const fakeUser = {};

describe('The reducer', () => {
  // USER REDUCER
  describe('for user', () => {
    it('should default to null', () => {
      expect(reducers.user(undefined, {})).toEqual(null);
    });

    it('should update user with new value', () => {
      expect(reducers.user(undefined, updateUser(fakeUser))).toBe(fakeUser);
    });
  });
})
