import LoadingIndicator from './index';
import { render, waitForElement } from 'react-testing-library';

describe('<LoadingIndicator />', () => {
  test('should be 320px wide when given said width', () => {
    const { getByTestId } = render(html`<${LoadingIndicator} width="320px" data-testid="loading-indicator" />`)
    expect(getByTestId('loading-indicator')).toHaveStyle('--width: 320px');
  });

  test('should allow custom colors', () => {
    const { getByTestId } = render(html`<${LoadingIndicator} color="blue" data-testid="loading-indicator" />`);
    expect(getByTestId('loading-indicator')).toHaveStyle('--color: blue');
  });

  test('should have default label', async () => {
    const { getByText } = render(html`<${LoadingIndicator} />`);
    const label = await waitForElement(() => getByText('Loading...'));

    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('should allow custom label', async () => {
    const labelText = `Checking to see if you're logged in`;
    const { getByText } = render(html`<${LoadingIndicator} label=${labelText} />`);
    const label = await waitForElement(() => getByText(labelText));

    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('should indicate completed', async () => {
    const { getByText } = render(html`<${LoadingIndicator} complete />`);
    const label = await waitForElement(() => getByText('Finished loading!'));

    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('should allow custom complete label', async () => {
    const labelText = `Checking to see if you're logged in`;
    const { getByText } = render(html`<${LoadingIndicator} complete completeLabel=${labelText} />`);
    const label = await waitForElement(() => getByText(labelText));

    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });
});
