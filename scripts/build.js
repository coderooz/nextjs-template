#!/usr/bin/env node

import { existsSync, readdirSync, copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..', '..');

console.log('Building nextjs-template...');

// Ensure the CLI entry is executable-ready
const cliPath = join(__dirname, 'cli', 'index.js');
if (existsSync(cliPath)) {
  console.log('✓ CLI entry found');
} else {
  console.log('⚠ CLI entry not found (run will fall back to manual copy)');
}

// Verify all templates exist
const templatesDir = join(__dirname, 'templates');
if (existsSync(templatesDir)) {
  const templates = readdirSync(templatesDir).filter(
    (name) => statSync(join(templatesDir, name)).isDirectory() && name !== '.gitkeep',
  );
  console.log(`✓ ${templates.length} templates found: ${templates.join(', ')}`);
} else {
  console.log('⚠ No templates directory found');
}

console.log('Build complete.');
