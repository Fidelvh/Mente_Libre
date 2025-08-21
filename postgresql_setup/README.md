# PostgreSQL en macOS (Homebrew)

## 📦 Instalación

1. Verificar si ya tienes PostgreSQL instalado:
   ```bash

   psql --version

2. Iniciar el servidor

    brew services start postgresql@15

3. Verificar que está corriendo

    pg_isready

### Si no exite, instalar con Homebrew
brew install postgresql@15

⚙️ Configuración de PATH

PostgreSQL es keg-only, por lo tanto no está en el PATH global.
Agregarlo a ~/.zshrc:

echo 'export PATH="/usr/local/opt/postgresql@15/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc


En Macs con Apple Silicon, la ruta puede ser:

/opt/homebrew/opt/postgresql@15/bin

🗂️ Directorios importantes

Binarios: /usr/local/opt/postgresql@15/bin/

Datos (bases de datos): /usr/local/var/postgresql@15/

Config: dentro de /usr/local/var/postgresql@15/
