import { HOST, ROUTES } from "../src/components/Routes";
import { execSync } from "child_process";
import path from "path";
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

// copy each known path to its own index.html (same as the main one), so github pages doesn't throw a 404 at them
for (const r of [...Object.values(ROUTES), { path: "404" }]) {
  if (r.path === "/") {
    continue;
  }
  execSync(`cp dist/index.html ${path.join("dist", `${r.path}.html`)}`);
}

// generate sitemap.xml
const sitemap = new SitemapStream({ hostname: HOST });

const writeStream = createWriteStream("dist/sitemap.xml");
sitemap.pipe(writeStream);

for (const r of Object.values(ROUTES)) {
  sitemap.write(r.path);
}

sitemap.end();
