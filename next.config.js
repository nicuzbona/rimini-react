// next.config.js

const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins(
  [
    withCSS({
      cssLoaderOptions: {
        url: false,
      },
    }),
    withSass({}),
    withFonts(),
  ],
  {}
);
