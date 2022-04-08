import { createModel } from "@rematch/core";

import delay from "delay";

import type { RootModel } from "./index";

const initialState: number = 0;

export const counter = createModel<RootModel>()({
  state: initialState,
  reducers: {
    increment(state: number, payload: number) {
      return state + payload;
    },
  },
  effects(dispatch) {
    return {
      async incrementAsync(payload: number): Promise<void> {
        await delay(500);
        dispatch.counter.increment(payload);
      },
    };
  },
});
