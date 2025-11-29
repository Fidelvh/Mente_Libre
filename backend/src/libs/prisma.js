import { PrismaClient } from '@prisma/client';
import { logger } from '../logger.js';

console.log("Cargando prisma.js");

export const prisma = new PrismaClient();

// Captura de señal de terminación
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log("Prisma disconnected por SIGINT");
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  console.log("Prisma disconnected por SIGTERM");
  process.exit(0);
});
