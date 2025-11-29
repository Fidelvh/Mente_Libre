// backend/src/middlewares/role.js

export const requireAdmin = (req, res, next) => {
  if (req.user?.role === 'admin') {
    return next()
  }
  return res.status(403).json({ error: 'Acceso denegado: solo administradores' })
}
 