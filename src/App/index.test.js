import App from './index';

describe('The App instance', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(html`<${App} />`, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
