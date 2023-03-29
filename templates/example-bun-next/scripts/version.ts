import { valid, coerce } from "semver";

/**
 * parse Version
 * @param {string} version
 * @returns
 */
export const parseVersion = (version) => valid(coerce(version));
