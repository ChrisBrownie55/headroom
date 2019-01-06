import { storiesOf } from '@storybook/react';
import LoadingIndicator from './';

storiesOf('LoadingIndicator', module)
  .add('default', () => html`<${LoadingIndicator} />`);
