import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'demo@local.test';
  const passwordHash = await bcrypt.hash('demo1234', 12);

  await prisma.user.upsert({
    where: { email },
    create: { email, passwordHash, name: 'Demo' },
    update: {}
  });

  console.log('Seed OK -> usuario:', email, 'pass: demo1234');
}

main()
  .catch((e) => {
    console.error('Seed error', e);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());
