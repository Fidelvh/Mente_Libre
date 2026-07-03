// backend/src/routes/profile.routes.js
import { Router } from "express";
import { requireAuth } from "../middlewares/auth.js";
import  { prisma } from "../libs/prisma.js";

const VALID_TONES = ["REFLEXIVO", "CALMO", "DIRECTO", "EMPATICO"];

function sanitizeTonePreferences(input) {
  if (!Array.isArray(input)) return [];
  return input.filter(tone => VALID_TONES.includes(tone));
}

const router = Router();

// GET perfil
router.get("/", requireAuth, async (req, res) => {
  const profile = await prisma.profile.findUnique({
    where: { userId: req.user.id }
  });

  // Auto-create si no existe
  if (!profile) {
    const created = await prisma.profile.create({
      data: { userId: req.user.id }
    });
    return res.json(created);
  }

  res.json(profile);
});

// UPDATE perfil
router.put("/", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;

    const allowedFields = [
      "displayName",
      "rhythm",
      "tone",
      "pauseLevel",
      "tonePreferences",
      "paused",
    ];

    const rawData = Object.fromEntries(
      Object.entries(req.body).filter(([key]) =>
        allowedFields.includes(key)
      )
    );

    const data = {
      ...rawData,
      tonePreferences: sanitizeTonePreferences(rawData.tonePreferences),
    };

    const profile = await prisma.profile.upsert({
      where: { userId },
      update:data,
      create: { ...data, userId },
    });

    res.json(profile);

  } catch (error) {
    console.error("❌ PROFILE UPDATE ERROR:", error);
    res.status(500).json({ error: "Error actualizando perfil" });
  }
});



export default router;
