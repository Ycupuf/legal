import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const contentDir = path.join(repoRoot, "content");
const configPath = path.join(repoRoot, "site.config.json");

const outputPaths = [
  "index.html",
  ".nojekyll",
  "assets",
  "privacy",
  "terms",
  "account-deletion",
  "support",
  "tr",
];

const css = `
:root {
  color-scheme: light;
  --bg: #f6f5f1;
  --surface: #fffdfa;
  --ink: #191713;
  --muted: #6d685f;
  --line: #dfd8ce;
  --accent: #274039;
  --accent-soft: #e4ece8;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #f7f4ef 0%, #f2eee7 100%);
  color: var(--ink);
  font-family: "Georgia", "Iowan Old Style", "Times New Roman", serif;
}
body {
  min-height: 100vh;
}
a {
  color: var(--accent);
}
.shell {
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}
.brand {
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
}
.lang-switch {
  display: inline-flex;
  gap: 8px;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,0.66);
}
.lang-switch a {
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1;
}
.lang-switch a.active {
  background: var(--accent);
  color: white;
}
.hero {
  margin-bottom: 24px;
}
.hero h1 {
  margin: 0 0 10px;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 0.98;
  letter-spacing: -0.03em;
}
.hero p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
}
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px 22px;
  box-shadow: 0 12px 40px rgba(25, 23, 19, 0.05);
}
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}
.nav a {
  text-decoration: none;
  border: 1px solid var(--line);
  padding: 10px 14px;
  border-radius: 999px;
  color: var(--muted);
  background: #fff;
  font-size: 14px;
}
.nav a.active {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: #c8d7d0;
}
.content h1:first-child {
  display: none;
}
.content h2 {
  margin: 28px 0 10px;
  font-size: 28px;
  line-height: 1.1;
}
.content h3 {
  margin: 18px 0 8px;
  font-size: 20px;
  line-height: 1.2;
}
.content p, .content li {
  font-size: 17px;
  line-height: 1.75;
  color: var(--ink);
}
.content p {
  margin: 0 0 14px;
}
.content ul {
  margin: 0 0 18px 20px;
  padding: 0;
}
.content code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  background: #f2efe9;
  border: 1px solid #e8e1d6;
  border-radius: 8px;
  padding: 0.1em 0.4em;
  font-size: 0.9em;
}
.footer {
  margin-top: 22px;
  font-size: 13px;
  color: var(--muted);
}
@media (max-width: 640px) {
  .shell {
    padding: 24px 14px 48px;
  }
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .card {
    padding: 22px 16px;
    border-radius: 22px;
  }
}
`;

function normalizeBaseUrl(input) {
  return input.replace(/\/+$/, "");
}

async function loadConfig() {
  const raw = await fs.readFile(configPath, "utf8");
  const config = JSON.parse(raw);
  return {
    siteTitle: config.siteTitle || "Wardrobe Legal",
    brandName: config.brandName || "Wardrobe",
    supportEmail: config.supportEmail || "",
    baseUrl: normalizeBaseUrl(config.baseUrl || "https://your-domain.com"),
  };
}

function createSupportContent(config) {
  return {
    en: `
<h1>Support</h1>
<p>${config.brandName} support is available for account, privacy, deletion, subscription, and Community questions.</p>
<h2>Common Requests</h2>
<ul>
  <li>Account access or login issues</li>
  <li>Wardrobe item analysis problems</li>
  <li>Generated outfit visibility or Community questions</li>
  <li>Subscription or billing support</li>
  <li>Privacy, deletion, or legal requests</li>
</ul>
<h2>Account Deletion</h2>
<p>You can start deletion inside the Wardrobe app from <code>Settings → Delete Account</code>.</p>
`,
    tr: `
<h1>Destek</h1>
<p>${config.brandName} desteği hesap, gizlilik, silme, abonelik ve Community soruları için kullanılabilir.</p>
<h2>Yaygın Talepler</h2>
<ul>
  <li>Hesap erişimi veya giriş sorunları</li>
  <li>Wardrobe item analiz sorunları</li>
  <li>Generated outfit görünürlüğü veya Community soruları</li>
  <li>Abonelik ve faturalandırma desteği</li>
  <li>Gizlilik, hesap silme veya hukuki talepler</li>
</ul>
<h2>Hesap Silme</h2>
<p>Silme işlemini uygulama içinde <code>Ayarlar → Hesabı Sil</code> yolundan başlatabilirsiniz.</p>
`,
  };
}

function createPages(config) {
  const supportContent = createSupportContent(config);
  return {
    en: [
      { slug: "privacy", title: "Privacy Policy", sourcePath: path.join(contentDir, "privacy-policy.en.md") },
      { slug: "terms", title: "Terms of Service", sourcePath: path.join(contentDir, "terms-of-service.en.md") },
      { slug: "account-deletion", title: "Account Deletion", sourcePath: path.join(contentDir, "account-deletion.en.md") },
      { slug: "support", title: "Support", htmlBody: supportContent.en },
    ],
    tr: [
      { slug: "privacy", title: "Gizlilik Politikası", sourcePath: path.join(contentDir, "privacy-policy.tr.md") },
      { slug: "terms", title: "Kullanım Koşulları", sourcePath: path.join(contentDir, "terms-of-service.tr.md") },
      { slug: "account-deletion", title: "Hesap Silme", sourcePath: path.join(contentDir, "account-deletion.tr.md") },
      { slug: "support", title: "Destek", htmlBody: supportContent.tr },
    ],
  };
}

