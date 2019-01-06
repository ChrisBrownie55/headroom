import { storiesOf } from '@storybook/react';
import LoadingIndicator from './';

function CompleteIndicator() {
  const [complete, setComplete] = useState(false);
  const toggleComplete = () => setComplete(!complete);
  return html`
    <div>
      <${LoadingIndicator} complete=${complete} />
      <button onClick=${toggleComplete}>Toggle complete</button>
    </div>
  `;
}

storiesOf('LoadingIndicator', module)
  .add('default', () => html`<${LoadingIndicator} />`)
  .add('complete', () => html`<${CompleteIndicator} />`);
