const cssnano = require("cssnano")
const fs = require("fs")

const sourceFile = process.argv[2]
const destinationFile = process.argv[3]

// enable calc optimization when argument
// is not present after destination file name
const calcEnabled = !process.argv[4]

const css = fs.readFileSync(sourceFile)

const opts = {
  safe: true,
  calc: calcEnabled,
}

cssnano.process(css, opts).then((result) => {
  fs.writeFileSync(destinationFile, result.css)
})
