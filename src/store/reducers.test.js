import * as reducers from './reducers';
import * as actions from './actions';

const fakeUser = { name: 'lorem' };
const fakeContacts = [{ name: 'ipsum' }];

describe('The reducer', () => {
  // USER
  describe('for user', () => {
    it('should default to null', () => {
      expect(reducers.user(undefined, {})).toEqual(null);
    });

    it('should update user with new value', () => {
      expect(reducers.user(undefined, actions.setUser(fakeUser))).toBe(fakeUser);
    });
  });

  describe('for contacts', () => {
    it('should default to an empty array', () => {
      const contacts = reducers.contacts(undefined, {});

      expect(Array.isArray(contacts)).toEqual(true);
      expect(contacts).toHaveLength(0);
    });

    it('should update contacts with new value', () => {
      expect(reducers.contacts(undefined, actions.setContacts(fakeContacts))).toBe(fakeContacts);
    });
  });
})
