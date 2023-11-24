import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-extraneous-dependencies
import Snowfall from "react-snowfall";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CardQuestion from "./components/CardQuestion/CardQuestion";
import WrapComponent from "./components/WrapComponent/WrapComponent";
import { ThemeProvider } from "./components/contexts/ThemeContext";

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
    <ThemeProvider>
      <WrapComponent>
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
          snowflakeCount={600}
        />
        <RouterProvider router={router} />
      </WrapComponent>
    </ThemeProvider>
    <Snowfall />
  </React.StrictMode>
);
