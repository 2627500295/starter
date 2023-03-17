const git = require("git-rev-sync");
const { valid, coerce } = require("semver");

const { version: APP_VERSION, name: APP_NAME } = require("./package.json");

const parseVersion = (version) => valid(coerce(version));

const NextVersion = parseVersion(require("next/package.json").version);
const ReactVersion = parseVersion(require("react/package.json").version);
const COMMIT = git.long();
const LAST_MODIFIED = new Date(git.date()).toISOString();

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

module.exports = nextConfig;
