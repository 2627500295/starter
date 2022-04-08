import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";

import onDemandImport from "vite-plugin-imp";

import legacy from "@vitejs/plugin-legacy";

import { getClientEnvironment } from "./scripts/env";

import interpolate from "@minicdn/vitejs-plugins-interpolate-html";

import {
  ArcoDesignReactResolver,
  LodashResolver,
} from "./scripts/lib-resolver";

const { raw, define } = getClientEnvironment("/");

// https://vitejs.dev/config/
export default defineConfig({
  // Define
  define,

  // Plugin
  plugins: [
    // React
    react(),

    // Legacy Mode
    legacy({
      targets: ["defaults", "not IE 11"],
    }),

    // 按需引入
    onDemandImport({
      libList: [ArcoDesignReactResolver, LodashResolver],
    }),

    interpolate(raw),
  ],

  // Dev Server
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },

  // 解析
  resolve: {
    // 别名
    alias: {},

    // 扩展
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },

  // 环境前缀
  envPrefix: [
    "REACT_APP_",
    "VITE_APP_",
    "APP_",
    "APPLICATION_",
    "BUILD_ENV",
    "NODE_ENV",
    "WEB_APP_",
  ],
});
