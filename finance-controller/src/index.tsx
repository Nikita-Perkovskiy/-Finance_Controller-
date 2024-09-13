import React from "react";
import ReactDOM from "react-dom/client";
import Helmet from "react-helmet";
import { PageRoute } from "./PageRoute/PageRoute.tsx";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet title="Finance Controller" />
    <PageRoute />
  </React.StrictMode>
);
