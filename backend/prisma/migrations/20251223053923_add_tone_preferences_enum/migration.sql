
-- backend/prisma/migrations/20251223053923_add_tone_preferences_enum/migration.sql
-- CreateEnum
CREATE TYPE "TonePreference" AS ENUM ('REFLEXIVO', 'CALMO', 'DIRECTO', 'EMPATICO');

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "paused" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tonePreferences" TEXT[];
