// treeWithExceptions.js
import fs from 'fs';
import path from 'path';

// 🧱 Add folders or files you want to ignore here
const IGNORE_LIST = [
  'node_modules',
  '.git',
  '.DS_Store',
  'dist',
  'build'
];

/**
 * Recursively prints folder structure with file extensions.
 * @param {string} dir - Directory path
 * @param {string} prefix - Indentation for nested levels
 */
function listAll(dir, prefix = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (IGNORE_LIST.includes(item.name)) continue; // skip ignored folders/files

    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      console.log(`${prefix}📁 ${item.name}/`);
      listAll(fullPath, prefix + '  ');
    } else {
      const ext = path.extname(item.name);
      console.log(`${prefix}📄 ${item.name}${ext ? '' : ''}`);
    }
  }
}

// Start from project root (.)
const rootDir = path.resolve('./');
console.log(`📦 Project structure from: ${rootDir}\n`);
listAll(rootDir);
