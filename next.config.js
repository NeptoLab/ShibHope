// @generated: @expo/next-adapter@3.1.10
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")([
  "expo-font",
  "react-native-web",
  "react-native-svg",
  "native-base",
]);

module.exports = withPlugins(
  [
    withTM,
    [withImages, { images: {
      disableStaticImages: true
    }}],
    withFonts,
    withExpo,
    withBundleAnalyzer,
  ],
  {
    webpack5: true,
    projectRoot: __dirname
  }
);
