const pluginSass = require('eleventy-plugin-sass')
const pluginBabel = require('eleventy-plugin-babel')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['src/**/*.scss', '!node_modules/**'],
    outputDir: '_site',
  })

  eleventyConfig.addPlugin(pluginBabel, {
    watch: ['src/**/*.js', '!node_modules/**'],
    outputDir: '_site',
  })

  eleventyConfig.addWatchTarget('src/assets/images/')
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/': 'assets/images/',
  })

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
    },
  }
}

