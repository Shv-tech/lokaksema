import { execSync } from 'node:child_process';

console.log('Applying latest migrations...');
execSync('pnpm prisma migrate dev', { stdio: 'inherit' });

console.log('Seeding database...');
execSync('pnpm db:seed', { stdio: 'inherit' });
