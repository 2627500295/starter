import * as fs from "fs";

import * as path from "path";

export const appDirectory: string = fs.realpathSync(process.cwd());

export function resolveApp(relativePath: string) {
  return path.resolve(appDirectory, relativePath);
}

export const dotenv = resolveApp(".env/.env");

export const appPackageJson = resolveApp("package.json");
