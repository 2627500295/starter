import {pipe, pathOr, split, filter} from "ramda";

export function get<T>(obj: any, keyPath: string = '', defaultValue?: T) {
  return pathOr(
    defaultValue,
    pipe(split(/[[\].]/), filter(Boolean))(keyPath),
    obj
  );
}