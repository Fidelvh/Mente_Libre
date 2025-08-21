// Aplica un esquema Zod al body/params/query
export const validate =
  (schema, where = 'body') =>
  (req, res, next) => {
    const data = req[where] ?? {};
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return res.status(400).json({
        error: 'Validación fallida',
        details: parsed.error.flatten()
      });
    }
    req[where] = parsed.data; // normaliza (trim, defaults)
    next();
  };
