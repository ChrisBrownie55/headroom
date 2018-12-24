const { join } = require('path');

module.exports = api => {
  const isProduction = api.cache(() => process.env.NODE_ENV === "production");

  const presets = ['@babel/env'];
  const plugins = [
    '@babel/plugin-transform-react-display-name',
    ['auto-import', {
      'declarations': [
        { 'default': 'React', 'members': ['Component', 'PureComponent'], 'path': 'react' },
        { 'default': 'ReactDOM', 'path': 'react-dom' },
        { 'default': 'html', 'path': join(__dirname, 'src', 'html.js') },
        { 'default': 'enzyme', 'members': ['shallow'], 'path': 'enzyme' }
      ]
    }]
  ];

  if (isProduction) {
    plugins.push(['htm', {
      pragma: 'React.createElement'
    }]);
  }
  return {
    presets,
    plugins
  };
};
