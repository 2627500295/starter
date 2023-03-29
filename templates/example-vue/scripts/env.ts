import * as fs from "fs";

import * as dotenv from "dotenv";

import { expand } from "dotenv-expand";

import * as paths from "./paths";

import { commit } from "./build-info";

import dayjs from "dayjs";

const buildEnv = process.env.BUILD_ENV;

const pkg = require(paths.appPackageJson);

const appVersion = pkg.version;

const appName = pkg.name;

const now = new Date();

const buildId = process.env.CI_JOB_ID || now.getTime();

process.env.NODE_ENV ||= "development";

const decorate = process.env.NODE_ENV === "development" ? "dev" : "build";

// the current version of webapp
const webAppVersion = `${appVersion}-${decorate}.${buildId}`;

const dotenvFiles = [
  `${paths.dotenv}.${buildEnv}.local`,

  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  process.env.NODE_ENV !== "test" && `${paths.dotenv}.local`,

  `${paths.dotenv}.${buildEnv}`,

  paths.dotenv,
]
  .filter(Boolean)
  .filter(fs.existsSync);

dotenvFiles.forEach((dotenvFile) =>
  expand(dotenv.config({ path: dotenvFile }))
);

export function getClientEnvironment(publicUrl: string) {
  const raw = Object.entries(process.env)
    .filter(([key]) =>
      /(^((REACT|VITE|WEB)_)?APP(LICATION)?_)|.+_ENV$/.test(key)
    )
    .reduce<Record<string, any>>(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {
        WEB_APP_NAME: appName,
        WEB_APP_VERSION: webAppVersion,
        WEB_APP_LAST_BUILD: dayjs(now).format("YYYY-MM-DDTHH:mm:ss.SSSZZ"),
        WEB_APP_LAST_COMMIT: commit.id.long,
        WEB_APP_LAST_MODIFIED: dayjs(commit.date).format(
          "YYYY-MM-DDTHH:mm:ss.SSSZZ"
        ),
        PUBLIC_URL: publicUrl,
      }
    );

  const stringified = {
    "process.env": Object.entries(raw).reduce<Record<string, string>>(
      (acc, [key, value]) => ({ ...acc, [key]: JSON.stringify(value) }),
      {}
    ),
  };

  const define = {
    "process.env": raw,
  };

  return { raw, stringified, define };
}
