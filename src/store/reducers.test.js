import * as reducers from './reducers';
import * as actions from './actions';

const fakeUser = { name: 'lorem' };
const fakeContacts = [{ name: 'ipsum' }];
const fakeCallHistory = [{ to: { name: 'lorem' }, from: { name: 'ipsum' } }];

const expectEmptyArray = arr => {
  expect(Array.isArray(arr)).toEqual(true);
  expect(arr).toHaveLength(0);
}

describe('The reducer', () => {
  // USER
  describe('for user', () => {
    test('should default to null', () => {
      expect(reducers.user(undefined, {})).toEqual(null);
    });

    test('should update user with new value', () => {
      expect(reducers.user(undefined, actions.setUser(fakeUser))).toBe(fakeUser);
    });
  });

  // CONTACTS
  describe('for contacts', () => {
    test('should default to an empty array', () => {
      expectEmptyArray(reducers.contacts(undefined, {}));
    });

    test('should update contacts with new value', () => {
      expect(reducers.contacts(undefined, actions.setContacts(fakeContacts))).toBe(fakeContacts);
    });

    test('should update with new contact', () => {
      expect(reducers.contacts(undefined, actions.addContact(fakeContacts[0]))).toEqual([fakeContacts[0]]);
    });
  });

  // CALL STATE
  describe('for callState', () => {
    test('should default to null', () => {
      expect(reducers.callState(undefined, {}))
        .toEqual({
          state: null,
          caller: null,
          callee: null
        });
    });

    describe('should indicate', () => {
      test('receiving a call from fakeUser', () => {
        expect(reducers.callState(undefined, actions.receivingCallFrom(fakeUser)))
          .toEqual({
            state: actions.RECEIVING,
            caller: fakeUser,
            callee: null
          });
      });

      test('an outgoing call to fakeUser', () => {
        expect(reducers.callState(undefined, actions.outgoingCallTo(fakeUser)))
          .toEqual({
            state: actions.OUTGOING,
            caller: null,
            callee: fakeUser
          });
      });

      test('a rejected call to fakeUser', () => {
        expect(reducers.callState({ state: null, caller: null, callee: fakeUser }, actions.callRejected()))
          .toEqual({
            state: actions.REJECTED,
            caller: null,
            callee: fakeUser
          });
      });

      test('an ongoing call to fakeUser', () => {
        expect(reducers.callState({ state: null, caller: null, callee: fakeUser }, actions.ongoingCall()))
          .toEqual({
            state: actions.ONGOING,
            caller: null,
            callee: fakeUser
          });
      });

      test('a call with fakeUser has ended', () => {
        expect(reducers.callState({ state: null, caller: null, callee: fakeUser }, actions.callEnded()))
          .toEqual({
            state: actions.ENDED,
            caller: null,
            callee: fakeUser
          });
      });
    });
  });

  // CALL HISTORY
  describe('for callHistory', () => {
    test('should default to an empty array', () => {
      expectEmptyArray(reducers.callHistory(undefined, {}));
    });

    test('should update with new values', () => {
      expect(reducers.callHistory(undefined, actions.setCallHistory(fakeCallHistory))).toBe(fakeCallHistory);
    });

    test('should update with new call', () => {
      expect(reducers.callHistory(undefined, actions.addCallToHistory(fakeCallHistory[0]))).toEqual([fakeCallHistory[0]]);
    });
  })
});
