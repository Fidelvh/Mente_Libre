
---

# 📜 `setup_postgres.sh`

```bash
#!/usr/bin/env bash

set -e

echo "=== 🚀 Configurando PostgreSQL en macOS ==="

# Ruta de instalación
PG_PATH="/usr/local/opt/postgresql@15/bin"

if [ -d "$PG_PATH" ]; then
  echo "➜ PostgreSQL encontrado en: $PG_PATH"
else
  echo "❌ No se encontró PostgreSQL en $PG_PATH"
  echo "Instálalo primero con: brew install postgresql@15"
  exit 1
fi

# Agregar al PATH si no está
if ! grep -q "$PG_PATH" ~/.zshrc; then
  echo "➜ Agregando PostgreSQL al PATH en ~/.zshrc"
  echo "export PATH=\"$PG_PATH:\$PATH\"" >> ~/.zshrc
else
  echo "✓ PATH ya contiene PostgreSQL"
fi

# Recargar zshrc
echo "➜ Recargando configuración de shell..."
source ~/.zshrc || true

# Verificar instalación
echo "➜ Verificando versión de psql:"
psql --version || echo "⚠️ No se pudo ejecutar psql"

echo "➜ Verificando estado del servidor:"
pg_isready || echo "⚠️ PostgreSQL no está aceptando conexiones"

echo "=== ✅ Configuración terminada ==="
