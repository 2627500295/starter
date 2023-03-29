/* eslint-disable @typescript-eslint/no-var-requires */

// const git = require("git-rev-sync");
const execSync = (command, options) => require("child_process").execSync(command, options);
const long = () => execSync("git rev-parse HEAD", { encoding: "utf-8" });
const date = () => execSync("git log -1 --pretty='%cD'", { encoding: "utf-8" });

const { valid, coerce } = require("semver");
const parseVersion = (version) => valid(coerce(version));

const appPackage = require("./package.json");

const APP_NAME = appPackage.name;
const APP_VERSION = parseVersion(appPackage.version);
const NextVersion = parseVersion(require("next/package.json").version);
const ReactVersion = parseVersion(require("react/package.json").version);
const COMMIT = long();
const LAST_MODIFIED = new Date(date()).toISOString();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** React Strict Mode */
  reactStrictMode: true,

  /** Environment Variables */
  env: {
    STAGE: "testing",
    LAST_MODIFIED,
    APP_NAME,
    APP_VERSION,
    APP_FRAMEWORK: `Next.js/${NextVersion} React/${ReactVersion}`,
    COMMIT,
  },
};

module.exports = nextConfig;
