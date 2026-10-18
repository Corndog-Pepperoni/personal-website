import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve(".");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const target = resolve(
      root,
      `.${pathname.endsWith("/") ? `${pathname}index.html` : pathname}`,
    );
    if (
      !target.startsWith(`${root}${sep}`) ||
      !types[extname(target)] ||
      /(^|[\\/])\./.test(pathname)
    )
      throw new Error("Not public");
    if (!(await stat(target)).isFile()) throw new Error("Not found");
    response.writeHead(200, {
      "Content-Type": types[extname(target)],
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(await readFile(target));
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")));
  }
}).listen(4173, "127.0.0.1", () => console.log("Local: http://127.0.0.1:4173"));
