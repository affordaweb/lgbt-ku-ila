import sharp from 'sharp';
import { readdir, unlink, rename, stat } from 'fs/promises';
import { join, parse } from 'path';
import { existsSync } from 'fs';

const QUALITY = 80;
const ROOT = '/home/affordaweb/lgbt-ku-ila/public/images';

const dirs = ['members', 'stock', 'events', 'logo'];

async function optimizeDir(dir) {
  const fullPath = join(ROOT, dir);
  if (!existsSync(fullPath)) return;
  const files = await readdir(fullPath);
  for (const file of files) {
    const ext = parse(file).ext.toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    const filePath = join(fullPath, file);
    const img = sharp(filePath);
    const meta = await img.metadata();
    const base = parse(file).name;

    if (ext === '.png' && dir === 'members') {
      const webpPath = join(fullPath, `${base}.webp`);
      console.log(`Converting: ${dir}/${file} -> ${base}.webp`);
      await img.webp({ quality: QUALITY }).toFile(webpPath);
      await unlink(filePath);
    } else {
      const tmpPath = join(fullPath, `_${file}`);
      console.log(`Compressing: ${dir}/${file}`);
      if (ext === '.png') {
        await img.png({ quality: QUALITY, palette: true }).toFile(tmpPath);
      } else {
        await img.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmpPath);
      }
      await unlink(filePath);
      await rename(tmpPath, filePath);
    }
  }
}

async function cleanup() {
  const membersPath = join(ROOT, 'members');
  const files = await readdir(membersPath);
  for (const file of files) {
    const lower = file.toLowerCase();
    if (lower.includes('(1)') || lower.includes('copy')) {
      const filePath = join(membersPath, file);
      const ext = parse(file).ext.toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        console.log(`Removing duplicate: members/${file}`);
        await unlink(filePath);
      }
    }
  }
  const eventsPath = join(ROOT, 'events');
  const efiles = await readdir(eventsPath);
  for (const file of efiles) {
    if (file.includes(' (1)')) {
      const filePath = join(eventsPath, file);
      console.log(`Removing duplicate: events/${file}`);
      await unlink(filePath);
    }
  }
}

async function main() {
  console.log('Cleaning up duplicates...');
  await cleanup();

  console.log('\nOptimizing images...');
  for (const dir of dirs) {
    await optimizeDir(dir);
  }

  const sizes = {};
  for (const dir of dirs) {
    const fullPath = join(ROOT, dir);
    if (!existsSync(fullPath)) continue;
    const files = await readdir(fullPath);
    let total = 0;
    for (const file of files) {
      if (file.startsWith('.')) continue;
      const filePath = join(fullPath, file);
      const s = await stat(filePath);
      total += s.size;
    }
    sizes[dir] = { files: files.filter(f => !f.startsWith('.')).length, totalBytes: total };
  }
  console.log('\nResults:');
  console.table(sizes);
}

main().catch(console.error);
