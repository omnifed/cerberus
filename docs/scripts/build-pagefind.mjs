import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const isVercel = process.env.VERCEL === '1'

if (!isVercel) {
  console.log('Running local pagefind...')
  execSync('pnpx pagefind --site .next/server/app --output-path public/pagefind', {
    stdio: 'inherit',
  })
  process.exit(0)
}

console.log('Vercel environment detected. Extracting HTML from Vercel build output...')

// Vercel output directories relative to your 'docs' workspace
const outDirs = [
  path.join('..', '.vercel', 'output', 'functions'),
  path.join('..', '.vercel', 'output', 'static'),
]
const tempDir = '.pagefind-temp'

if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true })
fs.mkdirSync(tempDir, { recursive: true })

function walkAndCopy(dir, baseDir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkAndCopy(fullPath, baseDir)
    } else if (file.endsWith('.html')) {
      let relativePath = path.relative(baseDir, fullPath)

      // 1. Remove Vercel's "index.func" wrapping for root and nested index routes
      relativePath = relativePath.replace(/(^|[/\\])index\.func[/\\]/g, '$1')
      // 2. Remove Vercel's ".func" from any other dynamic route directories
      relativePath = relativePath.replace(/\.func([/\\])/g, '$1')
      // 3. Rename Vercel's fallback HTML to index.html for correct URL generation
      relativePath = relativePath.replace(/\.prerender-fallback\.html$/, 'index.html')

      const destPath = path.join(tempDir, relativePath)
      fs.mkdirSync(path.dirname(destPath), { recursive: true })
      fs.copyFileSync(fullPath, destPath)
    }
  }
}

outDirs.forEach((dir) => walkAndCopy(dir, dir))

console.log('Running pagefind on extracted HTML...')
// Execute pagefind on the temporary directory and output directly to the Vercel static folder
execSync(
  'pnpx pagefind --site .pagefind-temp --output-path ../.vercel/output/static/pagefind',
  { stdio: 'inherit' },
)
