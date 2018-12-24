import * as reducers from './reducers';
import * as actions from './actions';

const fakeUser = {};

describe('The reducer', () => {
  // USER
  describe('for user', () => {
    it('should default to null', () => {
      expect(reducers.user(undefined, {})).toEqual(null);
    });

    it('should update user with new value', () => {
      expect(reducers.user(undefined, actions.updateUser(fakeUser))).toBe(fakeUser);
    });
  });
})
