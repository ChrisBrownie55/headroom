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
          state: null,
          caller: null,
          callee: null
        });
    });

    describe('should indicate', () => {
      it('receiving a call from fakeUser', () => {
        expect(reducers.callState(undefined, actions.receivingCallFrom(fakeUser)))
          .toEqual({
            state: actions.RECEIVING,
            caller: fakeUser,
            callee: null
          });
      });

      it('an outgoing call to fakeUser', () => {
        expect(reducers.callState(undefined, actions.outgoingCallTo(fakeUser)))
          .toEqual({
            state: actions.OUTGOING,
            caller: null,
            callee: fakeUser
          });
      });

      it('a rejected call to fakeUser', () => {
        expect(reducers.callState({ state: null, caller: null, callee: fakeUser }, actions.callRejected()))
          .toEqual({
            state: actions.REJECTED,
            caller: null,
            callee: fakeUser
          });
      });

      it('an ongoing call to fakeUser', () => {
        expect(reducers.callState({ state: null, caller: null, callee: fakeUser }, actions.ongoingCall()))
          .toEqual({
            state: actions.ONGOING,
            caller: null,
            callee: fakeUser
          });
      });

      it('a call with fakeUser has ended', () => {
        expect(reducers.callState({ state: null, caller: null, callee: fakeUser }, actions.callEnded()))
          .toEqual({
            state: actions.ENDED,
            caller: null,
            callee: fakeUser
          });
      });
    });
  });
});
