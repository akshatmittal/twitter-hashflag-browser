/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [withBundleAnalyzer, {}],
  {
    assetPrefix: "./"
  }
]);