function escapeHtml(input) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderInline(input) {
  return escapeHtml(input).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function markdownToHtml(markdown) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const out = [];
  let inList = false;
  let paragraph = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const closeList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      closeList();
      out.push(`<h1>${renderInline(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      closeList();
      out.push(`<h2>${renderInline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      closeList();
      out.push(`<h3>${renderInline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${renderInline(line.slice(2))}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph();
  closeList();
  return out.join("\n");
}

function navItems(pages, language, currentSlug) {
  const labels =
    language === "en"
      ? {
          privacy: "Privacy",
          terms: "Terms",
          "account-deletion": "Deletion",
          support: "Support",
        }
      : {
          privacy: "Gizlilik",
          terms: "Koşullar",
          "account-deletion": "Silme",
          support: "Destek",
        };

  return pages[language]
    .map((page) => {
      const active = page.slug === currentSlug ? "active" : "";
      const href = language === "en" ? `/${page.slug}/` : `/tr/${page.slug}/`;
      return `<a class="${active}" href="${href}">${labels[page.slug]}</a>`;
    })
    .join("");
}

function renderPageShell({ config, pages, language, title, slug, bodyHtml }) {
  const rootHref = language === "en" ? "/" : "/tr/";
  const otherLanguageHref = language === "en" ? `/tr/${slug}/` : `/${slug}/`;
  const heroCopy =
    language === "en"
      ? `Public legal pages for ${config.brandName}. These pages are designed to be exported and hosted separately from the app repository.`
      : `${config.brandName} icin herkese acik hukuki sayfalar. Bu sayfalar uygulama deposundan ayri olarak export edilip yayinlanmak icin hazirlandi.`;

  return `<!doctype html>
<html lang="${language}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index,follow" />
    <title>${title} | ${config.brandName}</title>
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    <main class="shell">
      <div class="topbar">
        <a class="brand" href="${rootHref}">${config.siteTitle}</a>
        <div class="lang-switch">
          <a class="${language === "en" ? "active" : ""}" href="/${slug}/">EN</a>
          <a class="${language === "tr" ? "active" : ""}" href="/tr/${slug}/">TR</a>
        </div>
      </div>
      <section class="hero">
        <h1>${title}</h1>
        <p>${heroCopy}</p>
      </section>
      <section class="card">
        <nav class="nav">${navItems(pages, language, slug)}</nav>
        <div class="content">${bodyHtml}</div>
        <div class="footer">
          <a href="${otherLanguageHref}">${language === "en" ? "TR" : "EN"}</a>
        </div>
      </section>
    </main>
  </body>
</html>`;
}

function renderHome({ config, pages, language }) {
  const title = language === "en" ? config.siteTitle : `${config.brandName} Hukuki Sayfalar`;
  const description =
    language === "en"
      ? `This static site contains the public Privacy Policy, Terms of Service, Account Deletion, and Support pages for ${config.brandName}.`
      : `Bu statik site, ${config.brandName} icin herkese acik Gizlilik Politikasi, Kullanim Kosullari, Hesap Silme ve Destek sayfalarini icerir.`;
  const hrefBase = language === "en" ? "" : "/tr";

  const bodyHtml = `
<h1>${title}</h1>
<p>${description}</p>
<ul>
  <li><a href="${hrefBase}/privacy/">${language === "en" ? "Privacy Policy" : "Gizlilik Politikasi"}</a></li>
  <li><a href="${hrefBase}/terms/">${language === "en" ? "Terms of Service" : "Kullanim Kosullari"}</a></li>
  <li><a href="${hrefBase}/account-deletion/">${language === "en" ? "Account Deletion" : "Hesap Silme"}</a></li>
  <li><a href="${hrefBase}/support/">${language === "en" ? "Support" : "Destek"}</a></li>
</ul>
`;

  return renderPageShell({
    config,
    pages,
    language,
    title,
    slug: "privacy",
    bodyHtml,
  });
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeFile(filePath, contents) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, contents, "utf8");
}

async function cleanOutput() {
  for (const relativePath of outputPaths) {
    await fs.rm(path.join(repoRoot, relativePath), { recursive: true, force: true });
  }
}

async function renderMarkdownFile(filePath, config) {
  const raw = await fs.readFile(filePath, "utf8");
  return markdownToHtml(
    raw
      .replaceAll("https://your-domain.com", config.baseUrl)
      .replaceAll("support@your-domain.com", config.supportEmail || "")
  );
}

async function main() {
  const config = await loadConfig();
  const pages = createPages(config);

  await cleanOutput();
  await ensureDir(path.join(repoRoot, "assets"));
  await writeFile(path.join(repoRoot, "assets", "styles.css"), css.trim());

  await writeFile(path.join(repoRoot, "index.html"), renderHome({ config, pages, language: "en" }));
  await writeFile(path.join(repoRoot, "tr", "index.html"), renderHome({ config, pages, language: "tr" }));

  for (const language of ["en", "tr"]) {
    for (const page of pages[language]) {
      const bodyHtml = page.htmlBody ? page.htmlBody.trim() : await renderMarkdownFile(page.sourcePath, config);
      const html = renderPageShell({
        config,
        pages,
        language,
        title: page.title,
        slug: page.slug,
        bodyHtml,
      });
      const pageDir =
        language === "en"
          ? path.join(repoRoot, page.slug)
          : path.join(repoRoot, "tr", page.slug);
      await writeFile(path.join(pageDir, "index.html"), html);
    }
  }

  await writeFile(path.join(repoRoot, ".nojekyll"), `${config.brandName} legal static site export.\n`);
  console.log(`Legal site exported to ${repoRoot}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
