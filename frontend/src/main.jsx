import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-extraneous-dependencies
// import Snowfall from "react-snowfall";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CardQuestion from "./components/CardQuestion/CardQuestion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/question/:id",
    element: <CardQuestion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Snowfall /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
