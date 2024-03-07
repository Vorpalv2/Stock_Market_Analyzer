import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Try } from "./components/Try.tsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/try",
    element: <Try />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
