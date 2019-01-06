import { configure, addDecorator } from '@storybook/react';
// import { checkA11y } from '@storybook/addon-a11y';

// addDecorator(checkA11y);

function importAll(r) {
  r.keys().forEach(r);
}

function loadStories() {
  importAll(require.context('../src/components/', true, /\.story\.js$/));
}

configure(loadStories, module);
