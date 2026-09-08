#!/usr/bin/env node

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..', '..');
const TEMPLATES_DIR = resolve(__dirname, 'templates');

const REQUIRED_DIRS = ['src/app'];
const REQUIRED_FILES = ['package.json', 'README.md'];
const OPTIONAL_FILES = ['.env.example', 'tsconfig.json', 'next.config.ts'];
const REQUIRED_SCRIPTS = ['dev', 'build', 'start', 'lint'];

let allPassed = true;

function getTemplates() {
  return readdirSync(TEMPLATES_DIR).filter((name) => {
    const stat = statSync(join(TEMPLATES_DIR, name));
    return stat.isDirectory() && name !== '.gitkeep';
  });
}

function validate() {
  const templates = getTemplates();
  console.log(`\nValidating ${templates.length} templates...\n`);

  for (const name of templates) {
    const dir = join(TEMPLATES_DIR, name);
    console.log(`─ ${name}`);

    // Check required directories
    for (const relDir of REQUIRED_DIRS) {
      const fullPath = join(dir, relDir);
      const pass = existsSync(fullPath) && statSync(fullPath).isDirectory();
      console.log(`  ${pass ? '✓' : '✗'} ${relDir}/`);
      if (!pass) allPassed = false;
    }

    // Check required files
    for (const file of REQUIRED_FILES) {
      const pass = existsSync(join(dir, file));
      console.log(`  ${pass ? '✓' : '✗'} ${file}`);
      if (!pass) allPassed = false;
    }

    // Check optional files (informational)
    for (const file of OPTIONAL_FILES) {
      const pass = existsSync(join(dir, file));
      console.log(`  ${pass ? '✓' : '·'} ${file} (optional)`);
    }

    // Validate package.json
    const pkgPath = join(dir, 'package.json');
    if (existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
        for (const script of REQUIRED_SCRIPTS) {
          const pass = !!pkg.scripts?.[script];
          console.log(`  ${pass ? '✓' : '✗'} script: ${script}`);
          if (!pass) allPassed = false;
        }
        if (!pkg.scripts?.typecheck) {
          console.log(`  · script: typecheck (recommended)`);
        }
      } catch (err) {
        console.log(`  ✗ package.json is invalid JSON`);
        allPassed = false;
      }
    }

    // Check for src/app/layout.tsx or page.tsx
    const appDir = join(dir, 'src', 'app');
    if (existsSync(appDir)) {
      const hasLayout = existsSync(join(appDir, 'layout.tsx')) || existsSync(join(appDir, 'layout.ts')) || existsSync(join(appDir, 'layout.jsx'));
      const hasPage = existsSync(join(appDir, 'page.tsx')) || existsSync(join(appDir, 'page.ts')) || existsSync(join(appDir, 'page.jsx'));
      console.log(`  ${hasLayout ? '✓' : '✗'} src/app/layout.tsx`);
      console.log(`  ${hasPage ? '✓' : '✗'} src/app/page.tsx`);
      if (!hasLayout || !hasPage) allPassed = false;
    }

    console.log();
  }

  if (allPassed) {
    console.log('All validations passed! ✓');
    process.exit(0);
  } else {
    console.log('Some validations failed. ✗');
    process.exit(1);
  }
}

validate();
