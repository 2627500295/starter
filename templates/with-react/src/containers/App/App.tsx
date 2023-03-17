import { StrictMode } from "react";

import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Helmet } from 'react-helmet';

import { store } from "../../store";

import { routes } from "../../routes";

export function App() {
  return (
    <StrictMode>
      <Helmet defaultTitle="个人简历" titleTemplate="%s的个人简历" />

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
