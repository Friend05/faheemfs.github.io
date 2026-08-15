import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDirectory = path.join(root, 'dist');
const basePath = (process.argv[2] ?? '/faheemfs.github.io/').replace(/^\/?|\/?$/g, '');
const outputDirectory = path.join(root, process.argv[3] ?? 'github-pages-generalist-resume-upload');
const publicFiles = [
  '404.html',
  'favicon.svg',
  'og-cover.svg',
  'Mohammed-Faheem-Generalist-Resume.pdf',
];

const indexPath = path.join(distDirectory, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const scriptMatch = indexHtml.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
const stylesheetMatch = indexHtml.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);

if (!scriptMatch || !stylesheetMatch) {
  throw new Error('Built asset references were not found in dist/index.html.');
}

function resolveDistAsset(assetHref) {
  const relativePath = assetHref
    .replace(/^\/+/, '')
    .replace(new RegExp(`^${basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`), '');

  return path.join(distDirectory, relativePath.split('/').join(path.sep));
}

const script = fs.readFileSync(resolveDistAsset(scriptMatch[1]), 'utf8');
const stylesheet = fs.readFileSync(resolveDistAsset(stylesheetMatch[1]), 'utf8');

indexHtml = indexHtml.replace(
  /<script type="module" crossorigin src="[^"]+"><\/script>/,
  () => `<script type="module">\n${script}\n</script>`,
);
indexHtml = indexHtml.replace(
  /<link rel="stylesheet" crossorigin href="[^"]+">/,
  () => `<style>\n${stylesheet}\n</style>`,
);

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, 'index.html'), indexHtml);

for (const fileName of publicFiles) {
  fs.copyFileSync(path.join(root, 'public', fileName), path.join(outputDirectory, fileName));
}

fs.writeFileSync(
  path.join(outputDirectory, 'UPLOAD-INSTRUCTIONS.txt'),
  [
    'Upload these files to the root of the Friend05/faheemfs.github.io repository:',
    ...publicFiles.slice(1).map((fileName) => `- ${fileName}`),
    '- index.html',
    '',
    `This build is configured for the GitHub Pages base path /${basePath}/.`,
    'After committing the replacement files, wait 1-2 minutes and refresh the live site with Ctrl+F5.',
  ].join('\n'),
);

console.log(`Prepared ${outputDirectory}`);
