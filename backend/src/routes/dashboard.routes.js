// backend/src/routes/dashboard.routes.js
import { Router } from 'express'
import { requireAuth } from '../middlewares/auth.js'
import { getDashboard } from '../controllers/dashboard.controller.js'

export const dashboardRouter = Router()

// Todas las rutas de dashboard requieren autenticación
dashboardRouter.use(requireAuth);

// GET /api/dashboard - Obtener datos del dashboard
dashboardRouter.get('/', requireAuth, getDashboard)
