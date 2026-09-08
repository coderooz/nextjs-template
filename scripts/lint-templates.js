#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..', '..');
const TEMPLATES_DIR = resolve(__dirname, 'templates');

function getTemplates() {
  return readdirSync(TEMPLATES_DIR).filter((name) => {
    const stat = statSync(join(TEMPLATES_DIR, name));
    return stat.isDirectory() && name !== '.gitkeep';
  });
}

function lintTemplate(name) {
  const dir = join(TEMPLATES_DIR, name);
  if (!existsSync(join(dir, 'package.json'))) {
    console.log(`Skipping "${name}" — no package.json`);
    return true;
  }

  try {
    console.log(`\nLinting "${name}"...`);
    execSync('npx next lint', { cwd: dir, stdio: 'inherit', timeout: 60000 });
    console.log(`✓ "${name}" lint passed`);
    return true;
  } catch (error) {
    console.error(`✗ "${name}" lint failed`);
    return false;
  }
}

function typecheckTemplate(name) {
  const dir = join(TEMPLATES_DIR, name);
  if (!existsSync(join(dir, 'tsconfig.json'))) {
    console.log(`Skipping typecheck for "${name}" — no tsconfig.json`);
    return true;
  }

  try {
    console.log(`\nTypeChecking "${name}"...`);
    execSync('npx tsc --noEmit', { cwd: dir, stdio: 'inherit', timeout: 60000 });
    console.log(`✓ "${name}" typecheck passed`);
    return true;
  } catch (error) {
    console.error(`✗ "${name}" typecheck failed`);
    return false;
  }
}

const templates = getTemplates();
let allPassed = true;

console.log(`Running lint + typecheck on ${templates.length} templates...`);

for (const name of templates) {
  const lintOk = lintTemplate(name);
  const typeOk = typecheckTemplate(name);
  if (!lintOk || !typeOk) allPassed = false;
}

if (allPassed) {
  console.log('\nAll templates passed!');
  process.exit(0);
} else {
  console.log('\nSome templates failed.');
  process.exit(1);
}
