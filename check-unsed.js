// check-unused.js
// Detecta archivos no utilizados con soporte para alias "@" de Vite

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "src");

// Extensiones consideradas válidas
const VALID_EXT = [".js", ".jsx", ".css", ".png", ".jpg", ".jpeg"];

// Archivos que NUNCA deben marcarse como no usados
const SAFE_FILES = [
  "src/main.jsx",
  "src/App.jsx",
  "src/context/authContext.jsx",
  "src/services/api.js",
  "src/components/layouts/navbar.jsx",
  "src/components/layouts/footer.jsx",
  "src/components/layouts/mainLayout.jsx",
];

// Reemplaza alias @ → ruta absoluta
const resolveAlias = (importPath) => {
  if (importPath.startsWith("@/")) {
    return path.join(SRC_DIR, importPath.replace("@/", ""));
  }
  return importPath;
};

const getAllFiles = (dir) => {
  let results = [];
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath));
    } else {
      if (VALID_EXT.includes(path.extname(filePath))) {
        results.push(filePath);
      }
    }
  });
  return results;
};

const extractImports = (fileContent) => {
  const regex = /import\s+(?:.*from\s+)?["'](.+)["']/g;
  let match;
  const imports = [];

  while ((match = regex.exec(fileContent))) {
    imports.push(match[1]);
  }

  return imports;
};

// Normaliza las rutas importadas
const resolveImportPath = (rawImport, baseFile) => {
  // Alias @
  if (rawImport.startsWith("@/")) {
    return resolveAlias(rawImport);
  }

  // Imagenes públicas → ignorar
  if (rawImport.startsWith("/img")) return null;

  // Relative paths
  if (rawImport.startsWith(".")) {
    let resolved = path.resolve(path.dirname(baseFile), rawImport);

    // Si no tiene extensión, probar .jsx y .js
    if (!path.extname(resolved)) {
      for (let ext of [".jsx", ".js", ".css"]) {
        if (fs.existsSync(resolved + ext)) return resolved + ext;
      }
    }

    return resolved;
  }

  return null; // ignore node_modules
};

const allFiles = getAllFiles(SRC_DIR).map((f) => path.normalize(f));
let usedFiles = new Set();

for (let file of allFiles) {
  const content = fs.readFileSync(file, "utf8");
  const imports = extractImports(content);

  imports.forEach((imp) => {
    const resolved = resolveImportPath(imp, file);
    if (resolved && fs.existsSync(resolved)) {
      usedFiles.add(path.normalize(resolved));
    }
  });
}

// Agregar archivos esenciales que deben ser considerados usados
SAFE_FILES.forEach((f) => usedFiles.add(path.normalize(path.join(__dirname, f))));

const unused = allFiles.filter((f) => !usedFiles.has(f));

console.log("📁 Archivos NO utilizados:");
console.log(unused);
console.log("\n✅ Revisión completada.");
