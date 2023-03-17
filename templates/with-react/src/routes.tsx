import { RouteObject } from "react-router-dom";

import { Home } from './views/Home';

export interface IRouteObject extends RouteObject {
  name?: string;
  auth?: boolean;
}

export const routes: IRouteObject[] = [
  { path: '/', element: <Home />, index: true },
];
