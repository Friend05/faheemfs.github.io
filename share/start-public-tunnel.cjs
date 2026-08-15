const fs = require('fs');
const path = require('path');
const localtunnel = require('localtunnel');

async function main() {
  const tunnel = await localtunnel({ port: 4174 });
  const urlFile = path.resolve(__dirname, '..', '.public-url.txt');
  fs.writeFileSync(urlFile, `${tunnel.url}\n`, 'utf8');
  process.stdout.write(`${tunnel.url}\n`);

  tunnel.on('close', () => {
    process.exit(0);
  });
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exit(1);
});
