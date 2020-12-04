module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src/assets/')
  eleventyConfig.addPassthroughCopy({
    'src/assets/': 'assets/',
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
