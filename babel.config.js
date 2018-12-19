
module.exports = api => {
  const isProduction = api.cache(() => process.env.NODE_ENV === "production");

  const presets = ['@babel/env'];
  const plugins = [
    '@babel/plugin-transform-react-display-name',
  ];

  if (isProduction) {
    plugins.push(["htm", {
      pragma: "React.createElement"
    }]);
  }

  return {
    presets,
    plugins
  };
};
