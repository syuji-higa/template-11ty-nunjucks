const glob = require('glob')
const { readFile, writeFile } = require('fs')
const { promisify } = require('util')
const pretty = require('pretty')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

glob('_site/**/*.html', (err, files) => {
  if (err) {
    console.log(err)
  }

  (async () => {
    console.log('[Pretty] start')

    await Promise.all(
      files.map(async (file) => {
        const data = await readFileAsync(file, 'utf-8')

        await writeFileAsync(file, pretty(data))

        console.log(`  finish: ${file}`)
      })
    )

    console.log('[Pretty] end')
  })()
})
