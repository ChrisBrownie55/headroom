const { join } = require('path');

module.exports = api => {
  const isProduction = api.cache(() => process.env.NODE_ENV === 'production');
  const isTest = api.cache(() => process.env.NODE_ENV === 'test');

  const presets = ['@babel/env'];
  const plugins = [
    '@babel/plugin-transform-react-display-name'
  ];

  if (isProduction) {
    plugins.push(['htm', {
      pragma: 'React.createElement'
    }]);
  }

  if (isTest || isProduction) {
    plugins.push('babel-plugin-transform-react-remove-prop-types');
  }

  plugins.push(['auto-import', {
    'declarations': [
      {
        default: 'React',
        members: [
          'Component', 'PureComponent', 'memo', 'useState', 'useEffect',
          'useRef', 'useReducer', 'useContext', 'useMemo', 'useCallback'
        ],
        path: 'react'
      },
      { default: 'ReactDOM', path: 'react-dom' },
      { default: 'PropTypes', path: 'prop-types' },
      { default: 'html', path: join(__dirname, 'src', 'html.js') }
    ]
  }]);

  return {
    presets,
    plugins
  };
};
