import * as reducers from './reducers';
import { updateUsers } from './actions';

const fakeUser = {};

describe('The reducer', () => {
  describe('for user', () => {
    it('should default to null', () => {
      expect(reducers.user(undefined, {})).toEqual(null);
    });

    it('should update user when user is passed in', () => {
      expect(reducers.user(undefined, updateUser(fakeUser))).toBe(fakeUser);
    });
  })
})
