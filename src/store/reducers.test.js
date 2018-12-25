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

  // CONTACTS
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

  // CALL STATE
  describe('for callState', () => {
    it('should default to null', () => {
      expect(reducers.callState(undefined, {}))
        .toEqual({
          callState: null,
          caller: null,
          callee: null
        });
    });

    describe('should indicate', () => {
      it('receiving a call from fakeUser', () => {
        expect(reducers.callState(undefined, actions.receivingCallFrom(fakeUser)))
          .toEqual({
            callState: actions.RECEIVING,
            caller: fakeUser,
            callee: null
          });
      });

      it('an outgoing call to fakeUser', () => {
        expect(reducers.callState(undefined, actions.outgoingCallTo(fakeUser)))
          .toEqual({
            callState: actions.OUTGOING,
            caller: null,
            callee: fakeUser
          });
      });

      it('a rejected call from null', () => {
        expect(reducers.callState({ callee: fakeUser }, actions.callRejected()))
          .toEqual({
            callState: actions.REJECTED,
            caller: null,
            callee: fakeUser
          });
      });
    });
  });
})
