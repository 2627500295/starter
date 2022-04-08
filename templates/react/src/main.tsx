import { createRoot } from "react-dom/client";

import { App } from "./containers/App";

import reportWebVitals from "./reportWebVitals";

import "./assets/styles/index.scss";

const container = document.querySelector("#root")!;

// ReactDOM.render is no longer supported in React 18. Use createRoot instead.
// Until you switch to the new API, your app will behave as if it's running React 17.
// Learn more: https://reactjs.org/link/switch-to-createroot
createRoot(container).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
