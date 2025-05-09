//this is the MAIN deploy script.  Just run node push.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Paths for source (Vite output) and destination (GAS folder)
const DIST_PATH = path.resolve('dist/index.html');
const GAS_PATH = path.resolve('gas/Index.html');

try {
  // Step 1: Build project using Vite
  console.log('📦 Building project with Vite...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 2: Read built HTML from dist
  const indexHtml = fs.readFileSync(DIST_PATH, 'utf8');

  // Step 3: Copy built HTML to GAS folder
  console.log(`📝 Copying built HTML to ${GAS_PATH}`);
  fs.writeFileSync(GAS_PATH, indexHtml);

  // Step 4: Push files to Google Apps Script using CLASP
  console.log('🚀 Deploying to Google Apps Script...');
  execSync('clasp push', { stdio: 'inherit' });

  console.log('✅ Deployment complete.');
} catch (err) {
  console.error('❌ Deployment failed:', err.message);
}
