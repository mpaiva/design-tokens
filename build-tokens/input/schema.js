
// import all JSON includes for Flutter
const spacing = require("./includes/spacing.json");
const sizing = require("./includes/sizing.json");
const borderRadius = require("./includes/borderRadius.json");
const boxShadow = require("./includes/boxShadow.json");
const colors = require("./includes/colors.json");
const opacity = require("./includes/opacity.json");
const fontFamilies = require("./includes/fontFamilies.json");
const lineHeights = require("./includes/lineHeights.json");
const letterSpacing = require("./includes/letterSpacing.json");
const paragraphSpacing = require("./includes/paragraphSpacing.json");
const fontWeights = require("./includes/fontWeights.json");
const fontSizes = require("./includes/fontSizes.json");
const textTheme = require("./includes/textTheme.json");
const colorScheme = require("./includes/colorScheme.json");
const light = require("./includes/themes/themeLight.json");
const dark = require("./includes/themes/themeDark.json");

// Set the order of how the JSON nodes will be exported

const includes = {
    spacing,
    sizing,
    borderRadius,
    boxShadow,
    colors,
    opacity,
    fontFamilies,
    lineHeights,
    letterSpacing,
    paragraphSpacing,
    fontWeights,
    fontSizes,
    textTheme,
    colorScheme,
}
  
module.exports = {
    global: includes,
    light,
    dark
}