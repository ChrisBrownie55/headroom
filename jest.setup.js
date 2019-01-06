// add some helpful assertions
import 'jest-dom/extend-expect';

// this is basically: afterEach(cleanup)
import 'react-testing-library/cleanup-after-each';

// fixes error: ReferenceError: regeneratorRuntime is not defined
import '@babel/polyfill';
