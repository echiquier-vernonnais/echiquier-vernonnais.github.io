import { ROUTES } from "../src/components/Routes";
import { execSync } from "child_process";
import path from "path";

// copy each known path to its own index.html (same as the main one), so github pages doesn't throw a 404 at them
for (const r of [...Object.values(ROUTES), { path: "404" }]) {
  if (r.path === "/") {
    continue;
  }
  console.log("PATH = ", r.path);
  execSync(`cp dist/index.html ${path.join("dist", `${r.path}.html`)}`);
}
