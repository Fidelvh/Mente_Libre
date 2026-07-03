// check-imports-advanced.js
// Revisión avanzada de imports en React + Vite

import fs from "fs"; 
import path from "path";

const SRC = path.resolve("./src");
const VALID_EXT = [".js", ".jsx", ".ts", ".tsx", ".css"];

let report = {
  broken: [],
  suggestions: [],
  files: []
};

function walk(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, callback);
    } else {
      callback(filepath);
    }
  });
}

// Recolectar TODOS los archivos para sugerencias automáticas
walk(SRC, (f) => report.files.push(f.replace(SRC + "/", "")));

function resolveImport(importPath, fromFile) {
  if (importPath.startsWith("@")) return true;
  if (!importPath.startsWith(".")) return true;

  const baseDir = path.dirname(fromFile);
  let full = path.resolve(baseDir, importPath);

  if (fs.existsSync(full)) return true;

  for (const ext of VALID_EXT) {
    if (fs.existsSync(full + ext)) return true;
  }

  for (const ext of VALID_EXT) {
    if (fs.existsSync(path.join(full, "index" + ext))) return true;
  }

  return false;
}

function suggestCorrectPath(importPath) {
  const name = path.basename(importPath).replace(/\..*/, "");

  const matches = report.files.filter((f) =>
    f.toLowerCase().includes(name.toLowerCase())
  );

  return matches.length ? matches : null;
}

// ---------------------
// INICIO
// ---------------------

console.log("🔍 Escaneando imports (modo avanzado)...");

walk(SRC, (file) => {
  if (!file.endsWith(".js") && !file.endsWith(".jsx")) return;

  const content = fs.readFileSync(file, "utf8");
  const regex = /import\s+.*?from\s+["'](.+?)["']/g;

  let m;
  while ((m = regex.exec(content)) !== null) {
    const importPath = m[1];

    if (!resolveImport(importPath, file)) {
      console.log(`\n❌ Roto en: ${file}`);
      console.log(`   → ${importPath}`);

      const suggestions = suggestCorrectPath(importPath);

      report.broken.push({
        file: file.replace(SRC + "/", ""),
        import: importPath,
        suggestions
      });

      if (suggestions) {
        console.log("   🔎 Sugerencias:");
        suggestions.forEach((s) => console.log("     → " + s));
      }
    }
  }
});

// Guardar reporte
fs.writeFileSync(
  "./import-report.json",
  JSON.stringify(report, null, 2),
  "utf8"
);

console.log("\n📄 Reporte guardado en import-report.json");
console.log("✅ Revisión completada.");
