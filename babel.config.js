console.log('HELLO FROM BABEL!!!!!!!');
module.exports = api => {
  console.log('RUNNING BABEL!!!!!!!!');
  const isProduction = api.cache(() => process.env.NODE_ENV === "production");

  const presets = ['@babel/env'];
  const plugins = [
    '@babel/plugin-transform-react-display-name',
    ['auto-import', {
      'declarations': [
        { 'default': 'React', 'members': ['Component', 'PureComponent'], 'path': 'react' },
        { 'default': 'html', 'path': './html.js' }
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
