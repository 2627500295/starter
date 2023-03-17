import { Middleware, StoreEnhancer } from "redux";

import { createLogger } from "redux-logger";

import { init, RematchDispatch, RematchRootState, ModelReducers } from "@rematch/core";

import select from "@rematch/select";

import loading, { ExtraModelsFromLoading } from "@rematch/loading";

import updated, { ExtraModelsFromUpdated } from "@rematch/updated";

import persist from "@rematch/persist";

import storage from "redux-persist/lib/storage";

import { models, RootModel } from "./models";

function createStore<TRootState>(
  initialState?: TRootState,
  reducers: ModelReducers<TRootState> = {},
  enhancers: StoreEnhancer[] = []
) {
  const middlewares: Middleware[] = [];

  if (process.env.BUILD_ENV !== "online") {
    middlewares.push(createLogger({ collapsed: true }));
  }

  return init<
    RootModel,
    ExtraModelsFromLoading<RootModel> & ExtraModelsFromUpdated<RootModel>
  >({
    models,
    plugins: [
      updated(),
      loading(),
      persist({
        key: "persist-storage",
        storage,
        whitelist: [],
      }),
      select(),
    ],
    redux: {
      initialState,
      middlewares,
      reducers,
      enhancers
    },
  });
}

export const store = createStore();

export type Store = typeof store;

export type Dispatch = RematchDispatch<RootModel>;

export type RootState = RematchRootState<RootModel>;
