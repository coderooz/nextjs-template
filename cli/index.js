#!/usr/bin/env node

import { readFileSync, existsSync, copyFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const TEMPLATES_DIR = join(ROOT, 'templates');

const TEMPLATES = readdirSync(TEMPLATES_DIR).filter((name) => {
  const stat = statSync(join(TEMPLATES_DIR, name));
  return stat.isDirectory() && name !== '.gitkeep';
});

const USAGE = `
Usage:
  npx nextjs-template list                  List available templates
  npx nextjs-template use <name> <target>   Copy a template to <target>
  npx nextjs-template info <name>           Show template details
  npx nextjs-template --help                Show this help

Available templates:
${TEMPLATES.map((t) => `  - ${t}`).join('\n')}
`;

function listTemplates() {
  console.log('\nAvailable templates:\n');
  for (const name of TEMPLATES) {
    const pkgPath = join(TEMPLATES_DIR, name, 'package.json');
    let description = '';
    if (existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
        description = pkg.description || '';
      } catch {}
    }
    console.log(`  ${name.padEnd(20)} ${description}`);
  }
  console.log();
}

function infoTemplate(name) {
  if (!TEMPLATES.includes(name)) {
    console.error(`Template "${name}" not found.`);
    console.error(`Available: ${TEMPLATES.join(', ')}`);
    process.exit(1);
  }

  const dir = join(TEMPLATES_DIR, name);
  const pkgPath = join(dir, 'package.json');
  const readmePath = join(dir, 'README.md');

  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    console.log(`\nTemplate: ${name}`);
    console.log(`Version:  ${pkg.version}`);
    console.log(`Private:  ${pkg.private}`);
    if (pkg.dependencies) {
      console.log('\nDependencies:');
      for (const [dep, ver] of Object.entries(pkg.dependencies)) {
        console.log(`  ${dep}@${ver}`);
      }
    }
    if (pkg.devDependencies) {
      console.log('\nDev Dependencies:');
      for (const [dep, ver] of Object.entries(pkg.devDependencies)) {
        console.log(`  ${dep}@${ver}`);
      }
    }
    console.log('\nScripts:');
    for (const [script, cmd] of Object.entries(pkg.scripts || {})) {
      console.log(`  ${script}: ${cmd}`);
    }
  }

  if (existsSync(readmePath)) {
    const readme = readFileSync(readmePath, 'utf-8').split('\n').slice(0, 5).join('\n');
    console.log('\nREADME preview:\n');
    console.log(readme);
    console.log('...');
  }

  console.log();
}

function useTemplate(name, target) {
  if (!TEMPLATES.includes(name)) {
    console.error(`Template "${name}" not found.`);
    console.error(`Available: ${TEMPLATES.join(', ')}`);
    process.exit(1);
  }

  const src = join(TEMPLATES_DIR, name);
  const dest = resolve(target);

  if (existsSync(dest)) {
    console.error(`Target directory "${dest}" already exists.`);
    process.exit(1);
  }

  console.log(`Copying template "${name}" to ${dest}...`);
  copyRecursiveSync(src, dest);
  console.log(`Done! Template "${name}" copied to ${dest}`);
  console.log(`\nNext steps:`);
  console.log(`  cd ${target}`);
  console.log(`  npm install`);
  console.log(`  npm run dev`);
}

function copyRecursiveSync(src, dest) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') continue;
      copyRecursiveSync(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

const [, , command, ...args] = process.argv;

switch (command) {
  case 'list':
    listTemplates();
    break;
  case 'info':
    infoTemplate(args[0]);
    break;
  case 'use':
    useTemplate(args[0], args[1]);
    break;
  case '--help':
  case '-h':
  case undefined:
    console.log(USAGE);
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.log(USAGE);
    process.exit(1);
}
