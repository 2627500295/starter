const git = require("git-rev-sync");
const nextPackage = require("next/package.json");
const reactPackage = require("react/package.json");
const { valid, coerce } = require("semver");

const appPackage = require("./package.json");

/**
 * parse Version
 * @param {string} version
 * @returns
 */
const parseVersion = (version) => valid(coerce(version));

const NextVersion = parseVersion(nextPackage.version);

const ReactVersion = parseVersion(reactPackage.version);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Destination directory */
  distDir: "build",

  /** React Strict Mode */
  reactStrictMode: true,

  /** Disabling x-powered-by */
  poweredByHeader: false,

  /** TypeScript Config */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  /** Environment Variables */
  env: {
    STAGE: "testing",
    LAST_MODIFIED: Date.now(),
    APP_NAME: appPackage.name,
    APP_VERSION: appPackage.version,
    APP_FRAMEWORK: `Next.js/${NextVersion} React/${ReactVersion}`,
    COMMIT: git.long(),
  },

  /** @param {import('webpack').Configuration} config */
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
