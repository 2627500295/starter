import type { ExecSyncOptions } from "node:child_process";

/**
 * Sync exec
 * @param {string} command
 * @param {import('child_process').ExecSyncOptions} [options]
 * @returns
 */
export function execSync(command: string, options: ExecSyncOptions) {
  return require("child_process").execSync(command, options); // eslint-disable-line @typescript-eslint/no-var-requires
}

/**
 * Get git commit ID
 *
 * @example
 *
 * ```
 * git log -1 --pretty=format:%h
 * ```
 *
 * or
 *
 * ```
 * git rev-parse --short HEAD
 * ```
 *
 * @returns
 */
export function long(): string {
  return execSync("git rev-parse HEAD", { encoding: "utf-8" });
}

/**
 * Get git commit short ID
 *
 * @example
 *
 * ```
 * git log -1 --pretty=format:%h
 * ```
 *
 * or
 *
 * ```
 * git rev-parse --short HEAD
 * ```
 *
 * @returns
 */
export function short(): string {
  return execSync("git rev-parse --short HEAD", { encoding: "utf-8" });
}

/**
 * Get git commit date
 *
 * @example
 *
 * ```
 * git log -1 --pretty='%cD'
 * ```
 *
 * or
 *
 * ```
 * git show --pretty=format:%cD -s HEAD
 * ```
 *
 * @returns
 */
export function date(): string {
  return execSync("git log -1 --pretty='%cD'", { encoding: "utf-8" });
}

/**
 * Get git commit message
 *
 * @example
 *
 * ```
 * git log -1 --pretty='%s'
 * ```
 *
 * or
 *
 * ```
 * git show --pretty=format:%s -s HEAD
 * ```
 *
 * @returns
 */
export function message(): string {
  return execSync("git log -1 --pretty='%s'", { encoding: "utf-8" });
}
