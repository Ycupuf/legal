import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content");
const requiredFiles = [
  "privacy-policy.en.md",
  "privacy-policy.tr.md",
  "terms-of-service.en.md",
  "terms-of-service.tr.md",
  "account-deletion.en.md",
  "account-deletion.tr.md",
];
const staleMarkers = [
  /\bBFMW\b/i,
  /de-?identif/i,
  /legal-ycupufs-projects\.vercel\.app/i,
  /gender presentation context.{0,80}theme/i,
  /automatically published/i,
];
const placeholders = /\[(?:REGISTERED CONTACT ADDRESS|GOVERNING LAW AND VENUE)\]/g;

const findings = [];
for (const file of requiredFiles) {
  const filePath = path.join(contentDir, file);
  let text;
  try {
    text = await fs.readFile(filePath, "utf8");
  } catch (error) {
    findings.push({ file, issue: "missing_file", detail: String(error) });
    continue;
  }
  for (const marker of staleMarkers) {
    if (marker.test(text)) findings.push({ file, issue: "stale_product_language", marker: marker.source });
  }
  const unresolved = [...text.matchAll(placeholders)].map((match) => match[0]);
  if (unresolved.length) {
    findings.push({ file, issue: "missing_legal_input", placeholders: [...new Set(unresolved)] });
  }
}

const result = { ok: findings.length === 0, required_files: requiredFiles, findings };
console.log(JSON.stringify(result, null, 2));
if (findings.length) process.exitCode = 1;
