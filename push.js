import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const DIST_PATH = path.resolve('dist/index.html');
const GAS_PATH = path.resolve('gas/Index.html');

try {
  console.log('📦 Building project with Vite...');
  execSync('npm run build', { stdio: 'inherit' });

  if (!fs.existsSync(DIST_PATH)) {
    throw new Error('Build output not found. Did Vite fail to compile?');
  }

  console.log('📄 Copying index.html to GAS folder...');
  fs.copyFileSync(DIST_PATH, GAS_PATH);

  console.log('🚀 Pushing to Google Apps Script...');
  execSync('clasp push', { stdio: 'inherit' });

  console.log('✅ Done!');
} catch (error) {
  console.error('❌ Error during automation:');
  console.error(error.message);
  process.exit(1);
}
